
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

/* ----------------------------------------------------------------------------
 凡例
---------------------------------------------------------------------------- */
// 凡例のリスト（日英）
const legends = [
    { "Ec_legend": ["Economy", "経済"] },
    { "Re_legend": ["Research and Development", "研究・開発"] },
    { "Cu_legend": ["Cultural Interaction", "文化・交流"] },
    { "Li_legend": ["Livability", "居住"] },
    { "En_legend": ["Environment", "環境"] },
    { "Ac_legend": ["Accessibility", "交通・アクセス"] }
]

// テンプレート文字列で凡例を作成（条件分岐で日英切替）
for (j of legends) {
    switch (lang) {
        case "en":
            const legend_en = `<li class="${Object.keys(j)[0]}">${Object.values(j)[0][0]}</li>`
            document.getElementById("legend-list").insertAdjacentHTML("beforeend", legend_en)
            break;
        case "jp":
            const legend_jp = `<li class="${Object.keys(j)[0]}">${Object.values(j)[0][1]}</li>`
            document.getElementById("legend-list").insertAdjacentHTML("beforeend", legend_jp)
            break;
    }
}


// ここから
/* ----------------------------------------------------------------------------
 イニシャル・グラフ描画
---------------------------------------------------------------------------- */
// スコアデータから総合スコアの部分を抽出する。
let gpci_initial = gpci_all4ini.map(item => ({
    "City Name": item["City Name"],
    "Economy": item["Economy"],
    "R&D": item["R&D"],
    "Cultural Interaction": item["Cultural Interaction"],
    "Livability": item["Livability"],
    "Environment": item["Environment"],
    "Accessibility": item["Accessibility"],
    "Comprehensive": item["Comprehensive"]
}));

// グラフサイズの設定
const margin = { top: 30, right: 30, bottom: 20, left: 100 };
let width = 460 - margin.left - margin.right;
const height = 800 - margin.top - margin.bottom;

// スマホ用のwidth設定
const sw = window.screen.width
if (sw < 800) {
    width = (sw - 30) - margin.left - margin.right;
}

// svgオブジェクトをbodyに追加する。
const svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// 降順（GPCI順位）でソートする。
gpci_initial.sort((a, b) => b["Comprehensive"] - a["Comprehensive"])

// GPCI分野名の配列を作成する。
const subgroups = ["Economy", "R&D", "Cultural Interaction", "Livability", "Environment", "Accessibility"]

// 都市名の配列（ランク順）
const groups = gpci_initial.map(d => (d["City Name"]))

// X軸を描画する。
const x = d3.scaleLinear()
    .domain([0, 1800])
    .range([0, width]);
svg.append("g")
    .call(d3.axisTop(x));

// Y軸を描画する。
const y = d3.scaleBand()
    .domain(groups)
    .range([0, height])
    .padding([0.2])
svg.append("g")
    .attr("transform", `translate(0, 0)`)
    .style("font-size", 12)
    .call(d3.axisLeft(y).tickSizeOuter(0))

// カラー配列を用意する。
const color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['rgba(145,112,153,.8)', 'rgba(115,140,172,.8)', 'rgba(222,129,154,.8)', 'rgba(113,194,222,.8)', 'rgba(156,184,102,.8)', 'rgba(238,170,61,.8)'])

// 積み上げ横棒グラフ用のデータを用意する。
const stackedData = d3.stack()
    .keys(subgroups)
    (gpci_initial)

// 積み上げ横棒グラフを描画する。
svg.append("g")
    .selectAll("g")
    // Enter in the stack data = loop key per key = group per group
    .data(stackedData)
    .join("g")
    .attr("fill", d => color(d.key))
    .selectAll("rect")
    // enter a second time = loop subgroup per subgroup to add all rectangles
    .data(d => d)
    .join("rect")
    .attr("x", d => x(d[0]))
    .attr("y", d => y(d.data["City Name"]))
    .attr("width", d => x(d[1]) - x(d[0]))
    .attr("height", y.bandwidth())

// スコアを表示する。
svg.append("g")
    .selectAll("g")
    .data(stackedData)
    .join("g")
    .selectAll("text")
    .data(d => d)
    .join("text")
    .attr("x", d => x(d.data["Comprehensive"] * 1.01)) // 横棒グラフの右側に合計スコアラベル
    .attr("y", d => y(d.data["City Name"]) + y.bandwidth() - 1) // 上下位置の調整
    .text(d => parseFloat(d.data["Comprehensive"]).toFixed(1))
    .attr("fill", "gray")
    .attr("font-family", "Helvetica")
    .attr("font-size", "10px")
    .attr("text-anchor", "top");

// ここまで