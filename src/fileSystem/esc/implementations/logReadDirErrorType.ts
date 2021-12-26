import * as pr from "pareto-runtime"

export function logReadDirErrorType(
    $: pr.ReadDirErrorType,
    log: (message: string) => void,
) {
    switch ($[0]) {
        case "is not directory":
            pr.cc($[1], ($) => {
                log(`is not directory`)
            })
            break
        case "no entity":
            pr.cc($[1], ($) => {
                log(`no entity`)
            })
            break
        case "other":
            pr.cc($[1], ($) => {
                log(`${$.message}`)
            })
            break
        default:
            pr.au($[0])
    }
}