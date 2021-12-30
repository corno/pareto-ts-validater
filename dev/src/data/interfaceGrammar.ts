import * as gta from "generate-typesafe-ast"
import { importDeclaration, type } from "./shared"

export const interfaceGrammar: gta.TGrammar = {
    globalValueTypes: {
        "functionType": ["node", {
            name: "FunctionType",
            type: ["composite", {
                cardinality: ["one", {}],
                type: ["sequence", {
                    elements: [
                        {
                            name: "parameters",
                            value: {
                                cardinality: ["array", {}],
                                type: ["node", {
                                    name: "Parameter",
                                    type: ["composite", {
                                        cardinality: ["one", {}],
                                        type: ["sequence", {
                                            elements: [
                                                {
                                                    name: "name",
                                                    value: {
                                                        cardinality: ["one", {}],
                                                        type: ["reference", {
                                                            name: "identifier",
                                                        }],
                                                    },
                                                },
                                                {
                                                    name: "type",
                                                    value: {
                                                        cardinality: ["one", {}],
                                                        type: ["choice", {
                                                            options: {
                                                                type: {
                                                                    cardinality: ["one", {}],
                                                                    type: type
                                                                },
                                                                function: {
                                                                    cardinality: ["one", {}],
                                                                    type: ["reference", {
                                                                        name: "functionType"
                                                                    }]
                                                                },
                                                            }
                                                        }],
                                                    }
                                                }
                                            ]
                                        }],
                                    }]
                                }]
                            },
                        },
                        {
                            name: "void",
                            value: {
                                cardinality: ["one", {}],
                                type: ["node", {
                                    name: "VoidKeyword",
                                    type: ["leaf", { hasTextContent: false }]
                                }],
                            },
                        },
                    ]
                }]
            }]
        }],
        "identifier": ["node", {
            name: "Identifier",
            type: ["leaf", { hasTextContent: true }]
        }],
        "type": ["choice", {
            options: {
                "function": {
                    cardinality: ["one", {}],
                    type: ["reference", {
                        name: "functionType"
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
                        name: "imports",
                        value: {
                            cardinality: ["array", {}],
                            type: importDeclaration,
                        }
                    },
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
