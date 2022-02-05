#!/usr/bin/env node

import * as pr from "pareto-runtime"
import * as pf from "pareto-filesystem"
import * as gta from "generate-typesafe-ast"
import { _dataGrammar } from "../../data/dataGrammar"
import { _interfaceGrammar } from "../../data/interfaceGrammar"
import { _typeGrammar } from "../../data/typeGrammar"
import * as fp from "fountain-pen"

pr.runProgram(
    ($) => {
        const targetDirPath = $.argument

        if (targetDirPath === undefined) {
            pr.logError("missing target directory path")
            pr.processExit(1)
        }

        pf.wrapDirectory(
            {
                rootDirectory: targetDirPath,
            },
            {
                callback: ($i) => {
                    const dir = $i

                    fp.createContext(
                        pr.trimRight,
                    ).configure(
                        {
                            newline: "\r\n",
                            indentation: "    ",
                            trimLines: true,
                        },
                        ($i) => {
                            const cc = $i
                            function g(
                                grammar: gta.TGrammar,
                                dirName: string,
                            ) {
                                gta.generateCode(
                                    {
                                        grammar: grammar,
                                    },
                                    {
                                        createWriteStream: ($, $i) => {
                                            const ws = $i
                                            dir.createWriteStream(
                                                {
                                                    path: pr.join([dirName, $.path]),
                                                    createMissingDirectories: true,
                                                },
                                                {
                                                    consumer: ($i) => {
                                                        cc.processBlock(
                                                            {
                                                                onBlock: ($) => {
                                                                    ws($)
                                                                },
                                                                consumer: $i,
                                                            }
                                                        )
                                                    }
                                                }
                                            )
                                        },
                                        onError: ($) => {
                                            console.error($)
                                        }
                                    }
                                )
                            }
                            g(_dataGrammar, "dataGrammar")
                            g(_interfaceGrammar, "interfaceGrammar")
                            g(_typeGrammar, "typeGrammar")

                        }
                    )
                },
                onError: ($) => {
                    pr.logError(pf.printFSError($))
                },
                onEnd: () => {
                    //
                },
            }
        )

    }
)
