import * as pr from "pareto-runtime"

import * as path from "path"
import { readGitWorkspace } from "./readGitWorkspace"
import { createFileSystemContext } from "./createFileSystemContext"
import { IFileSystemContext } from "./IFileSystemContext"


const knownFiles: { [key: string]: {} } = {
    ".gitignore": {},
    ".npmignore": {},
    ".eslintrc.js": {},
    "package.json": {},
    "package-lock.json": {},
    "tsconfig.json": {},
    "schemaschema@0.1": {},
    "schema@0.1": {},
}

const knownExtensions: { [key: string]: {} } = {
    ".astn": {},
    ".astn-schema": {},
    ".js": {},
    ".json": {},
    ".md": {},
    ".mjs": {},
    ".rr": {},
    ".sh": {},
    ".test": {},
    ".ts": {},
    ".ts_": {},
    ".txt": {},
    ".yml": {}
}

type TypeDirectory = { [key: string]: Node }

type DD = {
    "type":
    | ["files", FilesDictionary]
    | ["directories", {
        node: Node
    }]
}

type FilesDictionary = {
    "extensions": string[]
    recursive: boolean
}

type Node =
    | ["file", {}]
    | ["type directory", TypeDirectory]
    | ["dictionary directory", DD]


const expected: Node = ["type directory", {
    "_package.json": ["file", {}],
    ".eslintignore": ["file", {}],
    ".eslintrc.js": ["file", {}],
    ".gitignore": ["file", {}],
    ".vscodeignore": ["file", {}],
    "bin": ["dictionary directory", {
        "type": ["files", {
            "extensions": ["mjs"],
            "recursive": false,
        }],
    }],
    "data": ["dictionary directory", {
        "type": ["files", {
            "extensions": [
                "astn",
                "astn-schema",
                "html",
                "json",
                "test",
            ],
            "recursive": true,
        }],
    }],
    "package-lock.json": ["file", {}],
    "package.json": ["file", {}],
    "README.md": ["file", {}],
    "src": ["dictionary directory", {
        "type": ["directories", {
            "node": ["type directory", {
                "esc": ["dictionary directory", {
                    "type": ["files", {
                        "extensions": ["ts"],
                        "recursive": true,
                    }]
                }]
            }]
        }],
    }],
    // "src": ["dictionary directory", ["type directory", {
    //     "interfaces": ["type directory", {}],
    //     "implementations": ["type directory", {}],
    //     "bin": ["dictionary directory", ["file", {}]],
    //     "esc": ["type directory", {}],
    // }]],

    //don't allow tmp
    // "tmp": ["dictionary directory", {
    //     "type": ["files", {
    //         "extensions": [
    //             "astn",
    //             "csv",
    //             "txt",
    //         ],
    //         "recursive": false,
    //     }],
    // }],
    "tsconfig.json": ["file", {}],
}]

function doNode2(
    $: IFileSystemContext | null,
    $d: Node,
    onError: (message: string) => void,
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
                                            onError,
                                        )
                                    },
                                )
                            })
                            break
                        case "files":
                            pr.cc($d.type[1], ($d) => {
                                const $fs = $
                                function validateExtension(
                                    $: string,
                                ) {
                                    const ext = path.extname($)
                                    if (ext[0] === ".") {
                                        if (!$d.extensions.includes(ext.substr(1))) {
                                            $fs.onError(`unexpected extension: ${$}`)
                                        }
                                    } else {
                                        $fs.onError(`missing file extension: ${$} ${ext}`)
                                    }
                                }
                                if ($d.recursive) {
                                    function doRecursiveFilesDictionary(
                                        $: IFileSystemContext,
                                    ) {
                                        $.expectFileOrDirectory(
                                            (name, $) => {
                                                if ($ === null) {
                                                    validateExtension(name)
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
                                            validateExtension($)
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
                //nothing else to do
            })
            break
        case "type directory":
            pr.cc($d[1], ($d) => {
                if ($ === null) {
                    onError(`expected this to be a directory`)
                } else {
                    const context = $
                    context.expectFileOrDirectory(
                        (name, $) => {
                            const childDef = $d[name]
                            if (childDef === undefined) {
                                context.onError(`unexpected file or directory, options: ${Object.keys($d).map(($) => `'${$}'`).join(", ")}`)
                            } else {
                                doNode2(
                                    $,
                                    childDef,
                                    (msg) => {
                                        context.onError(msg)
                                    }
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


readGitWorkspace(
    {
        directoryPath: ".."
    },
    {
        onError: ($) => {
            console.error($)
        },
        fileCallback: (
            $repoPath,
            $filePath,
            $content,
        ) => {
            const splittedPath = path.normalize($filePath).split(path.sep)

            const step = createFileSystemContext(
                {
                    pos: 0,
                    path: splittedPath,
                },
                ($) => {
                    console.error(`${$repoPath}: ${$}`)
                },
            )
            doNode2(
                step,
                expected,
                (msg) => {
                    console.error(`${$repoPath}: ${msg}`)
                }
            )
        }
    }
)

console.log(`date,repository,directory,basename,extension,category,lines,generated`)
readGitWorkspace(
    {
        directoryPath: ".."
    },
    {
        onError: ($) => {
            console.error($)
        },
        fileCallback: (
            $repoPath,
            $filePath,
            $content,
        ) => {
            function getCategory(): string {

                if (knownFiles[path.basename($filePath)] !== undefined) {
                    return path.basename($filePath)
                }
                if (knownExtensions[path.extname($filePath)] !== undefined) {
                    return path.extname($filePath)
                }
                return "????"
            }

            function getLineCount(): number {
                let lineCount = 1 //there's always 1 line
                for (let i = 0; i !== $content.length; i += 1) {
                    if ($content[i] === "\n") {
                        lineCount += 1
                    }
                }
                return lineCount
            }
            console.log(`${new Date().toISOString().split('T')[0]},${$repoPath},${path.dirname($filePath) === "." ? "" : path.dirname($filePath)},${path.basename($filePath)},${path.extname($filePath)},${getCategory()},${getLineCount()},${$filePath.indexOf(".generated") === -1 ? "" : "generated"}`)
        }
    }
)