
export interface IArray<T> {
    forEach(callback: ($: T) => void): void
}

export type Node = {
    children: IArray<Node>
    kindName: string
    startLineNumber: number
    startLinePos: number
}

export type SourceFile = {
    path: string
    node: Node
}

export type Project = {
    sourceFiles: IArray<SourceFile>
}