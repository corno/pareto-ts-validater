import * as pr from "pareto-runtime"
import * as p from "./untypedAPI"

export class UnrecognizedNodeError extends Error {
    constructor(message: string) { super(message); Object.setPrototypeOf(this, UnrecognizedNodeError.prototype); }
}

export type TInterfaceDeclaration<Annotation> = number

export type TEndOfFileToken<Annotation> = number

export type TExportDeclaration<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["StringLiteral", TStringLiteral<Annotation>]
    >
}

export type TImportDeclaration<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["StringLiteral", TStringLiteral<Annotation>]
    >
}

export type TSourceFile<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["InterfaceDeclaration", TInterfaceDeclaration<Annotation>]
        | ["FunctionDeclaration", TFunctionDeclaration<Annotation>]
        | ["VariableStatement", TVariableStatement<Annotation>]
        | ["EndOfFileToken", TEndOfFileToken<Annotation>]
        | ["ExportDeclaration", TExportDeclaration<Annotation>]
        | ["ImportDeclaration", TImportDeclaration<Annotation>]
        | ["TypeAliasDeclaration", TTypeAliasDeclaration<Annotation>]
        | ["ExpressionStatement", TExpressionStatement<Annotation>]
    >
}

export type TIdentifier<Annotation> = number

export type TTypeParameter<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
    >
}

export type TMethodSignature<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["Parameter", TParameter<Annotation>]
        | ["VoidKeyword", TVoidKeyword<Annotation>]
        | ["TypeParameter", TTypeParameter<Annotation>]
        | ["ArrayType", TArrayType<Annotation>]
        | ["BooleanKeyword", TBooleanKeyword<Annotation>]
        | ["StringKeyword", TStringKeyword<Annotation>]
        | ["UnionType", TUnionType<Annotation>]
        | ["NumberKeyword", TNumberKeyword<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
    >
}

export type TNeverKeyword<Annotation> = number

export type TParameter<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
        | ["FunctionType", TFunctionType<Annotation>]
        | ["NumberKeyword", TNumberKeyword<Annotation>]
        | ["StringKeyword", TStringKeyword<Annotation>]
        | ["ArrayType", TArrayType<Annotation>]
        | ["AnyKeyword", TAnyKeyword<Annotation>]
        | ["QuestionToken", TQuestionToken<Annotation>]
        | ["NeverKeyword", TNeverKeyword<Annotation>]
        | ["TypeLiteral", TTypeLiteral<Annotation>]
        | ["UnionType", TUnionType<Annotation>]
        | ["BooleanKeyword", TBooleanKeyword<Annotation>]
    >
}

export type TQualifiedName<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
    >
}

export type TTypeReference<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
        | ["QualifiedName", TQualifiedName<Annotation>]
        | ["StringKeyword", TStringKeyword<Annotation>]
        | ["LiteralType", TLiteralType<Annotation>]
        | ["TypeLiteral", TTypeLiteral<Annotation>]
    >
}

export type TVoidKeyword<Annotation> = number

export type TFunctionType<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Parameter", TParameter<Annotation>]
        | ["VoidKeyword", TVoidKeyword<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
        | ["AnyKeyword", TAnyKeyword<Annotation>]
        | ["UnionType", TUnionType<Annotation>]
        | ["BooleanKeyword", TBooleanKeyword<Annotation>]
        | ["ArrayType", TArrayType<Annotation>]
        | ["StringKeyword", TStringKeyword<Annotation>]
    >
}

export type TNumberKeyword<Annotation> = number

export type TArrayType<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["TypeReference", TTypeReference<Annotation>]
        | ["StringKeyword", TStringKeyword<Annotation>]
    >
}

export type TBooleanKeyword<Annotation> = number

export type TPropertySignature<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["NumberKeyword", TNumberKeyword<Annotation>]
        | ["ReadonlyKeyword", TReadonlyKeyword<Annotation>]
        | ["StringKeyword", TStringKeyword<Annotation>]
        | ["FunctionType", TFunctionType<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
        | ["QuestionToken", TQuestionToken<Annotation>]
        | ["BooleanKeyword", TBooleanKeyword<Annotation>]
        | ["ArrayType", TArrayType<Annotation>]
        | ["UnionType", TUnionType<Annotation>]
        | ["LiteralType", TLiteralType<Annotation>]
        | ["TypeLiteral", TTypeLiteral<Annotation>]
        | ["StringLiteral", TStringLiteral<Annotation>]
    >
}

export type TStringKeyword<Annotation> = number

export type TUndefinedKeyword<Annotation> = number

export type TParenthesizedType<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["FunctionType", TFunctionType<Annotation>]
    >
}

export type TUnionType<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["UndefinedKeyword", TUndefinedKeyword<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
        | ["TupleType", TTupleType<Annotation>]
        | ["LiteralType", TLiteralType<Annotation>]
        | ["StringKeyword", TStringKeyword<Annotation>]
        | ["BooleanKeyword", TBooleanKeyword<Annotation>]
        | ["ArrayType", TArrayType<Annotation>]
        | ["NumberKeyword", TNumberKeyword<Annotation>]
        | ["ParenthesizedType", TParenthesizedType<Annotation>]
    >
}

export type TReadonlyKeyword<Annotation> = number

export type TFunctionDeclaration<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["DeclareKeyword", TDeclareKeyword<Annotation>]
        | ["Identifier", TIdentifier<Annotation>]
        | ["Parameter", TParameter<Annotation>]
        | ["BooleanKeyword", TBooleanKeyword<Annotation>]
        | ["TypeParameter", TTypeParameter<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
        | ["Block", TBlock<Annotation>]
        | ["ExportKeyword", TExportKeyword<Annotation>]
        | ["VoidKeyword", TVoidKeyword<Annotation>]
        | ["UnionType", TUnionType<Annotation>]
        | ["StringKeyword", TStringKeyword<Annotation>]
        | ["ArrayType", TArrayType<Annotation>]
    >
}

export type TDeclareKeyword<Annotation> = number

export type TAnyKeyword<Annotation> = number

export type TQuestionToken<Annotation> = number

export type TVariableStatement<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["DeclareKeyword", TDeclareKeyword<Annotation>]
        | ["VariableDeclarationList", TVariableDeclarationList<Annotation>]
        | ["ExportKeyword", TExportKeyword<Annotation>]
    >
}

export type TVariableDeclarationList<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["VariableDeclaration", TVariableDeclaration<Annotation>]
    >
}

export type TVariableDeclaration<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
        | ["NumericLiteral", TNumericLiteral<Annotation>]
        | ["FalseKeyword", TFalseKeyword<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["StringLiteral", TStringLiteral<Annotation>]
        | ["ArrayType", TArrayType<Annotation>]
        | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
        | ["ArrowFunction", TArrowFunction<Annotation>]
        | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
        | ["PrefixUnaryExpression", TPrefixUnaryExpression<Annotation>]
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["ConditionalExpression", TConditionalExpression<Annotation>]
        | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
        | ["ParenthesizedExpression", TParenthesizedExpression<Annotation>]
        | ["NumberKeyword", TNumberKeyword<Annotation>]
        | ["UnionType", TUnionType<Annotation>]
        | ["NullKeyword", TNullKeyword<Annotation>]
        | ["TypeLiteral", TTypeLiteral<Annotation>]
    >
}

export type TStringLiteral<Annotation> = number

export type TNewExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["StringLiteral", TStringLiteral<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["TemplateExpression", TTemplateExpression<Annotation>]
        | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
    >
}

export type TThrowStatement<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["NewExpression", TNewExpression<Annotation>]
    >
}

export type TCaseClause<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["StringLiteral", TStringLiteral<Annotation>]
        | ["ExpressionStatement", TExpressionStatement<Annotation>]
        | ["BreakStatement", TBreakStatement<Annotation>]
        | ["Block", TBlock<Annotation>]
        | ["ReturnStatement", TReturnStatement<Annotation>]
        | ["VariableStatement", TVariableStatement<Annotation>]
        | ["IfStatement", TIfStatement<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    >
}

export type TDefaultClause<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["ExpressionStatement", TExpressionStatement<Annotation>]
        | ["ReturnStatement", TReturnStatement<Annotation>]
        | ["Block", TBlock<Annotation>]
    >
}

export type TCaseBlock<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["CaseClause", TCaseClause<Annotation>]
        | ["DefaultClause", TDefaultClause<Annotation>]
    >
}

export type TSwitchStatement<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
        | ["CaseBlock", TCaseBlock<Annotation>]
        | ["Identifier", TIdentifier<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    >
}

export type TCatchClause<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["VariableDeclaration", TVariableDeclaration<Annotation>]
        | ["Block", TBlock<Annotation>]
    >
}

export type TTryStatement<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Block", TBlock<Annotation>]
        | ["CatchClause", TCatchClause<Annotation>]
    >
}

export type TForStatement<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["VariableDeclarationList", TVariableDeclarationList<Annotation>]
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["Block", TBlock<Annotation>]
    >
}

export type TLabeledStatement<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["WhileStatement", TWhileStatement<Annotation>]
    >
}

export type TBlock<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["ThrowStatement", TThrowStatement<Annotation>]
        | ["ReturnStatement", TReturnStatement<Annotation>]
        | ["VariableStatement", TVariableStatement<Annotation>]
        | ["FunctionDeclaration", TFunctionDeclaration<Annotation>]
        | ["IfStatement", TIfStatement<Annotation>]
        | ["ExpressionStatement", TExpressionStatement<Annotation>]
        | ["SwitchStatement", TSwitchStatement<Annotation>]
        | ["TryStatement", TTryStatement<Annotation>]
        | ["BreakStatement", TBreakStatement<Annotation>]
        | ["TypeAliasDeclaration", TTypeAliasDeclaration<Annotation>]
        | ["ForStatement", TForStatement<Annotation>]
        | ["WhileStatement", TWhileStatement<Annotation>]
        | ["LabeledStatement", TLabeledStatement<Annotation>]
    >
}

export type TReturnStatement<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["CallExpression", TCallExpression<Annotation>]
        | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
        | ["TemplateExpression", TTemplateExpression<Annotation>]
        | ["Identifier", TIdentifier<Annotation>]
        | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
        | ["NullKeyword", TNullKeyword<Annotation>]
        | ["ArrowFunction", TArrowFunction<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["PrefixUnaryExpression", TPrefixUnaryExpression<Annotation>]
        | ["ConditionalExpression", TConditionalExpression<Annotation>]
        | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
        | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
        | ["StringLiteral", TStringLiteral<Annotation>]
    >
}

export type TCallExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["ArrowFunction", TArrowFunction<Annotation>]
        | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
        | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
        | ["NullKeyword", TNullKeyword<Annotation>]
        | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
        | ["StringLiteral", TStringLiteral<Annotation>]
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
        | ["TemplateExpression", TTemplateExpression<Annotation>]
        | ["ConditionalExpression", TConditionalExpression<Annotation>]
        | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
        | ["ParenthesizedExpression", TParenthesizedExpression<Annotation>]
        | ["NumericLiteral", TNumericLiteral<Annotation>]
        | ["TrueKeyword", TTrueKeyword<Annotation>]
        | ["FalseKeyword", TFalseKeyword<Annotation>]
    >
}

export type TExportKeyword<Annotation> = number

export type TNumericLiteral<Annotation> = number

export type TFalseKeyword<Annotation> = number

export type TIfStatement<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["Block", TBlock<Annotation>]
        | ["Identifier", TIdentifier<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["PrefixUnaryExpression", TPrefixUnaryExpression<Annotation>]
        | ["ReturnStatement", TReturnStatement<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["IfStatement", TIfStatement<Annotation>]
    >
}

export type TEqualsEqualsEqualsToken<Annotation> = number

export type TAmpersandAmpersandToken<Annotation> = number

export type TPlusEqualsToken<Annotation> = number

export type TMinusEqualsToken<Annotation> = number

export type TEqualsToken<Annotation> = number

export type TExclamationEqualsEqualsToken<Annotation> = number

export type TPlusToken<Annotation> = number

export type TMinusToken<Annotation> = number

export type TGreaterThanToken<Annotation> = number

export type TLessThanToken<Annotation> = number

export type TBarBarToken<Annotation> = number

export type TBinaryExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["Identifier", TIdentifier<Annotation>]
        | ["EqualsEqualsEqualsToken", TEqualsEqualsEqualsToken<Annotation>]
        | ["NumericLiteral", TNumericLiteral<Annotation>]
        | ["AmpersandAmpersandToken", TAmpersandAmpersandToken<Annotation>]
        | ["PlusEqualsToken", TPlusEqualsToken<Annotation>]
        | ["MinusEqualsToken", TMinusEqualsToken<Annotation>]
        | ["EqualsToken", TEqualsToken<Annotation>]
        | ["TrueKeyword", TTrueKeyword<Annotation>]
        | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
        | ["ExclamationEqualsEqualsToken", TExclamationEqualsEqualsToken<Annotation>]
        | ["StringLiteral", TStringLiteral<Annotation>]
        | ["PlusToken", TPlusToken<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["NullKeyword", TNullKeyword<Annotation>]
        | ["ParenthesizedExpression", TParenthesizedExpression<Annotation>]
        | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
        | ["MinusToken", TMinusToken<Annotation>]
        | ["GreaterThanToken", TGreaterThanToken<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["FalseKeyword", TFalseKeyword<Annotation>]
        | ["LessThanToken", TLessThanToken<Annotation>]
        | ["BarBarToken", TBarBarToken<Annotation>]
        | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
    >
}

export type TPostfixUnaryExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    >
}

export type TExpressionStatement<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["CallExpression", TCallExpression<Annotation>]
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["PostfixUnaryExpression", TPostfixUnaryExpression<Annotation>]
    >
}

export type TPropertyAssignment<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["ArrowFunction", TArrowFunction<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["StringLiteral", TStringLiteral<Annotation>]
        | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
        | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["NullKeyword", TNullKeyword<Annotation>]
        | ["PrefixUnaryExpression", TPrefixUnaryExpression<Annotation>]
        | ["FalseKeyword", TFalseKeyword<Annotation>]
        | ["TemplateExpression", TTemplateExpression<Annotation>]
        | ["TrueKeyword", TTrueKeyword<Annotation>]
        | ["ConditionalExpression", TConditionalExpression<Annotation>]
        | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
        | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["ParenthesizedExpression", TParenthesizedExpression<Annotation>]
        | ["NumericLiteral", TNumericLiteral<Annotation>]
    >
}

export type TObjectLiteralExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["PropertyAssignment", TPropertyAssignment<Annotation>]
    >
}

export type TEqualsGreaterThanToken<Annotation> = number

export type TArrowFunction<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Parameter", TParameter<Annotation>]
        | ["EqualsGreaterThanToken", TEqualsGreaterThanToken<Annotation>]
        | ["Block", TBlock<Annotation>]
        | ["Identifier", TIdentifier<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["StringKeyword", TStringKeyword<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
        | ["VoidKeyword", TVoidKeyword<Annotation>]
        | ["UnionType", TUnionType<Annotation>]
        | ["TemplateExpression", TTemplateExpression<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
    >
}

export type TPropertyAccessExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
    >
}

export type TElementAccessExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["NumericLiteral", TNumericLiteral<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["StringLiteral", TStringLiteral<Annotation>]
        | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
    >
}

export type TArrayLiteralExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["StringLiteral", TStringLiteral<Annotation>]
        | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
        | ["Identifier", TIdentifier<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["NullKeyword", TNullKeyword<Annotation>]
        | ["ConditionalExpression", TConditionalExpression<Annotation>]
        | ["TemplateExpression", TTemplateExpression<Annotation>]
        | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
        | ["NumericLiteral", TNumericLiteral<Annotation>]
    >
}

export type TBreakStatement<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
    >
}

export type TNullKeyword<Annotation> = number

export type TTrueKeyword<Annotation> = number

export type TTypeAliasDeclaration<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["ExportKeyword", TExportKeyword<Annotation>]
        | ["Identifier", TIdentifier<Annotation>]
        | ["TypeLiteral", TTypeLiteral<Annotation>]
        | ["TypeParameter", TTypeParameter<Annotation>]
        | ["TupleType", TTupleType<Annotation>]
        | ["UnionType", TUnionType<Annotation>]
        | ["ArrayType", TArrayType<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
        | ["FunctionType", TFunctionType<Annotation>]
    >
}

export type TIndexSignature<Annotation> = number

export type TTypeLiteral<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["PropertySignature", TPropertySignature<Annotation>]
        | ["MethodSignature", TMethodSignature<Annotation>]
        | ["IndexSignature", TIndexSignature<Annotation>]
    >
}

export type TTemplateHead<Annotation> = number

export type TTemplateMiddle<Annotation> = number

export type TTemplateTail<Annotation> = number

export type TTemplateSpan<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["TemplateMiddle", TTemplateMiddle<Annotation>]
        | ["TemplateTail", TTemplateTail<Annotation>]
        | ["Identifier", TIdentifier<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["ConditionalExpression", TConditionalExpression<Annotation>]
        | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
        | ["BinaryExpression", TBinaryExpression<Annotation>]
    >
}

export type TTemplateExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["TemplateHead", TTemplateHead<Annotation>]
        | ["TemplateSpan", TTemplateSpan<Annotation>]
    >
}

export type TPrefixUnaryExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["Identifier", TIdentifier<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["NumericLiteral", TNumericLiteral<Annotation>]
    >
}

export type TOptionalType<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["NumberKeyword", TNumberKeyword<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
    >
}

export type TTupleType<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["OptionalType", TOptionalType<Annotation>]
        | ["LiteralType", TLiteralType<Annotation>]
        | ["StringKeyword", TStringKeyword<Annotation>]
        | ["UnionType", TUnionType<Annotation>]
        | ["TypeReference", TTypeReference<Annotation>]
        | ["TypeLiteral", TTypeLiteral<Annotation>]
        | ["ArrayType", TArrayType<Annotation>]
    >
}

export type TLiteralType<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["StringLiteral", TStringLiteral<Annotation>]
        | ["NullKeyword", TNullKeyword<Annotation>]
    >
}

export type TColonToken<Annotation> = number

export type TConditionalExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["QuestionToken", TQuestionToken<Annotation>]
        | ["NullKeyword", TNullKeyword<Annotation>]
        | ["ColonToken", TColonToken<Annotation>]
        | ["PropertyAccessExpression", TPropertyAccessExpression<Annotation>]
        | ["StringLiteral", TStringLiteral<Annotation>]
        | ["TemplateExpression", TTemplateExpression<Annotation>]
        | ["CallExpression", TCallExpression<Annotation>]
        | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral<Annotation>]
        | ["ConditionalExpression", TConditionalExpression<Annotation>]
        | ["Identifier", TIdentifier<Annotation>]
        | ["ObjectLiteralExpression", TObjectLiteralExpression<Annotation>]
        | ["ArrayLiteralExpression", TArrayLiteralExpression<Annotation>]
        | ["ElementAccessExpression", TElementAccessExpression<Annotation>]
        | ["ArrowFunction", TArrowFunction<Annotation>]
        | ["NumericLiteral", TNumericLiteral<Annotation>]
    >
}

export type TParenthesizedExpression<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["ConditionalExpression", TConditionalExpression<Annotation>]
        | ["BinaryExpression", TBinaryExpression<Annotation>]
        | ["ArrowFunction", TArrowFunction<Annotation>]
    >
}

export type TNoSubstitutionTemplateLiteral<Annotation> = number

export type TWhileStatement<Annotation> = {
    annotation: Annotation
    children: Array<
        | ["TrueKeyword", TTrueKeyword<Annotation>]
        | ["Block", TBlock<Annotation>]
    >
}
export function root<Annotation>(
    $: p.Node<Annotation>,
    callback: ($: TSourceFile<Annotation>) => void,
    getLineInfo: ($: p.Node<Annotation>) => string,
    getAnnotation: ($: p.Node<Annotation>) => Annotation,
): void {
    function _SourceFile(
        $: p.Node<Annotation>,
        callback: ($: TSourceFile<Annotation>) => void,
    ) {
        const temp: TSourceFile<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "InterfaceDeclaration": {
                    const callback = ($: TInterfaceDeclaration<Annotation>) => {
                        temp.children.push(["InterfaceDeclaration", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "FunctionDeclaration": {
                    _FunctionDeclaration(
                        $,
                        ($) => { temp.children.push(["FunctionDeclaration", $]) },
                    )
                    break


                }
                case "VariableStatement": {
                    _VariableStatement(
                        $,
                        ($) => { temp.children.push(["VariableStatement", $]) },
                    )
                    break


                }
                case "EndOfFileToken": {
                    const callback = ($: TEndOfFileToken<Annotation>) => {
                        temp.children.push(["EndOfFileToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "ExportDeclaration": {
                    const callback = ($: TExportDeclaration<Annotation>) => {
                        temp.children.push(["ExportDeclaration", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TExportDeclaration<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "StringLiteral": {
                                    _StringLiteral(
                                        $,
                                        ($) => { temp.children.push(["StringLiteral", $]) },
                                    )
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'ExportDeclaration': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                case "ImportDeclaration": {
                    const callback = ($: TImportDeclaration<Annotation>) => {
                        temp.children.push(["ImportDeclaration", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TImportDeclaration<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "StringLiteral": {
                                    _StringLiteral(
                                        $,
                                        ($) => { temp.children.push(["StringLiteral", $]) },
                                    )
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'ImportDeclaration': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                case "TypeAliasDeclaration": {
                    _TypeAliasDeclaration(
                        $,
                        ($) => { temp.children.push(["TypeAliasDeclaration", $]) },
                    )
                    break


                }
                case "ExpressionStatement": {
                    _ExpressionStatement(
                        $,
                        ($) => { temp.children.push(["ExpressionStatement", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'SourceFile': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _Identifier(
        $: p.Node<Annotation>,
        callback: ($: TIdentifier<Annotation>) => void,
    ) {}
    function _TypeParameter(
        $: p.Node<Annotation>,
        callback: ($: TTypeParameter<Annotation>) => void,
    ) {
        const temp: TTypeParameter<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'TypeParameter': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _MethodSignature(
        $: p.Node<Annotation>,
        callback: ($: TMethodSignature<Annotation>) => void,
    ) {
        const temp: TMethodSignature<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "Parameter": {
                    _Parameter(
                        $,
                        ($) => { temp.children.push(["Parameter", $]) },
                    )
                    break


                }
                case "VoidKeyword": {
                    _VoidKeyword(
                        $,
                        ($) => { temp.children.push(["VoidKeyword", $]) },
                    )
                    break


                }
                case "TypeParameter": {
                    _TypeParameter(
                        $,
                        ($) => { temp.children.push(["TypeParameter", $]) },
                    )
                    break


                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.children.push(["ArrayType", $]) },
                    )
                    break


                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.children.push(["BooleanKeyword", $]) },
                    )
                    break


                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.children.push(["StringKeyword", $]) },
                    )
                    break


                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.children.push(["UnionType", $]) },
                    )
                    break


                }
                case "NumberKeyword": {
                    _NumberKeyword(
                        $,
                        ($) => { temp.children.push(["NumberKeyword", $]) },
                    )
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'MethodSignature': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _Parameter(
        $: p.Node<Annotation>,
        callback: ($: TParameter<Annotation>) => void,
    ) {
        const temp: TParameter<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "FunctionType": {
                    _FunctionType(
                        $,
                        ($) => { temp.children.push(["FunctionType", $]) },
                    )
                    break


                }
                case "NumberKeyword": {
                    _NumberKeyword(
                        $,
                        ($) => { temp.children.push(["NumberKeyword", $]) },
                    )
                    break


                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.children.push(["StringKeyword", $]) },
                    )
                    break


                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.children.push(["ArrayType", $]) },
                    )
                    break


                }
                case "AnyKeyword": {
                    _AnyKeyword(
                        $,
                        ($) => { temp.children.push(["AnyKeyword", $]) },
                    )
                    break


                }
                case "QuestionToken": {
                    _QuestionToken(
                        $,
                        ($) => { temp.children.push(["QuestionToken", $]) },
                    )
                    break


                }
                case "NeverKeyword": {
                    const callback = ($: TNeverKeyword<Annotation>) => {
                        temp.children.push(["NeverKeyword", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.children.push(["TypeLiteral", $]) },
                    )
                    break


                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.children.push(["UnionType", $]) },
                    )
                    break


                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.children.push(["BooleanKeyword", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'Parameter': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _TypeReference(
        $: p.Node<Annotation>,
        callback: ($: TTypeReference<Annotation>) => void,
    ) {
        const temp: TTypeReference<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "QualifiedName": {
                    const callback = ($: TQualifiedName<Annotation>) => {
                        temp.children.push(["QualifiedName", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TQualifiedName<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.children.push(["Identifier", $]) },
                                    )
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'QualifiedName': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.children.push(["StringKeyword", $]) },
                    )
                    break


                }
                case "LiteralType": {
                    _LiteralType(
                        $,
                        ($) => { temp.children.push(["LiteralType", $]) },
                    )
                    break


                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.children.push(["TypeLiteral", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'TypeReference': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _VoidKeyword(
        $: p.Node<Annotation>,
        callback: ($: TVoidKeyword<Annotation>) => void,
    ) {}
    function _FunctionType(
        $: p.Node<Annotation>,
        callback: ($: TFunctionType<Annotation>) => void,
    ) {
        const temp: TFunctionType<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Parameter": {
                    _Parameter(
                        $,
                        ($) => { temp.children.push(["Parameter", $]) },
                    )
                    break


                }
                case "VoidKeyword": {
                    _VoidKeyword(
                        $,
                        ($) => { temp.children.push(["VoidKeyword", $]) },
                    )
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "AnyKeyword": {
                    _AnyKeyword(
                        $,
                        ($) => { temp.children.push(["AnyKeyword", $]) },
                    )
                    break


                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.children.push(["UnionType", $]) },
                    )
                    break


                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.children.push(["BooleanKeyword", $]) },
                    )
                    break


                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.children.push(["ArrayType", $]) },
                    )
                    break


                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.children.push(["StringKeyword", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'FunctionType': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _NumberKeyword(
        $: p.Node<Annotation>,
        callback: ($: TNumberKeyword<Annotation>) => void,
    ) {}
    function _ArrayType(
        $: p.Node<Annotation>,
        callback: ($: TArrayType<Annotation>) => void,
    ) {
        const temp: TArrayType<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.children.push(["StringKeyword", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'ArrayType': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _BooleanKeyword(
        $: p.Node<Annotation>,
        callback: ($: TBooleanKeyword<Annotation>) => void,
    ) {}
    function _PropertySignature(
        $: p.Node<Annotation>,
        callback: ($: TPropertySignature<Annotation>) => void,
    ) {
        const temp: TPropertySignature<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "NumberKeyword": {
                    _NumberKeyword(
                        $,
                        ($) => { temp.children.push(["NumberKeyword", $]) },
                    )
                    break


                }
                case "ReadonlyKeyword": {
                    _ReadonlyKeyword(
                        $,
                        ($) => { temp.children.push(["ReadonlyKeyword", $]) },
                    )
                    break


                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.children.push(["StringKeyword", $]) },
                    )
                    break


                }
                case "FunctionType": {
                    _FunctionType(
                        $,
                        ($) => { temp.children.push(["FunctionType", $]) },
                    )
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "QuestionToken": {
                    _QuestionToken(
                        $,
                        ($) => { temp.children.push(["QuestionToken", $]) },
                    )
                    break


                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.children.push(["BooleanKeyword", $]) },
                    )
                    break


                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.children.push(["ArrayType", $]) },
                    )
                    break


                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.children.push(["UnionType", $]) },
                    )
                    break


                }
                case "LiteralType": {
                    _LiteralType(
                        $,
                        ($) => { temp.children.push(["LiteralType", $]) },
                    )
                    break


                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.children.push(["TypeLiteral", $]) },
                    )
                    break


                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.children.push(["StringLiteral", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'PropertySignature': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _StringKeyword(
        $: p.Node<Annotation>,
        callback: ($: TStringKeyword<Annotation>) => void,
    ) {}
    function _UnionType(
        $: p.Node<Annotation>,
        callback: ($: TUnionType<Annotation>) => void,
    ) {
        const temp: TUnionType<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "UndefinedKeyword": {
                    const callback = ($: TUndefinedKeyword<Annotation>) => {
                        temp.children.push(["UndefinedKeyword", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "TupleType": {
                    _TupleType(
                        $,
                        ($) => { temp.children.push(["TupleType", $]) },
                    )
                    break


                }
                case "LiteralType": {
                    _LiteralType(
                        $,
                        ($) => { temp.children.push(["LiteralType", $]) },
                    )
                    break


                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.children.push(["StringKeyword", $]) },
                    )
                    break


                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.children.push(["BooleanKeyword", $]) },
                    )
                    break


                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.children.push(["ArrayType", $]) },
                    )
                    break


                }
                case "NumberKeyword": {
                    _NumberKeyword(
                        $,
                        ($) => { temp.children.push(["NumberKeyword", $]) },
                    )
                    break


                }
                case "ParenthesizedType": {
                    const callback = ($: TParenthesizedType<Annotation>) => {
                        temp.children.push(["ParenthesizedType", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TParenthesizedType<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "FunctionType": {
                                    _FunctionType(
                                        $,
                                        ($) => { temp.children.push(["FunctionType", $]) },
                                    )
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'ParenthesizedType': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                default: console.error(`encountered unexpected node in 'UnionType': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _ReadonlyKeyword(
        $: p.Node<Annotation>,
        callback: ($: TReadonlyKeyword<Annotation>) => void,
    ) {}
    function _FunctionDeclaration(
        $: p.Node<Annotation>,
        callback: ($: TFunctionDeclaration<Annotation>) => void,
    ) {
        const temp: TFunctionDeclaration<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "DeclareKeyword": {
                    _DeclareKeyword(
                        $,
                        ($) => { temp.children.push(["DeclareKeyword", $]) },
                    )
                    break


                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "Parameter": {
                    _Parameter(
                        $,
                        ($) => { temp.children.push(["Parameter", $]) },
                    )
                    break


                }
                case "BooleanKeyword": {
                    _BooleanKeyword(
                        $,
                        ($) => { temp.children.push(["BooleanKeyword", $]) },
                    )
                    break


                }
                case "TypeParameter": {
                    _TypeParameter(
                        $,
                        ($) => { temp.children.push(["TypeParameter", $]) },
                    )
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "Block": {
                    _Block(
                        $,
                        ($) => { temp.children.push(["Block", $]) },
                    )
                    break


                }
                case "ExportKeyword": {
                    _ExportKeyword(
                        $,
                        ($) => { temp.children.push(["ExportKeyword", $]) },
                    )
                    break


                }
                case "VoidKeyword": {
                    _VoidKeyword(
                        $,
                        ($) => { temp.children.push(["VoidKeyword", $]) },
                    )
                    break


                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.children.push(["UnionType", $]) },
                    )
                    break


                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.children.push(["StringKeyword", $]) },
                    )
                    break


                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.children.push(["ArrayType", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'FunctionDeclaration': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _DeclareKeyword(
        $: p.Node<Annotation>,
        callback: ($: TDeclareKeyword<Annotation>) => void,
    ) {}
    function _AnyKeyword(
        $: p.Node<Annotation>,
        callback: ($: TAnyKeyword<Annotation>) => void,
    ) {}
    function _QuestionToken(
        $: p.Node<Annotation>,
        callback: ($: TQuestionToken<Annotation>) => void,
    ) {}
    function _VariableStatement(
        $: p.Node<Annotation>,
        callback: ($: TVariableStatement<Annotation>) => void,
    ) {
        const temp: TVariableStatement<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "DeclareKeyword": {
                    _DeclareKeyword(
                        $,
                        ($) => { temp.children.push(["DeclareKeyword", $]) },
                    )
                    break


                }
                case "VariableDeclarationList": {
                    _VariableDeclarationList(
                        $,
                        ($) => { temp.children.push(["VariableDeclarationList", $]) },
                    )
                    break


                }
                case "ExportKeyword": {
                    _ExportKeyword(
                        $,
                        ($) => { temp.children.push(["ExportKeyword", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'VariableStatement': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _VariableDeclarationList(
        $: p.Node<Annotation>,
        callback: ($: TVariableDeclarationList<Annotation>) => void,
    ) {
        const temp: TVariableDeclarationList<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "VariableDeclaration": {
                    _VariableDeclaration(
                        $,
                        ($) => { temp.children.push(["VariableDeclaration", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'VariableDeclarationList': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _VariableDeclaration(
        $: p.Node<Annotation>,
        callback: ($: TVariableDeclaration<Annotation>) => void,
    ) {
        const temp: TVariableDeclaration<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.children.push(["NumericLiteral", $]) },
                    )
                    break


                }
                case "FalseKeyword": {
                    _FalseKeyword(
                        $,
                        ($) => { temp.children.push(["FalseKeyword", $]) },
                    )
                    break


                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.children.push(["StringLiteral", $]) },
                    )
                    break


                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.children.push(["ArrayType", $]) },
                    )
                    break


                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ArrayLiteralExpression", $]) },
                    )
                    break


                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                    )
                    break


                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.children.push(["ElementAccessExpression", $]) },
                    )
                    break


                }
                case "ArrowFunction": {
                    _ArrowFunction(
                        $,
                        ($) => { temp.children.push(["ArrowFunction", $]) },
                    )
                    break


                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ObjectLiteralExpression", $]) },
                    )
                    break


                }
                case "PrefixUnaryExpression": {
                    _PrefixUnaryExpression(
                        $,
                        ($) => { temp.children.push(["PrefixUnaryExpression", $]) },
                    )
                    break


                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.children.push(["BinaryExpression", $]) },
                    )
                    break


                }
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.children.push(["ConditionalExpression", $]) },
                    )
                    break


                }
                case "NoSubstitutionTemplateLiteral": {
                    _NoSubstitutionTemplateLiteral(
                        $,
                        ($) => { temp.children.push(["NoSubstitutionTemplateLiteral", $]) },
                    )
                    break


                }
                case "ParenthesizedExpression": {
                    _ParenthesizedExpression(
                        $,
                        ($) => { temp.children.push(["ParenthesizedExpression", $]) },
                    )
                    break


                }
                case "NumberKeyword": {
                    _NumberKeyword(
                        $,
                        ($) => { temp.children.push(["NumberKeyword", $]) },
                    )
                    break


                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.children.push(["UnionType", $]) },
                    )
                    break


                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.children.push(["NullKeyword", $]) },
                    )
                    break


                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.children.push(["TypeLiteral", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'VariableDeclaration': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _StringLiteral(
        $: p.Node<Annotation>,
        callback: ($: TStringLiteral<Annotation>) => void,
    ) {}
    function _Block(
        $: p.Node<Annotation>,
        callback: ($: TBlock<Annotation>) => void,
    ) {
        const temp: TBlock<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "ThrowStatement": {
                    const callback = ($: TThrowStatement<Annotation>) => {
                        temp.children.push(["ThrowStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TThrowStatement<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "NewExpression": {
                                    const callback = ($: TNewExpression<Annotation>) => {
                                        temp.children.push(["NewExpression", $])
                                    }
                                    pr.cc(null, (_) => {
                                        const temp: TNewExpression<Annotation> = {
                                            annotation: getAnnotation($),
                                            children: []
                                        }
                                        $.children.forEach(($) => {
                                            switch ($.kindName) {
                                                case "Identifier": {
                                                    _Identifier(
                                                        $,
                                                        ($) => { temp.children.push(["Identifier", $]) },
                                                    )
                                                    break


                                                }
                                                case "StringLiteral": {
                                                    _StringLiteral(
                                                        $,
                                                        ($) => { temp.children.push(["StringLiteral", $]) },
                                                    )
                                                    break


                                                }
                                                case "CallExpression": {
                                                    _CallExpression(
                                                        $,
                                                        ($) => { temp.children.push(["CallExpression", $]) },
                                                    )
                                                    break


                                                }
                                                case "TemplateExpression": {
                                                    _TemplateExpression(
                                                        $,
                                                        ($) => { temp.children.push(["TemplateExpression", $]) },
                                                    )
                                                    break


                                                }
                                                case "NoSubstitutionTemplateLiteral": {
                                                    _NoSubstitutionTemplateLiteral(
                                                        $,
                                                        ($) => { temp.children.push(["NoSubstitutionTemplateLiteral", $]) },
                                                    )
                                                    break


                                                }
                                                default: console.error(`encountered unexpected node in 'NewExpression': '${$.kindName}' @ ${getLineInfo($)}`)
                                            }
                                        })
                                        callback(temp)
                                    })
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'ThrowStatement': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                case "ReturnStatement": {
                    _ReturnStatement(
                        $,
                        ($) => { temp.children.push(["ReturnStatement", $]) },
                    )
                    break


                }
                case "VariableStatement": {
                    _VariableStatement(
                        $,
                        ($) => { temp.children.push(["VariableStatement", $]) },
                    )
                    break


                }
                case "FunctionDeclaration": {
                    _FunctionDeclaration(
                        $,
                        ($) => { temp.children.push(["FunctionDeclaration", $]) },
                    )
                    break


                }
                case "IfStatement": {
                    _IfStatement(
                        $,
                        ($) => { temp.children.push(["IfStatement", $]) },
                    )
                    break


                }
                case "ExpressionStatement": {
                    _ExpressionStatement(
                        $,
                        ($) => { temp.children.push(["ExpressionStatement", $]) },
                    )
                    break


                }
                case "SwitchStatement": {
                    const callback = ($: TSwitchStatement<Annotation>) => {
                        temp.children.push(["SwitchStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TSwitchStatement<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "ElementAccessExpression": {
                                    _ElementAccessExpression(
                                        $,
                                        ($) => { temp.children.push(["ElementAccessExpression", $]) },
                                    )
                                    break


                                }
                                case "CaseBlock": {
                                    const callback = ($: TCaseBlock<Annotation>) => {
                                        temp.children.push(["CaseBlock", $])
                                    }
                                    pr.cc(null, (_) => {
                                        const temp: TCaseBlock<Annotation> = {
                                            annotation: getAnnotation($),
                                            children: []
                                        }
                                        $.children.forEach(($) => {
                                            switch ($.kindName) {
                                                case "CaseClause": {
                                                    const callback = ($: TCaseClause<Annotation>) => {
                                                        temp.children.push(["CaseClause", $])
                                                    }
                                                    pr.cc(null, (_) => {
                                                        const temp: TCaseClause<Annotation> = {
                                                            annotation: getAnnotation($),
                                                            children: []
                                                        }
                                                        $.children.forEach(($) => {
                                                            switch ($.kindName) {
                                                                case "StringLiteral": {
                                                                    _StringLiteral(
                                                                        $,
                                                                        ($) => { temp.children.push(["StringLiteral", $]) },
                                                                    )
                                                                    break


                                                                }
                                                                case "ExpressionStatement": {
                                                                    _ExpressionStatement(
                                                                        $,
                                                                        ($) => { temp.children.push(["ExpressionStatement", $]) },
                                                                    )
                                                                    break


                                                                }
                                                                case "BreakStatement": {
                                                                    _BreakStatement(
                                                                        $,
                                                                        ($) => { temp.children.push(["BreakStatement", $]) },
                                                                    )
                                                                    break


                                                                }
                                                                case "Block": {
                                                                    _Block(
                                                                        $,
                                                                        ($) => { temp.children.push(["Block", $]) },
                                                                    )
                                                                    break


                                                                }
                                                                case "ReturnStatement": {
                                                                    _ReturnStatement(
                                                                        $,
                                                                        ($) => { temp.children.push(["ReturnStatement", $]) },
                                                                    )
                                                                    break


                                                                }
                                                                case "VariableStatement": {
                                                                    _VariableStatement(
                                                                        $,
                                                                        ($) => { temp.children.push(["VariableStatement", $]) },
                                                                    )
                                                                    break


                                                                }
                                                                case "IfStatement": {
                                                                    _IfStatement(
                                                                        $,
                                                                        ($) => { temp.children.push(["IfStatement", $]) },
                                                                    )
                                                                    break


                                                                }
                                                                case "PropertyAccessExpression": {
                                                                    _PropertyAccessExpression(
                                                                        $,
                                                                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                                                                    )
                                                                    break


                                                                }
                                                                default: console.error(`encountered unexpected node in 'CaseClause': '${$.kindName}' @ ${getLineInfo($)}`)
                                                            }
                                                        })
                                                        callback(temp)
                                                    })
                                                    break


                                                }
                                                case "DefaultClause": {
                                                    const callback = ($: TDefaultClause<Annotation>) => {
                                                        temp.children.push(["DefaultClause", $])
                                                    }
                                                    pr.cc(null, (_) => {
                                                        const temp: TDefaultClause<Annotation> = {
                                                            annotation: getAnnotation($),
                                                            children: []
                                                        }
                                                        $.children.forEach(($) => {
                                                            switch ($.kindName) {
                                                                case "ExpressionStatement": {
                                                                    _ExpressionStatement(
                                                                        $,
                                                                        ($) => { temp.children.push(["ExpressionStatement", $]) },
                                                                    )
                                                                    break


                                                                }
                                                                case "ReturnStatement": {
                                                                    _ReturnStatement(
                                                                        $,
                                                                        ($) => { temp.children.push(["ReturnStatement", $]) },
                                                                    )
                                                                    break


                                                                }
                                                                case "Block": {
                                                                    _Block(
                                                                        $,
                                                                        ($) => { temp.children.push(["Block", $]) },
                                                                    )
                                                                    break


                                                                }
                                                                default: console.error(`encountered unexpected node in 'DefaultClause': '${$.kindName}' @ ${getLineInfo($)}`)
                                                            }
                                                        })
                                                        callback(temp)
                                                    })
                                                    break


                                                }
                                                default: console.error(`encountered unexpected node in 'CaseBlock': '${$.kindName}' @ ${getLineInfo($)}`)
                                            }
                                        })
                                        callback(temp)
                                    })
                                    break


                                }
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.children.push(["Identifier", $]) },
                                    )
                                    break


                                }
                                case "PropertyAccessExpression": {
                                    _PropertyAccessExpression(
                                        $,
                                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                                    )
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'SwitchStatement': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                case "TryStatement": {
                    const callback = ($: TTryStatement<Annotation>) => {
                        temp.children.push(["TryStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TTryStatement<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "Block": {
                                    _Block(
                                        $,
                                        ($) => { temp.children.push(["Block", $]) },
                                    )
                                    break


                                }
                                case "CatchClause": {
                                    const callback = ($: TCatchClause<Annotation>) => {
                                        temp.children.push(["CatchClause", $])
                                    }
                                    pr.cc(null, (_) => {
                                        const temp: TCatchClause<Annotation> = {
                                            annotation: getAnnotation($),
                                            children: []
                                        }
                                        $.children.forEach(($) => {
                                            switch ($.kindName) {
                                                case "VariableDeclaration": {
                                                    _VariableDeclaration(
                                                        $,
                                                        ($) => { temp.children.push(["VariableDeclaration", $]) },
                                                    )
                                                    break


                                                }
                                                case "Block": {
                                                    _Block(
                                                        $,
                                                        ($) => { temp.children.push(["Block", $]) },
                                                    )
                                                    break


                                                }
                                                default: console.error(`encountered unexpected node in 'CatchClause': '${$.kindName}' @ ${getLineInfo($)}`)
                                            }
                                        })
                                        callback(temp)
                                    })
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'TryStatement': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                case "BreakStatement": {
                    _BreakStatement(
                        $,
                        ($) => { temp.children.push(["BreakStatement", $]) },
                    )
                    break


                }
                case "TypeAliasDeclaration": {
                    _TypeAliasDeclaration(
                        $,
                        ($) => { temp.children.push(["TypeAliasDeclaration", $]) },
                    )
                    break


                }
                case "ForStatement": {
                    const callback = ($: TForStatement<Annotation>) => {
                        temp.children.push(["ForStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TForStatement<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "VariableDeclarationList": {
                                    _VariableDeclarationList(
                                        $,
                                        ($) => { temp.children.push(["VariableDeclarationList", $]) },
                                    )
                                    break


                                }
                                case "BinaryExpression": {
                                    _BinaryExpression(
                                        $,
                                        ($) => { temp.children.push(["BinaryExpression", $]) },
                                    )
                                    break


                                }
                                case "Block": {
                                    _Block(
                                        $,
                                        ($) => { temp.children.push(["Block", $]) },
                                    )
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'ForStatement': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                case "WhileStatement": {
                    _WhileStatement(
                        $,
                        ($) => { temp.children.push(["WhileStatement", $]) },
                    )
                    break


                }
                case "LabeledStatement": {
                    const callback = ($: TLabeledStatement<Annotation>) => {
                        temp.children.push(["LabeledStatement", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TLabeledStatement<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.children.push(["Identifier", $]) },
                                    )
                                    break


                                }
                                case "WhileStatement": {
                                    _WhileStatement(
                                        $,
                                        ($) => { temp.children.push(["WhileStatement", $]) },
                                    )
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'LabeledStatement': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                default: console.error(`encountered unexpected node in 'Block': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _ReturnStatement(
        $: p.Node<Annotation>,
        callback: ($: TReturnStatement<Annotation>) => void,
    ) {
        const temp: TReturnStatement<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ObjectLiteralExpression", $]) },
                    )
                    break


                }
                case "TemplateExpression": {
                    _TemplateExpression(
                        $,
                        ($) => { temp.children.push(["TemplateExpression", $]) },
                    )
                    break


                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ArrayLiteralExpression", $]) },
                    )
                    break


                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.children.push(["NullKeyword", $]) },
                    )
                    break


                }
                case "ArrowFunction": {
                    _ArrowFunction(
                        $,
                        ($) => { temp.children.push(["ArrowFunction", $]) },
                    )
                    break


                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                    )
                    break


                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.children.push(["BinaryExpression", $]) },
                    )
                    break


                }
                case "PrefixUnaryExpression": {
                    _PrefixUnaryExpression(
                        $,
                        ($) => { temp.children.push(["PrefixUnaryExpression", $]) },
                    )
                    break


                }
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.children.push(["ConditionalExpression", $]) },
                    )
                    break


                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.children.push(["ElementAccessExpression", $]) },
                    )
                    break


                }
                case "NoSubstitutionTemplateLiteral": {
                    _NoSubstitutionTemplateLiteral(
                        $,
                        ($) => { temp.children.push(["NoSubstitutionTemplateLiteral", $]) },
                    )
                    break


                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.children.push(["StringLiteral", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'ReturnStatement': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _CallExpression(
        $: p.Node<Annotation>,
        callback: ($: TCallExpression<Annotation>) => void,
    ) {
        const temp: TCallExpression<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                    )
                    break


                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "ArrowFunction": {
                    _ArrowFunction(
                        $,
                        ($) => { temp.children.push(["ArrowFunction", $]) },
                    )
                    break


                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.children.push(["ElementAccessExpression", $]) },
                    )
                    break


                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ArrayLiteralExpression", $]) },
                    )
                    break


                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.children.push(["NullKeyword", $]) },
                    )
                    break


                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ObjectLiteralExpression", $]) },
                    )
                    break


                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.children.push(["StringLiteral", $]) },
                    )
                    break


                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.children.push(["BinaryExpression", $]) },
                    )
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "TemplateExpression": {
                    _TemplateExpression(
                        $,
                        ($) => { temp.children.push(["TemplateExpression", $]) },
                    )
                    break


                }
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.children.push(["ConditionalExpression", $]) },
                    )
                    break


                }
                case "NoSubstitutionTemplateLiteral": {
                    _NoSubstitutionTemplateLiteral(
                        $,
                        ($) => { temp.children.push(["NoSubstitutionTemplateLiteral", $]) },
                    )
                    break


                }
                case "ParenthesizedExpression": {
                    _ParenthesizedExpression(
                        $,
                        ($) => { temp.children.push(["ParenthesizedExpression", $]) },
                    )
                    break


                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.children.push(["NumericLiteral", $]) },
                    )
                    break


                }
                case "TrueKeyword": {
                    _TrueKeyword(
                        $,
                        ($) => { temp.children.push(["TrueKeyword", $]) },
                    )
                    break


                }
                case "FalseKeyword": {
                    _FalseKeyword(
                        $,
                        ($) => { temp.children.push(["FalseKeyword", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'CallExpression': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _ExportKeyword(
        $: p.Node<Annotation>,
        callback: ($: TExportKeyword<Annotation>) => void,
    ) {}
    function _NumericLiteral(
        $: p.Node<Annotation>,
        callback: ($: TNumericLiteral<Annotation>) => void,
    ) {}
    function _FalseKeyword(
        $: p.Node<Annotation>,
        callback: ($: TFalseKeyword<Annotation>) => void,
    ) {}
    function _IfStatement(
        $: p.Node<Annotation>,
        callback: ($: TIfStatement<Annotation>) => void,
    ) {
        const temp: TIfStatement<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.children.push(["BinaryExpression", $]) },
                    )
                    break


                }
                case "Block": {
                    _Block(
                        $,
                        ($) => { temp.children.push(["Block", $]) },
                    )
                    break


                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                    )
                    break


                }
                case "PrefixUnaryExpression": {
                    _PrefixUnaryExpression(
                        $,
                        ($) => { temp.children.push(["PrefixUnaryExpression", $]) },
                    )
                    break


                }
                case "ReturnStatement": {
                    _ReturnStatement(
                        $,
                        ($) => { temp.children.push(["ReturnStatement", $]) },
                    )
                    break


                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "IfStatement": {
                    _IfStatement(
                        $,
                        ($) => { temp.children.push(["IfStatement", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'IfStatement': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _BinaryExpression(
        $: p.Node<Annotation>,
        callback: ($: TBinaryExpression<Annotation>) => void,
    ) {
        const temp: TBinaryExpression<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.children.push(["BinaryExpression", $]) },
                    )
                    break


                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "EqualsEqualsEqualsToken": {
                    const callback = ($: TEqualsEqualsEqualsToken<Annotation>) => {
                        temp.children.push(["EqualsEqualsEqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.children.push(["NumericLiteral", $]) },
                    )
                    break


                }
                case "AmpersandAmpersandToken": {
                    const callback = ($: TAmpersandAmpersandToken<Annotation>) => {
                        temp.children.push(["AmpersandAmpersandToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "PlusEqualsToken": {
                    const callback = ($: TPlusEqualsToken<Annotation>) => {
                        temp.children.push(["PlusEqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "MinusEqualsToken": {
                    const callback = ($: TMinusEqualsToken<Annotation>) => {
                        temp.children.push(["MinusEqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "EqualsToken": {
                    const callback = ($: TEqualsToken<Annotation>) => {
                        temp.children.push(["EqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "TrueKeyword": {
                    _TrueKeyword(
                        $,
                        ($) => { temp.children.push(["TrueKeyword", $]) },
                    )
                    break


                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.children.push(["ElementAccessExpression", $]) },
                    )
                    break


                }
                case "ExclamationEqualsEqualsToken": {
                    const callback = ($: TExclamationEqualsEqualsToken<Annotation>) => {
                        temp.children.push(["ExclamationEqualsEqualsToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.children.push(["StringLiteral", $]) },
                    )
                    break


                }
                case "PlusToken": {
                    const callback = ($: TPlusToken<Annotation>) => {
                        temp.children.push(["PlusToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                    )
                    break


                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.children.push(["NullKeyword", $]) },
                    )
                    break


                }
                case "ParenthesizedExpression": {
                    _ParenthesizedExpression(
                        $,
                        ($) => { temp.children.push(["ParenthesizedExpression", $]) },
                    )
                    break


                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ObjectLiteralExpression", $]) },
                    )
                    break


                }
                case "MinusToken": {
                    const callback = ($: TMinusToken<Annotation>) => {
                        temp.children.push(["MinusToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "GreaterThanToken": {
                    const callback = ($: TGreaterThanToken<Annotation>) => {
                        temp.children.push(["GreaterThanToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "FalseKeyword": {
                    _FalseKeyword(
                        $,
                        ($) => { temp.children.push(["FalseKeyword", $]) },
                    )
                    break


                }
                case "LessThanToken": {
                    const callback = ($: TLessThanToken<Annotation>) => {
                        temp.children.push(["LessThanToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "BarBarToken": {
                    const callback = ($: TBarBarToken<Annotation>) => {
                        temp.children.push(["BarBarToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ArrayLiteralExpression", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'BinaryExpression': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _ExpressionStatement(
        $: p.Node<Annotation>,
        callback: ($: TExpressionStatement<Annotation>) => void,
    ) {
        const temp: TExpressionStatement<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.children.push(["BinaryExpression", $]) },
                    )
                    break


                }
                case "PostfixUnaryExpression": {
                    const callback = ($: TPostfixUnaryExpression<Annotation>) => {
                        temp.children.push(["PostfixUnaryExpression", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TPostfixUnaryExpression<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.children.push(["Identifier", $]) },
                                    )
                                    break


                                }
                                case "PropertyAccessExpression": {
                                    _PropertyAccessExpression(
                                        $,
                                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                                    )
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'PostfixUnaryExpression': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                default: console.error(`encountered unexpected node in 'ExpressionStatement': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _ObjectLiteralExpression(
        $: p.Node<Annotation>,
        callback: ($: TObjectLiteralExpression<Annotation>) => void,
    ) {
        const temp: TObjectLiteralExpression<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "PropertyAssignment": {
                    const callback = ($: TPropertyAssignment<Annotation>) => {
                        temp.children.push(["PropertyAssignment", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TPropertyAssignment<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.children.push(["Identifier", $]) },
                                    )
                                    break


                                }
                                case "ArrowFunction": {
                                    _ArrowFunction(
                                        $,
                                        ($) => { temp.children.push(["ArrowFunction", $]) },
                                    )
                                    break


                                }
                                case "PropertyAccessExpression": {
                                    _PropertyAccessExpression(
                                        $,
                                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                                    )
                                    break


                                }
                                case "StringLiteral": {
                                    _StringLiteral(
                                        $,
                                        ($) => { temp.children.push(["StringLiteral", $]) },
                                    )
                                    break


                                }
                                case "ElementAccessExpression": {
                                    _ElementAccessExpression(
                                        $,
                                        ($) => { temp.children.push(["ElementAccessExpression", $]) },
                                    )
                                    break


                                }
                                case "ObjectLiteralExpression": {
                                    _ObjectLiteralExpression(
                                        $,
                                        ($) => { temp.children.push(["ObjectLiteralExpression", $]) },
                                    )
                                    break


                                }
                                case "CallExpression": {
                                    _CallExpression(
                                        $,
                                        ($) => { temp.children.push(["CallExpression", $]) },
                                    )
                                    break


                                }
                                case "NullKeyword": {
                                    _NullKeyword(
                                        $,
                                        ($) => { temp.children.push(["NullKeyword", $]) },
                                    )
                                    break


                                }
                                case "PrefixUnaryExpression": {
                                    _PrefixUnaryExpression(
                                        $,
                                        ($) => { temp.children.push(["PrefixUnaryExpression", $]) },
                                    )
                                    break


                                }
                                case "FalseKeyword": {
                                    _FalseKeyword(
                                        $,
                                        ($) => { temp.children.push(["FalseKeyword", $]) },
                                    )
                                    break


                                }
                                case "TemplateExpression": {
                                    _TemplateExpression(
                                        $,
                                        ($) => { temp.children.push(["TemplateExpression", $]) },
                                    )
                                    break


                                }
                                case "TrueKeyword": {
                                    _TrueKeyword(
                                        $,
                                        ($) => { temp.children.push(["TrueKeyword", $]) },
                                    )
                                    break


                                }
                                case "ConditionalExpression": {
                                    _ConditionalExpression(
                                        $,
                                        ($) => { temp.children.push(["ConditionalExpression", $]) },
                                    )
                                    break


                                }
                                case "ArrayLiteralExpression": {
                                    _ArrayLiteralExpression(
                                        $,
                                        ($) => { temp.children.push(["ArrayLiteralExpression", $]) },
                                    )
                                    break


                                }
                                case "NoSubstitutionTemplateLiteral": {
                                    _NoSubstitutionTemplateLiteral(
                                        $,
                                        ($) => { temp.children.push(["NoSubstitutionTemplateLiteral", $]) },
                                    )
                                    break


                                }
                                case "BinaryExpression": {
                                    _BinaryExpression(
                                        $,
                                        ($) => { temp.children.push(["BinaryExpression", $]) },
                                    )
                                    break


                                }
                                case "ParenthesizedExpression": {
                                    _ParenthesizedExpression(
                                        $,
                                        ($) => { temp.children.push(["ParenthesizedExpression", $]) },
                                    )
                                    break


                                }
                                case "NumericLiteral": {
                                    _NumericLiteral(
                                        $,
                                        ($) => { temp.children.push(["NumericLiteral", $]) },
                                    )
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'PropertyAssignment': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                default: console.error(`encountered unexpected node in 'ObjectLiteralExpression': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _ArrowFunction(
        $: p.Node<Annotation>,
        callback: ($: TArrowFunction<Annotation>) => void,
    ) {
        const temp: TArrowFunction<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Parameter": {
                    _Parameter(
                        $,
                        ($) => { temp.children.push(["Parameter", $]) },
                    )
                    break


                }
                case "EqualsGreaterThanToken": {
                    const callback = ($: TEqualsGreaterThanToken<Annotation>) => {
                        temp.children.push(["EqualsGreaterThanToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "Block": {
                    _Block(
                        $,
                        ($) => { temp.children.push(["Block", $]) },
                    )
                    break


                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.children.push(["BinaryExpression", $]) },
                    )
                    break


                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.children.push(["StringKeyword", $]) },
                    )
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "VoidKeyword": {
                    _VoidKeyword(
                        $,
                        ($) => { temp.children.push(["VoidKeyword", $]) },
                    )
                    break


                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.children.push(["UnionType", $]) },
                    )
                    break


                }
                case "TemplateExpression": {
                    _TemplateExpression(
                        $,
                        ($) => { temp.children.push(["TemplateExpression", $]) },
                    )
                    break


                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'ArrowFunction': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _PropertyAccessExpression(
        $: p.Node<Annotation>,
        callback: ($: TPropertyAccessExpression<Annotation>) => void,
    ) {
        const temp: TPropertyAccessExpression<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                    )
                    break


                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.children.push(["ElementAccessExpression", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'PropertyAccessExpression': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _ElementAccessExpression(
        $: p.Node<Annotation>,
        callback: ($: TElementAccessExpression<Annotation>) => void,
    ) {
        const temp: TElementAccessExpression<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.children.push(["NumericLiteral", $]) },
                    )
                    break


                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                    )
                    break


                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.children.push(["StringLiteral", $]) },
                    )
                    break


                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.children.push(["ElementAccessExpression", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'ElementAccessExpression': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _ArrayLiteralExpression(
        $: p.Node<Annotation>,
        callback: ($: TArrayLiteralExpression<Annotation>) => void,
    ) {
        const temp: TArrayLiteralExpression<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.children.push(["StringLiteral", $]) },
                    )
                    break


                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ObjectLiteralExpression", $]) },
                    )
                    break


                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                    )
                    break


                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.children.push(["BinaryExpression", $]) },
                    )
                    break


                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.children.push(["NullKeyword", $]) },
                    )
                    break


                }
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.children.push(["ConditionalExpression", $]) },
                    )
                    break


                }
                case "TemplateExpression": {
                    _TemplateExpression(
                        $,
                        ($) => { temp.children.push(["TemplateExpression", $]) },
                    )
                    break


                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ArrayLiteralExpression", $]) },
                    )
                    break


                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.children.push(["NumericLiteral", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'ArrayLiteralExpression': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _BreakStatement(
        $: p.Node<Annotation>,
        callback: ($: TBreakStatement<Annotation>) => void,
    ) {
        const temp: TBreakStatement<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'BreakStatement': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _NullKeyword(
        $: p.Node<Annotation>,
        callback: ($: TNullKeyword<Annotation>) => void,
    ) {}
    function _TrueKeyword(
        $: p.Node<Annotation>,
        callback: ($: TTrueKeyword<Annotation>) => void,
    ) {}
    function _TypeAliasDeclaration(
        $: p.Node<Annotation>,
        callback: ($: TTypeAliasDeclaration<Annotation>) => void,
    ) {
        const temp: TTypeAliasDeclaration<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "ExportKeyword": {
                    _ExportKeyword(
                        $,
                        ($) => { temp.children.push(["ExportKeyword", $]) },
                    )
                    break


                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.children.push(["TypeLiteral", $]) },
                    )
                    break


                }
                case "TypeParameter": {
                    _TypeParameter(
                        $,
                        ($) => { temp.children.push(["TypeParameter", $]) },
                    )
                    break


                }
                case "TupleType": {
                    _TupleType(
                        $,
                        ($) => { temp.children.push(["TupleType", $]) },
                    )
                    break


                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.children.push(["UnionType", $]) },
                    )
                    break


                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.children.push(["ArrayType", $]) },
                    )
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "FunctionType": {
                    _FunctionType(
                        $,
                        ($) => { temp.children.push(["FunctionType", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'TypeAliasDeclaration': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _TypeLiteral(
        $: p.Node<Annotation>,
        callback: ($: TTypeLiteral<Annotation>) => void,
    ) {
        const temp: TTypeLiteral<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "PropertySignature": {
                    _PropertySignature(
                        $,
                        ($) => { temp.children.push(["PropertySignature", $]) },
                    )
                    break


                }
                case "MethodSignature": {
                    _MethodSignature(
                        $,
                        ($) => { temp.children.push(["MethodSignature", $]) },
                    )
                    break


                }
                case "IndexSignature": {
                    const callback = ($: TIndexSignature<Annotation>) => {
                        temp.children.push(["IndexSignature", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                default: console.error(`encountered unexpected node in 'TypeLiteral': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _TemplateExpression(
        $: p.Node<Annotation>,
        callback: ($: TTemplateExpression<Annotation>) => void,
    ) {
        const temp: TTemplateExpression<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "TemplateHead": {
                    const callback = ($: TTemplateHead<Annotation>) => {
                        temp.children.push(["TemplateHead", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "TemplateSpan": {
                    const callback = ($: TTemplateSpan<Annotation>) => {
                        temp.children.push(["TemplateSpan", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TTemplateSpan<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "PropertyAccessExpression": {
                                    _PropertyAccessExpression(
                                        $,
                                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                                    )
                                    break


                                }
                                case "TemplateMiddle": {
                                    const callback = ($: TTemplateMiddle<Annotation>) => {
                                        temp.children.push(["TemplateMiddle", $])
                                    }
                                    pr.cc(null, (_) => {})
                                    break


                                }
                                case "TemplateTail": {
                                    const callback = ($: TTemplateTail<Annotation>) => {
                                        temp.children.push(["TemplateTail", $])
                                    }
                                    pr.cc(null, (_) => {})
                                    break


                                }
                                case "Identifier": {
                                    _Identifier(
                                        $,
                                        ($) => { temp.children.push(["Identifier", $]) },
                                    )
                                    break


                                }
                                case "CallExpression": {
                                    _CallExpression(
                                        $,
                                        ($) => { temp.children.push(["CallExpression", $]) },
                                    )
                                    break


                                }
                                case "ConditionalExpression": {
                                    _ConditionalExpression(
                                        $,
                                        ($) => { temp.children.push(["ConditionalExpression", $]) },
                                    )
                                    break


                                }
                                case "ElementAccessExpression": {
                                    _ElementAccessExpression(
                                        $,
                                        ($) => { temp.children.push(["ElementAccessExpression", $]) },
                                    )
                                    break


                                }
                                case "BinaryExpression": {
                                    _BinaryExpression(
                                        $,
                                        ($) => { temp.children.push(["BinaryExpression", $]) },
                                    )
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'TemplateSpan': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                default: console.error(`encountered unexpected node in 'TemplateExpression': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _PrefixUnaryExpression(
        $: p.Node<Annotation>,
        callback: ($: TPrefixUnaryExpression<Annotation>) => void,
    ) {
        const temp: TPrefixUnaryExpression<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                    )
                    break


                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.children.push(["NumericLiteral", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'PrefixUnaryExpression': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _TupleType(
        $: p.Node<Annotation>,
        callback: ($: TTupleType<Annotation>) => void,
    ) {
        const temp: TTupleType<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "OptionalType": {
                    const callback = ($: TOptionalType<Annotation>) => {
                        temp.children.push(["OptionalType", $])
                    }
                    pr.cc(null, (_) => {
                        const temp: TOptionalType<Annotation> = {
                            annotation: getAnnotation($),
                            children: []
                        }
                        $.children.forEach(($) => {
                            switch ($.kindName) {
                                case "NumberKeyword": {
                                    _NumberKeyword(
                                        $,
                                        ($) => { temp.children.push(["NumberKeyword", $]) },
                                    )
                                    break


                                }
                                case "TypeReference": {
                                    _TypeReference(
                                        $,
                                        ($) => { temp.children.push(["TypeReference", $]) },
                                    )
                                    break


                                }
                                default: console.error(`encountered unexpected node in 'OptionalType': '${$.kindName}' @ ${getLineInfo($)}`)
                            }
                        })
                        callback(temp)
                    })
                    break


                }
                case "LiteralType": {
                    _LiteralType(
                        $,
                        ($) => { temp.children.push(["LiteralType", $]) },
                    )
                    break


                }
                case "StringKeyword": {
                    _StringKeyword(
                        $,
                        ($) => { temp.children.push(["StringKeyword", $]) },
                    )
                    break


                }
                case "UnionType": {
                    _UnionType(
                        $,
                        ($) => { temp.children.push(["UnionType", $]) },
                    )
                    break


                }
                case "TypeReference": {
                    _TypeReference(
                        $,
                        ($) => { temp.children.push(["TypeReference", $]) },
                    )
                    break


                }
                case "TypeLiteral": {
                    _TypeLiteral(
                        $,
                        ($) => { temp.children.push(["TypeLiteral", $]) },
                    )
                    break


                }
                case "ArrayType": {
                    _ArrayType(
                        $,
                        ($) => { temp.children.push(["ArrayType", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'TupleType': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _LiteralType(
        $: p.Node<Annotation>,
        callback: ($: TLiteralType<Annotation>) => void,
    ) {
        const temp: TLiteralType<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.children.push(["StringLiteral", $]) },
                    )
                    break


                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.children.push(["NullKeyword", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'LiteralType': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _ConditionalExpression(
        $: p.Node<Annotation>,
        callback: ($: TConditionalExpression<Annotation>) => void,
    ) {
        const temp: TConditionalExpression<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.children.push(["BinaryExpression", $]) },
                    )
                    break


                }
                case "QuestionToken": {
                    _QuestionToken(
                        $,
                        ($) => { temp.children.push(["QuestionToken", $]) },
                    )
                    break


                }
                case "NullKeyword": {
                    _NullKeyword(
                        $,
                        ($) => { temp.children.push(["NullKeyword", $]) },
                    )
                    break


                }
                case "ColonToken": {
                    const callback = ($: TColonToken<Annotation>) => {
                        temp.children.push(["ColonToken", $])
                    }
                    pr.cc(null, (_) => {})
                    break


                }
                case "PropertyAccessExpression": {
                    _PropertyAccessExpression(
                        $,
                        ($) => { temp.children.push(["PropertyAccessExpression", $]) },
                    )
                    break


                }
                case "StringLiteral": {
                    _StringLiteral(
                        $,
                        ($) => { temp.children.push(["StringLiteral", $]) },
                    )
                    break


                }
                case "TemplateExpression": {
                    _TemplateExpression(
                        $,
                        ($) => { temp.children.push(["TemplateExpression", $]) },
                    )
                    break


                }
                case "CallExpression": {
                    _CallExpression(
                        $,
                        ($) => { temp.children.push(["CallExpression", $]) },
                    )
                    break


                }
                case "NoSubstitutionTemplateLiteral": {
                    _NoSubstitutionTemplateLiteral(
                        $,
                        ($) => { temp.children.push(["NoSubstitutionTemplateLiteral", $]) },
                    )
                    break


                }
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.children.push(["ConditionalExpression", $]) },
                    )
                    break


                }
                case "Identifier": {
                    _Identifier(
                        $,
                        ($) => { temp.children.push(["Identifier", $]) },
                    )
                    break


                }
                case "ObjectLiteralExpression": {
                    _ObjectLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ObjectLiteralExpression", $]) },
                    )
                    break


                }
                case "ArrayLiteralExpression": {
                    _ArrayLiteralExpression(
                        $,
                        ($) => { temp.children.push(["ArrayLiteralExpression", $]) },
                    )
                    break


                }
                case "ElementAccessExpression": {
                    _ElementAccessExpression(
                        $,
                        ($) => { temp.children.push(["ElementAccessExpression", $]) },
                    )
                    break


                }
                case "ArrowFunction": {
                    _ArrowFunction(
                        $,
                        ($) => { temp.children.push(["ArrowFunction", $]) },
                    )
                    break


                }
                case "NumericLiteral": {
                    _NumericLiteral(
                        $,
                        ($) => { temp.children.push(["NumericLiteral", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'ConditionalExpression': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _ParenthesizedExpression(
        $: p.Node<Annotation>,
        callback: ($: TParenthesizedExpression<Annotation>) => void,
    ) {
        const temp: TParenthesizedExpression<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "ConditionalExpression": {
                    _ConditionalExpression(
                        $,
                        ($) => { temp.children.push(["ConditionalExpression", $]) },
                    )
                    break


                }
                case "BinaryExpression": {
                    _BinaryExpression(
                        $,
                        ($) => { temp.children.push(["BinaryExpression", $]) },
                    )
                    break


                }
                case "ArrowFunction": {
                    _ArrowFunction(
                        $,
                        ($) => { temp.children.push(["ArrowFunction", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'ParenthesizedExpression': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    function _NoSubstitutionTemplateLiteral(
        $: p.Node<Annotation>,
        callback: ($: TNoSubstitutionTemplateLiteral<Annotation>) => void,
    ) {}
    function _WhileStatement(
        $: p.Node<Annotation>,
        callback: ($: TWhileStatement<Annotation>) => void,
    ) {
        const temp: TWhileStatement<Annotation> = {
            annotation: getAnnotation($),
            children: []
        }
        $.children.forEach(($) => {
            switch ($.kindName) {
                case "TrueKeyword": {
                    _TrueKeyword(
                        $,
                        ($) => { temp.children.push(["TrueKeyword", $]) },
                    )
                    break


                }
                case "Block": {
                    _Block(
                        $,
                        ($) => { temp.children.push(["Block", $]) },
                    )
                    break


                }
                default: console.error(`encountered unexpected node in 'WhileStatement': '${$.kindName}' @ ${getLineInfo($)}`)
            }
        })
        callback(temp)
    }
    return _SourceFile($, callback)
}
export type Root<Annotation> = TSourceFile<Annotation>
