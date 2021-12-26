import * as gta from "generate-typesafe-ast/esc/interfaces"

export const typeGrammar: gta.Grammar = {
    valueTypes: {
        "type": ["choice", {
            options: {
                array: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ArrayType"
                    }]
                },
                // identifier: {
                //     cardinality: ["one", {}],
                //     type: ["node", {
                //         name: "Identifier"
                //     }]
                // },
                boolean: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "BooleanKeyword"
                    }]
                },
                string: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "StringKeyword"
                    }]
                },
                literal: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "LiteralType"
                    }]
                },
                tuple: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TupleType"
                    }]
                },
                typeLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TypeLiteral"
                    }]
                },
                typeReference: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TypeReference"
                    }]
                },
                union: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "UnionType"
                    }]
                },
            }
        }]
    },
    nodes: {
        "ArrayType": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["reference", { name: "type" }],
            }]
        },
        "BooleanKeyword": { type: ["leaf", { hasTextContent: false }] },
        "EndOfFileToken": { type: ["leaf", { hasTextContent: false }] },
        "ExportKeyword": { type: ["leaf", { hasTextContent: false }] },
        "Identifier": { type: ["leaf", { hasTextContent: true }] },
        "IndexSignature": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        // {
                        //     name: "modifiers",
                        //     value: {
                        //         cardinality: ["array", {}],
                        //         type: ["reference", { name: "modifier" }]
                        //     },
                        // },
                        {
                            name: "key",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Parameter"
                                }],
                            }
                        },
                        {
                            name: "type",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "type" }],
                            },
                        },

                    ]
                }]
            }]
        },
        "LiteralType": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["choice", {
                    options: {
                        // null: {
                        //     cardinality: ["one", {}],
                        //     type: ["node", {
                        //         name: "NullKeyword",
                        //     }]
                        // },
                        "string": {
                            cardinality: ["one", {}],
                            type: ["node", {
                                name: "StringLiteral",
                            }]
                        },
                    }
                }]
            }]
        },
        "Parameter": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier",
                                }]
                            }
                        },
                        // {
                        //     name: "questionToken",
                        //     value: {
                        //         cardinality: ["optional", {}],
                        //         type: ["node", {
                        //             name: "QuestionToken",
                        //         }]
                        //     }
                        // },
                        {
                            name: "type",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "type" }],
                            }
                        },
                    ]
                }]
            }]
        },
        "PropertySignature": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        // {
                        //     name: "modifiers",
                        //     value: {
                        //         cardinality: ["array", {}],
                        //         type: ["reference", { name: "modifier" }]
                        //     }
                        //     ,
                        // },
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", { name: "StringLiteral" }],
                            }
                        },
                        {
                            name: "quesionToken",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["node", {
                                    name: "QuestionToken",
                                }],
                            }
                        },
                        {
                            name: "type",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "type" }],
                            },
                        }

                    ]
                }]
            }]
        },
        "QuestionToken": { type: ["leaf", { hasTextContent: false }] },
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
                            name: "typeAliases",
                            value: {
                                cardinality: ["array", {}],
                                type: ["node", {
                                    name: "TypeAliasDeclaration"
                                }]
                            }
                        },
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
        "StringKeyword": { type: ["leaf", { hasTextContent: false }] },
        "StringLiteral": { type: ["leaf", { hasTextContent: true }] },
        "TupleType": {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["reference", { name: "type" }],
            }]
        },
        "TypeAliasDeclaration": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "export",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "ExportKeyword"
                                }]
                            }
                        },
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier"
                                }]
                            }
                        },
                        {
                            name: "typeParameters",
                            value: {
                                cardinality: ["array", {}],
                                type: ["node", {
                                    name: "TypeParameter"
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
        },
        "TypeLiteral": {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["choice", {
                    options: {
                        index: {
                            cardinality: ["one", {}],
                            type: ["node", {
                                name: "IndexSignature"
                            }]
                        },
                        property: {
                            cardinality: ["one", {}],
                            type: ["node", {
                                name: "PropertySignature"
                            }]
                        },
                    }
                }],




            }]
        },
        "TypeParameter": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["node", {
                    name: "Identifier"
                }],
            }]
        },
        "TypeReference": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "referencedType",
                            value: {
                                "cardinality": ["one", {}],
                                type: ["choice", {
                                    options: {
                                        "identifier": {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: "Identifier",
                                            }]
                                        },
                                        // "qualifiedName": {
                                        //     cardinality: ["one", {}],
                                        //     type: ["node", {
                                        //         name: "QualifiedName",
                                        //     }]
                                        // }
                                    }
                                }]
                            }
                        },
                        {
                            name: "parameters",
                            value: {
                                "cardinality": ["array", {}],
                                type: ["reference", { name: "type" }],
                            }
                        },
                    ]
                }]
            }]
        },
        "UnionType": {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["reference", { name: "type" }],
            }]
        },
    },
    rootNode: "SourceFile"
}
