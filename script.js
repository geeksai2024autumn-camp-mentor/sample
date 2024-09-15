// omikujiButtonがクリックされたとき
document.getElementById("omikujiButton").addEventListener("click", function () {
  // omikujiTitleをサンプルテキスト1に変更、omikujiDetailsをサンプルテキスト2に変更する
  document.getElementById("omikujiTitle").textContent = "サンプルテキスト1";
  document.getElementById("omikujiDetails").textContent = "サンプルテキスト2";

  // postToXButtonボタンのhiddenを削除し、画面に表示させる
  document.getElementById("postToXButton").classList.remove("hidden");
});
