import * as gta from "generate-typesafe-ast/esc/interfaces"

export const interfaceGrammar: gta.Grammar = {
    valueTypes: {
    },
    nodes: {
        "EndOfFileToken": { type: ["leaf", { hasTextContent: false }] },

        "SourceFile": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        // {
                        //     name: "import",
                        //     value: {
                        //         cardinality: ["one", {}],
                        //         type: ["node", {
                        //             name: "ImportDeclaration"
                        //         }]
                        //     }
                        // },
                        // {
                        //     name: "variables",
                        //     value: {
                        //         cardinality: ["array", {}],
                        //         type: ["node", {
                        //             name: "VariableStatement"
                        //         }]
                        //     }
                        // },
                        {
                            name: "endOfFile",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "EndOfFileToken"
                                }]
                            }
                        }
                    ]
                }]
            }]
        },
    },
    rootNode: "SourceFile"
}
