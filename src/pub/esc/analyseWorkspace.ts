import * as pth from "path"
import { readGitWorkspace } from "./readGitWorkspace"
import { createFileSystemContext } from "./createFileSystemContext"
import { doNode2 } from "./implementations/fileSystemStructure"
import { paretoProject } from "./data/paretoProject"

console.log(`date,repository,directory,basename,extension,category,correct,lines,generated`)
readGitWorkspace(
    {
        directoryPath: ".."
    },
    {
        onError: ($) => {
            console.error($)
        },
        fileCallback: (
            $repoPath,
            $filePath,
            $content,
        ) => {
            const splittedPath = pth.normalize($filePath).split(pth.sep)

            const step = createFileSystemContext(
                {
                    pos: 0,
                    path: splittedPath,
                },
                ($) => {
                    console.error(`${$repoPath}: ${$}`)
                },
            )
            doNode2(
                step,
                paretoProject,
                "",
                (msg) => {
                    console.error(`${$repoPath}: ${msg}`)
                },
                (path, correct) => {
                    function getLineCount(): number {
                        let lineCount = 1 //there's always 1 line
                        for (let i = 0; i !== $content.length; i += 1) {
                            if ($content[i] === "\n") {
                                lineCount += 1
                            }
                        }
                        return lineCount
                    }
                    console.log(`${new Date().toISOString().split('T')[0]},${$repoPath},${pth.dirname($filePath) === "." ? "" : pth.dirname($filePath)},${pth.basename($filePath)},${pth.extname($filePath)},${path},${correct},${getLineCount()},${$filePath.indexOf(".generated") === -1 ? "" : "generated"}`)
                },
            )
        }
    }
)
