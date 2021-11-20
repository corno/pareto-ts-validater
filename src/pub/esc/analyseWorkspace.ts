import * as pr from "pareto-runtime"

import * as pth from "path"
import { readGitRepoWithLineCounts } from "../../git/esc/implementations/readGitRepoWithLineCounts"
import { analysePath, PathAnalysis } from "./analysePath"
import { paretoProject } from "./data/paretoProject"
import { readWorkspace } from "./readWorkspace"


export function analyseWorkspace(
    directoryPath: string,
    callback: (
        repoPath: string,
        filePath: string,
        analysis: PathAnalysis,
        lineCount: number,
    ) => void,
) {
    readWorkspace(
        {
            directoryPath: directoryPath,
        },
        {
            onError: ($) => {
                console.error($.message)
            },
            fileCallback: (
                repoPath
            ) => {
                readGitRepoWithLineCounts(
                    pr.join([directoryPath, repoPath]),
                    ($) => {
                        analysePath(
                            paretoProject,
                            $.filePath,
                            (analysis) => {
                                callback(
                                    repoPath,
                                    $.filePath,
                                    analysis,
                                    $.lineCount,
                                )
                            },
                            (msg) => {
                                console.error(`${repoPath}: ${msg}`)
                            }
                        )
                    }
                )
            }
        },
    )

}

