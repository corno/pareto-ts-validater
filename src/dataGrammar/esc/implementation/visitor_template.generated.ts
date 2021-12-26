import * as pr from "pareto-runtime"
import * as api from "../interface/ts_api.generated"

export type FOO<Annotation> = {
    "ArrayLiteralExpression"?: {
        begin: ($: api.TArrayLiteralExpression<Annotation>) => void,
        end: ($: api.TArrayLiteralExpression<Annotation>) => void,
    }
    "EndOfFileToken"?: ($: api.TEndOfFileToken<Annotation>) => void
    "ExportKeyword"?: ($: api.TExportKeyword<Annotation>) => void
    "FalseKeyword"?: ($: api.TFalseKeyword<Annotation>) => void
    "Identifier"?: ($: api.TIdentifier<Annotation>) => void
    "ImportClause"?: {
        begin: ($: api.TImportClause<Annotation>) => void,
        end: ($: api.TImportClause<Annotation>) => void,
    }
    "ImportDeclaration"?: {
        begin: ($: api.TImportDeclaration<Annotation>) => void,
        end: ($: api.TImportDeclaration<Annotation>) => void,
    }
    "NamespaceImport"?: {
        begin: ($: api.TNamespaceImport<Annotation>) => void,
        end: ($: api.TNamespaceImport<Annotation>) => void,
    }
    "NoSubstitutionTemplateLiteral"?: ($: api.TNoSubstitutionTemplateLiteral<Annotation>) => void
    "NumericLiteral"?: ($: api.TNumericLiteral<Annotation>) => void
    "NullKeyword"?: ($: api.TNullKeyword<Annotation>) => void
    "ObjectLiteralExpression"?: {
        begin: ($: api.TObjectLiteralExpression<Annotation>) => void,
        end: ($: api.TObjectLiteralExpression<Annotation>) => void,
    }
    "PropertyAssignment"?: {
        begin: ($: api.TPropertyAssignment<Annotation>) => void,
        end: ($: api.TPropertyAssignment<Annotation>) => void,
    }
    "QualifiedName"?: {
        begin: ($: api.TQualifiedName<Annotation>) => void,
        end: ($: api.TQualifiedName<Annotation>) => void,
    }
    "SourceFile"?: {
        begin: ($: api.TSourceFile<Annotation>) => void,
        end: ($: api.TSourceFile<Annotation>) => void,
    }
    "StringLiteral"?: ($: api.TStringLiteral<Annotation>) => void
    "TrueKeyword"?: ($: api.TTrueKeyword<Annotation>) => void
    "TypeReference"?: {
        begin: ($: api.TTypeReference<Annotation>) => void,
        end: ($: api.TTypeReference<Annotation>) => void,
    }
    "VariableDeclaration"?: {
        begin: ($: api.TVariableDeclaration<Annotation>) => void,
        end: ($: api.TVariableDeclaration<Annotation>) => void,
    }
    "VariableDeclarationList"?: {
        begin: ($: api.TVariableDeclarationList<Annotation>) => void,
        end: ($: api.TVariableDeclarationList<Annotation>) => void,
    }
    "VariableStatement"?: {
        begin: ($: api.TVariableStatement<Annotation>) => void,
        end: ($: api.TVariableStatement<Annotation>) => void,
    }
}

export const foo: FOO<string> = {
    "ArrayLiteralExpression": {
        begin: ($) => { console.log("ArrayLiteralExpression begin") },
        end: ($) => { console.log("ArrayLiteralExpression end") },
    },
    "EndOfFileToken": ($) => { console.log("EndOfFileToken") },
    "ExportKeyword": ($) => { console.log("ExportKeyword") },
    "FalseKeyword": ($) => { console.log("FalseKeyword") },
    "Identifier": ($) => { console.log("Identifier") },
    "ImportClause": {
        begin: ($) => { console.log("ImportClause begin") },
        end: ($) => { console.log("ImportClause end") },
    },
    "ImportDeclaration": {
        begin: ($) => { console.log("ImportDeclaration begin") },
        end: ($) => { console.log("ImportDeclaration end") },
    },
    "NamespaceImport": {
        begin: ($) => { console.log("NamespaceImport begin") },
        end: ($) => { console.log("NamespaceImport end") },
    },
    "NoSubstitutionTemplateLiteral": ($) => { console.log("NoSubstitutionTemplateLiteral") },
    "NumericLiteral": ($) => { console.log("NumericLiteral") },
    "NullKeyword": ($) => { console.log("NullKeyword") },
    "ObjectLiteralExpression": {
        begin: ($) => { console.log("ObjectLiteralExpression begin") },
        end: ($) => { console.log("ObjectLiteralExpression end") },
    },
    "PropertyAssignment": {
        begin: ($) => { console.log("PropertyAssignment begin") },
        end: ($) => { console.log("PropertyAssignment end") },
    },
    "QualifiedName": {
        begin: ($) => { console.log("QualifiedName begin") },
        end: ($) => { console.log("QualifiedName end") },
    },
    "SourceFile": {
        begin: ($) => { console.log("SourceFile begin") },
        end: ($) => { console.log("SourceFile end") },
    },
    "StringLiteral": ($) => { console.log("StringLiteral") },
    "TrueKeyword": ($) => { console.log("TrueKeyword") },
    "TypeReference": {
        begin: ($) => { console.log("TypeReference begin") },
        end: ($) => { console.log("TypeReference end") },
    },
    "VariableDeclaration": {
        begin: ($) => { console.log("VariableDeclaration begin") },
        end: ($) => { console.log("VariableDeclaration end") },
    },
    "VariableDeclarationList": {
        begin: ($) => { console.log("VariableDeclarationList begin") },
        end: ($) => { console.log("VariableDeclarationList end") },
    },
    "VariableStatement": {
        begin: ($) => { console.log("VariableStatement begin") },
        end: ($) => { console.log("VariableStatement end") },
    },
}

export function visit<Annotation>(
    $: api.TSourceFile<Annotation>,
    foo: FOO<Annotation>,
): void {
    function X_expression(
        $: api.Gexpression<Annotation>,
    ) {
        switch ($[0]) {
            case "arrayLiteral": {
                pr.cc($[1], ($) => {
                    _ArrayLiteralExpression($)
                })
                break
            }
            case "false": {
                pr.cc($[1], ($) => {
                    _FalseKeyword($)
                })
                break
            }
            case "identifier": {
                pr.cc($[1], ($) => {
                    _Identifier($)
                })
                break
            }
            case "noSubstitutionTemplateLiteral": {
                pr.cc($[1], ($) => {
                    _NoSubstitutionTemplateLiteral($)
                })
                break
            }
            case "numericLiteral": {
                pr.cc($[1], ($) => {
                    _NumericLiteral($)
                })
                break
            }
            case "nullKeyword": {
                pr.cc($[1], ($) => {
                    _NullKeyword($)
                })
                break
            }
            case "objectLiteral": {
                pr.cc($[1], ($) => {
                    _ObjectLiteralExpression($)
                })
                break
            }
            case "stringLiteral": {
                pr.cc($[1], ($) => {
                    _StringLiteral($)
                })
                break
            }
            case "true": {
                pr.cc($[1], ($) => {
                    _TrueKeyword($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function _ArrayLiteralExpression(
        $: api.TArrayLiteralExpression<Annotation>,
    ) {
        if (foo["ArrayLiteralExpression"] !== undefined) { foo["ArrayLiteralExpression"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                X_expression($)
            })
        })
        if (foo["ArrayLiteralExpression"] !== undefined) { foo["ArrayLiteralExpression"].end($) }
    }
    function _EndOfFileToken(
        $: api.TEndOfFileToken<Annotation>,
    ) {
        if (foo["EndOfFileToken"] !== undefined) { foo["EndOfFileToken"]($) }
    }
    function _ExportKeyword(
        $: api.TExportKeyword<Annotation>,
    ) {
        if (foo["ExportKeyword"] !== undefined) { foo["ExportKeyword"]($) }
    }
    function _FalseKeyword(
        $: api.TFalseKeyword<Annotation>,
    ) {
        if (foo["FalseKeyword"] !== undefined) { foo["FalseKeyword"]($) }
    }
    function _Identifier(
        $: api.TIdentifier<Annotation>,
    ) {
        if (foo["Identifier"] !== undefined) { foo["Identifier"]($) }
    }
    function _ImportClause(
        $: api.TImportClause<Annotation>,
    ) {
        if (foo["ImportClause"] !== undefined) { foo["ImportClause"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["namespace"], ($) => {
                _NamespaceImport($)
            })
        })
        if (foo["ImportClause"] !== undefined) { foo["ImportClause"].end($) }
    }
    function _ImportDeclaration(
        $: api.TImportDeclaration<Annotation>,
    ) {
        if (foo["ImportDeclaration"] !== undefined) { foo["ImportDeclaration"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["clause"], ($) => {
                _ImportClause($)
            })
            pr.cc($["file"], ($) => {
                _StringLiteral($)
            })
        })
        if (foo["ImportDeclaration"] !== undefined) { foo["ImportDeclaration"].end($) }
    }
    function _NamespaceImport(
        $: api.TNamespaceImport<Annotation>,
    ) {
        if (foo["NamespaceImport"] !== undefined) { foo["NamespaceImport"].begin($) }
        pr.cc($.content, ($) => {
            _Identifier($)
        })
        if (foo["NamespaceImport"] !== undefined) { foo["NamespaceImport"].end($) }
    }
    function _NoSubstitutionTemplateLiteral(
        $: api.TNoSubstitutionTemplateLiteral<Annotation>,
    ) {
        if (foo["NoSubstitutionTemplateLiteral"] !== undefined) { foo["NoSubstitutionTemplateLiteral"]($) }
    }
    function _NumericLiteral(
        $: api.TNumericLiteral<Annotation>,
    ) {
        if (foo["NumericLiteral"] !== undefined) { foo["NumericLiteral"]($) }
    }
    function _NullKeyword(
        $: api.TNullKeyword<Annotation>,
    ) {
        if (foo["NullKeyword"] !== undefined) { foo["NullKeyword"]($) }
    }
    function _ObjectLiteralExpression(
        $: api.TObjectLiteralExpression<Annotation>,
    ) {
        if (foo["ObjectLiteralExpression"] !== undefined) { foo["ObjectLiteralExpression"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                _PropertyAssignment($)
            })
        })
        if (foo["ObjectLiteralExpression"] !== undefined) { foo["ObjectLiteralExpression"].end($) }
    }
    function _PropertyAssignment(
        $: api.TPropertyAssignment<Annotation>,
    ) {
        if (foo["PropertyAssignment"] !== undefined) { foo["PropertyAssignment"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["name"], ($) => {
                switch ($[0]) {
                    case "identifier": {
                        pr.cc($[1], ($) => {
                            _Identifier($)
                        })
                        break
                    }
                    case "stringLiteral": {
                        pr.cc($[1], ($) => {
                            _StringLiteral($)
                        })
                        break
                    }
                    default: pr.au($[0])
                }
            })
            pr.cc($["expression"], ($) => {
                X_expression($)
            })
        })
        if (foo["PropertyAssignment"] !== undefined) { foo["PropertyAssignment"].end($) }
    }
    function _QualifiedName(
        $: api.TQualifiedName<Annotation>,
    ) {
        if (foo["QualifiedName"] !== undefined) { foo["QualifiedName"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["context"], ($) => {
                _Identifier($)
            })
            pr.cc($["type"], ($) => {
                _Identifier($)
            })
        })
        if (foo["QualifiedName"] !== undefined) { foo["QualifiedName"].end($) }
    }
    function _SourceFile(
        $: api.TSourceFile<Annotation>,
    ) {
        if (foo["SourceFile"] !== undefined) { foo["SourceFile"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["import"], ($) => {
                _ImportDeclaration($)
            })
            pr.cc($["variables"], ($) => {
                $.forEach(($) => {
                    _VariableStatement($)
                })
            })
            pr.cc($["endOfFile"], ($) => {
                _EndOfFileToken($)
            })
        })
        if (foo["SourceFile"] !== undefined) { foo["SourceFile"].end($) }
    }
    function _StringLiteral(
        $: api.TStringLiteral<Annotation>,
    ) {
        if (foo["StringLiteral"] !== undefined) { foo["StringLiteral"]($) }
    }
    function _TrueKeyword(
        $: api.TTrueKeyword<Annotation>,
    ) {
        if (foo["TrueKeyword"] !== undefined) { foo["TrueKeyword"]($) }
    }
    function _TypeReference(
        $: api.TTypeReference<Annotation>,
    ) {
        if (foo["TypeReference"] !== undefined) { foo["TypeReference"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["name"], ($) => {
                _QualifiedName($)
            })
        })
        if (foo["TypeReference"] !== undefined) { foo["TypeReference"].end($) }
    }
    function _VariableDeclaration(
        $: api.TVariableDeclaration<Annotation>,
    ) {
        if (foo["VariableDeclaration"] !== undefined) { foo["VariableDeclaration"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["name"], ($) => {
                _Identifier($)
            })
            pr.cc($["type"], ($) => {
                _TypeReference($)
            })
            pr.cc($["one"], ($) => {
                if ($ === null) {
                    //FIXME??
                } else {
                    X_expression($)
                }
            })
        })
        if (foo["VariableDeclaration"] !== undefined) { foo["VariableDeclaration"].end($) }
    }
    function _VariableDeclarationList(
        $: api.TVariableDeclarationList<Annotation>,
    ) {
        if (foo["VariableDeclarationList"] !== undefined) { foo["VariableDeclarationList"].begin($) }
        pr.cc($.content, ($) => {
            $.forEach(($) => {
                _VariableDeclaration($)
            })
        })
        if (foo["VariableDeclarationList"] !== undefined) { foo["VariableDeclarationList"].end($) }
    }
    function _VariableStatement(
        $: api.TVariableStatement<Annotation>,
    ) {
        if (foo["VariableStatement"] !== undefined) { foo["VariableStatement"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["export"], ($) => {
                _ExportKeyword($)
            })
            pr.cc($["variableDeclarationList"], ($) => {
                _VariableDeclarationList($)
            })
        })
        if (foo["VariableStatement"] !== undefined) { foo["VariableStatement"].end($) }
    }
    return _SourceFile($)
}