import * as tsm from "ts-morph"
import * as ts from "typescript"
import * as p from "./TypeScriptAPI/untypedAPI"
import * as path from "path"

export function loadProject(
    tsconfigPath: string,
    callback: (
        project: p.Project<tsm.Node>,
        getLineInfo: ($: tsm.Node) => string,
    ) => void,
) {

    const project = new tsm.Project({})

    project.addSourceFilesFromTsConfig(tsconfigPath)

    project.resolveSourceFileDependencies()

    class XNode implements p.Node<tsm.Node> {
        private imp: tsm.Node<ts.Node>
        constructor(imp: tsm.Node<ts.Node>) {
            this.imp = imp
        }
        get kindName() {
            return this.imp.getKindName()
        }
        get children() {
            return {
                forEach: (callback: ($: p.Node<tsm.Node>) => void) => {
                    this.imp.forEachChild((x) => {
                        callback(wrapNode(x))
                    })
                }
            }
        }
        get annotation() {
            return this.imp
        }
    }

    function wrapNode($: tsm.Node<ts.Node>): p.Node<tsm.Node> {
        // return {
        //     get kindName() {
        //         return $.getKindName()
        //     },
        //     get startLineNumber() {
        //         return $.getStartLineNumber()
        //     },
        //     get startLinePos() {
        //         return $.getStartLinePos()
        //     },
        //     children: {
        //         forEach: (callback) => {
        //             $.forEachChild((x) => {
        //                 callback(wrapNode(x))
        //             })
        //         }
        //     },
        //     get annotation() {
        //         return $
        //     },
        // }
        return new XNode($)
    }
    callback(
        {
            get path() {
                return path.dirname(path.resolve(tsconfigPath))
            },
            sourceFiles: {
                forEach: ((callback) => {
                    project.getSourceFiles().forEach(($) => {
                        callback({
                            path: $.getFilePath(),
                            node: wrapNode($)
                        })
                    })
                })
            }
        },
        ($) => {
            const lp = $.getSourceFile().getLineAndColumnAtPos($.getStart())
            return `[${lp.line}, ${lp.column}]`
        },
    )
}