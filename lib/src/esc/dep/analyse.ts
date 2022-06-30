import * as pl from "pareto-lang-lib"
import * as pr from "pareto-runtime"
import { getData } from "./getData"

const red = "\x1b[31m"
const green = "\x1b[32m"
const yellow = "\x1b[33m"
const cyan = "\x1b[36m"
const reset = "\x1b[0m"

pr.runProgram(
    (programData) => {
        if (programData.argument === undefined) {
            throw new Error("missing dataDir")
        }
        getData(
            programData.argument,
            (statusOverview) => {

                //local project overview
                console.log(``)
                console.log(`local project overview`)
                statusOverview.projects.forEach(($, projectName) => {

                    console.log(`\t${projectName} ${$.isClean ? "" : `${red}!! ${reset}`} ${!$.gitClean ? `${red}uncommitted changes${reset}` : ""}`)
                    $.parts.forEach(($, partName) => {
                        //console.log(`$#### ${partName}`)
                        const $2 = $
                        const remark = ((): string => {
                            switch ($2.type[0]) {
                                case "local": {
                                    //const $3 = $2.publishStatus[1]
                                    return ``
                                    // return !$3.shaKeysEqual
                                    //     ? `${red}unpublished commits${reset}`
                                    //     : ``
                                }
                                case "public": {
                                    const $3 = $2.type[1]
                                    switch ($3.status[0]) {
                                        case "publishable":
                                            const $4 = $3.status[1]
                                            const nameIssue = $4.name === `${projectName}-${partName}` ? ``: `${red}invalid name${reset}`
                                            if ($4.publishedVersion[0] === "missing") {
                                                return `${nameIssue}${red}published version not found${reset}`
                                            } else {
                                                if ($4.currentContentFingerprint === null || $4.publishedVersion[1].contentFingerprint !== $4.currentContentFingerprint) {
                                                    return `${nameIssue}${red}fingerprint issue${reset}`
                                                }
                                                return `${nameIssue}`
                                            }
                                        case "unpublishable":
                                            return `${red}unpublishable${reset}`
                                        default: return pl.au($3.status[0])
                                    }
                                }
                                default: return ``
                            }
                            // switch ($2.publishStatus[0]) {
                            //     case "found": {
                            //         const $3 = $2.publishStatus[1]
                            //         return ``
                            //         // return !$3.shaKeysEqual
                            //         //     ? `${red}unpublished commits${reset}`
                            //         //     : ``
                            //     }
                            //     case "missing": {
                            //         return `${red}not published${reset}`
                            //     }
                            //     case "unpublished": {
                            //         return ""
                            //     }
                            // }
                        })()

                        console.log(`\t\t${partName} ${remark}`)
                        $.deps.dependencies.forEach(($, depName) => {

                            statusOverview.referencedProjects.find(
                                depName,
                                ($$) => {
                                    console.log(`\t\t\t${depName} (${!$.isEqual
                                        ? `${red}${$.versionX} <> ${$$.latestVersion}${reset}`
                                        : `${green}${$.versionX}${reset}`
                                        })`)
                                },
                                () => {
                                    throw new Error("!!!!!")
                                }
                            )
                        })

                    })
                })

                //dev dependencies
                console.log(`dev dependencies`)
                statusOverview.projects.forEach(($, projectName) => {
                    console.log(`\t${projectName}`)

                    $.parts.forEach(($, partName) => {
                        console.log(`\t\t${partName}`)

                        $.deps.devDependencies.forEach(($, depName) => {
                            console.log(`\t\t\t${depName} (${$})`)
                        })
                    })
                })

                //outdated deps
                console.log("")
                console.log("outdated:")
                statusOverview.projects.forEach(($, projectName) => {
                    $.parts.forEach(($, partName) => {
                        $.deps.dependencies.forEach(($, depName) => {
                            statusOverview.referencedProjects.find(
                                depName,
                                ($$) => {
                                    if (!$.isEqual) {
                                        console.log(`${projectName}>${depName}: ${$$.latestVersion} <> ${$.versionX}`)
                                    }
                                },
                                () => {
                                    throw new Error("!!!!!")
                                }
                            )
                        })
                    })
                })




                //reversed dependencies
                console.log(``)
                console.log(`reversed dependencies`)
                statusOverview.referencedProjects.forEach(($, refProjectName) => {
                    const lv = $.latestVersion
                    console.log(`\t${refProjectName} (${$.latestVersion})`)
                    statusOverview.projects.forEach(($, projectName) => {

                        $.parts.forEach(($, partName) => {
                            $.deps.dependencies.forEach(($, depName) => {
                                if (depName === refProjectName) {
                                    console.log(`\t\t\t${projectName} (${partName}, (${!$.isEqual ? red : green}${$.versionX}${reset})`)
                                }
                            })
                        })
                    })
                })


                //digraph
                console.log(``)
                console.log(`digraph G {`)
                let i = 0
                statusOverview.projects.forEach(($, projectName) => {
                    const isClean = $.isClean
                    console.log(`\tsubgraph cluster_${i} {`)
                    i += 1
                    $.parts.forEach(($, partName) => {
                        if (partName === "lib" || partName === "api" || partName === "bin")
                            console.log(`\t\t"${projectName}-${partName}" [ color="${!isClean ? `red` : `green`}"${partName === "api" ? `, style="filled"` : ""} ]`)

                    })
                    console.log(`\t}`)
                })
                console.log(``)
                statusOverview.projects.forEach(($, projectName) => {
                    $.parts.forEach(($, partName) => {
                        if (partName === "lib" || partName === "api" || partName === "bin") {
                            $.deps.dependencies.forEach(($, depName) => {
                                if (depName !== "pareto-runtime") {
                                    console.log(`\t"${projectName}-${partName}" -> "${depName}"`)
                                }
                            })

                        }
                    })
                })
                console.log(`}`)


                console.log("Done!")
            }
        )
    }
)

