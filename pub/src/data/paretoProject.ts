import * as ap from "analyse-path"

export const _tsDir: ap.TDirectory = {
    type: ["files dictionary", {
        "allow missing extension": false,
        extensions: ["ts"],
        recursive: false
    }]
}
export const _iface: ap.TDirectory = {
    type: ["type", {
        nodes: {
            "index.ts": {
                type: ["file", {}]
            },
            "functions": {
                type: ["directory", _tsDir],
            },
            "types": {
                type: ["directory", _tsDir],
            },
            "interfaces": {
                type: ["directory", _tsDir],
            },
        }
    }]
}

export const _moduleDirectory: ap.TDirectory = {
    type: ["type", {
        nodes: {
            "index.ts": {
                type: ["file", {}]
            },
            "data": {
                type: ["directory", _tsDir],
            },
            "interface": {
                type: ["directory", _iface]
            },
            "esc": {
                type: ["directory", {
                    type: ["files dictionary", {
                        "allow missing extension": false,
                        extensions: ["ts"],
                        recursive: true
                    }]

                }],
            },
            "modules": {
                type: ["directory", {
                    type: ["directory dictionary", {
                        definition: {
                            type: ["type", {
                                nodes: {
                                    "index.ts": {
                                        type: ["file", {}]
                                    },
                                    "data": {
                                        type: ["directory", _tsDir],
                                    },
                                    "interface": {
                                        type: ["directory", _iface]
                                    },
                                    "esc": {
                                        type: ["directory", {
                                            type: ["files dictionary", {
                                                "allow missing extension": false,
                                                extensions: ["ts"],
                                                recursive: true
                                            }]

                                        }],
                                    },
                                    "interfaces": {
                                        type: ["directory", {
                                            type: ["directory dictionary", {
                                                definition: _iface
                                            }]
                                        }],
                                    },
                                }
                            }]
                        }
                    }]
                }]
            },
        }
    }]
}

export const _dataDirectory: ap.TNode = {
    type: ["directory", {
        type: ["files dictionary", {
            "allow missing extension": true,
            extensions: [
                "astn-schema",
                "astn",
                "csv",
                "html",
                "json",
                "sh",
                "test",
                "ts",
                "txt",
            ],
            recursive: true
        }]
    }],
}

export const _sourceCodeDirectory: ap.TNode = {
    type: ["directory", {
        type: ["type", {
            nodes: {
                "data": _dataDirectory,
                "package.json": {
                    type: ["file", {}]
                },
                "package-lock.json": {
                    type: ["file", {}]
                },
                "src": {
                    type: ["directory", _moduleDirectory],
                },
                "tsconfig.json": {
                    type: ["file", {}]
                },
            }
        }]
    }]
}

export const _paretoProject: ap.TDirectory = {
    type: ["type", {
        nodes: {
            ".gitignore": {
                type: ["file", {}]
            },
            "dev": _sourceCodeDirectory,
            "package.json": {
                type: ["file", {}]
            },
            "pub": _sourceCodeDirectory,
            "README.md": {
                type: ["file", {}]
            },
            "pareto": {
                type: ["directory", {
                    type: ["type", {
                        "nodes": {
                            "package.json": {
                                type: ["file", {}]
                            },
                            "package-lock.json": {
                                type: ["file", {}]
                            },
                            "scripts": {
                                type: ["directory", {
                                    type: ["files dictionary", {
                                        "allow missing extension": false,
                                        extensions: [
                                            "sh",
                                        ],
                                        recursive: false
                                    }]
                                }],
                            }
                        }
                    }]
                }],
            },
            "test": _sourceCodeDirectory,
            "tmp": _dataDirectory,
        }
    }]
}
export const _typescriptFileStructure: ap.TDirectory = {
    type: ["type", {
        nodes: {
            "src": {
                type: ["directory", _moduleDirectory],
            }
        },
    }]
}