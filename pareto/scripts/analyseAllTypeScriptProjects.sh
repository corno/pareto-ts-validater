#!/usr/bin/env bash
dir=`realpath $(dirname "$0")`

$dir/analyseTypeScriptProject.sh ../dev && \
$dir/analyseTypeScriptProject.sh ../api && \
$dir/analyseTypeScriptProject.sh ../lib && \
$dir/analyseTypeScriptProject.sh ../test