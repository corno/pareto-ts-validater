import * as pr from "pareto-runtime"

import * as pth from "path"
import { IFileSystemContext } from "../interfaces/IFileSystemContext"
import { Node } from "../interfaces/fileSystemStructure"

export function doNode2(
    $: IFileSystemContext | null,
    $d: Node,
    path: string,
    onError: (message: string) => void,
    onFile: (
        path: string,
        correct: boolean,
    ) => void
) {
    switch ($d[0]) {
        case "dictionary directory":
            pr.cc($d[1], ($d) => {
                if ($ === null) {
                    onError(`expected this to be a directory`)
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
                                            onError,
                                            onFile,
                                        )
                                    },
                                )
                            })
                            break
                        case "files":
                            pr.cc($d.type[1], ($d) => {
                                const $fs = $
                                function handleFile(
                                    path: string,
                                    $: string,
                                ) {
                                    const ext = pth.extname($)
                                    if (ext[0] === ".") {
                                        if (!$d.extensions.includes(ext.substr(1))) {
                                            $fs.onError(`unexpected extension: ${$}`)

                                            onFile(path + "/*" + ext, false)
                                        } else {
                                            onFile(path + "/*" + ext, true)
                                        }
                                    } else {
                                        $fs.onError(`missing file extension: ${$} ${ext}`)
                                        onFile(path + "/*", false)
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
                    onError(`expected this to be a file`)
                }
                if ($d.ignore === undefined || $d.ignore === false) {
                    onFile(path, $ === null)
                }
            })
            break
        case "type directory":
            pr.cc($d[1], ($d) => {
                if ($ === null) {
                    onError(`expected this to be a directory`)
                    onFile(path, false)
                } else {
                    const context = $
                    context.expectFileOrDirectory(
                        (name, $) => {
                            const childDef = $d[name]
                            if (childDef === undefined) {
                                context.onError(`unexpected file or directory, options: ${Object.keys($d).map(($) => `'${$}'`).join(", ")}`)
                                onFile(path, false)
                            } else {
                                doNode2(
                                    $,
                                    childDef,
                                    path + "/" + name,
                                    (msg) => {
                                        context.onError(msg)
                                    },
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