#!/usr/bin/env node


import * as path from "path"
import { analysePath, parseFilePath } from "../../../pub/esc/implementations/analysePath";
import { testProject } from "../../data/testProject";

function test(
    pathString: string,
    expectedError: string | null,
    expectedPathPattern: string,
    expectedPath: string,
) {
    const res = analysePath(
        testProject,
        parseFilePath(pathString)
    )
    function onError(msg: string) {
        console.error(`${pathString}: ${msg}`)
    }
    if (res.error !== expectedError) {
        if (res.error === null) {
            onError("expected error but found none")
        } else if (expectedError === null) {
            onError(`expected no error but found '${res.error}'`)
        } else {
            onError(`expected error '${expectedError}' but found '${res.error}'`)
        }
    }
    if (`${path.sep}${res.path.join(path.sep)}` !== expectedPath) {
        onError(`expected path '${expectedPath}' but found '${path.sep}${res.path.join(path.sep)}'`)
    }
    if (res.pathPattern !== expectedPathPattern) {
        onError(`expected path pattern '${expectedPath}' but found '${res.pathPattern}'`)
    }
}

test("f.txt", null, "/f.txt", "/f.txt")
test("f.txt/x.txt", "expected file instead of directory", "/f.txt", "/")
test("foo", "unexpected file: 'foo'", "", "/foo")
test("foo/bar", "unexpected directory: 'foo'", "", "/")
test("ddd", "expected directory instead of file", "/ddd", "/ddd")
test("ddd/f.txt", "expected directory (any name)", "/ddd/*", "/ddd/f.txt")
test("ddd/x/f.txt", null, "/ddd/*/f.txt", "/ddd/x/f.txt")
test("ddd/x/y.txt", "unexpected file: 'y.txt'", "/ddd/*", "/ddd/x/y.txt")
test("td/f.txt", null, "/td/f.txt", "/td/f.txt")
test("td/y.txt", "unexpected file: 'y.txt'", "/td", "/td/y.txt")
test("fdd/y.txt", null, "/fdd/**/*.txt", "/fdd/y.txt")
test("fdd/a/y.txt", null, "/fdd/**/*.txt", "/fdd/a/y.txt")
test("fdd/y.foo", "unexpected extension: 'foo'", "/fdd/**/*.foo", "/fdd/y.foo")
test("fddnr/a/y.txt", "did not expect a directory", "/fddnr/*[txt]", "/fddnr")
