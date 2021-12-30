
export type Node = {
    readonly "type":
    | ["file", {}]
    | ["directory", Directory]
}

export type TypeDirectory = {
    readonly "nodes": { [key: string]: Node }
}

export type FilesDictionary = {
    readonly "extensions": string[]
    readonly "recursive": boolean
}

export type Directory = {
    readonly "type":
    | ["directory dictionary", {
        readonly "definition": Directory
    }]
    | ["files dictionary", FilesDictionary]
    | ["type", TypeDirectory]
}
