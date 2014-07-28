#!/bin/sh
if [ ! -d build/.git ];
then
	rm -rf build
	rm -rf build
	git clone git@github.com:stagemonitor/stagemonitor.github.io.git build
else
    pushd build
    git pull
    popd
fi
middleman build
cd build
git add --all
git commit -am 'deploy site'
git push origin master
