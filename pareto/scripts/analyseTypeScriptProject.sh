#!/usr/bin/env bash


node ../pub/dist/esc/bin/analyseTypeScriptProject.js $1 > /dev/null #only want the errors
