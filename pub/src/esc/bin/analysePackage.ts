#!/usr/bin/env node
import * as pr from "pareto-runtime"
import * as pf from "pareto-filesystem"
import * as pth from "path"
import { _paretoProject } from "../../data/paretoProject"
import { analyseFile } from "../implementations/analyseFile"


const [, , directoryPath] = process.argv

if (directoryPath === undefined) {
    throw new Error("missing directory path")
}
console.log(
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
                                directoryPath,
                                $.id,
                                _paretoProject,
                            )
                        }
                    },
                    onEnd: () => {

                    },
                },
            )
        },
        onEnd: () => {

        },
        onError: ($) => {
            console.log(pf.printFSError($))
        },
    }
)