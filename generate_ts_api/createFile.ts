import * as pr from "pareto-runtime"
import { Block, Line } from "./WriteAPI"

export function createFile(
    indentation: string,
    newline: string,
    write: (str: string,) => void,
): Block {
    function createBlock(
        indentation: string,
        currentIndentation: string,
        flush: () => void,
        isFirstLine: boolean,
    ): Block {
        return {
            line: (callback) => {
                flush()
                if (!isFirstLine) {
                    console.error("HIERO")
                    //write(newline)
                }
                let currentLine: string | null = currentIndentation
                function createLine(
                    indentation: string,
                    currentIndentation: string,
                ): Line {
                    return {
                        indent: (callback) => {
                            callback(createBlock(
                                indentation,
                                currentIndentation + indentation,
                                () => {
                                    if (currentLine !== null) {
                                        write(pr.trimRight(currentLine))
                                        currentLine = null
                                    }
                                },
                                false,
                            ))
                        },
                        snippet: (str) => {
                            if (currentLine === null) {
                                write(newline)
                                currentLine = currentIndentation
                            }
                            currentLine += `${str}`
                        },
                    }
                }
                callback(createLine(
                    indentation,
                    currentIndentation
                ))
                if (currentLine !== null) {
                    write(pr.trimRight(currentLine))
                }
            },
        }
    }
    return createBlock(
        indentation,
        "",
        () => {   },
        true,
    )
}
