# full-stack-dev practice

バックエンド用レポジトリです。

## Techs

Node.js, MySQL

## Develop

### Git branch

#### Main Branch

開発時は、`main`ブランチからブランチを切ってください。

`main`: プロダクション用ブランチ

`develop`: 次のリリースに備え、最新のソースコードを管理するブランチ

#### Support Branch

`feature`: 新しい機能の開発や簡単なバグ修正などの開発作業を行うためのブランチ。
develop ブランチからの分岐として作成され、develop ブランチにマージする。

`release`: リリース作業を行うためのブランチ。
develop ブランチからの分岐として作成され、develop ブランチと master ブランチにマージする。

`hot-fix`: 緊急の修正作業を行うためのブランチ。
master ブランチからの分岐として作成され、develop ブランチと master ブランチにマージする。

分け方は GitHub Flow を参照 URL : https://www.kagoya.jp/howto/it-glossary/develop/githubflow/

## Run

`npm install`\
`npm run start` : テスト\
`http://localhost:3000`
