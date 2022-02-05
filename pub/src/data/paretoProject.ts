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

export const _nested: ap.TDirectory = {
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
}

export const _moduleDirectory: ap.TDirectory = {
    type: ["type", {
        nodes: {
            "bin": {
                type: ["directory", {
                    type: ["files dictionary", {
                        "allow missing extension": false,
                        extensions: ["ts"],
                        recursive: false,
                    }]
                }]
            },
            "data": {
                type: ["directory", _tsDir],
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
            "generated": {
                type: ["directory", _nested]
            },
            "index.ts": {
                type: ["file", {}]
            },
            "interface": {
                type: ["directory", _iface]
            },
            "modules": {
                type: ["directory", _nested]
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
            "custom scripts": {
                type: ["directory", {
                    type: ["type", {
                        nodes: {
                            "package.json": {
                                type: ["file", {}]
                            },
                        }
                    }]
                }]
            },
            "dev": _sourceCodeDirectory,
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
            "pub": _sourceCodeDirectory,
            "README.md": {
                type: ["file", {}]
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