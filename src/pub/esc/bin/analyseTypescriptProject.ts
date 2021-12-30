#!/usr/bin/env node

import * as pr from "pareto-runtime"

import * as path from "path"
import * as tsmorph from "ts-morph"
import * as dataParser from "../../../dataGrammar/esc/implementation/parser.generated"
import * as dataTypes from "../../../dataGrammar/interface/types/ts_api.generated"
import * as interfaceParser from "../../../interfaceGrammar/esc/implementation/parser.generated"
import * as interfaceTypes from "../../../interfaceGrammar/interface/types/ts_api.generated"
import * as typeParser from "../../../typeGrammar/esc/implementation/parser.generated"
import * as typeTypes from "../../../typeGrammar/interface/types/ts_api.generated"
import { Node } from "../../../dataGrammar/interface/types/uast.generated"
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
    function onError(
        $: tsmorph.Node,
        message: string,
    ) {
        const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
        console.error(`${message} @ ${fullFilePath}[${lp.line}, ${lp.column}]`)
    }
    type Node2<Annotation> = {

    }
    function handle<RT>(
        parse: (
            $: Node<tsmorph.Node>,
            callback: ($: RT) => void,
            reportUnexpectedRoot: ($: { root: Node<tsmorph.Node>, }) => void,
            reportUnexpectedChild: ($: { path: string, child: Node<tsmorph.Node>, expected: null | string[] }) => void,
            reportMissingToken: ($: { parentAnnotation: tsmorph.Node, path: string, kindNameOptions: string[], }) => void,
        ) => void,
        callback: ($: RT) => void
    ) {
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

        parse(
            wrap($),
            ($) => {
                callback($)
            },
            //reportUnexpectedRoot
            ($) => {
                console.error("X2")
            },
            //reportUnexpectedChild
            ($) => {
                onError($.child.annotation, `unexpected child: ${$.path} ${$.child.kindName}, expected ${$.expected === null ? "nothing" : $.expected.map(($) => `'${$}'`).join(" or ")}`)
            },
            //reportMissingToken
            ($) => {
                console.error("X4")
            }
        )
    }
    function doType() {
        handle<typeTypes.Nroot<tsmorph.Node>>(
            typeParser.parse,
            ($) => {

                $.content.imports.forEach(($) => {
                    switch ($.content.clause.content[0]) {
                        case "named":
                            pr.cc($.content.clause.content[1], ($) => {
                            })
                            break
                        case "namespace":
                            pr.cc($.content.clause.content[1], ($) => {
                                if ($.content.content !== "pr") {
                                    onError($.content.annotation, `expected 'pr'`)
                                }
                            })
                            break
                        default:
                            pr.au($.content.clause.content[0])
                    }
                })
            },
        )
    }
    function doInterface() {
        handle<interfaceTypes.Nroot<tsmorph.Node>>(
            interfaceParser.parse,
            ($) => {

                $.content.imports.forEach(($) => {
                    switch ($.content.clause.content[0]) {
                        case "named":
                            pr.cc($.content.clause.content[1], ($) => {
                            })
                            break
                        case "namespace":
                            pr.cc($.content.clause.content[1], ($) => {
                                if ($.content.content !== "pr") {
                                    onError($.content.annotation, `expected 'pr'`)
                                }
                            })
                            break
                        default:
                            pr.au($.content.clause.content[0])
                    }
                })
            },
        )
    }
    const pathPatterns: { [key: string]: () => void } = {
        "/src/*/esc/**/*.ts": () => {
            $.forEachChild(($) => {
                const allowed: { [key: string]: () => void } = {
                    "EndOfFileToken": () => { },
                    "ExportDeclaration": () => { },
                    "ExpressionStatement": () => {
                        if ($.getChildCount() !== 1) {
                            //onError($, `UNEXPECTED EXPRESSION STATEMENT FORMAT IN ESC: ${$.getKindName()}`)
                        } else {
                            pr.cc($.getChildAtIndex(0), ($) => {

                                if ($.getKindName() !== "CallExpression") {
                                    //onError($, `UNEXECTED EXPRESSION STATEMENT IN ESC: ${$.getKindName()}`)
    
                                }
                            })
                        }
                    },
                    "FunctionDeclaration": () => { },
                    "ImportDeclaration": () => { },
                }
                const entry = allowed[$.getKindName()]
                if (entry === undefined) {
                    //onError($, `UNEXPECTED GLOBAL IN ESC: ${$.getKindName()}`)
                } else {
                    entry()
                }
            })
        },
        "/src/*/data/*.ts": () => {
            handle<dataTypes.Nroot<tsmorph.Node>>(
                dataParser.parse,
                ($) => {
                    $.content.import.content
                    //handle result
                },
            )
        },
        "/src/*/interfaces/*/types/*.ts": doType,
        "/src/*/interface/types/*.ts": doType,
        "/src/*/interfaces/*/interfaces/*.ts": doInterface,
        "/src/*/interface/interfaces/*.ts": doInterface,
        //"/src/*/interfaces/*/types/**/*.ts": doType,
    }
    if (pathPatterns[res.pathPattern] === undefined) {
        console.error(`unknown path pattern: ${res.pathPattern} @ ${fullFilePath}`)
    } else {
        pathPatterns[res.pathPattern]()
    }
    analyseFile(
        path.dirname(tsconfigPath),
        filePath,
        typescriptFileStructure,
    )
})
