#!/usr/bin/env node

import * as pr from "pareto-runtime"

import * as path from "path"
import * as tsmorph from "ts-morph"
import { parse } from "../../../generatedASTs/esc/implementation/parser.generated"
import { Node } from "../../../generatedASTs/esc/interface/uast.generated"
import { typescriptFileStructure } from "../../data/paretoProject"
import { analyseFile } from "../implementations/analyseFile"
import { analysePath, parseFilePath } from "../implementations/analysePath"
// import { logReadDirErrorType } from "../../../fileSystem/esc/implementations/logReadDirErrorType"
// import { readDirectoryRecursively } from "../../../fileSystem/esc/implementations/readDirectoryRecursively"

const [, , tsconfigPath] = process.argv

if (tsconfigPath === undefined) {
    throw new Error("missing tsconfig path")
}

const project = new tsmorph.Project({})
project.addSourceFilesFromTsConfig(tsconfigPath)

console.log(tsconfigPath)
project.getSourceFiles().forEach(($) => {
    const fullFilePath = $.getFilePath()
    const filePath = path.relative(path.dirname(tsconfigPath), $.getFilePath())
    const parsedPath = parseFilePath(filePath)
    const res = analysePath(
        typescriptFileStructure,
        parsedPath,
    )
    const pathPatterns: { [key: string]: () => void } = {
        "/src/*/esc/**/*.ts": () => {

        },
        "/src/*/data/**/*.ts": () => {
            function wrap(
                $: tsmorph.Node
            ): Node<tsmorph.Node> {
                return {
                    kindName: $.getKindName(),
                    value: $.getText(),
                    annotation: $,
                    children: {
                        forEach: (callback) => {
                            $.forEachChild(($) => {
                                callback(wrap($))
                            })
                        },
                    }
                }
            }
            function getLineInfo(
                $: tsmorph.Node,
            ) {
                const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
                return `[${lp.line}, ${lp.column}]`
            }
            
            parse(
                wrap($),
                //callback
                ($) => {
                    //console.error("X1")
                },
                //reportUnexpectedRoot
                ($) => {
                    console.error("X2")
                },
                //reportUnexpectedChild
                ($) => {
                    console.error(`unexpected child: ${$.path} ${$.child.kindName} @ ${fullFilePath}${getLineInfo($.child.annotation)}`)
                },
                //reportMissingToken
                ($) => {
                    console.error("X4")
                }
            )
        },
    }
    if (pathPatterns[res.pathPattern] === undefined) {
        console.error(`unknown path pattern: ${res.pathPattern}`)
    } else {
        pathPatterns[res.pathPattern]()
    }
    analyseFile(
        path.dirname(tsconfigPath),
        filePath,
        typescriptFileStructure,
    )
})
