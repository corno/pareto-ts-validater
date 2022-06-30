import * as pa from "pareto-lang-api"

export type ReferencedProject = {
    latestVersion: string
}

export type Dependency = {
    versionX: string
    isEqual: boolean
}

export type Dependencies = {
    allDepsInSync: boolean
    dependencies: pa.IReadonlyDictionary<Dependency>
    devDependencies: pa.IReadonlyDictionary<Dependency>
}

export type Part = {
    type:
    | ["public", {
        status: 
        | ["unpublishable", {}]
        | ["publishable", {
            version: string
            name: string
            currentContentFingerprint: string | null
            publishedVersion: 
            | ["missing", {}]
            | ["found", {
                latestVersion: string
                contentFingerprint: string | null
            }]
        }]
    }]
    | ["local", {
        
    }]

    deps: Dependencies
    isClean: boolean
}

export type Project = {
    gitClean: boolean
    parts: pa.IReadonlyDictionary<Part>
    isClean: boolean
}

export type ProjectStatusOverview = {
    projects: pa.IReadonlyDictionary<Project>
    referencedProjects: pa.IReadonlyDictionary<ReferencedProject>
}