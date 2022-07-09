import * as pr from "pareto-lib-core"
import * as pa from "pareto-api-core"
import * as tast from "../../interface/types/ts_api"
import * as uast from "../../interface/types/uast"

export function parse<Annotation>(
    $: uast.TUntypedNode<Annotation>,
    $i: {
        callback: ($: tast.TRoot<Annotation>) => void,
        reportUnexpectedRoot: ($: { root: uast.TUntypedNode<Annotation>, }) => void,
        reportUnexpectedChild: ($: { path: string, child: uast.TUntypedNode<Annotation>, expected: pa.optional<string[]> }) => void,
        reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string[], }) => void,
    },
): void {
    const $x = $i
    function Gidentifier(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGidentifier<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gidentifier",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            $x.reportUnexpectedChild({
                path: "Gidentifier",
                child: currentChild,
                expected: ["Identifier"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGidentifier$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            callback({
                annotation: $.annotation,
                value: $.value
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
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
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGinitialization<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Ginitialization = ($: tast.TVTGinitialization<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Ginitialization",
                kindNameOptions: ["Identifier", "ArrayLiteralExpression", "FalseKeyword", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "TrueKeyword", "ParenthesizedExpression", "ObjectLiteralExpression"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_identifier = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_identifier",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    $x.reportUnexpectedChild({
                        path: "Ginitialization_identifier",
                        child: currentChild,
                        expected: ["Identifier"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGinitialization_identifier$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        value: $.value
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
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
            const choose_literal = () => {
                GliteralDataInitialization(node, children, ($) => {
                    choiceEnd_Ginitialization(["literal", $])
                })
            }
            const choose_objectLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_objectLiteral",
                        kindNameOptions: [ "ObjectLiteralExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ObjectLiteralExpression") {
                    $x.reportUnexpectedChild({
                        path: "Ginitialization_objectLiteral",
                        child: currentChild,
                        expected: ["ObjectLiteralExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGinitialization_objectLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const elements: tast.TVTGinitialization_objectLiteral$<Annotation>[] = []
                    const processElement = () => {
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Ginitialization_objectLiteral$",
                                kindNameOptions: [ "PropertyAssignment"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "PropertyAssignment") {
                            $x.reportUnexpectedChild({
                                path: "Ginitialization_objectLiteral$",
                                child: currentChild,
                                expected: ["PropertyAssignment"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNGinitialization_objectLiteral$$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                            const sequenceEnd = ($: tast.TVTGinitialization_objectLiteral$$<Annotation>) => {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                })
                            }
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                $x.reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Ginitialization_objectLiteral$$_name",
                                    kindNameOptions: [ "StringLiteral"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "StringLiteral") {
                                $x.reportUnexpectedChild({
                                    path: "Ginitialization_objectLiteral$$_name",
                                    child: currentChild,
                                    expected: ["StringLiteral"],
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGinitialization_objectLiteral$$_name$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.TUntypedNode<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                callback({
                                    annotation: $.annotation,
                                    value: $.value
                                })
                                if (children.length > 0) {
                                    $x.reportUnexpectedChild({
                                        path: "Ginitialization_objectLiteral$$_name$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    const _name = $
                                    Ginitialization(node, children, ($) => {
                                        const _initialization = $
                                        sequenceEnd({
                                            "name": _name,
                                            "initialization": _initialization,
                                        })
                                    })
                                }
                            )
                            if (children.length > 0) {
                                $x.reportUnexpectedChild({
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
                        $x.reportUnexpectedChild({
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
            switch (nextChild.kindName) {
                case "Identifier": {
                    choose_identifier()
                    break
                }
                case "ArrayLiteralExpression": {
                    choose_literal()
                    break
                }
                case "FalseKeyword": {
                    choose_literal()
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    choose_literal()
                    break
                }
                case "NumericLiteral": {
                    choose_literal()
                    break
                }
                case "NullKeyword": {
                    choose_literal()
                    break
                }
                case "TrueKeyword": {
                    choose_literal()
                    break
                }
                case "ParenthesizedExpression": {
                    choose_literal()
                    break
                }
                case "ObjectLiteralExpression": {
                    choose_objectLiteral()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "Ginitialization",
                        child: nextChild,
                        expected: ["Identifier", "ArrayLiteralExpression", "FalseKeyword", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "TrueKeyword", "ParenthesizedExpression", "ObjectLiteralExpression"],
                    })
                }
            }
        }
    }
    function GliteralDataInitialization(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGliteralDataInitialization<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_GliteralDataInitialization = ($: tast.TVTGliteralDataInitialization<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GliteralDataInitialization",
                kindNameOptions: ["ArrayLiteralExpression", "FalseKeyword", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "TrueKeyword", "ParenthesizedExpression"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_state = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GliteralDataInitialization_state",
                        kindNameOptions: [ "ArrayLiteralExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrayLiteralExpression") {
                    $x.reportUnexpectedChild({
                        path: "GliteralDataInitialization_state",
                        child: currentChild,
                        expected: ["ArrayLiteralExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGliteralDataInitialization_state$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGliteralDataInitialization_state$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "GliteralDataInitialization_state$_state",
                            kindNameOptions: [ "StringLiteral"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "StringLiteral") {
                        $x.reportUnexpectedChild({
                            path: "GliteralDataInitialization_state$_state",
                            child: currentChild,
                            expected: ["StringLiteral"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNGliteralDataInitialization_state$_state$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        callback({
                            annotation: $.annotation,
                            value: $.value
                        })
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
                                path: "GliteralDataInitialization_state$_state$",
                                child: children[children.length - 1],
                                expected: null,
                            })
                            return
                        }
                    })(
                        currentChild,
                        ($) => {
                            const _state = $
                            Ginitialization(node, children, ($) => {
                                const _data = $
                                sequenceEnd({
                                    "state": _state,
                                    "data": _data,
                                })
                            })
                        }
                    )
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GliteralDataInitialization_state$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GliteralDataInitialization(["state", $])
                    }
                )
            }
            const choose_false = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GliteralDataInitialization_false",
                        kindNameOptions: [ "FalseKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "FalseKeyword") {
                    $x.reportUnexpectedChild({
                        path: "GliteralDataInitialization_false",
                        child: currentChild,
                        expected: ["FalseKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGliteralDataInitialization_false$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GliteralDataInitialization_false$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GliteralDataInitialization(["false", $])
                    }
                )
            }
            const choose_stringLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GliteralDataInitialization_stringLiteral",
                        kindNameOptions: [ "NoSubstitutionTemplateLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "NoSubstitutionTemplateLiteral") {
                    $x.reportUnexpectedChild({
                        path: "GliteralDataInitialization_stringLiteral",
                        child: currentChild,
                        expected: ["NoSubstitutionTemplateLiteral"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGliteralDataInitialization_stringLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        value: $.value
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GliteralDataInitialization_stringLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GliteralDataInitialization(["stringLiteral", $])
                    }
                )
            }
            const choose_numericLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GliteralDataInitialization_numericLiteral",
                        kindNameOptions: [ "NumericLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "NumericLiteral") {
                    $x.reportUnexpectedChild({
                        path: "GliteralDataInitialization_numericLiteral",
                        child: currentChild,
                        expected: ["NumericLiteral"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGliteralDataInitialization_numericLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback({
                        annotation: $.annotation,
                        value: $.value
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GliteralDataInitialization_numericLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GliteralDataInitialization(["numericLiteral", $])
                    }
                )
            }
            const choose_null = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GliteralDataInitialization_null",
                        kindNameOptions: [ "NullKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "NullKeyword") {
                    $x.reportUnexpectedChild({
                        path: "GliteralDataInitialization_null",
                        child: currentChild,
                        expected: ["NullKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGliteralDataInitialization_null$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GliteralDataInitialization_null$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GliteralDataInitialization(["null", $])
                    }
                )
            }
            const choose_true = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GliteralDataInitialization_true",
                        kindNameOptions: [ "TrueKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "TrueKeyword") {
                    $x.reportUnexpectedChild({
                        path: "GliteralDataInitialization_true",
                        child: currentChild,
                        expected: ["TrueKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGliteralDataInitialization_true$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GliteralDataInitialization_true$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GliteralDataInitialization(["true", $])
                    }
                )
            }
            const choose_array = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GliteralDataInitialization_array",
                        kindNameOptions: [ "ParenthesizedExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ParenthesizedExpression") {
                    $x.reportUnexpectedChild({
                        path: "GliteralDataInitialization_array",
                        child: currentChild,
                        expected: ["ParenthesizedExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGliteralDataInitialization_array$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "GliteralDataInitialization_array$",
                            kindNameOptions: [ "ArrayLiteralExpression"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "ArrayLiteralExpression") {
                        $x.reportUnexpectedChild({
                            path: "GliteralDataInitialization_array$",
                            child: currentChild,
                            expected: ["ArrayLiteralExpression"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNGliteralDataInitialization_array$$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                        const elements: tast.TVTGliteralDataInitialization_array$$<Annotation>[] = []
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
                                    case "Identifier":
                                        processElement()
                                        break
                                    case "ArrayLiteralExpression":
                                        processElement()
                                        break
                                    case "FalseKeyword":
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
                                    case "TrueKeyword":
                                        processElement()
                                        break
                                    case "ParenthesizedExpression":
                                        processElement()
                                        break
                                    case "ObjectLiteralExpression":
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
                            $x.reportUnexpectedChild({
                                path: "GliteralDataInitialization_array$$",
                                child: children[children.length - 1],
                                expected: null,
                            })
                            return
                        }
                    })(
                        currentChild,
                        ($) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                    )
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GliteralDataInitialization_array$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GliteralDataInitialization(["array", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "ArrayLiteralExpression": {
                    choose_state()
                    break
                }
                case "FalseKeyword": {
                    choose_false()
                    break
                }
                case "NoSubstitutionTemplateLiteral": {
                    choose_stringLiteral()
                    break
                }
                case "NumericLiteral": {
                    choose_numericLiteral()
                    break
                }
                case "NullKeyword": {
                    choose_null()
                    break
                }
                case "TrueKeyword": {
                    choose_true()
                    break
                }
                case "ParenthesizedExpression": {
                    choose_array()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "GliteralDataInitialization",
                        child: nextChild,
                        expected: ["ArrayLiteralExpression", "FalseKeyword", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "TrueKeyword", "ParenthesizedExpression"],
                    })
                }
            }
        }
    }
    function GtypelessParameter(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGtypelessParameter<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GtypelessParameter",
                kindNameOptions: [ "Parameter"],
            })
            return
        }
        if (currentChild.kindName !== "Parameter") {
            $x.reportUnexpectedChild({
                path: "GtypelessParameter",
                child: currentChild,
                expected: ["Parameter"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGtypelessParameter$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            Gidentifier(node, children, ($) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "GtypelessParameter$",
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
    if ($.kindName !== "SourceFile") {
        $x.reportUnexpectedRoot({
            root: $,
        })
        return
    } else {
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNroot<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            const sequenceEnd = ($: tast.TVTroot<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            const elements: tast.TVTroot_import<Annotation>[] = []
            const processElement = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "root_import",
                        kindNameOptions: [ "ImportDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "ImportDeclaration") {
                    $x.reportUnexpectedChild({
                        path: "root_import",
                        child: currentChild,
                        expected: ["ImportDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNroot_import$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTroot_import$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "root_import$_clause",
                            kindNameOptions: [ "ImportClause"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "ImportClause") {
                        $x.reportUnexpectedChild({
                            path: "root_import$_clause",
                            child: currentChild,
                            expected: ["ImportClause"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNroot_import$_clause$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                        const choiceEnd_root_import$_clause$ = ($: tast.TVTroot_import$_clause$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        if (children.length === 0) {
                            $x.reportMissingToken({
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
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "root_import$_clause$_namespace",
                                        kindNameOptions: [ "NamespaceImport"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "NamespaceImport") {
                                    $x.reportUnexpectedChild({
                                        path: "root_import$_clause$_namespace",
                                        child: currentChild,
                                        expected: ["NamespaceImport"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNroot_import$_clause$_namespace$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                    Gidentifier(node, children, ($) => {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        })
                                    })
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
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
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "root_import$_clause$_named",
                                        kindNameOptions: [ "NamedImports"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "NamedImports") {
                                    $x.reportUnexpectedChild({
                                        path: "root_import$_clause$_named",
                                        child: currentChild,
                                        expected: ["NamedImports"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNroot_import$_clause$_named$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                    const elements: tast.TVTroot_import$_clause$_named$<Annotation>[] = []
                                    const processElement = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "root_import$_clause$_named$",
                                                kindNameOptions: [ "ImportSpecifier"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "ImportSpecifier") {
                                            $x.reportUnexpectedChild({
                                                path: "root_import$_clause$_named$",
                                                child: currentChild,
                                                expected: ["ImportSpecifier"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: tast.TNroot_import$_clause$_named$$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.TUntypedNode<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                            const sequenceEnd = ($: tast.TVTroot_import$_clause$_named$$<Annotation>) => {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                })
                                            }
                                            Gidentifier(node, children, ($) => {
                                                const _name = $
                                                let optional: null | tast.TVTroot_import$_clause$_named$$_as<Annotation> = null
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
                                                $x.reportUnexpectedChild({
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
                                        $x.reportUnexpectedChild({
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
                                    $x.reportUnexpectedChild({
                                        path: "root_import$_clause$",
                                        child: nextChild,
                                        expected: ["NamespaceImport", "NamedImports"],
                                    })
                                }
                            }
                        }
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
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
                                $x.reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "root_import$_file",
                                    kindNameOptions: [ "StringLiteral"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "StringLiteral") {
                                $x.reportUnexpectedChild({
                                    path: "root_import$_file",
                                    child: currentChild,
                                    expected: ["StringLiteral"],
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNroot_import$_file$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.TUntypedNode<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                callback({
                                    annotation: $.annotation,
                                    value: $.value
                                })
                                if (children.length > 0) {
                                    $x.reportUnexpectedChild({
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
                        $x.reportUnexpectedChild({
                            path: "root_import$",
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
                        case "ImportDeclaration":
                            processElement()
                            break
                        default: break arrayLoop
                    }
                }
            }
            pr.cc(elements, ($) => {
                const _import = $
                const elements: tast.TVTroot_variables<Annotation>[] = []
                const processElement = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "root_variables",
                            kindNameOptions: [ "VariableStatement"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "VariableStatement") {
                        $x.reportUnexpectedChild({
                            path: "root_variables",
                            child: currentChild,
                            expected: ["VariableStatement"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNroot_variables$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                        const sequenceEnd = ($: tast.TVTroot_variables$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "root_variables$_export",
                                kindNameOptions: [ "ExportKeyword"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "ExportKeyword") {
                            $x.reportUnexpectedChild({
                                path: "root_variables$_export",
                                child: currentChild,
                                expected: ["ExportKeyword"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNroot_variables$_export$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            callback($.annotation)
                            if (children.length > 0) {
                                $x.reportUnexpectedChild({
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
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "root_variables$_variableDeclarationList",
                                        kindNameOptions: [ "VariableDeclarationList"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "VariableDeclarationList") {
                                    $x.reportUnexpectedChild({
                                        path: "root_variables$_variableDeclarationList",
                                        child: currentChild,
                                        expected: ["VariableDeclarationList"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNroot_variables$_variableDeclarationList$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                    const elements: tast.TVTroot_variables$_variableDeclarationList$<Annotation>[] = []
                                    const processElement = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "root_variables$_variableDeclarationList$",
                                                kindNameOptions: [ "VariableDeclaration"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "VariableDeclaration") {
                                            $x.reportUnexpectedChild({
                                                path: "root_variables$_variableDeclarationList$",
                                                child: currentChild,
                                                expected: ["VariableDeclaration"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: tast.TNroot_variables$_variableDeclarationList$$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.TUntypedNode<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                            const sequenceEnd = ($: tast.TVTroot_variables$_variableDeclarationList$$<Annotation>) => {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                })
                                            }
                                            currentChild = children.pop()
                                            if (currentChild === undefined) {
                                                $x.reportMissingToken({
                                                    parentAnnotation: node.annotation,
                                                    path: "root_variables$_variableDeclarationList$$_name",
                                                    kindNameOptions: [ "Identifier"],
                                                })
                                                return
                                            }
                                            if (currentChild.kindName !== "Identifier") {
                                                $x.reportUnexpectedChild({
                                                    path: "root_variables$_variableDeclarationList$$_name",
                                                    child: currentChild,
                                                    expected: ["Identifier"],
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: tast.TNroot_variables$_variableDeclarationList$$_name$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                $.children.forEach(($) => { children.push($) })
                                                children.reverse()
                                                callback({
                                                    annotation: $.annotation,
                                                    value: $.value
                                                })
                                                if (children.length > 0) {
                                                    $x.reportUnexpectedChild({
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
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.annotation,
                                                            path: "root_variables$_variableDeclarationList$$_type",
                                                            kindNameOptions: [ "TypeReference"],
                                                        })
                                                        return
                                                    }
                                                    if (currentChild.kindName !== "TypeReference") {
                                                        $x.reportUnexpectedChild({
                                                            path: "root_variables$_variableDeclarationList$$_type",
                                                            child: currentChild,
                                                            expected: ["TypeReference"],
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode<Annotation>,
                                                        callback: ($: tast.TNroot_variables$_variableDeclarationList$$_type$<Annotation>) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children: uast.TUntypedNode<Annotation>[] = []
                                                        $.children.forEach(($) => { children.push($) })
                                                        children.reverse()
                                                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                        const sequenceEnd = ($: tast.TVTroot_variables$_variableDeclarationList$$_type$<Annotation>) => {
                                                            callback({
                                                                annotation: node.annotation,
                                                                content: $,
                                                            })
                                                        }
                                                        currentChild = children.pop()
                                                        if (currentChild === undefined) {
                                                            $x.reportMissingToken({
                                                                parentAnnotation: node.annotation,
                                                                path: "root_variables$_variableDeclarationList$$_type$_name",
                                                                kindNameOptions: [ "QualifiedName"],
                                                            })
                                                            return
                                                        }
                                                        if (currentChild.kindName !== "QualifiedName") {
                                                            $x.reportUnexpectedChild({
                                                                path: "root_variables$_variableDeclarationList$$_type$_name",
                                                                child: currentChild,
                                                                expected: ["QualifiedName"],
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNroot_variables$_variableDeclarationList$$_type$_name$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children: uast.TUntypedNode<Annotation>[] = []
                                                            $.children.forEach(($) => { children.push($) })
                                                            children.reverse()
                                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                            const sequenceEnd = ($: tast.TVTroot_variables$_variableDeclarationList$$_type$_name$<Annotation>) => {
                                                                callback({
                                                                    annotation: node.annotation,
                                                                    content: $,
                                                                })
                                                            }
                                                            currentChild = children.pop()
                                                            if (currentChild === undefined) {
                                                                $x.reportMissingToken({
                                                                    parentAnnotation: node.annotation,
                                                                    path: "root_variables$_variableDeclarationList$$_type$_name$_context",
                                                                    kindNameOptions: [ "Identifier"],
                                                                })
                                                                return
                                                            }
                                                            if (currentChild.kindName !== "Identifier") {
                                                                $x.reportUnexpectedChild({
                                                                    path: "root_variables$_variableDeclarationList$$_type$_name$_context",
                                                                    child: currentChild,
                                                                    expected: ["Identifier"],
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.TUntypedNode<Annotation>,
                                                                callback: ($: tast.TNroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation>) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                                $.children.forEach(($) => { children.push($) })
                                                                children.reverse()
                                                                callback({
                                                                    annotation: $.annotation,
                                                                    value: $.value
                                                                })
                                                                if (children.length > 0) {
                                                                    $x.reportUnexpectedChild({
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
                                                                        $x.reportMissingToken({
                                                                            parentAnnotation: node.annotation,
                                                                            path: "root_variables$_variableDeclarationList$$_type$_name$_type",
                                                                            kindNameOptions: [ "Identifier"],
                                                                        })
                                                                        return
                                                                    }
                                                                    if (currentChild.kindName !== "Identifier") {
                                                                        $x.reportUnexpectedChild({
                                                                            path: "root_variables$_variableDeclarationList$$_type$_name$_type",
                                                                            child: currentChild,
                                                                            expected: ["Identifier"],
                                                                        })
                                                                        return
                                                                    }
                                                                    ((
                                                                        $: uast.TUntypedNode<Annotation>,
                                                                        callback: ($: tast.TNroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation>) => void,
                                                                    ): void => {
                                                                        const node = $
                                                                        const children: uast.TUntypedNode<Annotation>[] = []
                                                                        $.children.forEach(($) => { children.push($) })
                                                                        children.reverse()
                                                                        callback({
                                                                            annotation: $.annotation,
                                                                            value: $.value
                                                                        })
                                                                        if (children.length > 0) {
                                                                            $x.reportUnexpectedChild({
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
                                                                $x.reportUnexpectedChild({
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
                                                            $x.reportUnexpectedChild({
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
                                                            let optional: null | tast.TVTroot_variables$_variableDeclarationList$$_one<Annotation> = null
                                                            const setOptional = () => {
                                                                Ginitialization(node, children, ($) => {
                                                                    optional = $
                                                                })
                                                            }
                                                            if (children.length === 0) {} else {
                                                                nextChild = children[children.length - 1]
                                                                switch (nextChild.kindName) {
                                                                    case "Identifier":
                                                                        setOptional()
                                                                        break
                                                                    case "ArrayLiteralExpression":
                                                                        setOptional()
                                                                        break
                                                                    case "FalseKeyword":
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
                                                                    case "TrueKeyword":
                                                                        setOptional()
                                                                        break
                                                                    case "ParenthesizedExpression":
                                                                        setOptional()
                                                                        break
                                                                    case "ObjectLiteralExpression":
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
                                                $x.reportUnexpectedChild({
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
                                        $x.reportUnexpectedChild({
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
                            $x.reportUnexpectedChild({
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
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "root_endOfFile",
                            kindNameOptions: [ "EndOfFileToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "EndOfFileToken") {
                        $x.reportUnexpectedChild({
                            path: "root_endOfFile",
                            child: currentChild,
                            expected: ["EndOfFileToken"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNroot_endOfFile$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        callback($.annotation)
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
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
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "root",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            $,
            ($) => {
                $x.callback($)
            },
        )
    }
}