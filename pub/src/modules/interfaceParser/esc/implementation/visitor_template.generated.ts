import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api.generated"
import * as foox from "./visitor_template2.generated"

export function visit<Annotation>(
    $: api.TNroot<Annotation>,
    foo: foox.FOO<Annotation>,
): void {
    function X_functionType(
        $: api.TGfunctionType<Annotation>,
    ) {
        ((
            $: api.TNGfunctionType$<Annotation>,
        ) => {
            if (foo["GfunctionType$"] !== undefined) { foo["GfunctionType$"].begin($) }
            pr.cc($.content, ($) => {
                pr.cc($["parameters"], ($) => {
                    $.forEach(($) => {
                        ((
                            $: api.TNGfunctionType$_parameters$<Annotation>,
                        ) => {
                            if (foo["GfunctionType$_parameters$"] !== undefined) { foo["GfunctionType$_parameters$"].begin($) }
                            pr.cc($.content, ($) => {
                                pr.cc($["name"], ($) => {
                                    X_identifier($)
                                })
                                pr.cc($["type"], ($) => {
                                    switch ($[0]) {
                                        case "type": {
                                            pr.cc($[1], ($) => {
                                                switch ($[0]) {
                                                    case "array": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGfunctionType$_parameters$_type_type_array$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_array$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_array$"].begin($) }
                                                                pr.cc($.content, ($) => {
                                                                    X_type($)
                                                                })
                                                                if (foo["GfunctionType$_parameters$_type_type_array$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_array$"].end($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "boolean": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGfunctionType$_parameters$_type_type_boolean$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_boolean$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_boolean$"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "string": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGfunctionType$_parameters$_type_type_string$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_string$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_string$"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "number": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGfunctionType$_parameters$_type_type_number$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_number$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_number$"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "typeLiteral": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGfunctionType$_parameters$_type_type_typeLiteral$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_typeLiteral$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$"].begin($) }
                                                                pr.cc($.content, ($) => {
                                                                    $.forEach(($) => {
                                                                        switch ($[0]) {
                                                                            case "index": {
                                                                                pr.cc($[1], ($) => {
                                                                                    ((
                                                                                        $: api.TNGfunctionType$_parameters$_type_type_typeLiteral$_index$<Annotation>,
                                                                                    ) => {
                                                                                        if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_index$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_index$"].begin($) }
                                                                                        pr.cc($.content, ($) => {
                                                                                            pr.cc($["key"], ($) => {
                                                                                                ((
                                                                                                    $: api.TNGfunctionType$_parameters$_type_type_typeLiteral$_index$_key$<Annotation>,
                                                                                                ) => {
                                                                                                    if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_index$_key$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_index$_key$"].begin($) }
                                                                                                    pr.cc($.content, ($) => {
                                                                                                        pr.cc($["name"], ($) => {
                                                                                                            X_identifier($)
                                                                                                        })
                                                                                                        pr.cc($["type"], ($) => {
                                                                                                            if ($ === null) {
                                                                                                                //FIXME??
                                                                                                            } else {
                                                                                                                X_type($)
                                                                                                            }
                                                                                                        })
                                                                                                    })
                                                                                                    if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_index$_key$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_index$_key$"].end($) }
                                                                                                })($)
                                                                                            })
                                                                                            pr.cc($["type"], ($) => {
                                                                                                if ($ === null) {
                                                                                                    //FIXME??
                                                                                                } else {
                                                                                                    X_type($)
                                                                                                }
                                                                                            })
                                                                                        })
                                                                                        if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_index$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_index$"].end($) }
                                                                                    })($)
                                                                                })
                                                                                break
                                                                            }
                                                                            case "property": {
                                                                                pr.cc($[1], ($) => {
                                                                                    ((
                                                                                        $: api.TNGfunctionType$_parameters$_type_type_typeLiteral$_property$<Annotation>,
                                                                                    ) => {
                                                                                        if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$"].begin($) }
                                                                                        pr.cc($.content, ($) => {
                                                                                            pr.cc($["readonly"], ($) => {
                                                                                                ((
                                                                                                    $: api.TNGfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$<Annotation>,
                                                                                                ) => {
                                                                                                    if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$"]($) }
                                                                                                })($)
                                                                                            })
                                                                                            pr.cc($["name"], ($) => {
                                                                                                ((
                                                                                                    $: api.TNGfunctionType$_parameters$_type_type_typeLiteral$_property$_name$<Annotation>,
                                                                                                ) => {
                                                                                                    if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$_name$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$_name$"]($) }
                                                                                                })($)
                                                                                            })
                                                                                            pr.cc($["questionToken"], ($) => {
                                                                                                if ($ === null) {
                                                                                                    //FIXME??
                                                                                                } else {
                                                                                                    ((
                                                                                                        $: api.TNGfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken$<Annotation>,
                                                                                                    ) => {
                                                                                                        if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken$"]($) }
                                                                                                    })($)
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
                                                                                        if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$"].end($) }
                                                                                    })($)
                                                                                })
                                                                                break
                                                                            }
                                                                            default: pr.au($[0])
                                                                        }
                                                                    })
                                                                })
                                                                if (foo["GfunctionType$_parameters$_type_type_typeLiteral$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$"].end($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "typeReference": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGfunctionType$_parameters$_type_type_typeReference$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_typeReference$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeReference$"].begin($) }
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
                                                                                        $: api.TNGfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$<Annotation>,
                                                                                    ) => {
                                                                                        if (foo["GfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$"].begin($) }
                                                                                        pr.cc($.content, ($) => {
                                                                                            pr.cc($["context"], ($) => {
                                                                                                X_identifier($)
                                                                                            })
                                                                                            pr.cc($["type"], ($) => {
                                                                                                X_identifier($)
                                                                                            })
                                                                                        })
                                                                                        if (foo["GfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$"].end($) }
                                                                                    })($)
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
                                                                if (foo["GfunctionType$_parameters$_type_type_typeReference$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeReference$"].end($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "union": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGfunctionType$_parameters$_type_type_union$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_union$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_union$"].begin($) }
                                                                pr.cc($.content, ($) => {
                                                                    $.forEach(($) => {
                                                                        ((
                                                                            $: api.TNGfunctionType$_parameters$_type_type_union$$<Annotation>,
                                                                        ) => {
                                                                            if (foo["GfunctionType$_parameters$_type_type_union$$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_union$$"].begin($) }
                                                                            pr.cc($.content, ($) => {
                                                                                pr.cc($["state"], ($) => {
                                                                                    ((
                                                                                        $: api.TNGfunctionType$_parameters$_type_type_union$$_state$<Annotation>,
                                                                                    ) => {
                                                                                        if (foo["GfunctionType$_parameters$_type_type_union$$_state$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_union$$_state$"].begin($) }
                                                                                        pr.cc($.content, ($) => {
                                                                                            switch ($[0]) {
                                                                                                case "string": {
                                                                                                    pr.cc($[1], ($) => {
                                                                                                        ((
                                                                                                            $: api.TNGfunctionType$_parameters$_type_type_union$$_state$_string$<Annotation>,
                                                                                                        ) => {
                                                                                                            if (foo["GfunctionType$_parameters$_type_type_union$$_state$_string$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_union$$_state$_string$"]($) }
                                                                                                        })($)
                                                                                                    })
                                                                                                    break
                                                                                                }
                                                                                                default: pr.au($[0])
                                                                                            }
                                                                                        })
                                                                                        if (foo["GfunctionType$_parameters$_type_type_union$$_state$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_union$$_state$"].end($) }
                                                                                    })($)
                                                                                })
                                                                                pr.cc($["data"], ($) => {
                                                                                    X_type($)
                                                                                })
                                                                            })
                                                                            if (foo["GfunctionType$_parameters$_type_type_union$$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_union$$"].end($) }
                                                                        })($)
                                                                    })
                                                                })
                                                                if (foo["GfunctionType$_parameters$_type_type_union$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_union$"].end($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    default: pr.au($[0])
                                                }
                                            })
                                            break
                                        }
                                        case "function": {
                                            pr.cc($[1], ($) => {
                                                X_functionType($)
                                            })
                                            break
                                        }
                                        default: pr.au($[0])
                                    }
                                })
                            })
                            if (foo["GfunctionType$_parameters$"] !== undefined) { foo["GfunctionType$_parameters$"].end($) }
                        })($)
                    })
                })
                pr.cc($["void"], ($) => {
                    ((
                        $: api.TNGfunctionType$_void$<Annotation>,
                    ) => {
                        if (foo["GfunctionType$_void$"] !== undefined) { foo["GfunctionType$_void$"]($) }
                    })($)
                })
            })
            if (foo["GfunctionType$"] !== undefined) { foo["GfunctionType$"].end($) }
        })($)
    }
    function X_identifier(
        $: api.TGidentifier<Annotation>,
    ) {
        ((
            $: api.TNGidentifier$<Annotation>,
        ) => {
            if (foo["Gidentifier$"] !== undefined) { foo["Gidentifier$"]($) }
        })($)
    }
    function X_type(
        $: api.TGtype<Annotation>,
    ) {
        switch ($[0]) {
            case "function": {
                pr.cc($[1], ($) => {
                    X_functionType($)
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
            pr.cc($["imports"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.TNroot_imports$<Annotation>,
                    ) => {
                        if (foo["root_imports$"] !== undefined) { foo["root_imports$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["clause"], ($) => {
                                ((
                                    $: api.TNroot_imports$_clause$<Annotation>,
                                ) => {
                                    if (foo["root_imports$_clause$"] !== undefined) { foo["root_imports$_clause$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNroot_imports$_clause$_namespace$<Annotation>,
                                                    ) => {
                                                        if (foo["root_imports$_clause$_namespace$"] !== undefined) { foo["root_imports$_clause$_namespace$"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if (foo["root_imports$_clause$_namespace$"] !== undefined) { foo["root_imports$_clause$_namespace$"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "named": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNroot_imports$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (foo["root_imports$_clause$_named$"] !== undefined) { foo["root_imports$_clause$_named$"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNroot_imports$_clause$_named$$<Annotation>,
                                                                ) => {
                                                                    if (foo["root_imports$_clause$_named$$"] !== undefined) { foo["root_imports$_clause$_named$$"].begin($) }
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
                                                                    if (foo["root_imports$_clause$_named$$"] !== undefined) { foo["root_imports$_clause$_named$$"].end($) }
                                                                })($)
                                                            })
                                                        })
                                                        if (foo["root_imports$_clause$_named$"] !== undefined) { foo["root_imports$_clause$_named$"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            default: pr.au($[0])
                                        }
                                    })
                                    if (foo["root_imports$_clause$"] !== undefined) { foo["root_imports$_clause$"].end($) }
                                })($)
                            })
                            pr.cc($["file"], ($) => {
                                ((
                                    $: api.TNroot_imports$_file$<Annotation>,
                                ) => {
                                    if (foo["root_imports$_file$"] !== undefined) { foo["root_imports$_file$"]($) }
                                })($)
                            })
                        })
                        if (foo["root_imports$"] !== undefined) { foo["root_imports$"].end($) }
                    })($)
                })
            })
            pr.cc($["typeAliases"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.TNroot_typeAliases$<Annotation>,
                    ) => {
                        if (foo["root_typeAliases$"] !== undefined) { foo["root_typeAliases$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["export"], ($) => {
                                ((
                                    $: api.TNroot_typeAliases$_export$<Annotation>,
                                ) => {
                                    if (foo["root_typeAliases$_export$"] !== undefined) { foo["root_typeAliases$_export$"]($) }
                                })($)
                            })
                            pr.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNroot_typeAliases$_typeParameters$<Annotation>,
                                    ) => {
                                        if (foo["root_typeAliases$_typeParameters$"] !== undefined) { foo["root_typeAliases$_typeParameters$"].begin($) }
                                        pr.cc($.content, ($) => {
                                            X_identifier($)
                                        })
                                        if (foo["root_typeAliases$_typeParameters$"] !== undefined) { foo["root_typeAliases$_typeParameters$"].end($) }
                                    })($)
                                })
                            })
                            pr.cc($["type"], ($) => {
                                X_type($)
                            })
                        })
                        if (foo["root_typeAliases$"] !== undefined) { foo["root_typeAliases$"].end($) }
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