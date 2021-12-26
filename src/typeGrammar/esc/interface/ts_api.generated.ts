import * as pr from "pareto-runtime"
export type XGtype_array<Annotation> = TArrayType<Annotation>
export type SGtype_array<Annotation> = XGtype_array<Annotation>
export type XGtype_boolean<Annotation> = TBooleanKeyword<Annotation>
export type SGtype_boolean<Annotation> = XGtype_boolean<Annotation>
export type XGtype_string<Annotation> = TStringKeyword<Annotation>
export type SGtype_string<Annotation> = XGtype_string<Annotation>
export type XGtype_literal<Annotation> = TLiteralType<Annotation>
export type SGtype_literal<Annotation> = XGtype_literal<Annotation>
export type XGtype_tuple<Annotation> = TTupleType<Annotation>
export type SGtype_tuple<Annotation> = XGtype_tuple<Annotation>
export type XGtype_typeLiteral<Annotation> = TTypeLiteral<Annotation>
export type SGtype_typeLiteral<Annotation> = XGtype_typeLiteral<Annotation>
export type XGtype_typeReference<Annotation> = TTypeReference<Annotation>
export type SGtype_typeReference<Annotation> = XGtype_typeReference<Annotation>
export type XGtype_union<Annotation> = TUnionType<Annotation>
export type SGtype_union<Annotation> = XGtype_union<Annotation>
export type XGtype<Annotation> =
    | [ "array", SGtype_array<Annotation>]
    | [ "boolean", SGtype_boolean<Annotation>]
    | [ "string", SGtype_string<Annotation>]
    | [ "literal", SGtype_literal<Annotation>]
    | [ "tuple", SGtype_tuple<Annotation>]
    | [ "typeLiteral", SGtype_typeLiteral<Annotation>]
    | [ "typeReference", SGtype_typeReference<Annotation>]
    | [ "union", SGtype_union<Annotation>]
export type Gtype<Annotation> =  XGtype<Annotation>
export type XTArrayType<Annotation> = Gtype<Annotation>
export type STArrayType<Annotation> = XTArrayType<Annotation>

export type TArrayType<Annotation> = {
    annotation: Annotation,
    content: STArrayType<Annotation>,
}

export type TBooleanKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TEndOfFileToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TExportKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TIdentifier<Annotation> = {
    annotation: Annotation,
    content: string,
}
export type XTIndexSignature_key<Annotation> = TParameter<Annotation>
export type STIndexSignature_key<Annotation> = XTIndexSignature_key<Annotation>
export type XTIndexSignature_type<Annotation> = Gtype<Annotation>
export type STIndexSignature_type<Annotation> = null | XTIndexSignature_type<Annotation>
export type XTIndexSignature<Annotation> = {
    readonly key:  STIndexSignature_key<Annotation>
    readonly type:  STIndexSignature_type<Annotation>
}
export type STIndexSignature<Annotation> = XTIndexSignature<Annotation>

export type TIndexSignature<Annotation> = {
    annotation: Annotation,
    content: STIndexSignature<Annotation>,
}
export type XTLiteralType_string<Annotation> = TStringLiteral<Annotation>
export type STLiteralType_string<Annotation> = XTLiteralType_string<Annotation>
export type XTLiteralType<Annotation> =
    | [ "string", STLiteralType_string<Annotation>]
export type STLiteralType<Annotation> = XTLiteralType<Annotation>

export type TLiteralType<Annotation> = {
    annotation: Annotation,
    content: STLiteralType<Annotation>,
}
export type XTParameter_name<Annotation> = TIdentifier<Annotation>
export type STParameter_name<Annotation> = XTParameter_name<Annotation>
export type XTParameter_type<Annotation> = Gtype<Annotation>
export type STParameter_type<Annotation> = null | XTParameter_type<Annotation>
export type XTParameter<Annotation> = {
    readonly name:  STParameter_name<Annotation>
    readonly type:  STParameter_type<Annotation>
}
export type STParameter<Annotation> = XTParameter<Annotation>

export type TParameter<Annotation> = {
    annotation: Annotation,
    content: STParameter<Annotation>,
}
export type XTPropertySignature_name<Annotation> = TStringLiteral<Annotation>
export type STPropertySignature_name<Annotation> = XTPropertySignature_name<Annotation>
export type XTPropertySignature_quesionToken<Annotation> = TQuestionToken<Annotation>
export type STPropertySignature_quesionToken<Annotation> = null | XTPropertySignature_quesionToken<Annotation>
export type XTPropertySignature_type<Annotation> = Gtype<Annotation>
export type STPropertySignature_type<Annotation> = null | XTPropertySignature_type<Annotation>
export type XTPropertySignature<Annotation> = {
    readonly name:  STPropertySignature_name<Annotation>
    readonly quesionToken:  STPropertySignature_quesionToken<Annotation>
    readonly type:  STPropertySignature_type<Annotation>
}
export type STPropertySignature<Annotation> = XTPropertySignature<Annotation>

export type TPropertySignature<Annotation> = {
    annotation: Annotation,
    content: STPropertySignature<Annotation>,
}

export type TQuestionToken<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTSourceFile_typeAliases<Annotation> = TTypeAliasDeclaration<Annotation>
export type STSourceFile_typeAliases<Annotation> = XTSourceFile_typeAliases<Annotation>[]
export type XTSourceFile_endOfFile<Annotation> = TEndOfFileToken<Annotation>
export type STSourceFile_endOfFile<Annotation> = XTSourceFile_endOfFile<Annotation>
export type XTSourceFile<Annotation> = {
    readonly typeAliases:  STSourceFile_typeAliases<Annotation>
    readonly endOfFile:  STSourceFile_endOfFile<Annotation>
}
export type STSourceFile<Annotation> = XTSourceFile<Annotation>

export type TSourceFile<Annotation> = {
    annotation: Annotation,
    content: STSourceFile<Annotation>,
}

export type TStringKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TStringLiteral<Annotation> = {
    annotation: Annotation,
    content: string,
}
export type XTTupleType<Annotation> = Gtype<Annotation>
export type STTupleType<Annotation> = XTTupleType<Annotation>[]

export type TTupleType<Annotation> = {
    annotation: Annotation,
    content: STTupleType<Annotation>,
}
export type XTTypeAliasDeclaration_export<Annotation> = TExportKeyword<Annotation>
export type STTypeAliasDeclaration_export<Annotation> = XTTypeAliasDeclaration_export<Annotation>
export type XTTypeAliasDeclaration_name<Annotation> = TIdentifier<Annotation>
export type STTypeAliasDeclaration_name<Annotation> = XTTypeAliasDeclaration_name<Annotation>
export type XTTypeAliasDeclaration_typeParameters<Annotation> = TTypeParameter<Annotation>
export type STTypeAliasDeclaration_typeParameters<Annotation> = XTTypeAliasDeclaration_typeParameters<Annotation>[]
export type XTTypeAliasDeclaration_type<Annotation> = Gtype<Annotation>
export type STTypeAliasDeclaration_type<Annotation> = XTTypeAliasDeclaration_type<Annotation>
export type XTTypeAliasDeclaration<Annotation> = {
    readonly export:  STTypeAliasDeclaration_export<Annotation>
    readonly name:  STTypeAliasDeclaration_name<Annotation>
    readonly typeParameters:  STTypeAliasDeclaration_typeParameters<Annotation>
    readonly type:  STTypeAliasDeclaration_type<Annotation>
}
export type STTypeAliasDeclaration<Annotation> = XTTypeAliasDeclaration<Annotation>

export type TTypeAliasDeclaration<Annotation> = {
    annotation: Annotation,
    content: STTypeAliasDeclaration<Annotation>,
}
export type XTTypeLiteral_index<Annotation> = TIndexSignature<Annotation>
export type STTypeLiteral_index<Annotation> = XTTypeLiteral_index<Annotation>
export type XTTypeLiteral_property<Annotation> = TPropertySignature<Annotation>
export type STTypeLiteral_property<Annotation> = XTTypeLiteral_property<Annotation>
export type XTTypeLiteral<Annotation> =
    | [ "index", STTypeLiteral_index<Annotation>]
    | [ "property", STTypeLiteral_property<Annotation>]
export type STTypeLiteral<Annotation> = XTTypeLiteral<Annotation>[]

export type TTypeLiteral<Annotation> = {
    annotation: Annotation,
    content: STTypeLiteral<Annotation>,
}
export type XTTypeParameter<Annotation> = TIdentifier<Annotation>
export type STTypeParameter<Annotation> = XTTypeParameter<Annotation>

export type TTypeParameter<Annotation> = {
    annotation: Annotation,
    content: STTypeParameter<Annotation>,
}
export type XTTypeReference_referencedType_identifier<Annotation> = TIdentifier<Annotation>
export type STTypeReference_referencedType_identifier<Annotation> = XTTypeReference_referencedType_identifier<Annotation>
export type XTTypeReference_referencedType<Annotation> =
    | [ "identifier", STTypeReference_referencedType_identifier<Annotation>]
export type STTypeReference_referencedType<Annotation> = XTTypeReference_referencedType<Annotation>
export type XTTypeReference_parameters<Annotation> = Gtype<Annotation>
export type STTypeReference_parameters<Annotation> = XTTypeReference_parameters<Annotation>[]
export type XTTypeReference<Annotation> = {
    readonly referencedType:  STTypeReference_referencedType<Annotation>
    readonly parameters:  STTypeReference_parameters<Annotation>
}
export type STTypeReference<Annotation> = XTTypeReference<Annotation>

export type TTypeReference<Annotation> = {
    annotation: Annotation,
    content: STTypeReference<Annotation>,
}
export type XTUnionType<Annotation> = Gtype<Annotation>
export type STUnionType<Annotation> = XTUnionType<Annotation>[]

export type TUnionType<Annotation> = {
    annotation: Annotation,
    content: STUnionType<Annotation>,
}
export type Root<Annotation> = TSourceFile<Annotation>