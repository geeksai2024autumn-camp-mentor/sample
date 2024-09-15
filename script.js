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
      title: "2300万DL数を突破したタクシーアプリ『GO』の開発秘話とこれから",
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
    }
  ];

  // おみくじの内容をランダムに変更
  const index = Math.floor(Math.random() * items.length);
  // おみくじの内容を画面に表示
  document.getElementById("omikujiTitle").textContent = items[index].title;
  document.getElementById("omikujiDetails").textContent =
    `${items[index].time}, ${items[index].company}, ホール: ${items[index].hall}`;

    document.getElementById("postToXButton").classList.remove("hidden");
});
