import * as pr from "pareto-runtime"
import * as pf from "pareto-filesystem"
import * as ap from "analyse-path"

export function analyseFile(
    contextPath: string,
    filePath: string,
    fileSystemStructure: ap.TDirectory,
) {
    const parsedPath = ap.parseFilePath(filePath)
    const res = ap.analysePath(
        fileSystemStructure,
        parsedPath,
    )
    if (res.error !== null) {
        console.error(`${res.error} ${contextPath} ${filePath} (${res.path.join("/")})`)
    }

    pf.wrapDirectory(
        {
            startPath: contextPath,
        },
        {
            callback: ($i) => {
                $i.readFile(
                    filePath,
                    ($) => {
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
                                    for (let i = 0; i !== $.length; i += 1) {
                                        if ($[i] === "\n") {
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
                    }
                )
            },
            onEnd: () => {

            },
            onError: () => {
                throw new Error(`WHAT TO DO? ${pr.join([contextPath, filePath])}`)
            }
        },
    )
}