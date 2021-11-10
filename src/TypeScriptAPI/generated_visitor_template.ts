import * as pr from "pareto-runtime"
import * as api from "./generated_ts_api"

export function visit<Annotation>(
    $: api.TSourceFile,
    getLineInfo: (annotation: Annotation) => string,
): void {
    function _SourceFile(
        $: api.TSourceFile,
    ) {
        console.log(`SourceFile`)
        $.forEach(($) => {
            switch ($[0]) {
                case "InterfaceDeclaration": {
                    pr.cc($[1], ($) => {
                        console.log(`InterfaceDeclaration`)
                        //FIXME

                    })
                    break
                }
                case "FunctionDeclaration": {
                    pr.cc($[1], ($) => {
                        _FunctionDeclaration($)
                    })
                    break
                }
                case "VariableStatement": {
                    pr.cc($[1], ($) => {
                        _VariableStatement($)
                    })
                    break
                }
                case "EndOfFileToken": {
                    pr.cc($[1], ($) => {
                        console.log(`EndOfFileToken`)
                        //FIXME

                    })
                    break
                }
                case "ExportDeclaration": {
                    pr.cc($[1], ($) => {
                        console.log(`ExportDeclaration`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "StringLiteral": {
                                    pr.cc($[1], ($) => {
                                        _StringLiteral($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                case "ImportDeclaration": {
                    pr.cc($[1], ($) => {
                        console.log(`ImportDeclaration`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "StringLiteral": {
                                    pr.cc($[1], ($) => {
                                        _StringLiteral($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                case "TypeAliasDeclaration": {
                    pr.cc($[1], ($) => {
                        _TypeAliasDeclaration($)
                    })
                    break
                }
                case "ExpressionStatement": {
                    pr.cc($[1], ($) => {
                        _ExpressionStatement($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _Identifier(
        $: api.TIdentifier,
    ) {
        console.log(`Identifier`)
        //FIXME
    }
    function _TypeParameter(
        $: api.TTypeParameter,
    ) {
        console.log(`TypeParameter`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _MethodSignature(
        $: api.TMethodSignature,
    ) {
        console.log(`MethodSignature`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "Parameter": {
                    pr.cc($[1], ($) => {
                        _Parameter($)
                    })
                    break
                }
                case "VoidKeyword": {
                    pr.cc($[1], ($) => {
                        _VoidKeyword($)
                    })
                    break
                }
                case "TypeParameter": {
                    pr.cc($[1], ($) => {
                        _TypeParameter($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "NumberKeyword": {
                    pr.cc($[1], ($) => {
                        _NumberKeyword($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _Parameter(
        $: api.TParameter,
    ) {
        console.log(`Parameter`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "FunctionType": {
                    pr.cc($[1], ($) => {
                        _FunctionType($)
                    })
                    break
                }
                case "NumberKeyword": {
                    pr.cc($[1], ($) => {
                        _NumberKeyword($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "AnyKeyword": {
                    pr.cc($[1], ($) => {
                        _AnyKeyword($)
                    })
                    break
                }
                case "QuestionToken": {
                    pr.cc($[1], ($) => {
                        _QuestionToken($)
                    })
                    break
                }
                case "NeverKeyword": {
                    pr.cc($[1], ($) => {
                        console.log(`NeverKeyword`)
                        //FIXME

                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _TypeReference(
        $: api.TTypeReference,
    ) {
        console.log(`TypeReference`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "QualifiedName": {
                    pr.cc($[1], ($) => {
                        console.log(`QualifiedName`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "Identifier": {
                                    pr.cc($[1], ($) => {
                                        _Identifier($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "LiteralType": {
                    pr.cc($[1], ($) => {
                        _LiteralType($)
                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _VoidKeyword(
        $: api.TVoidKeyword,
    ) {
        console.log(`VoidKeyword`)
        //FIXME
    }
    function _FunctionType(
        $: api.TFunctionType,
    ) {
        console.log(`FunctionType`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Parameter": {
                    pr.cc($[1], ($) => {
                        _Parameter($)
                    })
                    break
                }
                case "VoidKeyword": {
                    pr.cc($[1], ($) => {
                        _VoidKeyword($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "AnyKeyword": {
                    pr.cc($[1], ($) => {
                        _AnyKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _NumberKeyword(
        $: api.TNumberKeyword,
    ) {
        console.log(`NumberKeyword`)
        //FIXME
    }
    function _ArrayType(
        $: api.TArrayType,
    ) {
        console.log(`ArrayType`)
        $.forEach(($) => {
            switch ($[0]) {
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _BooleanKeyword(
        $: api.TBooleanKeyword,
    ) {
        console.log(`BooleanKeyword`)
        //FIXME
    }
    function _PropertySignature(
        $: api.TPropertySignature,
    ) {
        console.log(`PropertySignature`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "NumberKeyword": {
                    pr.cc($[1], ($) => {
                        _NumberKeyword($)
                    })
                    break
                }
                case "ReadonlyKeyword": {
                    pr.cc($[1], ($) => {
                        _ReadonlyKeyword($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "FunctionType": {
                    pr.cc($[1], ($) => {
                        _FunctionType($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "QuestionToken": {
                    pr.cc($[1], ($) => {
                        _QuestionToken($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "LiteralType": {
                    pr.cc($[1], ($) => {
                        _LiteralType($)
                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _StringKeyword(
        $: api.TStringKeyword,
    ) {
        console.log(`StringKeyword`)
        //FIXME
    }
    function _UnionType(
        $: api.TUnionType,
    ) {
        console.log(`UnionType`)
        $.forEach(($) => {
            switch ($[0]) {
                case "UndefinedKeyword": {
                    pr.cc($[1], ($) => {
                        console.log(`UndefinedKeyword`)
                        //FIXME

                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "TupleType": {
                    pr.cc($[1], ($) => {
                        _TupleType($)
                    })
                    break
                }
                case "LiteralType": {
                    pr.cc($[1], ($) => {
                        _LiteralType($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "NumberKeyword": {
                    pr.cc($[1], ($) => {
                        _NumberKeyword($)
                    })
                    break
                }
                case "ParenthesizedType": {
                    pr.cc($[1], ($) => {
                        console.log(`ParenthesizedType`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "FunctionType": {
                                    pr.cc($[1], ($) => {
                                        _FunctionType($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ReadonlyKeyword(
        $: api.TReadonlyKeyword,
    ) {
        console.log(`ReadonlyKeyword`)
        //FIXME
    }
    function _FunctionDeclaration(
        $: api.TFunctionDeclaration,
    ) {
        console.log(`FunctionDeclaration`)
        $.forEach(($) => {
            switch ($[0]) {
                case "DeclareKeyword": {
                    pr.cc($[1], ($) => {
                        _DeclareKeyword($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "Parameter": {
                    pr.cc($[1], ($) => {
                        _Parameter($)
                    })
                    break
                }
                case "BooleanKeyword": {
                    pr.cc($[1], ($) => {
                        _BooleanKeyword($)
                    })
                    break
                }
                case "TypeParameter": {
                    pr.cc($[1], ($) => {
                        _TypeParameter($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                case "ExportKeyword": {
                    pr.cc($[1], ($) => {
                        _ExportKeyword($)
                    })
                    break
                }
                case "VoidKeyword": {
                    pr.cc($[1], ($) => {
                        _VoidKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _DeclareKeyword(
        $: api.TDeclareKeyword,
    ) {
        console.log(`DeclareKeyword`)
        //FIXME
    }
    function _AnyKeyword(
        $: api.TAnyKeyword,
    ) {
        console.log(`AnyKeyword`)
        //FIXME
    }
    function _QuestionToken(
        $: api.TQuestionToken,
    ) {
        console.log(`QuestionToken`)
        //FIXME
    }
    function _VariableStatement(
        $: api.TVariableStatement,
    ) {
        console.log(`VariableStatement`)
        $.forEach(($) => {
            switch ($[0]) {
                case "DeclareKeyword": {
                    pr.cc($[1], ($) => {
                        _DeclareKeyword($)
                    })
                    break
                }
                case "VariableDeclarationList": {
                    pr.cc($[1], ($) => {
                        _VariableDeclarationList($)
                    })
                    break
                }
                case "ExportKeyword": {
                    pr.cc($[1], ($) => {
                        _ExportKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _VariableDeclarationList(
        $: api.TVariableDeclarationList,
    ) {
        console.log(`VariableDeclarationList`)
        $.forEach(($) => {
            switch ($[0]) {
                case "VariableDeclaration": {
                    pr.cc($[1], ($) => {
                        _VariableDeclaration($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _VariableDeclaration(
        $: api.TVariableDeclaration,
    ) {
        console.log(`VariableDeclaration`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                case "FalseKeyword": {
                    pr.cc($[1], ($) => {
                        _FalseKeyword($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "ArrowFunction": {
                    pr.cc($[1], ($) => {
                        _ArrowFunction($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "PrefixUnaryExpression": {
                    pr.cc($[1], ($) => {
                        _PrefixUnaryExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    pr.cc($[1], ($) => {
                        _NoSubstitutionTemplateLiteral($)
                    })
                    break
                }
                case "ParenthesizedExpression": {
                    pr.cc($[1], ($) => {
                        _ParenthesizedExpression($)
                    })
                    break
                }
                case "NumberKeyword": {
                    pr.cc($[1], ($) => {
                        _NumberKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _StringLiteral(
        $: api.TStringLiteral,
    ) {
        console.log(`StringLiteral`)
        //FIXME
    }
    function _Block(
        $: api.TBlock,
    ) {
        console.log(`Block`)
        $.forEach(($) => {
            switch ($[0]) {
                case "ThrowStatement": {
                    pr.cc($[1], ($) => {
                        console.log(`ThrowStatement`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "NewExpression": {
                                    pr.cc($[1], ($) => {
                                        console.log(`NewExpression`)
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "Identifier": {
                                                    pr.cc($[1], ($) => {
                                                        _Identifier($)
                                                    })
                                                    break
                                                }
                                                case "StringLiteral": {
                                                    pr.cc($[1], ($) => {
                                                        _StringLiteral($)
                                                    })
                                                    break
                                                }
                                                case "CallExpression": {
                                                    pr.cc($[1], ($) => {
                                                        _CallExpression($)
                                                    })
                                                    break
                                                }
                                                case "TemplateExpression": {
                                                    pr.cc($[1], ($) => {
                                                        _TemplateExpression($)
                                                    })
                                                    break
                                                }
                                                case "NoSubstitutionTemplateLiteral": {
                                                    pr.cc($[1], ($) => {
                                                        _NoSubstitutionTemplateLiteral($)
                                                    })
                                                    break
                                                }
                                                default: pr.au($[0])
                                            }
                                        })

                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                case "ReturnStatement": {
                    pr.cc($[1], ($) => {
                        _ReturnStatement($)
                    })
                    break
                }
                case "VariableStatement": {
                    pr.cc($[1], ($) => {
                        _VariableStatement($)
                    })
                    break
                }
                case "FunctionDeclaration": {
                    pr.cc($[1], ($) => {
                        _FunctionDeclaration($)
                    })
                    break
                }
                case "IfStatement": {
                    pr.cc($[1], ($) => {
                        _IfStatement($)
                    })
                    break
                }
                case "ExpressionStatement": {
                    pr.cc($[1], ($) => {
                        _ExpressionStatement($)
                    })
                    break
                }
                case "SwitchStatement": {
                    pr.cc($[1], ($) => {
                        console.log(`SwitchStatement`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "ElementAccessExpression": {
                                    pr.cc($[1], ($) => {
                                        _ElementAccessExpression($)
                                    })
                                    break
                                }
                                case "CaseBlock": {
                                    pr.cc($[1], ($) => {
                                        console.log(`CaseBlock`)
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "CaseClause": {
                                                    pr.cc($[1], ($) => {
                                                        console.log(`CaseClause`)
                                                        $.forEach(($) => {
                                                            switch ($[0]) {
                                                                case "StringLiteral": {
                                                                    pr.cc($[1], ($) => {
                                                                        _StringLiteral($)
                                                                    })
                                                                    break
                                                                }
                                                                case "ExpressionStatement": {
                                                                    pr.cc($[1], ($) => {
                                                                        _ExpressionStatement($)
                                                                    })
                                                                    break
                                                                }
                                                                case "BreakStatement": {
                                                                    pr.cc($[1], ($) => {
                                                                        _BreakStatement($)
                                                                    })
                                                                    break
                                                                }
                                                                case "Block": {
                                                                    pr.cc($[1], ($) => {
                                                                        _Block($)
                                                                    })
                                                                    break
                                                                }
                                                                case "ReturnStatement": {
                                                                    pr.cc($[1], ($) => {
                                                                        _ReturnStatement($)
                                                                    })
                                                                    break
                                                                }
                                                                case "VariableStatement": {
                                                                    pr.cc($[1], ($) => {
                                                                        _VariableStatement($)
                                                                    })
                                                                    break
                                                                }
                                                                case "IfStatement": {
                                                                    pr.cc($[1], ($) => {
                                                                        _IfStatement($)
                                                                    })
                                                                    break
                                                                }
                                                                case "PropertyAccessExpression": {
                                                                    pr.cc($[1], ($) => {
                                                                        _PropertyAccessExpression($)
                                                                    })
                                                                    break
                                                                }
                                                                default: pr.au($[0])
                                                            }
                                                        })

                                                    })
                                                    break
                                                }
                                                case "DefaultClause": {
                                                    pr.cc($[1], ($) => {
                                                        console.log(`DefaultClause`)
                                                        $.forEach(($) => {
                                                            switch ($[0]) {
                                                                case "ExpressionStatement": {
                                                                    pr.cc($[1], ($) => {
                                                                        _ExpressionStatement($)
                                                                    })
                                                                    break
                                                                }
                                                                case "ReturnStatement": {
                                                                    pr.cc($[1], ($) => {
                                                                        _ReturnStatement($)
                                                                    })
                                                                    break
                                                                }
                                                                case "Block": {
                                                                    pr.cc($[1], ($) => {
                                                                        _Block($)
                                                                    })
                                                                    break
                                                                }
                                                                default: pr.au($[0])
                                                            }
                                                        })

                                                    })
                                                    break
                                                }
                                                default: pr.au($[0])
                                            }
                                        })

                                    })
                                    break
                                }
                                case "Identifier": {
                                    pr.cc($[1], ($) => {
                                        _Identifier($)
                                    })
                                    break
                                }
                                case "PropertyAccessExpression": {
                                    pr.cc($[1], ($) => {
                                        _PropertyAccessExpression($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                case "TryStatement": {
                    pr.cc($[1], ($) => {
                        console.log(`TryStatement`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "Block": {
                                    pr.cc($[1], ($) => {
                                        _Block($)
                                    })
                                    break
                                }
                                case "CatchClause": {
                                    pr.cc($[1], ($) => {
                                        console.log(`CatchClause`)
                                        $.forEach(($) => {
                                            switch ($[0]) {
                                                case "VariableDeclaration": {
                                                    pr.cc($[1], ($) => {
                                                        _VariableDeclaration($)
                                                    })
                                                    break
                                                }
                                                case "Block": {
                                                    pr.cc($[1], ($) => {
                                                        _Block($)
                                                    })
                                                    break
                                                }
                                                default: pr.au($[0])
                                            }
                                        })

                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                case "BreakStatement": {
                    pr.cc($[1], ($) => {
                        _BreakStatement($)
                    })
                    break
                }
                case "TypeAliasDeclaration": {
                    pr.cc($[1], ($) => {
                        _TypeAliasDeclaration($)
                    })
                    break
                }
                case "ForStatement": {
                    pr.cc($[1], ($) => {
                        console.log(`ForStatement`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "VariableDeclarationList": {
                                    pr.cc($[1], ($) => {
                                        _VariableDeclarationList($)
                                    })
                                    break
                                }
                                case "BinaryExpression": {
                                    pr.cc($[1], ($) => {
                                        _BinaryExpression($)
                                    })
                                    break
                                }
                                case "Block": {
                                    pr.cc($[1], ($) => {
                                        _Block($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                case "WhileStatement": {
                    pr.cc($[1], ($) => {
                        _WhileStatement($)
                    })
                    break
                }
                case "LabeledStatement": {
                    pr.cc($[1], ($) => {
                        console.log(`LabeledStatement`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "Identifier": {
                                    pr.cc($[1], ($) => {
                                        _Identifier($)
                                    })
                                    break
                                }
                                case "WhileStatement": {
                                    pr.cc($[1], ($) => {
                                        _WhileStatement($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ReturnStatement(
        $: api.TReturnStatement,
    ) {
        console.log(`ReturnStatement`)
        $.forEach(($) => {
            switch ($[0]) {
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "ArrowFunction": {
                    pr.cc($[1], ($) => {
                        _ArrowFunction($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "PrefixUnaryExpression": {
                    pr.cc($[1], ($) => {
                        _PrefixUnaryExpression($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    pr.cc($[1], ($) => {
                        _NoSubstitutionTemplateLiteral($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _CallExpression(
        $: api.TCallExpression,
    ) {
        console.log(`CallExpression`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "ArrowFunction": {
                    pr.cc($[1], ($) => {
                        _ArrowFunction($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    pr.cc($[1], ($) => {
                        _NoSubstitutionTemplateLiteral($)
                    })
                    break
                }
                case "ParenthesizedExpression": {
                    pr.cc($[1], ($) => {
                        _ParenthesizedExpression($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                case "TrueKeyword": {
                    pr.cc($[1], ($) => {
                        _TrueKeyword($)
                    })
                    break
                }
                case "FalseKeyword": {
                    pr.cc($[1], ($) => {
                        _FalseKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ExportKeyword(
        $: api.TExportKeyword,
    ) {
        console.log(`ExportKeyword`)
        //FIXME
    }
    function _NumericLiteral(
        $: api.TNumericLiteral,
    ) {
        console.log(`NumericLiteral`)
        //FIXME
    }
    function _FalseKeyword(
        $: api.TFalseKeyword,
    ) {
        console.log(`FalseKeyword`)
        //FIXME
    }
    function _IfStatement(
        $: api.TIfStatement,
    ) {
        console.log(`IfStatement`)
        $.forEach(($) => {
            switch ($[0]) {
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "PrefixUnaryExpression": {
                    pr.cc($[1], ($) => {
                        _PrefixUnaryExpression($)
                    })
                    break
                }
                case "ReturnStatement": {
                    pr.cc($[1], ($) => {
                        _ReturnStatement($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "IfStatement": {
                    pr.cc($[1], ($) => {
                        _IfStatement($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _BinaryExpression(
        $: api.TBinaryExpression,
    ) {
        console.log(`BinaryExpression`)
        $.forEach(($) => {
            switch ($[0]) {
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "EqualsEqualsEqualsToken": {
                    pr.cc($[1], ($) => {
                        console.log(`EqualsEqualsEqualsToken`)
                        //FIXME

                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                case "AmpersandAmpersandToken": {
                    pr.cc($[1], ($) => {
                        console.log(`AmpersandAmpersandToken`)
                        //FIXME

                    })
                    break
                }
                case "PlusEqualsToken": {
                    pr.cc($[1], ($) => {
                        console.log(`PlusEqualsToken`)
                        //FIXME

                    })
                    break
                }
                case "MinusEqualsToken": {
                    pr.cc($[1], ($) => {
                        console.log(`MinusEqualsToken`)
                        //FIXME

                    })
                    break
                }
                case "EqualsToken": {
                    pr.cc($[1], ($) => {
                        console.log(`EqualsToken`)
                        //FIXME

                    })
                    break
                }
                case "TrueKeyword": {
                    pr.cc($[1], ($) => {
                        _TrueKeyword($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "ExclamationEqualsEqualsToken": {
                    pr.cc($[1], ($) => {
                        console.log(`ExclamationEqualsEqualsToken`)
                        //FIXME

                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "PlusToken": {
                    pr.cc($[1], ($) => {
                        console.log(`PlusToken`)
                        //FIXME

                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "ParenthesizedExpression": {
                    pr.cc($[1], ($) => {
                        _ParenthesizedExpression($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "MinusToken": {
                    pr.cc($[1], ($) => {
                        console.log(`MinusToken`)
                        //FIXME

                    })
                    break
                }
                case "GreaterThanToken": {
                    pr.cc($[1], ($) => {
                        console.log(`GreaterThanToken`)
                        //FIXME

                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "FalseKeyword": {
                    pr.cc($[1], ($) => {
                        _FalseKeyword($)
                    })
                    break
                }
                case "LessThanToken": {
                    pr.cc($[1], ($) => {
                        console.log(`LessThanToken`)
                        //FIXME

                    })
                    break
                }
                case "BarBarToken": {
                    pr.cc($[1], ($) => {
                        console.log(`BarBarToken`)
                        //FIXME

                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ExpressionStatement(
        $: api.TExpressionStatement,
    ) {
        console.log(`ExpressionStatement`)
        $.forEach(($) => {
            switch ($[0]) {
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "PostfixUnaryExpression": {
                    pr.cc($[1], ($) => {
                        console.log(`PostfixUnaryExpression`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "Identifier": {
                                    pr.cc($[1], ($) => {
                                        _Identifier($)
                                    })
                                    break
                                }
                                case "PropertyAccessExpression": {
                                    pr.cc($[1], ($) => {
                                        _PropertyAccessExpression($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ObjectLiteralExpression(
        $: api.TObjectLiteralExpression,
    ) {
        console.log(`ObjectLiteralExpression`)
        $.forEach(($) => {
            switch ($[0]) {
                case "PropertyAssignment": {
                    pr.cc($[1], ($) => {
                        console.log(`PropertyAssignment`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "Identifier": {
                                    pr.cc($[1], ($) => {
                                        _Identifier($)
                                    })
                                    break
                                }
                                case "ArrowFunction": {
                                    pr.cc($[1], ($) => {
                                        _ArrowFunction($)
                                    })
                                    break
                                }
                                case "PropertyAccessExpression": {
                                    pr.cc($[1], ($) => {
                                        _PropertyAccessExpression($)
                                    })
                                    break
                                }
                                case "StringLiteral": {
                                    pr.cc($[1], ($) => {
                                        _StringLiteral($)
                                    })
                                    break
                                }
                                case "ElementAccessExpression": {
                                    pr.cc($[1], ($) => {
                                        _ElementAccessExpression($)
                                    })
                                    break
                                }
                                case "ObjectLiteralExpression": {
                                    pr.cc($[1], ($) => {
                                        _ObjectLiteralExpression($)
                                    })
                                    break
                                }
                                case "CallExpression": {
                                    pr.cc($[1], ($) => {
                                        _CallExpression($)
                                    })
                                    break
                                }
                                case "NullKeyword": {
                                    pr.cc($[1], ($) => {
                                        _NullKeyword($)
                                    })
                                    break
                                }
                                case "PrefixUnaryExpression": {
                                    pr.cc($[1], ($) => {
                                        _PrefixUnaryExpression($)
                                    })
                                    break
                                }
                                case "FalseKeyword": {
                                    pr.cc($[1], ($) => {
                                        _FalseKeyword($)
                                    })
                                    break
                                }
                                case "TemplateExpression": {
                                    pr.cc($[1], ($) => {
                                        _TemplateExpression($)
                                    })
                                    break
                                }
                                case "TrueKeyword": {
                                    pr.cc($[1], ($) => {
                                        _TrueKeyword($)
                                    })
                                    break
                                }
                                case "ConditionalExpression": {
                                    pr.cc($[1], ($) => {
                                        _ConditionalExpression($)
                                    })
                                    break
                                }
                                case "ArrayLiteralExpression": {
                                    pr.cc($[1], ($) => {
                                        _ArrayLiteralExpression($)
                                    })
                                    break
                                }
                                case "NoSubstitutionTemplateLiteral": {
                                    pr.cc($[1], ($) => {
                                        _NoSubstitutionTemplateLiteral($)
                                    })
                                    break
                                }
                                case "BinaryExpression": {
                                    pr.cc($[1], ($) => {
                                        _BinaryExpression($)
                                    })
                                    break
                                }
                                case "ParenthesizedExpression": {
                                    pr.cc($[1], ($) => {
                                        _ParenthesizedExpression($)
                                    })
                                    break
                                }
                                case "NumericLiteral": {
                                    pr.cc($[1], ($) => {
                                        _NumericLiteral($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ArrowFunction(
        $: api.TArrowFunction,
    ) {
        console.log(`ArrowFunction`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Parameter": {
                    pr.cc($[1], ($) => {
                        _Parameter($)
                    })
                    break
                }
                case "EqualsGreaterThanToken": {
                    pr.cc($[1], ($) => {
                        console.log(`EqualsGreaterThanToken`)
                        //FIXME

                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "VoidKeyword": {
                    pr.cc($[1], ($) => {
                        _VoidKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _PropertyAccessExpression(
        $: api.TPropertyAccessExpression,
    ) {
        console.log(`PropertyAccessExpression`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ElementAccessExpression(
        $: api.TElementAccessExpression,
    ) {
        console.log(`ElementAccessExpression`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ArrayLiteralExpression(
        $: api.TArrayLiteralExpression,
    ) {
        console.log(`ArrayLiteralExpression`)
        $.forEach(($) => {
            switch ($[0]) {
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _BreakStatement(
        $: api.TBreakStatement,
    ) {
        console.log(`BreakStatement`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _NullKeyword(
        $: api.TNullKeyword,
    ) {
        console.log(`NullKeyword`)
        //FIXME
    }
    function _TrueKeyword(
        $: api.TTrueKeyword,
    ) {
        console.log(`TrueKeyword`)
        //FIXME
    }
    function _TypeAliasDeclaration(
        $: api.TTypeAliasDeclaration,
    ) {
        console.log(`TypeAliasDeclaration`)
        $.forEach(($) => {
            switch ($[0]) {
                case "ExportKeyword": {
                    pr.cc($[1], ($) => {
                        _ExportKeyword($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                case "TypeParameter": {
                    pr.cc($[1], ($) => {
                        _TypeParameter($)
                    })
                    break
                }
                case "TupleType": {
                    pr.cc($[1], ($) => {
                        _TupleType($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "FunctionType": {
                    pr.cc($[1], ($) => {
                        _FunctionType($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _TypeLiteral(
        $: api.TTypeLiteral,
    ) {
        console.log(`TypeLiteral`)
        $.forEach(($) => {
            switch ($[0]) {
                case "PropertySignature": {
                    pr.cc($[1], ($) => {
                        _PropertySignature($)
                    })
                    break
                }
                case "MethodSignature": {
                    pr.cc($[1], ($) => {
                        _MethodSignature($)
                    })
                    break
                }
                case "IndexSignature": {
                    pr.cc($[1], ($) => {
                        console.log(`IndexSignature`)
                        //FIXME

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _TemplateExpression(
        $: api.TTemplateExpression,
    ) {
        console.log(`TemplateExpression`)
        $.forEach(($) => {
            switch ($[0]) {
                case "TemplateHead": {
                    pr.cc($[1], ($) => {
                        console.log(`TemplateHead`)
                        //FIXME

                    })
                    break
                }
                case "TemplateSpan": {
                    pr.cc($[1], ($) => {
                        console.log(`TemplateSpan`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "PropertyAccessExpression": {
                                    pr.cc($[1], ($) => {
                                        _PropertyAccessExpression($)
                                    })
                                    break
                                }
                                case "TemplateMiddle": {
                                    pr.cc($[1], ($) => {
                                        console.log(`TemplateMiddle`)
                                        //FIXME

                                    })
                                    break
                                }
                                case "TemplateTail": {
                                    pr.cc($[1], ($) => {
                                        console.log(`TemplateTail`)
                                        //FIXME

                                    })
                                    break
                                }
                                case "Identifier": {
                                    pr.cc($[1], ($) => {
                                        _Identifier($)
                                    })
                                    break
                                }
                                case "CallExpression": {
                                    pr.cc($[1], ($) => {
                                        _CallExpression($)
                                    })
                                    break
                                }
                                case "ConditionalExpression": {
                                    pr.cc($[1], ($) => {
                                        _ConditionalExpression($)
                                    })
                                    break
                                }
                                case "ElementAccessExpression": {
                                    pr.cc($[1], ($) => {
                                        _ElementAccessExpression($)
                                    })
                                    break
                                }
                                case "BinaryExpression": {
                                    pr.cc($[1], ($) => {
                                        _BinaryExpression($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _PrefixUnaryExpression(
        $: api.TPrefixUnaryExpression,
    ) {
        console.log(`PrefixUnaryExpression`)
        $.forEach(($) => {
            switch ($[0]) {
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _TupleType(
        $: api.TTupleType,
    ) {
        console.log(`TupleType`)
        $.forEach(($) => {
            switch ($[0]) {
                case "OptionalType": {
                    pr.cc($[1], ($) => {
                        console.log(`OptionalType`)
                        $.forEach(($) => {
                            switch ($[0]) {
                                case "NumberKeyword": {
                                    pr.cc($[1], ($) => {
                                        _NumberKeyword($)
                                    })
                                    break
                                }
                                case "TypeReference": {
                                    pr.cc($[1], ($) => {
                                        _TypeReference($)
                                    })
                                    break
                                }
                                default: pr.au($[0])
                            }
                        })

                    })
                    break
                }
                case "LiteralType": {
                    pr.cc($[1], ($) => {
                        _LiteralType($)
                    })
                    break
                }
                case "StringKeyword": {
                    pr.cc($[1], ($) => {
                        _StringKeyword($)
                    })
                    break
                }
                case "UnionType": {
                    pr.cc($[1], ($) => {
                        _UnionType($)
                    })
                    break
                }
                case "TypeReference": {
                    pr.cc($[1], ($) => {
                        _TypeReference($)
                    })
                    break
                }
                case "TypeLiteral": {
                    pr.cc($[1], ($) => {
                        _TypeLiteral($)
                    })
                    break
                }
                case "ArrayType": {
                    pr.cc($[1], ($) => {
                        _ArrayType($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _LiteralType(
        $: api.TLiteralType,
    ) {
        console.log(`LiteralType`)
        $.forEach(($) => {
            switch ($[0]) {
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ConditionalExpression(
        $: api.TConditionalExpression,
    ) {
        console.log(`ConditionalExpression`)
        $.forEach(($) => {
            switch ($[0]) {
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "QuestionToken": {
                    pr.cc($[1], ($) => {
                        _QuestionToken($)
                    })
                    break
                }
                case "NullKeyword": {
                    pr.cc($[1], ($) => {
                        _NullKeyword($)
                    })
                    break
                }
                case "ColonToken": {
                    pr.cc($[1], ($) => {
                        console.log(`ColonToken`)
                        //FIXME

                    })
                    break
                }
                case "PropertyAccessExpression": {
                    pr.cc($[1], ($) => {
                        _PropertyAccessExpression($)
                    })
                    break
                }
                case "StringLiteral": {
                    pr.cc($[1], ($) => {
                        _StringLiteral($)
                    })
                    break
                }
                case "TemplateExpression": {
                    pr.cc($[1], ($) => {
                        _TemplateExpression($)
                    })
                    break
                }
                case "CallExpression": {
                    pr.cc($[1], ($) => {
                        _CallExpression($)
                    })
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    pr.cc($[1], ($) => {
                        _NoSubstitutionTemplateLiteral($)
                    })
                    break
                }
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "Identifier": {
                    pr.cc($[1], ($) => {
                        _Identifier($)
                    })
                    break
                }
                case "ObjectLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ObjectLiteralExpression($)
                    })
                    break
                }
                case "ArrayLiteralExpression": {
                    pr.cc($[1], ($) => {
                        _ArrayLiteralExpression($)
                    })
                    break
                }
                case "ElementAccessExpression": {
                    pr.cc($[1], ($) => {
                        _ElementAccessExpression($)
                    })
                    break
                }
                case "ArrowFunction": {
                    pr.cc($[1], ($) => {
                        _ArrowFunction($)
                    })
                    break
                }
                case "NumericLiteral": {
                    pr.cc($[1], ($) => {
                        _NumericLiteral($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _ParenthesizedExpression(
        $: api.TParenthesizedExpression,
    ) {
        console.log(`ParenthesizedExpression`)
        $.forEach(($) => {
            switch ($[0]) {
                case "ConditionalExpression": {
                    pr.cc($[1], ($) => {
                        _ConditionalExpression($)
                    })
                    break
                }
                case "BinaryExpression": {
                    pr.cc($[1], ($) => {
                        _BinaryExpression($)
                    })
                    break
                }
                case "ArrowFunction": {
                    pr.cc($[1], ($) => {
                        _ArrowFunction($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    function _NoSubstitutionTemplateLiteral(
        $: api.TNoSubstitutionTemplateLiteral,
    ) {
        console.log(`NoSubstitutionTemplateLiteral`)
        //FIXME
    }
    function _WhileStatement(
        $: api.TWhileStatement,
    ) {
        console.log(`WhileStatement`)
        $.forEach(($) => {
            switch ($[0]) {
                case "TrueKeyword": {
                    pr.cc($[1], ($) => {
                        _TrueKeyword($)
                    })
                    break
                }
                case "Block": {
                    pr.cc($[1], ($) => {
                        _Block($)
                    })
                    break
                }
                default: pr.au($[0])
            }
        })
    }
    return _SourceFile($)
}
