import * as pa from "pareto-api-core"

export type TAnnotatedString<Annotation> = { readonly "annotation": Annotation; readonly "value": string }
export type TAnnotatedType<Annotation, Type> = { readonly "annotation": Annotation; readonly "content": Type }

export type TNGidentifier$<Annotation> = TAnnotatedString<Annotation>
export type TVTGidentifier<Annotation> = TNGidentifier$<Annotation>
export type TGidentifier<Annotation> =  TVTGidentifier<Annotation>

export type TNGinitialization_identifier$<Annotation> = TAnnotatedString<Annotation>
export type TVTGinitialization_identifier<Annotation> = TNGinitialization_identifier$<Annotation>
export type TVGinitialization_identifier<Annotation> = TVTGinitialization_identifier<Annotation>
export type TVTGinitialization_literal<Annotation> = TGliteralDataInitialization<Annotation>
export type TVGinitialization_literal<Annotation> = TVTGinitialization_literal<Annotation>

export type TNGinitialization_objectLiteral$$_name$<Annotation> = TAnnotatedString<Annotation>
export type TVTGinitialization_objectLiteral$$_name<Annotation> = TNGinitialization_objectLiteral$$_name$<Annotation>
export type TVGinitialization_objectLiteral$$_name<Annotation> = TVTGinitialization_objectLiteral$$_name<Annotation>
export type TVTGinitialization_objectLiteral$$_initialization<Annotation> = TGinitialization<Annotation>
export type TVGinitialization_objectLiteral$$_initialization<Annotation> = TVTGinitialization_objectLiteral$$_initialization<Annotation>
export type TVTGinitialization_objectLiteral$$<Annotation> = {
    readonly "name":  TVGinitialization_objectLiteral$$_name<Annotation>
    readonly "initialization":  TVGinitialization_objectLiteral$$_initialization<Annotation>
}
export type TVGinitialization_objectLiteral$$<Annotation> = TVTGinitialization_objectLiteral$$<Annotation>

export type TNGinitialization_objectLiteral$$<Annotation> = TAnnotatedType<Annotation, TVGinitialization_objectLiteral$$<Annotation>>
export type TVTGinitialization_objectLiteral$<Annotation> = TNGinitialization_objectLiteral$$<Annotation>
export type TVGinitialization_objectLiteral$<Annotation> = TVTGinitialization_objectLiteral$<Annotation>[]

export type TNGinitialization_objectLiteral$<Annotation> = TAnnotatedType<Annotation, TVGinitialization_objectLiteral$<Annotation>>
export type TVTGinitialization_objectLiteral<Annotation> = TNGinitialization_objectLiteral$<Annotation>
export type TVGinitialization_objectLiteral<Annotation> = TVTGinitialization_objectLiteral<Annotation>
export type TVTGinitialization<Annotation> =
    | [ "identifier", TVGinitialization_identifier<Annotation>]
    | [ "literal", TVGinitialization_literal<Annotation>]
    | [ "objectLiteral", TVGinitialization_objectLiteral<Annotation>]
export type TGinitialization<Annotation> =  TVTGinitialization<Annotation>

export type TNGliteralDataInitialization_state$_state$<Annotation> = TAnnotatedString<Annotation>
export type TVTGliteralDataInitialization_state$_state<Annotation> = TNGliteralDataInitialization_state$_state$<Annotation>
export type TVGliteralDataInitialization_state$_state<Annotation> = TVTGliteralDataInitialization_state$_state<Annotation>
export type TVTGliteralDataInitialization_state$_data<Annotation> = TGinitialization<Annotation>
export type TVGliteralDataInitialization_state$_data<Annotation> = TVTGliteralDataInitialization_state$_data<Annotation>
export type TVTGliteralDataInitialization_state$<Annotation> = {
    readonly "state":  TVGliteralDataInitialization_state$_state<Annotation>
    readonly "data":  TVGliteralDataInitialization_state$_data<Annotation>
}
export type TVGliteralDataInitialization_state$<Annotation> = TVTGliteralDataInitialization_state$<Annotation>

export type TNGliteralDataInitialization_state$<Annotation> = TAnnotatedType<Annotation, TVGliteralDataInitialization_state$<Annotation>>
export type TVTGliteralDataInitialization_state<Annotation> = TNGliteralDataInitialization_state$<Annotation>
export type TVGliteralDataInitialization_state<Annotation> = TVTGliteralDataInitialization_state<Annotation>

export type TNGliteralDataInitialization_false$<Annotation> = Annotation
export type TVTGliteralDataInitialization_false<Annotation> = TNGliteralDataInitialization_false$<Annotation>
export type TVGliteralDataInitialization_false<Annotation> = TVTGliteralDataInitialization_false<Annotation>

export type TNGliteralDataInitialization_stringLiteral$<Annotation> = TAnnotatedString<Annotation>
export type TVTGliteralDataInitialization_stringLiteral<Annotation> = TNGliteralDataInitialization_stringLiteral$<Annotation>
export type TVGliteralDataInitialization_stringLiteral<Annotation> = TVTGliteralDataInitialization_stringLiteral<Annotation>

export type TNGliteralDataInitialization_numericLiteral$<Annotation> = TAnnotatedString<Annotation>
export type TVTGliteralDataInitialization_numericLiteral<Annotation> = TNGliteralDataInitialization_numericLiteral$<Annotation>
export type TVGliteralDataInitialization_numericLiteral<Annotation> = TVTGliteralDataInitialization_numericLiteral<Annotation>

export type TNGliteralDataInitialization_null$<Annotation> = Annotation
export type TVTGliteralDataInitialization_null<Annotation> = TNGliteralDataInitialization_null$<Annotation>
export type TVGliteralDataInitialization_null<Annotation> = TVTGliteralDataInitialization_null<Annotation>

export type TNGliteralDataInitialization_true$<Annotation> = Annotation
export type TVTGliteralDataInitialization_true<Annotation> = TNGliteralDataInitialization_true$<Annotation>
export type TVGliteralDataInitialization_true<Annotation> = TVTGliteralDataInitialization_true<Annotation>
export type TVTGliteralDataInitialization_array$$<Annotation> = TGinitialization<Annotation>
export type TVGliteralDataInitialization_array$$<Annotation> = TVTGliteralDataInitialization_array$$<Annotation>[]

export type TNGliteralDataInitialization_array$$<Annotation> = TAnnotatedType<Annotation, TVGliteralDataInitialization_array$$<Annotation>>
export type TVTGliteralDataInitialization_array$<Annotation> = TNGliteralDataInitialization_array$$<Annotation>
export type TVGliteralDataInitialization_array$<Annotation> = TVTGliteralDataInitialization_array$<Annotation>

export type TNGliteralDataInitialization_array$<Annotation> = TAnnotatedType<Annotation, TVGliteralDataInitialization_array$<Annotation>>
export type TVTGliteralDataInitialization_array<Annotation> = TNGliteralDataInitialization_array$<Annotation>
export type TVGliteralDataInitialization_array<Annotation> = TVTGliteralDataInitialization_array<Annotation>
export type TVTGliteralDataInitialization<Annotation> =
    | [ "state", TVGliteralDataInitialization_state<Annotation>]
    | [ "false", TVGliteralDataInitialization_false<Annotation>]
    | [ "stringLiteral", TVGliteralDataInitialization_stringLiteral<Annotation>]
    | [ "numericLiteral", TVGliteralDataInitialization_numericLiteral<Annotation>]
    | [ "null", TVGliteralDataInitialization_null<Annotation>]
    | [ "true", TVGliteralDataInitialization_true<Annotation>]
    | [ "array", TVGliteralDataInitialization_array<Annotation>]
export type TGliteralDataInitialization<Annotation> =  TVTGliteralDataInitialization<Annotation>
export type TVTGtypelessParameter$<Annotation> = TGidentifier<Annotation>
export type TVGtypelessParameter$<Annotation> = TVTGtypelessParameter$<Annotation>

export type TNGtypelessParameter$<Annotation> = TAnnotatedType<Annotation, TVGtypelessParameter$<Annotation>>
export type TVTGtypelessParameter<Annotation> = TNGtypelessParameter$<Annotation>
export type TGtypelessParameter<Annotation> =  TVTGtypelessParameter<Annotation>
export type TVTroot_import$_clause$_namespace$<Annotation> = TGidentifier<Annotation>
export type TVroot_import$_clause$_namespace$<Annotation> = TVTroot_import$_clause$_namespace$<Annotation>

export type TNroot_import$_clause$_namespace$<Annotation> = TAnnotatedType<Annotation, TVroot_import$_clause$_namespace$<Annotation>>
export type TVTroot_import$_clause$_namespace<Annotation> = TNroot_import$_clause$_namespace$<Annotation>
export type TVroot_import$_clause$_namespace<Annotation> = TVTroot_import$_clause$_namespace<Annotation>
export type TVTroot_import$_clause$_named$$_name<Annotation> = TGidentifier<Annotation>
export type TVroot_import$_clause$_named$$_name<Annotation> = TVTroot_import$_clause$_named$$_name<Annotation>
export type TVTroot_import$_clause$_named$$_as<Annotation> = TGidentifier<Annotation>
export type TVroot_import$_clause$_named$$_as<Annotation> = pa.optional<TVTroot_import$_clause$_named$$_as<Annotation>>
export type TVTroot_import$_clause$_named$$<Annotation> = {
    readonly "name":  TVroot_import$_clause$_named$$_name<Annotation>
    readonly "as":  TVroot_import$_clause$_named$$_as<Annotation>
}
export type TVroot_import$_clause$_named$$<Annotation> = TVTroot_import$_clause$_named$$<Annotation>

export type TNroot_import$_clause$_named$$<Annotation> = TAnnotatedType<Annotation, TVroot_import$_clause$_named$$<Annotation>>
export type TVTroot_import$_clause$_named$<Annotation> = TNroot_import$_clause$_named$$<Annotation>
export type TVroot_import$_clause$_named$<Annotation> = TVTroot_import$_clause$_named$<Annotation>[]

export type TNroot_import$_clause$_named$<Annotation> = TAnnotatedType<Annotation, TVroot_import$_clause$_named$<Annotation>>
export type TVTroot_import$_clause$_named<Annotation> = TNroot_import$_clause$_named$<Annotation>
export type TVroot_import$_clause$_named<Annotation> = TVTroot_import$_clause$_named<Annotation>
export type TVTroot_import$_clause$<Annotation> =
    | [ "namespace", TVroot_import$_clause$_namespace<Annotation>]
    | [ "named", TVroot_import$_clause$_named<Annotation>]
export type TVroot_import$_clause$<Annotation> = TVTroot_import$_clause$<Annotation>

export type TNroot_import$_clause$<Annotation> = TAnnotatedType<Annotation, TVroot_import$_clause$<Annotation>>
export type TVTroot_import$_clause<Annotation> = TNroot_import$_clause$<Annotation>
export type TVroot_import$_clause<Annotation> = TVTroot_import$_clause<Annotation>

export type TNroot_import$_file$<Annotation> = TAnnotatedString<Annotation>
export type TVTroot_import$_file<Annotation> = TNroot_import$_file$<Annotation>
export type TVroot_import$_file<Annotation> = TVTroot_import$_file<Annotation>
export type TVTroot_import$<Annotation> = {
    readonly "clause":  TVroot_import$_clause<Annotation>
    readonly "file":  TVroot_import$_file<Annotation>
}
export type TVroot_import$<Annotation> = TVTroot_import$<Annotation>

export type TNroot_import$<Annotation> = TAnnotatedType<Annotation, TVroot_import$<Annotation>>
export type TVTroot_import<Annotation> = TNroot_import$<Annotation>
export type TVroot_import<Annotation> = TVTroot_import<Annotation>[]

export type TNroot_variables$_export$<Annotation> = Annotation
export type TVTroot_variables$_export<Annotation> = TNroot_variables$_export$<Annotation>
export type TVroot_variables$_export<Annotation> = TVTroot_variables$_export<Annotation>

export type TNroot_variables$_variableDeclarationList$$_name$<Annotation> = TAnnotatedString<Annotation>
export type TVTroot_variables$_variableDeclarationList$$_name<Annotation> = TNroot_variables$_variableDeclarationList$$_name$<Annotation>
export type TVroot_variables$_variableDeclarationList$$_name<Annotation> = TVTroot_variables$_variableDeclarationList$$_name<Annotation>

export type TNroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation> = TAnnotatedString<Annotation>
export type TVTroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation> = TNroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation>
export type TVroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation> = TVTroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation>

export type TNroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation> = TAnnotatedString<Annotation>
export type TVTroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation> = TNroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation>
export type TVroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation> = TVTroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation>
export type TVTroot_variables$_variableDeclarationList$$_type$_name$<Annotation> = {
    readonly "context":  TVroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation>
    readonly "type":  TVroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation>
}
export type TVroot_variables$_variableDeclarationList$$_type$_name$<Annotation> = TVTroot_variables$_variableDeclarationList$$_type$_name$<Annotation>

export type TNroot_variables$_variableDeclarationList$$_type$_name$<Annotation> = TAnnotatedType<Annotation, TVroot_variables$_variableDeclarationList$$_type$_name$<Annotation>>
export type TVTroot_variables$_variableDeclarationList$$_type$_name<Annotation> = TNroot_variables$_variableDeclarationList$$_type$_name$<Annotation>
export type TVroot_variables$_variableDeclarationList$$_type$_name<Annotation> = TVTroot_variables$_variableDeclarationList$$_type$_name<Annotation>
export type TVTroot_variables$_variableDeclarationList$$_type$<Annotation> = {
    readonly "name":  TVroot_variables$_variableDeclarationList$$_type$_name<Annotation>
}
export type TVroot_variables$_variableDeclarationList$$_type$<Annotation> = TVTroot_variables$_variableDeclarationList$$_type$<Annotation>

export type TNroot_variables$_variableDeclarationList$$_type$<Annotation> = TAnnotatedType<Annotation, TVroot_variables$_variableDeclarationList$$_type$<Annotation>>
export type TVTroot_variables$_variableDeclarationList$$_type<Annotation> = TNroot_variables$_variableDeclarationList$$_type$<Annotation>
export type TVroot_variables$_variableDeclarationList$$_type<Annotation> = TVTroot_variables$_variableDeclarationList$$_type<Annotation>
export type TVTroot_variables$_variableDeclarationList$$_one<Annotation> = TGinitialization<Annotation>
export type TVroot_variables$_variableDeclarationList$$_one<Annotation> = pa.optional<TVTroot_variables$_variableDeclarationList$$_one<Annotation>>
export type TVTroot_variables$_variableDeclarationList$$<Annotation> = {
    readonly "name":  TVroot_variables$_variableDeclarationList$$_name<Annotation>
    readonly "type":  TVroot_variables$_variableDeclarationList$$_type<Annotation>
    readonly "one":  TVroot_variables$_variableDeclarationList$$_one<Annotation>
}
export type TVroot_variables$_variableDeclarationList$$<Annotation> = TVTroot_variables$_variableDeclarationList$$<Annotation>

export type TNroot_variables$_variableDeclarationList$$<Annotation> = TAnnotatedType<Annotation, TVroot_variables$_variableDeclarationList$$<Annotation>>
export type TVTroot_variables$_variableDeclarationList$<Annotation> = TNroot_variables$_variableDeclarationList$$<Annotation>
export type TVroot_variables$_variableDeclarationList$<Annotation> = TVTroot_variables$_variableDeclarationList$<Annotation>[]

export type TNroot_variables$_variableDeclarationList$<Annotation> = TAnnotatedType<Annotation, TVroot_variables$_variableDeclarationList$<Annotation>>
export type TVTroot_variables$_variableDeclarationList<Annotation> = TNroot_variables$_variableDeclarationList$<Annotation>
export type TVroot_variables$_variableDeclarationList<Annotation> = TVTroot_variables$_variableDeclarationList<Annotation>
export type TVTroot_variables$<Annotation> = {
    readonly "export":  TVroot_variables$_export<Annotation>
    readonly "variableDeclarationList":  TVroot_variables$_variableDeclarationList<Annotation>
}
export type TVroot_variables$<Annotation> = TVTroot_variables$<Annotation>

export type TNroot_variables$<Annotation> = TAnnotatedType<Annotation, TVroot_variables$<Annotation>>
export type TVTroot_variables<Annotation> = TNroot_variables$<Annotation>
export type TVroot_variables<Annotation> = TVTroot_variables<Annotation>[]

export type TNroot_endOfFile$<Annotation> = Annotation
export type TVTroot_endOfFile<Annotation> = TNroot_endOfFile$<Annotation>
export type TVroot_endOfFile<Annotation> = TVTroot_endOfFile<Annotation>
export type TVTroot<Annotation> = {
    readonly "import":  TVroot_import<Annotation>
    readonly "variables":  TVroot_variables<Annotation>
    readonly "endOfFile":  TVroot_endOfFile<Annotation>
}
export type TVroot<Annotation> = TVTroot<Annotation>

export type TNroot<Annotation> = TAnnotatedType<Annotation, TVroot<Annotation>>
export type TRoot<Annotation> = TNroot<Annotation>