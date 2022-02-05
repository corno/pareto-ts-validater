import * as gta from "generate-typesafe-ast"

export const _type: gta.TValueType = ["choice", {
    options: {
        array: {
            cardinality: ["one", {}],
            type: ["node", {
                name: `ArrayType`,
                type: ["composite", {
                    cardinality: ["one", {}],
                    type: ["reference", { name: `type` }],
                }]
            }]
        },
        // identifier: {
        //     cardinality: ["one", {}],
        //     type: ["node", {
        //         name: `Identifier`
        //     }]
        // },
        boolean: {
            cardinality: ["one", {}],
            type: ["node", {
                name: `BooleanKeyword`,
                type: ["leaf", { hasTextContent: false }]
            }]
        },
        string: {
            cardinality: ["one", {}],
            type: ["node", {
                name: `StringKeyword`,
                type: ["leaf", { hasTextContent: false }]
            }]
        },
        number: {
            cardinality: ["one", {}],
            type: ["node", {
                name: `NumberKeyword`,
                type: ["leaf", { hasTextContent: false }]
            }]
        },
        // null: {
        //     cardinality: ["one", {}],
        //     type: ["node", {
        //         name: `NullKeyword`,
        //         type: ["leaf", { hasTextContent: false }]
        //     }]
        // },
        typeLiteral: {
            cardinality: ["one", {}],
            type: ["node", {
                name: `TypeLiteral`,
                type: ["composite", {
                    cardinality: ["array", {}],
                    type: ["choice", {
                        options: {
                            index: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: `IndexSignature`,
                                    type: ["composite", {
                                        cardinality: ["one", {}],
                                        type: ["sequence", {
                                            elements: ([
                                                // {
                                                //     name: `modifiers`,
                                                //     value: {
                                                //         cardinality: ["array", {}],
                                                //         type: ["reference", { name: `modifier` }]
                                                //     },
                                                // },
                                                {
                                                    name: `key`,
                                                    value: {
                                                        cardinality: ["one", {}],
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
                                                                                    name: `identifier`
                                                                                }],
                                                                            }
                                                                        },
                                                                        // {
                                                                        //     name: `questionToken`,
                                                                        //     value: {
                                                                        //         cardinality: ["optional", {}],
                                                                        //         type: ["node", {
                                                                        //             name: `QuestionToken`,
                                                                        //         }]
                                                                        //     }
                                                                        // },
                                                                        {
                                                                            name: `type`,
                                                                            value: {
                                                                                cardinality: ["optional", {}],
                                                                                type: ["reference", { name: `type` }],
                                                                            }
                                                                        },
                                                                    ])
                                                                }]
                                                            }]
                                                        }],
                                                    }
                                                },
                                                {
                                                    name: `type`,
                                                    value: {
                                                        cardinality: ["optional", {}],
                                                        type: ["reference", { name: `type` }],
                                                    },
                                                },

                                            ])
                                        }]
                                    }]
                                }]
                            },
                            property: {
                                cardinality: ["one", {}],
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
                                                        type: ["reference", { name: `type` }],
                                                    },
                                                }

                                            ])
                                        }]
                                    }]
                                }]
                            },
                        }
                    }],




                }]
            }]
        },
        typeReference: {
            cardinality: ["one", {}],
            type: ["node", {
                name: `TypeReference`,
                type: ["composite", {
                    cardinality: ["one", {}],
                    type: ["sequence", {
                        elements: ([
                            {
                                name: `referencedType`,
                                value: {
                                    "cardinality": ["one", {}],
                                    type: ["choice", {
                                        options: {
                                            "identifier": {
                                                cardinality: ["one", {}],
                                                type: ["reference", {
                                                    name: `identifier`
                                                }],
                                            },
                                            "qualifiedName": {
                                                cardinality: ["one", {}],
                                                type: ["node", {
                                                    name: `QualifiedName`,
                                                    type: ["composite", {
                                                        cardinality: ["one", {}],
                                                        type: ["sequence", {
                                                            elements: ([
                                                                {
                                                                    name: `context`,
                                                                    value: {
                                                                        cardinality: ["one", {}],
                                                                        type: ["reference", {
                                                                            name: `identifier`
                                                                        }],
                                                                    }
                                                                },
                                                                {
                                                                    name: `type`,
                                                                    value: {
                                                                        cardinality: ["one", {}],
                                                                        type: ["reference", {
                                                                            name: `identifier`
                                                                        }],
                                                                    }
                                                                },
                                                            ])
                                                        }],
                                                    }]
                                                }]
                                            },
                                        }
                                    }]
                                }
                            },
                            {
                                name: `parameters`,
                                value: {
                                    "cardinality": ["array", {}],
                                    type: ["reference", { name: `type` }],
                                }
                            },
                        ])
                    }]
                }]
            }]
        },
        union: {
            cardinality: ["one", {}],
            type: ["node", {
                name: `UnionType`,
                type: ["composite", {
                    cardinality: ["array", {}],
                    type: ["node", {
                        name: `TupleType`,
                        type: ["composite", {
                            cardinality: ["one", {}],
                            type: ["sequence", {
                                elements: ([
                                    {
                                        name: `state`,
                                        value: {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: `LiteralType`,
                                                type: ["composite", {
                                                    cardinality: ["one", {}],
                                                    type: ["choice", {
                                                        options: {
                                                            "string": {
                                                                cardinality: ["one", {}],
                                                                type: ["node", {
                                                                    name: `StringLiteral`,
                                                                    type: ["leaf", { hasTextContent: true }]
                                                                }]
                                                            },
                                                        }
                                                    }]
                                                }]
                                            }]
                                        }
                                    },
                                    {

                                        name: `data`,
                                        value: {
                                            cardinality: ["one", {}],
                                            type: ["reference", {
                                                name: `type`,
                                            }]
                                        }
                                    },
                                ])
                            }],
                        }]
                    }]
                }],
            }]
        },
    }
}]

