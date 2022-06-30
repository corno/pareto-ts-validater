import * as pf from "pareto-filesystem"
import * as pl from "pareto-lang-lib"
import * as pa from "pareto-lang-api"
import * as pr from "pareto-runtime"
import * as https from "https"
import * as cp from "child_process"
import { Dependencies, Dependency, ProjectStatusOverview, Project, ReferencedProject, Part } from "./types"
import { LocalPart, LocalProject } from "./types2"

import * as fs from "fs"

type Async<T> = {
    execute: (
        callback: (v: T) => void
    ) => void
}

function createDirReader<T>(
    path: string,
    callback: (files: string[]) => null | Async<T[]>,
    onEnd: () => void
): Async<T[]> {
    return {
        execute: () => {
            fs.readdir(
                path,
                (err, files) => {
                    if (err !== null) {

                    } else {
                        callback(files)
                    }
                }
            )
        }
    }
}

function foo() {
    createDirReader<string>(
        "a/b/c",
        (files) => {
            return null
        },
        () => {

        },
    ).execute(
        () => {
            
        }
    )
}

function topologicalSort<T>(
    dictionary: pa.IReadonlyDictionary<T>,
    callback: (
        element: T,
        add: (dependencyName: string) => void,
    ) => void
) {
    const sorted: { key: string, value: T }[] = []
    const alreadyProcessed: string[] = []
    function inner(
        key: string
    ) {
        //console.log("\t!!", key)
        if (alreadyProcessed.indexOf(key) !== -1) {
            //console.log("\t\tdone")

        } else {
            //console.log("\t\tprocessing")
            alreadyProcessed.push(key)
            dictionary.getLookup().with(
                key,
                (x) => {
                    callback(
                        x,
                        (key) => {
                            inner(key)
                        }
                    )
                    sorted.push({
                        key: key,
                        value: x,
                    })

                },
                (y) => {

                }
            )
        }
    }
    dictionary.forEach(($, key) => {
        //console.log(">>>", key)
        inner(key)
    })
    return sorted
}

function asyncMap2Tuple<T1, T2>(
    cb1: (onDone: (result: T1) => void) => void,
    cb2: (onDone: (result: T2) => void) => void,
    onDone: (res: { first: T1, second: T2 }) => void
) {
    let res1: null | T1 = null
    let res2: null | T2 = null
    function wrapup() {
        if (res1 !== null && res2 !== null) {
            onDone({ first: res1, second: res2 })
        }
    }
    cb1((val) => {
        res1 = val
        wrapup()
    })
    cb2((val) => {
        res2 = val
        wrapup()
    })
}

function asyncMap3Tuple<T1, T2, T3>(
    cb1: (onDone: (result: T1) => void) => void,
    cb2: (onDone: (result: T2) => void) => void,
    cb3: (onDone: (result: T3) => void) => void,
    onDone: (res: { first: T1, second: T2, third: T3 }) => void
) {
    let res1: null | T1 = null
    let res2: null | T2 = null
    let res3: null | T3 = null
    function wrapup() {
        if (res1 !== null && res2 !== null && res3 !== null) {
            onDone({ first: res1, second: res2, third: res3 })
        }
    }
    cb1((val) => {
        res1 = val
        wrapup()
    })
    cb2((val) => {
        res2 = val
        wrapup()
    })
    cb3((val) => {
        res3 = val
        wrapup()
    })
}

function asyncMapDictionary<T, TN>(
    dict: pa.IReadonlyDictionary<T>,
    callback: (
        $: {
            value: T,
            key: string,
            counter: pf.ICounter,
            add: (v: TN) => void
        }
    ) => void,
    onDone: (v: pa.IReadonlyDictionary<TN>) => void
) {
    const builder = pl.createDictionaryBuilder<TN>()
    pf.createCounter(
        ($) => {
            dict.forEach((elem, key) => {
                callback({
                    value: elem,
                    key: key,
                    counter: $,
                    add: (v) => {
                        builder.add(key, v)
                    },
                })

            })
        },
        () => {
            onDone(builder.toDictionary())
        }
    )
}

function doHTTPS(
    hostname: string,
    path: string,
    onData: (data: string) => void,
    onError: (e: Error) => void,
    onEnd: () => void,
) {

    const options = {
        hostname: hostname,
        //port: 443,
        path: path,
        method: 'GET'
    }

    const req = https.request(options, res => {
        //console.log(`statusCode: ${res.statusCode}`)


        res.on('data', d => {
            onData(d)
        })
        res.on('end', () => {
            onEnd()
        })
    })

    req.on('error', error => {
        onError(error)
    })

    req.end()
}

function versionIsEqual(linkedVersion: string, latestVersion: string) {
    return linkedVersion === `^${latestVersion}`
}

function getRegistry(
    packageName: string,
    counter: pf.ICounter,
    callback: (json: any | null) => void,
) {
    let data = ""

    counter.increment({})
    doHTTPS(
        'registry.npmjs.org',
        `/${packageName}`,
        (d) => {
            data += d
        },
        (err) => {
            callback(null)
            counter.decrement({})
        },
        () => {
            const json = pr.JSONparse(data)
            callback(json)
            counter.decrement({})
        }
    )
}

function mapDictionary<T, NT>(
    dict: pa.IReadonlyDictionary<T>,
    callback: (v: T, key: string) => NT
) {
    const newDictBuilder = pl.createDictionaryBuilder<NT>()
    dict.forEach(($, key) => {
        newDictBuilder.add(key, callback($, key))
    })
    return newDictBuilder.toDictionary()
}

export function getData(
    rootDirectory: string,
    callback: ($: ProjectStatusOverview) => void
) {

    const projectsBuilder = pl.createDictionaryBuilder<LocalProject>()
    pf.wrapDirectory({
        rootDirectory: rootDirectory,
    },
        {
            callback: ($) => {
                $.readDirWithFileTypes(
                    {
                        path: "",
                        idStyle: ["name only", {}]
                    },
                    {
                        callbacks: {
                            directory: ($d, $i) => {
                                $i.wrapAsync(
                                    {
                                        callback: ($$) => {
                                            cp.exec(
                                                `git -C ${$d.id} diff`,
                                                (err, cleanstdout, stderr) => {
                                                    if (err !== null) {
                                                        console.log("GIT DIFF", $d.id, stderr)
                                                        $$.onDone()
                                                    } else {



                                                        const pb = pl.createDictionaryBuilder<null>()
                                                        const sourceDirs = ["dev", "bin", "api", "lib", "test", "pareto"]
                                                        sourceDirs.forEach($ => {
                                                            pb.add($, null)
                                                        })
                                                        asyncMapDictionary<null, LocalPart | null>(
                                                            pb.toDictionary(),
                                                            ($) => {
                                                                console.log(`${$d.id}-${$.key}`)
                                                                $.counter.increment({})
                                                                // $i.readFile(
                                                                //     `${$}/package.json`,
                                                                //     {
                                                                //         callback: ($d) => {
                                                                //             const packageData = pr.JSONparse($d)
                                                                //             const contentFingerprint = packageData["content-fingerprint"]
                                                                //             $.add({
                                                                //                 isPublic: ["bin", "api", "lib"].indexOf($.key) !== -1,
                                                                //                 publishData: packageData.version === undefined || packageData.name === undefined
                                                                //                     ? null
                                                                //                     : {
                                                                //                         version: packageData.version,
                                                                //                         name: packageData.name,
                                                                //                         contentFingerprint: contentFingerprint === undefined ? null : contentFingerprint,
                                                                //                     },
                                                                //                 dependencies: packageData.dependencies === undefined
                                                                //                     ? pr.createDictionaryBuilder<string>().toDictionary()
                                                                //                     : (() => {
                                                                //                         const depBuilder = pr.createDictionaryBuilder<string>()
                                                                //                         pr.Objectkeys(packageData.dependencies).forEach(key => {
                                                                //                             let data = ""
                                                                //                             depBuilder.add(key, packageData.dependencies[key])
                                                                //                         })
                                                                //                         return depBuilder.toDictionary()
                                                                //                     })(),
                                                                //                 devDependencies: packageData.devDependencies === undefined
                                                                //                     ? pr.createDictionaryBuilder<string>().toDictionary()
                                                                //                     : (() => {
                                                                //                         const depBuilder = pr.createDictionaryBuilder<string>()
                                                                //                         pr.Objectkeys(packageData.devDependencies).forEach(key => {
                                                                //                             let data = ""
                                                                //                             depBuilder.add(key, packageData.devDependencies[key])
                                                                //                         })
                                                                //                         return depBuilder.toDictionary()
                                                                //                     })(),
                                                                //             })
                                                                //             $.counter.decrement({})
                                                                //         },
                                                                //         onNotExists: () => {
                                                                //             $.counter.decrement({})
                                                                //             $.add(null)
                                                                //         },

                                                                //     }
                                                                // )

                                                            },
                                                            ($) => {
                                                                projectsBuilder.add($d.id, {
                                                                    parts: $,
                                                                    gitClean: cleanstdout.trimEnd() === "",
                                                                })
                                                                $$.onDone()
                                                            }
                                                        )
                                                    }
                                                }
                                            )
                                        },
                                    }
                                )
                            }
                        },
                        onEnd: () => {
                        }
                    }
                )
            },
            onError: ($) => {
                console.error(pf.createFSErrorMessage($))
            },
            onEnd: () => {

                const depPackagesBuilder = pl.createDictionaryBuilder<null>()

                const localProjects = projectsBuilder.toDictionary()

                localProjects.forEach(($) => {
                    $.parts.forEach(($) => {
                        if ($ !== null) {
                            $.dependencies.forEach(($, depName) => {
                                // if (depPackageNames.indexOf(depName) === -1) {
                                //     depPackageNames.push(depName)
                                // }

                                //WARNING: what happens when key is not unique
                                depPackagesBuilder.add(depName, null)
                            })
                            $.devDependencies.forEach(($, depName) => {
                                // if (depPackageNames.indexOf(depName) === -1) {
                                //     depPackageNames.push(depName)
                                // }

                                //WARNING: what happens when key is not unique
                                depPackagesBuilder.add(depName, null)
                            })
                        }
                    })
                })

                asyncMapDictionary<null, ReferencedProject>(
                    depPackagesBuilder.toDictionary(),
                    ($x) => {
                        getRegistry(
                            $x.key,
                            $x.counter,
                            (json) => {
                                if (json !== null) {
                                    $x.add({ latestVersion: json["dist-tags"].latest })
                                }
                            },
                        )
                    },
                    (referencedProjects) => {
                        asyncMapDictionary<LocalProject, Project>(
                            localProjects,
                            ($x) => {
                                const projectName = $x.key

                                $x.counter.increment({})

                                asyncMapDictionary<LocalPart | null, Part>(
                                    $x.value.parts,
                                    ($x) => {
                                        const $ = $x.value
                                        const partName = $x.key

                                        if ($ !== null) {
                                            let allInSync = true
                                            const createDeps = (
                                                source: pa.IReadonlyDictionary<string>,
                                            ) => {
                                                return mapDictionary<string, Dependency>(
                                                    source,
                                                    (v, key) => {
                                                        referencedProjects.getLookup().getUnsafe(key).latestVersion
                                                        const equal = versionIsEqual(v, referencedProjects.getLookup().getUnsafe(key).latestVersion)
                                                        if (!equal) { allInSync = false }
                                                        return {
                                                            versionX: v,
                                                            isEqual: equal
                                                        }
                                                    }
                                                )
                                            }

                                            const deps: Dependencies = {
                                                dependencies: createDeps($.dependencies),
                                                devDependencies: createDeps($.devDependencies),
                                                allDepsInSync: allInSync,
                                            }

                                            if (!$.isPublic) {
                                                $x.add({
                                                    type: ["local", {}],
                                                    deps: deps,
                                                    isClean: allInSync,
                                                })
                                            } else {
                                                if ($.publishData === null) {
                                                    $x.add({
                                                        type: ["public", {
                                                            status: ["unpublishable", {}]
                                                        }],
                                                        deps: deps,
                                                        isClean: allInSync,
                                                    })
                                                } else {
                                                    const pubData = $.publishData

                                                    getRegistry(
                                                        $.publishData.name,
                                                        $x.counter,
                                                        (json) => {
                                                            if (json === null) {
                                                                //console.log(`>>>> ${$x.key} ${partName}`)
                                                                $x.add({
                                                                    type: ["public", {
                                                                        status: ["publishable", {
                                                                            version: pubData.version,
                                                                            name: pubData.name,
                                                                            currentContentFingerprint: pubData.contentFingerprint,
                                                                            publishedVersion: ["missing", {}],
                                                                        }]
                                                                    }],
                                                                    // type: ["publishable", {
                                                                    //     currentContentFingerprint: currentContentFingerprint,
                                                                    //     publicVersion: ["missing", {}]
                                                                    // }],
                                                                    deps: deps,
                                                                    isClean: false,
                                                                })
                                                            } else {
                                                                if (json["dist-tags"] === undefined) {
                                                                    throw new Error(`no dist-tags, ${$x.key}`)
                                                                }
                                                                const latest = json["dist-tags"].latest
                                                                if (latest === undefined) {
                                                                    throw new Error(`no latest, ${$x.key}`)
                                                                }
                                                                const publishedContentFingerprint: string = json["versions"][latest]["content-fingerprint"]
                                                                if (publishedContentFingerprint === undefined) {
                                                                    console.error(`${projectName}-${partName}: missing published fingerprint`)
                                                                }
                                                                $x.add({
                                                                    //required: partName === "pub" || partName === "test",
                                                                    type: ["public", {
                                                                        status: ["publishable", {
                                                                            version: pubData.version,
                                                                            name: pubData.name,
                                                                            currentContentFingerprint: pubData.contentFingerprint,
                                                                            publishedVersion: ["found", {
                                                                                latestVersion: latest,
                                                                                contentFingerprint: publishedContentFingerprint === undefined ? null : publishedContentFingerprint,
                                                                            }],
                                                                        }]
                                                                    }],
                                                                    // type: ["publishable", {
                                                                    //     currentContentFingerprint: currentContentFingerprint,
                                                                    //     publicVersion: ["found", {
                                                                    //         latestVersion: latest,
                                                                    //         contentFingerprint: publishedContentFingerprint === undefined ? null : publishedContentFingerprint,
                                                                    //         //shaKeysEqual: shaKey === sha
                                                                    //     }]
                                                                    // }],
                                                                    deps: deps,
                                                                    //isClean: shaKey === sha && allInSync,
                                                                    isClean: allInSync && pubData.contentFingerprint !== null && publishedContentFingerprint !== null && pubData.contentFingerprint === publishedContentFingerprint,
                                                                })

                                                            }
                                                        },
                                                    )
                                                }
                                            }
                                        }

                                    },
                                    (parts) => {
                                        let partsClean = true
                                        parts.forEach(
                                            ($) => {
                                                if (!$.isClean) {
                                                    partsClean = false
                                                }

                                            },
                                        )
                                        $x.add({
                                            gitClean: $x.value.gitClean,
                                            parts: parts,
                                            isClean: partsClean && $x.value.gitClean,
                                        })
                                        $x.counter.decrement({})

                                    }
                                )
                            },
                            (projects) => {
                                console.log("TOPSORT")
                                topologicalSort(
                                    projects,
                                    (elem, add) => {
                                        elem.parts.forEach(($, key) => {
                                            if ($ !== null && (key === "api" || key === "lib" || key === "bin")) {
                                                $.deps.dependencies.forEach(($, key) => {
                                                    add(key)
                                                })
                                            }
                                        })
                                    }
                                ).forEach(($) => {
                                    console.log($.key)
                                })
                                const depOverview: ProjectStatusOverview = {
                                    referencedProjects: referencedProjects,
                                    projects: projects,
                                }
                                callback(depOverview)
                            }
                        )

                    }
                )
            },
        }
    )
}
