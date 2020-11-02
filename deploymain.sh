#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git remote rm

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'commit'

# 发布到 https://<USERNAME>.github.io
# git push -f git@github.com:chickenAndFish/chikenAndFish.github.io.git master

# 发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/chickenAndFish/blog.git main
