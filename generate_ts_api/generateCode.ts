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
        $w.snippet(`import * as p from "./untypedAPI"`)
    })
    $w.line(($w) => { })
    $w.line(($w) => {
        $w.snippet(`export class UnrecognizedNodeError extends Error {`)
        $w.indent(($w) => {
            $w.line(($w) => {
                // see https://www.dannyguo.com/blog/how-to-fix-instanceof-not-working-for-custom-errors-in-typescript/
                $w.snippet(`constructor(message: string) { super(message); Object.setPrototypeOf(this, UnrecognizedNodeError.prototype); }`)

            })
        })
        $w.snippet(`}`)
    })
    $w.line(($w) => { })
    forEachEntry(g.grammar.tokenRules, ($, key) => {
        function generateType(
            $k: string,
            $: g.Type,
        ) {
            switch ($[0]) {
                case "bag":
                    cc($[1], ($) => {
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "global":
                                    cc($[1], ($) => {
                                    })
                                    break
                                case "local":
                                    cc($[1], ($) => {
                                        generateType(
                                            $[0],
                                            $[1],
                                        )
                                    })
                                    break
                                default:
                                    assertUnreachable($[0])
                            }
                        })
                    })
                    break
                case "leaf":
                    cc($[1], ($) => {
                    })
                    break
                default:
                    assertUnreachable($[0])
            }
            $w.line(($w) => {
                $w.snippet(``)
            })
            $w.line(($w) => {
                $w.snippet(`export type T${$k}<Annotation> = `)
                switch ($[0]) {
                    case "bag":
                        cc($[1], ($) => {
                            $w.snippet(`{`)
                            $w.indent(($w) => {
                                $w.line(($w) => {
                                    $w.snippet(`annotation: Annotation`)
                                })
                                $w.line(($w) => {
                                    $w.snippet(`children: Array<`)
                                    $w.indent(($w) => {
                                        $.forEach(($) => {
                                            $w.line(($w) => {
                                                switch ($[0]) {
                                                    case "global":
                                                        cc($[1], ($) => {
                                                            $w.snippet(`| ["${$}", T${$}<Annotation>]`)
                                                        })
                                                        break
                                                    case "local":
                                                        cc($[1], ($) => {
                                                            $w.snippet(`| ["${$[0]}", T${$[0]}<Annotation>]`)
                                                        })
                                                        break
                                                    default:
                                                        assertUnreachable($[0])
                                                }
                                            })
                                        })
                                    })
                                    $w.snippet(`>`)
                                })
                            })
                            $w.snippet(`}`)
                        })
                        break
                    case "leaf":
                        cc($[1], ($) => {
                            $w.snippet(`number`)
                        })
                        break
                    default:
                        assertUnreachable($[0])
                }

            })
        }
        generateType(
            key,
            $,
        )
    })

    $w.line(($w) => {
        $w.snippet(`export function root<Annotation>(`)
        $w.indent(($w) => {
            $w.line(($w) => {
                $w.snippet(`$: p.Node<Annotation>,`)
            })
            $w.line(($w) => {
                $w.snippet(`callback: ($: T${g.grammar.startRule}<Annotation>) => void,`)
            })
            $w.line(($w) => {
                $w.snippet(`getLineInfo: ($: p.Node<Annotation>) => string,`)
            })
            $w.line(($w) => {
                $w.snippet(`getAnnotation: ($: p.Node<Annotation>) => Annotation,`)
            })
        })
        $w.snippet(`): void {`)
        $w.indent(($w) => {

            forEachEntry(g.grammar.tokenRules, ($, key) => {
                $w.line(($w) => {

                    $w.snippet(`function _${key}(`)
                    $w.indent(($w) => {
                        $w.line(($w) => {
                            $w.snippet(`$: p.Node<Annotation>,`)
                        })
                        $w.line(($w) => {
                            $w.snippet(`callback: ($: T${key}<Annotation>) => void,`)
                        })
                    })
                    $w.snippet(`) {`)
                    $w.indent(($w) => {
                        function generateType(
                            $k: string,
                            $: g.Type,
                            $w: Block,
                        ) {
                            switch ($[0]) {
                                case "bag":
                                    cc($[1], ($) => {
                                        $w.line(($w) => {
                                            $w.snippet(`const temp: T${$k}<Annotation> = {`)
                                            $w.indent(($w) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`annotation: getAnnotation($),`)
                                                })
                                                $w.line(($w) => {
                                                    $w.snippet(`children: []`)
                                                })
                                            })
                                            $w.snippet(`}`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`$.children.forEach(($) => {`)
                                            $w.indent(($w) => {
                                                $w.line(($w) => {
                                                    $w.snippet(`switch ($.kindName) {`)
                                                    $w.indent(($w) => {
                                                        $.forEach(($) => {
                                                            switch ($[0]) {
                                                                case "global":
                                                                    cc($[1], ($) => {
                                                                        $w.line(($w) => {
                                                                            $w.snippet(`case "${$}": {`)
                                                                            $w.indent(($w) => {
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`_${$}(`)
                                                                                    $w.indent(($w) => {
                                                                                        $w.line(($w) => {
                                                                                            $w.snippet(`$,`)
                                                                                        })
                                                                                        $w.line(($w) => {
                                                                                            $w.snippet(`($) => { temp.children.push(["${$}", $]) },`)
                                                                                        })
                                                                                    })
                                                                                    $w.snippet(`)`)
                                                                                })
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`break`)
                                                                                })
                                                                            })
                                                                            $w.snippet(`}`)
                                                                        })
                                                                    })
                                                                    break
                                                                case "local":
                                                                    cc($[1], ($) => {
                                                                        $w.line(($w) => {
                                                                            $w.snippet(`case "${$[0]}": {`)
                                                                            $w.indent(($w) => {
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`const callback = ($: T${$[0]}<Annotation>) => {`)
                                                                                    $w.indent(($w) => {
                                                                                        $w.line(($w) => {
                                                                                            $w.snippet(`temp.children.push(["${$[0]}", $])`)
                                                                                        })
                                                                                    })
                                                                                    $w.snippet(`}`)
                                                                                })
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`pr.cc(null, (_) => {`)
                                                                                    $w.indent(($w) => {
                                                                                        generateType(
                                                                                            $[0],
                                                                                            $[1],
                                                                                            $w,
                                                                                        )
                                                                                        // $w.line(($w) => {
                                                                                        //     $w.snippet(`break`)
                                                                                        // })
                                                                                    })
                                                                                    $w.snippet(`})`)
                                                                                })
                                                                                $w.line(($w) => {
                                                                                    $w.snippet(`break`)
                                                                                })
                                                                            })
                                                                            $w.snippet(`}`)
                                                                        })
                                                                    })
                                                                    break
                                                                default:
                                                                    assertUnreachable($[0])
                                                            }
                                                        })
                                                        $w.line(($w) => {
                                                            //$w.snippet(`default: throw new UnrecognizedNodeError(\`\${$.kindName}\`)`)
                                                            $w.snippet(`default: console.error(\`encountered unexpected node in '${$k}': '\${$.kindName}' @ \${getLineInfo($)}\`)`)

                                                        })
                                                    })
                                                    $w.snippet(`}`)
                                                })
                                            })
                                            $w.snippet(`})`)
                                        })
                                        $w.line(($w) => {
                                            $w.snippet(`callback(temp)`)
                                        })
                                    })
                                    break
                                case "leaf":
                                    cc($[1], ($) => {
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
                $w.snippet(`return _${g.grammar.startRule}($, callback)`)
            })
        })
        $w.snippet(`}`)
    })


    $w.line(($w) => {
        $w.snippet(`export type Root<Annotation> = T${g.grammar.startRule}<Annotation>`)
    })

}

generate($w)
