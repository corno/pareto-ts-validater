import * as types from "../interface/types/fileSystemStructure"

export const iface: types.Directory = {
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

export const typescriptProject: types.Directory = {
    type: ["directory dictionary", {
        definition: {
            type: ["type", {
                nodes: {
                    "data": {
                        type: ["directory", {
                            type: ["files dictionary", {
                                extensions: ["ts"],
                                recursive: false
                            }]
                        }],
                    },
                    "interface": {
                        type: ["directory", iface]
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
                                definition: iface
                            }]
                        }],
                    },
                }
            }]
        }
    }]
}

export const paretoProject: types.Directory = {
    type: ["type", {
        nodes: {
            "_package.json": {
                type: ["file", {}]
            },
            ".eslintignore": {
                type: ["file", {}]
            },
            ".eslintrc.js": {
                type: ["file", {}]
            },
            ".gitignore": {
                type: ["file", {}]
            },
            "data": {
                type: ["directory", {
                    type: ["files dictionary", {
                        extensions: [
                            "astn",
                            "astn-schema",
                            "csv",
                            "html",
                            "ts",
                            "json",
                            "test",
                        ],
                        recursive: true
                    }]
                }],
            },
            "package-lock.json": {
                type: ["file", {}]
            },
            "package.json": {
                type: ["file", {}]
            },
            "README.md": {
                type: ["file", {}]
            },
            "src": {
                type: ["directory", typescriptProject],
            },
            "tsconfig.json": {
                type: ["file", {}]
            },
            // "temp": {
            //     type: ["file", {}]
            // },
        }
    }]
}
export const typescriptFileStructure: types.Directory = {
    type: ["type", {
        nodes: {
            "src": {
                type: ["directory", typescriptProject],
            }
        },
    }]
}