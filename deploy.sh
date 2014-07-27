#!/bin/sh
rm -rf build
middleman build
cd build
git init
git remote add origin git@github.com:stagemonitor/stagemonitor.github.io.git
git add --all
git commit -am 'deploy site'
git push -f origin master
