#!/usr/bin/env bash

if [ -d $1 ]
then
    pushd $1 > /dev/null && \
    npx ncu -u --packageFile package.json && \
    npx nsi && \
    popd
fi