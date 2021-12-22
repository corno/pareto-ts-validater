import * as pr from "pareto-runtime"

import * as pth from "path"
import { Node } from "../interfaces/fileSystemStructure"

export type AnalysisResult = {
    pathPattern: string,
    error: string | null,
}


type PathIterator<T> = {
    // splittedPath: string[],
    // posx: number,
    next(): PathIterator<T>,
    isLast(): boolean,
    getCurrentStepName(): T,
}

function createPathIterator<T>(
    splittedPath: T[]
): PathIterator<T> {
    function create(
        pos: number
    ): PathIterator<T> {
        return {
            next () {
                return create(pos +1)
            },
            isLast() {
                return splittedPath.length === pos + 1
            },
            getCurrentStepName() {
                return splittedPath[pos]
            }
        }
    }
    return create(0)
}

export function analysePath(
    def: Node,
    $filePath: string,
): AnalysisResult {
    function createAnalysisResult(
        path: string,
        error: null | string,
    ): AnalysisResult {
        return {
            pathPattern: path,
            error: error,
        }
    }

    function expectFileOrDirectory(
        pi: PathIterator<string>,
        onFile: (
            name: string,
        ) => AnalysisResult,
        onDirectory: (
            name: string,
            pi: PathIterator<string>,
        ) => AnalysisResult,
    ): AnalysisResult {
        if (pi.isLast()) {
            return onFile(
                pi.getCurrentStepName(),
            )
        } else {
            return onDirectory(
                pi.getCurrentStepName(),
                pi.next(),
            )
        }
    }

    function analyseDictionary(
        pi: PathIterator<string>,
        $d: Node,
        path: string,
    ): AnalysisResult {
        switch ($d[0]) {
            case "dictionary directory":
                return pr.cc($d[1], ($d) => {
                    switch ($d.type[0]) {
                        case "directories":
                            return pr.cc($d.type[1], ($d) => {
                                if (pi.isLast()) {
                                    return createAnalysisResult(
                                        path,
                                        `did not expect a file at this place`
                                    )
                                } else {
                                    return analyseDictionary(
                                        pi.next(),
                                        $d.node,
                                        path + "/*",
                                    )
                                }
                            })
                        case "files":
                            return pr.cc($d.type[1], ($d) => {
                                function handleFile(
                                    path: string,
                                    $: string,
                                ): AnalysisResult {
                                    const ext = pth.extname($)
                                    if (ext[0] === ".") {
                                        if (!$d.extensions.includes(ext.substr(1))) {
                                            return createAnalysisResult(
                                                path + "/*" + ext,
                                                `unexpected extension: ${$}`,
                                            )
                                        } else {
                                            return createAnalysisResult(
                                                path + "/*" + ext,
                                                null,
                                            )
                                        }
                                    } else {
                                        return createAnalysisResult(
                                            path + "/*",
                                            `unknown file extension: ${$} ${ext}`,
                                        )
                                    }
                                }
                                if ($d.recursive) {
                                    function doRecursiveFilesDictionary(
                                        pi: PathIterator<string>,
                                    ): AnalysisResult {
                                        return expectFileOrDirectory(
                                            pi,
                                            (name) => {
                                                return handleFile(
                                                    path + "/**",
                                                    name
                                                )
                                            },
                                            (name, pos) => {
                                                if (pos === null) {
                                                    return handleFile(
                                                        path + "/**",
                                                        name
                                                    )
                                                } else {
                                                    return doRecursiveFilesDictionary(
                                                        pos,
                                                    )
                                                }
                                            },
                                        )

                                    }
                                    return doRecursiveFilesDictionary(pi)
                                } else {
                                    if (pi.isLast()) {
                                        return handleFile(
                                            path,
                                            pi.getCurrentStepName(),
                                        )
                                    } else {
                                        return createAnalysisResult(
                                            path,
                                            `did not expect a dictionary at this place`
                                        )
                                    }
                                }
                            })
                        default:
                            return pr.au($d.type[0])
                    }
                })
            case "file":
                return pr.cc($d[1], ($d) => {
                    return createAnalysisResult(
                        path,
                        `expected this to be a file`,
                    )
                })
            case "type directory":
                return pr.cc($d[1], ($d) => {
                    return expectFileOrDirectory(
                        pi,
                        (name) => {
                            const childDef = $d[name]
                            if (childDef === undefined) {
                                return createAnalysisResult(
                                    path,
                                    `unexpected file or directory, options: ${Object.keys($d).map(($) => `'${$}'`).join(", ")}`,
                                )
                            } else {
                                switch (childDef[0]) {
                                    case "dictionary directory":
                                        return pr.cc(childDef[1], ($) => {
                                            return createAnalysisResult(
                                                path + "/" + name + "#",
                                                `expected this to be a directory`,
                                            )
                                        })
                                    case "file":
                                        return pr.cc(childDef[1], ($) => {
                                            return createAnalysisResult(
                                                path + "/" + name,
                                                null,
                                            )
                                        })
                                    case "type directory":
                                        return pr.cc(childDef[1], ($d) => {
                                            return createAnalysisResult(
                                                path + "/" + name,
                                                `expected this to be a directory`,
                                            )
                                        })
                                    default:
                                        return pr.au(childDef[0])
                                }
                            }
                        },
                        (name, $) => {
                            const childDef = $d[name]
                            if (childDef === undefined) {
                                return createAnalysisResult(
                                    path,
                                    `unexpected file or directory, options: ${Object.keys($d).map(($) => `'${$}'`).join(", ")}`,
                                )
                            } else {
                                return analyseDictionary(
                                    $,
                                    childDef,
                                    path + "/" + name,
                                )
                            }
                        },
                    )
                })
            default:
                return pr.au($d[0])
        }
    }
    return analyseDictionary(
        createPathIterator(
            pth.normalize($filePath).split(pth.sep)
        ),
        def,
        "",
    )
}
