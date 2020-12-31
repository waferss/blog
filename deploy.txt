#!/usr/bin/env sh
# set -e
git remote rm

git init
git add -A
git commit -m 'commit'
git push -f https://github.com/waferss/blog.git main
git remote rm
npm run docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/waferss/waferss.github.io.git master
cd -