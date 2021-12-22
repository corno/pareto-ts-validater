import { Node } from "../interfaces/fileSystemStructure"

export const typescriptProject: Node = ["dictionary directory", {
    "type": ["directories", {
        "node": ["type directory", {
            "esc": ["dictionary directory", {
                "type": ["files", {
                    "extensions": ["ts"],
                    "recursive": true,
                }],
            }],
        }],
    }],
}]

export const paretoProject: Node = ["type directory", {
    "_package.json": ["file", {}],
    ".eslintignore": ["file", {}],
    ".eslintrc.js": ["file", {}],
    ".gitignore": ["file", {}],
    "bin": ["dictionary directory", {
        "type": ["files", {
            "extensions": ["mjs"],
            "recursive": false,
        }],
    }],
    "data": ["dictionary directory", {
        "type": ["files", {
            "extensions": [
                "astn",
                "astn-schema",
                "csv",
                "html",
                "ts",
                "json",
                "test",
            ],
            "recursive": true,
        }],
    }],
    "package-lock.json": ["file", { "ignore": true }],
    "package.json": ["file", {}],
    "README.md": ["file", {}],
    "src": typescriptProject,
    "tsconfig.json": ["file", {}],
}]