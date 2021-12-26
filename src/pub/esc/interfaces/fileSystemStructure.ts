
export type Node = {
    type:
    | ["file", {}]
    | ["directory", Directory]
}

export type TypeDirectory = {
    nodes: { [key: string]: Node }
}

export type FilesDictionary = {
    "extensions": string[]
    recursive: boolean
}

export type Directory = {
    "type":
    | ["directory dictionary", {
        "definition": Directory
    }]
    | ["files dictionary", FilesDictionary]
    | ["type", TypeDirectory]
}
