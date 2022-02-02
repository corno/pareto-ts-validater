#!/usr/bin/env bash

dir=`realpath $(dirname "$0")`

$dir/updatePackage.sh ../pareto
$dir/updatePackage.sh ../pub
$dir/updatePackage.sh ../test

$dir/copyTemplate

if [ -d "../dev" ]
then
    $dir/updatePackage.sh "../dev"
fi
