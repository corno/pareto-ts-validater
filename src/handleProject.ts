//import * as g from "grammar"
import * as t from "./types"
import * as p from "./Project"


export function handleProject(project: p.Project) {
    project.sourceFiles.forEach(($) => {
        //console.log($.getFilePath())]
        if ($.node.kindName !== "SourceFile") {
            throw new Error("HMMMM")
        }
        descend(
            $.node,
            "    ",
            "SourceFile",
            $.path,
        )
    })



    // const usages: { [key: string]: number } = {}

    // Object.keys(index).forEach((key) => {
    //     let counter = 0
    //     Object.keys(index).forEach((candidateKey) => {
    //         const candidate = index[candidateKey]
    //         candidate.forEach((refKey) => {
    //             if (refKey === key) {
    //                 counter += 1
    //             }
    //         })

    //     })
    //     usages[key] = counter
    // })

    // const newIndex: g.Grammar = {
    //     tokenRules: {}
    // }

    // function doToken(
    //     $: string
    // ): g.Y {
    //     if (usages[$] === 1) {
    //         const ref = index[$]
    //         return ["local", [$, ["bag", ref.map(($) => {
    //             return doToken($)
    //         })]]]
    //     } else {
    //         return ["global", $]
    //     }
    // }

    // Object.keys(index).forEach((key) => {
    //     const entry = index[key]
    //     if (usages[key] > 1) {
    //         newIndex.tokenRules[key] = ["bag", entry.map(($) => {
    //             return doToken($)
    //         })]
    //     }
    // })

    // console.log(JSON.stringify(newIndex, undefined, "\t"))
}


export function descend($: p.Node, indentation: string, type: string, filePath: string) {
    const children = t.index[type]
    if (children === undefined) {
        console.log(`MISSING TYPE: ${type}`)
    } else {
        $.children.forEach(($) => {
            if (t.index[type].indexOf($.kindName) === -1) {
                console.log(`MISSINGXX: ${type}>${$.kindName} @ ${filePath}:[${$.startLineNumber},${$.startLinePos}]`)
            }
            descend($, indentation + "    ", $.kindName, filePath)
        })
    }
}
