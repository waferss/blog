#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
# set -e

# 备份源文件
git remote rm

git init
git add -A
git commit -m 'commit'
git push -f https://github.com/chickenAndFish/blog.git main

# dist
git remote rm
# 生成静态文件
yarn docs:build
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
git push -f https://github.com/chickenAndFish/chickenAndFish.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:chickenAndFish/blog.git master:gh-pages

cd -