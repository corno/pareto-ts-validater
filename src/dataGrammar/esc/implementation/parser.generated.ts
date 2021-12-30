import * as pr from "pareto-runtime"
import * as tast from "../../interface/types/ts_api.generated"
import * as uast from "../../interface/types/uast.generated"

export function parse<Annotation>(
    $: uast.Node<Annotation>,
    callback: ($: tast.Nroot<Annotation>) => void,
    reportUnexpectedRoot: ($: { root: uast.Node<Annotation>, }) => void,
    reportUnexpectedChild: ($: { path: string, child: uast.Node<Annotation>, expected: pr.optional<string[]> }) => void,
    reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string[], }) => void,
): void {
    function Gidentifier(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gidentifier<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gidentifier",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "Gidentifier",
                child: currentChild,
                expected: ["Identifier"],
            })
            return
        }
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.NGidentifier$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            callback({
                annotation: $.annotation,
                content: $.value
            })
            if (children.length > 0) {
                reportUnexpectedChild({
                    path: "Gidentifier$",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            currentChild,
            ($) => {
                callback($)
            }
        )
    }
    function Ginitialization(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Ginitialization<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Ginitialization = ($: tast.VTGinitialization<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Ginitialization",
                kindNameOptions: ["ArrayLiteralExpression", "FalseKeyword", "Identifier", "NoSubstitutionTemplateLiteral", "NumericLiteral", "ObjectLiteralExpression", "StringLiteral", "TrueKeyword"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_arrayLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_arrayLiteral",
                        kindNameOptions: [ "ArrayLiteralExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrayLiteralExpression") {
                    reportUnexpectedChild({
                        path: "Ginitialization_arrayLiteral",
                        child: currentChild,
                        expected: ["ArrayLiteralExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGinitialization_arrayLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const elements: tast.VGinitialization_arrayLiteral$<Annotation> = []
                    const processElement = () => {
                        Ginitialization(node, children, ($) => {
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
                            path: "Ginitialization_arrayLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginitialization(["arrayLiteral", $])
                    }
                )
            }
            const choose_false = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_false",
                        kindNameOptions: [ "FalseKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "FalseKeyword") {
                    reportUnexpectedChild({
                        path: "Ginitialization_false",
                        child: currentChild,
                        expected: ["FalseKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGinitialization_false$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Ginitialization_false$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginitialization(["false", $])
                    }
                )
            }
            const choose_identifier = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_identifier",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    reportUnexpectedChild({
                        path: "Ginitialization_identifier",
                        child: currentChild,
                        expected: ["Identifier"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGinitialization_identifier$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: $.value
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Ginitialization_identifier$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginitialization(["identifier", $])
                    }
                )
            }
            const choose_noSubstitutionTemplateLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_noSubstitutionTemplateLiteral",
                        kindNameOptions: [ "NoSubstitutionTemplateLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "NoSubstitutionTemplateLiteral") {
                    reportUnexpectedChild({
                        path: "Ginitialization_noSubstitutionTemplateLiteral",
                        child: currentChild,
                        expected: ["NoSubstitutionTemplateLiteral"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGinitialization_noSubstitutionTemplateLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: $.value
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Ginitialization_noSubstitutionTemplateLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginitialization(["noSubstitutionTemplateLiteral", $])
                    }
                )
            }
            const choose_numericLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_numericLiteral",
                        kindNameOptions: [ "NumericLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "NumericLiteral") {
                    reportUnexpectedChild({
                        path: "Ginitialization_numericLiteral",
                        child: currentChild,
                        expected: ["NumericLiteral"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGinitialization_numericLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: $.value
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Ginitialization_numericLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginitialization(["numericLiteral", $])
                    }
                )
            }
            const choose_objectLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_objectLiteral",
                        kindNameOptions: [ "ObjectLiteralExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ObjectLiteralExpression") {
                    reportUnexpectedChild({
                        path: "Ginitialization_objectLiteral",
                        child: currentChild,
                        expected: ["ObjectLiteralExpression"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGinitialization_objectLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const elements: tast.VGinitialization_objectLiteral$<Annotation> = []
                    const processElement = () => {
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Ginitialization_objectLiteral$",
                                kindNameOptions: [ "PropertyAssignment"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "PropertyAssignment") {
                            reportUnexpectedChild({
                                path: "Ginitialization_objectLiteral$",
                                child: currentChild,
                                expected: ["PropertyAssignment"],
                            })
                            return
                        }
                        ((
                            $: uast.Node<Annotation>,
                            callback: ($: tast.NGinitialization_objectLiteral$$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.Node<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.Node<Annotation> | undefined
                            let nextChild: uast.Node<Annotation> | undefined
                            const sequenceEnd = ($: tast.VTGinitialization_objectLiteral$$<Annotation>) => {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                })
                            }
                            const choiceEnd_Ginitialization_objectLiteral$$_name = ($: tast.VTGinitialization_objectLiteral$$_name<Annotation>) => {
                                const _name = $
                                Ginitialization(node, children, ($) => {
                                    const _initialization = $
                                    sequenceEnd({
                                        "name": _name,
                                        "initialization": _initialization,
                                    })
                                })
                            }
                            if (children.length === 0) {
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Ginitialization_objectLiteral$$_name",
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
                                            path: "Ginitialization_objectLiteral$$_name_identifier",
                                            kindNameOptions: [ "Identifier"],
                                        })
                                        return
                                    }
                                    if (currentChild.kindName !== "Identifier") {
                                        reportUnexpectedChild({
                                            path: "Ginitialization_objectLiteral$$_name_identifier",
                                            child: currentChild,
                                            expected: ["Identifier"],
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.Node<Annotation>,
                                        callback: ($: tast.NGinitialization_objectLiteral$$_name_identifier$<Annotation>) => void,
                                    ): void => {
                                        const node = $
                                        const children: uast.Node<Annotation>[] = []
                                        $.children.forEach(($) => { children.push($) })
                                        children.reverse()
                                        callback({
                                            annotation: $.annotation,
                                            content: $.value
                                        })
                                        if (children.length > 0) {
                                            reportUnexpectedChild({
                                                path: "Ginitialization_objectLiteral$$_name_identifier$",
                                                child: children[children.length - 1],
                                                expected: null,
                                            })
                                            return
                                        }
                                    })(
                                        currentChild,
                                        ($) => {
                                            choiceEnd_Ginitialization_objectLiteral$$_name(["identifier", $])
                                        }
                                    )
                                }
                                const choose_stringLiteral = () => {
                                    currentChild = children.pop()
                                    if (currentChild === undefined) {
                                        reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "Ginitialization_objectLiteral$$_name_stringLiteral",
                                            kindNameOptions: [ "StringLiteral"],
                                        })
                                        return
                                    }
                                    if (currentChild.kindName !== "StringLiteral") {
                                        reportUnexpectedChild({
                                            path: "Ginitialization_objectLiteral$$_name_stringLiteral",
                                            child: currentChild,
                                            expected: ["StringLiteral"],
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.Node<Annotation>,
                                        callback: ($: tast.NGinitialization_objectLiteral$$_name_stringLiteral$<Annotation>) => void,
                                    ): void => {
                                        const node = $
                                        const children: uast.Node<Annotation>[] = []
                                        $.children.forEach(($) => { children.push($) })
                                        children.reverse()
                                        callback({
                                            annotation: $.annotation,
                                            content: $.value
                                        })
                                        if (children.length > 0) {
                                            reportUnexpectedChild({
                                                path: "Ginitialization_objectLiteral$$_name_stringLiteral$",
                                                child: children[children.length - 1],
                                                expected: null,
                                            })
                                            return
                                        }
                                    })(
                                        currentChild,
                                        ($) => {
                                            choiceEnd_Ginitialization_objectLiteral$$_name(["stringLiteral", $])
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
                                            path: "Ginitialization_objectLiteral$$_name",
                                            child: nextChild,
                                            expected: ["Identifier", "StringLiteral"],
                                        })
                                    }
                                }
                            }
                            if (children.length > 0) {
                                reportUnexpectedChild({
                                    path: "Ginitialization_objectLiteral$$",
                                    child: children[children.length - 1],
                                    expected: null,
                                })
                                return
                            }
                        })(
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
                            path: "Ginitialization_objectLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginitialization(["objectLiteral", $])
                    }
                )
            }
            const choose_stringLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_stringLiteral",
                        kindNameOptions: [ "StringLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringLiteral") {
                    reportUnexpectedChild({
                        path: "Ginitialization_stringLiteral",
                        child: currentChild,
                        expected: ["StringLiteral"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGinitialization_stringLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        content: $.value
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Ginitialization_stringLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginitialization(["stringLiteral", $])
                    }
                )
            }
            const choose_true = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_true",
                        kindNameOptions: [ "TrueKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "TrueKeyword") {
                    reportUnexpectedChild({
                        path: "Ginitialization_true",
                        child: currentChild,
                        expected: ["TrueKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.NGinitialization_true$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "Ginitialization_true$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginitialization(["true", $])
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
                        path: "Ginitialization",
                        child: nextChild,
                        expected: ["ArrayLiteralExpression", "FalseKeyword", "Identifier", "NoSubstitutionTemplateLiteral", "NumericLiteral", "ObjectLiteralExpression", "StringLiteral", "TrueKeyword"],
                    })
                }
            }
        }
    }
    if ($.kindName !== "SourceFile") {
        reportUnexpectedRoot({
            root: $,
        })
        return
    } else {
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.Nroot<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.Node<Annotation> | undefined
            let nextChild: uast.Node<Annotation> | undefined
            const sequenceEnd = ($: tast.VTroot<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "root_import",
                    kindNameOptions: [ "ImportDeclaration"],
                })
                return
            }
            if (currentChild.kindName !== "ImportDeclaration") {
                reportUnexpectedChild({
                    path: "root_import",
                    child: currentChild,
                    expected: ["ImportDeclaration"],
                })
                return
            }
            ((
                $: uast.Node<Annotation>,
                callback: ($: tast.Nroot_import$<Annotation>) => void,
            ): void => {
                const node = $
                const children: uast.Node<Annotation>[] = []
                $.children.forEach(($) => { children.push($) })
                children.reverse()
                let currentChild: uast.Node<Annotation> | undefined
                let nextChild: uast.Node<Annotation> | undefined
                const sequenceEnd = ($: tast.VTroot_import$<Annotation>) => {
                    callback({
                        annotation: node.annotation,
                        content: $,
                    })
                }
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "root_import$_clause",
                        kindNameOptions: [ "ImportClause"],
                    })
                    return
                }
                if (currentChild.kindName !== "ImportClause") {
                    reportUnexpectedChild({
                        path: "root_import$_clause",
                        child: currentChild,
                        expected: ["ImportClause"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.Nroot_import$_clause$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const choiceEnd_root_import$_clause$ = ($: tast.VTroot_import$_clause$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    if (children.length === 0) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "root_import$_clause$",
                            kindNameOptions: ["NamespaceImport", "NamedImports"],
                        })
                        return
                    } else {
                        nextChild = children[children.length - 1]
                        const choose_namespace = () => {
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "root_import$_clause$_namespace",
                                    kindNameOptions: [ "NamespaceImport"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "NamespaceImport") {
                                reportUnexpectedChild({
                                    path: "root_import$_clause$_namespace",
                                    child: currentChild,
                                    expected: ["NamespaceImport"],
                                })
                                return
                            }
                            ((
                                $: uast.Node<Annotation>,
                                callback: ($: tast.Nroot_import$_clause$_namespace$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.Node<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                let currentChild: uast.Node<Annotation> | undefined
                                let nextChild: uast.Node<Annotation> | undefined
                                Gidentifier(node, children, ($) => {
                                    callback({
                                        annotation: node.annotation,
                                        content: $,
                                    })
                                })
                                if (children.length > 0) {
                                    reportUnexpectedChild({
                                        path: "root_import$_clause$_namespace$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_root_import$_clause$(["namespace", $])
                                }
                            )
                        }
                        const choose_named = () => {
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "root_import$_clause$_named",
                                    kindNameOptions: [ "NamedImports"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "NamedImports") {
                                reportUnexpectedChild({
                                    path: "root_import$_clause$_named",
                                    child: currentChild,
                                    expected: ["NamedImports"],
                                })
                                return
                            }
                            ((
                                $: uast.Node<Annotation>,
                                callback: ($: tast.Nroot_import$_clause$_named$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.Node<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                let currentChild: uast.Node<Annotation> | undefined
                                let nextChild: uast.Node<Annotation> | undefined
                                const elements: tast.Vroot_import$_clause$_named$<Annotation> = []
                                const processElement = () => {
                                    currentChild = children.pop()
                                    if (currentChild === undefined) {
                                        reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "root_import$_clause$_named$",
                                            kindNameOptions: [ "ImportSpecifier"],
                                        })
                                        return
                                    }
                                    if (currentChild.kindName !== "ImportSpecifier") {
                                        reportUnexpectedChild({
                                            path: "root_import$_clause$_named$",
                                            child: currentChild,
                                            expected: ["ImportSpecifier"],
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.Node<Annotation>,
                                        callback: ($: tast.Nroot_import$_clause$_named$$<Annotation>) => void,
                                    ): void => {
                                        const node = $
                                        const children: uast.Node<Annotation>[] = []
                                        $.children.forEach(($) => { children.push($) })
                                        children.reverse()
                                        let currentChild: uast.Node<Annotation> | undefined
                                        let nextChild: uast.Node<Annotation> | undefined
                                        const sequenceEnd = ($: tast.VTroot_import$_clause$_named$$<Annotation>) => {
                                            callback({
                                                annotation: node.annotation,
                                                content: $,
                                            })
                                        }
                                        Gidentifier(node, children, ($) => {
                                            const _name = $
                                            let optional: tast.Vroot_import$_clause$_named$$_as<Annotation> = null
                                            const setOptional = () => {
                                                Gidentifier(node, children, ($) => {
                                                    optional = $
                                                })
                                            }
                                            if (children.length === 0) {} else {
                                                nextChild = children[children.length - 1]
                                                switch (nextChild.kindName) {
                                                    case "Identifier":
                                                        setOptional()
                                                        break
                                                }
                                            }
                                            pr.cc(optional, ($) => {
                                                const _as = $
                                                sequenceEnd({
                                                    "name": _name,
                                                    "as": _as,
                                                })
                                            })
                                        })
                                        if (children.length > 0) {
                                            reportUnexpectedChild({
                                                path: "root_import$_clause$_named$$",
                                                child: children[children.length - 1],
                                                expected: null,
                                            })
                                            return
                                        }
                                    })(
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
                                            case "ImportSpecifier":
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
                                        path: "root_import$_clause$_named$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_root_import$_clause$(["named", $])
                                }
                            )
                        }
                        switch (nextChild.kindName) {
                            case "NamespaceImport": {
                                choose_namespace()
                                break
                            }
                            case "NamedImports": {
                                choose_named()
                                break
                            }
                            default: {
                                reportUnexpectedChild({
                                    path: "root_import$_clause$",
                                    child: nextChild,
                                    expected: ["NamespaceImport", "NamedImports"],
                                })
                            }
                        }
                    }
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "root_import$_clause$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        const _clause = $
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "root_import$_file",
                                kindNameOptions: [ "StringLiteral"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "StringLiteral") {
                            reportUnexpectedChild({
                                path: "root_import$_file",
                                child: currentChild,
                                expected: ["StringLiteral"],
                            })
                            return
                        }
                        ((
                            $: uast.Node<Annotation>,
                            callback: ($: tast.Nroot_import$_file$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.Node<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            callback({
                                annotation: $.annotation,
                                content: $.value
                            })
                            if (children.length > 0) {
                                reportUnexpectedChild({
                                    path: "root_import$_file$",
                                    child: children[children.length - 1],
                                    expected: null,
                                })
                                return
                            }
                        })(
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
                        path: "root_import$",
                        child: children[children.length - 1],
                        expected: null,
                    })
                    return
                }
            })(
                currentChild,
                ($) => {
                    const _import = $
                    const elements: tast.Vroot_variables<Annotation> = []
                    const processElement = () => {
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "root_variables",
                                kindNameOptions: [ "VariableStatement"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "VariableStatement") {
                            reportUnexpectedChild({
                                path: "root_variables",
                                child: currentChild,
                                expected: ["VariableStatement"],
                            })
                            return
                        }
                        ((
                            $: uast.Node<Annotation>,
                            callback: ($: tast.Nroot_variables$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.Node<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.Node<Annotation> | undefined
                            let nextChild: uast.Node<Annotation> | undefined
                            const sequenceEnd = ($: tast.VTroot_variables$<Annotation>) => {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                })
                            }
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "root_variables$_export",
                                    kindNameOptions: [ "ExportKeyword"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "ExportKeyword") {
                                reportUnexpectedChild({
                                    path: "root_variables$_export",
                                    child: currentChild,
                                    expected: ["ExportKeyword"],
                                })
                                return
                            }
                            ((
                                $: uast.Node<Annotation>,
                                callback: ($: tast.Nroot_variables$_export$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.Node<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                callback({
                                    annotation: $.annotation,
                                })
                                if (children.length > 0) {
                                    reportUnexpectedChild({
                                        path: "root_variables$_export$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    const _export = $
                                    currentChild = children.pop()
                                    if (currentChild === undefined) {
                                        reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "root_variables$_variableDeclarationList",
                                            kindNameOptions: [ "VariableDeclarationList"],
                                        })
                                        return
                                    }
                                    if (currentChild.kindName !== "VariableDeclarationList") {
                                        reportUnexpectedChild({
                                            path: "root_variables$_variableDeclarationList",
                                            child: currentChild,
                                            expected: ["VariableDeclarationList"],
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.Node<Annotation>,
                                        callback: ($: tast.Nroot_variables$_variableDeclarationList$<Annotation>) => void,
                                    ): void => {
                                        const node = $
                                        const children: uast.Node<Annotation>[] = []
                                        $.children.forEach(($) => { children.push($) })
                                        children.reverse()
                                        let currentChild: uast.Node<Annotation> | undefined
                                        let nextChild: uast.Node<Annotation> | undefined
                                        const elements: tast.Vroot_variables$_variableDeclarationList$<Annotation> = []
                                        const processElement = () => {
                                            currentChild = children.pop()
                                            if (currentChild === undefined) {
                                                reportMissingToken({
                                                    parentAnnotation: node.annotation,
                                                    path: "root_variables$_variableDeclarationList$",
                                                    kindNameOptions: [ "VariableDeclaration"],
                                                })
                                                return
                                            }
                                            if (currentChild.kindName !== "VariableDeclaration") {
                                                reportUnexpectedChild({
                                                    path: "root_variables$_variableDeclarationList$",
                                                    child: currentChild,
                                                    expected: ["VariableDeclaration"],
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.Node<Annotation>,
                                                callback: ($: tast.Nroot_variables$_variableDeclarationList$$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children: uast.Node<Annotation>[] = []
                                                $.children.forEach(($) => { children.push($) })
                                                children.reverse()
                                                let currentChild: uast.Node<Annotation> | undefined
                                                let nextChild: uast.Node<Annotation> | undefined
                                                const sequenceEnd = ($: tast.VTroot_variables$_variableDeclarationList$$<Annotation>) => {
                                                    callback({
                                                        annotation: node.annotation,
                                                        content: $,
                                                    })
                                                }
                                                currentChild = children.pop()
                                                if (currentChild === undefined) {
                                                    reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "root_variables$_variableDeclarationList$$_name",
                                                        kindNameOptions: [ "Identifier"],
                                                    })
                                                    return
                                                }
                                                if (currentChild.kindName !== "Identifier") {
                                                    reportUnexpectedChild({
                                                        path: "root_variables$_variableDeclarationList$$_name",
                                                        child: currentChild,
                                                        expected: ["Identifier"],
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.Node<Annotation>,
                                                    callback: ($: tast.Nroot_variables$_variableDeclarationList$$_name$<Annotation>) => void,
                                                ): void => {
                                                    const node = $
                                                    const children: uast.Node<Annotation>[] = []
                                                    $.children.forEach(($) => { children.push($) })
                                                    children.reverse()
                                                    callback({
                                                        annotation: $.annotation,
                                                        content: $.value
                                                    })
                                                    if (children.length > 0) {
                                                        reportUnexpectedChild({
                                                            path: "root_variables$_variableDeclarationList$$_name$",
                                                            child: children[children.length - 1],
                                                            expected: null,
                                                        })
                                                        return
                                                    }
                                                })(
                                                    currentChild,
                                                    ($) => {
                                                        const _name = $
                                                        currentChild = children.pop()
                                                        if (currentChild === undefined) {
                                                            reportMissingToken({
                                                                parentAnnotation: node.annotation,
                                                                path: "root_variables$_variableDeclarationList$$_type",
                                                                kindNameOptions: [ "TypeReference"],
                                                            })
                                                            return
                                                        }
                                                        if (currentChild.kindName !== "TypeReference") {
                                                            reportUnexpectedChild({
                                                                path: "root_variables$_variableDeclarationList$$_type",
                                                                child: currentChild,
                                                                expected: ["TypeReference"],
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.Node<Annotation>,
                                                            callback: ($: tast.Nroot_variables$_variableDeclarationList$$_type$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children: uast.Node<Annotation>[] = []
                                                            $.children.forEach(($) => { children.push($) })
                                                            children.reverse()
                                                            let currentChild: uast.Node<Annotation> | undefined
                                                            let nextChild: uast.Node<Annotation> | undefined
                                                            const sequenceEnd = ($: tast.VTroot_variables$_variableDeclarationList$$_type$<Annotation>) => {
                                                                callback({
                                                                    annotation: node.annotation,
                                                                    content: $,
                                                                })
                                                            }
                                                            currentChild = children.pop()
                                                            if (currentChild === undefined) {
                                                                reportMissingToken({
                                                                    parentAnnotation: node.annotation,
                                                                    path: "root_variables$_variableDeclarationList$$_type$_name",
                                                                    kindNameOptions: [ "QualifiedName"],
                                                                })
                                                                return
                                                            }
                                                            if (currentChild.kindName !== "QualifiedName") {
                                                                reportUnexpectedChild({
                                                                    path: "root_variables$_variableDeclarationList$$_type$_name",
                                                                    child: currentChild,
                                                                    expected: ["QualifiedName"],
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.Node<Annotation>,
                                                                callback: ($: tast.Nroot_variables$_variableDeclarationList$$_type$_name$<Annotation>) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children: uast.Node<Annotation>[] = []
                                                                $.children.forEach(($) => { children.push($) })
                                                                children.reverse()
                                                                let currentChild: uast.Node<Annotation> | undefined
                                                                let nextChild: uast.Node<Annotation> | undefined
                                                                const sequenceEnd = ($: tast.VTroot_variables$_variableDeclarationList$$_type$_name$<Annotation>) => {
                                                                    callback({
                                                                        annotation: node.annotation,
                                                                        content: $,
                                                                    })
                                                                }
                                                                currentChild = children.pop()
                                                                if (currentChild === undefined) {
                                                                    reportMissingToken({
                                                                        parentAnnotation: node.annotation,
                                                                        path: "root_variables$_variableDeclarationList$$_type$_name$_context",
                                                                        kindNameOptions: [ "Identifier"],
                                                                    })
                                                                    return
                                                                }
                                                                if (currentChild.kindName !== "Identifier") {
                                                                    reportUnexpectedChild({
                                                                        path: "root_variables$_variableDeclarationList$$_type$_name$_context",
                                                                        child: currentChild,
                                                                        expected: ["Identifier"],
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.Node<Annotation>,
                                                                    callback: ($: tast.Nroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation>) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children: uast.Node<Annotation>[] = []
                                                                    $.children.forEach(($) => { children.push($) })
                                                                    children.reverse()
                                                                    callback({
                                                                        annotation: $.annotation,
                                                                        content: $.value
                                                                    })
                                                                    if (children.length > 0) {
                                                                        reportUnexpectedChild({
                                                                            path: "root_variables$_variableDeclarationList$$_type$_name$_context$",
                                                                            child: children[children.length - 1],
                                                                            expected: null,
                                                                        })
                                                                        return
                                                                    }
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        const _context = $
                                                                        currentChild = children.pop()
                                                                        if (currentChild === undefined) {
                                                                            reportMissingToken({
                                                                                parentAnnotation: node.annotation,
                                                                                path: "root_variables$_variableDeclarationList$$_type$_name$_type",
                                                                                kindNameOptions: [ "Identifier"],
                                                                            })
                                                                            return
                                                                        }
                                                                        if (currentChild.kindName !== "Identifier") {
                                                                            reportUnexpectedChild({
                                                                                path: "root_variables$_variableDeclarationList$$_type$_name$_type",
                                                                                child: currentChild,
                                                                                expected: ["Identifier"],
                                                                            })
                                                                            return
                                                                        }
                                                                        ((
                                                                            $: uast.Node<Annotation>,
                                                                            callback: ($: tast.Nroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation>) => void,
                                                                        ): void => {
                                                                            const node = $
                                                                            const children: uast.Node<Annotation>[] = []
                                                                            $.children.forEach(($) => { children.push($) })
                                                                            children.reverse()
                                                                            callback({
                                                                                annotation: $.annotation,
                                                                                content: $.value
                                                                            })
                                                                            if (children.length > 0) {
                                                                                reportUnexpectedChild({
                                                                                    path: "root_variables$_variableDeclarationList$$_type$_name$_type$",
                                                                                    child: children[children.length - 1],
                                                                                    expected: null,
                                                                                })
                                                                                return
                                                                            }
                                                                        })(
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
                                                                        path: "root_variables$_variableDeclarationList$$_type$_name$",
                                                                        child: children[children.length - 1],
                                                                        expected: null,
                                                                    })
                                                                    return
                                                                }
                                                            })(
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
                                                                    path: "root_variables$_variableDeclarationList$$_type$",
                                                                    child: children[children.length - 1],
                                                                    expected: null,
                                                                })
                                                                return
                                                            }
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                const _type = $
                                                                let optional: tast.Vroot_variables$_variableDeclarationList$$_one<Annotation> = null
                                                                const setOptional = () => {
                                                                    Ginitialization(node, children, ($) => {
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
                                                        path: "root_variables$_variableDeclarationList$$",
                                                        child: children[children.length - 1],
                                                        expected: null,
                                                    })
                                                    return
                                                }
                                            })(
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
                                                path: "root_variables$_variableDeclarationList$",
                                                child: children[children.length - 1],
                                                expected: null,
                                            })
                                            return
                                        }
                                    })(
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
                                    path: "root_variables$",
                                    child: children[children.length - 1],
                                    expected: null,
                                })
                                return
                            }
                        })(
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
                                path: "root_endOfFile",
                                kindNameOptions: [ "EndOfFileToken"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "EndOfFileToken") {
                            reportUnexpectedChild({
                                path: "root_endOfFile",
                                child: currentChild,
                                expected: ["EndOfFileToken"],
                            })
                            return
                        }
                        ((
                            $: uast.Node<Annotation>,
                            callback: ($: tast.Nroot_endOfFile$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.Node<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            callback({
                                annotation: $.annotation,
                            })
                            if (children.length > 0) {
                                reportUnexpectedChild({
                                    path: "root_endOfFile$",
                                    child: children[children.length - 1],
                                    expected: null,
                                })
                                return
                            }
                        })(
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
                    path: "root",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            $,
            ($) => {
                callback($)
            },
        )
    }
}