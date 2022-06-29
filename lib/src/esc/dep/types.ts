import * as pr from "pareto-runtime"

export type ReferencedProject = {
    latestVersion: string
}

export type Dependency = {
    versionX: string
    isEqual: boolean
}

export type Dependencies = {
    allDepsInSync: boolean
    dependencies: pr.IReadonlyDictionary<Dependency>
    devDependencies: pr.IReadonlyDictionary<Dependency>
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
    parts: pr.IReadonlyDictionary<Part>
    isClean: boolean
}

export type ProjectStatusOverview = {
    projects: pr.IReadonlyDictionary<Project>
    referencedProjects: pr.IReadonlyDictionary<ReferencedProject>
}