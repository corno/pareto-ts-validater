#!/usr/bin/env bash

if [ -f $1/tsconfig.json ]
then
    node ./node_modules/pareto-ts-validator/dist/esc/bin/analyseTypeScriptProject.js $1/tsconfig.json > /dev/null #only want the errors
fi
