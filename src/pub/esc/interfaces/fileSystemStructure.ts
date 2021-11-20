
type TypeDirectory = { [key: string]: Node }

type DD = {
    "type":
    | ["files", FilesDictionary]
    | ["directories", {
        node: Node
    }]
}

type FilesDictionary = {
    "extensions": string[]
    recursive: boolean
}

export type Node =
    | ["file", {}]
    | ["type directory", TypeDirectory]
    | ["dictionary directory", DD]