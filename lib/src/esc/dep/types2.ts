import * as pr from "pareto-runtime"

export type LocalPart = {
    dependencies: pr.IReadonlyDictionary<string>
    devDependencies: pr.IReadonlyDictionary<string>
    isPublic: boolean
    publishData: null | {
        contentFingerprint: string | null
        version: string
        name: string
    }
}

export type LocalProject = {
    gitClean: boolean
    parts: pr.IReadonlyDictionary<null | LocalPart>
}
