import * as pr from "pareto-runtime"
import * as pf from "pareto-filesystem"

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


    pf.wrapDirectory(
        {
            startPath: $.directoryPath,
        },
        {
            callback: ($i) => {
                $i.readDirWithFileTypes(
                    {
                        path: $.directoryPath,
                    },
                    {
                        onEnd: () => {

                        },
                        onDirectory: ($) => {
                            $p.fileCallback($.name)
                        },
                        onFile: ($) => {
                            $p.onError({ message: `Unexpected File: ${$dp}/${$.name} ` })
                        }
                    }
                )
            },
            onEnd: () => {

            },
            onError: () => {
                $p.onError({ message: "ERROR WHILE READING DIR" })
            }
        },
    )

}