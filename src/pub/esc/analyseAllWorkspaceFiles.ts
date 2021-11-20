import { analyseWorkspace } from "./analyseWorkspace"
import * as pth from "path"

const directoryPath = ".."
console.log(
    [
        `date`,
        `repository`,
        `path`,
        `pattern`,
        `correct`,
        `directory`,
        `basename`,
        `extension`,
        `lines`,
        `generated`,
    ].join(`,`)
)
analyseWorkspace(
    directoryPath,
    (
        repoPath,
        filePath,
        analysis,
        lineCount,
    ) => {

        console.log(
            [
                new Date().toISOString().split('T')[0],
                repoPath,
                filePath,
                analysis.pathPattern,
                analysis.correct,
                pth.dirname(filePath) === "." ? "" : pth.dirname(filePath),
                pth.basename(filePath),
                pth.extname(filePath),
                lineCount,
                (filePath.indexOf(".generated") !== -1 || analysis.pathPattern === "/package-lock.json")
                    ? "true"
                    : "false",
            ].join(`,`)
        )
    }
)