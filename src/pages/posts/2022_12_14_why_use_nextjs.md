---
title: マイクロサービスを作りたいけどサーバーサイド構築面倒ならNext.jsを検討してみてください
description: これからサクッとアプリケーション作りたい人やweb系技術を磨きたい人、またどんなフレームワークを使っていいか検討している人、技術選定って大変ですよね。Next.jsにフォーカスして解説します。
public: true
layout: ../../layouts/BlogPost.astro

createdAt: 2022-12-14

tags:
  - React
  - Next.js
heroImage: /thumbnail/hot-coffee.png
slug: setup-react-nextjs
---
# なぜ Next.js を使うのか？

こんにちは、今回は Next.js の魅力をお伝えします！！

この記事を最後まで読めば Next.js のすごい部分存分に味わうことができるでしょう！

------

## Next.js とは？

Next.jsとはReactをベースに開発されたJavaScriptフレームワークです。

ますはこちらの表をご覧ください。

![github star histry](/others/2022_12/star-history-20221214.png)

これは、Next.js, React, Vue, Astro の GitHub star histry の表です。

web系フレームワークの中で React や Vue が人気であることはご存知だと思いますが Next.jsも順調に人気が出てきているフレームワークの1つです。

加えて、個人的に興味があるweb系フレームワークの1つとして Astro があります。これに関してはまた今度触れていく予定です。

<br>

お店で例えるなら、**React が外装**だとしたら**Next.js は内装**です。

Next.js はフロントエンドの実装だけでなくサーバー側の処理も担うことができます。

ですので、より素早く、自由に開発をすることができます。

------

## Next.jsを採用しているサイト

> #### [Amazon Audible](https://www.audible.com/about)
>
> #### [はてな](https://hatena.co.jp/)
>
> #### [LEGO](https://www.lego.com/ja-jp)
>
> #### [MELCARI](https://www.mercari.com/?ref=it)

などです。

------

## Next.js でできること

1. サーバ機能 → webページの取得、表示
2. アプリケーションの状態を保持 → ユーザごとの表示
3. ルーティング → いろんなページを作れる
4. 画像やファイルへのアクセス → 動的なページを作成できる

<br>

### 1 サーバーが構築できる

React でアプリーケーションを作る場合

⇨**express などのフレームワークで実装が必要**（react だけでは作れない）

＝学習コスト

<br>

Next.jsで作る場合

⇨Next.js がサーバー機能を持っているため実装不要

<br>

### 2 アプリケーションの状態管理

Next.js はアプリケーションの状態を保持可能

⇨ユーザーが入力した情報を管理し、画面の出し分けができる

<br>

### 3 URLルーティングを自動で生成

/pages (ver13より /app) フォルダーでルーティングを管理してくれるので Rails や Django のように自分でコードを書く必要がありません。

<br>

### 4 画像ファイルへのアクセス

画像などのファイルを管理するための /assets というフォルダがデフォルトで生成されます。

/assets フォルダに画像を配置するだけでOKです。

```js
<div>
  <img src="~/assets/画像ファイル.png" />
</div>
```

------

### Next.js はどんなアプリケーションを作るのに適しているのか？

**Next.jsはマイクロサービスの実装に適しています**。

例えば、Blog 的なサイト+α を実現したい時などです。

前述した通り、サーバーサイドの構築が必要ないので、効率よくサービスを作りたいと考えているのであれば Next.js を検討してみても良いと思います。
