import * as pr from "pareto-lang-lib"
import * as api from "../../interface/types/ts_api"

export type IVisitor<Annotation> = {
    readonly "$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter"?: {
        readonly "begin": ($: api.TNGcallback$_type$_parameter$<Annotation>) => void,
        readonly "end": ($: api.TNGcallback$_type$_parameter$<Annotation>) => void,
    }
    readonly "$callback/*Parameter/.type/*FunctionType/.void/*VoidKeyword"?: ($: api.TNGcallback$_type$_void$<Annotation>) => void
    readonly "$callback/*Parameter/.type/*FunctionType"?: {
        readonly "begin": ($: api.TNGcallback$_type$<Annotation>) => void,
        readonly "end": ($: api.TNGcallback$_type$<Annotation>) => void,
    }
    readonly "$callback/*Parameter"?: {
        readonly "begin": ($: api.TNGcallback$<Annotation>) => void,
        readonly "end": ($: api.TNGcallback$<Annotation>) => void,
    }
    readonly "$identifier/*Identifier"?: ($: api.TNGidentifier$<Annotation>) => void
    readonly "$interface/?function/*FunctionType/.dataParameter/*Parameter"?: {
        readonly "begin": ($: api.TNGinterface_function$_dataParameter$<Annotation>) => void,
        readonly "end": ($: api.TNGinterface_function$_dataParameter$<Annotation>) => void,
    }
    readonly "$interface/?function/*FunctionType/.void/*VoidKeyword"?: ($: api.TNGinterface_function$_void$<Annotation>) => void
    readonly "$interface/?function/*FunctionType"?: {
        readonly "begin": ($: api.TNGinterface_function$<Annotation>) => void,
        readonly "end": ($: api.TNGinterface_function$<Annotation>) => void,
    }
    readonly "$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.readonly/*ReadonlyKeyword"?: ($: api.TNGinterface_typeLiteral$$_readonly$<Annotation>) => void
    readonly "$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.name/*StringLiteral"?: ($: api.TNGinterface_typeLiteral$$_name$<Annotation>) => void
    readonly "$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.questionToken/*QuestionToken"?: ($: api.TNGinterface_typeLiteral$$_questionToken$<Annotation>) => void
    readonly "$interface/?typeLiteral/*TypeLiteral/*PropertySignature"?: {
        readonly "begin": ($: api.TNGinterface_typeLiteral$$<Annotation>) => void,
        readonly "end": ($: api.TNGinterface_typeLiteral$$<Annotation>) => void,
    }
    readonly "$interface/?typeLiteral/*TypeLiteral"?: {
        readonly "begin": ($: api.TNGinterface_typeLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGinterface_typeLiteral$<Annotation>) => void,
    }
    readonly "$interface/?typeReference/*TypeReference"?: {
        readonly "begin": ($: api.TNGinterface_typeReference$<Annotation>) => void,
        readonly "end": ($: api.TNGinterface_typeReference$<Annotation>) => void,
    }
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
    readonly "/.interfaces/*TypeAliasDeclaration/.export/*ExportKeyword"?: ($: api.TNroot_interfaces$_export$<Annotation>) => void
    readonly "/.interfaces/*TypeAliasDeclaration/.typeParameters/*TypeParameter"?: {
        readonly "begin": ($: api.TNroot_interfaces$_typeParameters$<Annotation>) => void,
        readonly "end": ($: api.TNroot_interfaces$_typeParameters$<Annotation>) => void,
    }
    readonly "/.interfaces/*TypeAliasDeclaration"?: {
        readonly "begin": ($: api.TNroot_interfaces$<Annotation>) => void,
        readonly "end": ($: api.TNroot_interfaces$<Annotation>) => void,
    }
    readonly "/.endOfFile/*EndOfFileToken"?: ($: api.TNroot_endOfFile$<Annotation>) => void
    readonly ""?: {
        readonly "begin": ($: api.TNroot<Annotation>) => void,
        readonly "end": ($: api.TNroot<Annotation>) => void,
    }
}