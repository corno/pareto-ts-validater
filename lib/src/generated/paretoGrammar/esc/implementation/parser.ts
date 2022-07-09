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
                const elements: tast.TVTroot_globals<Annotation>[] = []
                const processElement = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        $x.reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "root_globals",
                            kindNameOptions: [ "TypeAliasDeclaration"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "TypeAliasDeclaration") {
                        $x.reportUnexpectedChild({
                            path: "root_globals",
                            child: currentChild,
                            expected: ["TypeAliasDeclaration"],
                        })
                        return
                    }
                    ((
                        $: uast.TUntypedNode<Annotation>,
                        callback: ($: tast.TNroot_globals$<Annotation>) => void,
                    ): void => {
                        const node = $
                        const children: uast.TUntypedNode<Annotation>[] = []
                        $.children.forEach(($) => { children.push($) })
                        children.reverse()
                        let currentChild: uast.TUntypedNode<Annotation> | undefined
                        let nextChild: uast.TUntypedNode<Annotation> | undefined
                        const sequenceEnd = ($: tast.TVTroot_globals$<Annotation>) => {
                            callback({
                                annotation: node.annotation,
                                content: $,
                            })
                        }
                        currentChild = children.pop()
                        if (currentChild === undefined) {
                            $x.reportMissingToken({
                                parentAnnotation: node.annotation,
                                path: "root_globals$_export",
                                kindNameOptions: [ "ExportKeyword"],
                            })
                            return
                        }
                        if (currentChild.kindName !== "ExportKeyword") {
                            $x.reportUnexpectedChild({
                                path: "root_globals$_export",
                                child: currentChild,
                                expected: ["ExportKeyword"],
                            })
                            return
                        }
                        ((
                            $: uast.TUntypedNode<Annotation>,
                            callback: ($: tast.TNroot_globals$_export$<Annotation>) => void,
                        ): void => {
                            const node = $
                            const children: uast.TUntypedNode<Annotation>[] = []
                            $.children.forEach(($) => { children.push($) })
                            children.reverse()
                            callback($.annotation)
                            if (children.length > 0) {
                                $x.reportUnexpectedChild({
                                    path: "root_globals$_export$",
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
                                    const elements: tast.TVTroot_globals$_typeParameters<Annotation>[] = []
                                    const processElement = () => {
                                        currentChild = children.pop()
                                        if (currentChild === undefined) {
                                            $x.reportMissingToken({
                                                parentAnnotation: node.annotation,
                                                path: "root_globals$_typeParameters",
                                                kindNameOptions: [ "TypeParameter"],
                                            })
                                            return
                                        }
                                        if (currentChild.kindName !== "TypeParameter") {
                                            $x.reportUnexpectedChild({
                                                path: "root_globals$_typeParameters",
                                                child: currentChild,
                                                expected: ["TypeParameter"],
                                            })
                                            return
                                        }
                                        ((
                                            $: uast.TUntypedNode<Annotation>,
                                            callback: ($: tast.TNroot_globals$_typeParameters$<Annotation>) => void,
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
                                                    path: "root_globals$_typeParameters$",
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
                            $x.reportUnexpectedChild({
                                path: "root_globals$",
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
                    const _globals = $
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
                                "globals": _globals,
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