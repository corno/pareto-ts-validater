import * as fss from "../../../pub"

export const testProject: fss.TDirectory = {
    type: ["type", {
        nodes: {
            "f.txt": {
                type: ["file", {}],
            },
            "td": {
                type: ["directory", {
                    type: ["type", {
                        nodes: {
                            "f.txt": {
                                type: ["file", {}],
                            }
                        }
                    }]
                }]
            },
            "ddd": {
                type: ["directory", {
                    "type": ["directory dictionary", {
                        "definition": {
                            "type": ["type", {
                                nodes: {
                                    "f.txt": {
                                        type: ["file", {}]
                                    }
                                }
                            }]
                        }
                    }]
                }]
            },
            "fdd": {
                type: ["directory", {
                    "type": ["files dictionary", {
                        "extensions": ["txt"],
                        recursive: true,
                    }]
                }]
            },
            "fddnr": {
                type: ["directory", {
                    "type": ["files dictionary", {
                        "extensions": ["txt"],
                        recursive: false,
                    }]
                }]
            },
        },
    }],
}