import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api.generated"

export type FOO<Annotation> = {
    "Gidentifier$"?: ($: api.NGidentifier$<Annotation>) => void
    "Ginitialization_arrayLiteral$"?: {
        begin: ($: api.NGinitialization_arrayLiteral$<Annotation>) => void,
        end: ($: api.NGinitialization_arrayLiteral$<Annotation>) => void,
    }
    "Ginitialization_false$"?: ($: api.NGinitialization_false$<Annotation>) => void
    "Ginitialization_identifier$"?: ($: api.NGinitialization_identifier$<Annotation>) => void
    "Ginitialization_noSubstitutionTemplateLiteral$"?: ($: api.NGinitialization_noSubstitutionTemplateLiteral$<Annotation>) => void
    "Ginitialization_numericLiteral$"?: ($: api.NGinitialization_numericLiteral$<Annotation>) => void
    "Ginitialization_objectLiteral$$_name_identifier$"?: ($: api.NGinitialization_objectLiteral$$_name_identifier$<Annotation>) => void
    "Ginitialization_objectLiteral$$_name_stringLiteral$"?: ($: api.NGinitialization_objectLiteral$$_name_stringLiteral$<Annotation>) => void
    "Ginitialization_objectLiteral$$"?: {
        begin: ($: api.NGinitialization_objectLiteral$$<Annotation>) => void,
        end: ($: api.NGinitialization_objectLiteral$$<Annotation>) => void,
    }
    "Ginitialization_objectLiteral$"?: {
        begin: ($: api.NGinitialization_objectLiteral$<Annotation>) => void,
        end: ($: api.NGinitialization_objectLiteral$<Annotation>) => void,
    }
    "Ginitialization_true$"?: ($: api.NGinitialization_true$<Annotation>) => void
    "root_import$_clause$_namespace$"?: {
        begin: ($: api.Nroot_import$_clause$_namespace$<Annotation>) => void,
        end: ($: api.Nroot_import$_clause$_namespace$<Annotation>) => void,
    }
    "root_import$_clause$_named$$"?: {
        begin: ($: api.Nroot_import$_clause$_named$$<Annotation>) => void,
        end: ($: api.Nroot_import$_clause$_named$$<Annotation>) => void,
    }
    "root_import$_clause$_named$"?: {
        begin: ($: api.Nroot_import$_clause$_named$<Annotation>) => void,
        end: ($: api.Nroot_import$_clause$_named$<Annotation>) => void,
    }
    "root_import$_clause$"?: {
        begin: ($: api.Nroot_import$_clause$<Annotation>) => void,
        end: ($: api.Nroot_import$_clause$<Annotation>) => void,
    }
    "root_import$_file$"?: ($: api.Nroot_import$_file$<Annotation>) => void
    "root_import$"?: {
        begin: ($: api.Nroot_import$<Annotation>) => void,
        end: ($: api.Nroot_import$<Annotation>) => void,
    }
    "root_variables$_export$"?: ($: api.Nroot_variables$_export$<Annotation>) => void
    "root_variables$_variableDeclarationList$$_name$"?: ($: api.Nroot_variables$_variableDeclarationList$$_name$<Annotation>) => void
    "root_variables$_variableDeclarationList$$_type$_name$_context$"?: ($: api.Nroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation>) => void
    "root_variables$_variableDeclarationList$$_type$_name$_type$"?: ($: api.Nroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation>) => void
    "root_variables$_variableDeclarationList$$_type$_name$"?: {
        begin: ($: api.Nroot_variables$_variableDeclarationList$$_type$_name$<Annotation>) => void,
        end: ($: api.Nroot_variables$_variableDeclarationList$$_type$_name$<Annotation>) => void,
    }
    "root_variables$_variableDeclarationList$$_type$"?: {
        begin: ($: api.Nroot_variables$_variableDeclarationList$$_type$<Annotation>) => void,
        end: ($: api.Nroot_variables$_variableDeclarationList$$_type$<Annotation>) => void,
    }
    "root_variables$_variableDeclarationList$$"?: {
        begin: ($: api.Nroot_variables$_variableDeclarationList$$<Annotation>) => void,
        end: ($: api.Nroot_variables$_variableDeclarationList$$<Annotation>) => void,
    }
    "root_variables$_variableDeclarationList$"?: {
        begin: ($: api.Nroot_variables$_variableDeclarationList$<Annotation>) => void,
        end: ($: api.Nroot_variables$_variableDeclarationList$<Annotation>) => void,
    }
    "root_variables$"?: {
        begin: ($: api.Nroot_variables$<Annotation>) => void,
        end: ($: api.Nroot_variables$<Annotation>) => void,
    }
    "root_endOfFile$"?: ($: api.Nroot_endOfFile$<Annotation>) => void
    "root"?: {
        begin: ($: api.Nroot<Annotation>) => void,
        end: ($: api.Nroot<Annotation>) => void,
    }
}

export const foo: FOO<string> = {
    "Gidentifier$": ($) => { console.log("Gidentifier$") },
    "Ginitialization_arrayLiteral$": {
        begin: ($) => { console.log("Ginitialization_arrayLiteral$ begin") },
        end: ($) => { console.log("Ginitialization_arrayLiteral$ end") },
    },
    "Ginitialization_false$": ($) => { console.log("Ginitialization_false$") },
    "Ginitialization_identifier$": ($) => { console.log("Ginitialization_identifier$") },
    "Ginitialization_noSubstitutionTemplateLiteral$": ($) => { console.log("Ginitialization_noSubstitutionTemplateLiteral$") },
    "Ginitialization_numericLiteral$": ($) => { console.log("Ginitialization_numericLiteral$") },
    "Ginitialization_objectLiteral$$_name_identifier$": ($) => { console.log("Ginitialization_objectLiteral$$_name_identifier$") },
    "Ginitialization_objectLiteral$$_name_stringLiteral$": ($) => { console.log("Ginitialization_objectLiteral$$_name_stringLiteral$") },
    "Ginitialization_objectLiteral$$": {
        begin: ($) => { console.log("Ginitialization_objectLiteral$$ begin") },
        end: ($) => { console.log("Ginitialization_objectLiteral$$ end") },
    },
    "Ginitialization_objectLiteral$": {
        begin: ($) => { console.log("Ginitialization_objectLiteral$ begin") },
        end: ($) => { console.log("Ginitialization_objectLiteral$ end") },
    },
    "Ginitialization_true$": ($) => { console.log("Ginitialization_true$") },
    "root_import$_clause$_namespace$": {
        begin: ($) => { console.log("root_import$_clause$_namespace$ begin") },
        end: ($) => { console.log("root_import$_clause$_namespace$ end") },
    },
    "root_import$_clause$_named$$": {
        begin: ($) => { console.log("root_import$_clause$_named$$ begin") },
        end: ($) => { console.log("root_import$_clause$_named$$ end") },
    },
    "root_import$_clause$_named$": {
        begin: ($) => { console.log("root_import$_clause$_named$ begin") },
        end: ($) => { console.log("root_import$_clause$_named$ end") },
    },
    "root_import$_clause$": {
        begin: ($) => { console.log("root_import$_clause$ begin") },
        end: ($) => { console.log("root_import$_clause$ end") },
    },
    "root_import$_file$": ($) => { console.log("root_import$_file$") },
    "root_import$": {
        begin: ($) => { console.log("root_import$ begin") },
        end: ($) => { console.log("root_import$ end") },
    },
    "root_variables$_export$": ($) => { console.log("root_variables$_export$") },
    "root_variables$_variableDeclarationList$$_name$": ($) => { console.log("root_variables$_variableDeclarationList$$_name$") },
    "root_variables$_variableDeclarationList$$_type$_name$_context$": ($) => { console.log("root_variables$_variableDeclarationList$$_type$_name$_context$") },
    "root_variables$_variableDeclarationList$$_type$_name$_type$": ($) => { console.log("root_variables$_variableDeclarationList$$_type$_name$_type$") },
    "root_variables$_variableDeclarationList$$_type$_name$": {
        begin: ($) => { console.log("root_variables$_variableDeclarationList$$_type$_name$ begin") },
        end: ($) => { console.log("root_variables$_variableDeclarationList$$_type$_name$ end") },
    },
    "root_variables$_variableDeclarationList$$_type$": {
        begin: ($) => { console.log("root_variables$_variableDeclarationList$$_type$ begin") },
        end: ($) => { console.log("root_variables$_variableDeclarationList$$_type$ end") },
    },
    "root_variables$_variableDeclarationList$$": {
        begin: ($) => { console.log("root_variables$_variableDeclarationList$$ begin") },
        end: ($) => { console.log("root_variables$_variableDeclarationList$$ end") },
    },
    "root_variables$_variableDeclarationList$": {
        begin: ($) => { console.log("root_variables$_variableDeclarationList$ begin") },
        end: ($) => { console.log("root_variables$_variableDeclarationList$ end") },
    },
    "root_variables$": {
        begin: ($) => { console.log("root_variables$ begin") },
        end: ($) => { console.log("root_variables$ end") },
    },
    "root_endOfFile$": ($) => { console.log("root_endOfFile$") },
    "root": {
        begin: ($) => { console.log("root begin") },
        end: ($) => { console.log("root end") },
    },
}

export function visit<Annotation>(
    $: api.Nroot<Annotation>,
    foo: FOO<Annotation>,
): void {
    function X_identifier(
        $: api.Gidentifier<Annotation>,
    ) {
        ((
            $: api.NGidentifier$<Annotation>,
        ) => {
            if (foo["Gidentifier$"] !== undefined) { foo["Gidentifier$"]($) }
        })($)
    }
    function X_initialization(
        $: api.Ginitialization<Annotation>,
    ) {
        switch ($[0]) {
            case "arrayLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGinitialization_arrayLiteral$<Annotation>,
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
                        $: api.NGinitialization_false$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_false$"] !== undefined) { foo["Ginitialization_false$"]($) }
                    })($)
                })
                break
            }
            case "identifier": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGinitialization_identifier$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_identifier$"] !== undefined) { foo["Ginitialization_identifier$"]($) }
                    })($)
                })
                break
            }
            case "noSubstitutionTemplateLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGinitialization_noSubstitutionTemplateLiteral$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_noSubstitutionTemplateLiteral$"] !== undefined) { foo["Ginitialization_noSubstitutionTemplateLiteral$"]($) }
                    })($)
                })
                break
            }
            case "numericLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGinitialization_numericLiteral$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_numericLiteral$"] !== undefined) { foo["Ginitialization_numericLiteral$"]($) }
                    })($)
                })
                break
            }
            case "objectLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGinitialization_objectLiteral$<Annotation>,
                    ) => {
                        if (foo["Ginitialization_objectLiteral$"] !== undefined) { foo["Ginitialization_objectLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.NGinitialization_objectLiteral$$<Annotation>,
                                ) => {
                                    if (foo["Ginitialization_objectLiteral$$"] !== undefined) { foo["Ginitialization_objectLiteral$$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["name"], ($) => {
                                            switch ($[0]) {
                                                case "identifier": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.NGinitialization_objectLiteral$$_name_identifier$<Annotation>,
                                                        ) => {
                                                            if (foo["Ginitialization_objectLiteral$$_name_identifier$"] !== undefined) { foo["Ginitialization_objectLiteral$$_name_identifier$"]($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "stringLiteral": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.NGinitialization_objectLiteral$$_name_stringLiteral$<Annotation>,
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
                        $: api.NGinitialization_true$<Annotation>,
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
        $: api.Nroot<Annotation>,
    ) => {
        if (foo["root"] !== undefined) { foo["root"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["import"], ($) => {
                ((
                    $: api.Nroot_import$<Annotation>,
                ) => {
                    if (foo["root_import$"] !== undefined) { foo["root_import$"].begin($) }
                    pr.cc($.content, ($) => {
                        pr.cc($["clause"], ($) => {
                            ((
                                $: api.Nroot_import$_clause$<Annotation>,
                            ) => {
                                if (foo["root_import$_clause$"] !== undefined) { foo["root_import$_clause$"].begin($) }
                                pr.cc($.content, ($) => {
                                    switch ($[0]) {
                                        case "namespace": {
                                            pr.cc($[1], ($) => {
                                                ((
                                                    $: api.Nroot_import$_clause$_namespace$<Annotation>,
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
                                                    $: api.Nroot_import$_clause$_named$<Annotation>,
                                                ) => {
                                                    if (foo["root_import$_clause$_named$"] !== undefined) { foo["root_import$_clause$_named$"].begin($) }
                                                    pr.cc($.content, ($) => {
                                                        $.forEach(($) => {
                                                            ((
                                                                $: api.Nroot_import$_clause$_named$$<Annotation>,
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
                                $: api.Nroot_import$_file$<Annotation>,
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
                        $: api.Nroot_variables$<Annotation>,
                    ) => {
                        if (foo["root_variables$"] !== undefined) { foo["root_variables$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["export"], ($) => {
                                ((
                                    $: api.Nroot_variables$_export$<Annotation>,
                                ) => {
                                    if (foo["root_variables$_export$"] !== undefined) { foo["root_variables$_export$"]($) }
                                })($)
                            })
                            pr.cc($["variableDeclarationList"], ($) => {
                                ((
                                    $: api.Nroot_variables$_variableDeclarationList$<Annotation>,
                                ) => {
                                    if (foo["root_variables$_variableDeclarationList$"] !== undefined) { foo["root_variables$_variableDeclarationList$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        $.forEach(($) => {
                                            ((
                                                $: api.Nroot_variables$_variableDeclarationList$$<Annotation>,
                                            ) => {
                                                if (foo["root_variables$_variableDeclarationList$$"] !== undefined) { foo["root_variables$_variableDeclarationList$$"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["name"], ($) => {
                                                        ((
                                                            $: api.Nroot_variables$_variableDeclarationList$$_name$<Annotation>,
                                                        ) => {
                                                            if (foo["root_variables$_variableDeclarationList$$_name$"] !== undefined) { foo["root_variables$_variableDeclarationList$$_name$"]($) }
                                                        })($)
                                                    })
                                                    pr.cc($["type"], ($) => {
                                                        ((
                                                            $: api.Nroot_variables$_variableDeclarationList$$_type$<Annotation>,
                                                        ) => {
                                                            if (foo["root_variables$_variableDeclarationList$$_type$"] !== undefined) { foo["root_variables$_variableDeclarationList$$_type$"].begin($) }
                                                            pr.cc($.content, ($) => {
                                                                pr.cc($["name"], ($) => {
                                                                    ((
                                                                        $: api.Nroot_variables$_variableDeclarationList$$_type$_name$<Annotation>,
                                                                    ) => {
                                                                        if (foo["root_variables$_variableDeclarationList$$_type$_name$"] !== undefined) { foo["root_variables$_variableDeclarationList$$_type$_name$"].begin($) }
                                                                        pr.cc($.content, ($) => {
                                                                            pr.cc($["context"], ($) => {
                                                                                ((
                                                                                    $: api.Nroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation>,
                                                                                ) => {
                                                                                    if (foo["root_variables$_variableDeclarationList$$_type$_name$_context$"] !== undefined) { foo["root_variables$_variableDeclarationList$$_type$_name$_context$"]($) }
                                                                                })($)
                                                                            })
                                                                            pr.cc($["type"], ($) => {
                                                                                ((
                                                                                    $: api.Nroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation>,
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
                    $: api.Nroot_endOfFile$<Annotation>,
                ) => {
                    if (foo["root_endOfFile$"] !== undefined) { foo["root_endOfFile$"]($) }
                })($)
            })
        })
        if (foo["root"] !== undefined) { foo["root"].end($) }
    })($)
}