import * as pr from "pareto-runtime"
import { readGitRepoWithContent } from "./git/readGitRepoWithContent"
import { readWorkspace } from "./readWorkspace"

export function readGitWorkspace(
    $: {
        directoryPath: string
    },
    $p: {
        onError: ($: {
            message: string
        }) => void
        fileCallback: (
            repoPath: string,
            filePath: string,
            content: string,
        ) => void
    }
) {
    readWorkspace(
        {
            directoryPath: $.directoryPath,
        },
        {
            onError: $p.onError,
            fileCallback: (
                childPath
            ) => {
                readGitRepoWithContent(
                    pr.join([$.directoryPath, childPath]),
                    (
                        filePath,
                        content,
                    ) => {
                        $p.fileCallback(
                            childPath,
                            filePath,
                            content,
                        )
                    }
                )
            }
        },
    )
}