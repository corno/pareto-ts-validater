#!/usr/bin/env bash

if [ -d "../dev" ]
then
    "$(dirname "$0")"/buildDevPackage.sh && \
    #rm -rf ../api/src/generated && \
    #rm -rf ../lib/src/generated && \
    #node ../dev/dist/esc/bin/generateCode.js ..
    echo "scipping code generation"
fi \


"$(dirname "$0")"/buildPubAndTestPackages.sh && \
node ../test/dist/esc/bin/index.js ../test/data
