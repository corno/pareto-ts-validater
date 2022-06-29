
import * as pr from "pareto-runtime"
import * as tsmorph from "ts-morph"
import * as procedureParser from "../../generated/procedureGrammar"
import { _typescriptFileStructure } from "../../data/paretoProject"
import { doAT, Handle, OnError } from "../handle"
import { TAnnotatedString } from "../../generated/paretoGrammar"

export function doProcedure<Annotation>(
    handle: Handle<Annotation, procedureParser.TNroot<Annotation>>,
    onError: OnError<Annotation>,
): () => void {
    return () => {

        handle(
            procedureParser.parse,
            ($) => {
                doAT($, ($) => {
                    $.procedures.forEach(($) => {
                        doAT($, ($) => {
                            $.parameters.forEach(($) => {
                            })
                            $.typeParameters.forEach(($) => {
                            })
                        })
                        // switch ($.content.returnType.content.referencedType[0]) {
                        //     case "": 
                        //         cc($.content.returnType.content.referencedType[1], ($) => {
                        //         })
                        //         break
                        //     default: au($.content.returnType.content.referencedType[0])
                        // }
                        //$.content.returnType.content.referencedType
                    })
                    $.imports.forEach(($) => {
                        doAT($, ($) => {
                            doAT($.clause, ($) => {
                                switch ($[0]) {
                                    case "named":
                                        cc($[1], ($) => {
                                        })
                                        break
                                    case "namespace":
                                        cc($[1], ($) => {
                                            // if ($.content.content !== "pr") {
                                            //     onError($.content.annotation, `expected 'pr'`)
                                            // }
                                        })
                                        break
                                    default:
                                        au($[0])
                                }
                            })
                        })
                    })
                })
                // $.content.procedures.forEach(($) => {
                //     pr.log("!!!!!!!!!!!")
                //     if (!$.content.name.content.startsWith("P")) {
                //         onError($.content.name.annotation,`invalid name`, `must start wih 'P'`)
                //     }
                // })
            },
        )
    }
}