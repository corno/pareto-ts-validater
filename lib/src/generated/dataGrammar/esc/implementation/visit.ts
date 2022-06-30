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
    function X_initialization(
        $: api.TGinitialization<Annotation>,
    ) {
        switch ($[0]) {
            case "identifier": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_identifier$<Annotation>,
                    ) => {
                        if (foo["$initialization/?identifier/*Identifier"] !== undefined) { foo["$initialization/?identifier/*Identifier"]($) }
                    })($)
                })
                break
            }
            case "literal": {
                pr.cc($[1], ($) => {
                    X_literalDataInitialization($)
                })
                break
            }
            case "objectLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_objectLiteral$<Annotation>,
                    ) => {
                        if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGinitialization_objectLiteral$$<Annotation>,
                                ) => {
                                    if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["name"], ($) => {
                                            ((
                                                $: api.TNGinitialization_objectLiteral$$_name$<Annotation>,
                                            ) => {
                                                if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment/.name/*StringLiteral"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment/.name/*StringLiteral"]($) }
                                            })($)
                                        })
                                        pr.cc($["initialization"], ($) => {
                                            X_initialization($)
                                        })
                                    })
                                    if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].end($) }
                                })($)
                            })
                        })
                        if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_literalDataInitialization(
        $: api.TGliteralDataInitialization<Annotation>,
    ) {
        switch ($[0]) {
            case "state": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_state$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?state/*ArrayLiteralExpression"] !== undefined) { foo["$literalDataInitialization/?state/*ArrayLiteralExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["state"], ($) => {
                                ((
                                    $: api.TNGliteralDataInitialization_state$_state$<Annotation>,
                                ) => {
                                    if (foo["$literalDataInitialization/?state/*ArrayLiteralExpression/.state/*StringLiteral"] !== undefined) { foo["$literalDataInitialization/?state/*ArrayLiteralExpression/.state/*StringLiteral"]($) }
                                })($)
                            })
                            pr.cc($["data"], ($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["$literalDataInitialization/?state/*ArrayLiteralExpression"] !== undefined) { foo["$literalDataInitialization/?state/*ArrayLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "false": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_false$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?false/*FalseKeyword"] !== undefined) { foo["$literalDataInitialization/?false/*FalseKeyword"]($) }
                    })($)
                })
                break
            }
            case "stringLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_stringLiteral$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?stringLiteral/*NoSubstitutionTemplateLiteral"] !== undefined) { foo["$literalDataInitialization/?stringLiteral/*NoSubstitutionTemplateLiteral"]($) }
                    })($)
                })
                break
            }
            case "numericLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_numericLiteral$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?numericLiteral/*NumericLiteral"] !== undefined) { foo["$literalDataInitialization/?numericLiteral/*NumericLiteral"]($) }
                    })($)
                })
                break
            }
            case "null": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_null$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?null/*NullKeyword"] !== undefined) { foo["$literalDataInitialization/?null/*NullKeyword"]($) }
                    })($)
                })
                break
            }
            case "true": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_true$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?true/*TrueKeyword"] !== undefined) { foo["$literalDataInitialization/?true/*TrueKeyword"]($) }
                    })($)
                })
                break
            }
            case "array": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_array$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?array/*ParenthesizedExpression"] !== undefined) { foo["$literalDataInitialization/?array/*ParenthesizedExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            ((
                                $: api.TNGliteralDataInitialization_array$$<Annotation>,
                            ) => {
                                if (foo["$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression"] !== undefined) { foo["$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression"].begin($) }
                                pr.cc($.content, ($) => {
                                    $.forEach(($) => {
                                        X_initialization($)
                                    })
                                })
                                if (foo["$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression"] !== undefined) { foo["$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression"].end($) }
                            })($)
                        })
                        if (foo["$literalDataInitialization/?array/*ParenthesizedExpression"] !== undefined) { foo["$literalDataInitialization/?array/*ParenthesizedExpression"].end($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_typelessParameter(
        $: api.TGtypelessParameter<Annotation>,
    ) {
        ((
            $: api.TNGtypelessParameter$<Annotation>,
        ) => {
            if (foo["$typelessParameter/*Parameter"] !== undefined) { foo["$typelessParameter/*Parameter"].begin($) }
            pr.cc($.content, ($) => {
                X_identifier($)
            })
            if (foo["$typelessParameter/*Parameter"] !== undefined) { foo["$typelessParameter/*Parameter"].end($) }
        })($)
    }
    ((
        $: api.TNroot<Annotation>,
    ) => {
        if (foo[""] !== undefined) { foo[""].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["import"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.TNroot_import$<Annotation>,
                    ) => {
                        if (foo["/.import/*ImportDeclaration"] !== undefined) { foo["/.import/*ImportDeclaration"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["clause"], ($) => {
                                ((
                                    $: api.TNroot_import$_clause$<Annotation>,
                                ) => {
                                    if (foo["/.import/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["/.import/*ImportDeclaration/.clause/*ImportClause"].begin($) }
                                    pr.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNroot_import$_clause$_namespace$<Annotation>,
                                                    ) => {
                                                        if (foo["/.import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["/.import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if (foo["/.import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["/.import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "named": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNroot_import$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (foo["/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { foo["/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNroot_import$_clause$_named$$<Annotation>,
                                                                ) => {
                                                                    if (foo["/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { foo["/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].begin($) }
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
                                                                    if (foo["/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { foo["/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].end($) }
                                                                })($)
                                                            })
                                                        })
                                                        if (foo["/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { foo["/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            default: pr.au($[0])
                                        }
                                    })
                                    if (foo["/.import/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["/.import/*ImportDeclaration/.clause/*ImportClause"].end($) }
                                })($)
                            })
                            pr.cc($["file"], ($) => {
                                ((
                                    $: api.TNroot_import$_file$<Annotation>,
                                ) => {
                                    if (foo["/.import/*ImportDeclaration/.file/*StringLiteral"] !== undefined) { foo["/.import/*ImportDeclaration/.file/*StringLiteral"]($) }
                                })($)
                            })
                        })
                        if (foo["/.import/*ImportDeclaration"] !== undefined) { foo["/.import/*ImportDeclaration"].end($) }
                    })($)
                })
            })
            pr.cc($["variables"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.TNroot_variables$<Annotation>,
                    ) => {
                        if (foo["/.variables/*VariableStatement"] !== undefined) { foo["/.variables/*VariableStatement"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["export"], ($) => {
                                ((
                                    $: api.TNroot_variables$_export$<Annotation>,
                                ) => {
                                    if (foo["/.variables/*VariableStatement/.export/*ExportKeyword"] !== undefined) { foo["/.variables/*VariableStatement/.export/*ExportKeyword"]($) }
                                })($)
                            })
                            pr.cc($["variableDeclarationList"], ($) => {
                                ((
                                    $: api.TNroot_variables$_variableDeclarationList$<Annotation>,
                                ) => {
                                    if (foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList"] !== undefined) { foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList"].begin($) }
                                    pr.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            ((
                                                $: api.TNroot_variables$_variableDeclarationList$$<Annotation>,
                                            ) => {
                                                if (foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration"] !== undefined) { foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["name"], ($) => {
                                                        ((
                                                            $: api.TNroot_variables$_variableDeclarationList$$_name$<Annotation>,
                                                        ) => {
                                                            if (foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.name/*Identifier"] !== undefined) { foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.name/*Identifier"]($) }
                                                        })($)
                                                    })
                                                    pr.cc($["type"], ($) => {
                                                        ((
                                                            $: api.TNroot_variables$_variableDeclarationList$$_type$<Annotation>,
                                                        ) => {
                                                            if (foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference"] !== undefined) { foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference"].begin($) }
                                                            pr.cc($.content, ($) => {
                                                                pr.cc($["name"], ($) => {
                                                                    ((
                                                                        $: api.TNroot_variables$_variableDeclarationList$$_type$_name$<Annotation>,
                                                                    ) => {
                                                                        if (foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName"] !== undefined) { foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName"].begin($) }
                                                                        pr.cc($.content, ($) => {
                                                                            pr.cc($["context"], ($) => {
                                                                                ((
                                                                                    $: api.TNroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation>,
                                                                                ) => {
                                                                                    if (foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName/.context/*Identifier"] !== undefined) { foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName/.context/*Identifier"]($) }
                                                                                })($)
                                                                            })
                                                                            pr.cc($["type"], ($) => {
                                                                                ((
                                                                                    $: api.TNroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation>,
                                                                                ) => {
                                                                                    if (foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName/.type/*Identifier"] !== undefined) { foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName/.type/*Identifier"]($) }
                                                                                })($)
                                                                            })
                                                                        })
                                                                        if (foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName"] !== undefined) { foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName"].end($) }
                                                                    })($)
                                                                })
                                                            })
                                                            if (foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference"] !== undefined) { foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference"].end($) }
                                                        })($)
                                                    })
                                                    pr.cc($["one"], ($) => {
                                                        if ($ === null) {
                                                            //FIXME??
                                                        } else {
                                                            X_initialization($)
                                                        }
                                                    })
                                                })
                                                if (foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration"] !== undefined) { foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration"].end($) }
                                            })($)
                                        })
                                    })
                                    if (foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList"] !== undefined) { foo["/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList"].end($) }
                                })($)
                            })
                        })
                        if (foo["/.variables/*VariableStatement"] !== undefined) { foo["/.variables/*VariableStatement"].end($) }
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