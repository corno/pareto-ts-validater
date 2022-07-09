import * as pr from "pareto-lib-core"
import * as api from "../types/ts_api"

export type IVisitor<Annotation> = {
    readonly "$identifier/*Identifier"?: ($: api.TNGidentifier$<Annotation>) => void
    readonly "$type/?array/*ArrayType"?: {
        readonly "begin": ($: api.TNGtype_array$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_array$<Annotation>) => void,
    }
    readonly "$type/?boolean/*BooleanKeyword"?: ($: api.TNGtype_boolean$<Annotation>) => void
    readonly "$type/?string/*StringKeyword"?: ($: api.TNGtype_string$<Annotation>) => void
    readonly "$type/?number/*NumberKeyword"?: ($: api.TNGtype_number$<Annotation>) => void
    readonly "$type/?literalType/*LiteralType/*NullKeyword"?: ($: api.TNGtype_literalType$$<Annotation>) => void
    readonly "$type/?literalType/*LiteralType"?: {
        readonly "begin": ($: api.TNGtype_literalType$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_literalType$<Annotation>) => void,
    }
    readonly "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter/.type/*StringKeyword"?: ($: api.TNGtype_typeLiteral$_index$_key$_type$<Annotation>) => void
    readonly "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$_index$_key$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$_index$_key$<Annotation>) => void,
    }
    readonly "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$_index$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$_index$<Annotation>) => void,
    }
    readonly "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword"?: ($: api.TNGtype_typeLiteral$_properties$_readonly$<Annotation>) => void
    readonly "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral"?: ($: api.TNGtype_typeLiteral$_properties$_name$<Annotation>) => void
    readonly "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.questionToken/*QuestionToken"?: ($: api.TNGtype_typeLiteral$_properties$_questionToken$<Annotation>) => void
    readonly "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$_properties$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$_properties$<Annotation>) => void,
    }
    readonly "$type/?typeLiteral/*TypeLiteral"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
    }
    readonly "$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"?: {
        readonly "begin": ($: api.TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
    }
    readonly "$type/?typeReference/*TypeReference"?: {
        readonly "begin": ($: api.TNGtype_typeReference$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$<Annotation>) => void,
    }
    readonly "$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral"?: ($: api.TNGtype_union$$_state$$<Annotation>) => void
    readonly "$type/?union/*UnionType/*TupleType/.state/*LiteralType"?: {
        readonly "begin": ($: api.TNGtype_union$$_state$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$$_state$<Annotation>) => void,
    }
    readonly "$type/?union/*UnionType/*TupleType"?: {
        readonly "begin": ($: api.TNGtype_union$$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$$<Annotation>) => void,
    }
    readonly "$type/?union/*UnionType"?: {
        readonly "begin": ($: api.TNGtype_union$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$<Annotation>) => void,
    }
    readonly "/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$_namespace$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$_namespace$<Annotation>) => void,
    }
    readonly "/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$_named$$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$_named$$<Annotation>) => void,
    }
    readonly "/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$_named$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$_named$<Annotation>) => void,
    }
    readonly "/.imports/*ImportDeclaration/.clause/*ImportClause"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$<Annotation>) => void,
    }
    readonly "/.imports/*ImportDeclaration/.file/*StringLiteral"?: ($: api.TNroot_imports$_file$<Annotation>) => void
    readonly "/.imports/*ImportDeclaration"?: {
        readonly "begin": ($: api.TNroot_imports$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$<Annotation>) => void,
    }
    readonly "/.globals/*TypeAliasDeclaration/.export/*ExportKeyword"?: ($: api.TNroot_globals$_export$<Annotation>) => void
    readonly "/.globals/*TypeAliasDeclaration/.typeParameters/*TypeParameter"?: {
        readonly "begin": ($: api.TNroot_globals$_typeParameters$<Annotation>) => void,
        readonly "end": ($: api.TNroot_globals$_typeParameters$<Annotation>) => void,
    }
    readonly "/.globals/*TypeAliasDeclaration"?: {
        readonly "begin": ($: api.TNroot_globals$<Annotation>) => void,
        readonly "end": ($: api.TNroot_globals$<Annotation>) => void,
    }
    readonly "/.endOfFile/*EndOfFileToken"?: ($: api.TNroot_endOfFile$<Annotation>) => void
    readonly ""?: {
        readonly "begin": ($: api.TNroot<Annotation>) => void,
        readonly "end": ($: api.TNroot<Annotation>) => void,
    }
}