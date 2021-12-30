import * as gta from "generate-typesafe-ast"
import { importDeclaration, type } from "./shared"

export const typeGrammar: gta.TGrammar = {
    globalValueTypes: {
        "identifier": ["node", {
            name: "Identifier",
            type: ["leaf", { hasTextContent: true }]
        }],
        "type": type
    },
    root: {
        name: "SourceFile",
        type: ["composite", {
            cardinality: ["one", {}],
            type: ["sequence", {
                elements: [
                    {
                        name: "imports",
                        value: {
                            cardinality: ["array", {}],
                            type: importDeclaration
                        }
                    },
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
                        name: "typeAliases",
                        value: {
                            cardinality: ["array", {}],
                            type: ["node", {
                                name: "TypeAliasDeclaration",
                                type: ["composite", {
                                    cardinality: ["one", {}],
                                    type: ["sequence", {
                                        elements: [
                                            {
                                                name: "export",
                                                value: {
                                                    cardinality: ["one", {}],
                                                    type: ["node", {
                                                        name: "ExportKeyword",
                                                        type: ["leaf", { hasTextContent: false }]
                                                    }]
                                                }
                                            },
                                            {
                                                name: "name",
                                                value: {
                                                    cardinality: ["one", {}],
                                                    type: ["reference", {
                                                        name: "identifier"
                                                    }],
                                                }
                                            },
                                            {
                                                name: "typeParameters",
                                                value: {
                                                    cardinality: ["array", {}],
                                                    type: ["node", {
                                                        name: "TypeParameter",
                                                        type: ["composite", {
                                                            cardinality: ["one", {}],
                                                            type: ["reference", {
                                                                name: "identifier"
                                                            }],
                                                        }]
                                                    }]
                                                },
                                            },
                                            {
                                                name: "type",
                                                value: {
                                                    cardinality: ["one", {}],
                                                    type: ["reference", { name: "type" }],
                                                },
                                            }

                                        ]
                                    }]
                                }]
                            }]
                        }
                    },
                    {
                        name: "endOfFile",
                        value: {
                            cardinality: ["one", {}],
                            type: ["node", {
                                name: "EndOfFileToken",
                                type: ["leaf", { hasTextContent: false }]
                            }]
                        }
                    }
                ]
            }]
        }]
    }
}
