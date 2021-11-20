
export type IFileSystemContext = {
    expectDirectory: (
        onDirectory: (
            context: IFileSystemContext,
            name: string,
        ) => void,
    ) => void
    expectFile: (
        onFile: (
            fileName: string,
        ) => void,
    ) => void
    expectFileOrDirectory: (
        onFileOrDirectory: (
            name: string,
            context: IFileSystemContext | null,
        ) => void,
    ) => void
}
