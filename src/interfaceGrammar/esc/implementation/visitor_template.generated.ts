import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api.generated"

export type FOO<Annotation> = {
    "GfunctionType$_parameters$_type_type_array$"?: {
        begin: ($: api.NGfunctionType$_parameters$_type_type_array$<Annotation>) => void,
        end: ($: api.NGfunctionType$_parameters$_type_type_array$<Annotation>) => void,
    }
    "GfunctionType$_parameters$_type_type_boolean$"?: ($: api.NGfunctionType$_parameters$_type_type_boolean$<Annotation>) => void
    "GfunctionType$_parameters$_type_type_string$"?: ($: api.NGfunctionType$_parameters$_type_type_string$<Annotation>) => void
    "GfunctionType$_parameters$_type_type_number$"?: ($: api.NGfunctionType$_parameters$_type_type_number$<Annotation>) => void
    "GfunctionType$_parameters$_type_type_typeLiteral$_index$_key$"?: {
        begin: ($: api.NGfunctionType$_parameters$_type_type_typeLiteral$_index$_key$<Annotation>) => void,
        end: ($: api.NGfunctionType$_parameters$_type_type_typeLiteral$_index$_key$<Annotation>) => void,
    }
    "GfunctionType$_parameters$_type_type_typeLiteral$_index$"?: {
        begin: ($: api.NGfunctionType$_parameters$_type_type_typeLiteral$_index$<Annotation>) => void,
        end: ($: api.NGfunctionType$_parameters$_type_type_typeLiteral$_index$<Annotation>) => void,
    }
    "GfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$"?: ($: api.NGfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$<Annotation>) => void
    "GfunctionType$_parameters$_type_type_typeLiteral$_property$_name$"?: ($: api.NGfunctionType$_parameters$_type_type_typeLiteral$_property$_name$<Annotation>) => void
    "GfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken$"?: ($: api.NGfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken$<Annotation>) => void
    "GfunctionType$_parameters$_type_type_typeLiteral$_property$"?: {
        begin: ($: api.NGfunctionType$_parameters$_type_type_typeLiteral$_property$<Annotation>) => void,
        end: ($: api.NGfunctionType$_parameters$_type_type_typeLiteral$_property$<Annotation>) => void,
    }
    "GfunctionType$_parameters$_type_type_typeLiteral$"?: {
        begin: ($: api.NGfunctionType$_parameters$_type_type_typeLiteral$<Annotation>) => void,
        end: ($: api.NGfunctionType$_parameters$_type_type_typeLiteral$<Annotation>) => void,
    }
    "GfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$"?: {
        begin: ($: api.NGfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
        end: ($: api.NGfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
    }
    "GfunctionType$_parameters$_type_type_typeReference$"?: {
        begin: ($: api.NGfunctionType$_parameters$_type_type_typeReference$<Annotation>) => void,
        end: ($: api.NGfunctionType$_parameters$_type_type_typeReference$<Annotation>) => void,
    }
    "GfunctionType$_parameters$_type_type_union$$_state$_string$"?: ($: api.NGfunctionType$_parameters$_type_type_union$$_state$_string$<Annotation>) => void
    "GfunctionType$_parameters$_type_type_union$$_state$"?: {
        begin: ($: api.NGfunctionType$_parameters$_type_type_union$$_state$<Annotation>) => void,
        end: ($: api.NGfunctionType$_parameters$_type_type_union$$_state$<Annotation>) => void,
    }
    "GfunctionType$_parameters$_type_type_union$$"?: {
        begin: ($: api.NGfunctionType$_parameters$_type_type_union$$<Annotation>) => void,
        end: ($: api.NGfunctionType$_parameters$_type_type_union$$<Annotation>) => void,
    }
    "GfunctionType$_parameters$_type_type_union$"?: {
        begin: ($: api.NGfunctionType$_parameters$_type_type_union$<Annotation>) => void,
        end: ($: api.NGfunctionType$_parameters$_type_type_union$<Annotation>) => void,
    }
    "GfunctionType$_parameters$"?: {
        begin: ($: api.NGfunctionType$_parameters$<Annotation>) => void,
        end: ($: api.NGfunctionType$_parameters$<Annotation>) => void,
    }
    "GfunctionType$_void$"?: ($: api.NGfunctionType$_void$<Annotation>) => void
    "GfunctionType$"?: {
        begin: ($: api.NGfunctionType$<Annotation>) => void,
        end: ($: api.NGfunctionType$<Annotation>) => void,
    }
    "Gidentifier$"?: ($: api.NGidentifier$<Annotation>) => void
    "root_imports$_clause$_namespace$"?: {
        begin: ($: api.Nroot_imports$_clause$_namespace$<Annotation>) => void,
        end: ($: api.Nroot_imports$_clause$_namespace$<Annotation>) => void,
    }
    "root_imports$_clause$_named$$"?: {
        begin: ($: api.Nroot_imports$_clause$_named$$<Annotation>) => void,
        end: ($: api.Nroot_imports$_clause$_named$$<Annotation>) => void,
    }
    "root_imports$_clause$_named$"?: {
        begin: ($: api.Nroot_imports$_clause$_named$<Annotation>) => void,
        end: ($: api.Nroot_imports$_clause$_named$<Annotation>) => void,
    }
    "root_imports$_clause$"?: {
        begin: ($: api.Nroot_imports$_clause$<Annotation>) => void,
        end: ($: api.Nroot_imports$_clause$<Annotation>) => void,
    }
    "root_imports$_file$"?: ($: api.Nroot_imports$_file$<Annotation>) => void
    "root_imports$"?: {
        begin: ($: api.Nroot_imports$<Annotation>) => void,
        end: ($: api.Nroot_imports$<Annotation>) => void,
    }
    "root_typeAliases$_export$"?: ($: api.Nroot_typeAliases$_export$<Annotation>) => void
    "root_typeAliases$_typeParameters$"?: {
        begin: ($: api.Nroot_typeAliases$_typeParameters$<Annotation>) => void,
        end: ($: api.Nroot_typeAliases$_typeParameters$<Annotation>) => void,
    }
    "root_typeAliases$"?: {
        begin: ($: api.Nroot_typeAliases$<Annotation>) => void,
        end: ($: api.Nroot_typeAliases$<Annotation>) => void,
    }
    "root_endOfFile$"?: ($: api.Nroot_endOfFile$<Annotation>) => void
    "root"?: {
        begin: ($: api.Nroot<Annotation>) => void,
        end: ($: api.Nroot<Annotation>) => void,
    }
}

export const foo: FOO<string> = {
    "GfunctionType$_parameters$_type_type_array$": {
        begin: ($) => { console.log("GfunctionType$_parameters$_type_type_array$ begin") },
        end: ($) => { console.log("GfunctionType$_parameters$_type_type_array$ end") },
    },
    "GfunctionType$_parameters$_type_type_boolean$": ($) => { console.log("GfunctionType$_parameters$_type_type_boolean$") },
    "GfunctionType$_parameters$_type_type_string$": ($) => { console.log("GfunctionType$_parameters$_type_type_string$") },
    "GfunctionType$_parameters$_type_type_number$": ($) => { console.log("GfunctionType$_parameters$_type_type_number$") },
    "GfunctionType$_parameters$_type_type_typeLiteral$_index$_key$": {
        begin: ($) => { console.log("GfunctionType$_parameters$_type_type_typeLiteral$_index$_key$ begin") },
        end: ($) => { console.log("GfunctionType$_parameters$_type_type_typeLiteral$_index$_key$ end") },
    },
    "GfunctionType$_parameters$_type_type_typeLiteral$_index$": {
        begin: ($) => { console.log("GfunctionType$_parameters$_type_type_typeLiteral$_index$ begin") },
        end: ($) => { console.log("GfunctionType$_parameters$_type_type_typeLiteral$_index$ end") },
    },
    "GfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$": ($) => { console.log("GfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$") },
    "GfunctionType$_parameters$_type_type_typeLiteral$_property$_name$": ($) => { console.log("GfunctionType$_parameters$_type_type_typeLiteral$_property$_name$") },
    "GfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken$": ($) => { console.log("GfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken$") },
    "GfunctionType$_parameters$_type_type_typeLiteral$_property$": {
        begin: ($) => { console.log("GfunctionType$_parameters$_type_type_typeLiteral$_property$ begin") },
        end: ($) => { console.log("GfunctionType$_parameters$_type_type_typeLiteral$_property$ end") },
    },
    "GfunctionType$_parameters$_type_type_typeLiteral$": {
        begin: ($) => { console.log("GfunctionType$_parameters$_type_type_typeLiteral$ begin") },
        end: ($) => { console.log("GfunctionType$_parameters$_type_type_typeLiteral$ end") },
    },
    "GfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$": {
        begin: ($) => { console.log("GfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$ begin") },
        end: ($) => { console.log("GfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$ end") },
    },
    "GfunctionType$_parameters$_type_type_typeReference$": {
        begin: ($) => { console.log("GfunctionType$_parameters$_type_type_typeReference$ begin") },
        end: ($) => { console.log("GfunctionType$_parameters$_type_type_typeReference$ end") },
    },
    "GfunctionType$_parameters$_type_type_union$$_state$_string$": ($) => { console.log("GfunctionType$_parameters$_type_type_union$$_state$_string$") },
    "GfunctionType$_parameters$_type_type_union$$_state$": {
        begin: ($) => { console.log("GfunctionType$_parameters$_type_type_union$$_state$ begin") },
        end: ($) => { console.log("GfunctionType$_parameters$_type_type_union$$_state$ end") },
    },
    "GfunctionType$_parameters$_type_type_union$$": {
        begin: ($) => { console.log("GfunctionType$_parameters$_type_type_union$$ begin") },
        end: ($) => { console.log("GfunctionType$_parameters$_type_type_union$$ end") },
    },
    "GfunctionType$_parameters$_type_type_union$": {
        begin: ($) => { console.log("GfunctionType$_parameters$_type_type_union$ begin") },
        end: ($) => { console.log("GfunctionType$_parameters$_type_type_union$ end") },
    },
    "GfunctionType$_parameters$": {
        begin: ($) => { console.log("GfunctionType$_parameters$ begin") },
        end: ($) => { console.log("GfunctionType$_parameters$ end") },
    },
    "GfunctionType$_void$": ($) => { console.log("GfunctionType$_void$") },
    "GfunctionType$": {
        begin: ($) => { console.log("GfunctionType$ begin") },
        end: ($) => { console.log("GfunctionType$ end") },
    },
    "Gidentifier$": ($) => { console.log("Gidentifier$") },
    "root_imports$_clause$_namespace$": {
        begin: ($) => { console.log("root_imports$_clause$_namespace$ begin") },
        end: ($) => { console.log("root_imports$_clause$_namespace$ end") },
    },
    "root_imports$_clause$_named$$": {
        begin: ($) => { console.log("root_imports$_clause$_named$$ begin") },
        end: ($) => { console.log("root_imports$_clause$_named$$ end") },
    },
    "root_imports$_clause$_named$": {
        begin: ($) => { console.log("root_imports$_clause$_named$ begin") },
        end: ($) => { console.log("root_imports$_clause$_named$ end") },
    },
    "root_imports$_clause$": {
        begin: ($) => { console.log("root_imports$_clause$ begin") },
        end: ($) => { console.log("root_imports$_clause$ end") },
    },
    "root_imports$_file$": ($) => { console.log("root_imports$_file$") },
    "root_imports$": {
        begin: ($) => { console.log("root_imports$ begin") },
        end: ($) => { console.log("root_imports$ end") },
    },
    "root_typeAliases$_export$": ($) => { console.log("root_typeAliases$_export$") },
    "root_typeAliases$_typeParameters$": {
        begin: ($) => { console.log("root_typeAliases$_typeParameters$ begin") },
        end: ($) => { console.log("root_typeAliases$_typeParameters$ end") },
    },
    "root_typeAliases$": {
        begin: ($) => { console.log("root_typeAliases$ begin") },
        end: ($) => { console.log("root_typeAliases$ end") },
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
    function X_functionType(
        $: api.GfunctionType<Annotation>,
    ) {
        ((
            $: api.NGfunctionType$<Annotation>,
        ) => {
            if (foo["GfunctionType$"] !== undefined) { foo["GfunctionType$"].begin($) }
            pr.cc($.content, ($) => {
                pr.cc($["parameters"], ($) => {
                    $.forEach(($) => {
                        ((
                            $: api.NGfunctionType$_parameters$<Annotation>,
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
                                                                $: api.NGfunctionType$_parameters$_type_type_array$<Annotation>,
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
                                                                $: api.NGfunctionType$_parameters$_type_type_boolean$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_boolean$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_boolean$"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "string": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.NGfunctionType$_parameters$_type_type_string$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_string$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_string$"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "number": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.NGfunctionType$_parameters$_type_type_number$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_number$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_number$"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "typeLiteral": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.NGfunctionType$_parameters$_type_type_typeLiteral$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_typeLiteral$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$"].begin($) }
                                                                pr.cc($.content, ($) => {
                                                                    $.forEach(($) => {
                                                                        switch ($[0]) {
                                                                            case "index": {
                                                                                pr.cc($[1], ($) => {
                                                                                    ((
                                                                                        $: api.NGfunctionType$_parameters$_type_type_typeLiteral$_index$<Annotation>,
                                                                                    ) => {
                                                                                        if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_index$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_index$"].begin($) }
                                                                                        pr.cc($.content, ($) => {
                                                                                            pr.cc($["key"], ($) => {
                                                                                                ((
                                                                                                    $: api.NGfunctionType$_parameters$_type_type_typeLiteral$_index$_key$<Annotation>,
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
                                                                                        $: api.NGfunctionType$_parameters$_type_type_typeLiteral$_property$<Annotation>,
                                                                                    ) => {
                                                                                        if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$"].begin($) }
                                                                                        pr.cc($.content, ($) => {
                                                                                            pr.cc($["readonly"], ($) => {
                                                                                                ((
                                                                                                    $: api.NGfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$<Annotation>,
                                                                                                ) => {
                                                                                                    if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$"]($) }
                                                                                                })($)
                                                                                            })
                                                                                            pr.cc($["name"], ($) => {
                                                                                                ((
                                                                                                    $: api.NGfunctionType$_parameters$_type_type_typeLiteral$_property$_name$<Annotation>,
                                                                                                ) => {
                                                                                                    if (foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$_name$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_typeLiteral$_property$_name$"]($) }
                                                                                                })($)
                                                                                            })
                                                                                            pr.cc($["questionToken"], ($) => {
                                                                                                if ($ === null) {
                                                                                                    //FIXME??
                                                                                                } else {
                                                                                                    ((
                                                                                                        $: api.NGfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken$<Annotation>,
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
                                                                $: api.NGfunctionType$_parameters$_type_type_typeReference$<Annotation>,
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
                                                                                        $: api.NGfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$<Annotation>,
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
                                                                $: api.NGfunctionType$_parameters$_type_type_union$<Annotation>,
                                                            ) => {
                                                                if (foo["GfunctionType$_parameters$_type_type_union$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_union$"].begin($) }
                                                                pr.cc($.content, ($) => {
                                                                    $.forEach(($) => {
                                                                        ((
                                                                            $: api.NGfunctionType$_parameters$_type_type_union$$<Annotation>,
                                                                        ) => {
                                                                            if (foo["GfunctionType$_parameters$_type_type_union$$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_union$$"].begin($) }
                                                                            pr.cc($.content, ($) => {
                                                                                pr.cc($["state"], ($) => {
                                                                                    ((
                                                                                        $: api.NGfunctionType$_parameters$_type_type_union$$_state$<Annotation>,
                                                                                    ) => {
                                                                                        if (foo["GfunctionType$_parameters$_type_type_union$$_state$"] !== undefined) { foo["GfunctionType$_parameters$_type_type_union$$_state$"].begin($) }
                                                                                        pr.cc($.content, ($) => {
                                                                                            switch ($[0]) {
                                                                                                case "string": {
                                                                                                    pr.cc($[1], ($) => {
                                                                                                        ((
                                                                                                            $: api.NGfunctionType$_parameters$_type_type_union$$_state$_string$<Annotation>,
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
                        $: api.NGfunctionType$_void$<Annotation>,
                    ) => {
                        if (foo["GfunctionType$_void$"] !== undefined) { foo["GfunctionType$_void$"]($) }
                    })($)
                })
            })
            if (foo["GfunctionType$"] !== undefined) { foo["GfunctionType$"].end($) }
        })($)
    }
    function X_identifier(
        $: api.Gidentifier<Annotation>,
    ) {
        ((
            $: api.NGidentifier$<Annotation>,
        ) => {
            if (foo["Gidentifier$"] !== undefined) { foo["Gidentifier$"]($) }
        })($)
    }
    function X_type(
        $: api.Gtype<Annotation>,
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
        $: api.Nroot<Annotation>,
    ) => {
        if (foo["root"] !== undefined) { foo["root"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["imports"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.Nroot_imports$<Annotation>,
                    ) => {
                        if (foo["root_imports$"] !== undefined) { foo["root_imports$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["clause"], ($) => {
                                ((
                                    $: api.Nroot_imports$_clause$<Annotation>,
                                ) => {
                                    if (foo["root_imports$_clause$"] !== undefined) { foo["root_imports$_clause$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.Nroot_imports$_clause$_namespace$<Annotation>,
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
                                                        $: api.Nroot_imports$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (foo["root_imports$_clause$_named$"] !== undefined) { foo["root_imports$_clause$_named$"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.Nroot_imports$_clause$_named$$<Annotation>,
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
                                    $: api.Nroot_imports$_file$<Annotation>,
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
                        $: api.Nroot_typeAliases$<Annotation>,
                    ) => {
                        if (foo["root_typeAliases$"] !== undefined) { foo["root_typeAliases$"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["export"], ($) => {
                                ((
                                    $: api.Nroot_typeAliases$_export$<Annotation>,
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
                                        $: api.Nroot_typeAliases$_typeParameters$<Annotation>,
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
                    $: api.Nroot_endOfFile$<Annotation>,
                ) => {
                    if (foo["root_endOfFile$"] !== undefined) { foo["root_endOfFile$"]($) }
                })($)
            })
        })
        if (foo["root"] !== undefined) { foo["root"].end($) }
    })($)
}