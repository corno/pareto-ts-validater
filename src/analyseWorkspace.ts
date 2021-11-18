
import * as path from "path"
import { readGitWorkspace } from "./readGitWorkspace"


const knownFiles: { [key: string]: {} } = {
    ".gitignore": {},
    ".npmignore": {},
    ".eslintrc.js": {},
    "package.json": {},
    "package-lock.json": {},
    "tsconfig.json": {},
    "schemaschema@0.1": {},
    "schema@0.1": {},
}

const knownExtensions: { [key: string]: {} } = {
    ".astn": {},
    ".astn-schema": {},
    ".js": {},
    ".json": {},
    ".md": {},
    ".mjs": {},
    ".rr": {},
    ".sh": {},
    ".test": {},
    ".ts": {},
    ".ts_": {},
    ".txt": {},
    ".yml": {}
}

console.log(`date,repository,directory,basename,extension,category,lines,generated`)
readGitWorkspace(
    {
        directoryPath: ".."
    },
    {
        onError: ($) => {
            console.error($)
        },
        fileCallback: (
            $repoPath,
            $filePath,
            $content,
        ) => {
            function getCategory(): string {

                if (knownFiles[path.basename($filePath)] !== undefined) {
                    return path.basename($filePath)
                }
                if (knownExtensions[path.extname($filePath)] !== undefined) {
                    return path.extname($filePath)
                }
                return "????"
            }

            function getLineCount(): number {
                let lineCount = 1 //there's always 1 line
                for (let i = 0; i !== $content.length; i += 1) {
                    if ($content[i] === "\n") {
                        lineCount += 1
                    }
                }
                return lineCount
            }
            console.log(`${new Date().toISOString().split('T')[0]},${$repoPath},${path.dirname($filePath) === "." ? "" : path.dirname($filePath)},${path.basename($filePath)},${path.extname($filePath)},${getCategory()},${getLineCount()},${$filePath.indexOf(".generated") === -1 ? "" : "generated"}`)
        }
    }
)