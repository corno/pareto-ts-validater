import * as tr from "./handleProject"
import { loadUntypedProject } from "typesafe-typescript-ast"

const [, , tsconfigPath] = process.argv

if (tsconfigPath === undefined) {
    throw new Error("missing tsconfig path")
}

loadUntypedProject(
    tsconfigPath,
    (
        project,
        getLocationInfo,
    ) => {
        tr.handleProject(
            project,
            getLocationInfo,
            (
                filePath,
                $,

            ) => {
                //console.log(`${$.getKindName()} ${filePath}: ${getLocationInfo($)}`)
                console.log(`FIXME!`)
            },
        )
    },
    ($) => {
        return $
    },
    ($) => {
        return "FIXME"
    }
)
