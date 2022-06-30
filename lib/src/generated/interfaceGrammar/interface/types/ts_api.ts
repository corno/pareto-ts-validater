import * as pa from "pareto-lang-api"

export type TAnnotatedString<Annotation> = { readonly "annotation": Annotation; readonly "value": string }
export type TAnnotatedType<Annotation, Type> = { readonly "annotation": Annotation; readonly "content": Type }
export type TVTGcallback$_name<Annotation> = TGidentifier<Annotation>
export type TVGcallback$_name<Annotation> = TVTGcallback$_name<Annotation>
export type TVTGcallback$_type$_parameter$_name<Annotation> = TGidentifier<Annotation>
export type TVGcallback$_type$_parameter$_name<Annotation> = TVTGcallback$_type$_parameter$_name<Annotation>
export type TVTGcallback$_type$_parameter$_type<Annotation> = TGinterface<Annotation>
export type TVGcallback$_type$_parameter$_type<Annotation> = TVTGcallback$_type$_parameter$_type<Annotation>
export type TVTGcallback$_type$_parameter$<Annotation> = {
    readonly "name":  TVGcallback$_type$_parameter$_name<Annotation>
    readonly "type":  TVGcallback$_type$_parameter$_type<Annotation>
}
export type TVGcallback$_type$_parameter$<Annotation> = TVTGcallback$_type$_parameter$<Annotation>

export type TNGcallback$_type$_parameter$<Annotation> = TAnnotatedType<Annotation, TVGcallback$_type$_parameter$<Annotation>>
export type TVTGcallback$_type$_parameter<Annotation> = TNGcallback$_type$_parameter$<Annotation>
export type TVGcallback$_type$_parameter<Annotation> = TVTGcallback$_type$_parameter<Annotation>

export type TNGcallback$_type$_void$<Annotation> = Annotation
export type TVTGcallback$_type$_void<Annotation> = TNGcallback$_type$_void$<Annotation>
export type TVGcallback$_type$_void<Annotation> = TVTGcallback$_type$_void<Annotation>
export type TVTGcallback$_type$<Annotation> = {
    readonly "parameter":  TVGcallback$_type$_parameter<Annotation>
    readonly "void":  TVGcallback$_type$_void<Annotation>
}
export type TVGcallback$_type$<Annotation> = TVTGcallback$_type$<Annotation>

export type TNGcallback$_type$<Annotation> = TAnnotatedType<Annotation, TVGcallback$_type$<Annotation>>
export type TVTGcallback$_type<Annotation> = TNGcallback$_type$<Annotation>
export type TVGcallback$_type<Annotation> = TVTGcallback$_type<Annotation>
export type TVTGcallback$<Annotation> = {
    readonly "name":  TVGcallback$_name<Annotation>
    readonly "type":  TVGcallback$_type<Annotation>
}
export type TVGcallback$<Annotation> = TVTGcallback$<Annotation>

export type TNGcallback$<Annotation> = TAnnotatedType<Annotation, TVGcallback$<Annotation>>
export type TVTGcallback<Annotation> = TNGcallback$<Annotation>
export type TGcallback<Annotation> =  TVTGcallback<Annotation>

export type TNGidentifier$<Annotation> = TAnnotatedString<Annotation>
export type TVTGidentifier<Annotation> = TNGidentifier$<Annotation>
export type TGidentifier<Annotation> =  TVTGidentifier<Annotation>
export type TVTGinterface_function$_dataParameter$_name<Annotation> = TGidentifier<Annotation>
export type TVGinterface_function$_dataParameter$_name<Annotation> = TVTGinterface_function$_dataParameter$_name<Annotation>
export type TVTGinterface_function$_dataParameter$_type<Annotation> = TGtype<Annotation>
export type TVGinterface_function$_dataParameter$_type<Annotation> = TVTGinterface_function$_dataParameter$_type<Annotation>
export type TVTGinterface_function$_dataParameter$<Annotation> = {
    readonly "name":  TVGinterface_function$_dataParameter$_name<Annotation>
    readonly "type":  TVGinterface_function$_dataParameter$_type<Annotation>
}
export type TVGinterface_function$_dataParameter$<Annotation> = TVTGinterface_function$_dataParameter$<Annotation>

export type TNGinterface_function$_dataParameter$<Annotation> = TAnnotatedType<Annotation, TVGinterface_function$_dataParameter$<Annotation>>
export type TVTGinterface_function$_dataParameter<Annotation> = TNGinterface_function$_dataParameter$<Annotation>
export type TVGinterface_function$_dataParameter<Annotation> = TVTGinterface_function$_dataParameter<Annotation>
export type TVTGinterface_function$_callbackParameter<Annotation> = TGcallback<Annotation>
export type TVGinterface_function$_callbackParameter<Annotation> = pa.optional<TVTGinterface_function$_callbackParameter<Annotation>>

export type TNGinterface_function$_void$<Annotation> = Annotation
export type TVTGinterface_function$_void<Annotation> = TNGinterface_function$_void$<Annotation>
export type TVGinterface_function$_void<Annotation> = TVTGinterface_function$_void<Annotation>
export type TVTGinterface_function$<Annotation> = {
    readonly "dataParameter":  TVGinterface_function$_dataParameter<Annotation>
    readonly "callbackParameter":  TVGinterface_function$_callbackParameter<Annotation>
    readonly "void":  TVGinterface_function$_void<Annotation>
}
export type TVGinterface_function$<Annotation> = TVTGinterface_function$<Annotation>

export type TNGinterface_function$<Annotation> = TAnnotatedType<Annotation, TVGinterface_function$<Annotation>>
export type TVTGinterface_function<Annotation> = TNGinterface_function$<Annotation>
export type TVGinterface_function<Annotation> = TVTGinterface_function<Annotation>

export type TNGinterface_typeLiteral$$_readonly$<Annotation> = Annotation
export type TVTGinterface_typeLiteral$$_readonly<Annotation> = TNGinterface_typeLiteral$$_readonly$<Annotation>
export type TVGinterface_typeLiteral$$_readonly<Annotation> = TVTGinterface_typeLiteral$$_readonly<Annotation>

export type TNGinterface_typeLiteral$$_name$<Annotation> = TAnnotatedString<Annotation>
export type TVTGinterface_typeLiteral$$_name<Annotation> = TNGinterface_typeLiteral$$_name$<Annotation>
export type TVGinterface_typeLiteral$$_name<Annotation> = TVTGinterface_typeLiteral$$_name<Annotation>

export type TNGinterface_typeLiteral$$_questionToken$<Annotation> = Annotation
export type TVTGinterface_typeLiteral$$_questionToken<Annotation> = TNGinterface_typeLiteral$$_questionToken$<Annotation>
export type TVGinterface_typeLiteral$$_questionToken<Annotation> = pa.optional<TVTGinterface_typeLiteral$$_questionToken<Annotation>>
export type TVTGinterface_typeLiteral$$_type<Annotation> = TGinterface<Annotation>
export type TVGinterface_typeLiteral$$_type<Annotation> = pa.optional<TVTGinterface_typeLiteral$$_type<Annotation>>
export type TVTGinterface_typeLiteral$$<Annotation> = {
    readonly "readonly":  TVGinterface_typeLiteral$$_readonly<Annotation>
    readonly "name":  TVGinterface_typeLiteral$$_name<Annotation>
    readonly "questionToken":  TVGinterface_typeLiteral$$_questionToken<Annotation>
    readonly "type":  TVGinterface_typeLiteral$$_type<Annotation>
}
export type TVGinterface_typeLiteral$$<Annotation> = TVTGinterface_typeLiteral$$<Annotation>

export type TNGinterface_typeLiteral$$<Annotation> = TAnnotatedType<Annotation, TVGinterface_typeLiteral$$<Annotation>>
export type TVTGinterface_typeLiteral$<Annotation> = TNGinterface_typeLiteral$$<Annotation>
export type TVGinterface_typeLiteral$<Annotation> = TVTGinterface_typeLiteral$<Annotation>[]

export type TNGinterface_typeLiteral$<Annotation> = TAnnotatedType<Annotation, TVGinterface_typeLiteral$<Annotation>>
export type TVTGinterface_typeLiteral<Annotation> = TNGinterface_typeLiteral$<Annotation>
export type TVGinterface_typeLiteral<Annotation> = TVTGinterface_typeLiteral<Annotation>
export type TVTGinterface_typeReference$_name<Annotation> = TGidentifier<Annotation>
export type TVGinterface_typeReference$_name<Annotation> = TVTGinterface_typeReference$_name<Annotation>
export type TVTGinterface_typeReference$_parameters<Annotation> = TGtype<Annotation>
export type TVGinterface_typeReference$_parameters<Annotation> = TVTGinterface_typeReference$_parameters<Annotation>[]
export type TVTGinterface_typeReference$<Annotation> = {
    readonly "name":  TVGinterface_typeReference$_name<Annotation>
    readonly "parameters":  TVGinterface_typeReference$_parameters<Annotation>
}
export type TVGinterface_typeReference$<Annotation> = TVTGinterface_typeReference$<Annotation>

export type TNGinterface_typeReference$<Annotation> = TAnnotatedType<Annotation, TVGinterface_typeReference$<Annotation>>
export type TVTGinterface_typeReference<Annotation> = TNGinterface_typeReference$<Annotation>
export type TVGinterface_typeReference<Annotation> = TVTGinterface_typeReference<Annotation>
export type TVTGinterface<Annotation> =
    | [ "function", TVGinterface_function<Annotation>]
    | [ "typeLiteral", TVGinterface_typeLiteral<Annotation>]
    | [ "typeReference", TVGinterface_typeReference<Annotation>]
export type TGinterface<Annotation> =  TVTGinterface<Annotation>
export type TVTGtype_array$<Annotation> = TGtype<Annotation>
export type TVGtype_array$<Annotation> = TVTGtype_array$<Annotation>

export type TNGtype_array$<Annotation> = TAnnotatedType<Annotation, TVGtype_array$<Annotation>>
export type TVTGtype_array<Annotation> = TNGtype_array$<Annotation>
export type TVGtype_array<Annotation> = TVTGtype_array<Annotation>

export type TNGtype_boolean$<Annotation> = Annotation
export type TVTGtype_boolean<Annotation> = TNGtype_boolean$<Annotation>
export type TVGtype_boolean<Annotation> = TVTGtype_boolean<Annotation>

export type TNGtype_string$<Annotation> = Annotation
export type TVTGtype_string<Annotation> = TNGtype_string$<Annotation>
export type TVGtype_string<Annotation> = TVTGtype_string<Annotation>

export type TNGtype_number$<Annotation> = Annotation
export type TVTGtype_number<Annotation> = TNGtype_number$<Annotation>
export type TVGtype_number<Annotation> = TVTGtype_number<Annotation>

export type TNGtype_literalType$$<Annotation> = Annotation
export type TVTGtype_literalType$<Annotation> = TNGtype_literalType$$<Annotation>
export type TVGtype_literalType$<Annotation> = TVTGtype_literalType$<Annotation>

export type TNGtype_literalType$<Annotation> = TAnnotatedType<Annotation, TVGtype_literalType$<Annotation>>
export type TVTGtype_literalType<Annotation> = TNGtype_literalType$<Annotation>
export type TVGtype_literalType<Annotation> = TVTGtype_literalType<Annotation>
export type TVTGtype_typeLiteral$_index$_key$_name<Annotation> = TGidentifier<Annotation>
export type TVGtype_typeLiteral$_index$_key$_name<Annotation> = TVTGtype_typeLiteral$_index$_key$_name<Annotation>

export type TNGtype_typeLiteral$_index$_key$_type$<Annotation> = Annotation
export type TVTGtype_typeLiteral$_index$_key$_type<Annotation> = TNGtype_typeLiteral$_index$_key$_type$<Annotation>
export type TVGtype_typeLiteral$_index$_key$_type<Annotation> = TVTGtype_typeLiteral$_index$_key$_type<Annotation>
export type TVTGtype_typeLiteral$_index$_key$<Annotation> = {
    readonly "name":  TVGtype_typeLiteral$_index$_key$_name<Annotation>
    readonly "type":  TVGtype_typeLiteral$_index$_key$_type<Annotation>
}
export type TVGtype_typeLiteral$_index$_key$<Annotation> = TVTGtype_typeLiteral$_index$_key$<Annotation>

export type TNGtype_typeLiteral$_index$_key$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeLiteral$_index$_key$<Annotation>>
export type TVTGtype_typeLiteral$_index$_key<Annotation> = TNGtype_typeLiteral$_index$_key$<Annotation>
export type TVGtype_typeLiteral$_index$_key<Annotation> = TVTGtype_typeLiteral$_index$_key<Annotation>
export type TVTGtype_typeLiteral$_index$_type<Annotation> = TGtype<Annotation>
export type TVGtype_typeLiteral$_index$_type<Annotation> = TVTGtype_typeLiteral$_index$_type<Annotation>
export type TVTGtype_typeLiteral$_index$<Annotation> = {
    readonly "key":  TVGtype_typeLiteral$_index$_key<Annotation>
    readonly "type":  TVGtype_typeLiteral$_index$_type<Annotation>
}
export type TVGtype_typeLiteral$_index$<Annotation> = TVTGtype_typeLiteral$_index$<Annotation>

export type TNGtype_typeLiteral$_index$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeLiteral$_index$<Annotation>>
export type TVTGtype_typeLiteral$_index<Annotation> = TNGtype_typeLiteral$_index$<Annotation>
export type TVGtype_typeLiteral$_index<Annotation> = TVTGtype_typeLiteral$_index<Annotation>

export type TNGtype_typeLiteral$_properties$_readonly$<Annotation> = Annotation
export type TVTGtype_typeLiteral$_properties$_readonly<Annotation> = TNGtype_typeLiteral$_properties$_readonly$<Annotation>
export type TVGtype_typeLiteral$_properties$_readonly<Annotation> = TVTGtype_typeLiteral$_properties$_readonly<Annotation>

export type TNGtype_typeLiteral$_properties$_name$<Annotation> = TAnnotatedString<Annotation>
export type TVTGtype_typeLiteral$_properties$_name<Annotation> = TNGtype_typeLiteral$_properties$_name$<Annotation>
export type TVGtype_typeLiteral$_properties$_name<Annotation> = TVTGtype_typeLiteral$_properties$_name<Annotation>

export type TNGtype_typeLiteral$_properties$_questionToken$<Annotation> = Annotation
export type TVTGtype_typeLiteral$_properties$_questionToken<Annotation> = TNGtype_typeLiteral$_properties$_questionToken$<Annotation>
export type TVGtype_typeLiteral$_properties$_questionToken<Annotation> = pa.optional<TVTGtype_typeLiteral$_properties$_questionToken<Annotation>>
export type TVTGtype_typeLiteral$_properties$_type<Annotation> = TGtype<Annotation>
export type TVGtype_typeLiteral$_properties$_type<Annotation> = TVTGtype_typeLiteral$_properties$_type<Annotation>
export type TVTGtype_typeLiteral$_properties$<Annotation> = {
    readonly "readonly":  TVGtype_typeLiteral$_properties$_readonly<Annotation>
    readonly "name":  TVGtype_typeLiteral$_properties$_name<Annotation>
    readonly "questionToken":  TVGtype_typeLiteral$_properties$_questionToken<Annotation>
    readonly "type":  TVGtype_typeLiteral$_properties$_type<Annotation>
}
export type TVGtype_typeLiteral$_properties$<Annotation> = TVTGtype_typeLiteral$_properties$<Annotation>

export type TNGtype_typeLiteral$_properties$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeLiteral$_properties$<Annotation>>
export type TVTGtype_typeLiteral$_properties<Annotation> = TNGtype_typeLiteral$_properties$<Annotation>
export type TVGtype_typeLiteral$_properties<Annotation> = TVTGtype_typeLiteral$_properties<Annotation>[]
export type TVTGtype_typeLiteral$<Annotation> =
    | [ "index", TVGtype_typeLiteral$_index<Annotation>]
    | [ "properties", TVGtype_typeLiteral$_properties<Annotation>]
export type TVGtype_typeLiteral$<Annotation> = pa.optional<TVTGtype_typeLiteral$<Annotation>>

export type TNGtype_typeLiteral$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeLiteral$<Annotation>>
export type TVTGtype_typeLiteral<Annotation> = TNGtype_typeLiteral$<Annotation>
export type TVGtype_typeLiteral<Annotation> = TVTGtype_typeLiteral<Annotation>
export type TVTGtype_typeReference$_referencedType_identifier<Annotation> = TGidentifier<Annotation>
export type TVGtype_typeReference$_referencedType_identifier<Annotation> = TVTGtype_typeReference$_referencedType_identifier<Annotation>
export type TVTGtype_typeReference$_referencedType_qualifiedName$_context<Annotation> = TGidentifier<Annotation>
export type TVGtype_typeReference$_referencedType_qualifiedName$_context<Annotation> = TVTGtype_typeReference$_referencedType_qualifiedName$_context<Annotation>
export type TVTGtype_typeReference$_referencedType_qualifiedName$_type<Annotation> = TGidentifier<Annotation>
export type TVGtype_typeReference$_referencedType_qualifiedName$_type<Annotation> = TVTGtype_typeReference$_referencedType_qualifiedName$_type<Annotation>
export type TVTGtype_typeReference$_referencedType_qualifiedName$<Annotation> = {
    readonly "context":  TVGtype_typeReference$_referencedType_qualifiedName$_context<Annotation>
    readonly "type":  TVGtype_typeReference$_referencedType_qualifiedName$_type<Annotation>
}
export type TVGtype_typeReference$_referencedType_qualifiedName$<Annotation> = TVTGtype_typeReference$_referencedType_qualifiedName$<Annotation>

export type TNGtype_typeReference$_referencedType_qualifiedName$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeReference$_referencedType_qualifiedName$<Annotation>>
export type TVTGtype_typeReference$_referencedType_qualifiedName<Annotation> = TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>
export type TVGtype_typeReference$_referencedType_qualifiedName<Annotation> = TVTGtype_typeReference$_referencedType_qualifiedName<Annotation>
export type TVTGtype_typeReference$_referencedType<Annotation> =
    | [ "identifier", TVGtype_typeReference$_referencedType_identifier<Annotation>]
    | [ "qualifiedName", TVGtype_typeReference$_referencedType_qualifiedName<Annotation>]
export type TVGtype_typeReference$_referencedType<Annotation> = TVTGtype_typeReference$_referencedType<Annotation>
export type TVTGtype_typeReference$_typeArguments<Annotation> = TGtype<Annotation>
export type TVGtype_typeReference$_typeArguments<Annotation> = TVTGtype_typeReference$_typeArguments<Annotation>[]
export type TVTGtype_typeReference$<Annotation> = {
    readonly "referencedType":  TVGtype_typeReference$_referencedType<Annotation>
    readonly "typeArguments":  TVGtype_typeReference$_typeArguments<Annotation>
}
export type TVGtype_typeReference$<Annotation> = TVTGtype_typeReference$<Annotation>

export type TNGtype_typeReference$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeReference$<Annotation>>
export type TVTGtype_typeReference<Annotation> = TNGtype_typeReference$<Annotation>
export type TVGtype_typeReference<Annotation> = TVTGtype_typeReference<Annotation>

export type TNGtype_union$$_state$$<Annotation> = TAnnotatedString<Annotation>
export type TVTGtype_union$$_state$<Annotation> = TNGtype_union$$_state$$<Annotation>
export type TVGtype_union$$_state$<Annotation> = TVTGtype_union$$_state$<Annotation>

export type TNGtype_union$$_state$<Annotation> = TAnnotatedType<Annotation, TVGtype_union$$_state$<Annotation>>
export type TVTGtype_union$$_state<Annotation> = TNGtype_union$$_state$<Annotation>
export type TVGtype_union$$_state<Annotation> = TVTGtype_union$$_state<Annotation>
export type TVTGtype_union$$_data<Annotation> = TGtype<Annotation>
export type TVGtype_union$$_data<Annotation> = TVTGtype_union$$_data<Annotation>
export type TVTGtype_union$$<Annotation> = {
    readonly "state":  TVGtype_union$$_state<Annotation>
    readonly "data":  TVGtype_union$$_data<Annotation>
}
export type TVGtype_union$$<Annotation> = TVTGtype_union$$<Annotation>

export type TNGtype_union$$<Annotation> = TAnnotatedType<Annotation, TVGtype_union$$<Annotation>>
export type TVTGtype_union$<Annotation> = TNGtype_union$$<Annotation>
export type TVGtype_union$<Annotation> = TVTGtype_union$<Annotation>[]

export type TNGtype_union$<Annotation> = TAnnotatedType<Annotation, TVGtype_union$<Annotation>>
export type TVTGtype_union<Annotation> = TNGtype_union$<Annotation>
export type TVGtype_union<Annotation> = TVTGtype_union<Annotation>
export type TVTGtype<Annotation> =
    | [ "array", TVGtype_array<Annotation>]
    | [ "boolean", TVGtype_boolean<Annotation>]
    | [ "string", TVGtype_string<Annotation>]
    | [ "number", TVGtype_number<Annotation>]
    | [ "literalType", TVGtype_literalType<Annotation>]
    | [ "typeLiteral", TVGtype_typeLiteral<Annotation>]
    | [ "typeReference", TVGtype_typeReference<Annotation>]
    | [ "union", TVGtype_union<Annotation>]
export type TGtype<Annotation> =  TVTGtype<Annotation>
export type TVTroot_imports$_clause$_namespace$<Annotation> = TGidentifier<Annotation>
export type TVroot_imports$_clause$_namespace$<Annotation> = TVTroot_imports$_clause$_namespace$<Annotation>

export type TNroot_imports$_clause$_namespace$<Annotation> = TAnnotatedType<Annotation, TVroot_imports$_clause$_namespace$<Annotation>>
export type TVTroot_imports$_clause$_namespace<Annotation> = TNroot_imports$_clause$_namespace$<Annotation>
export type TVroot_imports$_clause$_namespace<Annotation> = TVTroot_imports$_clause$_namespace<Annotation>
export type TVTroot_imports$_clause$_named$$_name<Annotation> = TGidentifier<Annotation>
export type TVroot_imports$_clause$_named$$_name<Annotation> = TVTroot_imports$_clause$_named$$_name<Annotation>
export type TVTroot_imports$_clause$_named$$_as<Annotation> = TGidentifier<Annotation>
export type TVroot_imports$_clause$_named$$_as<Annotation> = pa.optional<TVTroot_imports$_clause$_named$$_as<Annotation>>
export type TVTroot_imports$_clause$_named$$<Annotation> = {
    readonly "name":  TVroot_imports$_clause$_named$$_name<Annotation>
    readonly "as":  TVroot_imports$_clause$_named$$_as<Annotation>
}
export type TVroot_imports$_clause$_named$$<Annotation> = TVTroot_imports$_clause$_named$$<Annotation>

export type TNroot_imports$_clause$_named$$<Annotation> = TAnnotatedType<Annotation, TVroot_imports$_clause$_named$$<Annotation>>
export type TVTroot_imports$_clause$_named$<Annotation> = TNroot_imports$_clause$_named$$<Annotation>
export type TVroot_imports$_clause$_named$<Annotation> = TVTroot_imports$_clause$_named$<Annotation>[]

export type TNroot_imports$_clause$_named$<Annotation> = TAnnotatedType<Annotation, TVroot_imports$_clause$_named$<Annotation>>
export type TVTroot_imports$_clause$_named<Annotation> = TNroot_imports$_clause$_named$<Annotation>
export type TVroot_imports$_clause$_named<Annotation> = TVTroot_imports$_clause$_named<Annotation>
export type TVTroot_imports$_clause$<Annotation> =
    | [ "namespace", TVroot_imports$_clause$_namespace<Annotation>]
    | [ "named", TVroot_imports$_clause$_named<Annotation>]
export type TVroot_imports$_clause$<Annotation> = TVTroot_imports$_clause$<Annotation>

export type TNroot_imports$_clause$<Annotation> = TAnnotatedType<Annotation, TVroot_imports$_clause$<Annotation>>
export type TVTroot_imports$_clause<Annotation> = TNroot_imports$_clause$<Annotation>
export type TVroot_imports$_clause<Annotation> = TVTroot_imports$_clause<Annotation>

export type TNroot_imports$_file$<Annotation> = TAnnotatedString<Annotation>
export type TVTroot_imports$_file<Annotation> = TNroot_imports$_file$<Annotation>
export type TVroot_imports$_file<Annotation> = TVTroot_imports$_file<Annotation>
export type TVTroot_imports$<Annotation> = {
    readonly "clause":  TVroot_imports$_clause<Annotation>
    readonly "file":  TVroot_imports$_file<Annotation>
}
export type TVroot_imports$<Annotation> = TVTroot_imports$<Annotation>

export type TNroot_imports$<Annotation> = TAnnotatedType<Annotation, TVroot_imports$<Annotation>>
export type TVTroot_imports<Annotation> = TNroot_imports$<Annotation>
export type TVroot_imports<Annotation> = TVTroot_imports<Annotation>[]

export type TNroot_interfaces$_export$<Annotation> = Annotation
export type TVTroot_interfaces$_export<Annotation> = TNroot_interfaces$_export$<Annotation>
export type TVroot_interfaces$_export<Annotation> = TVTroot_interfaces$_export<Annotation>
export type TVTroot_interfaces$_name<Annotation> = TGidentifier<Annotation>
export type TVroot_interfaces$_name<Annotation> = TVTroot_interfaces$_name<Annotation>
export type TVTroot_interfaces$_typeParameters$<Annotation> = TGidentifier<Annotation>
export type TVroot_interfaces$_typeParameters$<Annotation> = TVTroot_interfaces$_typeParameters$<Annotation>

export type TNroot_interfaces$_typeParameters$<Annotation> = TAnnotatedType<Annotation, TVroot_interfaces$_typeParameters$<Annotation>>
export type TVTroot_interfaces$_typeParameters<Annotation> = TNroot_interfaces$_typeParameters$<Annotation>
export type TVroot_interfaces$_typeParameters<Annotation> = TVTroot_interfaces$_typeParameters<Annotation>[]
export type TVTroot_interfaces$_definition<Annotation> = TGinterface<Annotation>
export type TVroot_interfaces$_definition<Annotation> = TVTroot_interfaces$_definition<Annotation>
export type TVTroot_interfaces$<Annotation> = {
    readonly "export":  TVroot_interfaces$_export<Annotation>
    readonly "name":  TVroot_interfaces$_name<Annotation>
    readonly "typeParameters":  TVroot_interfaces$_typeParameters<Annotation>
    readonly "definition":  TVroot_interfaces$_definition<Annotation>
}
export type TVroot_interfaces$<Annotation> = TVTroot_interfaces$<Annotation>

export type TNroot_interfaces$<Annotation> = TAnnotatedType<Annotation, TVroot_interfaces$<Annotation>>
export type TVTroot_interfaces<Annotation> = TNroot_interfaces$<Annotation>
export type TVroot_interfaces<Annotation> = TVTroot_interfaces<Annotation>[]

export type TNroot_endOfFile$<Annotation> = Annotation
export type TVTroot_endOfFile<Annotation> = TNroot_endOfFile$<Annotation>
export type TVroot_endOfFile<Annotation> = TVTroot_endOfFile<Annotation>
export type TVTroot<Annotation> = {
    readonly "imports":  TVroot_imports<Annotation>
    readonly "interfaces":  TVroot_interfaces<Annotation>
    readonly "endOfFile":  TVroot_endOfFile<Annotation>
}
export type TVroot<Annotation> = TVTroot<Annotation>

export type TNroot<Annotation> = TAnnotatedType<Annotation, TVroot<Annotation>>
export type TRoot<Annotation> = TNroot<Annotation>