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
                    "endOfFile": _endOfFile,
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