import * as pr from "pareto-runtime"

export type TEndOfFileToken<Annotation> = {
    annotation: Annotation,
    content: null,
}
export type XTSourceFile_endOfFile<Annotation> = TEndOfFileToken<Annotation>
export type STSourceFile_endOfFile<Annotation> = XTSourceFile_endOfFile<Annotation>
export type XTSourceFile<Annotation> = {
    readonly endOfFile:  STSourceFile_endOfFile<Annotation>
}
export type STSourceFile<Annotation> = XTSourceFile<Annotation>

export type TSourceFile<Annotation> = {
    annotation: Annotation,
    content: STSourceFile<Annotation>,
}
export type Root<Annotation> = TSourceFile<Annotation>