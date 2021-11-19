import { IFileSystemContext } from "./IFileSystemContext"

import * as path from "path"


type Pointer = {
    pos: number
    path: string[]
}

export function createFileSystemContext(
    $: Pointer,
    onError: (message: string) => void,
): IFileSystemContext {
    if ($.path[$.pos] === undefined) {
        throw new Error("Unexpected; missing path")
    }
    function getCurrentPath() {
        return $.path.splice(0, $.pos + 1).join(path.sep)
    }
    return {
        onError: (
            message,
        ) => {
            onError(`${getCurrentPath()}: ${message}`)
        },
        expectDirectory: (
            onDirectory,
        ) => {
            if ($.path.length === $.pos + 1) {
                onError(`${getCurrentPath()}: did not expect a file at this place`)
            } else {
                const p = increment($)
                onDirectory(
                    createFileSystemContext(
                        p,
                        onError,
                    ),
                    $.path[$.pos],
                )
            }
        },
        expectFile: (
            onFile,
        ) => {
            if ($.path.length !== $.pos + 1) {
                onError(`${getCurrentPath()}: did not expect a directory at this place`)
            } else {
                onFile($.path[$.pos])
            }
        },

        expectFileOrDirectory: (
            onFileOrDirectory,
        ) => {
            if ($.path.length !== $.pos + 1) {
                const p = increment($)
                onFileOrDirectory(
                    $.path[$.pos],
                    createFileSystemContext(
                        p,
                        onError,
                    ),
                )
            } else {
                onFileOrDirectory(
                    $.path[$.pos],
                    null,
                )
            }
        }
    }
}

function increment(
    pointer: Pointer,
): Pointer {
    return {
        pos: pointer.pos + 1,
        path: pointer.path,
    }
}
