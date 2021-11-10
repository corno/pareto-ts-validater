
export interface IArray<T> {
    forEach(callback: ($: T) => void): void
}

export type Node<Annotation> = {
    children: IArray<Node<Annotation>>
    kindName: string
    startLineNumber: number
    startLinePos: number
    annotation: Annotation
}

export type SourceFile<Annotation> = {
    path: string
    node: Node<Annotation>
}

export type Project<Annotation> = {
    path: string
    sourceFiles: IArray<SourceFile<Annotation>>
}