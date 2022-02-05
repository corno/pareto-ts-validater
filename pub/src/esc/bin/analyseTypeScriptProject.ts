#!/usr/bin/env node

import * as pr from "pareto-runtime"
import * as pf from "pareto-filesystem"

import * as path from "path"
import * as tsmorph from "ts-morph"
import * as dataParser from "../../generated/dataGrammar"
import * as interfaceParser from "../../generated/interfaceGrammar"
import * as typeParser from "../../generated/typeGrammar"
import { TUntypedNode } from "../../generated/dataGrammar"
import { _typescriptFileStructure } from "../../data/paretoProject"
import { analyseFile } from "../implementations/analyseFile"
import * as ap from "analyse-path"

pr.runProgram(
    ($) => {

        let foundError = false
        function logError(message: string) {
            foundError = true
            pr.logError(message)
        }
        const tsconfigPath = $.argument
        if (tsconfigPath === undefined) {
            logError("missing tsconfig path")
            pr.processExit(1)
        } else {
            pf.wrapDirectory(
                {
                    rootDirectory: path.dirname(tsconfigPath),
                },
                {
                    callback: ($i) => {

                        const project = new tsmorph.Project({})
                        project.addSourceFilesFromTsConfig(tsconfigPath)

                        pr.log(tsconfigPath)
                        project.getSourceFiles().forEach(($) => {
                            const fullFilePath = $.getFilePath()
                            const filePath = path.relative(path.dirname(tsconfigPath), $.getFilePath())
                            const parsedPath = ap.parseFilePath(filePath)
                            const res = ap.analysePath(
                                _typescriptFileStructure,
                                parsedPath,
                            )
                            function onError(
                                $: tsmorph.Node,
                                message: string,
                            ) {
                                const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
                                logError(`${message} @ ${fullFilePath}[${lp.line}, ${lp.column}]`)
                            }

                            function handle<RT>(
                                parse: (
                                    $: TUntypedNode<tsmorph.Node>,
                                    callback: ($: RT) => void,
                                    reportUnexpectedRoot: ($: { root: TUntypedNode<tsmorph.Node>, }) => void,
                                    reportUnexpectedChild: ($: { path: string, child: TUntypedNode<tsmorph.Node>, expected: null | string[] }) => void,
                                    reportMissingToken: ($: { parentAnnotation: tsmorph.Node, path: string, kindNameOptions: string[], }) => void,
                                ) => void,
                                callback: ($: RT) => void
                            ) {
                                function wrap(
                                    $: tsmorph.Node
                                ): TUntypedNode<tsmorph.Node> {
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
                                        logError("X2")
                                    },
                                    //reportUnexpectedChild
                                    ($) => {
                                        onError($.child.annotation, `unexpected child: ${$.path} ${$.child.kindName}, expected ${$.expected === null ? "nothing" : $.expected.map(($) => `'${$}'`).join(" or ")}`)
                                    },
                                    //reportMissingToken
                                    ($) => {
                                        logError("X4")
                                    }
                                )
                            }
                            function doType() {
                                handle<typeParser.TNroot<tsmorph.Node>>(
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
                                        $.content.typeAliases.forEach(($) => {
                                            if (!$.content.name.content.startsWith("T")) {
                                                onError($.content.name.annotation, `must start wih 'T'`)

                                            }
                                        })
                                    },
                                )
                            }
                            function doEsc() {
                                $.forEachChild(($) => {
                                    const allowed: { [key: string]: () => void } = {
                                        "EndOfFileToken": () => { },
                                        "ExportDeclaration": () => { },
                                        "ExpressionStatement": () => {
                                            if ($.getChildCount() !== 1) {
                                                onError($, `UNEXPECTED EXPRESSION STATEMENT FORMAT IN ESC: ${$.getKindName()}`)
                                            } else {
                                                pr.cc($.getChildAtIndex(0), ($) => {

                                                    if ($.getKindName() !== "CallExpression") {
                                                        onError($, `UNEXECTED EXPRESSION STATEMENT IN ESC: ${$.getKindName()}`)

                                                    }
                                                })
                                            }
                                        },
                                        "FunctionDeclaration": () => { },
                                        "ImportDeclaration": () => { },
                                    }
                                    const entry = allowed[$.getKindName()]
                                    if (entry === undefined) {
                                        onError($, `UNEXPECTED GLOBAL IN ESC: ${$.getKindName()}`)
                                    } else {
                                        entry()
                                    }
                                })
                            }
                            function doBin() {
                                $.forEachChild(($) => {
                                    const allowed: { [key: string]: () => void } = {
                                        "EndOfFileToken": () => { },
                                        "ExportDeclaration": () => { },
                                        "ExpressionStatement": () => {
                                            if ($.getChildCount() !== 1) {
                                                onError($, `UNEXPECTED EXPRESSION STATEMENT FORMAT IN BIN: ${$.getKindName()}`)
                                            } else {
                                                pr.cc($.getChildAtIndex(0), ($) => {

                                                    if ($.getKindName() !== "CallExpression") {
                                                        onError($, `UNEXECTED EXPRESSION STATEMENT IN BIN: ${$.getKindName()}`)

                                                    }
                                                })
                                            }
                                        },
                                        "FunctionDeclaration": () => { },
                                        "ImportDeclaration": () => { },
                                    }
                                    const entry = allowed[$.getKindName()]
                                    if (entry === undefined) {
                                        onError($, `UNEXPECTED GLOBAL IN ESC: ${$.getKindName()}`)
                                    } else {
                                        entry()
                                    }
                                })
                            }
                            function doData() {
                                handle<dataParser.TNroot<tsmorph.Node>>(
                                    dataParser.parse,
                                    ($) => {
                                        $.content.variables.forEach(($) => {
                                            $.content.variableDeclarationList.content.forEach(($) => {
                                                if (!$.content.name.content.startsWith("_")) {
                                                    onError($.content.name.annotation, `must start wih '_'`)

                                                }
                                            })
                                        })
                                        //handle result
                                    },
                                )
                            }
                            function doInterface() {
                                handle<interfaceParser.TNroot<tsmorph.Node>>(
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
                                        $.content.typeAliases.forEach(($) => {
                                            pr.log("!!!!!!!!!!!")
                                            if (!$.content.name.content.startsWith("I")) {
                                                onError($.content.name.annotation, `must start wih 'I'`)

                                            }
                                        })
                                    },
                                )
                            }
                            function doRootIndex() {

                            }
                            const pathPatterns: { [key: string]: () => void } = {
                                "/src/data/*.ts": doData,
                                "/src/esc/**/*.ts": doEsc,
                                "/src/bin/*.ts": doBin,
                                "/src/index.ts": doRootIndex,
                                "/src/interface/interfaces/*.ts": doInterface,
                                "/src/interface/types/*.ts": doType,
                                "/src/modules/*/esc/**/*.ts": doEsc,
                                "/src/modules/*/index.ts": doRootIndex,
                                "/src/modules/*/interface/interfaces/*.ts": doInterface,
                                "/src/modules/*/interface/types/*.ts": doType,
                                "/src/temp/*.ts": doData,


                            }
                            if (pathPatterns[res.pathPattern] === undefined) {
                                logError(`unknown path pattern: ${res.pathPattern} @ ${fullFilePath}`)
                            } else {
                                pathPatterns[res.pathPattern]()
                            }
                            analyseFile(
                                {
                                    filePath: filePath,
                                    fileSystemStructure: _typescriptFileStructure,
                                },
                                {
                                    contextDir: $i,
                                    onError: ($) => {
                                        logError($)
                                    },
                                    log: ($) => {
                                        pr.log($)
                                    },
                                }
                            )
                        })

                    },
                    onError: ($i) => {
                        logError(pf.printFSError($i))
                    },
                    onEnd: () => {
                        if (foundError) {
                            pr.processExit(1)
                        }
                    },
                }
            )

        }
    }
)