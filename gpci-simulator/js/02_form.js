
// 年次設定（言語 ("en"/"ja") は<html>のlang属性で設定 ）
const year = "2023"
let lang = document.documentElement.lang === "ja" ? "jp" : document.documentElement.lang;
const path = "./json/gpci" + year + "_" + lang + ".json"

/* ----------------------------------------------------------------------------
 使用方法（ヘルプメニュー）
---------------------------------------------------------------------------- */

switch (lang) {
    case "en":
        document.getElementById("desc7").textContent = "-- Select a city --";
        document.getElementById("show").value = "Show scores";
        document.getElementById("sim").value = "Simulate";
        document.getElementById("reset").value = "Reset";
        break;
    case "jp":
        document.getElementById("desc7").textContent = "-- 都市を選択 --";
        document.getElementById("show").value = "スコア表示";
        document.getElementById("sim").value = "シミュレーション";
        document.getElementById("reset").value = "リセット";
        break;
}

/* ----------------------------------------------------------------------------
 GPCIデータ読み込み
---------------------------------------------------------------------------- */
// AjaxでJSONデータをロードする(同期処理(async:false))
let gpci_all4ini = [];
$.ajax({
    url: path,
    dataType: 'json',
    async: false,
    success: function (json) {
        gpci_all4ini = json;
    }
});

let gpci_all4sim = [];
$.ajax({
    url: path,
    dataType: 'json',
    async: false,
    success: function (json) {
        gpci_all4sim = json;
    }
});


/* ----------------------------------------------------------------------------
 レイアウト設定
---------------------------------------------------------------------------- */
// 対象都市のセレクトリスト：テンプレート文字列でリスト作成
for (let item of gpci_all4ini) {
    const option = `<option value=${item["City Name"]}>${item["City Name"]}</option>`
    document.getElementById("city").insertAdjacentHTML("beforeend", option);
};

