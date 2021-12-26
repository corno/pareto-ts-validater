import * as gta from "generate-typesafe-ast/esc/interfaces"

export const dataGrammar: gta.Grammar = {
    valueTypes: {
        expression: ["choice", {
            options: {
                arrayLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ArrayLiteralExpression"
                    }]
                },
                false: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "FalseKeyword"
                    }]
                },
                identifier: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "Identifier"
                    }]
                },
                noSubstitutionTemplateLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "NoSubstitutionTemplateLiteral"
                    }]
                },
                numericLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "NumericLiteral"
                    }]
                },
                nullKeyword: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "NullKeyword"
                    }]
                },
                objectLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ObjectLiteralExpression"
                    }]
                },
                stringLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "StringLiteral"
                    }]
                },
                true: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TrueKeyword"
                    }]
                },
            }
        }],
    },
    nodes: {
        "ArrayLiteralExpression": {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["reference", { name: "expression" }],
            }]
        },
        "EndOfFileToken": { type: ["leaf", { hasTextContent: false }] },
        "ExportKeyword": { type: ["leaf", { hasTextContent: false }] },
        "FalseKeyword": { type: ["leaf", { hasTextContent: false }] },
        "Identifier": { type: ["leaf", { hasTextContent: true }] },
        "ImportClause": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "namespace",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "NamespaceImport"
                                }]
                            }
                        }
                    ]
                }]
            }]
        },
        "ImportDeclaration": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "clause",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "ImportClause"
                                }]
                            }
                        },
                        {
                            name: "file",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "StringLiteral"
                                }]
                            }
                        }
                    ]
                }]
            }]
        },
        "NamespaceImport": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["node", {
                    name: "Identifier"
                }]
            }]
        },
        "NoSubstitutionTemplateLiteral": { type: ["leaf", { hasTextContent: true }] },

        "NumericLiteral": { type: ["leaf", { hasTextContent: true }] },

        "NullKeyword": { type: ["leaf", { hasTextContent: false }] },

        "ObjectLiteralExpression": {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["node", {
                    name: "PropertyAssignment"
                }]
            }]
        },
        "PropertyAssignment": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["choice", {
                                    options: {
                                        identifier: {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: "Identifier"
                                            }]
                                        },
                                        stringLiteral: {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: "StringLiteral"
                                            }]
                                        },
                                    }
                                }]
                            }
                        },
                        {
                            name: "expression",
                            value: {
                                cardinality: ["one", {}],
                                type: ["reference", { name: "expression" }],
                            }
                        },
                    ]
                }]
            }]
        },
        "QualifiedName": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "context",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier",
                                }]
                            }
                        },
                        {
                            name: "type",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier",
                                }]
                            }
                        },
                    ]
                }],
            }]
        },
        "SourceFile": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "import",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "ImportDeclaration"
                                }]
                            }
                        },
                        {
                            name: "variables",
                            value: {
                                cardinality: ["array", {}],
                                type: ["node", {
                                    name: "VariableStatement"
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
        "StringLiteral": { type: ["leaf", { hasTextContent: true }] },
        "TrueKeyword": { type: ["leaf", { hasTextContent: false }] },
        "TypeReference": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "QualifiedName",
                                }]
                            }
                        },
                        // {
                        //     name: "parameters",
                        //     value: {
                        //         cardinality: ["array", {}],
                        //         type: ["reference", { name: "type" }],
                        //     }
                        // },
                    ]
                }]
            }]
        },
        "VariableDeclaration": {
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "name",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "Identifier"
                                }]
                            },
                        },
                        {
                            name: "type",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "TypeReference",
                                }],
                            },
                        },
                        {
                            name: "one",
                            value: {
                                cardinality: ["optional", {}],
                                type: ["reference", { name: "expression" }],
                            },
                        },
                    ]
                }]
            }]
        },
        "VariableDeclarationList": {
            type: ["composite", {
                cardinality: ["array", {}],
                type: ["node", {
                    name: "VariableDeclaration"
                }]
            }]
        },
        "VariableStatement": {
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
                            name: "variableDeclarationList",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "VariableDeclarationList"
                                }]
                            },
                        },
                    ]
                }]
            }]
        },
    },
    rootNode: "SourceFile"
}
