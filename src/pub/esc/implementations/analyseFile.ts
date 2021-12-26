import * as pr from "pareto-runtime"
import { Directory } from "../../interface/types/fileSystemStructure"
import { analysePath, parseFilePath } from "./analysePath"

export function analyseFile(
    contextPath: string,
    filePath: string,
    fileSystemStructure: Directory,
) {

    const parsedPath = parseFilePath(filePath)
    const res = analysePath(
        fileSystemStructure,
        parsedPath,
    )
    if (res.error !== null) {
        console.error(`${res.error} ${contextPath} ${filePath} (${res.path})`)
    }

    pr.readFile(
        pr.join([contextPath, filePath]),
        ($) => {
            switch ($[0]) {
                case "error":
                    pr.cc($[1], ($) => {
                        throw new Error(`WHAT TO DO? ${pr.join([contextPath, filePath])}`)
                    })
                    break
                case "success":
                    pr.cc($[1], ($) => {
                        console.log(
                            [
                                new Date().toISOString().split('T')[0],
                                contextPath,
                                filePath,
                                res.pathPattern,
                                res.error === null,
                                parsedPath.directoryPath.join("/"),
                                parsedPath.fileName,
                                parsedPath.extension,
                                (() => {
                                    let lineCount = 1 //there's always 1 line
                                    for (let i = 0; i !== $.data.length; i += 1) {
                                        if ($.data[i] === "\n") {
                                            lineCount += 1
                                        }
                                    }
                                    return lineCount
                                })(),
                                (filePath.indexOf(".generated") !== -1 || res.pathPattern === "/package-lock.json")
                                    ? "true"
                                    : "false",
                            ].join(`,`)
                        )
                    })
                    break
                default:
                    pr.au($[0])
            }
        }
    )
}