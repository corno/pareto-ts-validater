import * as pr from "pareto-runtime"
import * as tast from "../../interface/types/ts_api.generated"
import * as uast from "../../interface/types/uast.generated"

export function parse<Annotation>(
    $: uast.Node<Annotation>,
    callback: ($: tast.TRoot<Annotation>) => void,
    reportUnexpectedRoot: ($: { root: uast.Node<Annotation>, }) => void,
    reportUnexpectedChild: ($: { path: string, child: uast.Node<Annotation>, expected: pr.optional<string[]> }) => void,
    reportMissingToken: ($: { parentAnnotation: Annotation, path: string, kindNameOptions: string[], }) => void,
): void {
    function GfunctionType(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.TGfunctionType<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "GfunctionType",
                kindNameOptions: [ "FunctionType"],
            })
            return
        }
        if (currentChild.kindName !== "FunctionType") {
            reportUnexpectedChild({
                path: "GfunctionType",
                child: currentChild,
                expected: ["FunctionType"],
            })
            return
        }
        ((
            $: uast.Node<Annotation>,
            callback: ($: tast.TNGfunctionType$<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.Node<Annotation> | undefined
            let nextChild: uast.Node<Annotation> | undefined
            const sequenceEnd = ($: tast.TVTGfunctionType$<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            const elements: tast.TVGfunctionType$_parameters<Annotation> = []
            const processElement = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GfunctionType$_parameters",
                        kindNameOptions: [ "Parameter"],
                    })
                    return
                }
                if (currentChild.kindName !== "Parameter") {
                    reportUnexpectedChild({
                        path: "GfunctionType$_parameters",
                        child: currentChild,
                        expected: ["Parameter"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.TNGfunctionType$_parameters$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTGfunctionType$_parameters$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    Gidentifier(node, children, ($) => {
                        const _name = $
                        const choiceEnd_GfunctionType$_parameters$_type = ($: tast.TVTGfunctionType$_parameters$_type<Annotation>) => {
                            const _type = $
                            sequenceEnd({
                                "name": _name,
                                "type": _type,
                            })
                        }
                        if (children.length === 0) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "GfunctionType$_parameters$_type",
                                kindNameOptions: ["ArrayType", "BooleanKeyword", "StringKeyword", "NumberKeyword", "TypeLiteral", "TypeReference", "UnionType", "FunctionType"],
                            })
                            return
                        } else {
                            nextChild = children[children.length - 1]
                            const choose_type = () => {
                                const choiceEnd_GfunctionType$_parameters$_type_type = ($: tast.TVTGfunctionType$_parameters$_type_type<Annotation>) => {
                                    choiceEnd_GfunctionType$_parameters$_type(["type", $])
                                }
                                if (children.length === 0) {
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "GfunctionType$_parameters$_type_type",
                                        kindNameOptions: ["ArrayType", "BooleanKeyword", "StringKeyword", "NumberKeyword", "TypeLiteral", "TypeReference", "UnionType"],
                                    })
                                    return
                                } else {
                                    nextChild = children[children.length - 1]
                                    const choose_array = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "GfunctionType$_parameters$_type_type_array",
                                                kindNameOptions: [ "ArrayType"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "ArrayType") {
                                            reportUnexpectedChild({
                                                path: "GfunctionType$_parameters$_type_type_array",
                                                child: currentChild,
                                                expected: ["ArrayType"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.TNGfunctionType$_parameters$_type_type_array$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.Node<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.Node<Annotation> | undefined
                                            let nextChild: uast.Node<Annotation> | undefined
                                            Gtype(node, children, ($) => {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                })
                                            })
                                            if (children.length > 0) {
                                                reportUnexpectedChild({
                                                    path: "GfunctionType$_parameters$_type_type_array$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                })
                                                return
                                            }
                                        })(
                                            currentChild,
                                            ($) => {
                                                choiceEnd_GfunctionType$_parameters$_type_type(["array", $])
                                            }
                                        )
                                    }
                                    const choose_boolean = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "GfunctionType$_parameters$_type_type_boolean",
                                                kindNameOptions: [ "BooleanKeyword"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "BooleanKeyword") {
                                            reportUnexpectedChild({
                                                path: "GfunctionType$_parameters$_type_type_boolean",
                                                child: currentChild,
                                                expected: ["BooleanKeyword"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.TNGfunctionType$_parameters$_type_type_boolean$<Annotation>) => void,
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
                                                    path: "GfunctionType$_parameters$_type_type_boolean$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                })
                                                return
                                            }
                                        })(
                                            currentChild,
                                            ($) => {
                                                choiceEnd_GfunctionType$_parameters$_type_type(["boolean", $])
                                            }
                                        )
                                    }
                                    const choose_string = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "GfunctionType$_parameters$_type_type_string",
                                                kindNameOptions: [ "StringKeyword"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "StringKeyword") {
                                            reportUnexpectedChild({
                                                path: "GfunctionType$_parameters$_type_type_string",
                                                child: currentChild,
                                                expected: ["StringKeyword"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.TNGfunctionType$_parameters$_type_type_string$<Annotation>) => void,
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
                                                    path: "GfunctionType$_parameters$_type_type_string$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                })
                                                return
                                            }
                                        })(
                                            currentChild,
                                            ($) => {
                                                choiceEnd_GfunctionType$_parameters$_type_type(["string", $])
                                            }
                                        )
                                    }
                                    const choose_number = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "GfunctionType$_parameters$_type_type_number",
                                                kindNameOptions: [ "NumberKeyword"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "NumberKeyword") {
                                            reportUnexpectedChild({
                                                path: "GfunctionType$_parameters$_type_type_number",
                                                child: currentChild,
                                                expected: ["NumberKeyword"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.TNGfunctionType$_parameters$_type_type_number$<Annotation>) => void,
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
                                                    path: "GfunctionType$_parameters$_type_type_number$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                })
                                                return
                                            }
                                        })(
                                            currentChild,
                                            ($) => {
                                                choiceEnd_GfunctionType$_parameters$_type_type(["number", $])
                                            }
                                        )
                                    }
                                    const choose_typeLiteral = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "GfunctionType$_parameters$_type_type_typeLiteral",
                                                kindNameOptions: [ "TypeLiteral"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "TypeLiteral") {
                                            reportUnexpectedChild({
                                                path: "GfunctionType$_parameters$_type_type_typeLiteral",
                                                child: currentChild,
                                                expected: ["TypeLiteral"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.TNGfunctionType$_parameters$_type_type_typeLiteral$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.Node<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.Node<Annotation> | undefined
                                            let nextChild: uast.Node<Annotation> | undefined
                                            const elements: tast.TVGfunctionType$_parameters$_type_type_typeLiteral$<Annotation> = []
                                            const processElement = () => {
                                                const choiceEnd_GfunctionType$_parameters$_type_type_typeLiteral$ = ($: tast.TVTGfunctionType$_parameters$_type_type_typeLiteral$<Annotation>) => {
                                                    elements.push($)
                                                }
                                                if (children.length === 0) {
                                                    reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "GfunctionType$_parameters$_type_type_typeLiteral$",
                                                        kindNameOptions: ["IndexSignature", "PropertySignature"],
                                                    })
                                                    return
                                                } else {
                                                    nextChild = children[children.length - 1]
                                                    const choose_index = () => {
                                                        currentChild = children.pop()
                                                        if (currentChild === undefined) {
                                                            reportMissingToken({
                                                                parentAnnotation: node.annotation,
                                                                path: "GfunctionType$_parameters$_type_type_typeLiteral$_index",
                                                                kindNameOptions: [ "IndexSignature"],
                                                            })
                                                            return
                                                        }
                                                        if (currentChild.kindName !== "IndexSignature") {
                                                            reportUnexpectedChild({
                                                                path: "GfunctionType$_parameters$_type_type_typeLiteral$_index",
                                                                child: currentChild,
                                                                expected: ["IndexSignature"],
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.Node<Annotation>,
                                                            callback: ($: tast.TNGfunctionType$_parameters$_type_type_typeLiteral$_index$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children: uast.Node<Annotation>[] = []
                                                            $.children.forEach(($) => { children.push($) })
                                                            children.reverse()
                                                            let currentChild: uast.Node<Annotation> | undefined
                                                            let nextChild: uast.Node<Annotation> | undefined
                                                            const sequenceEnd = ($: tast.TVTGfunctionType$_parameters$_type_type_typeLiteral$_index$<Annotation>) => {
                                                                callback({
                                                                    annotation: node.annotation,
                                                                    content: $,
                                                                })
                                                            }
                                                            currentChild = children.pop()
                                                            if (currentChild === undefined) {
                                                                reportMissingToken({
                                                                    parentAnnotation: node.annotation,
                                                                    path: "GfunctionType$_parameters$_type_type_typeLiteral$_index$_key",
                                                                    kindNameOptions: [ "Parameter"],
                                                                })
                                                                return
                                                            }
                                                            if (currentChild.kindName !== "Parameter") {
                                                                reportUnexpectedChild({
                                                                    path: "GfunctionType$_parameters$_type_type_typeLiteral$_index$_key",
                                                                    child: currentChild,
                                                                    expected: ["Parameter"],
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.Node<Annotation>,
                                                                callback: ($: tast.TNGfunctionType$_parameters$_type_type_typeLiteral$_index$_key$<Annotation>) => void,
                                                            ): void => {
                                                                const node = $
                                                                const children: uast.Node<Annotation>[] = []
                                                                $.children.forEach(($) => { children.push($) })
                                                                children.reverse()
                                                                let currentChild: uast.Node<Annotation> | undefined
                                                                let nextChild: uast.Node<Annotation> | undefined
                                                                const sequenceEnd = ($: tast.TVTGfunctionType$_parameters$_type_type_typeLiteral$_index$_key$<Annotation>) => {
                                                                    callback({
                                                                        annotation: node.annotation,
                                                                        content: $,
                                                                    })
                                                                }
                                                                Gidentifier(node, children, ($) => {
                                                                    const _name = $
                                                                    let optional: tast.TVGfunctionType$_parameters$_type_type_typeLiteral$_index$_key$_type<Annotation> = null
                                                                    const setOptional = () => {
                                                                        Gtype(node, children, ($) => {
                                                                            optional = $
                                                                        })
                                                                    }
                                                                    if (children.length === 0) {} else {
                                                                        nextChild = children[children.length - 1]
                                                                        switch (nextChild.kindName) {
                                                                            case "FunctionType":
                                                                                setOptional()
                                                                                break
                                                                        }
                                                                    }
                                                                    pr.cc(optional, ($) => {
                                                                        const _type = $
                                                                        sequenceEnd({
                                                                            "name": _name,
                                                                            "type": _type,
                                                                        })
                                                                    })
                                                                })
                                                                if (children.length > 0) {
                                                                    reportUnexpectedChild({
                                                                        path: "GfunctionType$_parameters$_type_type_typeLiteral$_index$_key$",
                                                                        child: children[children.length - 1],
                                                                        expected: null,
                                                                    })
                                                                    return
                                                                }
                                                            })(
                                                                currentChild,
                                                                ($) => {
                                                                    const _key = $
                                                                    let optional: tast.TVGfunctionType$_parameters$_type_type_typeLiteral$_index$_type<Annotation> = null
                                                                    const setOptional = () => {
                                                                        Gtype(node, children, ($) => {
                                                                            optional = $
                                                                        })
                                                                    }
                                                                    if (children.length === 0) {} else {
                                                                        nextChild = children[children.length - 1]
                                                                        switch (nextChild.kindName) {
                                                                            case "FunctionType":
                                                                                setOptional()
                                                                                break
                                                                        }
                                                                    }
                                                                    pr.cc(optional, ($) => {
                                                                        const _type = $
                                                                        sequenceEnd({
                                                                            "key": _key,
                                                                            "type": _type,
                                                                        })
                                                                    })
                                                                }
                                                            )
                                                            if (children.length > 0) {
                                                                reportUnexpectedChild({
                                                                    path: "GfunctionType$_parameters$_type_type_typeLiteral$_index$",
                                                                    child: children[children.length - 1],
                                                                    expected: null,
                                                                })
                                                                return
                                                            }
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_GfunctionType$_parameters$_type_type_typeLiteral$(["index", $])
                                                            }
                                                        )
                                                    }
                                                    const choose_property = () => {
                                                        currentChild = children.pop()
                                                        if (currentChild === undefined) {
                                                            reportMissingToken({
                                                                parentAnnotation: node.annotation,
                                                                path: "GfunctionType$_parameters$_type_type_typeLiteral$_property",
                                                                kindNameOptions: [ "PropertySignature"],
                                                            })
                                                            return
                                                        }
                                                        if (currentChild.kindName !== "PropertySignature") {
                                                            reportUnexpectedChild({
                                                                path: "GfunctionType$_parameters$_type_type_typeLiteral$_property",
                                                                child: currentChild,
                                                                expected: ["PropertySignature"],
                                                            })
                                                            return
                                                        }
                                                        ((
                                                            $: uast.Node<Annotation>,
                                                            callback: ($: tast.TNGfunctionType$_parameters$_type_type_typeLiteral$_property$<Annotation>) => void,
                                                        ): void => {
                                                            const node = $
                                                            const children: uast.Node<Annotation>[] = []
                                                            $.children.forEach(($) => { children.push($) })
                                                            children.reverse()
                                                            let currentChild: uast.Node<Annotation> | undefined
                                                            let nextChild: uast.Node<Annotation> | undefined
                                                            const sequenceEnd = ($: tast.TVTGfunctionType$_parameters$_type_type_typeLiteral$_property$<Annotation>) => {
                                                                callback({
                                                                    annotation: node.annotation,
                                                                    content: $,
                                                                })
                                                            }
                                                            currentChild = children.pop()
                                                            if (currentChild === undefined) {
                                                                reportMissingToken({
                                                                    parentAnnotation: node.annotation,
                                                                    path: "GfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly",
                                                                    kindNameOptions: [ "ReadonlyKeyword"],
                                                                })
                                                                return
                                                            }
                                                            if (currentChild.kindName !== "ReadonlyKeyword") {
                                                                reportUnexpectedChild({
                                                                    path: "GfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly",
                                                                    child: currentChild,
                                                                    expected: ["ReadonlyKeyword"],
                                                                })
                                                                return
                                                            }
                                                            ((
                                                                $: uast.Node<Annotation>,
                                                                callback: ($: tast.TNGfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$<Annotation>) => void,
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
                                                                        path: "GfunctionType$_parameters$_type_type_typeLiteral$_property$_readonly$",
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
                                                                        reportMissingToken({
                                                                            parentAnnotation: node.annotation,
                                                                            path: "GfunctionType$_parameters$_type_type_typeLiteral$_property$_name",
                                                                            kindNameOptions: [ "StringLiteral"],
                                                                        })
                                                                        return
                                                                    }
                                                                    if (currentChild.kindName !== "StringLiteral") {
                                                                        reportUnexpectedChild({
                                                                            path: "GfunctionType$_parameters$_type_type_typeLiteral$_property$_name",
                                                                            child: currentChild,
                                                                            expected: ["StringLiteral"],
                                                                        })
                                                                        return
                                                                    }
                                                                    ((
                                                                        $: uast.Node<Annotation>,
                                                                        callback: ($: tast.TNGfunctionType$_parameters$_type_type_typeLiteral$_property$_name$<Annotation>) => void,
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
                                                                                path: "GfunctionType$_parameters$_type_type_typeLiteral$_property$_name$",
                                                                                child: children[children.length - 1],
                                                                                expected: null,
                                                                            })
                                                                            return
                                                                        }
                                                                    })(
                                                                        currentChild,
                                                                        ($) => {
                                                                            const _name = $
                                                                            let optional: tast.TVGfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken<Annotation> = null
                                                                            const setOptional = () => {
                                                                                currentChild = children.pop()
                                                                                if (currentChild === undefined) {
                                                                                    reportMissingToken({
                                                                                        parentAnnotation: node.annotation,
                                                                                        path: "GfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken",
                                                                                        kindNameOptions: [ "QuestionToken"],
                                                                                    })
                                                                                    return
                                                                                }
                                                                                if (currentChild.kindName !== "QuestionToken") {
                                                                                    reportUnexpectedChild({
                                                                                        path: "GfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken",
                                                                                        child: currentChild,
                                                                                        expected: ["QuestionToken"],
                                                                                    })
                                                                                    return
                                                                                }
                                                                                ((
                                                                                    $: uast.Node<Annotation>,
                                                                                    callback: ($: tast.TNGfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken$<Annotation>) => void,
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
                                                                                            path: "GfunctionType$_parameters$_type_type_typeLiteral$_property$_questionToken$",
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
                                                                                let optional: tast.TVGfunctionType$_parameters$_type_type_typeLiteral$_property$_type<Annotation> = null
                                                                                const setOptional = () => {
                                                                                    Gtype(node, children, ($) => {
                                                                                        optional = $
                                                                                    })
                                                                                }
                                                                                if (children.length === 0) {} else {
                                                                                    nextChild = children[children.length - 1]
                                                                                    switch (nextChild.kindName) {
                                                                                        case "FunctionType":
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
                                                                reportUnexpectedChild({
                                                                    path: "GfunctionType$_parameters$_type_type_typeLiteral$_property$",
                                                                    child: children[children.length - 1],
                                                                    expected: null,
                                                                })
                                                                return
                                                            }
                                                        })(
                                                            currentChild,
                                                            ($) => {
                                                                choiceEnd_GfunctionType$_parameters$_type_type_typeLiteral$(["property", $])
                                                            }
                                                        )
                                                    }
                                                    switch (nextChild.kindName) {
                                                        case "IndexSignature": {
                                                            choose_index()
                                                            break
                                                        }
                                                        case "PropertySignature": {
                                                            choose_property()
                                                            break
                                                        }
                                                        default: {
                                                            reportUnexpectedChild({
                                                                path: "GfunctionType$_parameters$_type_type_typeLiteral$",
                                                                child: nextChild,
                                                                expected: ["IndexSignature", "PropertySignature"],
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
                                                        case "IndexSignature":
                                                            processElement()
                                                            break
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
                                                reportUnexpectedChild({
                                                    path: "GfunctionType$_parameters$_type_type_typeLiteral$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                })
                                                return
                                            }
                                        })(
                                            currentChild,
                                            ($) => {
                                                choiceEnd_GfunctionType$_parameters$_type_type(["typeLiteral", $])
                                            }
                                        )
                                    }
                                    const choose_typeReference = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "GfunctionType$_parameters$_type_type_typeReference",
                                                kindNameOptions: [ "TypeReference"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "TypeReference") {
                                            reportUnexpectedChild({
                                                path: "GfunctionType$_parameters$_type_type_typeReference",
                                                child: currentChild,
                                                expected: ["TypeReference"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.TNGfunctionType$_parameters$_type_type_typeReference$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.Node<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.Node<Annotation> | undefined
                                            let nextChild: uast.Node<Annotation> | undefined
                                            const sequenceEnd = ($: tast.TVTGfunctionType$_parameters$_type_type_typeReference$<Annotation>) => {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                })
                                            }
                                            const choiceEnd_GfunctionType$_parameters$_type_type_typeReference$_referencedType = ($: tast.TVTGfunctionType$_parameters$_type_type_typeReference$_referencedType<Annotation>) => {
                                                const _referencedType = $
                                                const elements: tast.TVGfunctionType$_parameters$_type_type_typeReference$_parameters<Annotation> = []
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
                                                            case "FunctionType":
                                                                processElement()
                                                                break
                                                            default: break arrayLoop
                                                        }
                                                    }
                                                }
                                                pr.cc(elements, ($) => {
                                                    const _parameters = $
                                                    sequenceEnd({
                                                        "referencedType": _referencedType,
                                                        "parameters": _parameters,
                                                    })
                                                })
                                            }
                                            if (children.length === 0) {
                                                reportMissingToken({
                                                    parentAnnotation: node.annotation,
                                                    path: "GfunctionType$_parameters$_type_type_typeReference$_referencedType",
                                                    kindNameOptions: ["Identifier", "QualifiedName"],
                                                })
                                                return
                                            } else {
                                                nextChild = children[children.length - 1]
                                                const choose_identifier = () => {
                                                    Gidentifier(node, children, ($) => {
                                                        choiceEnd_GfunctionType$_parameters$_type_type_typeReference$_referencedType(["identifier", $])
                                                    })
                                                }
                                                const choose_qualifiedName = () => {
                                                    currentChild = children.pop()
                                                    if (currentChild === undefined) {
                                                        reportMissingToken({
                                                            parentAnnotation: node.annotation,
                                                            path: "GfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName",
                                                            kindNameOptions: [ "QualifiedName"],
                                                        })
                                                        return
                                                    }
                                                    if (currentChild.kindName !== "QualifiedName") {
                                                        reportUnexpectedChild({
                                                            path: "GfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName",
                                                            child: currentChild,
                                                            expected: ["QualifiedName"],
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.Node<Annotation>,
                                                        callback: ($: tast.TNGfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children: uast.Node<Annotation>[] = []
                                                        $.children.forEach(($) => { children.push($) })
                                                        children.reverse()
                                                        let currentChild: uast.Node<Annotation> | undefined
                                                        let nextChild: uast.Node<Annotation> | undefined
                                                        const sequenceEnd = ($: tast.TVTGfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$<Annotation>) => {
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
                                                            reportUnexpectedChild({
                                                                path: "GfunctionType$_parameters$_type_type_typeReference$_referencedType_qualifiedName$",
                                                                child: children[children.length - 1],
                                                                expected: null,
                                                            })
                                                            return
                                                        }
                                                    })(
                                                        currentChild,
                                                        ($) => {
                                                            choiceEnd_GfunctionType$_parameters$_type_type_typeReference$_referencedType(["qualifiedName", $])
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
                                                        reportUnexpectedChild({
                                                            path: "GfunctionType$_parameters$_type_type_typeReference$_referencedType",
                                                            child: nextChild,
                                                            expected: ["Identifier", "QualifiedName"],
                                                        })
                                                    }
                                                }
                                            }
                                            if (children.length > 0) {
                                                reportUnexpectedChild({
                                                    path: "GfunctionType$_parameters$_type_type_typeReference$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                })
                                                return
                                            }
                                        })(
                                            currentChild,
                                            ($) => {
                                                choiceEnd_GfunctionType$_parameters$_type_type(["typeReference", $])
                                            }
                                        )
                                    }
                                    const choose_union = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "GfunctionType$_parameters$_type_type_union",
                                                kindNameOptions: [ "UnionType"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "UnionType") {
                                            reportUnexpectedChild({
                                                path: "GfunctionType$_parameters$_type_type_union",
                                                child: currentChild,
                                                expected: ["UnionType"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.TNGfunctionType$_parameters$_type_type_union$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.Node<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.Node<Annotation> | undefined
                                            let nextChild: uast.Node<Annotation> | undefined
                                            const elements: tast.TVGfunctionType$_parameters$_type_type_union$<Annotation> = []
                                            const processElement = () => {
                                                currentChild = children.pop()
                                                if (currentChild === undefined) {
                                                    reportMissingToken({
                                                        parentAnnotation: node.annotation,
                                                        path: "GfunctionType$_parameters$_type_type_union$",
                                                        kindNameOptions: [ "TupleType"],
                                                    })
                                                    return
                                                }
                                                if (currentChild.kindName !== "TupleType") {
                                                    reportUnexpectedChild({
                                                        path: "GfunctionType$_parameters$_type_type_union$",
                                                        child: currentChild,
                                                        expected: ["TupleType"],
                                                    })
                                                    return
                                                }
                                                ((
                                                    $: uast.Node<Annotation>,
                                                    callback: ($: tast.TNGfunctionType$_parameters$_type_type_union$$<Annotation>) => void,
                                                ): void => {
                                                    const node = $
                                                    const children: uast.Node<Annotation>[] = []
                                                    $.children.forEach(($) => { children.push($) })
                                                    children.reverse()
                                                    let currentChild: uast.Node<Annotation> | undefined
                                                    let nextChild: uast.Node<Annotation> | undefined
                                                    const sequenceEnd = ($: tast.TVTGfunctionType$_parameters$_type_type_union$$<Annotation>) => {
                                                        callback({
                                                            annotation: node.annotation,
                                                            content: $,
                                                        })
                                                    }
                                                    currentChild = children.pop()
                                                    if (currentChild === undefined) {
                                                        reportMissingToken({
                                                            parentAnnotation: node.annotation,
                                                            path: "GfunctionType$_parameters$_type_type_union$$_state",
                                                            kindNameOptions: [ "LiteralType"],
                                                        })
                                                        return
                                                    }
                                                    if (currentChild.kindName !== "LiteralType") {
                                                        reportUnexpectedChild({
                                                            path: "GfunctionType$_parameters$_type_type_union$$_state",
                                                            child: currentChild,
                                                            expected: ["LiteralType"],
                                                        })
                                                        return
                                                    }
                                                    ((
                                                        $: uast.Node<Annotation>,
                                                        callback: ($: tast.TNGfunctionType$_parameters$_type_type_union$$_state$<Annotation>) => void,
                                                    ): void => {
                                                        const node = $
                                                        const children: uast.Node<Annotation>[] = []
                                                        $.children.forEach(($) => { children.push($) })
                                                        children.reverse()
                                                        let currentChild: uast.Node<Annotation> | undefined
                                                        let nextChild: uast.Node<Annotation> | undefined
                                                        const choiceEnd_GfunctionType$_parameters$_type_type_union$$_state$ = ($: tast.TVTGfunctionType$_parameters$_type_type_union$$_state$<Annotation>) => {
                                                            callback({
                                                                annotation: node.annotation,
                                                                content: $,
                                                            })
                                                        }
                                                        if (children.length === 0) {
                                                            reportMissingToken({
                                                                parentAnnotation: node.annotation,
                                                                path: "GfunctionType$_parameters$_type_type_union$$_state$",
                                                                kindNameOptions: ["StringLiteral"],
                                                            })
                                                            return
                                                        } else {
                                                            nextChild = children[children.length - 1]
                                                            const choose_string = () => {
                                                                currentChild = children.pop()
                                                                if (currentChild === undefined) {
                                                                    reportMissingToken({
                                                                        parentAnnotation: node.annotation,
                                                                        path: "GfunctionType$_parameters$_type_type_union$$_state$_string",
                                                                        kindNameOptions: [ "StringLiteral"],
                                                                    })
                                                                    return
                                                                }
                                                                if (currentChild.kindName !== "StringLiteral") {
                                                                    reportUnexpectedChild({
                                                                        path: "GfunctionType$_parameters$_type_type_union$$_state$_string",
                                                                        child: currentChild,
                                                                        expected: ["StringLiteral"],
                                                                    })
                                                                    return
                                                                }
                                                                ((
                                                                    $: uast.Node<Annotation>,
                                                                    callback: ($: tast.TNGfunctionType$_parameters$_type_type_union$$_state$_string$<Annotation>) => void,
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
                                                                            path: "GfunctionType$_parameters$_type_type_union$$_state$_string$",
                                                                            child: children[children.length - 1],
                                                                            expected: null,
                                                                        })
                                                                        return
                                                                    }
                                                                })(
                                                                    currentChild,
                                                                    ($) => {
                                                                        choiceEnd_GfunctionType$_parameters$_type_type_union$$_state$(["string", $])
                                                                    }
                                                                )
                                                            }
                                                            switch (nextChild.kindName) {
                                                                case "StringLiteral": {
                                                                    choose_string()
                                                                    break
                                                                }
                                                                default: {
                                                                    reportUnexpectedChild({
                                                                        path: "GfunctionType$_parameters$_type_type_union$$_state$",
                                                                        child: nextChild,
                                                                        expected: ["StringLiteral"],
                                                                    })
                                                                }
                                                            }
                                                        }
                                                        if (children.length > 0) {
                                                            reportUnexpectedChild({
                                                                path: "GfunctionType$_parameters$_type_type_union$$_state$",
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
                                                        reportUnexpectedChild({
                                                            path: "GfunctionType$_parameters$_type_type_union$$",
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
                                                reportUnexpectedChild({
                                                    path: "GfunctionType$_parameters$_type_type_union$",
                                                    child: children[children.length - 1],
                                                    expected: null,
                                                })
                                                return
                                            }
                                        })(
                                            currentChild,
                                            ($) => {
                                                choiceEnd_GfunctionType$_parameters$_type_type(["union", $])
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
                                            reportUnexpectedChild({
                                                path: "GfunctionType$_parameters$_type_type",
                                                child: nextChild,
                                                expected: ["ArrayType", "BooleanKeyword", "StringKeyword", "NumberKeyword", "TypeLiteral", "TypeReference", "UnionType"],
                                            })
                                        }
                                    }
                                }
                            }
                            const choose_function = () => {
                                GfunctionType(node, children, ($) => {
                                    choiceEnd_GfunctionType$_parameters$_type(["function", $])
                                })
                            }
                            switch (nextChild.kindName) {
                                case "ArrayType": {
                                    choose_type()
                                    break
                                }
                                case "BooleanKeyword": {
                                    choose_type()
                                    break
                                }
                                case "StringKeyword": {
                                    choose_type()
                                    break
                                }
                                case "NumberKeyword": {
                                    choose_type()
                                    break
                                }
                                case "TypeLiteral": {
                                    choose_type()
                                    break
                                }
                                case "TypeReference": {
                                    choose_type()
                                    break
                                }
                                case "UnionType": {
                                    choose_type()
                                    break
                                }
                                case "FunctionType": {
                                    choose_function()
                                    break
                                }
                                default: {
                                    reportUnexpectedChild({
                                        path: "GfunctionType$_parameters$_type",
                                        child: nextChild,
                                        expected: ["ArrayType", "BooleanKeyword", "StringKeyword", "NumberKeyword", "TypeLiteral", "TypeReference", "UnionType", "FunctionType"],
                                    })
                                }
                            }
                        }
                    })
                    if (children.length > 0) {
                        reportUnexpectedChild({
                            path: "GfunctionType$_parameters$",
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
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "GfunctionType$_void",
                        kindNameOptions: [ "VoidKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "VoidKeyword") {
                    reportUnexpectedChild({
                        path: "GfunctionType$_void",
                        child: currentChild,
                        expected: ["VoidKeyword"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.TNGfunctionType$_void$<Annotation>) => void,
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
                            path: "GfunctionType$_void$",
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
                            "parameters": _parameters,
                            "void": _void,
                        })
                    }
                )
            })
            if (children.length > 0) {
                reportUnexpectedChild({
                    path: "GfunctionType$",
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
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.TGidentifier<Annotation>) => void,
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
            callback: ($: tast.TNGidentifier$<Annotation>) => void,
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
    function Gtype(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.TGtype<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Gtype = ($: tast.TVTGtype<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gtype",
                kindNameOptions: ["FunctionType"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_function = () => {
                GfunctionType(node, children, ($) => {
                    choiceEnd_Gtype(["function", $])
                })
            }
            switch (nextChild.kindName) {
                case "FunctionType": {
                    choose_function()
                    break
                }
                default: {
                    reportUnexpectedChild({
                        path: "Gtype",
                        child: nextChild,
                        expected: ["FunctionType"],
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
            callback: ($: tast.TNroot<Annotation>) => void,
        ): void => {
            const node = $
            const children: uast.Node<Annotation>[] = []
            $.children.forEach(($) => { children.push($) })
            children.reverse()
            let currentChild: uast.Node<Annotation> | undefined
            let nextChild: uast.Node<Annotation> | undefined
            const sequenceEnd = ($: tast.TVTroot<Annotation>) => {
                callback({
                    annotation: node.annotation,
                    content: $,
                })
            }
            const elements: tast.TVroot_imports<Annotation> = []
            const processElement = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "root_imports",
                        kindNameOptions: [ "ImportDeclaration"],
                    })
                    return
                }
                if (currentChild.kindName !== "ImportDeclaration") {
                    reportUnexpectedChild({
                        path: "root_imports",
                        child: currentChild,
                        expected: ["ImportDeclaration"],
                    })
                    return
                }
                ((
                    $: uast.Node<Annotation>,
                    callback: ($: tast.TNroot_imports$<Annotation>) => void,
                ): void => {
                    const node = $
                    const children: uast.Node<Annotation>[] = []
                    $.children.forEach(($) => { children.push($) })
                    children.reverse()
                    let currentChild: uast.Node<Annotation> | undefined
                    let nextChild: uast.Node<Annotation> | undefined
                    const sequenceEnd = ($: tast.TVTroot_imports$<Annotation>) => {
                        callback({
                            annotation: node.annotation,
                            content: $,
                        })
                    }
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "root_imports$_clause",
                            kindNameOptions: [ "ImportClause"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "ImportClause") {
                        reportUnexpectedChild({
                            path: "root_imports$_clause",
                            child: currentChild,
                            expected: ["ImportClause"],
                        })
                        return
                    }
                    ((
                        $: uast.Node<Annotation>,
                        callback: ($: tast.TNroot_imports$_clause$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.Node<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.Node<Annotation> | undefined
                        let nextChild: uast.Node<Annotation> | undefined
                        const choiceEnd_root_imports$_clause$ = ($: tast.TVTroot_imports$_clause$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        if (children.length === 0) {
                            reportMissingToken({
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "root_imports$_clause$_namespace",
                                        kindNameOptions: [ "NamespaceImport"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "NamespaceImport") {
                                    reportUnexpectedChild({
                                        path: "root_imports$_clause$_namespace",
                                        child: currentChild,
                                        expected: ["NamespaceImport"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.TNroot_imports$_clause$_namespace$<Annotation>) => void,
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
                                    reportMissingToken({
                                        parentAnnotation: node.annotation,
                                        path: "root_imports$_clause$_named",
                                        kindNameOptions: [ "NamedImports"],
                                    })
                                    return
                                }
                                if (currentChild.kindName !== "NamedImports") {
                                    reportUnexpectedChild({
                                        path: "root_imports$_clause$_named",
                                        child: currentChild,
                                        expected: ["NamedImports"],
                                    })
                                    return
                                }
                                ((
                                    $: uast.Node<Annotation>,
                                    callback: ($: tast.TNroot_imports$_clause$_named$<Annotation>) => void,
                                ): void => {
                                    const node = $
                                    const children: uast.Node<Annotation>[] = []
                                    $.children.forEach(($) => { children.push($) })
                                    children.reverse()
                                    let currentChild: uast.Node<Annotation> | undefined
                                    let nextChild: uast.Node<Annotation> | undefined
                                    const elements: tast.TVroot_imports$_clause$_named$<Annotation> = []
                                    const processElement = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "root_imports$_clause$_named$",
                                                kindNameOptions: [ "ImportSpecifier"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "ImportSpecifier") {
                                            reportUnexpectedChild({
                                                path: "root_imports$_clause$_named$",
                                                child: currentChild,
                                                expected: ["ImportSpecifier"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.TNroot_imports$_clause$_named$$<Annotation>) => void,
                                        ): void => {
                                            const node = $
                                            const children: uast.Node<Annotation>[] = []
                                            $.children.forEach(($) => { children.push($) })
                                            children.reverse()
                                            let currentChild: uast.Node<Annotation> | undefined
                                            let nextChild: uast.Node<Annotation> | undefined
                                            const sequenceEnd = ($: tast.TVTroot_imports$_clause$_named$$<Annotation>) => {
                                                callback({
                                                    annotation: node.annotation,
                                                    content: $,
                                                })
                                            }
                                            Gidentifier(node, children, ($) => {
                                                const _name = $
                                                let optional: tast.TVroot_imports$_clause$_named$$_as<Annotation> = null
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
                                        reportUnexpectedChild({
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
                                    reportUnexpectedChild({
                                        path: "root_imports$_clause$",
                                        child: nextChild,
                                        expected: ["NamespaceImport", "NamedImports"],
                                    })
                                }
                            }
                        }
                        if (children.length > 0) {
                            reportUnexpectedChild({
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
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "root_imports$_file",
                                    kindNameOptions: [ "StringLiteral"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "StringLiteral") {
                                reportUnexpectedChild({
                                    path: "root_imports$_file",
                                    child: currentChild,
                                    expected: ["StringLiteral"],
                                })
                                return
                            }
                            ((
                                $: uast.Node<Annotation>,
                                callback: ($: tast.TNroot_imports$_file$<Annotation>) => void,
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
                        reportUnexpectedChild({
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
                const elements: tast.TVroot_typeAliases<Annotation> = []
                const processElement = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "root_typeAliases",
                            kindNameOptions: [ "TypeAliasDeclaration"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "TypeAliasDeclaration") {
                        reportUnexpectedChild({
                            path: "root_typeAliases",
                            child: currentChild,
                            expected: ["TypeAliasDeclaration"],
                        })
                        return
                    }
                    ((
                        $: uast.Node<Annotation>,
                        callback: ($: tast.TNroot_typeAliases$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.Node<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.Node<Annotation> | undefined
                        let nextChild: uast.Node<Annotation> | undefined
                        const sequenceEnd = ($: tast.TVTroot_typeAliases$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "root_typeAliases$_export",
                                kindNameOptions: [ "ExportKeyword"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "ExportKeyword") {
                            reportUnexpectedChild({
                                path: "root_typeAliases$_export",
                                child: currentChild,
                                expected: ["ExportKeyword"],
                            })
                            return
                        }
                        ((
                            $: uast.Node<Annotation>,
                            callback: ($: tast.TNroot_typeAliases$_export$<Annotation>) => void,
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
                                    path: "root_typeAliases$_export$",
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
                                    const elements: tast.TVroot_typeAliases$_typeParameters<Annotation> = []
                                    const processElement = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "root_typeAliases$_typeParameters",
                                                kindNameOptions: [ "TypeParameter"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "TypeParameter") {
                                            reportUnexpectedChild({
                                                path: "root_typeAliases$_typeParameters",
                                                child: currentChild,
                                                expected: ["TypeParameter"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.Node<Annotation>,
                                            callback: ($: tast.TNroot_typeAliases$_typeParameters$<Annotation>) => void,
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
                                                    path: "root_typeAliases$_typeParameters$",
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
                                        Gtype(node, children, ($) => {
                                            const _type = $
                                            sequenceEnd({
                                                "export": _export,
                                                "name": _name,
                                                "typeParameters": _typeParameters,
                                                "type": _type,
                                            })
                                        })
                                    })
                                })
                            }
                        )
                        if (children.length > 0) {
                            reportUnexpectedChild({
                                path: "root_typeAliases$",
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
                            case "TypeAliasDeclaration":
                                processElement()
                                break
                            default: break arrayLoop
                        }
                    }
                }
                pr.cc(elements, ($) => {
                    const _typeAliases = $
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
                        callback: ($: tast.TNroot_endOfFile$<Annotation>) => void,
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
                                "imports": _imports,
                                "typeAliases": _typeAliases,
                                "endOfFile": _endOfFile,
                            })
                        }
                    )
                })
            })
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