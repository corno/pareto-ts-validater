import * as pr from "pareto-runtime"


import * as p from "./untypedAPI"





export class UnrecognizedNodeError extends Error {


    constructor(message: string) { super(message); Object.setPrototypeOf(this, UnrecognizedNodeError.prototype); }


}








export type TInterfaceDeclaration = number





export type TEndOfFileToken = number





export type TExportDeclaration = Array<


    | ["StringLiteral", TStringLiteral]


>





export type TImportDeclaration = Array<


    | ["StringLiteral", TStringLiteral]


>





export type TSourceFile = Array<


    | ["InterfaceDeclaration", TInterfaceDeclaration]


    | ["FunctionDeclaration", TFunctionDeclaration]


    | ["VariableStatement", TVariableStatement]


    | ["EndOfFileToken", TEndOfFileToken]


    | ["ExportDeclaration", TExportDeclaration]


    | ["ImportDeclaration", TImportDeclaration]


    | ["TypeAliasDeclaration", TTypeAliasDeclaration]


    | ["ExpressionStatement", TExpressionStatement]


>





export type TIdentifier = number





export type TTypeParameter = Array<


    | ["Identifier", TIdentifier]


>





export type TMethodSignature = Array<


    | ["Identifier", TIdentifier]


    | ["Parameter", TParameter]


    | ["VoidKeyword", TVoidKeyword]


    | ["TypeParameter", TTypeParameter]


    | ["ArrayType", TArrayType]


    | ["BooleanKeyword", TBooleanKeyword]


    | ["StringKeyword", TStringKeyword]


    | ["UnionType", TUnionType]


    | ["NumberKeyword", TNumberKeyword]


    | ["TypeReference", TTypeReference]


>





export type TNeverKeyword = number





export type TParameter = Array<


    | ["Identifier", TIdentifier]


    | ["TypeReference", TTypeReference]


    | ["FunctionType", TFunctionType]


    | ["NumberKeyword", TNumberKeyword]


    | ["StringKeyword", TStringKeyword]


    | ["ArrayType", TArrayType]


    | ["AnyKeyword", TAnyKeyword]


    | ["QuestionToken", TQuestionToken]


    | ["NeverKeyword", TNeverKeyword]


    | ["TypeLiteral", TTypeLiteral]


    | ["UnionType", TUnionType]


    | ["BooleanKeyword", TBooleanKeyword]


>





export type TQualifiedName = Array<


    | ["Identifier", TIdentifier]


>





export type TTypeReference = Array<


    | ["Identifier", TIdentifier]


    | ["TypeReference", TTypeReference]


    | ["QualifiedName", TQualifiedName]


    | ["StringKeyword", TStringKeyword]


    | ["LiteralType", TLiteralType]


    | ["TypeLiteral", TTypeLiteral]


>





export type TVoidKeyword = number





export type TFunctionType = Array<


    | ["Parameter", TParameter]


    | ["VoidKeyword", TVoidKeyword]


    | ["TypeReference", TTypeReference]


    | ["AnyKeyword", TAnyKeyword]


    | ["UnionType", TUnionType]


    | ["BooleanKeyword", TBooleanKeyword]


    | ["ArrayType", TArrayType]


    | ["StringKeyword", TStringKeyword]


>





export type TNumberKeyword = number





export type TArrayType = Array<


    | ["TypeReference", TTypeReference]


    | ["StringKeyword", TStringKeyword]


>





export type TBooleanKeyword = number





export type TPropertySignature = Array<


    | ["Identifier", TIdentifier]


    | ["NumberKeyword", TNumberKeyword]


    | ["ReadonlyKeyword", TReadonlyKeyword]


    | ["StringKeyword", TStringKeyword]


    | ["FunctionType", TFunctionType]


    | ["TypeReference", TTypeReference]


    | ["QuestionToken", TQuestionToken]


    | ["BooleanKeyword", TBooleanKeyword]


    | ["ArrayType", TArrayType]


    | ["UnionType", TUnionType]


    | ["LiteralType", TLiteralType]


    | ["TypeLiteral", TTypeLiteral]


    | ["StringLiteral", TStringLiteral]


>





export type TStringKeyword = number





export type TUndefinedKeyword = number





export type TParenthesizedType = Array<


    | ["FunctionType", TFunctionType]


>





export type TUnionType = Array<


    | ["UndefinedKeyword", TUndefinedKeyword]


    | ["TypeReference", TTypeReference]


    | ["TupleType", TTupleType]


    | ["LiteralType", TLiteralType]


    | ["StringKeyword", TStringKeyword]


    | ["BooleanKeyword", TBooleanKeyword]


    | ["ArrayType", TArrayType]


    | ["NumberKeyword", TNumberKeyword]


    | ["ParenthesizedType", TParenthesizedType]


>





export type TReadonlyKeyword = number





export type TFunctionDeclaration = Array<


    | ["DeclareKeyword", TDeclareKeyword]


    | ["Identifier", TIdentifier]


    | ["Parameter", TParameter]


    | ["BooleanKeyword", TBooleanKeyword]


    | ["TypeParameter", TTypeParameter]


    | ["TypeReference", TTypeReference]


    | ["Block", TBlock]


    | ["ExportKeyword", TExportKeyword]


    | ["VoidKeyword", TVoidKeyword]


    | ["UnionType", TUnionType]


    | ["StringKeyword", TStringKeyword]


    | ["ArrayType", TArrayType]


>





export type TDeclareKeyword = number





export type TAnyKeyword = number





export type TQuestionToken = number





export type TVariableStatement = Array<


    | ["DeclareKeyword", TDeclareKeyword]


    | ["VariableDeclarationList", TVariableDeclarationList]


    | ["ExportKeyword", TExportKeyword]


>





export type TVariableDeclarationList = Array<


    | ["VariableDeclaration", TVariableDeclaration]


>





export type TVariableDeclaration = Array<


    | ["Identifier", TIdentifier]


    | ["TypeReference", TTypeReference]


    | ["NumericLiteral", TNumericLiteral]


    | ["FalseKeyword", TFalseKeyword]


    | ["CallExpression", TCallExpression]


    | ["StringLiteral", TStringLiteral]


    | ["ArrayType", TArrayType]


    | ["ArrayLiteralExpression", TArrayLiteralExpression]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["ElementAccessExpression", TElementAccessExpression]


    | ["ArrowFunction", TArrowFunction]


    | ["ObjectLiteralExpression", TObjectLiteralExpression]


    | ["PrefixUnaryExpression", TPrefixUnaryExpression]


    | ["BinaryExpression", TBinaryExpression]


    | ["ConditionalExpression", TConditionalExpression]


    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral]


    | ["ParenthesizedExpression", TParenthesizedExpression]


    | ["NumberKeyword", TNumberKeyword]


    | ["UnionType", TUnionType]


    | ["NullKeyword", TNullKeyword]


    | ["TypeLiteral", TTypeLiteral]


>





export type TStringLiteral = number





export type TNewExpression = Array<


    | ["Identifier", TIdentifier]


    | ["StringLiteral", TStringLiteral]


    | ["CallExpression", TCallExpression]


    | ["TemplateExpression", TTemplateExpression]


    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral]


>





export type TThrowStatement = Array<


    | ["NewExpression", TNewExpression]


>





export type TCaseClause = Array<


    | ["StringLiteral", TStringLiteral]


    | ["ExpressionStatement", TExpressionStatement]


    | ["BreakStatement", TBreakStatement]


    | ["Block", TBlock]


    | ["ReturnStatement", TReturnStatement]


    | ["VariableStatement", TVariableStatement]


    | ["IfStatement", TIfStatement]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


>





export type TDefaultClause = Array<


    | ["ExpressionStatement", TExpressionStatement]


    | ["ReturnStatement", TReturnStatement]


    | ["Block", TBlock]


>





export type TCaseBlock = Array<


    | ["CaseClause", TCaseClause]


    | ["DefaultClause", TDefaultClause]


>





export type TSwitchStatement = Array<


    | ["ElementAccessExpression", TElementAccessExpression]


    | ["CaseBlock", TCaseBlock]


    | ["Identifier", TIdentifier]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


>





export type TCatchClause = Array<


    | ["VariableDeclaration", TVariableDeclaration]


    | ["Block", TBlock]


>





export type TTryStatement = Array<


    | ["Block", TBlock]


    | ["CatchClause", TCatchClause]


>





export type TForStatement = Array<


    | ["VariableDeclarationList", TVariableDeclarationList]


    | ["BinaryExpression", TBinaryExpression]


    | ["Block", TBlock]


>





export type TLabeledStatement = Array<


    | ["Identifier", TIdentifier]


    | ["WhileStatement", TWhileStatement]


>





export type TBlock = Array<


    | ["ThrowStatement", TThrowStatement]


    | ["ReturnStatement", TReturnStatement]


    | ["VariableStatement", TVariableStatement]


    | ["FunctionDeclaration", TFunctionDeclaration]


    | ["IfStatement", TIfStatement]


    | ["ExpressionStatement", TExpressionStatement]


    | ["SwitchStatement", TSwitchStatement]


    | ["TryStatement", TTryStatement]


    | ["BreakStatement", TBreakStatement]


    | ["TypeAliasDeclaration", TTypeAliasDeclaration]


    | ["ForStatement", TForStatement]


    | ["WhileStatement", TWhileStatement]


    | ["LabeledStatement", TLabeledStatement]


>





export type TReturnStatement = Array<


    | ["CallExpression", TCallExpression]


    | ["ObjectLiteralExpression", TObjectLiteralExpression]


    | ["TemplateExpression", TTemplateExpression]


    | ["Identifier", TIdentifier]


    | ["ArrayLiteralExpression", TArrayLiteralExpression]


    | ["NullKeyword", TNullKeyword]


    | ["ArrowFunction", TArrowFunction]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["BinaryExpression", TBinaryExpression]


    | ["PrefixUnaryExpression", TPrefixUnaryExpression]


    | ["ConditionalExpression", TConditionalExpression]


    | ["ElementAccessExpression", TElementAccessExpression]


    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral]


    | ["StringLiteral", TStringLiteral]


>





export type TCallExpression = Array<


    | ["Identifier", TIdentifier]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["CallExpression", TCallExpression]


    | ["ArrowFunction", TArrowFunction]


    | ["ElementAccessExpression", TElementAccessExpression]


    | ["ArrayLiteralExpression", TArrayLiteralExpression]


    | ["NullKeyword", TNullKeyword]


    | ["ObjectLiteralExpression", TObjectLiteralExpression]


    | ["StringLiteral", TStringLiteral]


    | ["BinaryExpression", TBinaryExpression]


    | ["TypeReference", TTypeReference]


    | ["TemplateExpression", TTemplateExpression]


    | ["ConditionalExpression", TConditionalExpression]


    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral]


    | ["ParenthesizedExpression", TParenthesizedExpression]


    | ["NumericLiteral", TNumericLiteral]


    | ["TrueKeyword", TTrueKeyword]


    | ["FalseKeyword", TFalseKeyword]


>





export type TExportKeyword = number





export type TNumericLiteral = number





export type TFalseKeyword = number





export type TIfStatement = Array<


    | ["BinaryExpression", TBinaryExpression]


    | ["Block", TBlock]


    | ["Identifier", TIdentifier]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["PrefixUnaryExpression", TPrefixUnaryExpression]


    | ["ReturnStatement", TReturnStatement]


    | ["CallExpression", TCallExpression]


    | ["IfStatement", TIfStatement]


>





export type TEqualsEqualsEqualsToken = number





export type TAmpersandAmpersandToken = number





export type TPlusEqualsToken = number





export type TMinusEqualsToken = number





export type TEqualsToken = number





export type TExclamationEqualsEqualsToken = number





export type TPlusToken = number





export type TMinusToken = number





export type TGreaterThanToken = number





export type TLessThanToken = number





export type TBarBarToken = number





export type TBinaryExpression = Array<


    | ["BinaryExpression", TBinaryExpression]


    | ["Identifier", TIdentifier]


    | ["EqualsEqualsEqualsToken", TEqualsEqualsEqualsToken]


    | ["NumericLiteral", TNumericLiteral]


    | ["AmpersandAmpersandToken", TAmpersandAmpersandToken]


    | ["PlusEqualsToken", TPlusEqualsToken]


    | ["MinusEqualsToken", TMinusEqualsToken]


    | ["EqualsToken", TEqualsToken]


    | ["TrueKeyword", TTrueKeyword]


    | ["ElementAccessExpression", TElementAccessExpression]


    | ["ExclamationEqualsEqualsToken", TExclamationEqualsEqualsToken]


    | ["StringLiteral", TStringLiteral]


    | ["PlusToken", TPlusToken]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["NullKeyword", TNullKeyword]


    | ["ParenthesizedExpression", TParenthesizedExpression]


    | ["ObjectLiteralExpression", TObjectLiteralExpression]


    | ["MinusToken", TMinusToken]


    | ["GreaterThanToken", TGreaterThanToken]


    | ["CallExpression", TCallExpression]


    | ["FalseKeyword", TFalseKeyword]


    | ["LessThanToken", TLessThanToken]


    | ["BarBarToken", TBarBarToken]


    | ["ArrayLiteralExpression", TArrayLiteralExpression]


>





export type TPostfixUnaryExpression = Array<


    | ["Identifier", TIdentifier]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


>





export type TExpressionStatement = Array<


    | ["CallExpression", TCallExpression]


    | ["BinaryExpression", TBinaryExpression]


    | ["PostfixUnaryExpression", TPostfixUnaryExpression]


>





export type TPropertyAssignment = Array<


    | ["Identifier", TIdentifier]


    | ["ArrowFunction", TArrowFunction]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["StringLiteral", TStringLiteral]


    | ["ElementAccessExpression", TElementAccessExpression]


    | ["ObjectLiteralExpression", TObjectLiteralExpression]


    | ["CallExpression", TCallExpression]


    | ["NullKeyword", TNullKeyword]


    | ["PrefixUnaryExpression", TPrefixUnaryExpression]


    | ["FalseKeyword", TFalseKeyword]


    | ["TemplateExpression", TTemplateExpression]


    | ["TrueKeyword", TTrueKeyword]


    | ["ConditionalExpression", TConditionalExpression]


    | ["ArrayLiteralExpression", TArrayLiteralExpression]


    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral]


    | ["BinaryExpression", TBinaryExpression]


    | ["ParenthesizedExpression", TParenthesizedExpression]


    | ["NumericLiteral", TNumericLiteral]


>





export type TObjectLiteralExpression = Array<


    | ["PropertyAssignment", TPropertyAssignment]


>





export type TEqualsGreaterThanToken = number





export type TArrowFunction = Array<


    | ["Parameter", TParameter]


    | ["EqualsGreaterThanToken", TEqualsGreaterThanToken]


    | ["Block", TBlock]


    | ["Identifier", TIdentifier]


    | ["CallExpression", TCallExpression]


    | ["BinaryExpression", TBinaryExpression]


    | ["StringKeyword", TStringKeyword]


    | ["TypeReference", TTypeReference]


    | ["VoidKeyword", TVoidKeyword]


    | ["UnionType", TUnionType]


    | ["TemplateExpression", TTemplateExpression]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


>





export type TPropertyAccessExpression = Array<


    | ["Identifier", TIdentifier]


    | ["CallExpression", TCallExpression]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["ElementAccessExpression", TElementAccessExpression]


>





export type TElementAccessExpression = Array<


    | ["Identifier", TIdentifier]


    | ["NumericLiteral", TNumericLiteral]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["CallExpression", TCallExpression]


    | ["StringLiteral", TStringLiteral]


    | ["ElementAccessExpression", TElementAccessExpression]


>





export type TArrayLiteralExpression = Array<


    | ["StringLiteral", TStringLiteral]


    | ["ObjectLiteralExpression", TObjectLiteralExpression]


    | ["Identifier", TIdentifier]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["CallExpression", TCallExpression]


    | ["BinaryExpression", TBinaryExpression]


    | ["NullKeyword", TNullKeyword]


    | ["ConditionalExpression", TConditionalExpression]


    | ["TemplateExpression", TTemplateExpression]


    | ["ArrayLiteralExpression", TArrayLiteralExpression]


    | ["NumericLiteral", TNumericLiteral]


>





export type TBreakStatement = Array<


    | ["Identifier", TIdentifier]


>





export type TNullKeyword = number





export type TTrueKeyword = number





export type TTypeAliasDeclaration = Array<


    | ["ExportKeyword", TExportKeyword]


    | ["Identifier", TIdentifier]


    | ["TypeLiteral", TTypeLiteral]


    | ["TypeParameter", TTypeParameter]


    | ["TupleType", TTupleType]


    | ["UnionType", TUnionType]


    | ["ArrayType", TArrayType]


    | ["TypeReference", TTypeReference]


    | ["FunctionType", TFunctionType]


>





export type TIndexSignature = number





export type TTypeLiteral = Array<


    | ["PropertySignature", TPropertySignature]


    | ["MethodSignature", TMethodSignature]


    | ["IndexSignature", TIndexSignature]


>





export type TTemplateHead = number





export type TTemplateMiddle = number





export type TTemplateTail = number





export type TTemplateSpan = Array<


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["TemplateMiddle", TTemplateMiddle]


    | ["TemplateTail", TTemplateTail]


    | ["Identifier", TIdentifier]


    | ["CallExpression", TCallExpression]


    | ["ConditionalExpression", TConditionalExpression]


    | ["ElementAccessExpression", TElementAccessExpression]


    | ["BinaryExpression", TBinaryExpression]


>





export type TTemplateExpression = Array<


    | ["TemplateHead", TTemplateHead]


    | ["TemplateSpan", TTemplateSpan]


>





export type TPrefixUnaryExpression = Array<


    | ["Identifier", TIdentifier]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["CallExpression", TCallExpression]


    | ["NumericLiteral", TNumericLiteral]


>





export type TOptionalType = Array<


    | ["NumberKeyword", TNumberKeyword]


    | ["TypeReference", TTypeReference]


>





export type TTupleType = Array<


    | ["OptionalType", TOptionalType]


    | ["LiteralType", TLiteralType]


    | ["StringKeyword", TStringKeyword]


    | ["UnionType", TUnionType]


    | ["TypeReference", TTypeReference]


    | ["TypeLiteral", TTypeLiteral]


    | ["ArrayType", TArrayType]


>





export type TLiteralType = Array<


    | ["StringLiteral", TStringLiteral]


    | ["NullKeyword", TNullKeyword]


>





export type TColonToken = number





export type TConditionalExpression = Array<


    | ["BinaryExpression", TBinaryExpression]


    | ["QuestionToken", TQuestionToken]


    | ["NullKeyword", TNullKeyword]


    | ["ColonToken", TColonToken]


    | ["PropertyAccessExpression", TPropertyAccessExpression]


    | ["StringLiteral", TStringLiteral]


    | ["TemplateExpression", TTemplateExpression]


    | ["CallExpression", TCallExpression]


    | ["NoSubstitutionTemplateLiteral", TNoSubstitutionTemplateLiteral]


    | ["ConditionalExpression", TConditionalExpression]


    | ["Identifier", TIdentifier]


    | ["ObjectLiteralExpression", TObjectLiteralExpression]


    | ["ArrayLiteralExpression", TArrayLiteralExpression]


    | ["ElementAccessExpression", TElementAccessExpression]


    | ["ArrowFunction", TArrowFunction]


    | ["NumericLiteral", TNumericLiteral]


>





export type TParenthesizedExpression = Array<


    | ["ConditionalExpression", TConditionalExpression]


    | ["BinaryExpression", TBinaryExpression]


    | ["ArrowFunction", TArrowFunction]


>





export type TNoSubstitutionTemplateLiteral = number





export type TWhileStatement = Array<


    | ["TrueKeyword", TTrueKeyword]


    | ["Block", TBlock]


>


export function root<Annotation>(


    $: p.Node<Annotation>,


    callback: ($: TSourceFile) => void,


    getLineInfo: ($: p.Node<Annotation>) => string,


): void {


    function _SourceFile(


        $: p.Node<Annotation>,


        callback: ($: TSourceFile) => void,


    ) {


        const temp: TSourceFile = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "InterfaceDeclaration": {


                    const callback = ($: TInterfaceDeclaration) => {


                        temp.push(["InterfaceDeclaration", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "FunctionDeclaration": {


                    _FunctionDeclaration(


                        $,


                        ($) => { temp.push(["FunctionDeclaration", $]) },


                    )


                    break


                }


                case "VariableStatement": {


                    _VariableStatement(


                        $,


                        ($) => { temp.push(["VariableStatement", $]) },


                    )


                    break


                }


                case "EndOfFileToken": {


                    const callback = ($: TEndOfFileToken) => {


                        temp.push(["EndOfFileToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "ExportDeclaration": {


                    const callback = ($: TExportDeclaration) => {


                        temp.push(["ExportDeclaration", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TExportDeclaration = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "StringLiteral": {


                                    _StringLiteral(


                                        $,


                                        ($) => { temp.push(["StringLiteral", $]) },


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


                    const callback = ($: TImportDeclaration) => {


                        temp.push(["ImportDeclaration", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TImportDeclaration = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "StringLiteral": {


                                    _StringLiteral(


                                        $,


                                        ($) => { temp.push(["StringLiteral", $]) },


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


                        ($) => { temp.push(["TypeAliasDeclaration", $]) },


                    )


                    break


                }


                case "ExpressionStatement": {


                    _ExpressionStatement(


                        $,


                        ($) => { temp.push(["ExpressionStatement", $]) },


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


        callback: ($: TIdentifier) => void,


    ) {}


    function _TypeParameter(


        $: p.Node<Annotation>,


        callback: ($: TTypeParameter) => void,


    ) {


        const temp: TTypeParameter = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


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


        callback: ($: TMethodSignature) => void,


    ) {


        const temp: TMethodSignature = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "Parameter": {


                    _Parameter(


                        $,


                        ($) => { temp.push(["Parameter", $]) },


                    )


                    break


                }


                case "VoidKeyword": {


                    _VoidKeyword(


                        $,


                        ($) => { temp.push(["VoidKeyword", $]) },


                    )


                    break


                }


                case "TypeParameter": {


                    _TypeParameter(


                        $,


                        ($) => { temp.push(["TypeParameter", $]) },


                    )


                    break


                }


                case "ArrayType": {


                    _ArrayType(


                        $,


                        ($) => { temp.push(["ArrayType", $]) },


                    )


                    break


                }


                case "BooleanKeyword": {


                    _BooleanKeyword(


                        $,


                        ($) => { temp.push(["BooleanKeyword", $]) },


                    )


                    break


                }


                case "StringKeyword": {


                    _StringKeyword(


                        $,


                        ($) => { temp.push(["StringKeyword", $]) },


                    )


                    break


                }


                case "UnionType": {


                    _UnionType(


                        $,


                        ($) => { temp.push(["UnionType", $]) },


                    )


                    break


                }


                case "NumberKeyword": {


                    _NumberKeyword(


                        $,


                        ($) => { temp.push(["NumberKeyword", $]) },


                    )


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


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


        callback: ($: TParameter) => void,


    ) {


        const temp: TParameter = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "FunctionType": {


                    _FunctionType(


                        $,


                        ($) => { temp.push(["FunctionType", $]) },


                    )


                    break


                }


                case "NumberKeyword": {


                    _NumberKeyword(


                        $,


                        ($) => { temp.push(["NumberKeyword", $]) },


                    )


                    break


                }


                case "StringKeyword": {


                    _StringKeyword(


                        $,


                        ($) => { temp.push(["StringKeyword", $]) },


                    )


                    break


                }


                case "ArrayType": {


                    _ArrayType(


                        $,


                        ($) => { temp.push(["ArrayType", $]) },


                    )


                    break


                }


                case "AnyKeyword": {


                    _AnyKeyword(


                        $,


                        ($) => { temp.push(["AnyKeyword", $]) },


                    )


                    break


                }


                case "QuestionToken": {


                    _QuestionToken(


                        $,


                        ($) => { temp.push(["QuestionToken", $]) },


                    )


                    break


                }


                case "NeverKeyword": {


                    const callback = ($: TNeverKeyword) => {


                        temp.push(["NeverKeyword", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "TypeLiteral": {


                    _TypeLiteral(


                        $,


                        ($) => { temp.push(["TypeLiteral", $]) },


                    )


                    break


                }


                case "UnionType": {


                    _UnionType(


                        $,


                        ($) => { temp.push(["UnionType", $]) },


                    )


                    break


                }


                case "BooleanKeyword": {


                    _BooleanKeyword(


                        $,


                        ($) => { temp.push(["BooleanKeyword", $]) },


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


        callback: ($: TTypeReference) => void,


    ) {


        const temp: TTypeReference = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "QualifiedName": {


                    const callback = ($: TQualifiedName) => {


                        temp.push(["QualifiedName", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TQualifiedName = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "Identifier": {


                                    _Identifier(


                                        $,


                                        ($) => { temp.push(["Identifier", $]) },


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


                        ($) => { temp.push(["StringKeyword", $]) },


                    )


                    break


                }


                case "LiteralType": {


                    _LiteralType(


                        $,


                        ($) => { temp.push(["LiteralType", $]) },


                    )


                    break


                }


                case "TypeLiteral": {


                    _TypeLiteral(


                        $,


                        ($) => { temp.push(["TypeLiteral", $]) },


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


        callback: ($: TVoidKeyword) => void,


    ) {}


    function _FunctionType(


        $: p.Node<Annotation>,


        callback: ($: TFunctionType) => void,


    ) {


        const temp: TFunctionType = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Parameter": {


                    _Parameter(


                        $,


                        ($) => { temp.push(["Parameter", $]) },


                    )


                    break


                }


                case "VoidKeyword": {


                    _VoidKeyword(


                        $,


                        ($) => { temp.push(["VoidKeyword", $]) },


                    )


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "AnyKeyword": {


                    _AnyKeyword(


                        $,


                        ($) => { temp.push(["AnyKeyword", $]) },


                    )


                    break


                }


                case "UnionType": {


                    _UnionType(


                        $,


                        ($) => { temp.push(["UnionType", $]) },


                    )


                    break


                }


                case "BooleanKeyword": {


                    _BooleanKeyword(


                        $,


                        ($) => { temp.push(["BooleanKeyword", $]) },


                    )


                    break


                }


                case "ArrayType": {


                    _ArrayType(


                        $,


                        ($) => { temp.push(["ArrayType", $]) },


                    )


                    break


                }


                case "StringKeyword": {


                    _StringKeyword(


                        $,


                        ($) => { temp.push(["StringKeyword", $]) },


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


        callback: ($: TNumberKeyword) => void,


    ) {}


    function _ArrayType(


        $: p.Node<Annotation>,


        callback: ($: TArrayType) => void,


    ) {


        const temp: TArrayType = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "StringKeyword": {


                    _StringKeyword(


                        $,


                        ($) => { temp.push(["StringKeyword", $]) },


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


        callback: ($: TBooleanKeyword) => void,


    ) {}


    function _PropertySignature(


        $: p.Node<Annotation>,


        callback: ($: TPropertySignature) => void,


    ) {


        const temp: TPropertySignature = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "NumberKeyword": {


                    _NumberKeyword(


                        $,


                        ($) => { temp.push(["NumberKeyword", $]) },


                    )


                    break


                }


                case "ReadonlyKeyword": {


                    _ReadonlyKeyword(


                        $,


                        ($) => { temp.push(["ReadonlyKeyword", $]) },


                    )


                    break


                }


                case "StringKeyword": {


                    _StringKeyword(


                        $,


                        ($) => { temp.push(["StringKeyword", $]) },


                    )


                    break


                }


                case "FunctionType": {


                    _FunctionType(


                        $,


                        ($) => { temp.push(["FunctionType", $]) },


                    )


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "QuestionToken": {


                    _QuestionToken(


                        $,


                        ($) => { temp.push(["QuestionToken", $]) },


                    )


                    break


                }


                case "BooleanKeyword": {


                    _BooleanKeyword(


                        $,


                        ($) => { temp.push(["BooleanKeyword", $]) },


                    )


                    break


                }


                case "ArrayType": {


                    _ArrayType(


                        $,


                        ($) => { temp.push(["ArrayType", $]) },


                    )


                    break


                }


                case "UnionType": {


                    _UnionType(


                        $,


                        ($) => { temp.push(["UnionType", $]) },


                    )


                    break


                }


                case "LiteralType": {


                    _LiteralType(


                        $,


                        ($) => { temp.push(["LiteralType", $]) },


                    )


                    break


                }


                case "TypeLiteral": {


                    _TypeLiteral(


                        $,


                        ($) => { temp.push(["TypeLiteral", $]) },


                    )


                    break


                }


                case "StringLiteral": {


                    _StringLiteral(


                        $,


                        ($) => { temp.push(["StringLiteral", $]) },


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


        callback: ($: TStringKeyword) => void,


    ) {}


    function _UnionType(


        $: p.Node<Annotation>,


        callback: ($: TUnionType) => void,


    ) {


        const temp: TUnionType = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "UndefinedKeyword": {


                    const callback = ($: TUndefinedKeyword) => {


                        temp.push(["UndefinedKeyword", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "TupleType": {


                    _TupleType(


                        $,


                        ($) => { temp.push(["TupleType", $]) },


                    )


                    break


                }


                case "LiteralType": {


                    _LiteralType(


                        $,


                        ($) => { temp.push(["LiteralType", $]) },


                    )


                    break


                }


                case "StringKeyword": {


                    _StringKeyword(


                        $,


                        ($) => { temp.push(["StringKeyword", $]) },


                    )


                    break


                }


                case "BooleanKeyword": {


                    _BooleanKeyword(


                        $,


                        ($) => { temp.push(["BooleanKeyword", $]) },


                    )


                    break


                }


                case "ArrayType": {


                    _ArrayType(


                        $,


                        ($) => { temp.push(["ArrayType", $]) },


                    )


                    break


                }


                case "NumberKeyword": {


                    _NumberKeyword(


                        $,


                        ($) => { temp.push(["NumberKeyword", $]) },


                    )


                    break


                }


                case "ParenthesizedType": {


                    const callback = ($: TParenthesizedType) => {


                        temp.push(["ParenthesizedType", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TParenthesizedType = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "FunctionType": {


                                    _FunctionType(


                                        $,


                                        ($) => { temp.push(["FunctionType", $]) },


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


        callback: ($: TReadonlyKeyword) => void,


    ) {}


    function _FunctionDeclaration(


        $: p.Node<Annotation>,


        callback: ($: TFunctionDeclaration) => void,


    ) {


        const temp: TFunctionDeclaration = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "DeclareKeyword": {


                    _DeclareKeyword(


                        $,


                        ($) => { temp.push(["DeclareKeyword", $]) },


                    )


                    break


                }


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "Parameter": {


                    _Parameter(


                        $,


                        ($) => { temp.push(["Parameter", $]) },


                    )


                    break


                }


                case "BooleanKeyword": {


                    _BooleanKeyword(


                        $,


                        ($) => { temp.push(["BooleanKeyword", $]) },


                    )


                    break


                }


                case "TypeParameter": {


                    _TypeParameter(


                        $,


                        ($) => { temp.push(["TypeParameter", $]) },


                    )


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "Block": {


                    _Block(


                        $,


                        ($) => { temp.push(["Block", $]) },


                    )


                    break


                }


                case "ExportKeyword": {


                    _ExportKeyword(


                        $,


                        ($) => { temp.push(["ExportKeyword", $]) },


                    )


                    break


                }


                case "VoidKeyword": {


                    _VoidKeyword(


                        $,


                        ($) => { temp.push(["VoidKeyword", $]) },


                    )


                    break


                }


                case "UnionType": {


                    _UnionType(


                        $,


                        ($) => { temp.push(["UnionType", $]) },


                    )


                    break


                }


                case "StringKeyword": {


                    _StringKeyword(


                        $,


                        ($) => { temp.push(["StringKeyword", $]) },


                    )


                    break


                }


                case "ArrayType": {


                    _ArrayType(


                        $,


                        ($) => { temp.push(["ArrayType", $]) },


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


        callback: ($: TDeclareKeyword) => void,


    ) {}


    function _AnyKeyword(


        $: p.Node<Annotation>,


        callback: ($: TAnyKeyword) => void,


    ) {}


    function _QuestionToken(


        $: p.Node<Annotation>,


        callback: ($: TQuestionToken) => void,


    ) {}


    function _VariableStatement(


        $: p.Node<Annotation>,


        callback: ($: TVariableStatement) => void,


    ) {


        const temp: TVariableStatement = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "DeclareKeyword": {


                    _DeclareKeyword(


                        $,


                        ($) => { temp.push(["DeclareKeyword", $]) },


                    )


                    break


                }


                case "VariableDeclarationList": {


                    _VariableDeclarationList(


                        $,


                        ($) => { temp.push(["VariableDeclarationList", $]) },


                    )


                    break


                }


                case "ExportKeyword": {


                    _ExportKeyword(


                        $,


                        ($) => { temp.push(["ExportKeyword", $]) },


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


        callback: ($: TVariableDeclarationList) => void,


    ) {


        const temp: TVariableDeclarationList = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "VariableDeclaration": {


                    _VariableDeclaration(


                        $,


                        ($) => { temp.push(["VariableDeclaration", $]) },


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


        callback: ($: TVariableDeclaration) => void,


    ) {


        const temp: TVariableDeclaration = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "NumericLiteral": {


                    _NumericLiteral(


                        $,


                        ($) => { temp.push(["NumericLiteral", $]) },


                    )


                    break


                }


                case "FalseKeyword": {


                    _FalseKeyword(


                        $,


                        ($) => { temp.push(["FalseKeyword", $]) },


                    )


                    break


                }


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "StringLiteral": {


                    _StringLiteral(


                        $,


                        ($) => { temp.push(["StringLiteral", $]) },


                    )


                    break


                }


                case "ArrayType": {


                    _ArrayType(


                        $,


                        ($) => { temp.push(["ArrayType", $]) },


                    )


                    break


                }


                case "ArrayLiteralExpression": {


                    _ArrayLiteralExpression(


                        $,


                        ($) => { temp.push(["ArrayLiteralExpression", $]) },


                    )


                    break


                }


                case "PropertyAccessExpression": {


                    _PropertyAccessExpression(


                        $,


                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                    )


                    break


                }


                case "ElementAccessExpression": {


                    _ElementAccessExpression(


                        $,


                        ($) => { temp.push(["ElementAccessExpression", $]) },


                    )


                    break


                }


                case "ArrowFunction": {


                    _ArrowFunction(


                        $,


                        ($) => { temp.push(["ArrowFunction", $]) },


                    )


                    break


                }


                case "ObjectLiteralExpression": {


                    _ObjectLiteralExpression(


                        $,


                        ($) => { temp.push(["ObjectLiteralExpression", $]) },


                    )


                    break


                }


                case "PrefixUnaryExpression": {


                    _PrefixUnaryExpression(


                        $,


                        ($) => { temp.push(["PrefixUnaryExpression", $]) },


                    )


                    break


                }


                case "BinaryExpression": {


                    _BinaryExpression(


                        $,


                        ($) => { temp.push(["BinaryExpression", $]) },


                    )


                    break


                }


                case "ConditionalExpression": {


                    _ConditionalExpression(


                        $,


                        ($) => { temp.push(["ConditionalExpression", $]) },


                    )


                    break


                }


                case "NoSubstitutionTemplateLiteral": {


                    _NoSubstitutionTemplateLiteral(


                        $,


                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },


                    )


                    break


                }


                case "ParenthesizedExpression": {


                    _ParenthesizedExpression(


                        $,


                        ($) => { temp.push(["ParenthesizedExpression", $]) },


                    )


                    break


                }


                case "NumberKeyword": {


                    _NumberKeyword(


                        $,


                        ($) => { temp.push(["NumberKeyword", $]) },


                    )


                    break


                }


                case "UnionType": {


                    _UnionType(


                        $,


                        ($) => { temp.push(["UnionType", $]) },


                    )


                    break


                }


                case "NullKeyword": {


                    _NullKeyword(


                        $,


                        ($) => { temp.push(["NullKeyword", $]) },


                    )


                    break


                }


                case "TypeLiteral": {


                    _TypeLiteral(


                        $,


                        ($) => { temp.push(["TypeLiteral", $]) },


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


        callback: ($: TStringLiteral) => void,


    ) {}


    function _Block(


        $: p.Node<Annotation>,


        callback: ($: TBlock) => void,


    ) {


        const temp: TBlock = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "ThrowStatement": {


                    const callback = ($: TThrowStatement) => {


                        temp.push(["ThrowStatement", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TThrowStatement = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "NewExpression": {


                                    const callback = ($: TNewExpression) => {


                                        temp.push(["NewExpression", $])


                                    }


                                    pr.cc(null, (_) => {


                                        const temp: TNewExpression = []


                                        $.children.forEach(($) => {


                                            switch ($.kindName) {


                                                case "Identifier": {


                                                    _Identifier(


                                                        $,


                                                        ($) => { temp.push(["Identifier", $]) },


                                                    )


                                                    break


                                                }


                                                case "StringLiteral": {


                                                    _StringLiteral(


                                                        $,


                                                        ($) => { temp.push(["StringLiteral", $]) },


                                                    )


                                                    break


                                                }


                                                case "CallExpression": {


                                                    _CallExpression(


                                                        $,


                                                        ($) => { temp.push(["CallExpression", $]) },


                                                    )


                                                    break


                                                }


                                                case "TemplateExpression": {


                                                    _TemplateExpression(


                                                        $,


                                                        ($) => { temp.push(["TemplateExpression", $]) },


                                                    )


                                                    break


                                                }


                                                case "NoSubstitutionTemplateLiteral": {


                                                    _NoSubstitutionTemplateLiteral(


                                                        $,


                                                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },


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


                        ($) => { temp.push(["ReturnStatement", $]) },


                    )


                    break


                }


                case "VariableStatement": {


                    _VariableStatement(


                        $,


                        ($) => { temp.push(["VariableStatement", $]) },


                    )


                    break


                }


                case "FunctionDeclaration": {


                    _FunctionDeclaration(


                        $,


                        ($) => { temp.push(["FunctionDeclaration", $]) },


                    )


                    break


                }


                case "IfStatement": {


                    _IfStatement(


                        $,


                        ($) => { temp.push(["IfStatement", $]) },


                    )


                    break


                }


                case "ExpressionStatement": {


                    _ExpressionStatement(


                        $,


                        ($) => { temp.push(["ExpressionStatement", $]) },


                    )


                    break


                }


                case "SwitchStatement": {


                    const callback = ($: TSwitchStatement) => {


                        temp.push(["SwitchStatement", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TSwitchStatement = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "ElementAccessExpression": {


                                    _ElementAccessExpression(


                                        $,


                                        ($) => { temp.push(["ElementAccessExpression", $]) },


                                    )


                                    break


                                }


                                case "CaseBlock": {


                                    const callback = ($: TCaseBlock) => {


                                        temp.push(["CaseBlock", $])


                                    }


                                    pr.cc(null, (_) => {


                                        const temp: TCaseBlock = []


                                        $.children.forEach(($) => {


                                            switch ($.kindName) {


                                                case "CaseClause": {


                                                    const callback = ($: TCaseClause) => {


                                                        temp.push(["CaseClause", $])


                                                    }


                                                    pr.cc(null, (_) => {


                                                        const temp: TCaseClause = []


                                                        $.children.forEach(($) => {


                                                            switch ($.kindName) {


                                                                case "StringLiteral": {


                                                                    _StringLiteral(


                                                                        $,


                                                                        ($) => { temp.push(["StringLiteral", $]) },


                                                                    )


                                                                    break


                                                                }


                                                                case "ExpressionStatement": {


                                                                    _ExpressionStatement(


                                                                        $,


                                                                        ($) => { temp.push(["ExpressionStatement", $]) },


                                                                    )


                                                                    break


                                                                }


                                                                case "BreakStatement": {


                                                                    _BreakStatement(


                                                                        $,


                                                                        ($) => { temp.push(["BreakStatement", $]) },


                                                                    )


                                                                    break


                                                                }


                                                                case "Block": {


                                                                    _Block(


                                                                        $,


                                                                        ($) => { temp.push(["Block", $]) },


                                                                    )


                                                                    break


                                                                }


                                                                case "ReturnStatement": {


                                                                    _ReturnStatement(


                                                                        $,


                                                                        ($) => { temp.push(["ReturnStatement", $]) },


                                                                    )


                                                                    break


                                                                }


                                                                case "VariableStatement": {


                                                                    _VariableStatement(


                                                                        $,


                                                                        ($) => { temp.push(["VariableStatement", $]) },


                                                                    )


                                                                    break


                                                                }


                                                                case "IfStatement": {


                                                                    _IfStatement(


                                                                        $,


                                                                        ($) => { temp.push(["IfStatement", $]) },


                                                                    )


                                                                    break


                                                                }


                                                                case "PropertyAccessExpression": {


                                                                    _PropertyAccessExpression(


                                                                        $,


                                                                        ($) => { temp.push(["PropertyAccessExpression", $]) },


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


                                                    const callback = ($: TDefaultClause) => {


                                                        temp.push(["DefaultClause", $])


                                                    }


                                                    pr.cc(null, (_) => {


                                                        const temp: TDefaultClause = []


                                                        $.children.forEach(($) => {


                                                            switch ($.kindName) {


                                                                case "ExpressionStatement": {


                                                                    _ExpressionStatement(


                                                                        $,


                                                                        ($) => { temp.push(["ExpressionStatement", $]) },


                                                                    )


                                                                    break


                                                                }


                                                                case "ReturnStatement": {


                                                                    _ReturnStatement(


                                                                        $,


                                                                        ($) => { temp.push(["ReturnStatement", $]) },


                                                                    )


                                                                    break


                                                                }


                                                                case "Block": {


                                                                    _Block(


                                                                        $,


                                                                        ($) => { temp.push(["Block", $]) },


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


                                        ($) => { temp.push(["Identifier", $]) },


                                    )


                                    break


                                }


                                case "PropertyAccessExpression": {


                                    _PropertyAccessExpression(


                                        $,


                                        ($) => { temp.push(["PropertyAccessExpression", $]) },


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


                    const callback = ($: TTryStatement) => {


                        temp.push(["TryStatement", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TTryStatement = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "Block": {


                                    _Block(


                                        $,


                                        ($) => { temp.push(["Block", $]) },


                                    )


                                    break


                                }


                                case "CatchClause": {


                                    const callback = ($: TCatchClause) => {


                                        temp.push(["CatchClause", $])


                                    }


                                    pr.cc(null, (_) => {


                                        const temp: TCatchClause = []


                                        $.children.forEach(($) => {


                                            switch ($.kindName) {


                                                case "VariableDeclaration": {


                                                    _VariableDeclaration(


                                                        $,


                                                        ($) => { temp.push(["VariableDeclaration", $]) },


                                                    )


                                                    break


                                                }


                                                case "Block": {


                                                    _Block(


                                                        $,


                                                        ($) => { temp.push(["Block", $]) },


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


                        ($) => { temp.push(["BreakStatement", $]) },


                    )


                    break


                }


                case "TypeAliasDeclaration": {


                    _TypeAliasDeclaration(


                        $,


                        ($) => { temp.push(["TypeAliasDeclaration", $]) },


                    )


                    break


                }


                case "ForStatement": {


                    const callback = ($: TForStatement) => {


                        temp.push(["ForStatement", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TForStatement = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "VariableDeclarationList": {


                                    _VariableDeclarationList(


                                        $,


                                        ($) => { temp.push(["VariableDeclarationList", $]) },


                                    )


                                    break


                                }


                                case "BinaryExpression": {


                                    _BinaryExpression(


                                        $,


                                        ($) => { temp.push(["BinaryExpression", $]) },


                                    )


                                    break


                                }


                                case "Block": {


                                    _Block(


                                        $,


                                        ($) => { temp.push(["Block", $]) },


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


                        ($) => { temp.push(["WhileStatement", $]) },


                    )


                    break


                }


                case "LabeledStatement": {


                    const callback = ($: TLabeledStatement) => {


                        temp.push(["LabeledStatement", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TLabeledStatement = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "Identifier": {


                                    _Identifier(


                                        $,


                                        ($) => { temp.push(["Identifier", $]) },


                                    )


                                    break


                                }


                                case "WhileStatement": {


                                    _WhileStatement(


                                        $,


                                        ($) => { temp.push(["WhileStatement", $]) },


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


        callback: ($: TReturnStatement) => void,


    ) {


        const temp: TReturnStatement = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "ObjectLiteralExpression": {


                    _ObjectLiteralExpression(


                        $,


                        ($) => { temp.push(["ObjectLiteralExpression", $]) },


                    )


                    break


                }


                case "TemplateExpression": {


                    _TemplateExpression(


                        $,


                        ($) => { temp.push(["TemplateExpression", $]) },


                    )


                    break


                }


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "ArrayLiteralExpression": {


                    _ArrayLiteralExpression(


                        $,


                        ($) => { temp.push(["ArrayLiteralExpression", $]) },


                    )


                    break


                }


                case "NullKeyword": {


                    _NullKeyword(


                        $,


                        ($) => { temp.push(["NullKeyword", $]) },


                    )


                    break


                }


                case "ArrowFunction": {


                    _ArrowFunction(


                        $,


                        ($) => { temp.push(["ArrowFunction", $]) },


                    )


                    break


                }


                case "PropertyAccessExpression": {


                    _PropertyAccessExpression(


                        $,


                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                    )


                    break


                }


                case "BinaryExpression": {


                    _BinaryExpression(


                        $,


                        ($) => { temp.push(["BinaryExpression", $]) },


                    )


                    break


                }


                case "PrefixUnaryExpression": {


                    _PrefixUnaryExpression(


                        $,


                        ($) => { temp.push(["PrefixUnaryExpression", $]) },


                    )


                    break


                }


                case "ConditionalExpression": {


                    _ConditionalExpression(


                        $,


                        ($) => { temp.push(["ConditionalExpression", $]) },


                    )


                    break


                }


                case "ElementAccessExpression": {


                    _ElementAccessExpression(


                        $,


                        ($) => { temp.push(["ElementAccessExpression", $]) },


                    )


                    break


                }


                case "NoSubstitutionTemplateLiteral": {


                    _NoSubstitutionTemplateLiteral(


                        $,


                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },


                    )


                    break


                }


                case "StringLiteral": {


                    _StringLiteral(


                        $,


                        ($) => { temp.push(["StringLiteral", $]) },


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


        callback: ($: TCallExpression) => void,


    ) {


        const temp: TCallExpression = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "PropertyAccessExpression": {


                    _PropertyAccessExpression(


                        $,


                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                    )


                    break


                }


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "ArrowFunction": {


                    _ArrowFunction(


                        $,


                        ($) => { temp.push(["ArrowFunction", $]) },


                    )


                    break


                }


                case "ElementAccessExpression": {


                    _ElementAccessExpression(


                        $,


                        ($) => { temp.push(["ElementAccessExpression", $]) },


                    )


                    break


                }


                case "ArrayLiteralExpression": {


                    _ArrayLiteralExpression(


                        $,


                        ($) => { temp.push(["ArrayLiteralExpression", $]) },


                    )


                    break


                }


                case "NullKeyword": {


                    _NullKeyword(


                        $,


                        ($) => { temp.push(["NullKeyword", $]) },


                    )


                    break


                }


                case "ObjectLiteralExpression": {


                    _ObjectLiteralExpression(


                        $,


                        ($) => { temp.push(["ObjectLiteralExpression", $]) },


                    )


                    break


                }


                case "StringLiteral": {


                    _StringLiteral(


                        $,


                        ($) => { temp.push(["StringLiteral", $]) },


                    )


                    break


                }


                case "BinaryExpression": {


                    _BinaryExpression(


                        $,


                        ($) => { temp.push(["BinaryExpression", $]) },


                    )


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "TemplateExpression": {


                    _TemplateExpression(


                        $,


                        ($) => { temp.push(["TemplateExpression", $]) },


                    )


                    break


                }


                case "ConditionalExpression": {


                    _ConditionalExpression(


                        $,


                        ($) => { temp.push(["ConditionalExpression", $]) },


                    )


                    break


                }


                case "NoSubstitutionTemplateLiteral": {


                    _NoSubstitutionTemplateLiteral(


                        $,


                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },


                    )


                    break


                }


                case "ParenthesizedExpression": {


                    _ParenthesizedExpression(


                        $,


                        ($) => { temp.push(["ParenthesizedExpression", $]) },


                    )


                    break


                }


                case "NumericLiteral": {


                    _NumericLiteral(


                        $,


                        ($) => { temp.push(["NumericLiteral", $]) },


                    )


                    break


                }


                case "TrueKeyword": {


                    _TrueKeyword(


                        $,


                        ($) => { temp.push(["TrueKeyword", $]) },


                    )


                    break


                }


                case "FalseKeyword": {


                    _FalseKeyword(


                        $,


                        ($) => { temp.push(["FalseKeyword", $]) },


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


        callback: ($: TExportKeyword) => void,


    ) {}


    function _NumericLiteral(


        $: p.Node<Annotation>,


        callback: ($: TNumericLiteral) => void,


    ) {}


    function _FalseKeyword(


        $: p.Node<Annotation>,


        callback: ($: TFalseKeyword) => void,


    ) {}


    function _IfStatement(


        $: p.Node<Annotation>,


        callback: ($: TIfStatement) => void,


    ) {


        const temp: TIfStatement = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "BinaryExpression": {


                    _BinaryExpression(


                        $,


                        ($) => { temp.push(["BinaryExpression", $]) },


                    )


                    break


                }


                case "Block": {


                    _Block(


                        $,


                        ($) => { temp.push(["Block", $]) },


                    )


                    break


                }


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "PropertyAccessExpression": {


                    _PropertyAccessExpression(


                        $,


                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                    )


                    break


                }


                case "PrefixUnaryExpression": {


                    _PrefixUnaryExpression(


                        $,


                        ($) => { temp.push(["PrefixUnaryExpression", $]) },


                    )


                    break


                }


                case "ReturnStatement": {


                    _ReturnStatement(


                        $,


                        ($) => { temp.push(["ReturnStatement", $]) },


                    )


                    break


                }


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "IfStatement": {


                    _IfStatement(


                        $,


                        ($) => { temp.push(["IfStatement", $]) },


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


        callback: ($: TBinaryExpression) => void,


    ) {


        const temp: TBinaryExpression = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "BinaryExpression": {


                    _BinaryExpression(


                        $,


                        ($) => { temp.push(["BinaryExpression", $]) },


                    )


                    break


                }


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "EqualsEqualsEqualsToken": {


                    const callback = ($: TEqualsEqualsEqualsToken) => {


                        temp.push(["EqualsEqualsEqualsToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "NumericLiteral": {


                    _NumericLiteral(


                        $,


                        ($) => { temp.push(["NumericLiteral", $]) },


                    )


                    break


                }


                case "AmpersandAmpersandToken": {


                    const callback = ($: TAmpersandAmpersandToken) => {


                        temp.push(["AmpersandAmpersandToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "PlusEqualsToken": {


                    const callback = ($: TPlusEqualsToken) => {


                        temp.push(["PlusEqualsToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "MinusEqualsToken": {


                    const callback = ($: TMinusEqualsToken) => {


                        temp.push(["MinusEqualsToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "EqualsToken": {


                    const callback = ($: TEqualsToken) => {


                        temp.push(["EqualsToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "TrueKeyword": {


                    _TrueKeyword(


                        $,


                        ($) => { temp.push(["TrueKeyword", $]) },


                    )


                    break


                }


                case "ElementAccessExpression": {


                    _ElementAccessExpression(


                        $,


                        ($) => { temp.push(["ElementAccessExpression", $]) },


                    )


                    break


                }


                case "ExclamationEqualsEqualsToken": {


                    const callback = ($: TExclamationEqualsEqualsToken) => {


                        temp.push(["ExclamationEqualsEqualsToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "StringLiteral": {


                    _StringLiteral(


                        $,


                        ($) => { temp.push(["StringLiteral", $]) },


                    )


                    break


                }


                case "PlusToken": {


                    const callback = ($: TPlusToken) => {


                        temp.push(["PlusToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "PropertyAccessExpression": {


                    _PropertyAccessExpression(


                        $,


                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                    )


                    break


                }


                case "NullKeyword": {


                    _NullKeyword(


                        $,


                        ($) => { temp.push(["NullKeyword", $]) },


                    )


                    break


                }


                case "ParenthesizedExpression": {


                    _ParenthesizedExpression(


                        $,


                        ($) => { temp.push(["ParenthesizedExpression", $]) },


                    )


                    break


                }


                case "ObjectLiteralExpression": {


                    _ObjectLiteralExpression(


                        $,


                        ($) => { temp.push(["ObjectLiteralExpression", $]) },


                    )


                    break


                }


                case "MinusToken": {


                    const callback = ($: TMinusToken) => {


                        temp.push(["MinusToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "GreaterThanToken": {


                    const callback = ($: TGreaterThanToken) => {


                        temp.push(["GreaterThanToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "FalseKeyword": {


                    _FalseKeyword(


                        $,


                        ($) => { temp.push(["FalseKeyword", $]) },


                    )


                    break


                }


                case "LessThanToken": {


                    const callback = ($: TLessThanToken) => {


                        temp.push(["LessThanToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "BarBarToken": {


                    const callback = ($: TBarBarToken) => {


                        temp.push(["BarBarToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "ArrayLiteralExpression": {


                    _ArrayLiteralExpression(


                        $,


                        ($) => { temp.push(["ArrayLiteralExpression", $]) },


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


        callback: ($: TExpressionStatement) => void,


    ) {


        const temp: TExpressionStatement = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "BinaryExpression": {


                    _BinaryExpression(


                        $,


                        ($) => { temp.push(["BinaryExpression", $]) },


                    )


                    break


                }


                case "PostfixUnaryExpression": {


                    const callback = ($: TPostfixUnaryExpression) => {


                        temp.push(["PostfixUnaryExpression", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TPostfixUnaryExpression = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "Identifier": {


                                    _Identifier(


                                        $,


                                        ($) => { temp.push(["Identifier", $]) },


                                    )


                                    break


                                }


                                case "PropertyAccessExpression": {


                                    _PropertyAccessExpression(


                                        $,


                                        ($) => { temp.push(["PropertyAccessExpression", $]) },


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


        callback: ($: TObjectLiteralExpression) => void,


    ) {


        const temp: TObjectLiteralExpression = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "PropertyAssignment": {


                    const callback = ($: TPropertyAssignment) => {


                        temp.push(["PropertyAssignment", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TPropertyAssignment = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "Identifier": {


                                    _Identifier(


                                        $,


                                        ($) => { temp.push(["Identifier", $]) },


                                    )


                                    break


                                }


                                case "ArrowFunction": {


                                    _ArrowFunction(


                                        $,


                                        ($) => { temp.push(["ArrowFunction", $]) },


                                    )


                                    break


                                }


                                case "PropertyAccessExpression": {


                                    _PropertyAccessExpression(


                                        $,


                                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                                    )


                                    break


                                }


                                case "StringLiteral": {


                                    _StringLiteral(


                                        $,


                                        ($) => { temp.push(["StringLiteral", $]) },


                                    )


                                    break


                                }


                                case "ElementAccessExpression": {


                                    _ElementAccessExpression(


                                        $,


                                        ($) => { temp.push(["ElementAccessExpression", $]) },


                                    )


                                    break


                                }


                                case "ObjectLiteralExpression": {


                                    _ObjectLiteralExpression(


                                        $,


                                        ($) => { temp.push(["ObjectLiteralExpression", $]) },


                                    )


                                    break


                                }


                                case "CallExpression": {


                                    _CallExpression(


                                        $,


                                        ($) => { temp.push(["CallExpression", $]) },


                                    )


                                    break


                                }


                                case "NullKeyword": {


                                    _NullKeyword(


                                        $,


                                        ($) => { temp.push(["NullKeyword", $]) },


                                    )


                                    break


                                }


                                case "PrefixUnaryExpression": {


                                    _PrefixUnaryExpression(


                                        $,


                                        ($) => { temp.push(["PrefixUnaryExpression", $]) },


                                    )


                                    break


                                }


                                case "FalseKeyword": {


                                    _FalseKeyword(


                                        $,


                                        ($) => { temp.push(["FalseKeyword", $]) },


                                    )


                                    break


                                }


                                case "TemplateExpression": {


                                    _TemplateExpression(


                                        $,


                                        ($) => { temp.push(["TemplateExpression", $]) },


                                    )


                                    break


                                }


                                case "TrueKeyword": {


                                    _TrueKeyword(


                                        $,


                                        ($) => { temp.push(["TrueKeyword", $]) },


                                    )


                                    break


                                }


                                case "ConditionalExpression": {


                                    _ConditionalExpression(


                                        $,


                                        ($) => { temp.push(["ConditionalExpression", $]) },


                                    )


                                    break


                                }


                                case "ArrayLiteralExpression": {


                                    _ArrayLiteralExpression(


                                        $,


                                        ($) => { temp.push(["ArrayLiteralExpression", $]) },


                                    )


                                    break


                                }


                                case "NoSubstitutionTemplateLiteral": {


                                    _NoSubstitutionTemplateLiteral(


                                        $,


                                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },


                                    )


                                    break


                                }


                                case "BinaryExpression": {


                                    _BinaryExpression(


                                        $,


                                        ($) => { temp.push(["BinaryExpression", $]) },


                                    )


                                    break


                                }


                                case "ParenthesizedExpression": {


                                    _ParenthesizedExpression(


                                        $,


                                        ($) => { temp.push(["ParenthesizedExpression", $]) },


                                    )


                                    break


                                }


                                case "NumericLiteral": {


                                    _NumericLiteral(


                                        $,


                                        ($) => { temp.push(["NumericLiteral", $]) },


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


        callback: ($: TArrowFunction) => void,


    ) {


        const temp: TArrowFunction = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Parameter": {


                    _Parameter(


                        $,


                        ($) => { temp.push(["Parameter", $]) },


                    )


                    break


                }


                case "EqualsGreaterThanToken": {


                    const callback = ($: TEqualsGreaterThanToken) => {


                        temp.push(["EqualsGreaterThanToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "Block": {


                    _Block(


                        $,


                        ($) => { temp.push(["Block", $]) },


                    )


                    break


                }


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "BinaryExpression": {


                    _BinaryExpression(


                        $,


                        ($) => { temp.push(["BinaryExpression", $]) },


                    )


                    break


                }


                case "StringKeyword": {


                    _StringKeyword(


                        $,


                        ($) => { temp.push(["StringKeyword", $]) },


                    )


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "VoidKeyword": {


                    _VoidKeyword(


                        $,


                        ($) => { temp.push(["VoidKeyword", $]) },


                    )


                    break


                }


                case "UnionType": {


                    _UnionType(


                        $,


                        ($) => { temp.push(["UnionType", $]) },


                    )


                    break


                }


                case "TemplateExpression": {


                    _TemplateExpression(


                        $,


                        ($) => { temp.push(["TemplateExpression", $]) },


                    )


                    break


                }


                case "PropertyAccessExpression": {


                    _PropertyAccessExpression(


                        $,


                        ($) => { temp.push(["PropertyAccessExpression", $]) },


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


        callback: ($: TPropertyAccessExpression) => void,


    ) {


        const temp: TPropertyAccessExpression = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "PropertyAccessExpression": {


                    _PropertyAccessExpression(


                        $,


                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                    )


                    break


                }


                case "ElementAccessExpression": {


                    _ElementAccessExpression(


                        $,


                        ($) => { temp.push(["ElementAccessExpression", $]) },


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


        callback: ($: TElementAccessExpression) => void,


    ) {


        const temp: TElementAccessExpression = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "NumericLiteral": {


                    _NumericLiteral(


                        $,


                        ($) => { temp.push(["NumericLiteral", $]) },


                    )


                    break


                }


                case "PropertyAccessExpression": {


                    _PropertyAccessExpression(


                        $,


                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                    )


                    break


                }


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "StringLiteral": {


                    _StringLiteral(


                        $,


                        ($) => { temp.push(["StringLiteral", $]) },


                    )


                    break


                }


                case "ElementAccessExpression": {


                    _ElementAccessExpression(


                        $,


                        ($) => { temp.push(["ElementAccessExpression", $]) },


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


        callback: ($: TArrayLiteralExpression) => void,


    ) {


        const temp: TArrayLiteralExpression = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "StringLiteral": {


                    _StringLiteral(


                        $,


                        ($) => { temp.push(["StringLiteral", $]) },


                    )


                    break


                }


                case "ObjectLiteralExpression": {


                    _ObjectLiteralExpression(


                        $,


                        ($) => { temp.push(["ObjectLiteralExpression", $]) },


                    )


                    break


                }


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "PropertyAccessExpression": {


                    _PropertyAccessExpression(


                        $,


                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                    )


                    break


                }


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "BinaryExpression": {


                    _BinaryExpression(


                        $,


                        ($) => { temp.push(["BinaryExpression", $]) },


                    )


                    break


                }


                case "NullKeyword": {


                    _NullKeyword(


                        $,


                        ($) => { temp.push(["NullKeyword", $]) },


                    )


                    break


                }


                case "ConditionalExpression": {


                    _ConditionalExpression(


                        $,


                        ($) => { temp.push(["ConditionalExpression", $]) },


                    )


                    break


                }


                case "TemplateExpression": {


                    _TemplateExpression(


                        $,


                        ($) => { temp.push(["TemplateExpression", $]) },


                    )


                    break


                }


                case "ArrayLiteralExpression": {


                    _ArrayLiteralExpression(


                        $,


                        ($) => { temp.push(["ArrayLiteralExpression", $]) },


                    )


                    break


                }


                case "NumericLiteral": {


                    _NumericLiteral(


                        $,


                        ($) => { temp.push(["NumericLiteral", $]) },


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


        callback: ($: TBreakStatement) => void,


    ) {


        const temp: TBreakStatement = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


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


        callback: ($: TNullKeyword) => void,


    ) {}


    function _TrueKeyword(


        $: p.Node<Annotation>,


        callback: ($: TTrueKeyword) => void,


    ) {}


    function _TypeAliasDeclaration(


        $: p.Node<Annotation>,


        callback: ($: TTypeAliasDeclaration) => void,


    ) {


        const temp: TTypeAliasDeclaration = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "ExportKeyword": {


                    _ExportKeyword(


                        $,


                        ($) => { temp.push(["ExportKeyword", $]) },


                    )


                    break


                }


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "TypeLiteral": {


                    _TypeLiteral(


                        $,


                        ($) => { temp.push(["TypeLiteral", $]) },


                    )


                    break


                }


                case "TypeParameter": {


                    _TypeParameter(


                        $,


                        ($) => { temp.push(["TypeParameter", $]) },


                    )


                    break


                }


                case "TupleType": {


                    _TupleType(


                        $,


                        ($) => { temp.push(["TupleType", $]) },


                    )


                    break


                }


                case "UnionType": {


                    _UnionType(


                        $,


                        ($) => { temp.push(["UnionType", $]) },


                    )


                    break


                }


                case "ArrayType": {


                    _ArrayType(


                        $,


                        ($) => { temp.push(["ArrayType", $]) },


                    )


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "FunctionType": {


                    _FunctionType(


                        $,


                        ($) => { temp.push(["FunctionType", $]) },


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


        callback: ($: TTypeLiteral) => void,


    ) {


        const temp: TTypeLiteral = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "PropertySignature": {


                    _PropertySignature(


                        $,


                        ($) => { temp.push(["PropertySignature", $]) },


                    )


                    break


                }


                case "MethodSignature": {


                    _MethodSignature(


                        $,


                        ($) => { temp.push(["MethodSignature", $]) },


                    )


                    break


                }


                case "IndexSignature": {


                    const callback = ($: TIndexSignature) => {


                        temp.push(["IndexSignature", $])


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


        callback: ($: TTemplateExpression) => void,


    ) {


        const temp: TTemplateExpression = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "TemplateHead": {


                    const callback = ($: TTemplateHead) => {


                        temp.push(["TemplateHead", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "TemplateSpan": {


                    const callback = ($: TTemplateSpan) => {


                        temp.push(["TemplateSpan", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TTemplateSpan = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "PropertyAccessExpression": {


                                    _PropertyAccessExpression(


                                        $,


                                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                                    )


                                    break


                                }


                                case "TemplateMiddle": {


                                    const callback = ($: TTemplateMiddle) => {


                                        temp.push(["TemplateMiddle", $])


                                    }


                                    pr.cc(null, (_) => {})


                                    break


                                }


                                case "TemplateTail": {


                                    const callback = ($: TTemplateTail) => {


                                        temp.push(["TemplateTail", $])


                                    }


                                    pr.cc(null, (_) => {})


                                    break


                                }


                                case "Identifier": {


                                    _Identifier(


                                        $,


                                        ($) => { temp.push(["Identifier", $]) },


                                    )


                                    break


                                }


                                case "CallExpression": {


                                    _CallExpression(


                                        $,


                                        ($) => { temp.push(["CallExpression", $]) },


                                    )


                                    break


                                }


                                case "ConditionalExpression": {


                                    _ConditionalExpression(


                                        $,


                                        ($) => { temp.push(["ConditionalExpression", $]) },


                                    )


                                    break


                                }


                                case "ElementAccessExpression": {


                                    _ElementAccessExpression(


                                        $,


                                        ($) => { temp.push(["ElementAccessExpression", $]) },


                                    )


                                    break


                                }


                                case "BinaryExpression": {


                                    _BinaryExpression(


                                        $,


                                        ($) => { temp.push(["BinaryExpression", $]) },


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


        callback: ($: TPrefixUnaryExpression) => void,


    ) {


        const temp: TPrefixUnaryExpression = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "PropertyAccessExpression": {


                    _PropertyAccessExpression(


                        $,


                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                    )


                    break


                }


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "NumericLiteral": {


                    _NumericLiteral(


                        $,


                        ($) => { temp.push(["NumericLiteral", $]) },


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


        callback: ($: TTupleType) => void,


    ) {


        const temp: TTupleType = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "OptionalType": {


                    const callback = ($: TOptionalType) => {


                        temp.push(["OptionalType", $])


                    }


                    pr.cc(null, (_) => {


                        const temp: TOptionalType = []


                        $.children.forEach(($) => {


                            switch ($.kindName) {


                                case "NumberKeyword": {


                                    _NumberKeyword(


                                        $,


                                        ($) => { temp.push(["NumberKeyword", $]) },


                                    )


                                    break


                                }


                                case "TypeReference": {


                                    _TypeReference(


                                        $,


                                        ($) => { temp.push(["TypeReference", $]) },


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


                        ($) => { temp.push(["LiteralType", $]) },


                    )


                    break


                }


                case "StringKeyword": {


                    _StringKeyword(


                        $,


                        ($) => { temp.push(["StringKeyword", $]) },


                    )


                    break


                }


                case "UnionType": {


                    _UnionType(


                        $,


                        ($) => { temp.push(["UnionType", $]) },


                    )


                    break


                }


                case "TypeReference": {


                    _TypeReference(


                        $,


                        ($) => { temp.push(["TypeReference", $]) },


                    )


                    break


                }


                case "TypeLiteral": {


                    _TypeLiteral(


                        $,


                        ($) => { temp.push(["TypeLiteral", $]) },


                    )


                    break


                }


                case "ArrayType": {


                    _ArrayType(


                        $,


                        ($) => { temp.push(["ArrayType", $]) },


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


        callback: ($: TLiteralType) => void,


    ) {


        const temp: TLiteralType = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "StringLiteral": {


                    _StringLiteral(


                        $,


                        ($) => { temp.push(["StringLiteral", $]) },


                    )


                    break


                }


                case "NullKeyword": {


                    _NullKeyword(


                        $,


                        ($) => { temp.push(["NullKeyword", $]) },


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


        callback: ($: TConditionalExpression) => void,


    ) {


        const temp: TConditionalExpression = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "BinaryExpression": {


                    _BinaryExpression(


                        $,


                        ($) => { temp.push(["BinaryExpression", $]) },


                    )


                    break


                }


                case "QuestionToken": {


                    _QuestionToken(


                        $,


                        ($) => { temp.push(["QuestionToken", $]) },


                    )


                    break


                }


                case "NullKeyword": {


                    _NullKeyword(


                        $,


                        ($) => { temp.push(["NullKeyword", $]) },


                    )


                    break


                }


                case "ColonToken": {


                    const callback = ($: TColonToken) => {


                        temp.push(["ColonToken", $])


                    }


                    pr.cc(null, (_) => {})


                    break


                }


                case "PropertyAccessExpression": {


                    _PropertyAccessExpression(


                        $,


                        ($) => { temp.push(["PropertyAccessExpression", $]) },


                    )


                    break


                }


                case "StringLiteral": {


                    _StringLiteral(


                        $,


                        ($) => { temp.push(["StringLiteral", $]) },


                    )


                    break


                }


                case "TemplateExpression": {


                    _TemplateExpression(


                        $,


                        ($) => { temp.push(["TemplateExpression", $]) },


                    )


                    break


                }


                case "CallExpression": {


                    _CallExpression(


                        $,


                        ($) => { temp.push(["CallExpression", $]) },


                    )


                    break


                }


                case "NoSubstitutionTemplateLiteral": {


                    _NoSubstitutionTemplateLiteral(


                        $,


                        ($) => { temp.push(["NoSubstitutionTemplateLiteral", $]) },


                    )


                    break


                }


                case "ConditionalExpression": {


                    _ConditionalExpression(


                        $,


                        ($) => { temp.push(["ConditionalExpression", $]) },


                    )


                    break


                }


                case "Identifier": {


                    _Identifier(


                        $,


                        ($) => { temp.push(["Identifier", $]) },


                    )


                    break


                }


                case "ObjectLiteralExpression": {


                    _ObjectLiteralExpression(


                        $,


                        ($) => { temp.push(["ObjectLiteralExpression", $]) },


                    )


                    break


                }


                case "ArrayLiteralExpression": {


                    _ArrayLiteralExpression(


                        $,


                        ($) => { temp.push(["ArrayLiteralExpression", $]) },


                    )


                    break


                }


                case "ElementAccessExpression": {


                    _ElementAccessExpression(


                        $,


                        ($) => { temp.push(["ElementAccessExpression", $]) },


                    )


                    break


                }


                case "ArrowFunction": {


                    _ArrowFunction(


                        $,


                        ($) => { temp.push(["ArrowFunction", $]) },


                    )


                    break


                }


                case "NumericLiteral": {


                    _NumericLiteral(


                        $,


                        ($) => { temp.push(["NumericLiteral", $]) },


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


        callback: ($: TParenthesizedExpression) => void,


    ) {


        const temp: TParenthesizedExpression = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "ConditionalExpression": {


                    _ConditionalExpression(


                        $,


                        ($) => { temp.push(["ConditionalExpression", $]) },


                    )


                    break


                }


                case "BinaryExpression": {


                    _BinaryExpression(


                        $,


                        ($) => { temp.push(["BinaryExpression", $]) },


                    )


                    break


                }


                case "ArrowFunction": {


                    _ArrowFunction(


                        $,


                        ($) => { temp.push(["ArrowFunction", $]) },


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


        callback: ($: TNoSubstitutionTemplateLiteral) => void,


    ) {}


    function _WhileStatement(


        $: p.Node<Annotation>,


        callback: ($: TWhileStatement) => void,


    ) {


        const temp: TWhileStatement = []


        $.children.forEach(($) => {


            switch ($.kindName) {


                case "TrueKeyword": {


                    _TrueKeyword(


                        $,


                        ($) => { temp.push(["TrueKeyword", $]) },


                    )


                    break


                }


                case "Block": {


                    _Block(


                        $,


                        ($) => { temp.push(["Block", $]) },


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


export type Root = TSourceFile
