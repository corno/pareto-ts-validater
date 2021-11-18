import * as pr from "pareto-runtime"

export function readWorkspace(
    $: {
        directoryPath: string
    },
    $p: {
        onError: ($: {
            message: string
        }) => void
        fileCallback: (
            filePath: string,
        ) => void
    }
) {
    const $dp = $.directoryPath

    pr.readdirWithFileTypes(
        $.directoryPath,
        ($) => {
            switch ($[0]) {
                case "error":
                    pr.cc($[1], ($) => {
                        $p.onError({ message: "ERROR WHILE READING DIR" })
                    })
                    break
                case "success":
                    pr.cc($[1], ($) => {
                        $.files.forEach(($) => {
                            const $repoPath = $.name
                            if (pr.isDirectory($.type)) {
                                $p.fileCallback($repoPath)
                            } else {
                                $p.onError({ message: `Unexpected File type '${$.type[0]}': ${$dp}/${$.name} ` })
                            }
                        })
                    })
                    break
                default:
                    pr.au($[0])
            }
        }
    )
}