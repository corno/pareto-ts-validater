import * as pr from "pareto-runtime"
export type XGexpression_arrayLiteral<Annotation> = TArrayLiteralExpression<Annotation>
export type SGexpression_arrayLiteral<Annotation> = XGexpression_arrayLiteral<Annotation>
export type XGexpression_false<Annotation> = TFalseKeyword<Annotation>
export type SGexpression_false<Annotation> = XGexpression_false<Annotation>
export type XGexpression_identifier<Annotation> = TIdentifier<Annotation>
export type SGexpression_identifier<Annotation> = XGexpression_identifier<Annotation>
export type XGexpression_noSubstitutionTemplateLiteral<Annotation> = TNoSubstitutionTemplateLiteral<Annotation>
export type SGexpression_noSubstitutionTemplateLiteral<Annotation> = XGexpression_noSubstitutionTemplateLiteral<Annotation>
export type XGexpression_numericLiteral<Annotation> = TNumericLiteral<Annotation>
export type SGexpression_numericLiteral<Annotation> = XGexpression_numericLiteral<Annotation>
export type XGexpression_nullKeyword<Annotation> = TNullKeyword<Annotation>
export type SGexpression_nullKeyword<Annotation> = XGexpression_nullKeyword<Annotation>
export type XGexpression_objectLiteral<Annotation> = TObjectLiteralExpression<Annotation>
export type SGexpression_objectLiteral<Annotation> = XGexpression_objectLiteral<Annotation>
export type XGexpression_stringLiteral<Annotation> = TStringLiteral<Annotation>
export type SGexpression_stringLiteral<Annotation> = XGexpression_stringLiteral<Annotation>
export type XGexpression_true<Annotation> = TTrueKeyword<Annotation>
export type SGexpression_true<Annotation> = XGexpression_true<Annotation>
export type XGexpression<Annotation> =
    | [ "arrayLiteral", SGexpression_arrayLiteral<Annotation>]
    | [ "false", SGexpression_false<Annotation>]
    | [ "identifier", SGexpression_identifier<Annotation>]
    | [ "noSubstitutionTemplateLiteral", SGexpression_noSubstitutionTemplateLiteral<Annotation>]
    | [ "numericLiteral", SGexpression_numericLiteral<Annotation>]
    | [ "nullKeyword", SGexpression_nullKeyword<Annotation>]
    | [ "objectLiteral", SGexpression_objectLiteral<Annotation>]
    | [ "stringLiteral", SGexpression_stringLiteral<Annotation>]
    | [ "true", SGexpression_true<Annotation>]
export type Gexpression<Annotation> =  XGexpression<Annotation>
export type XTArrayLiteralExpression<Annotation> = Gexpression<Annotation>
export type STArrayLiteralExpression<Annotation> = XTArrayLiteralExpression<Annotation>[]

export type TArrayLiteralExpression<Annotation> = {
    annotation: Annotation,
    content: STArrayLiteralExpression<Annotation>,
}

export type TEndOfFileToken<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TExportKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TFalseKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}

export type TIdentifier<Annotation> = {
    annotation: Annotation,
    content: string,
}
export type XTImportClause_namespace<Annotation> = TNamespaceImport<Annotation>
export type STImportClause_namespace<Annotation> = XTImportClause_namespace<Annotation>
export type XTImportClause<Annotation> = {
    readonly namespace:  STImportClause_namespace<Annotation>
}
export type STImportClause<Annotation> = XTImportClause<Annotation>

export type TImportClause<Annotation> = {
    annotation: Annotation,
    content: STImportClause<Annotation>,
}
export type XTImportDeclaration_clause<Annotation> = TImportClause<Annotation>
export type STImportDeclaration_clause<Annotation> = XTImportDeclaration_clause<Annotation>
export type XTImportDeclaration_file<Annotation> = TStringLiteral<Annotation>
export type STImportDeclaration_file<Annotation> = XTImportDeclaration_file<Annotation>
export type XTImportDeclaration<Annotation> = {
    readonly clause:  STImportDeclaration_clause<Annotation>
    readonly file:  STImportDeclaration_file<Annotation>
}
export type STImportDeclaration<Annotation> = XTImportDeclaration<Annotation>

export type TImportDeclaration<Annotation> = {
    annotation: Annotation,
    content: STImportDeclaration<Annotation>,
}
export type XTNamespaceImport<Annotation> = TIdentifier<Annotation>
export type STNamespaceImport<Annotation> = XTNamespaceImport<Annotation>

export type TNamespaceImport<Annotation> = {
    annotation: Annotation,
    content: STNamespaceImport<Annotation>,
}

export type TNoSubstitutionTemplateLiteral<Annotation> = {
    annotation: Annotation,
    content: string,
}

export type TNumericLiteral<Annotation> = {
    annotation: Annotation,
    content: string,
}

export type TNullKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTObjectLiteralExpression<Annotation> = TPropertyAssignment<Annotation>
export type STObjectLiteralExpression<Annotation> = XTObjectLiteralExpression<Annotation>[]

export type TObjectLiteralExpression<Annotation> = {
    annotation: Annotation,
    content: STObjectLiteralExpression<Annotation>,
}
export type XTPropertyAssignment_name_identifier<Annotation> = TIdentifier<Annotation>
export type STPropertyAssignment_name_identifier<Annotation> = XTPropertyAssignment_name_identifier<Annotation>
export type XTPropertyAssignment_name_stringLiteral<Annotation> = TStringLiteral<Annotation>
export type STPropertyAssignment_name_stringLiteral<Annotation> = XTPropertyAssignment_name_stringLiteral<Annotation>
export type XTPropertyAssignment_name<Annotation> =
    | [ "identifier", STPropertyAssignment_name_identifier<Annotation>]
    | [ "stringLiteral", STPropertyAssignment_name_stringLiteral<Annotation>]
export type STPropertyAssignment_name<Annotation> = XTPropertyAssignment_name<Annotation>
export type XTPropertyAssignment_expression<Annotation> = Gexpression<Annotation>
export type STPropertyAssignment_expression<Annotation> = XTPropertyAssignment_expression<Annotation>
export type XTPropertyAssignment<Annotation> = {
    readonly name:  STPropertyAssignment_name<Annotation>
    readonly expression:  STPropertyAssignment_expression<Annotation>
}
export type STPropertyAssignment<Annotation> = XTPropertyAssignment<Annotation>

export type TPropertyAssignment<Annotation> = {
    annotation: Annotation,
    content: STPropertyAssignment<Annotation>,
}
export type XTQualifiedName_context<Annotation> = TIdentifier<Annotation>
export type STQualifiedName_context<Annotation> = XTQualifiedName_context<Annotation>
export type XTQualifiedName_type<Annotation> = TIdentifier<Annotation>
export type STQualifiedName_type<Annotation> = XTQualifiedName_type<Annotation>
export type XTQualifiedName<Annotation> = {
    readonly context:  STQualifiedName_context<Annotation>
    readonly type:  STQualifiedName_type<Annotation>
}
export type STQualifiedName<Annotation> = XTQualifiedName<Annotation>

export type TQualifiedName<Annotation> = {
    annotation: Annotation,
    content: STQualifiedName<Annotation>,
}
export type XTSourceFile_import<Annotation> = TImportDeclaration<Annotation>
export type STSourceFile_import<Annotation> = XTSourceFile_import<Annotation>
export type XTSourceFile_variables<Annotation> = TVariableStatement<Annotation>
export type STSourceFile_variables<Annotation> = XTSourceFile_variables<Annotation>[]
export type XTSourceFile_endOfFile<Annotation> = TEndOfFileToken<Annotation>
export type STSourceFile_endOfFile<Annotation> = XTSourceFile_endOfFile<Annotation>
export type XTSourceFile<Annotation> = {
    readonly import:  STSourceFile_import<Annotation>
    readonly variables:  STSourceFile_variables<Annotation>
    readonly endOfFile:  STSourceFile_endOfFile<Annotation>
}
export type STSourceFile<Annotation> = XTSourceFile<Annotation>

export type TSourceFile<Annotation> = {
    annotation: Annotation,
    content: STSourceFile<Annotation>,
}

export type TStringLiteral<Annotation> = {
    annotation: Annotation,
    content: string,
}

export type TTrueKeyword<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTTypeReference_name<Annotation> = TQualifiedName<Annotation>
export type STTypeReference_name<Annotation> = XTTypeReference_name<Annotation>
export type XTTypeReference<Annotation> = {
    readonly name:  STTypeReference_name<Annotation>
}
export type STTypeReference<Annotation> = XTTypeReference<Annotation>

export type TTypeReference<Annotation> = {
    annotation: Annotation,
    content: STTypeReference<Annotation>,
}
export type XTVariableDeclaration_name<Annotation> = TIdentifier<Annotation>
export type STVariableDeclaration_name<Annotation> = XTVariableDeclaration_name<Annotation>
export type XTVariableDeclaration_type<Annotation> = TTypeReference<Annotation>
export type STVariableDeclaration_type<Annotation> = XTVariableDeclaration_type<Annotation>
export type XTVariableDeclaration_one<Annotation> = Gexpression<Annotation>
export type STVariableDeclaration_one<Annotation> = null | XTVariableDeclaration_one<Annotation>
export type XTVariableDeclaration<Annotation> = {
    readonly name:  STVariableDeclaration_name<Annotation>
    readonly type:  STVariableDeclaration_type<Annotation>
    readonly one:  STVariableDeclaration_one<Annotation>
}
export type STVariableDeclaration<Annotation> = XTVariableDeclaration<Annotation>

export type TVariableDeclaration<Annotation> = {
    annotation: Annotation,
    content: STVariableDeclaration<Annotation>,
}
export type XTVariableDeclarationList<Annotation> = TVariableDeclaration<Annotation>
export type STVariableDeclarationList<Annotation> = XTVariableDeclarationList<Annotation>[]

export type TVariableDeclarationList<Annotation> = {
    annotation: Annotation,
    content: STVariableDeclarationList<Annotation>,
}
export type XTVariableStatement_export<Annotation> = TExportKeyword<Annotation>
export type STVariableStatement_export<Annotation> = XTVariableStatement_export<Annotation>
export type XTVariableStatement_variableDeclarationList<Annotation> = TVariableDeclarationList<Annotation>
export type STVariableStatement_variableDeclarationList<Annotation> = XTVariableStatement_variableDeclarationList<Annotation>
export type XTVariableStatement<Annotation> = {
    readonly export:  STVariableStatement_export<Annotation>
    readonly variableDeclarationList:  STVariableStatement_variableDeclarationList<Annotation>
}
export type STVariableStatement<Annotation> = XTVariableStatement<Annotation>

export type TVariableStatement<Annotation> = {
    annotation: Annotation,
    content: STVariableStatement<Annotation>,
}
export type Root<Annotation> = TSourceFile<Annotation>