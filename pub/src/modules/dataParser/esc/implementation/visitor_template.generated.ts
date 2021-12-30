import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api.generated"
import * as foox from "./visitor_template2.generated"

export function visit<Annotation>(
    $: api.TNroot<Annotation>,
    foo: foox.FOO<Annotation>,
): void {
    function X_identifier(
        $: api.TGidentifier<Annotation>,
    ) {
        ((
            $: api.TNGidentifier$<Annotation>,
        ) => {
            if (foo["Gidentifier$"] !== undefined) { foo["Gidentifier$"]($) }
        })($)
    }
    function X_initialization(
        $: api.TGinitialization<Annotation>,
    ) {
        switch ($[0]) {
            case "arrayLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_arrayLiteral$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_arrayLiteral$"] !== undefined) { foo["Ginitialization_arrayLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["Ginitialization_arrayLiteral$"] !== undefined) { foo["Ginitialization_arrayLiteral$"].end($) }
                    })($)
                })
                break
            }
            case "false": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_false$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_false$"] !== undefined) { foo["Ginitialization_false$"]($) }
                    })($)
                })
                break
            }
            case "identifier": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_identifier$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_identifier$"] !== undefined) { foo["Ginitialization_identifier$"]($) }
                    })($)
                })
                break
            }
            case "noSubstitutionTemplateLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_noSubstitutionTemplateLiteral$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_noSubstitutionTemplateLiteral$"] !== undefined) { foo["Ginitialization_noSubstitutionTemplateLiteral$"]($) }
                    })($)
                })
                break
            }
            case "numericLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_numericLiteral$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_numericLiteral$"] !== undefined) { foo["Ginitialization_numericLiteral$"]($) }
                    })($)
                })
                break
            }
            case "objectLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_objectLiteral$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_objectLiteral$"] !== undefined) { foo["Ginitialization_objectLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGinitialization_objectLiteral$$<Annotation>,
                                ) => {
                                    if (foo["Ginitialization_objectLiteral$$"] !== undefined) { foo["Ginitialization_objectLiteral$$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["name"], ($) => {
                                            switch ($[0]) {
                                                case "identifier": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGinitialization_objectLiteral$$_name_identifier$<Annotation>,
                                                        ) => {
                                                            if (foo["Ginitialization_objectLiteral$$_name_identifier$"] !== undefined) { foo["Ginitialization_objectLiteral$$_name_identifier$"]($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "stringLiteral": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGinitialization_objectLiteral$$_name_stringLiteral$<Annotation>,
                                                        ) => {
                                                            if (foo["Ginitialization_objectLiteral$$_name_stringLiteral$"] !== undefined) { foo["Ginitialization_objectLiteral$$_name_stringLiteral$"]($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pr.au($[0])
                                            }
                                        })
                                        pr.cc($["initialization"], ($) => {
                                            X_initialization($)
                                        })
                                    })
                                    if (foo["Ginitialization_objectLiteral$$"] !== undefined) { foo["Ginitialization_objectLiteral$$"].end($) }
                                })($)
                            })
                        })
                        if (foo["Ginitialization_objectLiteral$"] !== undefined) { foo["Ginitialization_objectLiteral$"].end($) }
                    })($)
                })
                break
            }
            case "true": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_true$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_true$"] !== undefined) { foo["Ginitialization_true$"]($) }
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
        if (foo["root"] !== undefined) { foo["root"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["import"], ($) => {
                ((
                    $: api.TNroot_import$<Annotation>,
                ) => {
                    if (foo["root_import$"] !== undefined) { foo["root_import$"].begin($) }
                    pr.cc($.content, ($) => {
                        pr.cc($["clause"], ($) => {
                            ((
                                $: api.TNroot_import$_clause$<Annotation>,
                            ) => {
                                if (foo["root_import$_clause$"] !== undefined) { foo["root_import$_clause$"].begin($) }
                                pr.cc($.content, ($) => {
                                    switch ($[0]) {
                                        case "namespace": {
                                            pr.cc($[1], ($) => {
                                                ((
                                                    $: api.TNroot_import$_clause$_namespace$<Annotation>,
                                                ) => {
                                                    if (foo["root_import$_clause$_namespace$"] !== undefined) { foo["root_import$_clause$_namespace$"].begin($) }
                                                    pr.cc($.content, ($) => {
                                                        X_identifier($)
                                                    })
                                                    if (foo["root_import$_clause$_namespace$"] !== undefined) { foo["root_import$_clause$_namespace$"].end($) }
                                                })($)
                                            })
                                            break
                                        }
                                        case "named": {
                                            pr.cc($[1], ($) => {
                                                ((
                                                    $: api.TNroot_import$_clause$_named$<Annotation>,
                                                ) => {
                                                    if (foo["root_import$_clause$_named$"] !== undefined) { foo["root_import$_clause$_named$"].begin($) }
                                                    pr.cc($.content, ($) => {
                                                        $.forEach(($) => {
                                                            ((
                                                                $: api.TNroot_import$_clause$_named$$<Annotation>,
                                                            ) => {
                                                                if (foo["root_import$_clause$_named$$"] !== undefined) { foo["root_import$_clause$_named$$"].begin($) }
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
                                                                if (foo["root_import$_clause$_named$$"] !== undefined) { foo["root_import$_clause$_named$$"].end($) }
                                                            })($)
                                                        })
                                                    })
                                                    if (foo["root_import$_clause$_named$"] !== undefined) { foo["root_import$_clause$_named$"].end($) }
                                                })($)
                                            })
                                            break
                                        }
                                        default: pr.au($[0])
                                    }
                                })
                                if (foo["root_import$_clause$"] !== undefined) { foo["root_import$_clause$"].end($) }
                            })($)
                        })
                        pr.cc($["file"], ($) => {
                            ((
                                $: api.TNroot_import$_file$<Annotation>,
                            ) => {
                                if (foo["root_import$_file$"] !== undefined) { foo["root_import$_file$"]($) }
                            })($)
                        })
                    })
                    if (foo["root_import$"] !== undefined) { foo["root_import$"].end($) }
                })($)
            })
            pr.cc($["variables"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.TNroot_variables$<Annotation>,
                    ) => {
                        if (foo["root_variables$"] !== undefined) { foo["root_variables$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["export"], ($) => {
                                ((
                                    $: api.TNroot_variables$_export$<Annotation>,
                                ) => {
                                    if (foo["root_variables$_export$"] !== undefined) { foo["root_variables$_export$"]($) }
                                })($)
                            })
                            pr.cc($["variableDeclarationList"], ($) => {
                                ((
                                    $: api.TNroot_variables$_variableDeclarationList$<Annotation>,
                                ) => {
                                    if (foo["root_variables$_variableDeclarationList$"] !== undefined) { foo["root_variables$_variableDeclarationList$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            ((
                                                $: api.TNroot_variables$_variableDeclarationList$$<Annotation>,
                                            ) => {
                                                if (foo["root_variables$_variableDeclarationList$$"] !== undefined) { foo["root_variables$_variableDeclarationList$$"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["name"], ($) => {
                                                        ((
                                                            $: api.TNroot_variables$_variableDeclarationList$$_name$<Annotation>,
                                                        ) => {
                                                            if (foo["root_variables$_variableDeclarationList$$_name$"] !== undefined) { foo["root_variables$_variableDeclarationList$$_name$"]($) }
                                                        })($)
                                                    })
                                                    pr.cc($["type"], ($) => {
                                                        ((
                                                            $: api.TNroot_variables$_variableDeclarationList$$_type$<Annotation>,
                                                        ) => {
                                                            if (foo["root_variables$_variableDeclarationList$$_type$"] !== undefined) { foo["root_variables$_variableDeclarationList$$_type$"].begin($) }
                                                            pr.cc($.content, ($) => {
                                                                pr.cc($["name"], ($) => {
                                                                    ((
                                                                        $: api.TNroot_variables$_variableDeclarationList$$_type$_name$<Annotation>,
                                                                    ) => {
                                                                        if (foo["root_variables$_variableDeclarationList$$_type$_name$"] !== undefined) { foo["root_variables$_variableDeclarationList$$_type$_name$"].begin($) }
                                                                        pr.cc($.content, ($) => {
                                                                            pr.cc($["context"], ($) => {
                                                                                ((
                                                                                    $: api.TNroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation>,
                                                                                ) => {
                                                                                    if (foo["root_variables$_variableDeclarationList$$_type$_name$_context$"] !== undefined) { foo["root_variables$_variableDeclarationList$$_type$_name$_context$"]($) }
                                                                                })($)
                                                                            })
                                                                            pr.cc($["type"], ($) => {
                                                                                ((
                                                                                    $: api.TNroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation>,
                                                                                ) => {
                                                                                    if (foo["root_variables$_variableDeclarationList$$_type$_name$_type$"] !== undefined) { foo["root_variables$_variableDeclarationList$$_type$_name$_type$"]($) }
                                                                                })($)
                                                                            })
                                                                        })
                                                                        if (foo["root_variables$_variableDeclarationList$$_type$_name$"] !== undefined) { foo["root_variables$_variableDeclarationList$$_type$_name$"].end($) }
                                                                    })($)
                                                                })
                                                            })
                                                            if (foo["root_variables$_variableDeclarationList$$_type$"] !== undefined) { foo["root_variables$_variableDeclarationList$$_type$"].end($) }
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
                                                if (foo["root_variables$_variableDeclarationList$$"] !== undefined) { foo["root_variables$_variableDeclarationList$$"].end($) }
                                            })($)
                                        })
                                    })
                                    if (foo["root_variables$_variableDeclarationList$"] !== undefined) { foo["root_variables$_variableDeclarationList$"].end($) }
                                })($)
                            })
                        })
                        if (foo["root_variables$"] !== undefined) { foo["root_variables$"].end($) }
                    })($)
                })
            })
            pr.cc($["endOfFile"], ($) => {
                ((
                    $: api.TNroot_endOfFile$<Annotation>,
                ) => {
                    if (foo["root_endOfFile$"] !== undefined) { foo["root_endOfFile$"]($) }
                })($)
            })
        })
        if (foo["root"] !== undefined) { foo["root"].end($) }
    })($)
}