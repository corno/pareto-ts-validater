import * as gta from "generate-typesafe-ast"
import { _importDeclaration } from "./shared"

export const dataGrammar: gta.TGrammar = {
    globalValueTypes: {
        "identifier": ["node", {
            name: "Identifier",
            type: ["leaf", { hasTextContent: true }]
        }],
        "initialization": ["choice", {
            options: {
                arrayLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ArrayLiteralExpression",
                        type: ["composite", {
                            cardinality: ["array", {}],
                            type: ["reference", { name: "initialization" }],
                        }]
                    }]
                },
                false: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "FalseKeyword",
                        type: ["leaf", { hasTextContent: false }]
                    }]
                },
                identifier: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "Identifier",
                        type: ["leaf", { hasTextContent: true }]
                    }]
                },
                noSubstitutionTemplateLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "NoSubstitutionTemplateLiteral",
                        type: ["leaf", { hasTextContent: true }]
                    }]
                },
                numericLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "NumericLiteral",
                        type: ["leaf", { hasTextContent: true }],
                    }]
                },
                objectLiteral: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "ObjectLiteralExpression",
                        type: ["composite", {
                            cardinality: ["array", {}],
                            type: ["node", {
                                name: "PropertyAssignment",
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
                                                                    name: "Identifier",
                                                                    type: ["leaf", { hasTextContent: true }],

                                                                }]
                                                            },
                                                            stringLiteral: {
                                                                cardinality: ["one", {}],
                                                                type: ["node", {
                                                                    name: "StringLiteral",
                                                                    type: ["leaf", { hasTextContent: true }],

                                                                }]
                                                            },
                                                        }
                                                    }]
                                                }
                                            },
                                            {
                                                name: "initialization",
                                                value: {
                                                    cardinality: ["one", {}],
                                                    type: ["reference", { name: "initialization" }],
                                                }
                                            },
                                        ]
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
                // stringLiteral: { //don't use this one, use 'noSubstitutionTemplateLiteral' to make it visible this is a literal
                //     cardinality: ["one", {}],
                //     type: ["node", {
                //         name: "StringLiteral",
                //         type: ["leaf", { hasTextContent: true }],
                //     }]
                // },
                true: {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: "TrueKeyword",
                        type: ["leaf", { hasTextContent: false }],

                    }]
                },
            }
        }],
    },
    root: {
        name: "SourceFile",
        type: ["composite", {
            cardinality: ["one", {}],
            type: ["sequence", {
                elements: [
                    {
                        name: "import",
                        value: {
                            cardinality: ["one", {}],
                            type: _importDeclaration,
                        }
                    },
                    {
                        name: "variables",
                        value: {
                            cardinality: ["array", {}],
                            type: ["node", {
                                name: "VariableStatement",
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
                                                name: "variableDeclarationList",
                                                value: {
                                                    cardinality: ["one", {}],
                                                    type: ["node", {
                                                        name: "VariableDeclarationList",
                                                        type: ["composite", {
                                                            cardinality: ["array", {}],
                                                            type: ["node", {
                                                                name: "VariableDeclaration",
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
                                                                                        type: ["leaf", { hasTextContent: true }],
                                                                                    }]
                                                                                },
                                                                            },
                                                                            {
                                                                                name: "type",
                                                                                value: {
                                                                                    cardinality: ["one", {}],
                                                                                    type: ["node", {
                                                                                        name: "TypeReference",
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
                                                                                                                                        type: ["leaf", { hasTextContent: true }],
                                                                                                                                    }]
                                                                                                                                }
                                                                                                                            },
                                                                                                                            {
                                                                                                                                name: "type",
                                                                                                                                value: {
                                                                                                                                    cardinality: ["one", {}],
                                                                                                                                    type: ["node", {
                                                                                                                                        name: "Identifier",
                                                                                                                                        type: ["leaf", { hasTextContent: true }],
                                                                                                                                    }]
                                                                                                                                }
                                                                                                                            },
                                                                                                                        ]
                                                                                                                    }],
                                                                                                                }]
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
                                                                                    }],
                                                                                },
                                                                            },
                                                                            {
                                                                                name: "one",
                                                                                value: {
                                                                                    cardinality: ["optional", {}],
                                                                                    type: ["reference", { name: "initialization" }],
                                                                                },
                                                                            },
                                                                        ]
                                                                    }]
                                                                }]
                                                            }]
                                                        }]
                                                    }]
                                                },
                                            },
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
                                type: ["leaf", { hasTextContent: false }],
                            }]
                        }
                    }
                ]
            }]
        }]
    }
}
