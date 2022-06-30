
import * as pr from "pareto-lang-lib"
import * as typeParser from "../../generated/paretoGrammar"
import { _typescriptFileStructure } from "../../data/paretoProject"
import { doAT, Handle, OnError } from "../handle"
import { TAnnotatedString } from "../../generated/paretoGrammar"
import { TOut, TTypeAlias } from "../ParetoTypes"


function doReferencedType<Annotation>(
    $: typeParser.TVGtype_typeReference<Annotation>
) {
    doAT($, ($) => {

        switch ($.referencedType[0]) {
            case "identifier":
                pr.cc($.referencedType[1], ($) => {
                    $.value
                })
                break
            case "qualifiedName":
                pr.cc($.referencedType[1], ($) => {
                    doAT($, ($) => {
                        $.context.value
                        $.type.value
                    })
                })
                break
            default: pr.au($.referencedType[0])
        }
        $.typeArguments.forEach(($) => {
            doType($)
        })
    })
}

function doType<Annotation>(
    $: typeParser.TVroot_globals$_type<Annotation>
) {
    switch ($[0]) {
        case "array":
            pr.cc($[1], ($) => {
                doAT($, ($) => {
                    doType($)
                })
            })
            break
        case "boolean":
            pr.cc($[1], ($) => {

            })
            break
        case "literalType":
            pr.cc($[1], ($) => {
                doAT($, ($) => {
                    //null
                })
            })
            break
        case "number":
            pr.cc($[1], ($) => {
                //number keyword
            })
            break
        case "string":
            pr.cc($[1], ($) => {

            })
            break
        case "typeLiteral":
            pr.cc($[1], ($) => {
                doAT($, ($) => {
                    if ($ !== null) {
                        switch ($[0]) {
                            case "index":
                                pr.cc($[1], ($) => {
                                    doAT($, ($) => {
                                        $.key
                                        doType($.type)
                                    })
                                })
                                break
                            case "properties":
                                pr.cc($[1], ($) => {
                                    $.forEach(($) => {
                                        doAT($, ($) => {
                                            $.name
                                            $.questionToken
                                            doType($.type)
                                        })
                                    })

                                })
                                break
                            default: pr.au($[0])
                        }
                    }
                })
            })
            break
        case "typeReference":
            pr.cc($[1], ($) => {
                doReferencedType($)
            })
            break
        case "union":
            pr.cc($[1], ($) => {
                doAT($, ($) => {
                    $.forEach(($) => {
                        doAT($, ($) => {
                            doAT($.state, ($) => {
                                $.value
                            })
                            doType($.data)
                        })
                    })
                })
            })
            break
        default: pr.au($[0])
    }

}

export function doTypeFile<Annotation>(
    handle: Handle<Annotation, typeParser.TNroot<Annotation>>,
    out: TOut<Annotation>,
    onError: OnError<Annotation>,
): () => void {
    return () => {
        handle(
            typeParser.parse,
            ($) => {
                doAT($, ($) => {
                    $.imports.forEach(($) => {
                        doAT($, ($) => {
                            console.log($.file.value)
                            doAT($.clause, ($) => {
                                switch ($[0]) {
                                    case "named":
                                        pr.cc($[1], ($) => {
                                            doAT($, ($) => {
                                                $.forEach(($) => {
                                                    doAT($, ($) => {
                                                        console.log($.name.value)

                                                        console.log($.as?.value)
                                                    })
                                                })
                                            })
                                        })
                                        break
                                    case "namespace":
                                        pr.cc($[1], ($) => {
                                            doAT($, ($) => {
                                                console.log($.value)
                                            })
                                            // if ($.content.content !== "pr") {
                                            //     onError($.content.annotation, `expected 'pr'`)
                                            // }
                                        })
                                        break
                                    default:
                                        pr.au($[0])
                                }
                            })
                        })
                    })
                    $.globals.forEach(($) => {
                        doAT($, ($) => {
                            const ta: TTypeAlias<Annotation> = {
                                typeParameters: {}
                            }
                            function add<Type>(
                                $: {
                                    string: TAnnotatedString<Annotation>,
                                    expectedPrefix: string,
                                    v: Type,
                                    dict: { [key: string]: Type },
                                }
                            ): void {
                                if (!$.string.value.startsWith($.expectedPrefix)) {
                                    onError($.string.annotation, `invalid name`, `must start wih '${$.expectedPrefix}'`)
                                } else {
                                    $.dict[$.string.value.substring($.expectedPrefix.length)] = $.v
                                }
                            }
                            add(
                                {
                                    string: $.name,
                                    expectedPrefix: `T`,
                                    v: ta,
                                    dict: out.typeAliases,
                                }
                            )
                            $.typeParameters.forEach(($) => {
                                doAT($, ($) => {
                                    add({

                                        string: $,
                                        expectedPrefix: ``,
                                        v: {},
                                        dict: ta.typeParameters,
                                    })
                                    console.log($.value)
                                })
                            })
                            doType($.type)
                        })
                    })
                })
            },
        )
    }
}