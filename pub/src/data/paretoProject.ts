import * as ap from "analyse-path"

export const _iface: ap.TDirectory = {
    type: ["type", {
        nodes: {
            "types": {
                type: ["directory", {
                    type: ["files dictionary", {
                        extensions: ["ts"],
                        recursive: false
                    }]
                }],
            },
            "interfaces": {
                type: ["directory", {
                    type: ["files dictionary", {
                        extensions: ["ts"],
                        recursive: false
                    }]
                }],
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
                type: ["directory", {
                    type: ["files dictionary", {
                        extensions: ["ts"],
                        recursive: false
                    }]
                }],
            },
            "interface": {
                type: ["directory", _iface]
            },
            "esc": {
                type: ["directory", {
                    type: ["files dictionary", {
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
                                        type: ["directory", {
                                            type: ["files dictionary", {
                                                extensions: ["ts"],
                                                recursive: false
                                            }]
                                        }],
                                    },
                                    "interface": {
                                        type: ["directory", _iface]
                                    },
                                    "esc": {
                                        type: ["directory", {
                                            type: ["files dictionary", {
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
            extensions: [
                "astn-schema",
                "astn",
                "csv",
                "html",
                "json",
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
            "data": _dataDirectory,
            "dev": _sourceCodeDirectory,
            "package.json": {
                type: ["file", {}]
            },
            "pub": _sourceCodeDirectory,
            "README.md": {
                type: ["file", {}]
            },
            "scripts": {

                type: ["directory", {
                    type: ["files dictionary", {
                        extensions: [
                            "sh",
                        ],
                        recursive: false
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