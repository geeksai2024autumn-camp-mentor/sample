# おみくじを40分で作ろう！

この教材では、Web技術（HTML、CSS、JavaScript）を使って、シンプルなおみくじアプリを40分で作成します。章ごとに手順を追って説明するので、初心者の方でも安心して取り組めます。

## 第1章: プロジェクト概要とセットアップ

### 概要

このプロジェクトでは、おみくじをWeb上で体験できるインタラクティブなページを作成します。技育祭の講演情報をランダムに表示し、その結果をX（旧Twitter）に投稿できる機能も追加します。使用する主なツールは、HTML、CSS、JavaScript、およびGitHub Pagesです。

### 使用するツール

- **HTML**: ページの構造を作成。
- **CSS**: ページのデザインとスタイルを整える。
- **JavaScript**: ページにインタラクティブな動作を追加。
- **GitHub Pages**: 完成したWebページをホスティング。

### 事前に準備しておくこと

 - テキストエディタのインストール（Visual Studio Code）
  - https://code.visualstudio.com/download
 - GitHubの登録＆各種初期設定 
   - https://docs.github.com/ja/get-started/start-your-journey/creating-an-account-on-github
   - https://docs.github.com/ja/get-started/getting-started-with-git/set-up-git

### 作成するファイル

1. プロジェクト用フォルダを作成し、以下のファイルを準備します。
   - `index.html`
   - `styles.css`
   - `script.js`
2. プロジェクト用フォルダに `README.md` ファイルも準備します。
   - GitHubリポジトリを作る際に一緒に作っても良いし、自分で作っても良いです。
   - 今回はGitHub Pagesを利用するため、必要になります。

---

## 第2章: HTML構造の作成

### 手順

1. プロジェクトフォルダに `index.html` を作成します。
2. 以下の基本的なHTML構造をコピーして貼り付けます。
3. index.htmlをchromeなどのブラウザで開いて確認します。

<details>
<summary>index.html のコード</summary>

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>おみくじポップアップ</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>技育祭2024【秋】</h1>
      <h2>講演おみくじ</h2>
    </header>

    <main>
      <div id="omikuji">
        <div id="omikujiTitle">おみくじ結果</div>
        <div id="omikujiDetails">詳細がここに表示されます</div>
      </div>
      <div class="button-container">
        <button id="omikujiButton">スタート</button>
        <button id="postToXButton" class="hidden" disabled>
          Xにポストする
        </button>
      </div>
    </main>

    <footer>
      <p>&copy; 技育プロジェクト運営事務局</p>
    </footer>

    <script src="script.js"></script>
  </body>
</html>

```

</details>

---
