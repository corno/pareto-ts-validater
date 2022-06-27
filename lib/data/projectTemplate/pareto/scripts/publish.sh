#!/usr/bin/env bash
dir=`realpath $(dirname "$0")`

#make sure everything is pushed
git push && \

#validate that everything is committed (to make sure we're not messing with open work with updatePackage)
git diff --exit-code && \

#make sure latest packages are installed
$dir/updatePackage.sh ../$2 && \

#validate that everything is committed
git diff --exit-code && \

#buildAndTest
$dir/buildAndTest.sh && \

#analyse
#####$dir/analysePackage.sh && \
#####$dir/analyseAllTypeScriptProjects.sh && \

#bump version and store in variable
pushd ../$2 && \
newVersion=$(npm version "$1") && \
popd && \

#commit package.json with new version number
git add .. && \
git commit -m "version bumped to $newVersion" && \

#create a tag
git tag -a "$newVersion" -m "$newVersion" && \
git push && \

#publish
pushd ../$2 && \
npm publish && \
popd