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

## 第3章: GitHub Pagesへのデプロイ

### 手順

1. GitHubリポジトリにプロジェクトをプッシュします。
2. GitHub Pagesを有効にします。

<details>
<summary>有効化する設定方法</summary>

![image](https://github.com/user-attachments/assets/651e5fd2-209c-4360-bed5-6f4cdc372ab2)

</details>

3. デプロイが完了するのを待ちます。

<details>
<summary>デプロイの確認方法</summary>

![image](https://github.com/user-attachments/assets/1e0559f9-ce20-47fe-90af-b74e1207b780)
![image](https://github.com/user-attachments/assets/725f2d80-6c6e-4bb8-93c8-752bb364deb6)

</details>

4. 公開リンクが作成されているので確認します。

<details>
<summary>公開リンクの確認方法</summary>

![image](https://github.com/user-attachments/assets/fe9483d3-37ac-4d21-b6c7-f155aced4a94)

</details>

---

## 第4章: CSSで基本的なスタイリング

### 手順

`styles.css` に、以下の基本的なCSSをコピーして貼り付けます。

<details>
<summary>styles.css のコード</summary>

```css
/* 全体のリセットとレイアウト */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

body {
  font-family: Arial, sans-serif;
  min-height: 100vh;
}

.hidden {
  display: none;
}

header {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

#omikuji {
  border: 2px solid #333;
  padding: 20px;
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.button-container {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}

```

</details>

---
