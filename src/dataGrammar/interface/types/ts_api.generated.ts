import * as pr from "pareto-runtime"

export type NGidentifier$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGidentifier<Annotation> = NGidentifier$<Annotation>
export type Gidentifier<Annotation> =  VTGidentifier<Annotation>
export type VTGinitialization_arrayLiteral$<Annotation> = Ginitialization<Annotation>
export type VGinitialization_arrayLiteral$<Annotation> = VTGinitialization_arrayLiteral$<Annotation>[]

export type NGinitialization_arrayLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGinitialization_arrayLiteral$<Annotation>,
}
export type VTGinitialization_arrayLiteral<Annotation> = NGinitialization_arrayLiteral$<Annotation>
export type VGinitialization_arrayLiteral<Annotation> = VTGinitialization_arrayLiteral<Annotation>

export type NGinitialization_false$<Annotation> = {
    readonly "annotation": Annotation,
}
export type VTGinitialization_false<Annotation> = NGinitialization_false$<Annotation>
export type VGinitialization_false<Annotation> = VTGinitialization_false<Annotation>

export type NGinitialization_identifier$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGinitialization_identifier<Annotation> = NGinitialization_identifier$<Annotation>
export type VGinitialization_identifier<Annotation> = VTGinitialization_identifier<Annotation>

export type NGinitialization_noSubstitutionTemplateLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGinitialization_noSubstitutionTemplateLiteral<Annotation> = NGinitialization_noSubstitutionTemplateLiteral$<Annotation>
export type VGinitialization_noSubstitutionTemplateLiteral<Annotation> = VTGinitialization_noSubstitutionTemplateLiteral<Annotation>

export type NGinitialization_numericLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGinitialization_numericLiteral<Annotation> = NGinitialization_numericLiteral$<Annotation>
export type VGinitialization_numericLiteral<Annotation> = VTGinitialization_numericLiteral<Annotation>

export type NGinitialization_objectLiteral$$_name_identifier$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGinitialization_objectLiteral$$_name_identifier<Annotation> = NGinitialization_objectLiteral$$_name_identifier$<Annotation>
export type VGinitialization_objectLiteral$$_name_identifier<Annotation> = VTGinitialization_objectLiteral$$_name_identifier<Annotation>

export type NGinitialization_objectLiteral$$_name_stringLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGinitialization_objectLiteral$$_name_stringLiteral<Annotation> = NGinitialization_objectLiteral$$_name_stringLiteral$<Annotation>
export type VGinitialization_objectLiteral$$_name_stringLiteral<Annotation> = VTGinitialization_objectLiteral$$_name_stringLiteral<Annotation>
export type VTGinitialization_objectLiteral$$_name<Annotation> =
    | [ "identifier", VGinitialization_objectLiteral$$_name_identifier<Annotation>]
    | [ "stringLiteral", VGinitialization_objectLiteral$$_name_stringLiteral<Annotation>]
export type VGinitialization_objectLiteral$$_name<Annotation> = VTGinitialization_objectLiteral$$_name<Annotation>
export type VTGinitialization_objectLiteral$$_initialization<Annotation> = Ginitialization<Annotation>
export type VGinitialization_objectLiteral$$_initialization<Annotation> = VTGinitialization_objectLiteral$$_initialization<Annotation>
export type VTGinitialization_objectLiteral$$<Annotation> = {
    readonly "name":  VGinitialization_objectLiteral$$_name<Annotation>
    readonly "initialization":  VGinitialization_objectLiteral$$_initialization<Annotation>
}
export type VGinitialization_objectLiteral$$<Annotation> = VTGinitialization_objectLiteral$$<Annotation>

export type NGinitialization_objectLiteral$$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGinitialization_objectLiteral$$<Annotation>,
}
export type VTGinitialization_objectLiteral$<Annotation> = NGinitialization_objectLiteral$$<Annotation>
export type VGinitialization_objectLiteral$<Annotation> = VTGinitialization_objectLiteral$<Annotation>[]

export type NGinitialization_objectLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGinitialization_objectLiteral$<Annotation>,
}
export type VTGinitialization_objectLiteral<Annotation> = NGinitialization_objectLiteral$<Annotation>
export type VGinitialization_objectLiteral<Annotation> = VTGinitialization_objectLiteral<Annotation>

export type NGinitialization_stringLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGinitialization_stringLiteral<Annotation> = NGinitialization_stringLiteral$<Annotation>
export type VGinitialization_stringLiteral<Annotation> = VTGinitialization_stringLiteral<Annotation>

export type NGinitialization_true$<Annotation> = {
    readonly "annotation": Annotation,
}
export type VTGinitialization_true<Annotation> = NGinitialization_true$<Annotation>
export type VGinitialization_true<Annotation> = VTGinitialization_true<Annotation>
export type VTGinitialization<Annotation> =
    | [ "arrayLiteral", VGinitialization_arrayLiteral<Annotation>]
    | [ "false", VGinitialization_false<Annotation>]
    | [ "identifier", VGinitialization_identifier<Annotation>]
    | [ "noSubstitutionTemplateLiteral", VGinitialization_noSubstitutionTemplateLiteral<Annotation>]
    | [ "numericLiteral", VGinitialization_numericLiteral<Annotation>]
    | [ "objectLiteral", VGinitialization_objectLiteral<Annotation>]
    | [ "stringLiteral", VGinitialization_stringLiteral<Annotation>]
    | [ "true", VGinitialization_true<Annotation>]
export type Ginitialization<Annotation> =  VTGinitialization<Annotation>
export type VTroot_import$_clause$_namespace$<Annotation> = Gidentifier<Annotation>
export type Vroot_import$_clause$_namespace$<Annotation> = VTroot_import$_clause$_namespace$<Annotation>

export type Nroot_import$_clause$_namespace$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_import$_clause$_namespace$<Annotation>,
}
export type VTroot_import$_clause$_namespace<Annotation> = Nroot_import$_clause$_namespace$<Annotation>
export type Vroot_import$_clause$_namespace<Annotation> = VTroot_import$_clause$_namespace<Annotation>
export type VTroot_import$_clause$_named$$_name<Annotation> = Gidentifier<Annotation>
export type Vroot_import$_clause$_named$$_name<Annotation> = VTroot_import$_clause$_named$$_name<Annotation>
export type VTroot_import$_clause$_named$$_as<Annotation> = Gidentifier<Annotation>
export type Vroot_import$_clause$_named$$_as<Annotation> = pr.optional<VTroot_import$_clause$_named$$_as<Annotation>>
export type VTroot_import$_clause$_named$$<Annotation> = {
    readonly "name":  Vroot_import$_clause$_named$$_name<Annotation>
    readonly "as":  Vroot_import$_clause$_named$$_as<Annotation>
}
export type Vroot_import$_clause$_named$$<Annotation> = VTroot_import$_clause$_named$$<Annotation>

export type Nroot_import$_clause$_named$$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_import$_clause$_named$$<Annotation>,
}
export type VTroot_import$_clause$_named$<Annotation> = Nroot_import$_clause$_named$$<Annotation>
export type Vroot_import$_clause$_named$<Annotation> = VTroot_import$_clause$_named$<Annotation>[]

export type Nroot_import$_clause$_named$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_import$_clause$_named$<Annotation>,
}
export type VTroot_import$_clause$_named<Annotation> = Nroot_import$_clause$_named$<Annotation>
export type Vroot_import$_clause$_named<Annotation> = VTroot_import$_clause$_named<Annotation>
export type VTroot_import$_clause$<Annotation> =
    | [ "namespace", Vroot_import$_clause$_namespace<Annotation>]
    | [ "named", Vroot_import$_clause$_named<Annotation>]
export type Vroot_import$_clause$<Annotation> = VTroot_import$_clause$<Annotation>

export type Nroot_import$_clause$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_import$_clause$<Annotation>,
}
export type VTroot_import$_clause<Annotation> = Nroot_import$_clause$<Annotation>
export type Vroot_import$_clause<Annotation> = VTroot_import$_clause<Annotation>

export type Nroot_import$_file$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTroot_import$_file<Annotation> = Nroot_import$_file$<Annotation>
export type Vroot_import$_file<Annotation> = VTroot_import$_file<Annotation>
export type VTroot_import$<Annotation> = {
    readonly "clause":  Vroot_import$_clause<Annotation>
    readonly "file":  Vroot_import$_file<Annotation>
}
export type Vroot_import$<Annotation> = VTroot_import$<Annotation>

export type Nroot_import$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_import$<Annotation>,
}
export type VTroot_import<Annotation> = Nroot_import$<Annotation>
export type Vroot_import<Annotation> = VTroot_import<Annotation>

export type Nroot_variables$_export$<Annotation> = {
    readonly "annotation": Annotation,
}
export type VTroot_variables$_export<Annotation> = Nroot_variables$_export$<Annotation>
export type Vroot_variables$_export<Annotation> = VTroot_variables$_export<Annotation>

export type Nroot_variables$_variableDeclarationList$$_name$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTroot_variables$_variableDeclarationList$$_name<Annotation> = Nroot_variables$_variableDeclarationList$$_name$<Annotation>
export type Vroot_variables$_variableDeclarationList$$_name<Annotation> = VTroot_variables$_variableDeclarationList$$_name<Annotation>

export type Nroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation> = Nroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation>
export type Vroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation> = VTroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation>

export type Nroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation> = Nroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation>
export type Vroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation> = VTroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation>
export type VTroot_variables$_variableDeclarationList$$_type$_name$<Annotation> = {
    readonly "context":  Vroot_variables$_variableDeclarationList$$_type$_name$_context<Annotation>
    readonly "type":  Vroot_variables$_variableDeclarationList$$_type$_name$_type<Annotation>
}
export type Vroot_variables$_variableDeclarationList$$_type$_name$<Annotation> = VTroot_variables$_variableDeclarationList$$_type$_name$<Annotation>

export type Nroot_variables$_variableDeclarationList$$_type$_name$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_variables$_variableDeclarationList$$_type$_name$<Annotation>,
}
export type VTroot_variables$_variableDeclarationList$$_type$_name<Annotation> = Nroot_variables$_variableDeclarationList$$_type$_name$<Annotation>
export type Vroot_variables$_variableDeclarationList$$_type$_name<Annotation> = VTroot_variables$_variableDeclarationList$$_type$_name<Annotation>
export type VTroot_variables$_variableDeclarationList$$_type$<Annotation> = {
    readonly "name":  Vroot_variables$_variableDeclarationList$$_type$_name<Annotation>
}
export type Vroot_variables$_variableDeclarationList$$_type$<Annotation> = VTroot_variables$_variableDeclarationList$$_type$<Annotation>

export type Nroot_variables$_variableDeclarationList$$_type$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_variables$_variableDeclarationList$$_type$<Annotation>,
}
export type VTroot_variables$_variableDeclarationList$$_type<Annotation> = Nroot_variables$_variableDeclarationList$$_type$<Annotation>
export type Vroot_variables$_variableDeclarationList$$_type<Annotation> = VTroot_variables$_variableDeclarationList$$_type<Annotation>
export type VTroot_variables$_variableDeclarationList$$_one<Annotation> = Ginitialization<Annotation>
export type Vroot_variables$_variableDeclarationList$$_one<Annotation> = pr.optional<VTroot_variables$_variableDeclarationList$$_one<Annotation>>
export type VTroot_variables$_variableDeclarationList$$<Annotation> = {
    readonly "name":  Vroot_variables$_variableDeclarationList$$_name<Annotation>
    readonly "type":  Vroot_variables$_variableDeclarationList$$_type<Annotation>
    readonly "one":  Vroot_variables$_variableDeclarationList$$_one<Annotation>
}
export type Vroot_variables$_variableDeclarationList$$<Annotation> = VTroot_variables$_variableDeclarationList$$<Annotation>

export type Nroot_variables$_variableDeclarationList$$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_variables$_variableDeclarationList$$<Annotation>,
}
export type VTroot_variables$_variableDeclarationList$<Annotation> = Nroot_variables$_variableDeclarationList$$<Annotation>
export type Vroot_variables$_variableDeclarationList$<Annotation> = VTroot_variables$_variableDeclarationList$<Annotation>[]

export type Nroot_variables$_variableDeclarationList$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_variables$_variableDeclarationList$<Annotation>,
}
export type VTroot_variables$_variableDeclarationList<Annotation> = Nroot_variables$_variableDeclarationList$<Annotation>
export type Vroot_variables$_variableDeclarationList<Annotation> = VTroot_variables$_variableDeclarationList<Annotation>
export type VTroot_variables$<Annotation> = {
    readonly "export":  Vroot_variables$_export<Annotation>
    readonly "variableDeclarationList":  Vroot_variables$_variableDeclarationList<Annotation>
}
export type Vroot_variables$<Annotation> = VTroot_variables$<Annotation>

export type Nroot_variables$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_variables$<Annotation>,
}
export type VTroot_variables<Annotation> = Nroot_variables$<Annotation>
export type Vroot_variables<Annotation> = VTroot_variables<Annotation>[]

export type Nroot_endOfFile$<Annotation> = {
    readonly "annotation": Annotation,
}
export type VTroot_endOfFile<Annotation> = Nroot_endOfFile$<Annotation>
export type Vroot_endOfFile<Annotation> = VTroot_endOfFile<Annotation>
export type VTroot<Annotation> = {
    readonly "import":  Vroot_import<Annotation>
    readonly "variables":  Vroot_variables<Annotation>
    readonly "endOfFile":  Vroot_endOfFile<Annotation>
}
export type Vroot<Annotation> = VTroot<Annotation>

export type Nroot<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot<Annotation>,
}
export type Root<Annotation> = Nroot<Annotation>