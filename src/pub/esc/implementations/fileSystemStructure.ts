import * as pr from "pareto-runtime"

import * as pth from "path"
import { IFileSystemContext } from "../interfaces/IFileSystemContext"
import { Node } from "../interfaces/fileSystemStructure"

export type Result = {
    path: string
    error: null | string
}

export function doNode2(
    $: IFileSystemContext | null,
    $d: Node,
    path: string,
    onFile: ($: Result) => void
) {
    function onFile2(
        path: string,
        error: null | string,
    ) {
        onFile({
            path: path,
            error: error,
        })
    }
    switch ($d[0]) {
        case "dictionary directory":
            pr.cc($d[1], ($d) => {
                if ($ === null) {
                    onFile2(
                        path + "#",
                        `expected this to be a directory`,
                    )
                } else {

                    switch ($d.type[0]) {
                        case "directories":
                            pr.cc($d.type[1], ($d) => {
                                $.expectDirectory(
                                    ($, name2) => {
                                        //console.error(`DICT2: ${name1} ${name2}`)
                                        doNode2(
                                            $,
                                            $d.node,
                                            path + "/*",
                                            onFile,
                                        )
                                    },
                                )
                            })
                            break
                        case "files":
                            pr.cc($d.type[1], ($d) => {
                                function handleFile(
                                    path: string,
                                    $: string,
                                ) {
                                    const ext = pth.extname($)
                                    if (ext[0] === ".") {
                                        if (!$d.extensions.includes(ext.substr(1))) {
                                            onFile2(
                                                path + "/*" + ext,
                                                `unexpected extension: ${$}`,
                                            )
                                        } else {
                                            onFile2(
                                                path + "/*" + ext,
                                                null,
                                            )
                                        }
                                    } else {
                                        onFile2(
                                            path + "/*",
                                            `unknown file extension: ${$} ${ext}`,
                                        )
                                    }
                                }
                                if ($d.recursive) {
                                    function doRecursiveFilesDictionary(
                                        $: IFileSystemContext,
                                    ) {
                                        $.expectFileOrDirectory(
                                            (name, $) => {
                                                if ($ === null) {
                                                    handleFile(
                                                        path + "/**",
                                                        name
                                                    )
                                                } else {
                                                    doRecursiveFilesDictionary(
                                                        $,
                                                    )
                                                }
                                            },
                                        )

                                    }
                                    doRecursiveFilesDictionary($)
                                } else {
                                    $.expectFile(
                                        ($) => {
                                            handleFile(
                                                path,
                                                $,
                                            )
                                        },
                                    )
                                }
                            })
                            break
                        default:
                            pr.au($d.type[0])
                    }
                }
            })
            break
        case "file":
            pr.cc($d[1], ($d) => {
                if ($ !== null) {
                    onFile2(
                        path,
                        `expected this to be a file`,
                    )
                } else {
                    onFile2(
                        path,
                        null,
                    )
                }
            })
            break
        case "type directory":
            pr.cc($d[1], ($d) => {
                if ($ === null) {
                    onFile2(
                        path,
                        `expected this to be a directory`,
                    )
                } else {
                    const context = $
                    context.expectFileOrDirectory(
                        (name, $) => {
                            const childDef = $d[name]
                            if (childDef === undefined) {
                                onFile2(
                                    path,
                                    `unexpected file or directory, options: ${Object.keys($d).map(($) => `'${$}'`).join(", ")}`,
                                )
                            } else {
                                doNode2(
                                    $,
                                    childDef,
                                    path + "/" + name,
                                    onFile,
                                )
                            }
                        }
                    )
                }
            })
            break
        default:
            pr.au($d[0])
    }
}