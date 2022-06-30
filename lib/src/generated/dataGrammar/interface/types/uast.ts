import * as pa from "pareto-lang-api"

export type TUntypedNode<Annotation> = {
    readonly "kindName": string
    readonly "value": string
    readonly "annotation": Annotation
    readonly "children": pa.IReadonlyArray<TUntypedNode<Annotation>>
}