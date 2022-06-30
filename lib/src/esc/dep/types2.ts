import * as pa from "pareto-lang-api"

export type LocalPart = {
    dependencies: pa.IReadonlyDictionary<string>
    devDependencies: pa.IReadonlyDictionary<string>
    isPublic: boolean
    publishData: null | {
        contentFingerprint: string | null
        version: string
        name: string
    }
}

export type LocalProject = {
    gitClean: boolean
    parts: pa.IReadonlyDictionary<null | LocalPart>
}
