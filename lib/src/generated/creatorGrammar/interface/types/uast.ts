import * as pa from "pareto-api-core"

export type TUntypedNode<Annotation> = {
    readonly "kindName": string
    readonly "value": string
    readonly "annotation": Annotation
    readonly "children": pa.IReadonlyArray<TUntypedNode<Annotation>>
}