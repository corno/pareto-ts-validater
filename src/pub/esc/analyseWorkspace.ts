import * as pr from "pareto-runtime"

import { readGitRepoWithLineCounts } from "../../git/esc/implementations/readGitRepoWithLineCounts"
import { analysePath, AnalysisResult } from "./implementations/analysePath"
import { paretoProject } from "./data/paretoProject"
import { readWorkspace } from "./readWorkspace"


export function analyseWorkspace(
    directoryPath: string,
    callback: (
        repoPath: string,
        filePath: string,
        analysis: AnalysisResult,
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
                        const analysis = analysePath(
                            paretoProject,
                            $.filePath,
                        )
                        callback(
                            repoPath,
                            $.filePath,
                            analysis,
                            $.lineCount,
                        )
                        if (analysis.error !== null) {
                            console.error(`${repoPath}: ${analysis.error}`)
                        }
                    }
                )
            }
        },
    )

}

