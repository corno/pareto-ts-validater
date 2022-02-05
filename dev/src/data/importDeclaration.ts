import * as gta from "generate-typesafe-ast"

export const _importDeclaration: gta.TValueType = ["node", {
    name: `ImportDeclaration`,
    type: ["composite", {
        cardinality: ["one", {}],
        type: ["sequence", {
            elements: ([
                {
                    name: `clause`,
                    value: {
                        cardinality: ["one", {}],
                        type: ["node", {
                            name: `ImportClause`,
                            type: ["composite", {
                                cardinality: ["one", {}],
                                type: ["choice", {
                                    options: {
                                        namespace: {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: `NamespaceImport`,
                                                type: ["composite", {
                                                    cardinality: ["one", {}],
                                                    type: ["reference", {
                                                        name: `identifier`
                                                    }],
                                                }],
                                            }]
                                        },
                                        named: {
                                            cardinality: ["one", {}],
                                            type: ["node", {
                                                name: `NamedImports`,
                                                type: ["composite", {
                                                    cardinality: ["array", {}],
                                                    type: ["node", {
                                                        name: `ImportSpecifier`,
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
                                                                    {
                                                                        name: `as`,
                                                                        value: {
                                                                            cardinality: ["optional", {}],
                                                                            type: ["reference", {
                                                                                name: `identifier`
                                                                            }],
                                                                        }
                                                                    },
                                                                ])
                                                            }]
                                                        }]
                                                    }]
                                                }]
                                            }]
                                        }
                                    }
                                }]
                            }]
                        }]
                    }
                },
                {
                    name: `file`,
                    value: {
                        cardinality: ["one", {}],
                        type: ["node", {
                            name: `StringLiteral`,
                            type: ["leaf", { hasTextContent: true }],
                        }]
                    }
                }
            ])
        }]
    }]
}]