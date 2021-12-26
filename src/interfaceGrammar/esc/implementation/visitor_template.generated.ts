import * as pr from "pareto-runtime"
import * as api from "../interface/ts_api.generated"

export type FOO<Annotation> = {
    "EndOfFileToken"?: ($: api.TEndOfFileToken<Annotation>) => void
    "SourceFile"?: {
        begin: ($: api.TSourceFile<Annotation>) => void,
        end: ($: api.TSourceFile<Annotation>) => void,
    }
}

export const foo: FOO<string> = {
    "EndOfFileToken": ($) => { console.log("EndOfFileToken") },
    "SourceFile": {
        begin: ($) => { console.log("SourceFile begin") },
        end: ($) => { console.log("SourceFile end") },
    },
}

export function visit<Annotation>(
    $: api.TSourceFile<Annotation>,
    foo: FOO<Annotation>,
): void {
    function _EndOfFileToken(
        $: api.TEndOfFileToken<Annotation>,
    ) {
        if (foo["EndOfFileToken"] !== undefined) { foo["EndOfFileToken"]($) }
    }
    function _SourceFile(
        $: api.TSourceFile<Annotation>,
    ) {
        if (foo["SourceFile"] !== undefined) { foo["SourceFile"].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["endOfFile"], ($) => {
                _EndOfFileToken($)
            })
        })
        if (foo["SourceFile"] !== undefined) { foo["SourceFile"].end($) }
    }
    return _SourceFile($)
}