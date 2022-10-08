#!/usr/bin/env sh

# エラー時は停止
set -e

# ビルド
npm run build

# ビルド出力ディレクトリに移動
cd dist

# カスタムドメインにデプロイする場合
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# https://<USERNAME>.github.io にデプロイする場合
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# https://<USERNAME>.github.io/<REPO> にデプロイする場合
git push -f git@github.com:sae-github/to-do-app master:gh-pages

cd -
