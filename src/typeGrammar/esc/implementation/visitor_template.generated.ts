import * as pr from "pareto-runtime"
import * as api from "../interface/ts_api.generated"

export type FOO<Annotation> = {
    "ArrayType"?: {
        begin: ($: api.TArrayType<Annotation>) => void,
        end: ($: api.TArrayType<Annotation>) => void,
    }
    "BooleanKeyword"?: ($: api.TBooleanKeyword<Annotation>) => void
    "EndOfFileToken"?: ($: api.TEndOfFileToken<Annotation>) => void
    "ExportKeyword"?: ($: api.TExportKeyword<Annotation>) => void
    "Identifier"?: ($: api.TIdentifier<Annotation>) => void
    "IndexSignature"?: {
        begin: ($: api.TIndexSignature<Annotation>) => void,
        end: ($: api.TIndexSignature<Annotation>) => void,
    }
    "LiteralType"?: {
        begin: ($: api.TLiteralType<Annotation>) => void,
        end: ($: api.TLiteralType<Annotation>) => void,
    }
    "Parameter"?: {
        begin: ($: api.TParameter<Annotation>) => void,
        end: ($: api.TParameter<Annotation>) => void,
    }
    "PropertySignature"?: {
        begin: ($: api.TPropertySignature<Annotation>) => void,
        end: ($: api.TPropertySignature<Annotation>) => void,
    }
    "QuestionToken"?: ($: api.TQuestionToken<Annotation>) => void
    "SourceFile"?: {
        begin: ($: api.TSourceFile<Annotation>) => void,
        end: ($: api.TSourceFile<Annotation>) => void,
    }
    "StringKeyword"?: ($: api.TStringKeyword<Annotation>) => void
    "StringLiteral"?: ($: api.TStringLiteral<Annotation>) => void
    "TupleType"?: {
        begin: ($: api.TTupleType<Annotation>) => void,
        end: ($: api.TTupleType<Annotation>) => void,
    }
    "TypeAliasDeclaration"?: {
        begin: ($: api.TTypeAliasDeclaration<Annotation>) => void,
        end: ($: api.TTypeAliasDeclaration<Annotation>) => void,
    }
    "TypeLiteral"?: {
        begin: ($: api.TTypeLiteral<Annotation>) => void,
        end: ($: api.TTypeLiteral<Annotation>) => void,
    }
    "TypeParameter"?: {
        begin: ($: api.TTypeParameter<Annotation>) => void,
        end: ($: api.TTypeParameter<Annotation>) => void,
    }
    "TypeReference"?: {
        begin: ($: api.TTypeReference<Annotation>) => void,
        end: ($: api.TTypeReference<Annotation>) => void,
    }
    "UnionType"?: {
        begin: ($: api.TUnionType<Annotation>) => void,
        end: ($: api.TUnionType<Annotation>) => void,
    }
}

export const foo: FOO<string> = {
    "ArrayType": {
        begin: ($) => { console.log("ArrayType begin") },
        end: ($) => { console.log("ArrayType end") },
    },
    "BooleanKeyword": ($) => { console.log("BooleanKeyword") },
    "EndOfFileToken": ($) => { console.log("EndOfFileToken") },
    "ExportKeyword": ($) => { console.log("ExportKeyword") },
    "Identifier": ($) => { console.log("Identifier") },
    "IndexSignature": {
        begin: ($) => { console.log("IndexSignature begin") },
        end: ($) => { console.log("IndexSignature end") },
    },
    "LiteralType": {
        begin: ($) => { console.log("LiteralType begin") },
        end: ($) => { console.log("LiteralType end") },
    },
    "Parameter": {
        begin: ($) => { console.log("Parameter begin") },
        end: ($) => { console.log("Parameter end") },
    },
    "PropertySignature": {
        begin: ($) => { console.log("PropertySignature begin") },
        end: ($) => { console.log("PropertySignature end") },
    },
    "QuestionToken": ($) => { console.log("QuestionToken") },
    "SourceFile": {
        begin: ($) => { console.log("SourceFile begin") },
        end: ($) => { console.log("SourceFile end") },
    },
    "StringKeyword": ($) => { console.log("StringKeyword") },
    "StringLiteral": ($) => { console.log("StringLiteral") },
    "TupleType": {
        begin: ($) => { console.log("TupleType begin") },
        end: ($) => { console.log("TupleType end") },
    },
    "TypeAliasDeclaration": {
        begin: ($) => { console.log("TypeAliasDeclaration begin") },
        end: ($) => { console.log("TypeAliasDeclaration end") },
    },
    "TypeLiteral": {
        begin: ($) => { console.log("TypeLiteral begin") },
        end: ($) => { console.log("TypeLiteral end") },
    },
    "TypeParameter": {
        begin: ($) => { console.log("TypeParameter begin") },
        end: ($) => { console.log("TypeParameter end") },
    },
    "TypeReference": {
        begin: ($) => { console.log("TypeReference begin") },
        end: ($) => { console.log("TypeReference end") },
    },
    "UnionType": {
        begin: ($) => { console.log("UnionType begin") },
        end: ($) => { console.log("UnionType end") },
    },
}

export function visit<Annotation>(
    $: api.TSourceFile<Annotation>,
    foo: FOO<Annotation>,
): void {
    function X_type(
        $: api.Gtype<Annotation>,
    ) {
        switch ($[0]) {
            case "array": {
                pr.cc($[1], ($) => {
                    _ArrayType($)
                })
                break
            }
            case "boolean": {
                pr.cc($[1], ($) => {
                    _BooleanKeyword($)
                })
                break
            }
            case "string": {
                pr.cc($[1], ($) => {
                    _StringKeyword($)
                })
                break
            }
            case "literal": {
                pr.cc($[1], ($) => {
                    _LiteralType($)
                })
                break
            }
            case "tuple": {
                pr.cc($[1], ($) => {
                    _TupleType($)
                })
                break
            }
            case "typeLiteral": {
                pr.cc($[1], ($) => {
                    _TypeLiteral($)
                })
                break
            }
            case "typeReference": {
                pr.cc($[1], ($) => {
                    _TypeReference($)
                })
                break
            }
            case "union": {
                pr.cc($[1], ($) => {
                    _UnionType($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function _ArrayType(
        $: api.TArrayType<Annotation>,
    ) {
        if (foo["ArrayType"] !== undefined) { foo["ArrayType"].begin($) }
        pr.cc($.content, ($) => {
            X_type($)
        })
        if (foo["ArrayType"] !== undefined) { foo["ArrayType"].end($) }
    }
    function _BooleanKeyword(
        $: api.TBooleanKeyword<Annotation>,
    ) {
        if (foo["BooleanKeyword"] !== undefined) { foo["BooleanKeyword"]($) }
    }
    function _EndOfFileToken(
        $: api.TEndOfFileToken<Annotation>,
    ) {
        if (foo["EndOfFileToken"] !== undefined) { foo["EndOfFileToken"]($) }
    }
    function _ExportKeyword(
        $: api.TExportKeyword<Annotation>,
    ) {
        if (foo["ExportKeyword"] !== undefined) { foo["ExportKeyword"]($) }
    }
    function _Identifier(
        $: api.TIdentifier<Annotation>,
    ) {
        if (foo["Identifier"] !== undefined) { foo["Identifier"]($) }
    }
    function _IndexSignature(
        $: api.TIndexSignature<Annotation>,
    ) {
        if (foo["IndexSignature"] !== undefined) { foo["IndexSignature"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["key"], ($) => {
                _Parameter($)
            })
            pr.cc($["type"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_type($)
                }
            })
        })
        if (foo["IndexSignature"] !== undefined) { foo["IndexSignature"].end($) }
    }
    function _LiteralType(
        $: api.TLiteralType<Annotation>,
    ) {
        if (foo["LiteralType"] !== undefined) { foo["LiteralType"].begin($) }
        pr.cc($.content, ($) => {
            switch ($[0]) {
                case "string": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
        if (foo["LiteralType"] !== undefined) { foo["LiteralType"].end($) }
    }
    function _Parameter(
        $: api.TParameter<Annotation>,
    ) {
        if (foo["Parameter"] !== undefined) { foo["Parameter"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["name"], ($) => {
                _Identifier($)
            })
            pr.cc($["type"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_type($)
                }
            })
        })
        if (foo["Parameter"] !== undefined) { foo["Parameter"].end($) }
    }
    function _PropertySignature(
        $: api.TPropertySignature<Annotation>,
    ) {
        if (foo["PropertySignature"] !== undefined) { foo["PropertySignature"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["name"], ($) => {
                _StringLiteral($)
            })
            pr.cc($["quesionToken"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    _QuestionToken($)
                }
            })
            pr.cc($["type"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_type($)
                }
            })
        })
        if (foo["PropertySignature"] !== undefined) { foo["PropertySignature"].end($) }
    }
    function _QuestionToken(
        $: api.TQuestionToken<Annotation>,
    ) {
        if (foo["QuestionToken"] !== undefined) { foo["QuestionToken"]($) }
    }
    function _SourceFile(
        $: api.TSourceFile<Annotation>,
    ) {
        if (foo["SourceFile"] !== undefined) { foo["SourceFile"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["typeAliases"], ($) => {
                $.forEach(($) => {
                    _TypeAliasDeclaration($)
                })
            })
            pr.cc($["endOfFile"], ($) => {
                _EndOfFileToken($)
            })
        })
        if (foo["SourceFile"] !== undefined) { foo["SourceFile"].end($) }
    }
    function _StringKeyword(
        $: api.TStringKeyword<Annotation>,
    ) {
        if (foo["StringKeyword"] !== undefined) { foo["StringKeyword"]($) }
    }
    function _StringLiteral(
        $: api.TStringLiteral<Annotation>,
    ) {
        if (foo["StringLiteral"] !== undefined) { foo["StringLiteral"]($) }
    }
    function _TupleType(
        $: api.TTupleType<Annotation>,
    ) {
        if (foo["TupleType"] !== undefined) { foo["TupleType"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                X_type($)
            })
        })
        if (foo["TupleType"] !== undefined) { foo["TupleType"].end($) }
    }
    function _TypeAliasDeclaration(
        $: api.TTypeAliasDeclaration<Annotation>,
    ) {
        if (foo["TypeAliasDeclaration"] !== undefined) { foo["TypeAliasDeclaration"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["export"], ($) => {
                _ExportKeyword($)
            })
            pr.cc($["name"], ($) => {
                _Identifier($)
            })
            pr.cc($["typeParameters"], ($) => {
                $.forEach(($) => {
                    _TypeParameter($)
                })
            })
            pr.cc($["type"], ($) => {
                X_type($)
            })
        })
        if (foo["TypeAliasDeclaration"] !== undefined) { foo["TypeAliasDeclaration"].end($) }
    }
    function _TypeLiteral(
        $: api.TTypeLiteral<Annotation>,
    ) {
        if (foo["TypeLiteral"] !== undefined) { foo["TypeLiteral"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                switch ($[0]) {
                    case "index": {
                        pr.cc($[1], ($) => {
                            _IndexSignature($)
                        })
                        break
                    }
                    case "property": {
                        pr.cc($[1], ($) => {
                            _PropertySignature($)
                        })
                        break
                    }
                    default: pr.au($[0])
                }
            })
        })
        if (foo["TypeLiteral"] !== undefined) { foo["TypeLiteral"].end($) }
    }
    function _TypeParameter(
        $: api.TTypeParameter<Annotation>,
    ) {
        if (foo["TypeParameter"] !== undefined) { foo["TypeParameter"].begin($) }
        pr.cc($.content, ($) => {
            _Identifier($)
        })
        if (foo["TypeParameter"] !== undefined) { foo["TypeParameter"].end($) }
    }
    function _TypeReference(
        $: api.TTypeReference<Annotation>,
    ) {
        if (foo["TypeReference"] !== undefined) { foo["TypeReference"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["referencedType"], ($) => {
                switch ($[0]) {
                    case "identifier": {
                        pr.cc($[1], ($) => {
                            _Identifier($)
                        })
                        break
                    }
                    default: pr.au($[0])
                }
            })
            pr.cc($["parameters"], ($) => {
                $.forEach(($) => {
                    X_type($)
                })
            })
        })
        if (foo["TypeReference"] !== undefined) { foo["TypeReference"].end($) }
    }
    function _UnionType(
        $: api.TUnionType<Annotation>,
    ) {
        if (foo["UnionType"] !== undefined) { foo["UnionType"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                X_type($)
            })
        })
        if (foo["UnionType"] !== undefined) { foo["UnionType"].end($) }
    }
    return _SourceFile($)
}