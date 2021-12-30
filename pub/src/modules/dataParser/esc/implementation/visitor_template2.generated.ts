import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api.generated"

export type FOO<Annotation> = {
    "Gidentifier$"?: ($: api.TNGidentifier$<Annotation>) => void
    "Ginitialization_arrayLiteral$"?: {
        readonly "begin": ($: api.TNGinitialization_arrayLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGinitialization_arrayLiteral$<Annotation>) => void,
    }
    "Ginitialization_false$"?: ($: api.TNGinitialization_false$<Annotation>) => void
    "Ginitialization_identifier$"?: ($: api.TNGinitialization_identifier$<Annotation>) => void
    "Ginitialization_noSubstitutionTemplateLiteral$"?: ($: api.TNGinitialization_noSubstitutionTemplateLiteral$<Annotation>) => void
    "Ginitialization_numericLiteral$"?: ($: api.TNGinitialization_numericLiteral$<Annotation>) => void
    "Ginitialization_objectLiteral$$_name_identifier$"?: ($: api.TNGinitialization_objectLiteral$$_name_identifier$<Annotation>) => void
    "Ginitialization_objectLiteral$$_name_stringLiteral$"?: ($: api.TNGinitialization_objectLiteral$$_name_stringLiteral$<Annotation>) => void
    "Ginitialization_objectLiteral$$"?: {
        readonly "begin": ($: api.TNGinitialization_objectLiteral$$<Annotation>) => void,
        readonly "end": ($: api.TNGinitialization_objectLiteral$$<Annotation>) => void,
    }
    "Ginitialization_objectLiteral$"?: {
        readonly "begin": ($: api.TNGinitialization_objectLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGinitialization_objectLiteral$<Annotation>) => void,
    }
    "Ginitialization_true$"?: ($: api.TNGinitialization_true$<Annotation>) => void
    "root_import$_clause$_namespace$"?: {
        readonly "begin": ($: api.TNroot_import$_clause$_namespace$<Annotation>) => void,
        readonly "end": ($: api.TNroot_import$_clause$_namespace$<Annotation>) => void,
    }
    "root_import$_clause$_named$$"?: {
        readonly "begin": ($: api.TNroot_import$_clause$_named$$<Annotation>) => void,
        readonly "end": ($: api.TNroot_import$_clause$_named$$<Annotation>) => void,
    }
    "root_import$_clause$_named$"?: {
        readonly "begin": ($: api.TNroot_import$_clause$_named$<Annotation>) => void,
        readonly "end": ($: api.TNroot_import$_clause$_named$<Annotation>) => void,
    }
    "root_import$_clause$"?: {
        readonly "begin": ($: api.TNroot_import$_clause$<Annotation>) => void,
        readonly "end": ($: api.TNroot_import$_clause$<Annotation>) => void,
    }
    "root_import$_file$"?: ($: api.TNroot_import$_file$<Annotation>) => void
    "root_import$"?: {
        readonly "begin": ($: api.TNroot_import$<Annotation>) => void,
        readonly "end": ($: api.TNroot_import$<Annotation>) => void,
    }
    "root_variables$_export$"?: ($: api.TNroot_variables$_export$<Annotation>) => void
    "root_variables$_variableDeclarationList$$_name$"?: ($: api.TNroot_variables$_variableDeclarationList$$_name$<Annotation>) => void
    "root_variables$_variableDeclarationList$$_type$_name$_context$"?: ($: api.TNroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation>) => void
    "root_variables$_variableDeclarationList$$_type$_name$_type$"?: ($: api.TNroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation>) => void
    "root_variables$_variableDeclarationList$$_type$_name$"?: {
        readonly "begin": ($: api.TNroot_variables$_variableDeclarationList$$_type$_name$<Annotation>) => void,
        readonly "end": ($: api.TNroot_variables$_variableDeclarationList$$_type$_name$<Annotation>) => void,
    }
    "root_variables$_variableDeclarationList$$_type$"?: {
        readonly "begin": ($: api.TNroot_variables$_variableDeclarationList$$_type$<Annotation>) => void,
        readonly "end": ($: api.TNroot_variables$_variableDeclarationList$$_type$<Annotation>) => void,
    }
    "root_variables$_variableDeclarationList$$"?: {
        readonly "begin": ($: api.TNroot_variables$_variableDeclarationList$$<Annotation>) => void,
        readonly "end": ($: api.TNroot_variables$_variableDeclarationList$$<Annotation>) => void,
    }
    "root_variables$_variableDeclarationList$"?: {
        readonly "begin": ($: api.TNroot_variables$_variableDeclarationList$<Annotation>) => void,
        readonly "end": ($: api.TNroot_variables$_variableDeclarationList$<Annotation>) => void,
    }
    "root_variables$"?: {
        readonly "begin": ($: api.TNroot_variables$<Annotation>) => void,
        readonly "end": ($: api.TNroot_variables$<Annotation>) => void,
    }
    "root_endOfFile$"?: ($: api.TNroot_endOfFile$<Annotation>) => void
    "root"?: {
        readonly "begin": ($: api.TNroot<Annotation>) => void,
        readonly "end": ($: api.TNroot<Annotation>) => void,
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