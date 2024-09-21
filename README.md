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

### GitHubリポジトリの作成

1. GitHubプロフィールのRepositorysタブを開きます。
2. 「New」ボタンでリポジトリ作成画面を開きます。
   - 「Public」を選択します。Publicにしないと、GitHub Pagesでのデプロイができないので注意してください。
   - Initialize this repository with: Add a README file にチェックをつけます。
3. 「Create repository」ボタンでリポジトリが作成できます。

GitHubの公式ドキュメントはこちらです：[新しいリポジトリの作成](https://docs.github.com/ja/repositories/creating-and-managing-repositories/creating-a-new-repository)

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

1. 以下の基本的なHTML構造をコピーして貼り付けます。
2. index.htmlをchromeなどのブラウザで開いて確認します。

<details>
<summary>index.html のコード</summary>

```html
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>講演おみくじ</title>
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

## 第5章: JavaScriptでのインタラクティブ機能の追加

### 手順

1. `script.js` に以下のJSをコピーして貼り付けます。

ボタンを押すと、画面に表示されるテキストが変更されて、Xにポストするボタンが表示されるようになりました。

<details>
<summary>5-1 script.js ボタンを押して動きをつける</summary>

```javascript
// omikujiButtonがクリックされたとき
document.getElementById("omikujiButton").addEventListener("click", function () {
  // omikujiTitleをサンプルテキスト1に変更、omikujiDetailsをサンプルテキスト2に変更する
  document.getElementById("omikujiTitle").textContent = "サンプルテキスト1";
  document.getElementById("omikujiDetails").textContent = "サンプルテキスト2";

  // postToXButtonボタンのhiddenを削除し、画面に表示させる
  document.getElementById("postToXButton").classList.remove("hidden");
});

```

</details>

2. `script.js` を書き換えて、ランダムに講演情報を表示します。

<details>
<summary>5-2 script.js ランダムに講演情報を表示する</summary>

```javascript
document.getElementById('omikujiButton').addEventListener('click', function() {
  // 講演情報の配列を作成
  // ---公演情報ここから---
  const items = [
    {
      title: "ひろゆきと10人の学生エンジニア〜論破するのか、されるのか〜",
      time: "9月22日 17:15",
      company: "ひろゆき",
      hall: "A",
    },
    {
      title:
        "ビジネスに必要な全てを担い、自分の専門性を見つけ出すフルサイクル開発者のあり方",
      time: "9月22日 16:20",
      company: "株式会社CARTA HOLDINGS",
      hall: "A",
    }
  ];
  // ---公演情報ここまで---

  // おみくじの内容をランダムに変更
  const index = Math.floor(Math.random() * items.length);
  // おみくじの内容を画面に表示
  document.getElementById("omikujiTitle").textContent = items[index].title;
  document.getElementById("omikujiDetails").textContent =
    `${items[index].time}, ${items[index].company}, ホール: ${items[index].hall}`;

  document.getElementById("postToXButton").classList.remove("hidden");
});

```

</details>


3. 講演情報を全て読み込みます

<details>
<summary>5-3 script.js 公演情報をすべて読み込む</summary>

```javascript
  // 講演情報の配列を作成
  // ---公演情報ここから---
  const items = [
    {
      title: "ひろゆきと10人の学生エンジニア〜論破するのか、されるのか〜",
      time: "9月22日 17:15",
      company: "ひろゆき",
      hall: "A",
    },
    {
      title:
        "ビジネスに必要な全てを担い、自分の専門性を見つけ出すフルサイクル開発者のあり方",
      time: "9月22日 16:20",
      company: "株式会社CARTA HOLDINGS",
      hall: "A",
    },
    {
      title:
        "【開発責任者が語る】顧客が真に求めるものを作る面白さとプロの覚悟とは?",
      time: "9月22日 15:25",
      company: "ウイングアーク１ｓｔ株式会社",
      hall: "A",
    },
    {
      title:
        "VPoEが語る！！会社員（?）としてWebエンジニアを20年続ける話！(n=1)",
      time: "9月22日 14:30",
      company: "エン・ジャパン株式会社",
      hall: "B",
    },
    {
      title:
        "ウルトラポジショントーク 〜新卒最初のキャリアで◯◯◯の会社を狙え！？",
      time: "9月22日 14:30",
      company: "株式会社MIXI",
      hall: "A",
    },
    {
      title:
        "社内初のプロジェクトを1年目でリード！AI基盤をローンチし、事例紹介いただいた話",
      time: "9月22日 13:35",
      company: "合同会社DMM.com",
      hall: "B",
    },
    {
      title:
        "1年で会員数日本一！代表が語るchocoZAPのユーザーに寄り添った開発とは？",
      time: "9月22日 13:35",
      company: "RIZAPグループ株式会社",
      hall: "A",
    },
    {
      title:
        "『AIの進化とビジネス革新：サイバーエージェントが描く「未来のエンジニア像」』",
      time: "9月22日 12:40",
      company: "株式会社サイバーエージェント",
      hall: "A",
    },
    {
      title: "RedCoder のライブ競プロ ～競プロ世界ランカーのアルゴリズム改善～",
      time: "9月22日 11:30",
      company: "高橋 直大(chokudai)",
      hall: "B",
    },
    {
      title: "人工知能で火星に挑戦した話〜NASAエンジニアが語る夢の追い方〜",
      time: "9月22日 11:30",
      company: "小野 雅裕",
      hall: "A",
    },
    {
      title: "Rubyの父、Matz氏によるRubyライブコーディング",
      time: "9月21日 18:10",
      company: "まつもとゆきひろ",
      hall: "B",
    },
    {
      title:
        "AIエンジニアが政治家を目指してみた件〜テクノロジーは社会を変えるのか？〜",
      time: "9月21日 18:10",
      company: "安野 貴博",
      hall: "A",
    },
    {
      title: "最新版！新卒がIT企業選びをするための完全攻略法",
      time: "9月21日 17:15",
      company: "株式会社ゆめみ",
      hall: "A",
    },
    {
      title: "オブジェクト指向プログラミング実践のための橋渡し",
      time: "9月21日 16:20",
      company: "GMOインターネットグループ",
      hall: "A",
    },
    {
      title: "メーカーにおけるデータサイエンティストの働き方について",
      time: "9月21日 15:25",
      company: "株式会社村田製作所",
      hall: "C",
    },
    {
      title:
        "さくらインターネットの技術執行役員が語る！ソフトウェア無線を使った無線解析",
      time: "9月21日 15:25",
      company: "さくらインターネット株式会社",
      hall: "B",
    },
    {
      title: "人材企業【doda】が伝える本当の会社選びとは？",
      time: "9月21日 15:25",
      company: "パーソルキャリア株式会社",
      hall: "A",
    },
    {
      title: "2400万DL数を突破したタクシーアプリ『GO』の開発秘話とこれから",
      time: "9月21日 14:30",
      company: "GO株式会社",
      hall: "C",
    },
    {
      title:
        "技育プロジェクト出身者が語る、プロダクトエンジニアとしての第一歩の踏み出し方",
      time: "9月21日 14:30",
      company: "セーフィー株式会社",
      hall: "B",
    },
    {
      title:
        "ITコンサルが改善するのはビジネスだけじゃない！サークル的活動で業界貢献",
      time: "9月21日 14:30",
      company: "フューチャー株式会社（フューチャーアーキテクト株式会社）",
      hall: "A",
    },
    {
      title: "Go Bold in Your Career 大胆なチャレンジでキャリアを築く",
      time: "9月21日 13:35",
      company: "株式会社メルカリ",
      hall: "C",
    },
    {
      title:
        "社内開発の裏側を公開!! 3ヶ月で予約制駐車場＆QRコード決済機能を作った話。",
      time: "9月21日 13:35",
      company: "パーク２４株式会社",
      hall: "B",
    },
    {
      title: "生成AIの波とプロダクト変化、エンジニアの向き合い方",
      time: "9月21日 13:35",
      company: "株式会社LayerX",
      hall: "A",
    },
    {
      title: "DeNA創業者南場智子が考えるエンジニアキャリア",
      time: "9月21日 12:40",
      company: "株式会社ディー・エヌ・エー",
      hall: "A",
    },
  ];
  // ---公演情報ここまで---
```

</details>

---

## 第6章: ルーレット形式のアニメーション追加

### 手順

1. `script.js` に以下のJSをコピーして貼り付けます。

公演情報以外のコードをすべて以下のコードに書き換えます。

<details>
<summary>script.js ルーレット形式のアニメーション</summary>

```javascript
document.getElementById('omikujiButton').addEventListener('click', function() {
  // 講演情報の配列を作成
  // ---公演情報ここから---

  // 省略

  // ---公演情報ここまで---

  // ボタンを読み込む
  const omikujiButton = document.getElementById("omikujiButton");
  const postToXButton = document.getElementById("postToXButton");

  // ボタンの初期設定
  omikujiButton.disabled = true; // おみくじボタンを無効化
  postToXButton.classList.add("hidden"); // ポストボタンを非表示にする

  // スピン処理に必要な変数を作成
  let index = 0; // 現在の公演情報を保持
  let count = 0; // 現在の回転数を保持
  let maxCount = 20; // 最大回転回数
  let speed = 50; // 初期回転速度

  // ---スピン処理ここから---
  function spin() {
    if (count < maxCount) {
      // おみくじの内容をランダムに変更
      index = Math.floor(Math.random() * items.length);

      // おみくじの内容を画面に表示
      document.getElementById("omikujiTitle").textContent = items[index].title;
      document.getElementById("omikujiDetails").textContent =
        `${items[index].time}, ${items[index].company}, ホール: ${items[index].hall}`;

      count++;

      // 回転の速度を徐々に遅くする
      speed += 5;
      setTimeout(spin, speed); // 繰り返す
    } else {
      // 最終結果の公演情報を取得
      const finalItem = items[index];
      // 最終結果の表示
      document.getElementById("omikujiTitle").textContent = finalItem.title;
      document.getElementById("omikujiDetails").textContent =
        `${finalItem.time}, ${finalItem.company}, ホール: ${finalItem.hall}`;

      // ボタンを有効化/表示する設定
      omikujiButton.disabled = false; // おみくじボタンを有効化
      postToXButton.classList.remove("hidden"); // ポストボタンを表示
    }
  }
  // ---スピン処理ここまで---

  // スピン処理開始
  spin();
});
```

</details>

2. 回転数や速度の数値を書き換えて、アニメーション速度を調整してみましょう。

---

## 第7章: Xにポストする機能の追加

### 手順

`script.js` に以下の2つのJSをコピーして貼り付けます。

<details>
<summary>7-1 script.js Xにポストする関数を一番下に追加</summary>

講演おみくじは自分でデプロイしたURLに書き換えます。

```javascript
function postToX(finalItem) {
  const postText = `#技育祭 #講演おみくじ の結果は\n 「${finalItem.title}」でした！\n\n講演おみくじはこちら\nhttps://自分のURL\n\n技育祭の視聴申込はこちら\nhttps://talent.supporterz.jp/geeksai/2024autumn/`;

  // 改行を含むテキストをURLエンコード
  const encodedText = encodeURIComponent(postText);

  // X投稿用のURLを生成
  const postUrl = `https://x.com/intent/tweet?text=${encodedText}`;

  // 新しいウィンドウでツイートページを開く
  window.open(postUrl, "_blank");
}
```

</details>

<details>
<summary>7-2 script.js spin処理を書き換える</summary>

```javascript
  // ---スピン処理ここから---
  function spin() {
    if (count < maxCount) {
      // おみくじの内容をランダムに変更
      index = Math.floor(Math.random() * items.length);

      // おみくじの内容を画面に表示
      document.getElementById("omikujiTitle").textContent = items[index].title;
      document.getElementById("omikujiDetails").textContent =
        `${items[index].time}, ${items[index].company}, ホール: ${items[index].hall}`;

      count++;

      // 回転の速度を徐々に遅くする
      speed += 5;
      setTimeout(spin, speed); // 繰り返す
    } else {
      // 最終結果の公演情報を取得
      const finalItem = items[index];
      // 最終結果の表示
      document.getElementById("omikujiTitle").textContent = finalItem.title;
      document.getElementById("omikujiDetails").textContent =
        `${finalItem.time}, ${finalItem.company}, ホール: ${finalItem.hall}`;

      // ボタンを有効化/表示する設定
      omikujiButton.disabled = false; // おみくじボタンを有効化
      postToXButton.classList.remove("hidden"); // ポストボタンを表示
      postToXButton.disabled = false; // ポストボタンを有効化

      // Xにポストするボタンを押したときの処理開始
      postToXButton.addEventListener("click", function () {
        // Xにポスト
        postToX(finalItem);
      });
    }
  }
  // ---スピン処理ここまで---
```
</details>

---

## おまけ: CSSを編集してリッチな画面に仕上げよう

### 手順

1. `styles.css` に、以下の基本的なCSSをコピーして貼り付けます。

<details>
<summary>styles.css スマホ版対応のCSSを一番下に追加</summary>

```css
/* スマホ版対応 */
@media (max-width: 600px) {
  h1 {
    font-size: 1.5rem; /* スマホ画面での見出しのフォントサイズを縮小 */
    padding: 0.5rem 0; /* 上下の余白も縮小 */
  }

  #omikuji {
    font-size: 1rem;
    padding: 5px;
    width: 100%;
  }

  #omikujiTitle {
    font-size: 1.2rem;
  }

  #omikujiDetails {
    font-size: 1rem;
  }

  button {
    width: 100%;
    margin-bottom: 10px;
  }
}
```

</details>

2. 自分好みの見た目に編集します。

色を変えたり、ボタンの形を変えたり自由に編集します。
