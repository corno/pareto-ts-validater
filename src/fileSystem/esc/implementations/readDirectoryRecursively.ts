import * as pr from "pareto-runtime"

export function readDirectoryRecursively(
    $: {
        directoryPath: string
        nodesToSkip: string[]
    },
    $p: {
        callback: ($: {
            path: string
            direntType: pr.DirentType
        }) => void,
        onError: ($: {
            error: pr.ReadDirErrorType,
            path: string
        }) => void
        //FIXME add onEnd: () => void
    }
) {
    const $in = $
    pr.readdirWithFileTypes(
        $.directoryPath,
        ($) => {
            switch ($[0]) {
                case "error":
                    pr.cc($[1], ($) => {
                        console.error("HIERO1")
                        $p.onError({
                            error: $.type,
                            path: pr.join([$in.directoryPath])
                        })
                    })
                    break
                case "success":
                    pr.cc($[1], ($) => {
                        $.files.forEach(($) => {
                            
                            if ($in.nodesToSkip.includes($.name)) {
                                return
                            }
                            if (pr.isDirectory($.type)) {
                                readDirectoryRecursively(
                                    {
                                        directoryPath: pr.join([$in.directoryPath, $.name]),
                                        nodesToSkip: $in.nodesToSkip,
                                    },
                                    $p,
                                )
                            }
                            $p.callback({
                                path: pr.join([$in.directoryPath, $.name]),
                                direntType: $.type,
                            })
                        })
                    })
                    break
                default:
                    pr.au($[0])
            }
        }
    )
}