import * as pr from "pareto-runtime"

export type NGidentifier$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGidentifier<Annotation> = NGidentifier$<Annotation>
export type Gidentifier<Annotation> =  VTGidentifier<Annotation>
export type VTGtype_array$<Annotation> = Gtype<Annotation>
export type VGtype_array$<Annotation> = VTGtype_array$<Annotation>

export type NGtype_array$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_array$<Annotation>,
}
export type VTGtype_array<Annotation> = NGtype_array$<Annotation>
export type VGtype_array<Annotation> = VTGtype_array<Annotation>

export type NGtype_boolean$<Annotation> = {
    readonly "annotation": Annotation,
}
export type VTGtype_boolean<Annotation> = NGtype_boolean$<Annotation>
export type VGtype_boolean<Annotation> = VTGtype_boolean<Annotation>

export type NGtype_string$<Annotation> = {
    readonly "annotation": Annotation,
}
export type VTGtype_string<Annotation> = NGtype_string$<Annotation>
export type VGtype_string<Annotation> = VTGtype_string<Annotation>

export type NGtype_number$<Annotation> = {
    readonly "annotation": Annotation,
}
export type VTGtype_number<Annotation> = NGtype_number$<Annotation>
export type VGtype_number<Annotation> = VTGtype_number<Annotation>
export type VTGtype_typeLiteral$_index$_key$_name<Annotation> = Gidentifier<Annotation>
export type VGtype_typeLiteral$_index$_key$_name<Annotation> = VTGtype_typeLiteral$_index$_key$_name<Annotation>
export type VTGtype_typeLiteral$_index$_key$_type<Annotation> = Gtype<Annotation>
export type VGtype_typeLiteral$_index$_key$_type<Annotation> = pr.optional<VTGtype_typeLiteral$_index$_key$_type<Annotation>>
export type VTGtype_typeLiteral$_index$_key$<Annotation> = {
    readonly "name":  VGtype_typeLiteral$_index$_key$_name<Annotation>
    readonly "type":  VGtype_typeLiteral$_index$_key$_type<Annotation>
}
export type VGtype_typeLiteral$_index$_key$<Annotation> = VTGtype_typeLiteral$_index$_key$<Annotation>

export type NGtype_typeLiteral$_index$_key$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_typeLiteral$_index$_key$<Annotation>,
}
export type VTGtype_typeLiteral$_index$_key<Annotation> = NGtype_typeLiteral$_index$_key$<Annotation>
export type VGtype_typeLiteral$_index$_key<Annotation> = VTGtype_typeLiteral$_index$_key<Annotation>
export type VTGtype_typeLiteral$_index$_type<Annotation> = Gtype<Annotation>
export type VGtype_typeLiteral$_index$_type<Annotation> = pr.optional<VTGtype_typeLiteral$_index$_type<Annotation>>
export type VTGtype_typeLiteral$_index$<Annotation> = {
    readonly "key":  VGtype_typeLiteral$_index$_key<Annotation>
    readonly "type":  VGtype_typeLiteral$_index$_type<Annotation>
}
export type VGtype_typeLiteral$_index$<Annotation> = VTGtype_typeLiteral$_index$<Annotation>

export type NGtype_typeLiteral$_index$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_typeLiteral$_index$<Annotation>,
}
export type VTGtype_typeLiteral$_index<Annotation> = NGtype_typeLiteral$_index$<Annotation>
export type VGtype_typeLiteral$_index<Annotation> = VTGtype_typeLiteral$_index<Annotation>

export type NGtype_typeLiteral$_property$_readonly$<Annotation> = {
    readonly "annotation": Annotation,
}
export type VTGtype_typeLiteral$_property$_readonly<Annotation> = NGtype_typeLiteral$_property$_readonly$<Annotation>
export type VGtype_typeLiteral$_property$_readonly<Annotation> = VTGtype_typeLiteral$_property$_readonly<Annotation>

export type NGtype_typeLiteral$_property$_name$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGtype_typeLiteral$_property$_name<Annotation> = NGtype_typeLiteral$_property$_name$<Annotation>
export type VGtype_typeLiteral$_property$_name<Annotation> = VTGtype_typeLiteral$_property$_name<Annotation>

export type NGtype_typeLiteral$_property$_questionToken$<Annotation> = {
    readonly "annotation": Annotation,
}
export type VTGtype_typeLiteral$_property$_questionToken<Annotation> = NGtype_typeLiteral$_property$_questionToken$<Annotation>
export type VGtype_typeLiteral$_property$_questionToken<Annotation> = pr.optional<VTGtype_typeLiteral$_property$_questionToken<Annotation>>
export type VTGtype_typeLiteral$_property$_type<Annotation> = Gtype<Annotation>
export type VGtype_typeLiteral$_property$_type<Annotation> = pr.optional<VTGtype_typeLiteral$_property$_type<Annotation>>
export type VTGtype_typeLiteral$_property$<Annotation> = {
    readonly "readonly":  VGtype_typeLiteral$_property$_readonly<Annotation>
    readonly "name":  VGtype_typeLiteral$_property$_name<Annotation>
    readonly "questionToken":  VGtype_typeLiteral$_property$_questionToken<Annotation>
    readonly "type":  VGtype_typeLiteral$_property$_type<Annotation>
}
export type VGtype_typeLiteral$_property$<Annotation> = VTGtype_typeLiteral$_property$<Annotation>

export type NGtype_typeLiteral$_property$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_typeLiteral$_property$<Annotation>,
}
export type VTGtype_typeLiteral$_property<Annotation> = NGtype_typeLiteral$_property$<Annotation>
export type VGtype_typeLiteral$_property<Annotation> = VTGtype_typeLiteral$_property<Annotation>
export type VTGtype_typeLiteral$<Annotation> =
    | [ "index", VGtype_typeLiteral$_index<Annotation>]
    | [ "property", VGtype_typeLiteral$_property<Annotation>]
export type VGtype_typeLiteral$<Annotation> = VTGtype_typeLiteral$<Annotation>[]

export type NGtype_typeLiteral$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_typeLiteral$<Annotation>,
}
export type VTGtype_typeLiteral<Annotation> = NGtype_typeLiteral$<Annotation>
export type VGtype_typeLiteral<Annotation> = VTGtype_typeLiteral<Annotation>
export type VTGtype_typeReference$_referencedType_identifier<Annotation> = Gidentifier<Annotation>
export type VGtype_typeReference$_referencedType_identifier<Annotation> = VTGtype_typeReference$_referencedType_identifier<Annotation>
export type VTGtype_typeReference$_referencedType_qualifiedName$_context<Annotation> = Gidentifier<Annotation>
export type VGtype_typeReference$_referencedType_qualifiedName$_context<Annotation> = VTGtype_typeReference$_referencedType_qualifiedName$_context<Annotation>
export type VTGtype_typeReference$_referencedType_qualifiedName$_type<Annotation> = Gidentifier<Annotation>
export type VGtype_typeReference$_referencedType_qualifiedName$_type<Annotation> = VTGtype_typeReference$_referencedType_qualifiedName$_type<Annotation>
export type VTGtype_typeReference$_referencedType_qualifiedName$<Annotation> = {
    readonly "context":  VGtype_typeReference$_referencedType_qualifiedName$_context<Annotation>
    readonly "type":  VGtype_typeReference$_referencedType_qualifiedName$_type<Annotation>
}
export type VGtype_typeReference$_referencedType_qualifiedName$<Annotation> = VTGtype_typeReference$_referencedType_qualifiedName$<Annotation>

export type NGtype_typeReference$_referencedType_qualifiedName$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_typeReference$_referencedType_qualifiedName$<Annotation>,
}
export type VTGtype_typeReference$_referencedType_qualifiedName<Annotation> = NGtype_typeReference$_referencedType_qualifiedName$<Annotation>
export type VGtype_typeReference$_referencedType_qualifiedName<Annotation> = VTGtype_typeReference$_referencedType_qualifiedName<Annotation>
export type VTGtype_typeReference$_referencedType<Annotation> =
    | [ "identifier", VGtype_typeReference$_referencedType_identifier<Annotation>]
    | [ "qualifiedName", VGtype_typeReference$_referencedType_qualifiedName<Annotation>]
export type VGtype_typeReference$_referencedType<Annotation> = VTGtype_typeReference$_referencedType<Annotation>
export type VTGtype_typeReference$_parameters<Annotation> = Gtype<Annotation>
export type VGtype_typeReference$_parameters<Annotation> = VTGtype_typeReference$_parameters<Annotation>[]
export type VTGtype_typeReference$<Annotation> = {
    readonly "referencedType":  VGtype_typeReference$_referencedType<Annotation>
    readonly "parameters":  VGtype_typeReference$_parameters<Annotation>
}
export type VGtype_typeReference$<Annotation> = VTGtype_typeReference$<Annotation>

export type NGtype_typeReference$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_typeReference$<Annotation>,
}
export type VTGtype_typeReference<Annotation> = NGtype_typeReference$<Annotation>
export type VGtype_typeReference<Annotation> = VTGtype_typeReference<Annotation>

export type NGtype_union$$_state$_string$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTGtype_union$$_state$_string<Annotation> = NGtype_union$$_state$_string$<Annotation>
export type VGtype_union$$_state$_string<Annotation> = VTGtype_union$$_state$_string<Annotation>
export type VTGtype_union$$_state$<Annotation> =
    | [ "string", VGtype_union$$_state$_string<Annotation>]
export type VGtype_union$$_state$<Annotation> = VTGtype_union$$_state$<Annotation>

export type NGtype_union$$_state$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_union$$_state$<Annotation>,
}
export type VTGtype_union$$_state<Annotation> = NGtype_union$$_state$<Annotation>
export type VGtype_union$$_state<Annotation> = VTGtype_union$$_state<Annotation>
export type VTGtype_union$$_data<Annotation> = Gtype<Annotation>
export type VGtype_union$$_data<Annotation> = VTGtype_union$$_data<Annotation>
export type VTGtype_union$$<Annotation> = {
    readonly "state":  VGtype_union$$_state<Annotation>
    readonly "data":  VGtype_union$$_data<Annotation>
}
export type VGtype_union$$<Annotation> = VTGtype_union$$<Annotation>

export type NGtype_union$$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_union$$<Annotation>,
}
export type VTGtype_union$<Annotation> = NGtype_union$$<Annotation>
export type VGtype_union$<Annotation> = VTGtype_union$<Annotation>[]

export type NGtype_union$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": VGtype_union$<Annotation>,
}
export type VTGtype_union<Annotation> = NGtype_union$<Annotation>
export type VGtype_union<Annotation> = VTGtype_union<Annotation>
export type VTGtype<Annotation> =
    | [ "array", VGtype_array<Annotation>]
    | [ "boolean", VGtype_boolean<Annotation>]
    | [ "string", VGtype_string<Annotation>]
    | [ "number", VGtype_number<Annotation>]
    | [ "typeLiteral", VGtype_typeLiteral<Annotation>]
    | [ "typeReference", VGtype_typeReference<Annotation>]
    | [ "union", VGtype_union<Annotation>]
export type Gtype<Annotation> =  VTGtype<Annotation>
export type VTroot_imports$_clause$_namespace$<Annotation> = Gidentifier<Annotation>
export type Vroot_imports$_clause$_namespace$<Annotation> = VTroot_imports$_clause$_namespace$<Annotation>

export type Nroot_imports$_clause$_namespace$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_imports$_clause$_namespace$<Annotation>,
}
export type VTroot_imports$_clause$_namespace<Annotation> = Nroot_imports$_clause$_namespace$<Annotation>
export type Vroot_imports$_clause$_namespace<Annotation> = VTroot_imports$_clause$_namespace<Annotation>
export type VTroot_imports$_clause$_named$$_name<Annotation> = Gidentifier<Annotation>
export type Vroot_imports$_clause$_named$$_name<Annotation> = VTroot_imports$_clause$_named$$_name<Annotation>
export type VTroot_imports$_clause$_named$$_as<Annotation> = Gidentifier<Annotation>
export type Vroot_imports$_clause$_named$$_as<Annotation> = pr.optional<VTroot_imports$_clause$_named$$_as<Annotation>>
export type VTroot_imports$_clause$_named$$<Annotation> = {
    readonly "name":  Vroot_imports$_clause$_named$$_name<Annotation>
    readonly "as":  Vroot_imports$_clause$_named$$_as<Annotation>
}
export type Vroot_imports$_clause$_named$$<Annotation> = VTroot_imports$_clause$_named$$<Annotation>

export type Nroot_imports$_clause$_named$$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_imports$_clause$_named$$<Annotation>,
}
export type VTroot_imports$_clause$_named$<Annotation> = Nroot_imports$_clause$_named$$<Annotation>
export type Vroot_imports$_clause$_named$<Annotation> = VTroot_imports$_clause$_named$<Annotation>[]

export type Nroot_imports$_clause$_named$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_imports$_clause$_named$<Annotation>,
}
export type VTroot_imports$_clause$_named<Annotation> = Nroot_imports$_clause$_named$<Annotation>
export type Vroot_imports$_clause$_named<Annotation> = VTroot_imports$_clause$_named<Annotation>
export type VTroot_imports$_clause$<Annotation> =
    | [ "namespace", Vroot_imports$_clause$_namespace<Annotation>]
    | [ "named", Vroot_imports$_clause$_named<Annotation>]
export type Vroot_imports$_clause$<Annotation> = VTroot_imports$_clause$<Annotation>

export type Nroot_imports$_clause$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_imports$_clause$<Annotation>,
}
export type VTroot_imports$_clause<Annotation> = Nroot_imports$_clause$<Annotation>
export type Vroot_imports$_clause<Annotation> = VTroot_imports$_clause<Annotation>

export type Nroot_imports$_file$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": string,
}
export type VTroot_imports$_file<Annotation> = Nroot_imports$_file$<Annotation>
export type Vroot_imports$_file<Annotation> = VTroot_imports$_file<Annotation>
export type VTroot_imports$<Annotation> = {
    readonly "clause":  Vroot_imports$_clause<Annotation>
    readonly "file":  Vroot_imports$_file<Annotation>
}
export type Vroot_imports$<Annotation> = VTroot_imports$<Annotation>

export type Nroot_imports$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_imports$<Annotation>,
}
export type VTroot_imports<Annotation> = Nroot_imports$<Annotation>
export type Vroot_imports<Annotation> = VTroot_imports<Annotation>[]

export type Nroot_typeAliases$_export$<Annotation> = {
    readonly "annotation": Annotation,
}
export type VTroot_typeAliases$_export<Annotation> = Nroot_typeAliases$_export$<Annotation>
export type Vroot_typeAliases$_export<Annotation> = VTroot_typeAliases$_export<Annotation>
export type VTroot_typeAliases$_name<Annotation> = Gidentifier<Annotation>
export type Vroot_typeAliases$_name<Annotation> = VTroot_typeAliases$_name<Annotation>
export type VTroot_typeAliases$_typeParameters$<Annotation> = Gidentifier<Annotation>
export type Vroot_typeAliases$_typeParameters$<Annotation> = VTroot_typeAliases$_typeParameters$<Annotation>

export type Nroot_typeAliases$_typeParameters$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_typeAliases$_typeParameters$<Annotation>,
}
export type VTroot_typeAliases$_typeParameters<Annotation> = Nroot_typeAliases$_typeParameters$<Annotation>
export type Vroot_typeAliases$_typeParameters<Annotation> = VTroot_typeAliases$_typeParameters<Annotation>[]
export type VTroot_typeAliases$_type<Annotation> = Gtype<Annotation>
export type Vroot_typeAliases$_type<Annotation> = VTroot_typeAliases$_type<Annotation>
export type VTroot_typeAliases$<Annotation> = {
    readonly "export":  Vroot_typeAliases$_export<Annotation>
    readonly "name":  Vroot_typeAliases$_name<Annotation>
    readonly "typeParameters":  Vroot_typeAliases$_typeParameters<Annotation>
    readonly "type":  Vroot_typeAliases$_type<Annotation>
}
export type Vroot_typeAliases$<Annotation> = VTroot_typeAliases$<Annotation>

export type Nroot_typeAliases$<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot_typeAliases$<Annotation>,
}
export type VTroot_typeAliases<Annotation> = Nroot_typeAliases$<Annotation>
export type Vroot_typeAliases<Annotation> = VTroot_typeAliases<Annotation>[]

export type Nroot_endOfFile$<Annotation> = {
    readonly "annotation": Annotation,
}
export type VTroot_endOfFile<Annotation> = Nroot_endOfFile$<Annotation>
export type Vroot_endOfFile<Annotation> = VTroot_endOfFile<Annotation>
export type VTroot<Annotation> = {
    readonly "imports":  Vroot_imports<Annotation>
    readonly "typeAliases":  Vroot_typeAliases<Annotation>
    readonly "endOfFile":  Vroot_endOfFile<Annotation>
}
export type Vroot<Annotation> = VTroot<Annotation>

export type Nroot<Annotation> = {
    readonly "annotation": Annotation,
    readonly "content": Vroot<Annotation>,
}
export type Root<Annotation> = Nroot<Annotation>