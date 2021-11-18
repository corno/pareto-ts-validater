import * as pr from "pareto-runtime"

import * as path from "path"
import { readGitWorkspace } from "./readGitWorkspace"


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
    | ["files", {
        "extensions": string[]
        recursive: boolean
    }]
    | ["directories", {

    }]
}

type Node =
    | ["file", {}]
    | ["type directory", TypeDirectory]
    | ["dictionary directory", DD]

type Pointer = {
    pos: number
    path: string[]
}


function increment(
    pointer: Pointer,
): Pointer {
    return {
        pos: pointer.pos + 1,
        path: pointer.path,
    }
}

function expectDirectory(
    pointer: Pointer,
    onDirectory: (
        pointer: Pointer
    ) => void,
    onError: (message: string) => void,
) {
    if (pointer.path.length === pointer.pos + 1) {
        onError(`did not expect a file at this place: ${pointer.path.join(path.sep)}`)
    } else {
        onDirectory(
            increment(pointer)
        )
    }
}

function expectFile(
    $: Pointer,
    onFile: (
        fileName: string,
    ) => void,
    onError: (message: string) => void,
) {
    if ($.path.length !== $.pos + 1) {
        onError(`did not expect a directory at this place: ${$.path.splice(0, $.pos + 1).join(path.sep)}`)
    } else {
        onFile($.path[$.pos])
    }
}

function expectFileOrDirectory(
    $: Pointer,
    onFile: (
        fileName: string,
    ) => void,
    onDirectory: (
        pointer: Pointer
    ) => void,
) {
    if ($.path.length !== $.pos + 1) {
        onDirectory(increment($))
    } else {
        onFile($.path[$.pos])
    }
}

function doTypeDirectory(
    def: TypeDirectory,
    $: Pointer,
    onError: (message: string) => void,
) {
    if ($.path[$.pos] === undefined) {
        throw new Error("Unexpected; missing path")
    }
    const step = $.path[$.pos]
    if (def[step] === undefined) {
        onError(`unexpected file: ${$.path.join(path.sep)}`)
    } else {
        const childDef = def[step]
        switch (childDef[0]) {
            case "dictionary directory":
                pr.cc(childDef[1], ($d) => {
                    expectDirectory(
                        $,
                        ($) => {
                            switch ($d.type[0]) {
                                case "directories":
                                    pr.cc($d.type[1], ($d) => {
                                        expectDirectory(
                                            $,
                                            ($) => {
                                                console.log("!!! directories")

                                            },
                                            onError,
                                        )
                                    })
                                    break
                                case "files":
                                    pr.cc($d.type[1], ($d) => {
                                        if ($d.recursive) {
                                            expectFileOrDirectory(
                                                $,
                                                ($) => {
                                                    //file
                                                },
                                                ($) => {
                                                    //dir
                                                },
                                            )
                                        } else {
                                            expectFile(
                                                $,
                                                ($) => {
                                                    console.log("!!! files")
    
                                                },
                                                onError,
                                            )
                                        }
                                    })
                                    break
                                default:
                                    pr.au($d.type[0])
                            }
                        },
                        onError
                    )
                })
                break
            case "file":
                pr.cc(childDef[1], ($d) => {
                    expectFile(
                        $,
                        ($) => {
                            console.log("!!! file")
                        },
                        onError
                    )
                })
                break
            case "type directory":
                pr.cc(childDef[1], ($d) => {
                    expectDirectory(
                        $,
                        ($) => {
                            console.log("!!! type dir")
                        },
                        onError
                    )
                })
                break
            default:
                pr.au(childDef[0])
        }
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
            const expected: TypeDirectory = {
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
                        "extensions": ["astn"],
                        "recursive": true,
                    }],
                }],
                "package-lock.json": ["file", {}],
                "package.json": ["file", {}],
                "README.md": ["file", {}],
                "src": ["dictionary directory", {
                    "type": ["directories", {
                    }],
                }],
                // "src": ["dictionary directory", ["type directory", {
                //     "interfaces": ["type directory", {}],
                //     "implementations": ["type directory", {}],
                //     "bin": ["dictionary directory", ["file", {}]],
                //     "esc": ["type directory", {}],
                // }]],
                "tmp": ["dictionary directory", {
                    "type": ["files", {
                        "extensions": ["astn", "csv"],
                        "recursive": false,
                    }],
                }],
                "tsconfig.json": ["file", {}],
            }
            doTypeDirectory(
                expected,
                {
                    pos: 0,
                    path: splittedPath,
                },
                ($) => {
                    console.error(`${$repoPath}: ${$}`)
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