#!/usr/bin/env bash

if [ -d "../dev" ]
then
    "$(dirname "$0")"/buildDevPackage.sh
fi \


"$(dirname "$0")"/buildPubAndTestPackages.sh && \
node ../test/dist/esc/bin/index.js ../test/data
