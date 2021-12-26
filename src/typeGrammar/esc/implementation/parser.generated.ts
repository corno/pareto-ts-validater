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
    function X_type(
        node: uast.Node<Annotation>,
        children: uast.Node<Annotation>[],
        callback: ($: tast.Gtype<Annotation>) => void,
    ): void {
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_Gtype = ($: tast.XGtype<Annotation>) => {
            callback($)
        }
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "Gtype",
                kindNameOptions: ["ArrayType", "BooleanKeyword", "StringKeyword", "LiteralType", "TupleType", "TypeLiteral", "TypeReference", "UnionType"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_array = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_array",
                        kindNameOptions: [ "ArrayType"],
                    })
                    return
                }
                if (currentChild.kindName !== "ArrayType") {
                    reportUnexpectedChild({
                        path: "Gtype_array",
                        child: currentChild,
                    })
                    return
                }
                ArrayType(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["array", $])
                    }
                )
            }
            const choose_boolean = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_boolean",
                        kindNameOptions: [ "BooleanKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "BooleanKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_boolean",
                        child: currentChild,
                    })
                    return
                }
                BooleanKeyword(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["boolean", $])
                    }
                )
            }
            const choose_string = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_string",
                        kindNameOptions: [ "StringKeyword"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringKeyword") {
                    reportUnexpectedChild({
                        path: "Gtype_string",
                        child: currentChild,
                    })
                    return
                }
                StringKeyword(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["string", $])
                    }
                )
            }
            const choose_literal = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_literal",
                        kindNameOptions: [ "LiteralType"],
                    })
                    return
                }
                if (currentChild.kindName !== "LiteralType") {
                    reportUnexpectedChild({
                        path: "Gtype_literal",
                        child: currentChild,
                    })
                    return
                }
                LiteralType(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["literal", $])
                    }
                )
            }
            const choose_tuple = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_tuple",
                        kindNameOptions: [ "TupleType"],
                    })
                    return
                }
                if (currentChild.kindName !== "TupleType") {
                    reportUnexpectedChild({
                        path: "Gtype_tuple",
                        child: currentChild,
                    })
                    return
                }
                TupleType(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["tuple", $])
                    }
                )
            }
            const choose_typeLiteral = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_typeLiteral",
                        kindNameOptions: [ "TypeLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeLiteral") {
                    reportUnexpectedChild({
                        path: "Gtype_typeLiteral",
                        child: currentChild,
                    })
                    return
                }
                TypeLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["typeLiteral", $])
                    }
                )
            }
            const choose_typeReference = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_typeReference",
                        kindNameOptions: [ "TypeReference"],
                    })
                    return
                }
                if (currentChild.kindName !== "TypeReference") {
                    reportUnexpectedChild({
                        path: "Gtype_typeReference",
                        child: currentChild,
                    })
                    return
                }
                TypeReference(
                    currentChild,
                    ($) => {
                        choiceEnd_Gtype(["typeReference", $])
                    }
                )
            }
            const choose_union = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "Gtype_union",
                        kindNameOptions: [ "UnionType"],
                    })
                    return
                }
                if (currentChild.kindName !== "UnionType") {
                    reportUnexpectedChild({
                        path: "Gtype_union",
                        child: currentChild,
                    })
                    return
                }
                UnionType(
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
                case "LiteralType": {
                    choose_literal()
                    break
                }
                case "TupleType": {
                    choose_tuple()
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
                        path: "Gtype",
                        child: nextChild,
                    })
                }
            }
        }
    }
    function ArrayType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TArrayType<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        X_type(node, children, ($) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "ArrayType",
                child: children[children.length - 1],
            })
        }
        return
    }
    function BooleanKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TBooleanKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "BooleanKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
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
    function IndexSignature(
        $: uast.Node<Annotation>,
        callback: ($: tast.TIndexSignature<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTIndexSignature<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TIndexSignature_key",
                kindNameOptions: [ "Parameter"],
            })
            return
        }
        if (currentChild.kindName !== "Parameter") {
            reportUnexpectedChild({
                path: "TIndexSignature_key",
                child: currentChild,
            })
            return
        }
        Parameter(
            currentChild,
            ($) => {
                const _key = $
                let optional: tast.STIndexSignature_type<Annotation> = null
                const setOptional = () => {
                    X_type(node, children, ($) => {
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
                        case "LiteralType":
                            setOptional()
                            break
                        case "TupleType":
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
                    sequenceEnd({
                        "key": _key,
                        "type": _type,
                    })
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "IndexSignature",
                child: children[children.length - 1],
            })
        }
        return
    }
    function LiteralType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TLiteralType<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const choiceEnd_TLiteralType = ($: tast.XTLiteralType<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TLiteralType",
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
                        path: "TLiteralType_string",
                        kindNameOptions: [ "StringLiteral"],
                    })
                    return
                }
                if (currentChild.kindName !== "StringLiteral") {
                    reportUnexpectedChild({
                        path: "TLiteralType_string",
                        child: currentChild,
                    })
                    return
                }
                StringLiteral(
                    currentChild,
                    ($) => {
                        choiceEnd_TLiteralType(["string", $])
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
                        path: "TLiteralType",
                        child: nextChild,
                    })
                }
            }
        }
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "LiteralType",
                child: children[children.length - 1],
            })
        }
        return
    }
    function Parameter(
        $: uast.Node<Annotation>,
        callback: ($: tast.TParameter<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTParameter<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TParameter_name",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TParameter_name",
                child: currentChild,
            })
            return
        }
        Identifier(
            currentChild,
            ($) => {
                const _name = $
                let optional: tast.STParameter_type<Annotation> = null
                const setOptional = () => {
                    X_type(node, children, ($) => {
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
                        case "LiteralType":
                            setOptional()
                            break
                        case "TupleType":
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
                    sequenceEnd({
                        "name": _name,
                        "type": _type,
                    })
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "Parameter",
                child: children[children.length - 1],
            })
        }
        return
    }
    function PropertySignature(
        $: uast.Node<Annotation>,
        callback: ($: tast.TPropertySignature<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTPropertySignature<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TPropertySignature_name",
                kindNameOptions: [ "StringLiteral"],
            })
            return
        }
        if (currentChild.kindName !== "StringLiteral") {
            reportUnexpectedChild({
                path: "TPropertySignature_name",
                child: currentChild,
            })
            return
        }
        StringLiteral(
            currentChild,
            ($) => {
                const _name = $
                let optional: tast.STPropertySignature_quesionToken<Annotation> = null
                const setOptional = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TPropertySignature_quesionToken",
                            kindNameOptions: [ "QuestionToken"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "QuestionToken") {
                        reportUnexpectedChild({
                            path: "TPropertySignature_quesionToken",
                            child: currentChild,
                        })
                        return
                    }
                    QuestionToken(
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
                    const _quesionToken = $
                    let optional: tast.STPropertySignature_type<Annotation> = null
                    const setOptional = () => {
                        X_type(node, children, ($) => {
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
                            case "LiteralType":
                                setOptional()
                                break
                            case "TupleType":
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
                        sequenceEnd({
                            "name": _name,
                            "quesionToken": _quesionToken,
                            "type": _type,
                        })
                    })
                })
            }
        )
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "PropertySignature",
                child: children[children.length - 1],
            })
        }
        return
    }
    function QuestionToken(
        $: uast.Node<Annotation>,
        callback: ($: tast.TQuestionToken<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "QuestionToken",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
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
        const elements: tast.STSourceFile_typeAliases<Annotation> = []
        const processElement = () => {
            currentChild = children.pop()
            if (currentChild === undefined) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TSourceFile_typeAliases",
                    kindNameOptions: [ "TypeAliasDeclaration"],
                })
                return
            }
            if (currentChild.kindName !== "TypeAliasDeclaration") {
                reportUnexpectedChild({
                    path: "TSourceFile_typeAliases",
                    child: currentChild,
                })
                return
            }
            TypeAliasDeclaration(
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
                        "typeAliases": _typeAliases,
                        "endOfFile": _endOfFile,
                    })
                }
            )
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "SourceFile",
                child: children[children.length - 1],
            })
        }
        return
    }
    function StringKeyword(
        $: uast.Node<Annotation>,
        callback: ($: tast.TStringKeyword<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "StringKeyword",
                child: children[0],
            })
        }
        callback({
            annotation: $.annotation,
            content: null
        })
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
    function TupleType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTupleType<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STTupleType<Annotation> = []
        const processElement = () => {
            X_type(node, children, ($) => {
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
                    case "LiteralType":
                        processElement()
                        break
                    case "TupleType":
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
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TupleType",
                child: children[children.length - 1],
            })
        }
        return
    }
    function TypeAliasDeclaration(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeAliasDeclaration<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const sequenceEnd = ($: tast.XTTypeAliasDeclaration<Annotation>) => {
            callback({
                annotation: node.annotation,
                content: $,
            })
        }
        currentChild = children.pop()
        if (currentChild === undefined) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TTypeAliasDeclaration_export",
                kindNameOptions: [ "ExportKeyword"],
            })
            return
        }
        if (currentChild.kindName !== "ExportKeyword") {
            reportUnexpectedChild({
                path: "TTypeAliasDeclaration_export",
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
                        path: "TTypeAliasDeclaration_name",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    reportUnexpectedChild({
                        path: "TTypeAliasDeclaration_name",
                        child: currentChild,
                    })
                    return
                }
                Identifier(
                    currentChild,
                    ($) => {
                        const _name = $
                        const elements: tast.STTypeAliasDeclaration_typeParameters<Annotation> = []
                        const processElement = () => {
                            currentChild = children.pop()
                            if (currentChild === undefined) {
                                reportMissingToken({
                                    parentAnnotation: node.annotation,
                                    path: "TTypeAliasDeclaration_typeParameters",
                                    kindNameOptions: [ "TypeParameter"],
                                })
                                return
                            }
                            if (currentChild.kindName !== "TypeParameter") {
                                reportUnexpectedChild({
                                    path: "TTypeAliasDeclaration_typeParameters",
                                    child: currentChild,
                                })
                                return
                            }
                            TypeParameter(
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
                            X_type(node, children, ($) => {
                                const _type = $
                                sequenceEnd({
                                    "export": _export,
                                    "name": _name,
                                    "typeParameters": _typeParameters,
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
                path: "TypeAliasDeclaration",
                child: children[children.length - 1],
            })
        }
        return
    }
    function TypeLiteral(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeLiteral<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STTypeLiteral<Annotation> = []
        const processElement = () => {
            const choiceEnd_TTypeLiteral = ($: tast.XTTypeLiteral<Annotation>) => {
                elements.push($)
            }
            if (children.length === 0) {
                reportMissingToken({
                    parentAnnotation: node.annotation,
                    path: "TTypeLiteral",
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
                            path: "TTypeLiteral_index",
                            kindNameOptions: [ "IndexSignature"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "IndexSignature") {
                        reportUnexpectedChild({
                            path: "TTypeLiteral_index",
                            child: currentChild,
                        })
                        return
                    }
                    IndexSignature(
                        currentChild,
                        ($) => {
                            choiceEnd_TTypeLiteral(["index", $])
                        }
                    )
                }
                const choose_property = () => {
                    currentChild = children.pop()
                    if (currentChild === undefined) {
                        reportMissingToken({
                            parentAnnotation: node.annotation,
                            path: "TTypeLiteral_property",
                            kindNameOptions: [ "PropertySignature"],
                        })
                        return
                    }
                    if (currentChild.kindName !== "PropertySignature") {
                        reportUnexpectedChild({
                            path: "TTypeLiteral_property",
                            child: currentChild,
                        })
                        return
                    }
                    PropertySignature(
                        currentChild,
                        ($) => {
                            choiceEnd_TTypeLiteral(["property", $])
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
                            path: "TTypeLiteral",
                            child: nextChild,
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
                path: "TypeLiteral",
                child: children[children.length - 1],
            })
        }
        return
    }
    function TypeParameter(
        $: uast.Node<Annotation>,
        callback: ($: tast.TTypeParameter<Annotation>) => void,
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
                path: "TTypeParameter",
                kindNameOptions: [ "Identifier"],
            })
            return
        }
        if (currentChild.kindName !== "Identifier") {
            reportUnexpectedChild({
                path: "TTypeParameter",
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
                path: "TypeParameter",
                child: children[children.length - 1],
            })
        }
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
        const choiceEnd_TTypeReference_referencedType = ($: tast.XTTypeReference_referencedType<Annotation>) => {
            const _referencedType = $
            const elements: tast.STTypeReference_parameters<Annotation> = []
            const processElement = () => {
                X_type(node, children, ($) => {
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
                        case "LiteralType":
                            processElement()
                            break
                        case "TupleType":
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
                    "referencedType": _referencedType,
                    "parameters": _parameters,
                })
            })
        }
        if (children.length === 0) {
            reportMissingToken({
                parentAnnotation: node.annotation,
                path: "TTypeReference_referencedType",
                kindNameOptions: ["Identifier"],
            })
            return
        } else {
            nextChild = children[children.length - 1]
            const choose_identifier = () => {
                currentChild = children.pop()
                if (currentChild === undefined) {
                    reportMissingToken({
                        parentAnnotation: node.annotation,
                        path: "TTypeReference_referencedType_identifier",
                        kindNameOptions: [ "Identifier"],
                    })
                    return
                }
                if (currentChild.kindName !== "Identifier") {
                    reportUnexpectedChild({
                        path: "TTypeReference_referencedType_identifier",
                        child: currentChild,
                    })
                    return
                }
                Identifier(
                    currentChild,
                    ($) => {
                        choiceEnd_TTypeReference_referencedType(["identifier", $])
                    }
                )
            }
            switch (nextChild.kindName) {
                case "Identifier": {
                    choose_identifier()
                    break
                }
                default: {
                    reportUnexpectedChild({
                        path: "TTypeReference_referencedType",
                        child: nextChild,
                    })
                }
            }
        }
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "TypeReference",
                child: children[children.length - 1],
            })
        }
        return
    }
    function UnionType(
        $: uast.Node<Annotation>,
        callback: ($: tast.TUnionType<Annotation>) => void,
    ): void {
        const node = $
        const children: uast.Node<Annotation>[] = []
        $.children.forEach(($) => { children.push($) })
        children.reverse()
        let currentChild: uast.Node<Annotation> | undefined
        let nextChild: uast.Node<Annotation> | undefined
        const elements: tast.STUnionType<Annotation> = []
        const processElement = () => {
            X_type(node, children, ($) => {
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
                    case "LiteralType":
                        processElement()
                        break
                    case "TupleType":
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
            callback({
                annotation: node.annotation,
                content: $,
            })
        })
        if (children.length > 0) {
            reportUnexpectedChild({
                path: "UnionType",
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