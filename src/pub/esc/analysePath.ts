import { IFileSystemContext } from "./interfaces/IFileSystemContext"

import * as pth from "path"
import { doNode2 } from "./implementations/fileSystemStructure"
import { Node } from "./interfaces/fileSystemStructure"

export type PathAnalysis = {
    pathPattern: string,
    correct: boolean,
}

export function analysePath(
    def: Node,
    $filePath: string,
    log2: ($: PathAnalysis) => void,
    onError: (str: string) => void
) {
    const step = createFileSystemContext(
        $filePath,
        onError,
    )
    doNode2(
        step,
        def,
        "",
        ($) => {
            if ($.error !== null) {
                onError($.error)
            }
            log2({
                pathPattern: $.path,
                correct: $.error === null,
            })
        },
    )
}

function createFileSystemContext(
    path: string,
    onError: (message: string) => void,
): IFileSystemContext {
    const splittedPath = pth.normalize(path).split(pth.sep)

    function createFileSystemContext2(
        pos: number,
    ): IFileSystemContext {
        if (splittedPath[pos] === undefined) {
            throw new Error("Unexpected; missing path")
        }
        function getCurrentPath() {
            return splittedPath.splice(0, pos + 1).join(pth.sep)
        }
        return {
            expectDirectory: (
                onDirectory,
            ) => {
                if (splittedPath.length === pos + 1) {
                    onError(`${getCurrentPath()}: did not expect a file at this place`)
                } else {
                    onDirectory(
                        createFileSystemContext2(
                            pos + 1,
                        ),
                        splittedPath[pos],
                    )
                }
            },
            expectFile: (
                onFile,
            ) => {
                if (splittedPath.length !== pos + 1) {
                    onError(`${getCurrentPath()}: did not expect a directory at this place`)
                } else {
                    onFile(splittedPath[pos])
                }
            },

            expectFileOrDirectory: (
                onFileOrDirectory,
            ) => {
                if (splittedPath.length !== pos + 1) {
                    onFileOrDirectory(
                        splittedPath[pos],
                        createFileSystemContext2(
                            pos + 1,
                        ),
                    )
                } else {
                    onFileOrDirectory(
                        splittedPath[pos],
                        null,
                    )
                }
            }
        }
    }
    return createFileSystemContext2(
        0,
    )
}