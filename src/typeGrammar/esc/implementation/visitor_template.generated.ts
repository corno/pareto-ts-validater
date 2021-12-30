import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api.generated"

export type FOO<Annotation> = {
    "Gidentifier$"?: ($: api.NGidentifier$<Annotation>) => void
    "Gtype_array$"?: {
        begin: ($: api.NGtype_array$<Annotation>) => void,
        end: ($: api.NGtype_array$<Annotation>) => void,
    }
    "Gtype_boolean$"?: ($: api.NGtype_boolean$<Annotation>) => void
    "Gtype_string$"?: ($: api.NGtype_string$<Annotation>) => void
    "Gtype_number$"?: ($: api.NGtype_number$<Annotation>) => void
    "Gtype_typeLiteral$_index$_key$"?: {
        begin: ($: api.NGtype_typeLiteral$_index$_key$<Annotation>) => void,
        end: ($: api.NGtype_typeLiteral$_index$_key$<Annotation>) => void,
    }
    "Gtype_typeLiteral$_index$"?: {
        begin: ($: api.NGtype_typeLiteral$_index$<Annotation>) => void,
        end: ($: api.NGtype_typeLiteral$_index$<Annotation>) => void,
    }
    "Gtype_typeLiteral$_property$_readonly$"?: ($: api.NGtype_typeLiteral$_property$_readonly$<Annotation>) => void
    "Gtype_typeLiteral$_property$_name$"?: ($: api.NGtype_typeLiteral$_property$_name$<Annotation>) => void
    "Gtype_typeLiteral$_property$_questionToken$"?: ($: api.NGtype_typeLiteral$_property$_questionToken$<Annotation>) => void
    "Gtype_typeLiteral$_property$"?: {
        begin: ($: api.NGtype_typeLiteral$_property$<Annotation>) => void,
        end: ($: api.NGtype_typeLiteral$_property$<Annotation>) => void,
    }
    "Gtype_typeLiteral$"?: {
        begin: ($: api.NGtype_typeLiteral$<Annotation>) => void,
        end: ($: api.NGtype_typeLiteral$<Annotation>) => void,
    }
    "Gtype_typeReference$_referencedType_qualifiedName$"?: {
        begin: ($: api.NGtype_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
        end: ($: api.NGtype_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
    }
    "Gtype_typeReference$"?: {
        begin: ($: api.NGtype_typeReference$<Annotation>) => void,
        end: ($: api.NGtype_typeReference$<Annotation>) => void,
    }
    "Gtype_union$$_state$_string$"?: ($: api.NGtype_union$$_state$_string$<Annotation>) => void
    "Gtype_union$$_state$"?: {
        begin: ($: api.NGtype_union$$_state$<Annotation>) => void,
        end: ($: api.NGtype_union$$_state$<Annotation>) => void,
    }
    "Gtype_union$$"?: {
        begin: ($: api.NGtype_union$$<Annotation>) => void,
        end: ($: api.NGtype_union$$<Annotation>) => void,
    }
    "Gtype_union$"?: {
        begin: ($: api.NGtype_union$<Annotation>) => void,
        end: ($: api.NGtype_union$<Annotation>) => void,
    }
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
    "Gidentifier$": ($) => { console.log("Gidentifier$") },
    "Gtype_array$": {
        begin: ($) => { console.log("Gtype_array$ begin") },
        end: ($) => { console.log("Gtype_array$ end") },
    },
    "Gtype_boolean$": ($) => { console.log("Gtype_boolean$") },
    "Gtype_string$": ($) => { console.log("Gtype_string$") },
    "Gtype_number$": ($) => { console.log("Gtype_number$") },
    "Gtype_typeLiteral$_index$_key$": {
        begin: ($) => { console.log("Gtype_typeLiteral$_index$_key$ begin") },
        end: ($) => { console.log("Gtype_typeLiteral$_index$_key$ end") },
    },
    "Gtype_typeLiteral$_index$": {
        begin: ($) => { console.log("Gtype_typeLiteral$_index$ begin") },
        end: ($) => { console.log("Gtype_typeLiteral$_index$ end") },
    },
    "Gtype_typeLiteral$_property$_readonly$": ($) => { console.log("Gtype_typeLiteral$_property$_readonly$") },
    "Gtype_typeLiteral$_property$_name$": ($) => { console.log("Gtype_typeLiteral$_property$_name$") },
    "Gtype_typeLiteral$_property$_questionToken$": ($) => { console.log("Gtype_typeLiteral$_property$_questionToken$") },
    "Gtype_typeLiteral$_property$": {
        begin: ($) => { console.log("Gtype_typeLiteral$_property$ begin") },
        end: ($) => { console.log("Gtype_typeLiteral$_property$ end") },
    },
    "Gtype_typeLiteral$": {
        begin: ($) => { console.log("Gtype_typeLiteral$ begin") },
        end: ($) => { console.log("Gtype_typeLiteral$ end") },
    },
    "Gtype_typeReference$_referencedType_qualifiedName$": {
        begin: ($) => { console.log("Gtype_typeReference$_referencedType_qualifiedName$ begin") },
        end: ($) => { console.log("Gtype_typeReference$_referencedType_qualifiedName$ end") },
    },
    "Gtype_typeReference$": {
        begin: ($) => { console.log("Gtype_typeReference$ begin") },
        end: ($) => { console.log("Gtype_typeReference$ end") },
    },
    "Gtype_union$$_state$_string$": ($) => { console.log("Gtype_union$$_state$_string$") },
    "Gtype_union$$_state$": {
        begin: ($) => { console.log("Gtype_union$$_state$ begin") },
        end: ($) => { console.log("Gtype_union$$_state$ end") },
    },
    "Gtype_union$$": {
        begin: ($) => { console.log("Gtype_union$$ begin") },
        end: ($) => { console.log("Gtype_union$$ end") },
    },
    "Gtype_union$": {
        begin: ($) => { console.log("Gtype_union$ begin") },
        end: ($) => { console.log("Gtype_union$ end") },
    },
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
            case "array": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_array$<Annotation>,
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
                        $: api.NGtype_boolean$<Annotation>,
                    ) => {
                        if (foo["Gtype_boolean$"] !== undefined) { foo["Gtype_boolean$"]($) }
                    })($)
                })
                break
            }
            case "string": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_string$<Annotation>,
                    ) => {
                        if (foo["Gtype_string$"] !== undefined) { foo["Gtype_string$"]($) }
                    })($)
                })
                break
            }
            case "number": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_number$<Annotation>,
                    ) => {
                        if (foo["Gtype_number$"] !== undefined) { foo["Gtype_number$"]($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.NGtype_typeLiteral$<Annotation>,
                    ) => {
                        if (foo["Gtype_typeLiteral$"] !== undefined) { foo["Gtype_typeLiteral$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                switch ($[0]) {
                                    case "index": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.NGtype_typeLiteral$_index$<Annotation>,
                                            ) => {
                                                if (foo["Gtype_typeLiteral$_index$"] !== undefined) { foo["Gtype_typeLiteral$_index$"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["key"], ($) => {
                                                        ((
                                                            $: api.NGtype_typeLiteral$_index$_key$<Annotation>,
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
                                                $: api.NGtype_typeLiteral$_property$<Annotation>,
                                            ) => {
                                                if (foo["Gtype_typeLiteral$_property$"] !== undefined) { foo["Gtype_typeLiteral$_property$"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["readonly"], ($) => {
                                                        ((
                                                            $: api.NGtype_typeLiteral$_property$_readonly$<Annotation>,
                                                        ) => {
                                                            if (foo["Gtype_typeLiteral$_property$_readonly$"] !== undefined) { foo["Gtype_typeLiteral$_property$_readonly$"]($) }
                                                        })($)
                                                    })
                                                    pr.cc($["name"], ($) => {
                                                        ((
                                                            $: api.NGtype_typeLiteral$_property$_name$<Annotation>,
                                                        ) => {
                                                            if (foo["Gtype_typeLiteral$_property$_name$"] !== undefined) { foo["Gtype_typeLiteral$_property$_name$"]($) }
                                                        })($)
                                                    })
                                                    pr.cc($["questionToken"], ($) => {
                                                        if ($ === null) {
                                                            //FIXME??
                                                        } else {
                                                            ((
                                                                $: api.NGtype_typeLiteral$_property$_questionToken$<Annotation>,
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
                        $: api.NGtype_typeReference$<Annotation>,
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
                                                $: api.NGtype_typeReference$_referencedType_qualifiedName$<Annotation>,
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
                        $: api.NGtype_union$<Annotation>,
                    ) => {
                        if (foo["Gtype_union$"] !== undefined) { foo["Gtype_union$"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.NGtype_union$$<Annotation>,
                                ) => {
                                    if (foo["Gtype_union$$"] !== undefined) { foo["Gtype_union$$"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["state"], ($) => {
                                            ((
                                                $: api.NGtype_union$$_state$<Annotation>,
                                            ) => {
                                                if (foo["Gtype_union$$_state$"] !== undefined) { foo["Gtype_union$$_state$"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    switch ($[0]) {
                                                        case "string": {
                                                            pr.cc($[1], ($) => {
                                                                ((
                                                                    $: api.NGtype_union$$_state$_string$<Annotation>,
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