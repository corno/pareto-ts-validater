import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api.generated"

export type FOO<Annotation> = {
    "Gidentifier$"?: ($: api.TNGidentifier$<Annotation>) => void
    "Gtype_array$"?: {
        readonly "begin": ($: api.TNGtype_array$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_array$<Annotation>) => void,
    }
    "Gtype_boolean$"?: ($: api.TNGtype_boolean$<Annotation>) => void
    "Gtype_string$"?: ($: api.TNGtype_string$<Annotation>) => void
    "Gtype_number$"?: ($: api.TNGtype_number$<Annotation>) => void
    "Gtype_typeLiteral$_index$_key$"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$_index$_key$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$_index$_key$<Annotation>) => void,
    }
    "Gtype_typeLiteral$_index$"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$_index$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$_index$<Annotation>) => void,
    }
    "Gtype_typeLiteral$_property$_readonly$"?: ($: api.TNGtype_typeLiteral$_property$_readonly$<Annotation>) => void
    "Gtype_typeLiteral$_property$_name$"?: ($: api.TNGtype_typeLiteral$_property$_name$<Annotation>) => void
    "Gtype_typeLiteral$_property$_questionToken$"?: ($: api.TNGtype_typeLiteral$_property$_questionToken$<Annotation>) => void
    "Gtype_typeLiteral$_property$"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$_property$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$_property$<Annotation>) => void,
    }
    "Gtype_typeLiteral$"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
    }
    "Gtype_typeReference$_referencedType_qualifiedName$"?: {
        readonly "begin": ($: api.TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
    }
    "Gtype_typeReference$"?: {
        readonly "begin": ($: api.TNGtype_typeReference$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$<Annotation>) => void,
    }
    "Gtype_union$$_state$_string$"?: ($: api.TNGtype_union$$_state$_string$<Annotation>) => void
    "Gtype_union$$_state$"?: {
        readonly "begin": ($: api.TNGtype_union$$_state$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$$_state$<Annotation>) => void,
    }
    "Gtype_union$$"?: {
        readonly "begin": ($: api.TNGtype_union$$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$$<Annotation>) => void,
    }
    "Gtype_union$"?: {
        readonly "begin": ($: api.TNGtype_union$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$<Annotation>) => void,
    }
    "root_imports$_clause$_namespace$"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$_namespace$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$_namespace$<Annotation>) => void,
    }
    "root_imports$_clause$_named$$"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$_named$$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$_named$$<Annotation>) => void,
    }
    "root_imports$_clause$_named$"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$_named$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$_named$<Annotation>) => void,
    }
    "root_imports$_clause$"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$<Annotation>) => void,
    }
    "root_imports$_file$"?: ($: api.TNroot_imports$_file$<Annotation>) => void
    "root_imports$"?: {
        readonly "begin": ($: api.TNroot_imports$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$<Annotation>) => void,
    }
    "root_typeAliases$_export$"?: ($: api.TNroot_typeAliases$_export$<Annotation>) => void
    "root_typeAliases$_typeParameters$"?: {
        readonly "begin": ($: api.TNroot_typeAliases$_typeParameters$<Annotation>) => void,
        readonly "end": ($: api.TNroot_typeAliases$_typeParameters$<Annotation>) => void,
    }
    "root_typeAliases$"?: {
        readonly "begin": ($: api.TNroot_typeAliases$<Annotation>) => void,
        readonly "end": ($: api.TNroot_typeAliases$<Annotation>) => void,
    }
    "root_endOfFile$"?: ($: api.TNroot_endOfFile$<Annotation>) => void
    "root"?: {
        readonly "begin": ($: api.TNroot<Annotation>) => void,
        readonly "end": ($: api.TNroot<Annotation>) => void,
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