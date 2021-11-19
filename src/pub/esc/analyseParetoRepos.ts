
import * as pr from "pareto-runtime"

import * as path from "path"
import * as tast from "typesafe-typescript-ast"
import { logReadDirErrorType } from "../../fileSystem/esc/logReadDirErrorType"
import { readDirectoryRecursively } from "../../fileSystem/readDirectoryRecursively"

const directoryPath = ".."


readDirectoryRecursively(
    {
        directoryPath: directoryPath,
        nodesToSkip: [
            "node_modules"
        ]
    },
    {
        onError: ($) => {
            const path = $.path
            logReadDirErrorType(
                $.error,
                (message) => {
                    pr.logError(`${path}: ${message}`)
                }
            )
        },
        callback: ($) => {
            if (path.basename($.path) === "tsconfig.json") {
                console.log($.path)
                const tsconfigPath = $.path
                tast.loadUntypedProject(
                    $.path,
                    (
                        project,
                        getLineInfo,
                    ) => {
                        project.sourceFiles.forEach(($) => {
                            console.log(`    ${path.relative(path.dirname(tsconfigPath), $.path)}`)
                        })
                    },
                    () => {
                        //console.log("######")
                    },
                    () => {
                        return "FIXME"
                    },
                )
            }
        }
    },
)

// //console.log(`date,repository,directory,basename,extension,category,lines,generated`)
// readWorkspace(
//     {
//         directoryPath: directoryPath
//     },
//     {
//         onError: ($) => {
//             console.error($)
//         },
//         fileCallback: (
//             $filePath,
//         ) => {
//             readGitRepo(
//                 pr.join([directoryPath, $filePath]),
//                 (
//                     filePath,
//                 ) => {
//                     if (path.basename(filePath) === "tsconfig.json") {
//                         console.log("!!!!!")
//                     }
//                 }
//             )
//             // function getLineCount(): number {
//             //     let lineCount = 1 //there's always 1 line
//             //     for (let i = 0; i !== $content.length; i += 1) {
//             //         if ($content[i] === "\n") {
//             //             lineCount += 1
//             //         }
//             //     }
//             //     return lineCount
//             // }
//             //console.log(`${new Date().toISOString().split('T')[0]},${$repoPath},${path.dirname($filePath) === "." ? "" : path.dirname($filePath)},${path.basename($filePath)},${path.extname($filePath)},${getCategory()},${getLineCount()},${$filePath.indexOf(".generated") === -1 ? "" : "generated"}`)
//         }
//     }
// )