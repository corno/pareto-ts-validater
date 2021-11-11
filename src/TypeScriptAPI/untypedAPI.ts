import * as pr from "pareto-runtime"

export type Node<Annotation> = {
    kindName: string
    children: pr.IReadonlyArray<Node<Annotation>>
    annotation: Annotation
}

export type SourceFile<Annotation> = {
    path: string
    node: Node<Annotation>
}

export type Project<Annotation> = {
    path: string
    sourceFiles: pr.IReadonlyArray<SourceFile<Annotation>>
}