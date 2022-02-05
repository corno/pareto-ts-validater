import * as gta from "generate-typesafe-ast"
import { _importDeclaration } from "./importDeclaration"
import { _type } from "./type"

export const _interfaceGrammar: gta.TGrammar = {
    globalValueTypes: {
        "functionType": ["node", {
            name: `FunctionType`,
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: ([
                        {
                            name: `parameters`,
                            value: {
                                cardinality: ["array", {}],
                                type: ["node", {
                                    name: `Parameter`,
                                    type: ["composite", {
                                        cardinality: ["one", {}],
                                        type: ["sequence", {
                                            elements: ([
                                                {
                                                    name: `name`,
                                                    value: {
                                                        cardinality: ["one", {}],
                                                        type: ["reference", {
                                                            name: `identifier`,
                                                        }],
                                                    },
                                                },
                                                {
                                                    name: `type`,
                                                    value: {
                                                        cardinality: ["one", {}],
                                                        type: ["choice", {
                                                            options: {
                                                                "type": {
                                                                    cardinality: ["one", {}],
                                                                    type: _type
                                                                },
                                                                "function": {
                                                                    cardinality: ["one", {}],
                                                                    type: ["reference", {
                                                                        name: `functionType`
                                                                    }]
                                                                },
                                                            }
                                                        }],
                                                    }
                                                }
                                            ])
                                        }],
                                    }]
                                }]
                            },
                        },
                        {
                            name: `void`,
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: `VoidKeyword`,
                                    type: ["leaf", { hasTextContent: false }]
                                }],
                            },
                        },
                    ])
                }]
            }]
        }],
        "identifier": ["node", {
            name: `Identifier`,
            type: ["leaf", { hasTextContent: true }]
        }],
        "type": _type,
        "interface": ["choice", {
            options: {
                "function": {
                    cardinality: ["one", {}],
                    type: ["reference", {
                        name: `functionType`
                    }]
                },
                "typeLiteral": {
                    cardinality: ["one", {}],
                    type: ["node", {
                        name: `TypeLiteral`,
                        type: ["composite", {
                            cardinality: ["array", {}],
                            type: ["node", {
                                name: `PropertySignature`,
                                type: ["composite", {
                                    cardinality: ["one", {}],
                                    type: ["sequence", {
                                        elements: ([
                                            // {
                                            //     name: `modifiers`,
                                            //     value: {
                                            //         cardinality: ["array", {}],
                                            //         type: ["reference", { name: `modifier` }]
                                            //     }
                                            //     ,
                                            // },
                                            {
                                                name: `readonly`,
                                                value: {
                                                    cardinality: ["one", {}],
                                                    type: ["node", {
                                                        name: `ReadonlyKeyword`,
                                                        type: ["leaf", { hasTextContent: false }]
                                                    }],
                                                }
                                            },
                                            {
                                                name: `name`,
                                                value: {
                                                    cardinality: ["one", {}],
                                                    type: ["node", {
                                                        name: `StringLiteral`,
                                                        type: ["leaf", { hasTextContent: true }]
                                                    }],
                                                }
                                            },
                                            {
                                                name: `questionToken`,
                                                value: {
                                                    cardinality: ["optional", {}],
                                                    type: ["node", {
                                                        name: `QuestionToken`,
                                                        type: ["leaf", { hasTextContent: false }]
                                                    }],
                                                }
                                            },
                                            {
                                                name: `type`,
                                                value: {
                                                    cardinality: ["optional", {}],
                                                    type: ["reference", { name: `interface` }],
                                                },
                                            }

                                        ])
                                    }]
                                }]
                            }]
                        }]
                    }]
                },
            }
        }],
    },
    root: {
        name: `SourceFile`,
        type: ["composite", {
            cardinality: ["one", {}],
            type: ["sequence", {
                elements: ([
                    {
                        name: `imports`,
                        value: {
                            cardinality: ["array", {}],
                            type: _importDeclaration,
                        }
                    },
                    {
                        name: `typeAliases`,
                        value: {
                            cardinality: ["array", {}],
                            type: ["node", {
                                name: `TypeAliasDeclaration`,
                                type: ["composite", {
                                    cardinality: ["one", {}],
                                    type: ["sequence", {
                                        elements: ([
                                            {
                                                name: `export`,
                                                value: {
                                                    cardinality: ["one", {}],
                                                    type: ["node", {
                                                        name: `ExportKeyword`,
                                                        type: ["leaf", { hasTextContent: false }]
                                                    }]
                                                }
                                            },
                                            {
                                                name: `name`,
                                                value: {
                                                    cardinality: ["one", {}],
                                                    type: ["reference", {
                                                        name: `identifier`
                                                    }],
                                                }
                                            },
                                            {
                                                name: `typeParameters`,
                                                value: {
                                                    cardinality: ["array", {}],
                                                    type: ["node", {
                                                        name: `TypeParameter`,
                                                        type: ["composite", {
                                                            cardinality: ["one", {}],
                                                            type: ["reference", {
                                                                name: `identifier`
                                                            }],
                                                        }]
                                                    }]
                                                },
                                            },
                                            {
                                                name: `type`,
                                                value: {
                                                    cardinality: ["one", {}],
                                                    type: ["reference", { name: `interface` }],
                                                },
                                            }

                                        ])
                                    }]
                                }]
                            }]
                        }
                    },
                    {
                        name: `endOfFile`,
                        value: {
                            cardinality: ["one", {}],
                            type: ["node", {
                                name: `EndOfFileToken`,
                                type: ["leaf", { hasTextContent: false }]
                            }]
                        }
                    }
                ])
            }]
        }]
    }
}
