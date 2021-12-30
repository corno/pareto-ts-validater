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
    function X_type(
        $: api.TGtype<Annotation>,
    ) {
        switch ($[0]) {
            case "array": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_array$<Annotation>,
                    ) => {
                        if (foo["Gtype_array$"] !== undefined) { foo["Gtype_array$"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["Gtype_array$"] !== undefined) { foo["Gtype_array$"].end($) }
                    })($)
                })
                break
            }
            case "boolean": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_boolean$<Annotation>,
                    ) => {
                        if (foo["Gtype_boolean$"] !== undefined) { foo["Gtype_boolean$"]($) }
                    })($)
                })
                break
            }
            case "string": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_string$<Annotation>,
                    ) => {
                        if (foo["Gtype_string$"] !== undefined) { foo["Gtype_string$"]($) }
                    })($)
                })
                break
            }
            case "number": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_number$<Annotation>,
                    ) => {
                        if (foo["Gtype_number$"] !== undefined) { foo["Gtype_number$"]($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeLiteral$<Annotation>,
                    ) => {
                        if (foo["Gtype_typeLiteral$"] !== undefined) { foo["Gtype_typeLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                switch ($[0]) {
                                    case "index": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeLiteral$_index$<Annotation>,
                                            ) => {
                                                if (foo["Gtype_typeLiteral$_index$"] !== undefined) { foo["Gtype_typeLiteral$_index$"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["key"], ($) => {
                                                        ((
                                                            $: api.TNGtype_typeLiteral$_index$_key$<Annotation>,
                                                        ) => {
                                                            if (foo["Gtype_typeLiteral$_index$_key$"] !== undefined) { foo["Gtype_typeLiteral$_index$_key$"].begin($) }
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
                                                            if (foo["Gtype_typeLiteral$_index$_key$"] !== undefined) { foo["Gtype_typeLiteral$_index$_key$"].end($) }
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
                                                if (foo["Gtype_typeLiteral$_index$"] !== undefined) { foo["Gtype_typeLiteral$_index$"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "property": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeLiteral$_property$<Annotation>,
                                            ) => {
                                                if (foo["Gtype_typeLiteral$_property$"] !== undefined) { foo["Gtype_typeLiteral$_property$"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["readonly"], ($) => {
                                                        ((
                                                            $: api.TNGtype_typeLiteral$_property$_readonly$<Annotation>,
                                                        ) => {
                                                            if (foo["Gtype_typeLiteral$_property$_readonly$"] !== undefined) { foo["Gtype_typeLiteral$_property$_readonly$"]($) }
                                                        })($)
                                                    })
                                                    pr.cc($["name"], ($) => {
                                                        ((
                                                            $: api.TNGtype_typeLiteral$_property$_name$<Annotation>,
                                                        ) => {
                                                            if (foo["Gtype_typeLiteral$_property$_name$"] !== undefined) { foo["Gtype_typeLiteral$_property$_name$"]($) }
                                                        })($)
                                                    })
                                                    pr.cc($["questionToken"], ($) => {
                                                        if ($ === null) {
                                                            //FIXME??
                                                        } else {
                                                            ((
                                                                $: api.TNGtype_typeLiteral$_property$_questionToken$<Annotation>,
                                                            ) => {
                                                                if (foo["Gtype_typeLiteral$_property$_questionToken$"] !== undefined) { foo["Gtype_typeLiteral$_property$_questionToken$"]($) }
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
                                                if (foo["Gtype_typeLiteral$_property$"] !== undefined) { foo["Gtype_typeLiteral$_property$"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pr.au($[0])
                                }
                            })
                        })
                        if (foo["Gtype_typeLiteral$"] !== undefined) { foo["Gtype_typeLiteral$"].end($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeReference$<Annotation>,
                    ) => {
                        if (foo["Gtype_typeReference$"] !== undefined) { foo["Gtype_typeReference$"].begin($) }
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
                                                if (foo["Gtype_typeReference$_referencedType_qualifiedName$"] !== undefined) { foo["Gtype_typeReference$_referencedType_qualifiedName$"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["context"], ($) => {
                                                        X_identifier($)
                                                    })
                                                    pr.cc($["type"], ($) => {
                                                        X_identifier($)
                                                    })
                                                })
                                                if (foo["Gtype_typeReference$_referencedType_qualifiedName$"] !== undefined) { foo["Gtype_typeReference$_referencedType_qualifiedName$"].end($) }
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
                        if (foo["Gtype_typeReference$"] !== undefined) { foo["Gtype_typeReference$"].end($) }
                    })($)
                })
                break
            }
            case "union": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_union$<Annotation>,
                    ) => {
                        if (foo["Gtype_union$"] !== undefined) { foo["Gtype_union$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGtype_union$$<Annotation>,
                                ) => {
                                    if (foo["Gtype_union$$"] !== undefined) { foo["Gtype_union$$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["state"], ($) => {
                                            ((
                                                $: api.TNGtype_union$$_state$<Annotation>,
                                            ) => {
                                                if (foo["Gtype_union$$_state$"] !== undefined) { foo["Gtype_union$$_state$"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    switch ($[0]) {
                                                        case "string": {
                                                            pr.cc($[1], ($) => {
                                                                ((
                                                                    $: api.TNGtype_union$$_state$_string$<Annotation>,
                                                                ) => {
                                                                    if (foo["Gtype_union$$_state$_string$"] !== undefined) { foo["Gtype_union$$_state$_string$"]($) }
                                                                })($)
                                                            })
                                                            break
                                                        }
                                                        default: pr.au($[0])
                                                    }
                                                })
                                                if (foo["Gtype_union$$_state$"] !== undefined) { foo["Gtype_union$$_state$"].end($) }
                                            })($)
                                        })
                                        pr.cc($["data"], ($) => {
                                            X_type($)
                                        })
                                    })
                                    if (foo["Gtype_union$$"] !== undefined) { foo["Gtype_union$$"].end($) }
                                })($)
                            })
                        })
                        if (foo["Gtype_union$"] !== undefined) { foo["Gtype_union$"].end($) }
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