#!/usr/bin/env bash


"$(dirname "$0")"/buildPubAndTestPackages.sh && \
if [ -d "../test" ]
then
    node ../test/dist/esc/bin/index.js ../test/data
fi \

