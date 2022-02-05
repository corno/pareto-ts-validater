#!/usr/bin/env node
import * as pr from "pareto-runtime"
import * as pf from "pareto-filesystem"
import { _paretoProject } from "../../data/paretoProject"
import { analyseFile } from "../implementations/analyseFile"

pr.runProgram(
    (directoryPath) => {
        let foundError = false
        function logError($: string) {
            pr.logError($)
            foundError = true
        }
        if (directoryPath === undefined) {
            pr.logError("missing directory path")
            pr.processExit(1)
        }
        pr.log(
            [
                `date`,
                `project`,
                `path`,
                `pattern`,
                `correct`,
                `directory`,
                `basename`,
                `extension`,
                `lines`,
                `generated`,
            ].join(`,`)
        )
        pf.wrapDirectory(
            {
                rootDirectory: directoryPath,
            },
            {
                callback: ($i) => {
                    $i.readRecursively(
                        {
                            directoriesToExclude: [
                                "dist",
                                "node_modules",
                                ".git",
                            ],
                            idStyle: ["relative from root", {}],
                        },
                        {
                            callbacks: {
                                file: ($) => {
                                    analyseFile(
                                        {
                                            filePath: $.id,
                                            fileSystemStructure: _paretoProject,
                                        },
                                        {
                                            contextDir: $i,
                                            onError: (msg) => {
                                                logError(`${directoryPath}/${$.id}: ${msg}`)
                                            },
                                            log: ($) => {
                                                pr.log(`FIXFORMAT ${$}`)
                                            },
                                        }
                                    )
                                }
                            },
                            onEnd: () => {

                            },
                        },
                    )
                },
                onError: ($) => {
                    console.log(pf.printFSError($))
                },
                onEnd: () => {
                    if (foundError) {
                        pr.processExit(1)
                    }
                },
            }
        )
    }
)
