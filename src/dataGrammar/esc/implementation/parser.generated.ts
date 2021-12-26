import * as pr from "pareto-runtime"
import * as tast from "../interface/ts_api.generated"
import * as uast from "../interface/uast.generated"

export function parse<Annotation>(
    $: uast.Node<Annotation>,
    callback: ($: tast.TSourceFile<Annotation>) => void,
    reportUnexpectedRoot: ($: { root: uast.Node<Annotation>, }) => void,
    reportUnexpectedChild: ($: { path: string, child: uast.Node<Annotation>, }) => void,
    reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string[], }) => void,
): void {
    function X_expression(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gexpression<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Gexpression = ($: tast.XGexpression<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gexpression",
                kindNameOptions: ["ArrayLiteralExpression", "FalseKeyword", "Identifier", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "ObjectLiteralExpression", "StringLiteral", "TrueKeyword"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_arrayLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_arrayLiteral",
                        kindNameOptions: [ "ArrayLiteralExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrayLiteralExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_arrayLiteral",
                        child: currentChild,
                    })
                    return
                }
                ArrayLiteralExpression(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["arrayLiteral", $])
                    }
                )
            }
            const choose_false = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_false",
                        kindNameOptions: [ "FalseKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "FalseKeyword") {
                    reportUnexpectedChild({
                        path: "Gexpression_false",
                        child: currentChild,
                    })
                    return
                }
                FalseKeyword(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["false", $])
                    }
                )
            }
            const choose_identifier = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_identifier",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    reportUnexpectedChild({
                        path: "Gexpression_identifier",
                        child: currentChild,
                    })
                    return
                }
                Identifier(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["identifier", $])
                    }
                )
            }
            const choose_noSubstitutionTemplateLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_noSubstitutionTemplateLiteral",
                        kindNameOptions: [ "NoSubstitutionTemplateLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "NoSubstitutionTemplateLiteral") {
                    reportUnexpectedChild({
                        path: "Gexpression_noSubstitutionTemplateLiteral",
                        child: currentChild,
                    })
                    return
                }
                NoSubstitutionTemplateLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["noSubstitutionTemplateLiteral", $])
                    }
                )
            }
            const choose_numericLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_numericLiteral",
                        kindNameOptions: [ "NumericLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "NumericLiteral") {
                    reportUnexpectedChild({
                        path: "Gexpression_numericLiteral",
                        child: currentChild,
                    })
                    return
                }
                NumericLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["numericLiteral", $])
                    }
                )
            }
            const choose_nullKeyword = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_nullKeyword",
                        kindNameOptions: [ "NullKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "NullKeyword") {
                    reportUnexpectedChild({
                        path: "Gexpression_nullKeyword",
                        child: currentChild,
                    })
                    return
                }
                NullKeyword(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["nullKeyword", $])
                    }
                )
            }
            const choose_objectLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_objectLiteral",
                        kindNameOptions: [ "ObjectLiteralExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ObjectLiteralExpression") {
                    reportUnexpectedChild({
                        path: "Gexpression_objectLiteral",
                        child: currentChild,
                    })
                    return
                }
                ObjectLiteralExpression(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["objectLiteral", $])
                    }
                )
            }
            const choose_stringLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_stringLiteral",
                        kindNameOptions: [ "StringLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringLiteral") {
                    reportUnexpectedChild({
                        path: "Gexpression_stringLiteral",
                        child: currentChild,
                    })
                    return
                }
                StringLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["stringLiteral", $])
                    }
                )
            }
            const choose_true = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gexpression_true",
                        kindNameOptions: [ "TrueKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "TrueKeyword") {
                    reportUnexpectedChild({
                        path: "Gexpression_true",
                        child: currentChild,
                    })
                    return
                }
                TrueKeyword(
                    currentChild,
                    ($) => {
                        choiceEnd_Gexpression(["true", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "ArrayLiteralExpression": {
                    choose_arrayLiteral()
                    break
                }
                case "FalseKeyword": {
                    choose_false()
                    break
                }
                case "Identifier": {
                    choose_identifier()
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    choose_noSubstitutionTemplateLiteral()
                    break
                }
                case "NumericLiteral": {
                    choose_numericLiteral()
                    break
                }
                case "NullKeyword": {
                    choose_nullKeyword()
                    break
                }
                case "ObjectLiteralExpression": {
                    choose_objectLiteral()
                    break
                }
                case "StringLiteral": {
                    choose_stringLiteral()
                    break
                }
                case "TrueKeyword": {
                    choose_true()
                    break
                }
                default: {
                    reportUnexpectedChild({
                        path: "Gexpression",
                        child: nextChild,
                    })
                }
            }
        }
    }
    function ArrayLiteralExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TArrayLiteralExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STArrayLiteralExpression<Annotation> = []
        const processElement = () => {
            X_expression(node, children, ($) => {
                elements.push($)
            })
        }
        arrayLoop: while (true) {
            if (children.length === 0) {
                break arrayLoop
            } else {
                nextChild = children[children.length - 1]
                switch (nextChild.kindName) {
                    case "ArrayLiteralExpression":
                        processElement()
                        break
                    case "FalseKeyword":
                        processElement()
                        break
                    case "Identifier":
                        processElement()
                        break
                    case "NoSubstitutionTemplateLiteral":
                        processElement()
                        break
                    case "NumericLiteral":
                        processElement()
                        break
                    case "NullKeyword":
                        processElement()
                        break
                    case "ObjectLiteralExpression":
                        processElement()
                        break
                    case "StringLiteral":
                        processElement()
                        break
                    case "TrueKeyword":
                        processElement()
                        break
                    default: break arrayLoop
                }
            }
        }
        pr.cc(elements, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ArrayLiteralExpression",
                child: children[children.length - 1],
            })
        }
        return
    }
    function EndOfFileToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TEndOfFileToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "EndOfFileToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ExportKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TExportKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ExportKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function FalseKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TFalseKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "FalseKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function Identifier(
        $: uast.Node<Annotation>,
        callback: ($: tast.TIdentifier<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "Identifier",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: $.value
        })
        return
    }
    function ImportClause(
        $: uast.Node<Annotation>,
        callback: ($: tast.TImportClause<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTImportClause<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TImportClause_namespace",
                kindNameOptions: [ "NamespaceImport"],
            })
            return
        }
        if (currentChild.kindName !== "NamespaceImport") {
            reportUnexpectedChild({
                path: "TImportClause_namespace",
                child: currentChild,
            })
            return
        }
        NamespaceImport(
            currentChild,
            ($) => {
                const _namespace = $
                sequenceEnd({
                    "namespace": _namespace,
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ImportClause",
                child: children[children.length - 1],
            })
        }
        return
    }
    function ImportDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TImportDeclaration<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTImportDeclaration<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TImportDeclaration_clause",
                kindNameOptions: [ "ImportClause"],
            })
            return
        }
        if (currentChild.kindName !== "ImportClause") {
            reportUnexpectedChild({
                path: "TImportDeclaration_clause",
                child: currentChild,
            })
            return
        }
        ImportClause(
            currentChild,
            ($) => {
                const _clause = $
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TImportDeclaration_file",
                        kindNameOptions: [ "StringLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringLiteral") {
                    reportUnexpectedChild({
                        path: "TImportDeclaration_file",
                        child: currentChild,
                    })
                    return
                }
                StringLiteral(
                    currentChild,
                    ($) => {
                        const _file = $
                        sequenceEnd({
                            "clause": _clause,
                            "file": _file,
                        })
                    }
                )
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ImportDeclaration",
                child: children[children.length - 1],
            })
        }
        return
    }
    function NamespaceImport(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNamespaceImport<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TNamespaceImport",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TNamespaceImport",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "NamespaceImport",
                child: children[children.length - 1],
            })
        }
        return
    }
    function NoSubstitutionTemplateLiteral(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNoSubstitutionTemplateLiteral<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "NoSubstitutionTemplateLiteral",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: $.value
        })
        return
    }
    function NumericLiteral(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNumericLiteral<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "NumericLiteral",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: $.value
        })
        return
    }
    function NullKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TNullKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "NullKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function ObjectLiteralExpression(
        $: uast.Node<Annotation>,
        callback: ($: tast.TObjectLiteralExpression<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STObjectLiteralExpression<Annotation> = []
        const processElement = () => {
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TObjectLiteralExpression",
                    kindNameOptions: [ "PropertyAssignment"],
                })
                return
            }
            if (currentChild.kindName !== "PropertyAssignment") {
                reportUnexpectedChild({
                    path: "TObjectLiteralExpression",
                    child: currentChild,
                })
                return
            }
            PropertyAssignment(
                currentChild,
                ($) => {
                    elements.push($)
                }
            )
        }
        arrayLoop: while (true) {
            if (children.length === 0) {
                break arrayLoop
            } else {
                nextChild = children[children.length - 1]
                switch (nextChild.kindName) {
                    case "PropertyAssignment":
                        processElement()
                        break
                    default: break arrayLoop
                }
            }
        }
        pr.cc(elements, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ObjectLiteralExpression",
                child: children[children.length - 1],
            })
        }
        return
    }
    function PropertyAssignment(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPropertyAssignment<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTPropertyAssignment<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        const choiceEnd_TPropertyAssignment_name = ($: tast.XTPropertyAssignment_name<Annotation>) => {
            const _name = $
            X_expression(node, children, ($) => {
                const _expression = $
                sequenceEnd({
                    "name": _name,
                    "expression": _expression,
                })
            })
        }
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TPropertyAssignment_name",
                kindNameOptions: ["Identifier", "StringLiteral"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_identifier = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TPropertyAssignment_name_identifier",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    reportUnexpectedChild({
                        path: "TPropertyAssignment_name_identifier",
                        child: currentChild,
                    })
                    return
                }
                Identifier(
                    currentChild,
                    ($) => {
                        choiceEnd_TPropertyAssignment_name(["identifier", $])
                    }
                )
            }
            const choose_stringLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TPropertyAssignment_name_stringLiteral",
                        kindNameOptions: [ "StringLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringLiteral") {
                    reportUnexpectedChild({
                        path: "TPropertyAssignment_name_stringLiteral",
                        child: currentChild,
                    })
                    return
                }
                StringLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_TPropertyAssignment_name(["stringLiteral", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "Identifier": {
                    choose_identifier()
                    break
                }
                case "StringLiteral": {
                    choose_stringLiteral()
                    break
                }
                default: {
                    reportUnexpectedChild({
                        path: "TPropertyAssignment_name",
                        child: nextChild,
                    })
                }
            }
        }
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "PropertyAssignment",
                child: children[children.length - 1],
            })
        }
        return
    }
    function QualifiedName(
        $: uast.Node<Annotation>,
        callback: ($: tast.TQualifiedName<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTQualifiedName<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TQualifiedName_context",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TQualifiedName_context",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                const _context = $
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TQualifiedName_type",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    reportUnexpectedChild({
                        path: "TQualifiedName_type",
                        child: currentChild,
                    })
                    return
                }
                Identifier(
                    currentChild,
                    ($) => {
                        const _type = $
                        sequenceEnd({
                            "context": _context,
                            "type": _type,
                        })
                    }
                )
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "QualifiedName",
                child: children[children.length - 1],
            })
        }
        return
    }
    function SourceFile(
        $: uast.Node<Annotation>,
        callback: ($: tast.TSourceFile<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTSourceFile<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TSourceFile_import",
                kindNameOptions: [ "ImportDeclaration"],
            })
            return
        }
        if (currentChild.kindName !== "ImportDeclaration") {
            reportUnexpectedChild({
                path: "TSourceFile_import",
                child: currentChild,
            })
            return
        }
        ImportDeclaration(
            currentChild,
            ($) => {
                const _import = $
                const elements: tast.STSourceFile_variables<Annotation> = []
                const processElement = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TSourceFile_variables",
                            kindNameOptions: [ "VariableStatement"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "VariableStatement") {
                        reportUnexpectedChild({
                            path: "TSourceFile_variables",
                            child: currentChild,
                        })
                        return
                    }
                    VariableStatement(
                        currentChild,
                        ($) => {
                            elements.push($)
                        }
                    )
                }
                arrayLoop: while (true) {
                    if (children.length === 0) {
                        break arrayLoop
                    } else {
                        nextChild = children[children.length - 1]
                        switch (nextChild.kindName) {
                            case "VariableStatement":
                                processElement()
                                break
                            default: break arrayLoop
                        }
                    }
                }
                pr.cc(elements, ($) => {
                    const _variables = $
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TSourceFile_endOfFile",
                            kindNameOptions: [ "EndOfFileToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "EndOfFileToken") {
                        reportUnexpectedChild({
                            path: "TSourceFile_endOfFile",
                            child: currentChild,
                        })
                        return
                    }
                    EndOfFileToken(
                        currentChild,
                        ($) => {
                            const _endOfFile = $
                            sequenceEnd({
                                "import": _import,
                                "variables": _variables,
                                "endOfFile": _endOfFile,
                            })
                        }
                    )
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "SourceFile",
                child: children[children.length - 1],
            })
        }
        return
    }
    function StringLiteral(
        $: uast.Node<Annotation>,
        callback: ($: tast.TStringLiteral<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "StringLiteral",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: $.value
        })
        return
    }
    function TrueKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTrueKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TrueKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
        return
    }
    function TypeReference(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeReference<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTTypeReference<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TTypeReference_name",
                kindNameOptions: [ "QualifiedName"],
            })
            return
        }
        if (currentChild.kindName !== "QualifiedName") {
            reportUnexpectedChild({
                path: "TTypeReference_name",
                child: currentChild,
            })
            return
        }
        QualifiedName(
            currentChild,
            ($) => {
                const _name = $
                sequenceEnd({
                    "name": _name,
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TypeReference",
                child: children[children.length - 1],
            })
        }
        return
    }
    function VariableDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TVariableDeclaration<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTVariableDeclaration<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TVariableDeclaration_name",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TVariableDeclaration_name",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                const _name = $
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TVariableDeclaration_type",
                        kindNameOptions: [ "TypeReference"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeReference") {
                    reportUnexpectedChild({
                        path: "TVariableDeclaration_type",
                        child: currentChild,
                    })
                    return
                }
                TypeReference(
                    currentChild,
                    ($) => {
                        const _type = $
                        let optional: tast.STVariableDeclaration_one<Annotation> = null
                        const setOptional = () => {
                            X_expression(node, children, ($) => {
                                optional = $
                            })
                        }
                        if (children.length === 0) {} else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "ArrayLiteralExpression":
                                    setOptional()
                                    break
                                case "FalseKeyword":
                                    setOptional()
                                    break
                                case "Identifier":
                                    setOptional()
                                    break
                                case "NoSubstitutionTemplateLiteral":
                                    setOptional()
                                    break
                                case "NumericLiteral":
                                    setOptional()
                                    break
                                case "NullKeyword":
                                    setOptional()
                                    break
                                case "ObjectLiteralExpression":
                                    setOptional()
                                    break
                                case "StringLiteral":
                                    setOptional()
                                    break
                                case "TrueKeyword":
                                    setOptional()
                                    break
                            }
                        }
                        pr.cc(optional, ($) => {
                            const _one = $
                            sequenceEnd({
                                "name": _name,
                                "type": _type,
                                "one": _one,
                            })
                        })
                    }
                )
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "VariableDeclaration",
                child: children[children.length - 1],
            })
        }
        return
    }
    function VariableDeclarationList(
        $: uast.Node<Annotation>,
        callback: ($: tast.TVariableDeclarationList<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STVariableDeclarationList<Annotation> = []
        const processElement = () => {
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TVariableDeclarationList",
                    kindNameOptions: [ "VariableDeclaration"],
                })
                return
            }
            if (currentChild.kindName !== "VariableDeclaration") {
                reportUnexpectedChild({
                    path: "TVariableDeclarationList",
                    child: currentChild,
                })
                return
            }
            VariableDeclaration(
                currentChild,
                ($) => {
                    elements.push($)
                }
            )
        }
        arrayLoop: while (true) {
            if (children.length === 0) {
                break arrayLoop
            } else {
                nextChild = children[children.length - 1]
                switch (nextChild.kindName) {
                    case "VariableDeclaration":
                        processElement()
                        break
                    default: break arrayLoop
                }
            }
        }
        pr.cc(elements, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "VariableDeclarationList",
                child: children[children.length - 1],
            })
        }
        return
    }
    function VariableStatement(
        $: uast.Node<Annotation>,
        callback: ($: tast.TVariableStatement<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTVariableStatement<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TVariableStatement_export",
                kindNameOptions: [ "ExportKeyword"],
            })
            return
        }
        if (currentChild.kindName !== "ExportKeyword") {
            reportUnexpectedChild({
                path: "TVariableStatement_export",
                child: currentChild,
            })
            return
        }
        ExportKeyword(
            currentChild,
            ($) => {
                const _export = $
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TVariableStatement_variableDeclarationList",
                        kindNameOptions: [ "VariableDeclarationList"],
                    })
                    return
                }
                if (currentChild.kindName !== "VariableDeclarationList") {
                    reportUnexpectedChild({
                        path: "TVariableStatement_variableDeclarationList",
                        child: currentChild,
                    })
                    return
                }
                VariableDeclarationList(
                    currentChild,
                    ($) => {
                        const _variableDeclarationList = $
                        sequenceEnd({
                            "export": _export,
                            "variableDeclarationList": _variableDeclarationList,
                        })
                    }
                )
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "VariableStatement",
                child: children[children.length - 1],
            })
        }
        return
    }
    if ($.kindName !== "SourceFile") {
        reportUnexpectedRoot({
            root: $,
        })
        return
    } else {
        SourceFile(
            $,
            ($) => {
                callback($)
            },
        )
        return
    }
}