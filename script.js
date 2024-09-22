document.getElementById('omikujiButton').addEventListener('click', function() {
  // 講演情報の配列を作成
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
    }
  ];

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
      postToXButton.disabled = false; // ポストボタンを有効化

      // Xにポストするボタンを押したときの処理開始
      postToXButton.addEventListener("click", function () {
        // Xにポスト
        postToX(finalItem);
      });
    }
  }
  // ---スピン処理ここまで---

  // スピン処理開始
  spin();
});

function postToX(finalItem) {
  const postText = `#技育祭 #講演おみくじ の結果は\n 「${finalItem.title}」でした！\n\n講演おみくじはこちら\nhttps://geeksai2024autumn-camp-mentor.github.io/sample/\n\n技育祭の視聴申込はこちら\nhttps://talent.supporterz.jp/geeksai/2024autumn/`;

  // 改行を含むテキストをURLエンコード
  const encodedText = encodeURIComponent(postText);

  // X投稿用のURLを生成
  const postUrl = `https://x.com/intent/tweet?text=${encodedText}`;

  // 新しいウィンドウでツイートページを開く
  window.open(postUrl, "_blank");
}
