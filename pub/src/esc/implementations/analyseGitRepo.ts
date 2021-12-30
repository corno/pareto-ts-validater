import * as pr from "pareto-runtime"

import { readGitRepoWithLineCounts } from "../../modules/git/esc/implementation/readGitRepoWithLineCounts"
import { analysePath, AnalysisResult, parseFilePath } from "./analysePath"
import { _paretoProject } from "../../data/paretoProject"
import * as path from "path"


export function analyseGitRepo(
    repoPath: string,
    callback: (
        repoPath: string,
        filePath: string,
        analysis: AnalysisResult,
        lineCount: number,
    ) => void,
) {

    readGitRepoWithLineCounts(
        repoPath,
        ($) => {
            const analysis = analysePath(
                _paretoProject,
                parseFilePath($.filePath),
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
