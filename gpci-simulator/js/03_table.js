
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
        document.getElementById("table-header1").textContent = "Indicator";
        document.getElementById("table-header2").textContent = "Score";
        break;
    case "jp":
        document.getElementById("desc7").textContent = "-- 都市を選択 --";
        document.getElementById("show").value = "スコア表示";
        document.getElementById("sim").value = "シミュレーション";
        document.getElementById("reset").value = "リセット";
        document.getElementById("table-header1").textContent = "指標";
        document.getElementById("table-header2").textContent = "スコア";
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

// ここから
// 指標リスト：スコアデータから指標の部分を抽出する。
var indicators = Object.keys(gpci_all4ini[0]).slice(1, 71)

// スコアテーブル：テンプレート文字列で作成（条件分岐で経済指標に「style="display: table-row;"」を付与）
for (let item of indicators) {
    if (item.split("_")[2] === "Ec") {
        const tr = `<tr class="indicator heading_${item.split("_")[2]}" style="display: table-row;">
                      <th class="th_${item.split("_")[2]}">${item.split("_")[3]}</th>
                      <td class="td_${item.split("_")[2]}">
                        <input id="id_${item.split("_")[0]}" type="number" min="0" max="100" class="inputTable">
                      </td>
                    </tr>`
        document.getElementById("indicators").insertAdjacentHTML("beforeend", tr);
    } else {
        const tr = `<tr class="indicator heading_${item.split("_")[2]}">
                      <th class="th_${item.split("_")[2]}">${item.split("_")[3]}</th>
                      <td class="td_${item.split("_")[2]}">
                        <input id="id_${item.split("_")[0]}" type="number" min="0" max="100" class="inputTable">
                      </td>
                    </tr>`
        document.getElementById("indicators").insertAdjacentHTML("beforeend", tr);
    }
};

// スコアテーブルに分野名のヘディングを挿入する（条件分岐で日英切替）。
switch (lang) {
    case "en":
        var Ec_heading = '<tr class="function"><th colspan="2" class="Ec"><span class="open">＋</span><span class="close">－</span>Economy</th></tr>'
        document.getElementsByClassName("heading_Ec")[0].insertAdjacentHTML("beforebegin", Ec_heading)
        var Re_heading = '<tr class="function"></th><th colspan="2" class="Re"><span class="open">＋</span><span class="close">－</span>Research and Development</th></tr>'
        document.getElementsByClassName("heading_Re")[0].insertAdjacentHTML("beforebegin", Re_heading)
        var Cu_heading = '<tr class="function"></th><th colspan="2" class="Cu"><span class="open">＋</span><span class="close">－</span>Cultural Interaction</th></tr>'
        document.getElementsByClassName("heading_Cu")[0].insertAdjacentHTML("beforebegin", Cu_heading)
        var Li_heading = '<tr class="function"></th><th colspan="2" class="Li"><span class="open">＋</span><span class="close">－</span>Livability</th></tr>'
        document.getElementsByClassName("heading_Li")[0].insertAdjacentHTML("beforebegin", Li_heading)
        var En_heading = '<tr class="function"></th><th colspan="2" class="En"><span class="open">＋</span><span class="close">－</span>Environment</th></tr>'
        document.getElementsByClassName("heading_En")[0].insertAdjacentHTML("beforebegin", En_heading)
        var Ac_heading = '<tr class="function"></th><th colspan="2" class="Ac"><span class="open">＋</span><span class="close">－</span>Accesibility</th></tr>'
        document.getElementsByClassName("heading_Ac")[0].insertAdjacentHTML("beforebegin", Ac_heading)
        break;
    case "jp":
        var Ec_heading = '<tr class="function"></th><th colspan="2" class="Ec"><span class="open">＋</span><span class="close">－</span>経済</th></tr>'
        document.getElementsByClassName("heading_Ec")[0].insertAdjacentHTML("beforebegin", Ec_heading)
        var Re_heading = '<tr class="function"></th><th colspan="2" class="Re"><span class="open">＋</span><span class="close">－</span>研究・開発</th></tr>'
        document.getElementsByClassName("heading_Re")[0].insertAdjacentHTML("beforebegin", Re_heading)
        var Cu_heading = '<tr class="function"></th><th colspan="2" class="Cu"><span class="open">＋</span><span class="close">－</span>文化・交流</th></tr>'
        document.getElementsByClassName("heading_Cu")[0].insertAdjacentHTML("beforebegin", Cu_heading)
        var Li_heading = '<tr class="function"></th><th colspan="2" class="Li"><span class="open">＋</span><span class="close">－</span>居住</th></tr>'
        document.getElementsByClassName("heading_Li")[0].insertAdjacentHTML("beforebegin", Li_heading)
        var En_heading = '<tr class="function"></th><th colspan="2" class="En"><span class="open">＋</span><span class="close">－</span>環境</th></tr>'
        document.getElementsByClassName("heading_En")[0].insertAdjacentHTML("beforebegin", En_heading)
        var Ac_heading = '<tr class="function"></th><th colspan="2" class="Ac"><span class="open">＋</span><span class="close">－</span>交通・アクセス</th></tr>'
        document.getElementsByClassName("heading_Ac")[0].insertAdjacentHTML("beforebegin", Ac_heading)
        break;
}


/* ----------------------------------------------------------------------------
 アコーディオンパネル（分野別スコアの表示/非表示切り替え）
---------------------------------------------------------------------------- */
jQuery(function () {

    // 初期設定
    $(".open:first").css("display", "none");
    $(".close:not(:first)").css("display", "none");

    // イベント処理（openボタン押下）
    $(".open").on("click", function () {
        $(".open").css("display", "");
        $(".close").css("display", "none");

        // 要素を取得する。
        var parent = $(this).parents(".function");
        var children = parent.nextUntil(".function").filter(".indicator")

        // 表示を切り替える。
        $(".indicator").hide()
        children.toggle(children.first().is(":hidden"))

        // +/-ラベルを切り替える。
        $(this).hide();
        $(this).next().show();
    });

    // イベント処理（closeボタン押下）
    $(".close").on("click", function () {

        // 要素を取得する。
        var parent = $(this).parents(".function");
        var children = parent.nextUntil(".function").filter(".indicator")

        // 表示を切り替える。
        $(".indicator").hide()
        //children.toggle(children.first().is(":hidden"))

        // +/-ラベルを切り替える。
        $(this).hide();
        $(this).prev().show();
    });
});

// 数値変更セルのハイライト
jQuery(function () {
    var cell = $('.inputTable');
    cell.change(function () {
        $(this).addClass('active');
    });
});
// ここまで