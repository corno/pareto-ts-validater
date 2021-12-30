import * as pr from "pareto-runtime"

export type TNGidentifier$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type TVTGidentifier<Annotation> = TNGidentifier$<Annotation>
export type TGidentifier<Annotation> =  TVTGidentifier<Annotation>
export type TVTGinitialization_arrayLiteral$<Annotation> = TGinitialization<Annotation>
export type TVGinitialization_arrayLiteral$<Annotation> = TVTGinitialization_arrayLiteral$<Annotation>[]

export type TNGinitialization_arrayLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVGinitialization_arrayLiteral$<Annotation>,
}
export type TVTGinitialization_arrayLiteral<Annotation> = TNGinitialization_arrayLiteral$<Annotation>
export type TVGinitialization_arrayLiteral<Annotation> = TVTGinitialization_arrayLiteral<Annotation>

export type TNGinitialization_false$<Annotation> = {
    readonly "annotation": Annotation,
}
export type TVTGinitialization_false<Annotation> = TNGinitialization_false$<Annotation>
export type TVGinitialization_false<Annotation> = TVTGinitialization_false<Annotation>

export type TNGinitialization_identifier$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type TVTGinitialization_identifier<Annotation> = TNGinitialization_identifier$<Annotation>
export type TVGinitialization_identifier<Annotation> = TVTGinitialization_identifier<Annotation>

export type TNGinitialization_noSubstitutionTemplateLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type TVTGinitialization_noSubstitutionTemplateLiteral<Annotation> = TNGinitialization_noSubstitutionTemplateLiteral$<Annotation>
export type TVGinitialization_noSubstitutionTemplateLiteral<Annotation> = TVTGinitialization_noSubstitutionTemplateLiteral<Annotation>

export type TNGinitialization_numericLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type TVTGinitialization_numericLiteral<Annotation> = TNGinitialization_numericLiteral$<Annotation>
export type TVGinitialization_numericLiteral<Annotation> = TVTGinitialization_numericLiteral<Annotation>

export type TNGinitialization_objectLiteral$$_name_identifier$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type TVTGinitialization_objectLiteral$$_name_identifier<Annotation> = TNGinitialization_objectLiteral$$_name_identifier$<Annotation>
export type TVGinitialization_objectLiteral$$_name_identifier<Annotation> = TVTGinitialization_objectLiteral$$_name_identifier<Annotation>

export type TNGinitialization_objectLiteral$$_name_stringLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type TVTGinitialization_objectLiteral$$_name_stringLiteral<Annotation> = TNGinitialization_objectLiteral$$_name_stringLiteral$<Annotation>
export type TVGinitialization_objectLiteral$$_name_stringLiteral<Annotation> = TVTGinitialization_objectLiteral$$_name_stringLiteral<Annotation>
export type TVTGinitialization_objectLiteral$$_name<Annotation> =
    | [ "identifier", TVGinitialization_objectLiteral$$_name_identifier<Annotation>]
    | [ "stringLiteral", TVGinitialization_objectLiteral$$_name_stringLiteral<Annotation>]
export type TVGinitialization_objectLiteral$$_name<Annotation> = TVTGinitialization_objectLiteral$$_name<Annotation>
export type TVTGinitialization_objectLiteral$$_initialization<Annotation> = TGinitialization<Annotation>
export type TVGinitialization_objectLiteral$$_initialization<Annotation> = TVTGinitialization_objectLiteral$$_initialization<Annotation>
export type TVTGinitialization_objectLiteral$$<Annotation> = {
    readonly "name":  TVGinitialization_objectLiteral$$_name<Annotation>
    readonly "initialization":  TVGinitialization_objectLiteral$$_initialization<Annotation>
}
export type TVGinitialization_objectLiteral$$<Annotation> = TVTGinitialization_objectLiteral$$<Annotation>

export type TNGinitialization_objectLiteral$$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVGinitialization_objectLiteral$$<Annotation>,
}
export type TVTGinitialization_objectLiteral$<Annotation> = TNGinitialization_objectLiteral$$<Annotation>
export type TVGinitialization_objectLiteral$<Annotation> = TVTGinitialization_objectLiteral$<Annotation>[]

export type TNGinitialization_objectLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVGinitialization_objectLiteral$<Annotation>,
}
export type TVTGinitialization_objectLiteral<Annotation> = TNGinitialization_objectLiteral$<Annotation>
export type TVGinitialization_objectLiteral<Annotation> = TVTGinitialization_objectLiteral<Annotation>

export type TNGinitialization_true$<Annotation> = {
    readonly "annotation": Annotation,
}
export type TVTGinitialization_true<Annotation> = TNGinitialization_true$<Annotation>
export type TVGinitialization_true<Annotation> = TVTGinitialization_true<Annotation>
export type TVTGinitialization<Annotation> =
    | [ "arrayLiteral", TVGinitialization_arrayLiteral<Annotation>]
    | [ "false", TVGinitialization_false<Annotation>]
    | [ "identifier", TVGinitialization_identifier<Annotation>]
    | [ "noSubstitutionTemplateLiteral", TVGinitialization_noSubstitutionTemplateLiteral<Annotation>]
    | [ "numericLiteral", TVGinitialization_numericLiteral<Annotation>]
    | [ "objectLiteral", TVGinitialization_objectLiteral<Annotation>]
    | [ "true", TVGinitialization_true<Annotation>]
export type TGinitialization<Annotation> =  TVTGinitialization<Annotation>
export type TVTroot_import$_clause$_namespace$<Annotation> = TGidentifier<Annotation>
export type TVroot_import$_clause$_namespace$<Annotation> = TVTroot_import$_clause$_namespace$<Annotation>

export type TNroot_import$_clause$_namespace$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVroot_import$_clause$_namespace$<Annotation>,
}
export type TVTroot_import$_clause$_namespace<Annotation> = TNroot_import$_clause$_namespace$<Annotation>
export type TVroot_import$_clause$_namespace<Annotation> = TVTroot_import$_clause$_namespace<Annotation>
export type TVTroot_import$_clause$_named$$_name<Annotation> = TGidentifier<Annotation>
export type TVroot_import$_clause$_named$$_name<Annotation> = TVTroot_import$_clause$_named$$_name<Annotation>
export type TVTroot_import$_clause$_named$$_as<Annotation> = TGidentifier<Annotation>
export type TVroot_import$_clause$_named$$_as<Annotation> = pr.optional<TVTroot_import$_clause$_named$$_as<Annotation>>
export type TVTroot_import$_clause$_named$$<Annotation> = {
    readonly "name":  TVroot_import$_clause$_named$$_name<Annotation>
    readonly "as":  TVroot_import$_clause$_named$$_as<Annotation>
}
export type TVroot_import$_clause$_named$$<Annotation> = TVTroot_import$_clause$_named$$<Annotation>

export type TNroot_import$_clause$_named$$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVroot_import$_clause$_named$$<Annotation>,
}
export type TVTroot_import$_clause$_named$<Annotation> = TNroot_import$_clause$_named$$<Annotation>
export type TVroot_import$_clause$_named$<Annotation> = TVTroot_import$_clause$_named$<Annotation>[]

export type TNroot_import$_clause$_named$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVroot_import$_clause$_named$<Annotation>,
}
export type TVTroot_import$_clause$_named<Annotation> = TNroot_import$_clause$_named$<Annotation>
export type TVroot_import$_clause$_named<Annotation> = TVTroot_import$_clause$_named<Annotation>
export type TVTroot_import$_clause$<Annotation> =
    | [ "namespace", TVroot_import$_clause$_namespace<Annotation>]
    | [ "named", TVroot_import$_clause$_named<Annotation>]
export type TVroot_import$_clause$<Annotation> = TVTroot_import$_clause$<Annotation>

export type TNroot_import$_clause$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVroot_import$_clause$<Annotation>,
}
export type TVTroot_import$_clause<Annotation> = TNroot_import$_clause$<Annotation>
export type TVroot_import$_clause<Annotation> = TVTroot_import$_clause<Annotation>

export type TNroot_import$_file$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type TVTroot_import$_file<Annotation> = TNroot_import$_file$<Annotation>
export type TVroot_import$_file<Annotation> = TVTroot_import$_file<Annotation>
export type TVTroot_import$<Annotation> = {
    readonly "clause":  TVroot_import$_clause<Annotation>
    readonly "file":  TVroot_import$_file<Annotation>
}
export type TVroot_import$<Annotation> = TVTroot_import$<Annotation>

export type TNroot_import$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVroot_import$<Annotation>,
}
export type TVTroot_import<Annotation> = TNroot_import$<Annotation>
export type TVroot_import<Annotation> = TVTroot_import<Annotation>

export type TNroot_variables$_export$<Annotation> = {
    readonly "annotation": Annotation,
}
export type TVTroot_variables$_export<Annotation> = TNroot_variables$_export$<Annotation>
export type TVroot_variables$_export<Annotation> = TVTroot_variables$_export<Annotation>

export type TNroot_variables$_variableDeclarationList$$_name$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type TVTroot_variables$_variableDeclarationList$$_name<Annotation> = TNroot_variables$_variableDeclarationList$$_name$<Annotation>
export type TVroot_variables$_variableDeclarationList$$_name<Annotation> = TVTroot_variables$_variableDeclarationList$$_name<Annotation>

export type TNroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type TVTroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation> = TNroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation>
export type TVroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation> = TVTroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation>

export type TNroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type TVTroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation> = TNroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation>
export type TVroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation> = TVTroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation>
export type TVTroot_variables$_variableDeclarationList$$_type$_name$<Annotation> = {
    readonly "context":  TVroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation>
    readonly "type":  TVroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation>
}
export type TVroot_variables$_variableDeclarationList$$_type$_name$<Annotation> = TVTroot_variables$_variableDeclarationList$$_type$_name$<Annotation>

export type TNroot_variables$_variableDeclarationList$$_type$_name$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVroot_variables$_variableDeclarationList$$_type$_name$<Annotation>,
}
export type TVTroot_variables$_variableDeclarationList$$_type$_name<Annotation> = TNroot_variables$_variableDeclarationList$$_type$_name$<Annotation>
export type TVroot_variables$_variableDeclarationList$$_type$_name<Annotation> = TVTroot_variables$_variableDeclarationList$$_type$_name<Annotation>
export type TVTroot_variables$_variableDeclarationList$$_type$<Annotation> = {
    readonly "name":  TVroot_variables$_variableDeclarationList$$_type$_name<Annotation>
}
export type TVroot_variables$_variableDeclarationList$$_type$<Annotation> = TVTroot_variables$_variableDeclarationList$$_type$<Annotation>

export type TNroot_variables$_variableDeclarationList$$_type$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVroot_variables$_variableDeclarationList$$_type$<Annotation>,
}
export type TVTroot_variables$_variableDeclarationList$$_type<Annotation> = TNroot_variables$_variableDeclarationList$$_type$<Annotation>
export type TVroot_variables$_variableDeclarationList$$_type<Annotation> = TVTroot_variables$_variableDeclarationList$$_type<Annotation>
export type TVTroot_variables$_variableDeclarationList$$_one<Annotation> = TGinitialization<Annotation>
export type TVroot_variables$_variableDeclarationList$$_one<Annotation> = pr.optional<TVTroot_variables$_variableDeclarationList$$_one<Annotation>>
export type TVTroot_variables$_variableDeclarationList$$<Annotation> = {
    readonly "name":  TVroot_variables$_variableDeclarationList$$_name<Annotation>
    readonly "type":  TVroot_variables$_variableDeclarationList$$_type<Annotation>
    readonly "one":  TVroot_variables$_variableDeclarationList$$_one<Annotation>
}
export type TVroot_variables$_variableDeclarationList$$<Annotation> = TVTroot_variables$_variableDeclarationList$$<Annotation>

export type TNroot_variables$_variableDeclarationList$$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVroot_variables$_variableDeclarationList$$<Annotation>,
}
export type TVTroot_variables$_variableDeclarationList$<Annotation> = TNroot_variables$_variableDeclarationList$$<Annotation>
export type TVroot_variables$_variableDeclarationList$<Annotation> = TVTroot_variables$_variableDeclarationList$<Annotation>[]

export type TNroot_variables$_variableDeclarationList$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVroot_variables$_variableDeclarationList$<Annotation>,
}
export type TVTroot_variables$_variableDeclarationList<Annotation> = TNroot_variables$_variableDeclarationList$<Annotation>
export type TVroot_variables$_variableDeclarationList<Annotation> = TVTroot_variables$_variableDeclarationList<Annotation>
export type TVTroot_variables$<Annotation> = {
    readonly "export":  TVroot_variables$_export<Annotation>
    readonly "variableDeclarationList":  TVroot_variables$_variableDeclarationList<Annotation>
}
export type TVroot_variables$<Annotation> = TVTroot_variables$<Annotation>

export type TNroot_variables$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVroot_variables$<Annotation>,
}
export type TVTroot_variables<Annotation> = TNroot_variables$<Annotation>
export type TVroot_variables<Annotation> = TVTroot_variables<Annotation>[]

export type TNroot_endOfFile$<Annotation> = {
    readonly "annotation": Annotation,
}
export type TVTroot_endOfFile<Annotation> = TNroot_endOfFile$<Annotation>
export type TVroot_endOfFile<Annotation> = TVTroot_endOfFile<Annotation>
export type TVTroot<Annotation> = {
    readonly "import":  TVroot_import<Annotation>
    readonly "variables":  TVroot_variables<Annotation>
    readonly "endOfFile":  TVroot_endOfFile<Annotation>
}
export type TVroot<Annotation> = TVTroot<Annotation>

export type TNroot<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": TVroot<Annotation>,
}
export type TRoot<Annotation> = TNroot<Annotation>