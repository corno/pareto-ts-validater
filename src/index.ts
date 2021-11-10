import * as tr from "./handleProject"
import { loadProject } from "./loadProject"

const [, , tsconfigPath] = process.argv

if (tsconfigPath === undefined) {
    throw new Error("missing tsconfig path")
}

loadProject(
    tsconfigPath,
    (
        project,
        getLineInfo,
    ) => {
        tr.handleProject(
            project,
            getLineInfo,
        )
    }
)
