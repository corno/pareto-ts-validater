import * as pr from "pareto-runtime"
import * as tast from "../../interface/types/ts_api"
import * as uast from "../../interface/types/uast"

export function parse<Annotation>(
    $: uast.TUntypedNode<Annotation>,
    $i: {
        callback: ($: tast.TRoot<Annotation>) => void,
        reportUnexpectedRoot: ($: { root: uast.TUntypedNode<Annotation>, }) => void,
        reportUnexpectedChild: ($: { path: string, child: uast.TUntypedNode<Annotation>, expected: pr.optional<string[]> }) => void,
        reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string[], }) => void,
    },
): void {
    const $x = $i
    function Gblock(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGblock<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gblock",
                kindNameOptions: [ "Block"],
            })
            return
        }
        if (currentChild.kindName !== "Block") {
            $x.reportUnexpectedChild({
                path: "Gblock",
                child: currentChild,
                expected: ["Block"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGblock$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            const sequenceEnd = ($: tast.TVTGblock$<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            const elements: tast.TVTGblock$_variables<Annotation>[] = []
            const processElement = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gblock$_variables",
                        kindNameOptions: [ "VariableStatement"],
                    })
                    return
                }
                if (currentChild.kindName !== "VariableStatement") {
                    $x.reportUnexpectedChild({
                        path: "Gblock$_variables",
                        child: currentChild,
                        expected: ["VariableStatement"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGblock$_variables$<Annotation>) => void,
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
                            path: "Gblock$_variables$",
                            kindNameOptions: [ "VariableDeclarationList"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "VariableDeclarationList") {
                        $x.reportUnexpectedChild({
                            path: "Gblock$_variables$",
                            child: currentChild,
                            expected: ["VariableDeclarationList"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNGblock$_variables$$<Annotation>) => void,
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
                                path: "Gblock$_variables$$",
                                kindNameOptions: [ "VariableDeclaration"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "VariableDeclaration") {
                            $x.reportUnexpectedChild({
                                path: "Gblock$_variables$$",
                                child: currentChild,
                                expected: ["VariableDeclaration"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNGblock$_variables$$$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                            const sequenceEnd = ($: tast.TVTGblock$_variables$$$<Annotation>) => {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                })
                            }
                            Gidentifier(node, children, ($) => {
                                const _name = $
                                let optional: null | tast.TVTGblock$_variables$$$_type<Annotation> = null
                                const setOptional = () => {
                                    Gtype(node, children, ($) => {
                                        optional = $
                                    })
                                }
                                if (children.length === 0) {} else {
                                    nextChild = children[children.length - 1]
                                    switch (nextChild.kindName) {
                                        case "ArrayType":
                                            setOptional()
                                            break
                                        case "BooleanKeyword":
                                            setOptional()
                                            break
                                        case "StringKeyword":
                                            setOptional()
                                            break
                                        case "NumberKeyword":
                                            setOptional()
                                            break
                                        case "LiteralType":
                                            setOptional()
                                            break
                                        case "TypeLiteral":
                                            setOptional()
                                            break
                                        case "TypeReference":
                                            setOptional()
                                            break
                                        case "UnionType":
                                            setOptional()
                                            break
                                    }
                                }
                                pr.cc(optional, ($) => {
                                    const _type = $
                                    Ginitialization(node, children, ($) => {
                                        const _initialization = $
                                        sequenceEnd({
                                            "name": _name,
                                            "type": _type,
                                            "initialization": _initialization,
                                        })
                                    })
                                })
                            })
                            if (children.length > 0) {
                                $x.reportUnexpectedChild({
                                    path: "Gblock$_variables$$$",
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
                                path: "Gblock$_variables$$",
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
                            path: "Gblock$_variables$",
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
                const elements: tast.TVTGblock$_nestedProcedures<Annotation>[] = []
                const processElement = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gblock$_nestedProcedures",
                            kindNameOptions: [ "FunctionDeclaration"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "FunctionDeclaration") {
                        $x.reportUnexpectedChild({
                            path: "Gblock$_nestedProcedures",
                            child: currentChild,
                            expected: ["FunctionDeclaration"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNGblock$_nestedProcedures$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                        const sequenceEnd = ($: tast.TVTGblock$_nestedProcedures$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        Gidentifier(node, children, ($) => {
                            const _name = $
                            GparameterTriplet(node, children, ($) => {
                                const _parameters = $
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gblock$_nestedProcedures$_void",
                                        kindNameOptions: [ "VoidKeyword"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "VoidKeyword") {
                                    $x.reportUnexpectedChild({
                                        path: "Gblock$_nestedProcedures$_void",
                                        child: currentChild,
                                        expected: ["VoidKeyword"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGblock$_nestedProcedures$_void$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gblock$_nestedProcedures$_void$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        const _void = $
                                        Gblock(node, children, ($) => {
                                            const _block = $
                                            sequenceEnd({
                                                "name": _name,
                                                "parameters": _parameters,
                                                "void": _void,
                                                "block": _block,
                                            })
                                        })
                                    }
                                )
                            })
                        })
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
                                path: "Gblock$_nestedProcedures$",
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
                            case "FunctionDeclaration":
                                processElement()
                                break
                            default: break arrayLoop
                        }
                    }
                }
                pr.cc(elements, ($) => {
                    const _nestedProcedures = $
                    const elements: tast.TVTGblock$_statements<Annotation>[] = []
                    const processElement = () => {
                        const choiceEnd_Gblock$_statements = ($: tast.TVTGblock$_statements<Annotation>) => {
                            elements.push($)
                        }
                        if (children.length === 0) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gblock$_statements",
                                kindNameOptions: ["ExpressionStatement", "IfStatement"],
                            })
                            return
                        } else {
                            nextChild = children[children.length - 1]
                            const choose_expressionStatement = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gblock$_statements_expressionStatement",
                                        kindNameOptions: [ "ExpressionStatement"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "ExpressionStatement") {
                                    $x.reportUnexpectedChild({
                                        path: "Gblock$_statements_expressionStatement",
                                        child: currentChild,
                                        expected: ["ExpressionStatement"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGblock$_statements_expressionStatement$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                    const choiceEnd_Gblock$_statements_expressionStatement$ = ($: tast.TVTGblock$_statements_expressionStatement$<Annotation>) => {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        })
                                    }
                                    if (children.length === 0) {
                                        $x.reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "Gblock$_statements_expressionStatement$",
                                            kindNameOptions: ["BinaryExpression", "CallExpression"],
                                        })
                                        return
                                    } else {
                                        nextChild = children[children.length - 1]
                                        const choose_binaryExpression = () => {
                                            currentChild = children.pop()
                                            if (currentChild === undefined) {
                                                $x.reportMissingToken({
                                                    parentAnnotation: node.annotation,
                                                    path: "Gblock$_statements_expressionStatement$_binaryExpression",
                                                    kindNameOptions: [ "BinaryExpression"],
                                                })
                                                return
                                            }
                                            if (currentChild.kindName !== "BinaryExpression") {
                                                $x.reportUnexpectedChild({
                                                    path: "Gblock$_statements_expressionStatement$_binaryExpression",
                                                    child: currentChild,
                                                    expected: ["BinaryExpression"],
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: tast.TNGblock$_statements_expressionStatement$_binaryExpression$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                $.children.forEach(($) => { children.push($) })
                                                children.reverse()
                                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                const sequenceEnd = ($: tast.TVTGblock$_statements_expressionStatement$_binaryExpression$<Annotation>) => {
                                                    callback({
                                                        annotation: node.annotation,
                                                        content: $,
                                                    })
                                                }
                                                Gidentifier(node, children, ($) => {
                                                    const _referencedVariable = $
                                                    const choiceEnd_Gblock$_statements_expressionStatement$_binaryExpression$_operator = ($: tast.TVTGblock$_statements_expressionStatement$_binaryExpression$_operator<Annotation>) => {
                                                        const _operator = $
                                                        Ginitialization(node, children, ($) => {
                                                            const _initializer = $
                                                            sequenceEnd({
                                                                "referencedVariable": _referencedVariable,
                                                                "operator": _operator,
                                                                "initializer": _initializer,
                                                            })
                                                        })
                                                    }
                                                    if (children.length === 0) {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.annotation,
                                                            path: "Gblock$_statements_expressionStatement$_binaryExpression$_operator",
                                                            kindNameOptions: ["EqualsToken", "PlusEqualsToken"],
                                                        })
                                                        return
                                                    } else {
                                                        nextChild = children[children.length - 1]
                                                        const choose_equalsToken = () => {
                                                            currentChild = children.pop()
                                                            if (currentChild === undefined) {
                                                                $x.reportMissingToken({
                                                                    parentAnnotation: node.annotation,
                                                                    path: "Gblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken",
                                                                    kindNameOptions: [ "EqualsToken"],
                                                                })
                                                                return
                                                            }
                                                            if (currentChild.kindName !== "EqualsToken") {
                                                                $x.reportUnexpectedChild({
                                                                    path: "Gblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken",
                                                                    child: currentChild,
                                                                    expected: ["EqualsToken"],
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.TUntypedNode<Annotation>,
                                                                callback: ($: tast.TNGblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken$<Annotation>) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                                $.children.forEach(($) => { children.push($) })
                                                                children.reverse()
                                                                callback($.annotation)
                                                                if (children.length > 0) {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken$",
                                                                        child: children[children.length - 1],
                                                                        expected: null,
                                                                    })
                                                                    return
                                                                }
                                                            })(
                                                                currentChild,
                                                                ($) => {
                                                                    choiceEnd_Gblock$_statements_expressionStatement$_binaryExpression$_operator(["equalsToken", $])
                                                                }
                                                            )
                                                        }
                                                        const choose_plusEqualsToken = () => {
                                                            currentChild = children.pop()
                                                            if (currentChild === undefined) {
                                                                $x.reportMissingToken({
                                                                    parentAnnotation: node.annotation,
                                                                    path: "Gblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken",
                                                                    kindNameOptions: [ "PlusEqualsToken"],
                                                                })
                                                                return
                                                            }
                                                            if (currentChild.kindName !== "PlusEqualsToken") {
                                                                $x.reportUnexpectedChild({
                                                                    path: "Gblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken",
                                                                    child: currentChild,
                                                                    expected: ["PlusEqualsToken"],
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.TUntypedNode<Annotation>,
                                                                callback: ($: tast.TNGblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken$<Annotation>) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                                $.children.forEach(($) => { children.push($) })
                                                                children.reverse()
                                                                callback($.annotation)
                                                                if (children.length > 0) {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken$",
                                                                        child: children[children.length - 1],
                                                                        expected: null,
                                                                    })
                                                                    return
                                                                }
                                                            })(
                                                                currentChild,
                                                                ($) => {
                                                                    choiceEnd_Gblock$_statements_expressionStatement$_binaryExpression$_operator(["plusEqualsToken", $])
                                                                }
                                                            )
                                                        }
                                                        switch (nextChild.kindName) {
                                                            case "EqualsToken": {
                                                                choose_equalsToken()
                                                                break
                                                            }
                                                            case "PlusEqualsToken": {
                                                                choose_plusEqualsToken()
                                                                break
                                                            }
                                                            default: {
                                                                $x.reportUnexpectedChild({
                                                                    path: "Gblock$_statements_expressionStatement$_binaryExpression$_operator",
                                                                    child: nextChild,
                                                                    expected: ["EqualsToken", "PlusEqualsToken"],
                                                                })
                                                            }
                                                        }
                                                    }
                                                })
                                                if (children.length > 0) {
                                                    $x.reportUnexpectedChild({
                                                        path: "Gblock$_statements_expressionStatement$_binaryExpression$",
                                                        child: children[children.length - 1],
                                                        expected: null,
                                                    })
                                                    return
                                                }
                                            })(
                                                currentChild,
                                                ($) => {
                                                    choiceEnd_Gblock$_statements_expressionStatement$(["binaryExpression", $])
                                                }
                                            )
                                        }
                                        const choose_call = () => {
                                            currentChild = children.pop()
                                            if (currentChild === undefined) {
                                                $x.reportMissingToken({
                                                    parentAnnotation: node.annotation,
                                                    path: "Gblock$_statements_expressionStatement$_call",
                                                    kindNameOptions: [ "CallExpression"],
                                                })
                                                return
                                            }
                                            if (currentChild.kindName !== "CallExpression") {
                                                $x.reportUnexpectedChild({
                                                    path: "Gblock$_statements_expressionStatement$_call",
                                                    child: currentChild,
                                                    expected: ["CallExpression"],
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: tast.TNGblock$_statements_expressionStatement$_call$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                $.children.forEach(($) => { children.push($) })
                                                children.reverse()
                                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                const sequenceEnd = ($: tast.TVTGblock$_statements_expressionStatement$_call$<Annotation>) => {
                                                    callback({
                                                        annotation: node.annotation,
                                                        content: $,
                                                    })
                                                }
                                                Gselection(node, children, ($) => {
                                                    const _selection = $
                                                    Ginitialization(node, children, ($) => {
                                                        const _dataArgument = $
                                                        let optional: null | tast.TVTGblock$_statements_expressionStatement$_call$_callbackArgument<Annotation> = null
                                                        const setOptional = () => {
                                                            Ginitialization(node, children, ($) => {
                                                                optional = $
                                                            })
                                                        }
                                                        if (children.length === 0) {} else {
                                                            nextChild = children[children.length - 1]
                                                            switch (nextChild.kindName) {
                                                                case "TemplateExpression":
                                                                    setOptional()
                                                                    break
                                                                case "BinaryExpression":
                                                                    setOptional()
                                                                    break
                                                                case "ArrowFunction":
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
                                                                case "CallExpression":
                                                                    setOptional()
                                                                    break
                                                                case "ConditionalExpression":
                                                                    setOptional()
                                                                    break
                                                                case "Identifier":
                                                                    setOptional()
                                                                    break
                                                                case "PropertyAccessExpression":
                                                                    setOptional()
                                                                    break
                                                            }
                                                        }
                                                        pr.cc(optional, ($) => {
                                                            const _callbackArgument = $
                                                            let optional: null | tast.TVTGblock$_statements_expressionStatement$_call$_thirdArgument<Annotation> = null
                                                            const setOptional = () => {
                                                                Ginitialization(node, children, ($) => {
                                                                    optional = $
                                                                })
                                                            }
                                                            if (children.length === 0) {} else {
                                                                nextChild = children[children.length - 1]
                                                                switch (nextChild.kindName) {
                                                                    case "TemplateExpression":
                                                                        setOptional()
                                                                        break
                                                                    case "BinaryExpression":
                                                                        setOptional()
                                                                        break
                                                                    case "ArrowFunction":
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
                                                                    case "CallExpression":
                                                                        setOptional()
                                                                        break
                                                                    case "ConditionalExpression":
                                                                        setOptional()
                                                                        break
                                                                    case "Identifier":
                                                                        setOptional()
                                                                        break
                                                                    case "PropertyAccessExpression":
                                                                        setOptional()
                                                                        break
                                                                }
                                                            }
                                                            pr.cc(optional, ($) => {
                                                                const _thirdArgument = $
                                                                sequenceEnd({
                                                                    "selection": _selection,
                                                                    "dataArgument": _dataArgument,
                                                                    "callbackArgument": _callbackArgument,
                                                                    "thirdArgument": _thirdArgument,
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                                if (children.length > 0) {
                                                    $x.reportUnexpectedChild({
                                                        path: "Gblock$_statements_expressionStatement$_call$",
                                                        child: children[children.length - 1],
                                                        expected: null,
                                                    })
                                                    return
                                                }
                                            })(
                                                currentChild,
                                                ($) => {
                                                    choiceEnd_Gblock$_statements_expressionStatement$(["call", $])
                                                }
                                            )
                                        }
                                        switch (nextChild.kindName) {
                                            case "BinaryExpression": {
                                                choose_binaryExpression()
                                                break
                                            }
                                            case "CallExpression": {
                                                choose_call()
                                                break
                                            }
                                            default: {
                                                $x.reportUnexpectedChild({
                                                    path: "Gblock$_statements_expressionStatement$",
                                                    child: nextChild,
                                                    expected: ["BinaryExpression", "CallExpression"],
                                                })
                                            }
                                        }
                                    }
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gblock$_statements_expressionStatement$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gblock$_statements(["expressionStatement", $])
                                    }
                                )
                            }
                            const choose_ifStatement = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gblock$_statements_ifStatement",
                                        kindNameOptions: [ "IfStatement"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "IfStatement") {
                                    $x.reportUnexpectedChild({
                                        path: "Gblock$_statements_ifStatement",
                                        child: currentChild,
                                        expected: ["IfStatement"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGblock$_statements_ifStatement$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                    const sequenceEnd = ($: tast.TVTGblock$_statements_ifStatement$<Annotation>) => {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        })
                                    }
                                    GbooleanExpression(node, children, ($) => {
                                        const _expression = $
                                        Gblock(node, children, ($) => {
                                            const _then = $
                                            let optional: null | tast.TVTGblock$_statements_ifStatement$_else<Annotation> = null
                                            const setOptional = () => {
                                                Gblock(node, children, ($) => {
                                                    optional = $
                                                })
                                            }
                                            if (children.length === 0) {} else {
                                                nextChild = children[children.length - 1]
                                                switch (nextChild.kindName) {
                                                    case "Block":
                                                        setOptional()
                                                        break
                                                }
                                            }
                                            pr.cc(optional, ($) => {
                                                const _else = $
                                                sequenceEnd({
                                                    "expression": _expression,
                                                    "then": _then,
                                                    "else": _else,
                                                })
                                            })
                                        })
                                    })
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gblock$_statements_ifStatement$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gblock$_statements(["ifStatement", $])
                                    }
                                )
                            }
                            switch (nextChild.kindName) {
                                case "ExpressionStatement": {
                                    choose_expressionStatement()
                                    break
                                }
                                case "IfStatement": {
                                    choose_ifStatement()
                                    break
                                }
                                default: {
                                    $x.reportUnexpectedChild({
                                        path: "Gblock$_statements",
                                        child: nextChild,
                                        expected: ["ExpressionStatement", "IfStatement"],
                                    })
                                }
                            }
                        }
                    }
                    arrayLoop: while (true) {
                        if (children.length === 0) {
                            break arrayLoop
                        } else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "ExpressionStatement":
                                    processElement()
                                    break
                                case "IfStatement":
                                    processElement()
                                    break
                                default: break arrayLoop
                            }
                        }
                    }
                    pr.cc(elements, ($) => {
                        const _statements = $
                        sequenceEnd({
                            "variables": _variables,
                            "nestedProcedures": _nestedProcedures,
                            "statements": _statements,
                        })
                    })
                })
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "Gblock$",
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
    function GbooleanExpression(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGbooleanExpression<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_GbooleanExpression = ($: tast.TVTGbooleanExpression<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GbooleanExpression",
                kindNameOptions: ["BinaryExpression", "PrefixUnaryExpression"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_binaryExpression = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GbooleanExpression_binaryExpression",
                        kindNameOptions: [ "BinaryExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "BinaryExpression") {
                    $x.reportUnexpectedChild({
                        path: "GbooleanExpression_binaryExpression",
                        child: currentChild,
                        expected: ["BinaryExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGbooleanExpression_binaryExpression$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGbooleanExpression_binaryExpression$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _left = $
                        const choiceEnd_GbooleanExpression_binaryExpression$_operator = ($: tast.TVTGbooleanExpression_binaryExpression$_operator<Annotation>) => {
                            const _operator = $
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                $x.reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "GbooleanExpression_binaryExpression$_right",
                                    kindNameOptions: [ "NullKeyword"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "NullKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "GbooleanExpression_binaryExpression$_right",
                                    child: currentChild,
                                    expected: ["NullKeyword"],
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGbooleanExpression_binaryExpression$_right$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.TUntypedNode<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                callback($.annotation)
                                if (children.length > 0) {
                                    $x.reportUnexpectedChild({
                                        path: "GbooleanExpression_binaryExpression$_right$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    const _right = $
                                    sequenceEnd({
                                        "left": _left,
                                        "operator": _operator,
                                        "right": _right,
                                    })
                                }
                            )
                        }
                        if (children.length === 0) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "GbooleanExpression_binaryExpression$_operator",
                                kindNameOptions: ["ExclamationEqualsEqualsToken"],
                            })
                            return
                        } else {
                            nextChild = children[children.length - 1]
                            const choose_notEqual = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "GbooleanExpression_binaryExpression$_operator_notEqual",
                                        kindNameOptions: [ "ExclamationEqualsEqualsToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "ExclamationEqualsEqualsToken") {
                                    $x.reportUnexpectedChild({
                                        path: "GbooleanExpression_binaryExpression$_operator_notEqual",
                                        child: currentChild,
                                        expected: ["ExclamationEqualsEqualsToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGbooleanExpression_binaryExpression$_operator_notEqual$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "GbooleanExpression_binaryExpression$_operator_notEqual$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_GbooleanExpression_binaryExpression$_operator(["notEqual", $])
                                    }
                                )
                            }
                            switch (nextChild.kindName) {
                                case "ExclamationEqualsEqualsToken": {
                                    choose_notEqual()
                                    break
                                }
                                default: {
                                    $x.reportUnexpectedChild({
                                        path: "GbooleanExpression_binaryExpression$_operator",
                                        child: nextChild,
                                        expected: ["ExclamationEqualsEqualsToken"],
                                    })
                                }
                            }
                        }
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GbooleanExpression_binaryExpression$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GbooleanExpression(["binaryExpression", $])
                    }
                )
            }
            const choose_prefixUnaryExpression = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GbooleanExpression_prefixUnaryExpression",
                        kindNameOptions: [ "PrefixUnaryExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "PrefixUnaryExpression") {
                    $x.reportUnexpectedChild({
                        path: "GbooleanExpression_prefixUnaryExpression",
                        child: currentChild,
                        expected: ["PrefixUnaryExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGbooleanExpression_prefixUnaryExpression$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGbooleanExpression_prefixUnaryExpression$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Ginitialization(node, children, ($) => {
                        const _data = $
                        sequenceEnd({
                            "data": _data,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GbooleanExpression_prefixUnaryExpression$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_GbooleanExpression(["prefixUnaryExpression", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "BinaryExpression": {
                    choose_binaryExpression()
                    break
                }
                case "PrefixUnaryExpression": {
                    choose_prefixUnaryExpression()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "GbooleanExpression",
                        child: nextChild,
                        expected: ["BinaryExpression", "PrefixUnaryExpression"],
                    })
                }
            }
        }
    }
    function Gcallback(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGcallback<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gcallback",
                kindNameOptions: [ "Parameter"],
            })
            return
        }
        if (currentChild.kindName !== "Parameter") {
            $x.reportUnexpectedChild({
                path: "Gcallback",
                child: currentChild,
                expected: ["Parameter"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGcallback$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            const sequenceEnd = ($: tast.TVTGcallback$<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            Gidentifier(node, children, ($) => {
                const _name = $
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gcallback$_type",
                        kindNameOptions: [ "FunctionType"],
                    })
                    return
                }
                if (currentChild.kindName !== "FunctionType") {
                    $x.reportUnexpectedChild({
                        path: "Gcallback$_type",
                        child: currentChild,
                        expected: ["FunctionType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGcallback$_type$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGcallback$_type$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gcallback$_type$_parameter",
                            kindNameOptions: [ "Parameter"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "Parameter") {
                        $x.reportUnexpectedChild({
                            path: "Gcallback$_type$_parameter",
                            child: currentChild,
                            expected: ["Parameter"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNGcallback$_type$_parameter$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                        const sequenceEnd = ($: tast.TVTGcallback$_type$_parameter$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        Gidentifier(node, children, ($) => {
                            const _name = $
                            Ginterface(node, children, ($) => {
                                const _type = $
                                sequenceEnd({
                                    "name": _name,
                                    "type": _type,
                                })
                            })
                        })
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
                                path: "Gcallback$_type$_parameter$",
                                child: children[children.length - 1],
                                expected: null,
                            })
                            return
                        }
                    })(
                        currentChild,
                        ($) => {
                            const _parameter = $
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                $x.reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gcallback$_type$_void",
                                    kindNameOptions: [ "VoidKeyword"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "VoidKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Gcallback$_type$_void",
                                    child: currentChild,
                                    expected: ["VoidKeyword"],
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGcallback$_type$_void$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.TUntypedNode<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                callback($.annotation)
                                if (children.length > 0) {
                                    $x.reportUnexpectedChild({
                                        path: "Gcallback$_type$_void$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    const _void = $
                                    sequenceEnd({
                                        "parameter": _parameter,
                                        "void": _void,
                                    })
                                }
                            )
                        }
                    )
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gcallback$_type$",
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
                            "name": _name,
                            "type": _type,
                        })
                    }
                )
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "Gcallback$",
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
    function Ginterface(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGinterface<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Ginterface = ($: tast.TVTGinterface<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Ginterface",
                kindNameOptions: ["FunctionType", "TypeLiteral", "TypeReference"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_function = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginterface_function",
                        kindNameOptions: [ "FunctionType"],
                    })
                    return
                }
                if (currentChild.kindName !== "FunctionType") {
                    $x.reportUnexpectedChild({
                        path: "Ginterface_function",
                        child: currentChild,
                        expected: ["FunctionType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGinterface_function$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGinterface_function$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Ginterface_function$_dataParameter",
                            kindNameOptions: [ "Parameter"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "Parameter") {
                        $x.reportUnexpectedChild({
                            path: "Ginterface_function$_dataParameter",
                            child: currentChild,
                            expected: ["Parameter"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNGinterface_function$_dataParameter$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                        const sequenceEnd = ($: tast.TVTGinterface_function$_dataParameter$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        Gidentifier(node, children, ($) => {
                            const _name = $
                            Gtype(node, children, ($) => {
                                const _type = $
                                sequenceEnd({
                                    "name": _name,
                                    "type": _type,
                                })
                            })
                        })
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
                                path: "Ginterface_function$_dataParameter$",
                                child: children[children.length - 1],
                                expected: null,
                            })
                            return
                        }
                    })(
                        currentChild,
                        ($) => {
                            const _dataParameter = $
                            let optional: null | tast.TVTGinterface_function$_callbackParameter<Annotation> = null
                            const setOptional = () => {
                                Gcallback(node, children, ($) => {
                                    optional = $
                                })
                            }
                            if (children.length === 0) {} else {
                                nextChild = children[children.length - 1]
                                switch (nextChild.kindName) {
                                    case "Parameter":
                                        setOptional()
                                        break
                                }
                            }
                            pr.cc(optional, ($) => {
                                const _callbackParameter = $
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Ginterface_function$_void",
                                        kindNameOptions: [ "VoidKeyword"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "VoidKeyword") {
                                    $x.reportUnexpectedChild({
                                        path: "Ginterface_function$_void",
                                        child: currentChild,
                                        expected: ["VoidKeyword"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGinterface_function$_void$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Ginterface_function$_void$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        const _void = $
                                        sequenceEnd({
                                            "dataParameter": _dataParameter,
                                            "callbackParameter": _callbackParameter,
                                            "void": _void,
                                        })
                                    }
                                )
                            })
                        }
                    )
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Ginterface_function$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginterface(["function", $])
                    }
                )
            }
            const choose_typeLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginterface_typeLiteral",
                        kindNameOptions: [ "TypeLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeLiteral") {
                    $x.reportUnexpectedChild({
                        path: "Ginterface_typeLiteral",
                        child: currentChild,
                        expected: ["TypeLiteral"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGinterface_typeLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const elements: tast.TVTGinterface_typeLiteral$<Annotation>[] = []
                    const processElement = () => {
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Ginterface_typeLiteral$",
                                kindNameOptions: [ "PropertySignature"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "PropertySignature") {
                            $x.reportUnexpectedChild({
                                path: "Ginterface_typeLiteral$",
                                child: currentChild,
                                expected: ["PropertySignature"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNGinterface_typeLiteral$$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                            const sequenceEnd = ($: tast.TVTGinterface_typeLiteral$$<Annotation>) => {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                })
                            }
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                $x.reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Ginterface_typeLiteral$$_readonly",
                                    kindNameOptions: [ "ReadonlyKeyword"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "ReadonlyKeyword") {
                                $x.reportUnexpectedChild({
                                    path: "Ginterface_typeLiteral$$_readonly",
                                    child: currentChild,
                                    expected: ["ReadonlyKeyword"],
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGinterface_typeLiteral$$_readonly$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.TUntypedNode<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                callback($.annotation)
                                if (children.length > 0) {
                                    $x.reportUnexpectedChild({
                                        path: "Ginterface_typeLiteral$$_readonly$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    const _readonly = $
                                    currentChild = children.pop()
                                    if (currentChild === undefined) {
                                        $x.reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "Ginterface_typeLiteral$$_name",
                                            kindNameOptions: [ "StringLiteral"],
                                        })
                                        return
                                    }
                                    if (currentChild.kindName !== "StringLiteral") {
                                        $x.reportUnexpectedChild({
                                            path: "Ginterface_typeLiteral$$_name",
                                            child: currentChild,
                                            expected: ["StringLiteral"],
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.TUntypedNode<Annotation>,
                                        callback: ($: tast.TNGinterface_typeLiteral$$_name$<Annotation>) => void,
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
                                                path: "Ginterface_typeLiteral$$_name$",
                                                child: children[children.length - 1],
                                                expected: null,
                                            })
                                            return
                                        }
                                    })(
                                        currentChild,
                                        ($) => {
                                            const _name = $
                                            let optional: null | tast.TVTGinterface_typeLiteral$$_questionToken<Annotation> = null
                                            const setOptional = () => {
                                                currentChild = children.pop()
                                                if (currentChild === undefined) {
                                                    $x.reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "Ginterface_typeLiteral$$_questionToken",
                                                        kindNameOptions: [ "QuestionToken"],
                                                    })
                                                    return
                                                }
                                                if (currentChild.kindName !== "QuestionToken") {
                                                    $x.reportUnexpectedChild({
                                                        path: "Ginterface_typeLiteral$$_questionToken",
                                                        child: currentChild,
                                                        expected: ["QuestionToken"],
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.TUntypedNode<Annotation>,
                                                    callback: ($: tast.TNGinterface_typeLiteral$$_questionToken$<Annotation>) => void,
                                                ): void => {
                                                    const node = $
                                                    const children: uast.TUntypedNode<Annotation>[] = []
                                                    $.children.forEach(($) => { children.push($) })
                                                    children.reverse()
                                                    callback($.annotation)
                                                    if (children.length > 0) {
                                                        $x.reportUnexpectedChild({
                                                            path: "Ginterface_typeLiteral$$_questionToken$",
                                                            child: children[children.length - 1],
                                                            expected: null,
                                                        })
                                                        return
                                                    }
                                                })(
                                                    currentChild,
                                                    ($) => {
                                                        optional = $
                                                    }
                                                )
                                            }
                                            if (children.length === 0) {} else {
                                                nextChild = children[children.length - 1]
                                                switch (nextChild.kindName) {
                                                    case "QuestionToken":
                                                        setOptional()
                                                        break
                                                }
                                            }
                                            pr.cc(optional, ($) => {
                                                const _questionToken = $
                                                let optional: null | tast.TVTGinterface_typeLiteral$$_type<Annotation> = null
                                                const setOptional = () => {
                                                    Ginterface(node, children, ($) => {
                                                        optional = $
                                                    })
                                                }
                                                if (children.length === 0) {} else {
                                                    nextChild = children[children.length - 1]
                                                    switch (nextChild.kindName) {
                                                        case "FunctionType":
                                                            setOptional()
                                                            break
                                                        case "TypeLiteral":
                                                            setOptional()
                                                            break
                                                        case "TypeReference":
                                                            setOptional()
                                                            break
                                                    }
                                                }
                                                pr.cc(optional, ($) => {
                                                    const _type = $
                                                    sequenceEnd({
                                                        "readonly": _readonly,
                                                        "name": _name,
                                                        "questionToken": _questionToken,
                                                        "type": _type,
                                                    })
                                                })
                                            })
                                        }
                                    )
                                }
                            )
                            if (children.length > 0) {
                                $x.reportUnexpectedChild({
                                    path: "Ginterface_typeLiteral$$",
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
                                case "PropertySignature":
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
                            path: "Ginterface_typeLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginterface(["typeLiteral", $])
                    }
                )
            }
            const choose_typeReference = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginterface_typeReference",
                        kindNameOptions: [ "TypeReference"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeReference") {
                    $x.reportUnexpectedChild({
                        path: "Ginterface_typeReference",
                        child: currentChild,
                        expected: ["TypeReference"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGinterface_typeReference$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGinterface_typeReference$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _name = $
                        const elements: tast.TVTGinterface_typeReference$_parameters<Annotation>[] = []
                        const processElement = () => {
                            Gtype(node, children, ($) => {
                                elements.push($)
                            })
                        }
                        arrayLoop: while (true) {
                            if (children.length === 0) {
                                break arrayLoop
                            } else {
                                nextChild = children[children.length - 1]
                                switch (nextChild.kindName) {
                                    case "ArrayType":
                                        processElement()
                                        break
                                    case "BooleanKeyword":
                                        processElement()
                                        break
                                    case "StringKeyword":
                                        processElement()
                                        break
                                    case "NumberKeyword":
                                        processElement()
                                        break
                                    case "LiteralType":
                                        processElement()
                                        break
                                    case "TypeLiteral":
                                        processElement()
                                        break
                                    case "TypeReference":
                                        processElement()
                                        break
                                    case "UnionType":
                                        processElement()
                                        break
                                    default: break arrayLoop
                                }
                            }
                        }
                        pr.cc(elements, ($) => {
                            const _parameters = $
                            sequenceEnd({
                                "name": _name,
                                "parameters": _parameters,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Ginterface_typeReference$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginterface(["typeReference", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "FunctionType": {
                    choose_function()
                    break
                }
                case "TypeLiteral": {
                    choose_typeLiteral()
                    break
                }
                case "TypeReference": {
                    choose_typeReference()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "Ginterface",
                        child: nextChild,
                        expected: ["FunctionType", "TypeLiteral", "TypeReference"],
                    })
                }
            }
        }
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
                kindNameOptions: ["TemplateExpression", "BinaryExpression", "ArrowFunction", "ArrayLiteralExpression", "FalseKeyword", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "TrueKeyword", "ParenthesizedExpression", "ObjectLiteralExpression", "CallExpression", "ConditionalExpression", "Identifier", "PropertyAccessExpression"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_temlateExpression = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_temlateExpression",
                        kindNameOptions: [ "TemplateExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "TemplateExpression") {
                    $x.reportUnexpectedChild({
                        path: "Ginitialization_temlateExpression",
                        child: currentChild,
                        expected: ["TemplateExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGinitialization_temlateExpression$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGinitialization_temlateExpression$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Ginitialization_temlateExpression$_head",
                            kindNameOptions: [ "TemplateHead"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "TemplateHead") {
                        $x.reportUnexpectedChild({
                            path: "Ginitialization_temlateExpression$_head",
                            child: currentChild,
                            expected: ["TemplateHead"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNGinitialization_temlateExpression$_head$<Annotation>) => void,
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
                                path: "Ginitialization_temlateExpression$_head$",
                                child: children[children.length - 1],
                                expected: null,
                            })
                            return
                        }
                    })(
                        currentChild,
                        ($) => {
                            const _head = $
                            const elements: tast.TVTGinitialization_temlateExpression$_span<Annotation>[] = []
                            const processElement = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Ginitialization_temlateExpression$_span",
                                        kindNameOptions: [ "TemplateSpan"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "TemplateSpan") {
                                    $x.reportUnexpectedChild({
                                        path: "Ginitialization_temlateExpression$_span",
                                        child: currentChild,
                                        expected: ["TemplateSpan"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGinitialization_temlateExpression$_span$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                    const sequenceEnd = ($: tast.TVTGinitialization_temlateExpression$_span$<Annotation>) => {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        })
                                    }
                                    Ginitialization(node, children, ($) => {
                                        const _expression = $
                                        const choiceEnd_Ginitialization_temlateExpression$_span$_x = ($: tast.TVTGinitialization_temlateExpression$_span$_x<Annotation>) => {
                                            const _x = $
                                            sequenceEnd({
                                                "expression": _expression,
                                                "x": _x,
                                            })
                                        }
                                        if (children.length === 0) {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Ginitialization_temlateExpression$_span$_x",
                                                kindNameOptions: ["TemplateMiddle", "TemplateTail"],
                                            })
                                            return
                                        } else {
                                            nextChild = children[children.length - 1]
                                            const choose_middle = () => {
                                                currentChild = children.pop()
                                                if (currentChild === undefined) {
                                                    $x.reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "Ginitialization_temlateExpression$_span$_x_middle",
                                                        kindNameOptions: [ "TemplateMiddle"],
                                                    })
                                                    return
                                                }
                                                if (currentChild.kindName !== "TemplateMiddle") {
                                                    $x.reportUnexpectedChild({
                                                        path: "Ginitialization_temlateExpression$_span$_x_middle",
                                                        child: currentChild,
                                                        expected: ["TemplateMiddle"],
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.TUntypedNode<Annotation>,
                                                    callback: ($: tast.TNGinitialization_temlateExpression$_span$_x_middle$<Annotation>) => void,
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
                                                            path: "Ginitialization_temlateExpression$_span$_x_middle$",
                                                            child: children[children.length - 1],
                                                            expected: null,
                                                        })
                                                        return
                                                    }
                                                })(
                                                    currentChild,
                                                    ($) => {
                                                        choiceEnd_Ginitialization_temlateExpression$_span$_x(["middle", $])
                                                    }
                                                )
                                            }
                                            const choose_tail = () => {
                                                currentChild = children.pop()
                                                if (currentChild === undefined) {
                                                    $x.reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "Ginitialization_temlateExpression$_span$_x_tail",
                                                        kindNameOptions: [ "TemplateTail"],
                                                    })
                                                    return
                                                }
                                                if (currentChild.kindName !== "TemplateTail") {
                                                    $x.reportUnexpectedChild({
                                                        path: "Ginitialization_temlateExpression$_span$_x_tail",
                                                        child: currentChild,
                                                        expected: ["TemplateTail"],
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.TUntypedNode<Annotation>,
                                                    callback: ($: tast.TNGinitialization_temlateExpression$_span$_x_tail$<Annotation>) => void,
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
                                                            path: "Ginitialization_temlateExpression$_span$_x_tail$",
                                                            child: children[children.length - 1],
                                                            expected: null,
                                                        })
                                                        return
                                                    }
                                                })(
                                                    currentChild,
                                                    ($) => {
                                                        choiceEnd_Ginitialization_temlateExpression$_span$_x(["tail", $])
                                                    }
                                                )
                                            }
                                            switch (nextChild.kindName) {
                                                case "TemplateMiddle": {
                                                    choose_middle()
                                                    break
                                                }
                                                case "TemplateTail": {
                                                    choose_tail()
                                                    break
                                                }
                                                default: {
                                                    $x.reportUnexpectedChild({
                                                        path: "Ginitialization_temlateExpression$_span$_x",
                                                        child: nextChild,
                                                        expected: ["TemplateMiddle", "TemplateTail"],
                                                    })
                                                }
                                            }
                                        }
                                    })
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Ginitialization_temlateExpression$_span$",
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
                                        case "TemplateSpan":
                                            processElement()
                                            break
                                        default: break arrayLoop
                                    }
                                }
                            }
                            pr.cc(elements, ($) => {
                                const _span = $
                                sequenceEnd({
                                    "head": _head,
                                    "span": _span,
                                })
                            })
                        }
                    )
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Ginitialization_temlateExpression$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginitialization(["temlateExpression", $])
                    }
                )
            }
            const choose_binaryExpression = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_binaryExpression",
                        kindNameOptions: [ "BinaryExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "BinaryExpression") {
                    $x.reportUnexpectedChild({
                        path: "Ginitialization_binaryExpression",
                        child: currentChild,
                        expected: ["BinaryExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGinitialization_binaryExpression$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGinitialization_binaryExpression$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gselection(node, children, ($) => {
                        const _left = $
                        const choiceEnd_Ginitialization_binaryExpression$_operator = ($: tast.TVTGinitialization_binaryExpression$_operator<Annotation>) => {
                            const _operator = $
                            Ginitialization(node, children, ($) => {
                                const _right = $
                                sequenceEnd({
                                    "left": _left,
                                    "operator": _operator,
                                    "right": _right,
                                })
                            })
                        }
                        if (children.length === 0) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Ginitialization_binaryExpression$_operator",
                                kindNameOptions: ["PlusToken"],
                            })
                            return
                        } else {
                            nextChild = children[children.length - 1]
                            const choose_PlusToken = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Ginitialization_binaryExpression$_operator_PlusToken",
                                        kindNameOptions: [ "PlusToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "PlusToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Ginitialization_binaryExpression$_operator_PlusToken",
                                        child: currentChild,
                                        expected: ["PlusToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGinitialization_binaryExpression$_operator_PlusToken$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Ginitialization_binaryExpression$_operator_PlusToken$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Ginitialization_binaryExpression$_operator(["PlusToken", $])
                                    }
                                )
                            }
                            switch (nextChild.kindName) {
                                case "PlusToken": {
                                    choose_PlusToken()
                                    break
                                }
                                default: {
                                    $x.reportUnexpectedChild({
                                        path: "Ginitialization_binaryExpression$_operator",
                                        child: nextChild,
                                        expected: ["PlusToken"],
                                    })
                                }
                            }
                        }
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Ginitialization_binaryExpression$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginitialization(["binaryExpression", $])
                    }
                )
            }
            const choose_functionImplementation = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Ginitialization_functionImplementation",
                        kindNameOptions: [ "ArrowFunction"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrowFunction") {
                    $x.reportUnexpectedChild({
                        path: "Ginitialization_functionImplementation",
                        child: currentChild,
                        expected: ["ArrowFunction"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGinitialization_functionImplementation$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGinitialization_functionImplementation$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    let optional: null | tast.TVTGinitialization_functionImplementation$_dataParameter<Annotation> = null
                    const setOptional = () => {
                        GtypelessParameter(node, children, ($) => {
                            optional = $
                        })
                    }
                    if (children.length === 0) {} else {
                        nextChild = children[children.length - 1]
                        switch (nextChild.kindName) {
                            case "Parameter":
                                setOptional()
                                break
                        }
                    }
                    pr.cc(optional, ($) => {
                        const _dataParameter = $
                        let optional: null | tast.TVTGinitialization_functionImplementation$_interfaceParameter<Annotation> = null
                        const setOptional = () => {
                            GtypelessParameter(node, children, ($) => {
                                optional = $
                            })
                        }
                        if (children.length === 0) {} else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "Parameter":
                                    setOptional()
                                    break
                            }
                        }
                        pr.cc(optional, ($) => {
                            const _interfaceParameter = $
                            let optional: null | tast.TVTGinitialization_functionImplementation$_callbackParameter<Annotation> = null
                            const setOptional = () => {
                                GtypelessParameter(node, children, ($) => {
                                    optional = $
                                })
                            }
                            if (children.length === 0) {} else {
                                nextChild = children[children.length - 1]
                                switch (nextChild.kindName) {
                                    case "Parameter":
                                        setOptional()
                                        break
                                }
                            }
                            pr.cc(optional, ($) => {
                                const _callbackParameter = $
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Ginitialization_functionImplementation$_equalsGreaterThan",
                                        kindNameOptions: [ "EqualsGreaterThanToken"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "EqualsGreaterThanToken") {
                                    $x.reportUnexpectedChild({
                                        path: "Ginitialization_functionImplementation$_equalsGreaterThan",
                                        child: currentChild,
                                        expected: ["EqualsGreaterThanToken"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGinitialization_functionImplementation$_equalsGreaterThan$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    callback($.annotation)
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Ginitialization_functionImplementation$_equalsGreaterThan$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        const _equalsGreaterThan = $
                                        Gblock(node, children, ($) => {
                                            const _block = $
                                            sequenceEnd({
                                                "dataParameter": _dataParameter,
                                                "interfaceParameter": _interfaceParameter,
                                                "callbackParameter": _callbackParameter,
                                                "equalsGreaterThan": _equalsGreaterThan,
                                                "block": _block,
                                            })
                                        })
                                    }
                                )
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Ginitialization_functionImplementation$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Ginitialization(["functionImplementation", $])
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
            const choose_selection = () => {
                Gselection(node, children, ($) => {
                    choiceEnd_Ginitialization(["selection", $])
                })
            }
            switch (nextChild.kindName) {
                case "TemplateExpression": {
                    choose_temlateExpression()
                    break
                }
                case "BinaryExpression": {
                    choose_binaryExpression()
                    break
                }
                case "ArrowFunction": {
                    choose_functionImplementation()
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
                case "CallExpression": {
                    choose_selection()
                    break
                }
                case "ConditionalExpression": {
                    choose_selection()
                    break
                }
                case "Identifier": {
                    choose_selection()
                    break
                }
                case "PropertyAccessExpression": {
                    choose_selection()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "Ginitialization",
                        child: nextChild,
                        expected: ["TemplateExpression", "BinaryExpression", "ArrowFunction", "ArrayLiteralExpression", "FalseKeyword", "NoSubstitutionTemplateLiteral", "NumericLiteral", "NullKeyword", "TrueKeyword", "ParenthesizedExpression", "ObjectLiteralExpression", "CallExpression", "ConditionalExpression", "Identifier", "PropertyAccessExpression"],
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
                                    case "TemplateExpression":
                                        processElement()
                                        break
                                    case "BinaryExpression":
                                        processElement()
                                        break
                                    case "ArrowFunction":
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
                                    case "CallExpression":
                                        processElement()
                                        break
                                    case "ConditionalExpression":
                                        processElement()
                                        break
                                    case "Identifier":
                                        processElement()
                                        break
                                    case "PropertyAccessExpression":
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
    function GparameterTriplet(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGparameterTriplet<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const sequenceEnd = ($: tast.TVTGparameterTriplet<Annotation>) => {
            callback($)
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GparameterTriplet_dataParameter",
                kindNameOptions: [ "Parameter"],
            })
            return
        }
        if (currentChild.kindName !== "Parameter") {
            $x.reportUnexpectedChild({
                path: "GparameterTriplet_dataParameter",
                child: currentChild,
                expected: ["Parameter"],
            })
            return
        }
        ((
            $: uast.TUntypedNode<Annotation>,
            callback: ($: tast.TNGparameterTriplet_dataParameter$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.TUntypedNode<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.TUntypedNode<Annotation> | undefined
            let nextChild: uast.TUntypedNode<Annotation> | undefined
            const sequenceEnd = ($: tast.TVTGparameterTriplet_dataParameter$<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            Gidentifier(node, children, ($) => {
                const _name = $
                Gtype(node, children, ($) => {
                    const _type = $
                    sequenceEnd({
                        "name": _name,
                        "type": _type,
                    })
                })
            })
            if (children.length > 0) {
                $x.reportUnexpectedChild({
                    path: "GparameterTriplet_dataParameter$",
                    child: children[children.length - 1],
                    expected: null,
                })
                return
            }
        })(
            currentChild,
            ($) => {
                const _dataParameter = $
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GparameterTriplet_interfaceParameter",
                        kindNameOptions: [ "Parameter"],
                    })
                    return
                }
                if (currentChild.kindName !== "Parameter") {
                    $x.reportUnexpectedChild({
                        path: "GparameterTriplet_interfaceParameter",
                        child: currentChild,
                        expected: ["Parameter"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGparameterTriplet_interfaceParameter$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGparameterTriplet_interfaceParameter$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _name = $
                        Ginterface(node, children, ($) => {
                            const _interface = $
                            sequenceEnd({
                                "name": _name,
                                "interface": _interface,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "GparameterTriplet_interfaceParameter$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        const _interfaceParameter = $
                        let optional: null | tast.TVTGparameterTriplet_callbackParameter<Annotation> = null
                        const setOptional = () => {
                            Gcallback(node, children, ($) => {
                                optional = $
                            })
                        }
                        if (children.length === 0) {} else {
                            nextChild = children[children.length - 1]
                            switch (nextChild.kindName) {
                                case "Parameter":
                                    setOptional()
                                    break
                            }
                        }
                        pr.cc(optional, ($) => {
                            const _callbackParameter = $
                            sequenceEnd({
                                "dataParameter": _dataParameter,
                                "interfaceParameter": _interfaceParameter,
                                "callbackParameter": _callbackParameter,
                            })
                        })
                    }
                )
            }
        )
    }
    function Gselection(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGselection<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Gselection = ($: tast.TVTGselection<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gselection",
                kindNameOptions: ["CallExpression", "ConditionalExpression", "Identifier", "PropertyAccessExpression"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_call = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gselection_call",
                        kindNameOptions: [ "CallExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "CallExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gselection_call",
                        child: currentChild,
                        expected: ["CallExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGselection_call$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGselection_call$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gselection(node, children, ($) => {
                        const _name = $
                        Ginitialization(node, children, ($) => {
                            const _initialization = $
                            sequenceEnd({
                                "name": _name,
                                "initialization": _initialization,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gselection_call$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gselection(["call", $])
                    }
                )
            }
            const choose_conditial = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gselection_conditial",
                        kindNameOptions: [ "ConditionalExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "ConditionalExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gselection_conditial",
                        child: currentChild,
                        expected: ["ConditionalExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGselection_conditial$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGselection_conditial$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gselection(node, children, ($) => {
                        const _condition = $
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gselection_conditial$_questionToken",
                                kindNameOptions: [ "QuestionToken"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "QuestionToken") {
                            $x.reportUnexpectedChild({
                                path: "Gselection_conditial$_questionToken",
                                child: currentChild,
                                expected: ["QuestionToken"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNGselection_conditial$_questionToken$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            callback($.annotation)
                            if (children.length > 0) {
                                $x.reportUnexpectedChild({
                                    path: "Gselection_conditial$_questionToken$",
                                    child: children[children.length - 1],
                                    expected: null,
                                })
                                return
                            }
                        })(
                            currentChild,
                            ($) => {
                                const _questionToken = $
                                Ginitialization(node, children, ($) => {
                                    const _then = $
                                    currentChild = children.pop()
                                    if (currentChild === undefined) {
                                        $x.reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "Gselection_conditial$_colon",
                                            kindNameOptions: [ "ColonToken"],
                                        })
                                        return
                                    }
                                    if (currentChild.kindName !== "ColonToken") {
                                        $x.reportUnexpectedChild({
                                            path: "Gselection_conditial$_colon",
                                            child: currentChild,
                                            expected: ["ColonToken"],
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.TUntypedNode<Annotation>,
                                        callback: ($: tast.TNGselection_conditial$_colon$<Annotation>) => void,
                                    ): void => {
                                        const node = $
                                        const children: uast.TUntypedNode<Annotation>[] = []
                                        $.children.forEach(($) => { children.push($) })
                                        children.reverse()
                                        callback($.annotation)
                                        if (children.length > 0) {
                                            $x.reportUnexpectedChild({
                                                path: "Gselection_conditial$_colon$",
                                                child: children[children.length - 1],
                                                expected: null,
                                            })
                                            return
                                        }
                                    })(
                                        currentChild,
                                        ($) => {
                                            const _colon = $
                                            Ginitialization(node, children, ($) => {
                                                const _else = $
                                                sequenceEnd({
                                                    "condition": _condition,
                                                    "questionToken": _questionToken,
                                                    "then": _then,
                                                    "colon": _colon,
                                                    "else": _else,
                                                })
                                            })
                                        }
                                    )
                                })
                            }
                        )
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gselection_conditial$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gselection(["conditial", $])
                    }
                )
            }
            const choose_identifier = () => {
                Gidentifier(node, children, ($) => {
                    choiceEnd_Gselection(["identifier", $])
                })
            }
            const choose_propertyAccess = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gselection_propertyAccess",
                        kindNameOptions: [ "PropertyAccessExpression"],
                    })
                    return
                }
                if (currentChild.kindName !== "PropertyAccessExpression") {
                    $x.reportUnexpectedChild({
                        path: "Gselection_propertyAccess",
                        child: currentChild,
                        expected: ["PropertyAccessExpression"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGselection_propertyAccess$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGselection_propertyAccess$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gselection(node, children, ($) => {
                        const _first = $
                        Gidentifier(node, children, ($) => {
                            const _second = $
                            sequenceEnd({
                                "first": _first,
                                "second": _second,
                            })
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gselection_propertyAccess$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gselection(["propertyAccess", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "CallExpression": {
                    choose_call()
                    break
                }
                case "ConditionalExpression": {
                    choose_conditial()
                    break
                }
                case "Identifier": {
                    choose_identifier()
                    break
                }
                case "PropertyAccessExpression": {
                    choose_propertyAccess()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "Gselection",
                        child: nextChild,
                        expected: ["CallExpression", "ConditionalExpression", "Identifier", "PropertyAccessExpression"],
                    })
                }
            }
        }
    }
    function Gtype(
        node: uast.TUntypedNode<Annotation>,
        children: uast.TUntypedNode<Annotation>[],
        callback: ($: tast.TGtype<Annotation>) => void,
    ): void {
        let currentChild: uast.TUntypedNode<Annotation> | undefined
        let nextChild: uast.TUntypedNode<Annotation> | undefined
        const choiceEnd_Gtype = ($: tast.TVTGtype<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            $x.reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gtype",
                kindNameOptions: ["ArrayType", "BooleanKeyword", "StringKeyword", "NumberKeyword", "LiteralType", "TypeLiteral", "TypeReference", "UnionType"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_array = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_array",
                        kindNameOptions: [ "ArrayType"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrayType") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_array",
                        child: currentChild,
                        expected: ["ArrayType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_array$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    Gtype(node, children, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_array$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["array", $])
                    }
                )
            }
            const choose_boolean = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_boolean",
                        kindNameOptions: [ "BooleanKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "BooleanKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_boolean",
                        child: currentChild,
                        expected: ["BooleanKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_boolean$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_boolean$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["boolean", $])
                    }
                )
            }
            const choose_string = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_string",
                        kindNameOptions: [ "StringKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_string",
                        child: currentChild,
                        expected: ["StringKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_string$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_string$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["string", $])
                    }
                )
            }
            const choose_number = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_number",
                        kindNameOptions: [ "NumberKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "NumberKeyword") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_number",
                        child: currentChild,
                        expected: ["NumberKeyword"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_number$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    callback($.annotation)
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_number$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["number", $])
                    }
                )
            }
            const choose_literalType = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_literalType",
                        kindNameOptions: [ "LiteralType"],
                    })
                    return
                }
                if (currentChild.kindName !== "LiteralType") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_literalType",
                        child: currentChild,
                        expected: ["LiteralType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_literalType$<Annotation>) => void,
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
                            path: "Gtype_literalType$",
                            kindNameOptions: [ "NullKeyword"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "NullKeyword") {
                        $x.reportUnexpectedChild({
                            path: "Gtype_literalType$",
                            child: currentChild,
                            expected: ["NullKeyword"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNGtype_literalType$$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        callback($.annotation)
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
                                path: "Gtype_literalType$$",
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
                            path: "Gtype_literalType$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["literalType", $])
                    }
                )
            }
            const choose_typeLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_typeLiteral",
                        kindNameOptions: [ "TypeLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeLiteral") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_typeLiteral",
                        child: currentChild,
                        expected: ["TypeLiteral"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_typeLiteral$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    let optional: null | tast.TVTGtype_typeLiteral$<Annotation> = null
                    const setOptional = () => {
                        const choiceEnd_Gtype_typeLiteral$ = ($: tast.TVTGtype_typeLiteral$<Annotation>) => {
                            optional = $
                        }
                        if (children.length === 0) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gtype_typeLiteral$",
                                kindNameOptions: ["IndexSignature", "PropertySignature"],
                            })
                            return
                        } else {
                            nextChild = children[children.length - 1]
                            const choose_index = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "Gtype_typeLiteral$_index",
                                        kindNameOptions: [ "IndexSignature"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "IndexSignature") {
                                    $x.reportUnexpectedChild({
                                        path: "Gtype_typeLiteral$_index",
                                        child: currentChild,
                                        expected: ["IndexSignature"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGtype_typeLiteral$_index$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                    const sequenceEnd = ($: tast.TVTGtype_typeLiteral$_index$<Annotation>) => {
                                        callback({
                                            annotation: node.annotation,
                                            content: $,
                                        })
                                    }
                                    currentChild = children.pop()
                                    if (currentChild === undefined) {
                                        $x.reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "Gtype_typeLiteral$_index$_key",
                                            kindNameOptions: [ "Parameter"],
                                        })
                                        return
                                    }
                                    if (currentChild.kindName !== "Parameter") {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_typeLiteral$_index$_key",
                                            child: currentChild,
                                            expected: ["Parameter"],
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.TUntypedNode<Annotation>,
                                        callback: ($: tast.TNGtype_typeLiteral$_index$_key$<Annotation>) => void,
                                    ): void => {
                                        const node = $
                                        const children: uast.TUntypedNode<Annotation>[] = []
                                        $.children.forEach(($) => { children.push($) })
                                        children.reverse()
                                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                                        const sequenceEnd = ($: tast.TVTGtype_typeLiteral$_index$_key$<Annotation>) => {
                                            callback({
                                                annotation: node.annotation,
                                                content: $,
                                            })
                                        }
                                        Gidentifier(node, children, ($) => {
                                            const _name = $
                                            currentChild = children.pop()
                                            if (currentChild === undefined) {
                                                $x.reportMissingToken({
                                                    parentAnnotation: node.annotation,
                                                    path: "Gtype_typeLiteral$_index$_key$_type",
                                                    kindNameOptions: [ "StringKeyword"],
                                                })
                                                return
                                            }
                                            if (currentChild.kindName !== "StringKeyword") {
                                                $x.reportUnexpectedChild({
                                                    path: "Gtype_typeLiteral$_index$_key$_type",
                                                    child: currentChild,
                                                    expected: ["StringKeyword"],
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: tast.TNGtype_typeLiteral$_index$_key$_type$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                $.children.forEach(($) => { children.push($) })
                                                children.reverse()
                                                callback($.annotation)
                                                if (children.length > 0) {
                                                    $x.reportUnexpectedChild({
                                                        path: "Gtype_typeLiteral$_index$_key$_type$",
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
                                                        "name": _name,
                                                        "type": _type,
                                                    })
                                                }
                                            )
                                        })
                                        if (children.length > 0) {
                                            $x.reportUnexpectedChild({
                                                path: "Gtype_typeLiteral$_index$_key$",
                                                child: children[children.length - 1],
                                                expected: null,
                                            })
                                            return
                                        }
                                    })(
                                        currentChild,
                                        ($) => {
                                            const _key = $
                                            Gtype(node, children, ($) => {
                                                const _type = $
                                                sequenceEnd({
                                                    "key": _key,
                                                    "type": _type,
                                                })
                                            })
                                        }
                                    )
                                    if (children.length > 0) {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_typeLiteral$_index$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_Gtype_typeLiteral$(["index", $])
                                    }
                                )
                            }
                            const choose_properties = () => {
                                const elements: tast.TVTGtype_typeLiteral$_properties<Annotation>[] = []
                                const processElement = () => {
                                    currentChild = children.pop()
                                    if (currentChild === undefined) {
                                        $x.reportMissingToken({
                                            parentAnnotation: node.annotation,
                                            path: "Gtype_typeLiteral$_properties",
                                            kindNameOptions: [ "PropertySignature"],
                                        })
                                        return
                                    }
                                    if (currentChild.kindName !== "PropertySignature") {
                                        $x.reportUnexpectedChild({
                                            path: "Gtype_typeLiteral$_properties",
                                            child: currentChild,
                                            expected: ["PropertySignature"],
                                        })
                                        return
                                    }
                                    ((
                                        $: uast.TUntypedNode<Annotation>,
                                        callback: ($: tast.TNGtype_typeLiteral$_properties$<Annotation>) => void,
                                    ): void => {
                                        const node = $
                                        const children: uast.TUntypedNode<Annotation>[] = []
                                        $.children.forEach(($) => { children.push($) })
                                        children.reverse()
                                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                                        const sequenceEnd = ($: tast.TVTGtype_typeLiteral$_properties$<Annotation>) => {
                                            callback({
                                                annotation: node.annotation,
                                                content: $,
                                            })
                                        }
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "Gtype_typeLiteral$_properties$_readonly",
                                                kindNameOptions: [ "ReadonlyKeyword"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "ReadonlyKeyword") {
                                            $x.reportUnexpectedChild({
                                                path: "Gtype_typeLiteral$_properties$_readonly",
                                                child: currentChild,
                                                expected: ["ReadonlyKeyword"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: tast.TNGtype_typeLiteral$_properties$_readonly$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.TUntypedNode<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            callback($.annotation)
                                            if (children.length > 0) {
                                                $x.reportUnexpectedChild({
                                                    path: "Gtype_typeLiteral$_properties$_readonly$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                })
                                                return
                                            }
                                        })(
                                            currentChild,
                                            ($) => {
                                                const _readonly = $
                                                currentChild = children.pop()
                                                if (currentChild === undefined) {
                                                    $x.reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "Gtype_typeLiteral$_properties$_name",
                                                        kindNameOptions: [ "StringLiteral"],
                                                    })
                                                    return
                                                }
                                                if (currentChild.kindName !== "StringLiteral") {
                                                    $x.reportUnexpectedChild({
                                                        path: "Gtype_typeLiteral$_properties$_name",
                                                        child: currentChild,
                                                        expected: ["StringLiteral"],
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.TUntypedNode<Annotation>,
                                                    callback: ($: tast.TNGtype_typeLiteral$_properties$_name$<Annotation>) => void,
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
                                                            path: "Gtype_typeLiteral$_properties$_name$",
                                                            child: children[children.length - 1],
                                                            expected: null,
                                                        })
                                                        return
                                                    }
                                                })(
                                                    currentChild,
                                                    ($) => {
                                                        const _name = $
                                                        let optional: null | tast.TVTGtype_typeLiteral$_properties$_questionToken<Annotation> = null
                                                        const setOptional = () => {
                                                            currentChild = children.pop()
                                                            if (currentChild === undefined) {
                                                                $x.reportMissingToken({
                                                                    parentAnnotation: node.annotation,
                                                                    path: "Gtype_typeLiteral$_properties$_questionToken",
                                                                    kindNameOptions: [ "QuestionToken"],
                                                                })
                                                                return
                                                            }
                                                            if (currentChild.kindName !== "QuestionToken") {
                                                                $x.reportUnexpectedChild({
                                                                    path: "Gtype_typeLiteral$_properties$_questionToken",
                                                                    child: currentChild,
                                                                    expected: ["QuestionToken"],
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.TUntypedNode<Annotation>,
                                                                callback: ($: tast.TNGtype_typeLiteral$_properties$_questionToken$<Annotation>) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                                $.children.forEach(($) => { children.push($) })
                                                                children.reverse()
                                                                callback($.annotation)
                                                                if (children.length > 0) {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "Gtype_typeLiteral$_properties$_questionToken$",
                                                                        child: children[children.length - 1],
                                                                        expected: null,
                                                                    })
                                                                    return
                                                                }
                                                            })(
                                                                currentChild,
                                                                ($) => {
                                                                    optional = $
                                                                }
                                                            )
                                                        }
                                                        if (children.length === 0) {} else {
                                                            nextChild = children[children.length - 1]
                                                            switch (nextChild.kindName) {
                                                                case "QuestionToken":
                                                                    setOptional()
                                                                    break
                                                            }
                                                        }
                                                        pr.cc(optional, ($) => {
                                                            const _questionToken = $
                                                            Gtype(node, children, ($) => {
                                                                const _type = $
                                                                sequenceEnd({
                                                                    "readonly": _readonly,
                                                                    "name": _name,
                                                                    "questionToken": _questionToken,
                                                                    "type": _type,
                                                                })
                                                            })
                                                        })
                                                    }
                                                )
                                            }
                                        )
                                        if (children.length > 0) {
                                            $x.reportUnexpectedChild({
                                                path: "Gtype_typeLiteral$_properties$",
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
                                            case "PropertySignature":
                                                processElement()
                                                break
                                            default: break arrayLoop
                                        }
                                    }
                                }
                                pr.cc(elements, ($) => {
                                    choiceEnd_Gtype_typeLiteral$(["properties", $])
                                })
                            }
                            switch (nextChild.kindName) {
                                case "IndexSignature": {
                                    choose_index()
                                    break
                                }
                                case "PropertySignature": {
                                    choose_properties()
                                    break
                                }
                                default: {
                                    $x.reportUnexpectedChild({
                                        path: "Gtype_typeLiteral$",
                                        child: nextChild,
                                        expected: ["IndexSignature", "PropertySignature"],
                                    })
                                }
                            }
                        }
                    }
                    if (children.length === 0) {} else {
                        nextChild = children[children.length - 1]
                        switch (nextChild.kindName) {
                            case "IndexSignature":
                                setOptional()
                                break
                            case "PropertySignature":
                                setOptional()
                                break
                        }
                    }
                    pr.cc(optional, ($) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    })
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_typeLiteral$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["typeLiteral", $])
                    }
                )
            }
            const choose_typeReference = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_typeReference",
                        kindNameOptions: [ "TypeReference"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeReference") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_typeReference",
                        child: currentChild,
                        expected: ["TypeReference"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_typeReference$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGtype_typeReference$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    const choiceEnd_Gtype_typeReference$_referencedType = ($: tast.TVTGtype_typeReference$_referencedType<Annotation>) => {
                        const _referencedType = $
                        const elements: tast.TVTGtype_typeReference$_typeArguments<Annotation>[] = []
                        const processElement = () => {
                            Gtype(node, children, ($) => {
                                elements.push($)
                            })
                        }
                        arrayLoop: while (true) {
                            if (children.length === 0) {
                                break arrayLoop
                            } else {
                                nextChild = children[children.length - 1]
                                switch (nextChild.kindName) {
                                    case "ArrayType":
                                        processElement()
                                        break
                                    case "BooleanKeyword":
                                        processElement()
                                        break
                                    case "StringKeyword":
                                        processElement()
                                        break
                                    case "NumberKeyword":
                                        processElement()
                                        break
                                    case "LiteralType":
                                        processElement()
                                        break
                                    case "TypeLiteral":
                                        processElement()
                                        break
                                    case "TypeReference":
                                        processElement()
                                        break
                                    case "UnionType":
                                        processElement()
                                        break
                                    default: break arrayLoop
                                }
                            }
                        }
                        pr.cc(elements, ($) => {
                            const _typeArguments = $
                            sequenceEnd({
                                "referencedType": _referencedType,
                                "typeArguments": _typeArguments,
                            })
                        })
                    }
                    if (children.length === 0) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "Gtype_typeReference$_referencedType",
                            kindNameOptions: ["Identifier", "QualifiedName"],
                        })
                        return
                    } else {
                        nextChild = children[children.length - 1]
                        const choose_identifier = () => {
                            Gidentifier(node, children, ($) => {
                                choiceEnd_Gtype_typeReference$_referencedType(["identifier", $])
                            })
                        }
                        const choose_qualifiedName = () => {
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                $x.reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gtype_typeReference$_referencedType_qualifiedName",
                                    kindNameOptions: [ "QualifiedName"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "QualifiedName") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_typeReference$_referencedType_qualifiedName",
                                    child: currentChild,
                                    expected: ["QualifiedName"],
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
                            ): void => {
                                const node = $
                                const children: uast.TUntypedNode<Annotation>[] = []
                                $.children.forEach(($) => { children.push($) })
                                children.reverse()
                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                const sequenceEnd = ($: tast.TVTGtype_typeReference$_referencedType_qualifiedName$<Annotation>) => {
                                    callback({
                                        annotation: node.annotation,
                                        content: $,
                                    })
                                }
                                Gidentifier(node, children, ($) => {
                                    const _context = $
                                    Gidentifier(node, children, ($) => {
                                        const _type = $
                                        sequenceEnd({
                                            "context": _context,
                                            "type": _type,
                                        })
                                    })
                                })
                                if (children.length > 0) {
                                    $x.reportUnexpectedChild({
                                        path: "Gtype_typeReference$_referencedType_qualifiedName$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    choiceEnd_Gtype_typeReference$_referencedType(["qualifiedName", $])
                                }
                            )
                        }
                        switch (nextChild.kindName) {
                            case "Identifier": {
                                choose_identifier()
                                break
                            }
                            case "QualifiedName": {
                                choose_qualifiedName()
                                break
                            }
                            default: {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_typeReference$_referencedType",
                                    child: nextChild,
                                    expected: ["Identifier", "QualifiedName"],
                                })
                            }
                        }
                    }
                    if (children.length > 0) {
                        $x.reportUnexpectedChild({
                            path: "Gtype_typeReference$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["typeReference", $])
                    }
                )
            }
            const choose_union = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_union",
                        kindNameOptions: [ "UnionType"],
                    })
                    return
                }
                if (currentChild.kindName !== "UnionType") {
                    $x.reportUnexpectedChild({
                        path: "Gtype_union",
                        child: currentChild,
                        expected: ["UnionType"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNGtype_union$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const elements: tast.TVTGtype_union$<Annotation>[] = []
                    const processElement = () => {
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "Gtype_union$",
                                kindNameOptions: [ "TupleType"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "TupleType") {
                            $x.reportUnexpectedChild({
                                path: "Gtype_union$",
                                child: currentChild,
                                expected: ["TupleType"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNGtype_union$$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                            const sequenceEnd = ($: tast.TVTGtype_union$$<Annotation>) => {
                                callback({
                                    annotation: node.annotation,
                                    content: $,
                                })
                            }
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                $x.reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "Gtype_union$$_state",
                                    kindNameOptions: [ "LiteralType"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "LiteralType") {
                                $x.reportUnexpectedChild({
                                    path: "Gtype_union$$_state",
                                    child: currentChild,
                                    expected: ["LiteralType"],
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNGtype_union$$_state$<Annotation>) => void,
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
                                        path: "Gtype_union$$_state$",
                                        kindNameOptions: [ "StringLiteral"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "StringLiteral") {
                                    $x.reportUnexpectedChild({
                                        path: "Gtype_union$$_state$",
                                        child: currentChild,
                                        expected: ["StringLiteral"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNGtype_union$$_state$$<Annotation>) => void,
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
                                            path: "Gtype_union$$_state$$",
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
                                        path: "Gtype_union$$_state$",
                                        child: children[children.length - 1],
                                        expected: null,
                                    })
                                    return
                                }
                            })(
                                currentChild,
                                ($) => {
                                    const _state = $
                                    Gtype(node, children, ($) => {
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
                                    path: "Gtype_union$$",
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
                                case "TupleType":
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
                            path: "Gtype_union$",
                            child: children[children.length - 1],
                            expected: null,
                        })
                        return
                    }
                })(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["union", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "ArrayType": {
                    choose_array()
                    break
                }
                case "BooleanKeyword": {
                    choose_boolean()
                    break
                }
                case "StringKeyword": {
                    choose_string()
                    break
                }
                case "NumberKeyword": {
                    choose_number()
                    break
                }
                case "LiteralType": {
                    choose_literalType()
                    break
                }
                case "TypeLiteral": {
                    choose_typeLiteral()
                    break
                }
                case "TypeReference": {
                    choose_typeReference()
                    break
                }
                case "UnionType": {
                    choose_union()
                    break
                }
                default: {
                    $x.reportUnexpectedChild({
                        path: "Gtype",
                        child: nextChild,
                        expected: ["ArrayType", "BooleanKeyword", "StringKeyword", "NumberKeyword", "LiteralType", "TypeLiteral", "TypeReference", "UnionType"],
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
            const elements: tast.TVTroot_imports<Annotation>[] = []
            const processElement = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    $x.reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "root_imports",
                        kindNameOptions: [ "ImportDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "ImportDeclaration") {
                    $x.reportUnexpectedChild({
                        path: "root_imports",
                        child: currentChild,
                        expected: ["ImportDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.TUntypedNode<Annotation>,
                    callback: ($: tast.TNroot_imports$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.TUntypedNode<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTroot_imports$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "root_imports$_clause",
                            kindNameOptions: [ "ImportClause"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "ImportClause") {
                        $x.reportUnexpectedChild({
                            path: "root_imports$_clause",
                            child: currentChild,
                            expected: ["ImportClause"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNroot_imports$_clause$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                        const choiceEnd_root_imports$_clause$ = ($: tast.TVTroot_imports$_clause$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        if (children.length === 0) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "root_imports$_clause$",
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
                                        path: "root_imports$_clause$_namespace",
                                        kindNameOptions: [ "NamespaceImport"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "NamespaceImport") {
                                    $x.reportUnexpectedChild({
                                        path: "root_imports$_clause$_namespace",
                                        child: currentChild,
                                        expected: ["NamespaceImport"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNroot_imports$_clause$_namespace$<Annotation>) => void,
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
                                            path: "root_imports$_clause$_namespace$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_root_imports$_clause$(["namespace", $])
                                    }
                                )
                            }
                            const choose_named = () => {
                                currentChild = children.pop()
                                if (currentChild === undefined) {
                                    $x.reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "root_imports$_clause$_named",
                                        kindNameOptions: [ "NamedImports"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "NamedImports") {
                                    $x.reportUnexpectedChild({
                                        path: "root_imports$_clause$_named",
                                        child: currentChild,
                                        expected: ["NamedImports"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.TUntypedNode<Annotation>,
                                    callback: ($: tast.TNroot_imports$_clause$_named$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.TUntypedNode<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                    const elements: tast.TVTroot_imports$_clause$_named$<Annotation>[] = []
                                    const processElement = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "root_imports$_clause$_named$",
                                                kindNameOptions: [ "ImportSpecifier"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "ImportSpecifier") {
                                            $x.reportUnexpectedChild({
                                                path: "root_imports$_clause$_named$",
                                                child: currentChild,
                                                expected: ["ImportSpecifier"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: tast.TNroot_imports$_clause$_named$$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.TUntypedNode<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                            const sequenceEnd = ($: tast.TVTroot_imports$_clause$_named$$<Annotation>) => {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                })
                                            }
                                            Gidentifier(node, children, ($) => {
                                                const _name = $
                                                let optional: null | tast.TVTroot_imports$_clause$_named$$_as<Annotation> = null
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
                                                    path: "root_imports$_clause$_named$$",
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
                                            path: "root_imports$_clause$_named$",
                                            child: children[children.length - 1],
                                            expected: null,
                                        })
                                        return
                                    }
                                })(
                                    currentChild,
                                    ($) => {
                                        choiceEnd_root_imports$_clause$(["named", $])
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
                                        path: "root_imports$_clause$",
                                        child: nextChild,
                                        expected: ["NamespaceImport", "NamedImports"],
                                    })
                                }
                            }
                        }
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
                                path: "root_imports$_clause$",
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
                                    path: "root_imports$_file",
                                    kindNameOptions: [ "StringLiteral"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "StringLiteral") {
                                $x.reportUnexpectedChild({
                                    path: "root_imports$_file",
                                    child: currentChild,
                                    expected: ["StringLiteral"],
                                })
                                return
                            }
                            ((
                                $: uast.TUntypedNode<Annotation>,
                                callback: ($: tast.TNroot_imports$_file$<Annotation>) => void,
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
                                        path: "root_imports$_file$",
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
                            path: "root_imports$",
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
                const _imports = $
                const elements: tast.TVTroot_procedures<Annotation>[] = []
                const processElement = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "root_procedures",
                            kindNameOptions: [ "FunctionDeclaration"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "FunctionDeclaration") {
                        $x.reportUnexpectedChild({
                            path: "root_procedures",
                            child: currentChild,
                            expected: ["FunctionDeclaration"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNroot_procedures$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                        const sequenceEnd = ($: tast.TVTroot_procedures$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "root_procedures$_export",
                                kindNameOptions: [ "ExportKeyword"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "ExportKeyword") {
                            $x.reportUnexpectedChild({
                                path: "root_procedures$_export",
                                child: currentChild,
                                expected: ["ExportKeyword"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNroot_procedures$_export$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            callback($.annotation)
                            if (children.length > 0) {
                                $x.reportUnexpectedChild({
                                    path: "root_procedures$_export$",
                                    child: children[children.length - 1],
                                    expected: null,
                                })
                                return
                            }
                        })(
                            currentChild,
                            ($) => {
                                const _export = $
                                Gidentifier(node, children, ($) => {
                                    const _name = $
                                    const elements: tast.TVTroot_procedures$_typeParameters<Annotation>[] = []
                                    const processElement = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "root_procedures$_typeParameters",
                                                kindNameOptions: [ "TypeParameter"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "TypeParameter") {
                                            $x.reportUnexpectedChild({
                                                path: "root_procedures$_typeParameters",
                                                child: currentChild,
                                                expected: ["TypeParameter"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: tast.TNroot_procedures$_typeParameters$<Annotation>) => void,
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
                                                    path: "root_procedures$_typeParameters$",
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
                                                case "TypeParameter":
                                                    processElement()
                                                    break
                                                default: break arrayLoop
                                            }
                                        }
                                    }
                                    pr.cc(elements, ($) => {
                                        const _typeParameters = $
                                        const elements: tast.TVTroot_procedures$_parameters<Annotation>[] = []
                                        const processElement = () => {
                                            currentChild = children.pop()
                                            if (currentChild === undefined) {
                                                $x.reportMissingToken({
                                                    parentAnnotation: node.annotation,
                                                    path: "root_procedures$_parameters",
                                                    kindNameOptions: [ "Parameter"],
                                                })
                                                return
                                            }
                                            if (currentChild.kindName !== "Parameter") {
                                                $x.reportUnexpectedChild({
                                                    path: "root_procedures$_parameters",
                                                    child: currentChild,
                                                    expected: ["Parameter"],
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: tast.TNroot_procedures$_parameters$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                $.children.forEach(($) => { children.push($) })
                                                children.reverse()
                                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                const sequenceEnd = ($: tast.TVTroot_procedures$_parameters$<Annotation>) => {
                                                    callback({
                                                        annotation: node.annotation,
                                                        content: $,
                                                    })
                                                }
                                                Gidentifier(node, children, ($) => {
                                                    const _name = $
                                                    const choiceEnd_root_procedures$_parameters$_type = ($: tast.TVTroot_procedures$_parameters$_type<Annotation>) => {
                                                        const _type = $
                                                        sequenceEnd({
                                                            "name": _name,
                                                            "type": _type,
                                                        })
                                                    }
                                                    if (children.length === 0) {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.annotation,
                                                            path: "root_procedures$_parameters$_type",
                                                            kindNameOptions: ["FunctionType", "TypeReference"],
                                                        })
                                                        return
                                                    } else {
                                                        nextChild = children[children.length - 1]
                                                        const choose_func = () => {
                                                            currentChild = children.pop()
                                                            if (currentChild === undefined) {
                                                                $x.reportMissingToken({
                                                                    parentAnnotation: node.annotation,
                                                                    path: "root_procedures$_parameters$_type_func",
                                                                    kindNameOptions: [ "FunctionType"],
                                                                })
                                                                return
                                                            }
                                                            if (currentChild.kindName !== "FunctionType") {
                                                                $x.reportUnexpectedChild({
                                                                    path: "root_procedures$_parameters$_type_func",
                                                                    child: currentChild,
                                                                    expected: ["FunctionType"],
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.TUntypedNode<Annotation>,
                                                                callback: ($: tast.TNroot_procedures$_parameters$_type_func$<Annotation>) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                                $.children.forEach(($) => { children.push($) })
                                                                children.reverse()
                                                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                                const sequenceEnd = ($: tast.TVTroot_procedures$_parameters$_type_func$<Annotation>) => {
                                                                    callback({
                                                                        annotation: node.annotation,
                                                                        content: $,
                                                                    })
                                                                }
                                                                currentChild = children.pop()
                                                                if (currentChild === undefined) {
                                                                    $x.reportMissingToken({
                                                                        parentAnnotation: node.annotation,
                                                                        path: "root_procedures$_parameters$_type_func$_parameters",
                                                                        kindNameOptions: [ "Parameter"],
                                                                    })
                                                                    return
                                                                }
                                                                if (currentChild.kindName !== "Parameter") {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "root_procedures$_parameters$_type_func$_parameters",
                                                                        child: currentChild,
                                                                        expected: ["Parameter"],
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.TUntypedNode<Annotation>,
                                                                    callback: ($: tast.TNroot_procedures$_parameters$_type_func$_parameters$<Annotation>) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children: uast.TUntypedNode<Annotation>[] = []
                                                                    $.children.forEach(($) => { children.push($) })
                                                                    children.reverse()
                                                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                                    const sequenceEnd = ($: tast.TVTroot_procedures$_parameters$_type_func$_parameters$<Annotation>) => {
                                                                        callback({
                                                                            annotation: node.annotation,
                                                                            content: $,
                                                                        })
                                                                    }
                                                                    Gidentifier(node, children, ($) => {
                                                                        const _name = $
                                                                        Gtype(node, children, ($) => {
                                                                            const _type = $
                                                                            sequenceEnd({
                                                                                "name": _name,
                                                                                "type": _type,
                                                                            })
                                                                        })
                                                                    })
                                                                    if (children.length > 0) {
                                                                        $x.reportUnexpectedChild({
                                                                            path: "root_procedures$_parameters$_type_func$_parameters$",
                                                                            child: children[children.length - 1],
                                                                            expected: null,
                                                                        })
                                                                        return
                                                                    }
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        const _parameters = $
                                                                        Gtype(node, children, ($) => {
                                                                            const _returnType = $
                                                                            sequenceEnd({
                                                                                "parameters": _parameters,
                                                                                "returnType": _returnType,
                                                                            })
                                                                        })
                                                                    }
                                                                )
                                                                if (children.length > 0) {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "root_procedures$_parameters$_type_func$",
                                                                        child: children[children.length - 1],
                                                                        expected: null,
                                                                    })
                                                                    return
                                                                }
                                                            })(
                                                                currentChild,
                                                                ($) => {
                                                                    choiceEnd_root_procedures$_parameters$_type(["func", $])
                                                                }
                                                            )
                                                        }
                                                        const choose_typeReference = () => {
                                                            currentChild = children.pop()
                                                            if (currentChild === undefined) {
                                                                $x.reportMissingToken({
                                                                    parentAnnotation: node.annotation,
                                                                    path: "root_procedures$_parameters$_type_typeReference",
                                                                    kindNameOptions: [ "TypeReference"],
                                                                })
                                                                return
                                                            }
                                                            if (currentChild.kindName !== "TypeReference") {
                                                                $x.reportUnexpectedChild({
                                                                    path: "root_procedures$_parameters$_type_typeReference",
                                                                    child: currentChild,
                                                                    expected: ["TypeReference"],
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.TUntypedNode<Annotation>,
                                                                callback: ($: tast.TNroot_procedures$_parameters$_type_typeReference$<Annotation>) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                                $.children.forEach(($) => { children.push($) })
                                                                children.reverse()
                                                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                                const sequenceEnd = ($: tast.TVTroot_procedures$_parameters$_type_typeReference$<Annotation>) => {
                                                                    callback({
                                                                        annotation: node.annotation,
                                                                        content: $,
                                                                    })
                                                                }
                                                                currentChild = children.pop()
                                                                if (currentChild === undefined) {
                                                                    $x.reportMissingToken({
                                                                        parentAnnotation: node.annotation,
                                                                        path: "root_procedures$_parameters$_type_typeReference$_name",
                                                                        kindNameOptions: [ "QualifiedName"],
                                                                    })
                                                                    return
                                                                }
                                                                if (currentChild.kindName !== "QualifiedName") {
                                                                    $x.reportUnexpectedChild({
                                                                        path: "root_procedures$_parameters$_type_typeReference$_name",
                                                                        child: currentChild,
                                                                        expected: ["QualifiedName"],
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.TUntypedNode<Annotation>,
                                                                    callback: ($: tast.TNroot_procedures$_parameters$_type_typeReference$_name$<Annotation>) => void,
                                                                ): void => {
                                                                    const node = $
                                                                    const children: uast.TUntypedNode<Annotation>[] = []
                                                                    $.children.forEach(($) => { children.push($) })
                                                                    children.reverse()
                                                                    let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                                    let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                                    const sequenceEnd = ($: tast.TVTroot_procedures$_parameters$_type_typeReference$_name$<Annotation>) => {
                                                                        callback({
                                                                            annotation: node.annotation,
                                                                            content: $,
                                                                        })
                                                                    }
                                                                    currentChild = children.pop()
                                                                    if (currentChild === undefined) {
                                                                        $x.reportMissingToken({
                                                                            parentAnnotation: node.annotation,
                                                                            path: "root_procedures$_parameters$_type_typeReference$_name$_context",
                                                                            kindNameOptions: [ "Identifier"],
                                                                        })
                                                                        return
                                                                    }
                                                                    if (currentChild.kindName !== "Identifier") {
                                                                        $x.reportUnexpectedChild({
                                                                            path: "root_procedures$_parameters$_type_typeReference$_name$_context",
                                                                            child: currentChild,
                                                                            expected: ["Identifier"],
                                                                        })
                                                                        return
                                                                    }
                                                                    ((
                                                                        $: uast.TUntypedNode<Annotation>,
                                                                        callback: ($: tast.TNroot_procedures$_parameters$_type_typeReference$_name$_context$<Annotation>) => void,
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
                                                                                path: "root_procedures$_parameters$_type_typeReference$_name$_context$",
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
                                                                                    path: "root_procedures$_parameters$_type_typeReference$_name$_type",
                                                                                    kindNameOptions: [ "Identifier"],
                                                                                })
                                                                                return
                                                                            }
                                                                            if (currentChild.kindName !== "Identifier") {
                                                                                $x.reportUnexpectedChild({
                                                                                    path: "root_procedures$_parameters$_type_typeReference$_name$_type",
                                                                                    child: currentChild,
                                                                                    expected: ["Identifier"],
                                                                                })
                                                                                return
                                                                            }
                                                                            ((
                                                                                $: uast.TUntypedNode<Annotation>,
                                                                                callback: ($: tast.TNroot_procedures$_parameters$_type_typeReference$_name$_type$<Annotation>) => void,
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
                                                                                        path: "root_procedures$_parameters$_type_typeReference$_name$_type$",
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
                                                                            path: "root_procedures$_parameters$_type_typeReference$_name$",
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
                                                                        path: "root_procedures$_parameters$_type_typeReference$",
                                                                        child: children[children.length - 1],
                                                                        expected: null,
                                                                    })
                                                                    return
                                                                }
                                                            })(
                                                                currentChild,
                                                                ($) => {
                                                                    choiceEnd_root_procedures$_parameters$_type(["typeReference", $])
                                                                }
                                                            )
                                                        }
                                                        switch (nextChild.kindName) {
                                                            case "FunctionType": {
                                                                choose_func()
                                                                break
                                                            }
                                                            case "TypeReference": {
                                                                choose_typeReference()
                                                                break
                                                            }
                                                            default: {
                                                                $x.reportUnexpectedChild({
                                                                    path: "root_procedures$_parameters$_type",
                                                                    child: nextChild,
                                                                    expected: ["FunctionType", "TypeReference"],
                                                                })
                                                            }
                                                        }
                                                    }
                                                })
                                                if (children.length > 0) {
                                                    $x.reportUnexpectedChild({
                                                        path: "root_procedures$_parameters$",
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
                                                    case "Parameter":
                                                        processElement()
                                                        break
                                                    default: break arrayLoop
                                                }
                                            }
                                        }
                                        pr.cc(elements, ($) => {
                                            const _parameters = $
                                            currentChild = children.pop()
                                            if (currentChild === undefined) {
                                                $x.reportMissingToken({
                                                    parentAnnotation: node.annotation,
                                                    path: "root_procedures$_returnType",
                                                    kindNameOptions: [ "TypeReference"],
                                                })
                                                return
                                            }
                                            if (currentChild.kindName !== "TypeReference") {
                                                $x.reportUnexpectedChild({
                                                    path: "root_procedures$_returnType",
                                                    child: currentChild,
                                                    expected: ["TypeReference"],
                                                })
                                                return
                                            }
                                            ((
                                                $: uast.TUntypedNode<Annotation>,
                                                callback: ($: tast.TNroot_procedures$_returnType$<Annotation>) => void,
                                            ): void => {
                                                const node = $
                                                const children: uast.TUntypedNode<Annotation>[] = []
                                                $.children.forEach(($) => { children.push($) })
                                                children.reverse()
                                                let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                const sequenceEnd = ($: tast.TVTroot_procedures$_returnType$<Annotation>) => {
                                                    callback({
                                                        annotation: node.annotation,
                                                        content: $,
                                                    })
                                                }
                                                const choiceEnd_root_procedures$_returnType$_referencedType = ($: tast.TVTroot_procedures$_returnType$_referencedType<Annotation>) => {
                                                    const _referencedType = $
                                                    const elements: tast.TVTroot_procedures$_returnType$_typeArguments<Annotation>[] = []
                                                    const processElement = () => {
                                                        Gtype(node, children, ($) => {
                                                            elements.push($)
                                                        })
                                                    }
                                                    arrayLoop: while (true) {
                                                        if (children.length === 0) {
                                                            break arrayLoop
                                                        } else {
                                                            nextChild = children[children.length - 1]
                                                            switch (nextChild.kindName) {
                                                                case "ArrayType":
                                                                    processElement()
                                                                    break
                                                                case "BooleanKeyword":
                                                                    processElement()
                                                                    break
                                                                case "StringKeyword":
                                                                    processElement()
                                                                    break
                                                                case "NumberKeyword":
                                                                    processElement()
                                                                    break
                                                                case "LiteralType":
                                                                    processElement()
                                                                    break
                                                                case "TypeLiteral":
                                                                    processElement()
                                                                    break
                                                                case "TypeReference":
                                                                    processElement()
                                                                    break
                                                                case "UnionType":
                                                                    processElement()
                                                                    break
                                                                default: break arrayLoop
                                                            }
                                                        }
                                                    }
                                                    pr.cc(elements, ($) => {
                                                        const _typeArguments = $
                                                        sequenceEnd({
                                                            "referencedType": _referencedType,
                                                            "typeArguments": _typeArguments,
                                                        })
                                                    })
                                                }
                                                if (children.length === 0) {
                                                    $x.reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "root_procedures$_returnType$_referencedType",
                                                        kindNameOptions: ["Identifier", "QualifiedName"],
                                                    })
                                                    return
                                                } else {
                                                    nextChild = children[children.length - 1]
                                                    const choose_identifier = () => {
                                                        Gidentifier(node, children, ($) => {
                                                            choiceEnd_root_procedures$_returnType$_referencedType(["identifier", $])
                                                        })
                                                    }
                                                    const choose_qualifiedName = () => {
                                                        currentChild = children.pop()
                                                        if (currentChild === undefined) {
                                                            $x.reportMissingToken({
                                                                parentAnnotation: node.annotation,
                                                                path: "root_procedures$_returnType$_referencedType_qualifiedName",
                                                                kindNameOptions: [ "QualifiedName"],
                                                            })
                                                            return
                                                        }
                                                        if (currentChild.kindName !== "QualifiedName") {
                                                            $x.reportUnexpectedChild({
                                                                path: "root_procedures$_returnType$_referencedType_qualifiedName",
                                                                child: currentChild,
                                                                expected: ["QualifiedName"],
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children: uast.TUntypedNode<Annotation>[] = []
                                                            $.children.forEach(($) => { children.push($) })
                                                            children.reverse()
                                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                            const sequenceEnd = ($: tast.TVTroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation>) => {
                                                                callback({
                                                                    annotation: node.annotation,
                                                                    content: $,
                                                                })
                                                            }
                                                            Gidentifier(node, children, ($) => {
                                                                const _context = $
                                                                Gidentifier(node, children, ($) => {
                                                                    const _type = $
                                                                    sequenceEnd({
                                                                        "context": _context,
                                                                        "type": _type,
                                                                    })
                                                                })
                                                            })
                                                            if (children.length > 0) {
                                                                $x.reportUnexpectedChild({
                                                                    path: "root_procedures$_returnType$_referencedType_qualifiedName$",
                                                                    child: children[children.length - 1],
                                                                    expected: null,
                                                                })
                                                                return
                                                            }
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_root_procedures$_returnType$_referencedType(["qualifiedName", $])
                                                            }
                                                        )
                                                    }
                                                    switch (nextChild.kindName) {
                                                        case "Identifier": {
                                                            choose_identifier()
                                                            break
                                                        }
                                                        case "QualifiedName": {
                                                            choose_qualifiedName()
                                                            break
                                                        }
                                                        default: {
                                                            $x.reportUnexpectedChild({
                                                                path: "root_procedures$_returnType$_referencedType",
                                                                child: nextChild,
                                                                expected: ["Identifier", "QualifiedName"],
                                                            })
                                                        }
                                                    }
                                                }
                                                if (children.length > 0) {
                                                    $x.reportUnexpectedChild({
                                                        path: "root_procedures$_returnType$",
                                                        child: children[children.length - 1],
                                                        expected: null,
                                                    })
                                                    return
                                                }
                                            })(
                                                currentChild,
                                                ($) => {
                                                    const _returnType = $
                                                    currentChild = children.pop()
                                                    if (currentChild === undefined) {
                                                        $x.reportMissingToken({
                                                            parentAnnotation: node.annotation,
                                                            path: "root_procedures$_block",
                                                            kindNameOptions: [ "Block"],
                                                        })
                                                        return
                                                    }
                                                    if (currentChild.kindName !== "Block") {
                                                        $x.reportUnexpectedChild({
                                                            path: "root_procedures$_block",
                                                            child: currentChild,
                                                            expected: ["Block"],
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.TUntypedNode<Annotation>,
                                                        callback: ($: tast.TNroot_procedures$_block$<Annotation>) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children: uast.TUntypedNode<Annotation>[] = []
                                                        $.children.forEach(($) => { children.push($) })
                                                        children.reverse()
                                                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                        const sequenceEnd = ($: tast.TVTroot_procedures$_block$<Annotation>) => {
                                                            callback({
                                                                annotation: node.annotation,
                                                                content: $,
                                                            })
                                                        }
                                                        currentChild = children.pop()
                                                        if (currentChild === undefined) {
                                                            $x.reportMissingToken({
                                                                parentAnnotation: node.annotation,
                                                                path: "root_procedures$_block$_returnStatement",
                                                                kindNameOptions: [ "ReturnStatement"],
                                                            })
                                                            return
                                                        }
                                                        if (currentChild.kindName !== "ReturnStatement") {
                                                            $x.reportUnexpectedChild({
                                                                path: "root_procedures$_block$_returnStatement",
                                                                child: currentChild,
                                                                expected: ["ReturnStatement"],
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.TUntypedNode<Annotation>,
                                                            callback: ($: tast.TNroot_procedures$_block$_returnStatement$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children: uast.TUntypedNode<Annotation>[] = []
                                                            $.children.forEach(($) => { children.push($) })
                                                            children.reverse()
                                                            let currentChild: uast.TUntypedNode<Annotation> | undefined
                                                            let nextChild: uast.TUntypedNode<Annotation> | undefined
                                                            Ginitialization(node, children, ($) => {
                                                                callback({
                                                                    annotation: node.annotation,
                                                                    content: $,
                                                                })
                                                            })
                                                            if (children.length > 0) {
                                                                $x.reportUnexpectedChild({
                                                                    path: "root_procedures$_block$_returnStatement$",
                                                                    child: children[children.length - 1],
                                                                    expected: null,
                                                                })
                                                                return
                                                            }
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                const _returnStatement = $
                                                                sequenceEnd({
                                                                    "returnStatement": _returnStatement,
                                                                })
                                                            }
                                                        )
                                                        if (children.length > 0) {
                                                            $x.reportUnexpectedChild({
                                                                path: "root_procedures$_block$",
                                                                child: children[children.length - 1],
                                                                expected: null,
                                                            })
                                                            return
                                                        }
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            const _block = $
                                                            sequenceEnd({
                                                                "export": _export,
                                                                "name": _name,
                                                                "typeParameters": _typeParameters,
                                                                "parameters": _parameters,
                                                                "returnType": _returnType,
                                                                "block": _block,
                                                            })
                                                        }
                                                    )
                                                }
                                            )
                                        })
                                    })
                                })
                            }
                        )
                        if (children.length > 0) {
                            $x.reportUnexpectedChild({
                                path: "root_procedures$",
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
                            case "FunctionDeclaration":
                                processElement()
                                break
                            default: break arrayLoop
                        }
                    }
                }
                pr.cc(elements, ($) => {
                    const _procedures = $
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
                                "imports": _imports,
                                "procedures": _procedures,
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