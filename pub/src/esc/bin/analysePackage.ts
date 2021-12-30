#!/usr/bin/env node
import * as pr from "pareto-runtime"
import * as pth from "path"
import { logReadDirErrorType } from "../../modules/fileSystem/esc/implementation/logReadDirErrorType"
import { readDirectoryRecursively } from "../../modules/fileSystem/esc/implementation/readDirectoryRecursively"
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
readDirectoryRecursively(
    {
        directoryPath: directoryPath,
        nodesToSkip: [
            "dist",
            "node_modules",
            ".git",
        ]
    },
    {
        callback: ($) => {
            if ($.direntType[0] === "File") {
                analyseFile(
                    directoryPath,
                    pth.relative(directoryPath, $.path),
                    _paretoProject,
                )
            }
        },
        onError: ($) => {
            logReadDirErrorType($.error, (str) => {
                console.error(`${$.path}: ${str}`)
            })
        },
    }
)