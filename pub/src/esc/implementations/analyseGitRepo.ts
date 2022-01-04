import * as pr from "pareto-runtime"

import { readGitRepoWithLineCounts } from "../../modules/git/esc/implementation/readGitRepoWithLineCounts"
import * as ap from "../../modules/analysePath"
import { _paretoProject } from "../../data/paretoProject"
import * as path from "path"


export function analyseGitRepo(
    repoPath: string,
    callback: (
        repoPath: string,
        filePath: string,
        analysis: ap.AnalysisResult,
        lineCount: number,
    ) => void,
) {

    readGitRepoWithLineCounts(
        repoPath,
        ($) => {
            const analysis = ap.analysePath(
                _paretoProject,
                ap.parseFilePath($.filePath),
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
