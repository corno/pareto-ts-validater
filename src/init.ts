import * as tsm from "ts-morph"
import * as ts from "typescript"
import * as p from "./Project"
import * as tr from "./handleProject"

const project = new tsm.Project({})


project.addSourceFilesFromTsConfig("../astn/tsconfig.json")

project.resolveSourceFileDependencies()

class XNode implements p.Node {
    private imp: tsm.Node<ts.Node>
    constructor(imp: tsm.Node<ts.Node>) {
        this.imp = imp
    }
    get kindName() {
        return this.imp.getKindName()
    }
    get startLineNumber() {
        return this.imp.getStartLineNumber()
    }
    get startLinePos() {
        return this.imp.getStartLinePos()
    }
    get children() {
        return {
            forEach: (callback: ($: p.Node) => void) => {
                this.imp.forEachChild((x) => {
                    callback(wrapNode(x))
                })
            }
        }
    }
}

function wrapNode($: tsm.Node<ts.Node>): p.Node {
    return {
        get kindName() {
            return $.getKindName()
        },
        get startLineNumber() {
            return $.getStartLineNumber()
        },
        get startLinePos() {
            return $.getStartLinePos()
        },
        children: {
            forEach: (callback) => {
                $.forEachChild((x) => {
                    callback(wrapNode(x))
                })
            }
        }
    }
}

tr.handleProject({
    sourceFiles: {
        forEach:((callback) => {
            project.getSourceFiles().forEach(($) => {
                callback({
                    path: $.getFilePath(),
                    node: wrapNode($)
                })
            })
        })
    }
})

