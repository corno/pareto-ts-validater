import * as pr from "pareto-lang-lib"
import * as api from "../../interface/types/ts_api"
import * as foox from "../../interface/interfaces/visitor"

export function visit<Annotation>(
    $: api.TNroot<Annotation>,
    foo: foox.IVisitor<Annotation>,
): void {
    function X_identifier(
        $: api.TGidentifier<Annotation>,
    ) {
        ((
            $: api.TNGidentifier$<Annotation>,
        ) => {
            if (foo["$identifier/*Identifier"] !== undefined) { foo["$identifier/*Identifier"]($) }
        })($)
    }
    function X_type(
        $: api.TGtype<Annotation>,
    ) {
        switch ($[0]) {
            case "array": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_array$<Annotation>,
                    ) => {
                        if (foo["$type/?array/*ArrayType"] !== undefined) { foo["$type/?array/*ArrayType"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["$type/?array/*ArrayType"] !== undefined) { foo["$type/?array/*ArrayType"].end($) }
                    })($)
                })
                break
            }
            case "boolean": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_boolean$<Annotation>,
                    ) => {
                        if (foo["$type/?boolean/*BooleanKeyword"] !== undefined) { foo["$type/?boolean/*BooleanKeyword"]($) }
                    })($)
                })
                break
            }
            case "string": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_string$<Annotation>,
                    ) => {
                        if (foo["$type/?string/*StringKeyword"] !== undefined) { foo["$type/?string/*StringKeyword"]($) }
                    })($)
                })
                break
            }
            case "number": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_number$<Annotation>,
                    ) => {
                        if (foo["$type/?number/*NumberKeyword"] !== undefined) { foo["$type/?number/*NumberKeyword"]($) }
                    })($)
                })
                break
            }
            case "literalType": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_literalType$<Annotation>,
                    ) => {
                        if (foo["$type/?literalType/*LiteralType"] !== undefined) { foo["$type/?literalType/*LiteralType"].begin($) }
                        pr.cc($.content, ($) => {
                            ((
                                $: api.TNGtype_literalType$$<Annotation>,
                            ) => {
                                if (foo["$type/?literalType/*LiteralType/*NullKeyword"] !== undefined) { foo["$type/?literalType/*LiteralType/*NullKeyword"]($) }
                            })($)
                        })
                        if (foo["$type/?literalType/*LiteralType"] !== undefined) { foo["$type/?literalType/*LiteralType"].end($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeLiteral$<Annotation>,
                    ) => {
                        if (foo["$type/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral"].begin($) }
                        pr.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                switch ($[0]) {
                                    case "index": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeLiteral$_index$<Annotation>,
                                            ) => {
                                                if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["key"], ($) => {
                                                        ((
                                                            $: api.TNGtype_typeLiteral$_index$_key$<Annotation>,
                                                        ) => {
                                                            if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"].begin($) }
                                                            pr.cc($.content, ($) => {
                                                                pr.cc($["name"], ($) => {
                                                                    X_identifier($)
                                                                })
                                                                pr.cc($["type"], ($) => {
                                                                    ((
                                                                        $: api.TNGtype_typeLiteral$_index$_key$_type$<Annotation>,
                                                                    ) => {
                                                                        if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter/.type/*StringKeyword"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter/.type/*StringKeyword"]($) }
                                                                    })($)
                                                                })
                                                            })
                                                            if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"].end($) }
                                                        })($)
                                                    })
                                                    pr.cc($["type"], ($) => {
                                                        X_type($)
                                                    })
                                                })
                                                if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "properties": {
                                        pr.cc($[1], ($) => {
                                            $.forEach(($) => {
                                                ((
                                                    $: api.TNGtype_typeLiteral$_properties$<Annotation>,
                                                ) => {
                                                    if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"].begin($) }
                                                    pr.cc($.content, ($) => {
                                                        pr.cc($["readonly"], ($) => {
                                                            ((
                                                                $: api.TNGtype_typeLiteral$_properties$_readonly$<Annotation>,
                                                            ) => {
                                                                if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword"]($) }
                                                            })($)
                                                        })
                                                        pr.cc($["name"], ($) => {
                                                            ((
                                                                $: api.TNGtype_typeLiteral$_properties$_name$<Annotation>,
                                                            ) => {
                                                                if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral"]($) }
                                                            })($)
                                                        })
                                                        pr.cc($["questionToken"], ($) => {
                                                            if ($ === null) {
                                                                //FIXME??
                                                            } else {
                                                                ((
                                                                    $: api.TNGtype_typeLiteral$_properties$_questionToken$<Annotation>,
                                                                ) => {
                                                                    if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.questionToken/*QuestionToken"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.questionToken/*QuestionToken"]($) }
                                                                })($)
                                                            }
                                                        })
                                                        pr.cc($["type"], ($) => {
                                                            X_type($)
                                                        })
                                                    })
                                                    if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"].end($) }
                                                })($)
                                            })
                                        })
                                        break
                                    }
                                    default: pr.au($[0])
                                }
                            }
                        })
                        if (foo["$type/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral"].end($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeReference$<Annotation>,
                    ) => {
                        if (foo["$type/?typeReference/*TypeReference"] !== undefined) { foo["$type/?typeReference/*TypeReference"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["referencedType"], ($) => {
                                switch ($[0]) {
                                    case "identifier": {
                                        pr.cc($[1], ($) => {
                                            X_identifier($)
                                        })
                                        break
                                    }
                                    case "qualifiedName": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>,
                                            ) => {
                                                if (foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"] !== undefined) { foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["context"], ($) => {
                                                        X_identifier($)
                                                    })
                                                    pr.cc($["type"], ($) => {
                                                        X_identifier($)
                                                    })
                                                })
                                                if (foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"] !== undefined) { foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pr.au($[0])
                                }
                            })
                            pr.cc($["typeArguments"], ($) => {
                                $.forEach(($) => {
                                    X_type($)
                                })
                            })
                        })
                        if (foo["$type/?typeReference/*TypeReference"] !== undefined) { foo["$type/?typeReference/*TypeReference"].end($) }
                    })($)
                })
                break
            }
            case "union": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_union$<Annotation>,
                    ) => {
                        if (foo["$type/?union/*UnionType"] !== undefined) { foo["$type/?union/*UnionType"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGtype_union$$<Annotation>,
                                ) => {
                                    if (foo["$type/?union/*UnionType/*TupleType"] !== undefined) { foo["$type/?union/*UnionType/*TupleType"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["state"], ($) => {
                                            ((
                                                $: api.TNGtype_union$$_state$<Annotation>,
                                            ) => {
                                                if (foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"] !== undefined) { foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    ((
                                                        $: api.TNGtype_union$$_state$$<Annotation>,
                                                    ) => {
                                                        if (foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral"] !== undefined) { foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral"]($) }
                                                    })($)
                                                })
                                                if (foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"] !== undefined) { foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"].end($) }
                                            })($)
                                        })
                                        pr.cc($["data"], ($) => {
                                            X_type($)
                                        })
                                    })
                                    if (foo["$type/?union/*UnionType/*TupleType"] !== undefined) { foo["$type/?union/*UnionType/*TupleType"].end($) }
                                })($)
                            })
                        })
                        if (foo["$type/?union/*UnionType"] !== undefined) { foo["$type/?union/*UnionType"].end($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    ((
        $: api.TNroot<Annotation>,
    ) => {
        if (foo[""] !== undefined) { foo[""].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["imports"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.TNroot_imports$<Annotation>,
                    ) => {
                        if (foo["/.imports/*ImportDeclaration"] !== undefined) { foo["/.imports/*ImportDeclaration"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["clause"], ($) => {
                                ((
                                    $: api.TNroot_imports$_clause$<Annotation>,
                                ) => {
                                    if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause"].begin($) }
                                    pr.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNroot_imports$_clause$_namespace$<Annotation>,
                                                    ) => {
                                                        if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "named": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNroot_imports$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNroot_imports$_clause$_named$$<Annotation>,
                                                                ) => {
                                                                    if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].begin($) }
                                                                    pr.cc($.content, ($) => {
                                                                        pr.cc($["name"], ($) => {
                                                                            X_identifier($)
                                                                        })
                                                                        pr.cc($["as"], ($) => {
                                                                            if ($ === null) {
                                                                                //FIXME??
                                                                            } else {
                                                                                X_identifier($)
                                                                            }
                                                                        })
                                                                    })
                                                                    if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].end($) }
                                                                })($)
                                                            })
                                                        })
                                                        if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            default: pr.au($[0])
                                        }
                                    })
                                    if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause"].end($) }
                                })($)
                            })
                            pr.cc($["file"], ($) => {
                                ((
                                    $: api.TNroot_imports$_file$<Annotation>,
                                ) => {
                                    if (foo["/.imports/*ImportDeclaration/.file/*StringLiteral"] !== undefined) { foo["/.imports/*ImportDeclaration/.file/*StringLiteral"]($) }
                                })($)
                            })
                        })
                        if (foo["/.imports/*ImportDeclaration"] !== undefined) { foo["/.imports/*ImportDeclaration"].end($) }
                    })($)
                })
            })
            pr.cc($["globals"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.TNroot_globals$<Annotation>,
                    ) => {
                        if (foo["/.globals/*TypeAliasDeclaration"] !== undefined) { foo["/.globals/*TypeAliasDeclaration"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["export"], ($) => {
                                ((
                                    $: api.TNroot_globals$_export$<Annotation>,
                                ) => {
                                    if (foo["/.globals/*TypeAliasDeclaration/.export/*ExportKeyword"] !== undefined) { foo["/.globals/*TypeAliasDeclaration/.export/*ExportKeyword"]($) }
                                })($)
                            })
                            pr.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNroot_globals$_typeParameters$<Annotation>,
                                    ) => {
                                        if (foo["/.globals/*TypeAliasDeclaration/.typeParameters/*TypeParameter"] !== undefined) { foo["/.globals/*TypeAliasDeclaration/.typeParameters/*TypeParameter"].begin($) }
                                        pr.cc($.content, ($) => {
                                            X_identifier($)
                                        })
                                        if (foo["/.globals/*TypeAliasDeclaration/.typeParameters/*TypeParameter"] !== undefined) { foo["/.globals/*TypeAliasDeclaration/.typeParameters/*TypeParameter"].end($) }
                                    })($)
                                })
                            })
                            pr.cc($["type"], ($) => {
                                X_type($)
                            })
                        })
                        if (foo["/.globals/*TypeAliasDeclaration"] !== undefined) { foo["/.globals/*TypeAliasDeclaration"].end($) }
                    })($)
                })
            })
            pr.cc($["endOfFile"], ($) => {
                ((
                    $: api.TNroot_endOfFile$<Annotation>,
                ) => {
                    if (foo["/.endOfFile/*EndOfFileToken"] !== undefined) { foo["/.endOfFile/*EndOfFileToken"]($) }
                })($)
            })
        })
        if (foo[""] !== undefined) { foo[""].end($) }
    })($)
}