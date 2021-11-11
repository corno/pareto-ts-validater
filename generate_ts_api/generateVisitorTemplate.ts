import { createFile } from "./createFile"
import * as g from "./grammar"
import { Block, Line } from "./WriteAPI"

function assertUnreachable<RT>(_x: never): RT {
    throw new Error("unreachable")
}
function cc<T, RT>(input: T, callback: (output: T) => RT): RT {
    return callback(input)
}

const $w = createFile(
    "    ",
    "\r\n",
    (str) => {
        console.log(str)
    }
)

function forEachEntry<T>(
    dictionary: { [key: string]: T },
    callback: (entry: T, key: string) => void,
) {
    Object.keys(dictionary).forEach((key) => {
        callback(dictionary[key], key)
    })
}

function generate($w: Block) {

    $w.line(($w) => {
        $w.snippet(`import * as pr from "pareto-runtime"`)
    })
    $w.line(($w) => {
        $w.snippet(`import * as api from "./generated_ts_api"`)
    })
    $w.line(($w) => { })

    $w.line(($w) => {
        $w.snippet(`export function visit<Annotation>(`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`$: api.T${g.grammar.startRule}<Annotation>,`)
            })
            $w.line(($w) => {
                $w.snippet(`getLineInfo: (annotation: Annotation) => string,`)
            })
        })
        $w.snippet(`): void {`)
        $w.indent(($w) => {

            forEachEntry(g.grammar.tokenRules, ($, key) => {
                $w.line(($w) => {

                    $w.snippet(`function _${key}(`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`$: api.T${key}<Annotation>,`)
                        })
                        // $w.line(($w) => {
                        //     $w.snippet(`callback: ($: api.T${key}<Annotation>) => void,`)
                        // })
                    })
                    $w.snippet(`) {`)
                    $w.indent(($w) => {
                        function generateType(
                            $key: string,
                            $: g.Type,
                            $w: Block
                        ) {
                            switch ($[0]) {
                                case "bag":
                                    cc($[1], ($) => {
                                        $w.line(($w) => {
                                            $w.snippet(`//console.log(\`${$key} @ \${getLineInfo($.annotation)}\`)`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`$.children.forEach(($) => {`)
                                            $w.indent(($w) => {
                                                $w.line(($w) => {

                                                    $w.snippet(`switch ($[0]) {`)
                                                    $w.indent(($w) => {
                                                        $.forEach(($) => {
                                                            $w.line(($w) => {
                                                                switch ($[0]) {
                                                                    case "global":
                                                                        cc($[1], ($) => {
                                                                            $w.snippet(`case "${$}": {`)
                                                                            $w.indent(($w) => {
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`pr.cc($[1], ($) => {`)
                                                                                    $w.indent(($w) => {
                                                                                        $w.line(($w) => {
                                                                                            $w.snippet(`_${$}($)`)
                                                                                        })
                                                                                    })
                                                                                    $w.snippet(`})`)
                                                                                })
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`break`)
                                                                                })
                                                                            })
                                                                            $w.snippet(`}`)
                                                                        })
                                                                        break
                                                                    case "local":
                                                                        cc($[1], ($) => {
                                                                            $w.snippet(`case "${$[0]}": {`)
                                                                            $w.indent(($w) => {
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`pr.cc($[1], ($) => {`)
                                                                                    $w.indent(($w) => {
                                                                                        generateType(
                                                                                            $[0],
                                                                                            $[1],
                                                                                            $w,
                                                                                        )
                                                                                        $w.line(($w) => {
                                                                                        })
                                                                                    })
                                                                                    $w.snippet(`})`)
                                                                                })
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`break`)
                                                                                })
                                                                            })
                                                                            $w.snippet(`}`)
                                                                        })
                                                                        break
                                                                    default:
                                                                        assertUnreachable($[0])
                                                                }
                                                            })
                                                        })
                                                        $w.line(($w) => {
                                                            $w.snippet(`default: pr.au($[0])`)
                                                        })
                                                    })
                                                    $w.snippet(`}`)
                                                })
                                            })
                                            $w.snippet(`})`)
                                        })
                                    })
                                    break
                                case "leaf":
                                    cc($[1], ($) => {
                                        $w.line(($w) => {
                                            $w.snippet(`//console.log(\`${$key}\`)`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`//FIXME`)
                                        })
                                    })
                                    break
                                default:
                                    assertUnreachable($[0])
                            }
                        }
                        generateType(
                            key,
                            $,
                            $w,
                        )
                    })
                    $w.snippet(`}`)
                })
            })

            $w.line(($w) => {
                $w.snippet(`return _${g.grammar.startRule}($)`)
            })
        })
        $w.snippet(`}`)
    })
}

generate($w)
