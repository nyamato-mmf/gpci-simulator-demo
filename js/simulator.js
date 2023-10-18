
// 言語 ("en"/"jp") および 年次設定
const lang = "en"
const year = "2023"
const path = "./json/gpci" + year +"_" + lang + ".json"

/* ----------------------------------------------------------------------------
　使用方法（ヘルプメニュー）
---------------------------------------------------------------------------- */

switch (lang) {
  case "en":
    document.getElementById("desc1").textContent = "The GPCI Simulator allows a user to change indicator scores of a certain city to simulate changes in the GPCI ranking.";
    document.getElementById("desc2").textContent = "How to use the simulator";
    document.getElementById("desc3").textContent = "1. Select a city from the drop-down menu and press 'Show scores' button.";
    document.getElementById("desc4").textContent = "2. Change scores between 0 and 100.";
    document.getElementById("desc5").textContent = "3. Press the 'Simulate' button.";
    document.getElementById("desc6").textContent = "4. Press the 'Reset' button to restart.";
    document.getElementById("show").value = "Show scores";
    document.getElementById("sim").value = "Simulate";
    document.getElementById("reset").value = "Reset";
    document.getElementById("table-header1").textContent = "Indicator";
    document.getElementById("table-header2").textContent = "Score";
    break;
  case "jp":
    document.getElementById("desc1").textContent = "選択した都市の指標スコアを変更することで、GPCIにおける順位変動をシミュレーションすることができます。";
    document.getElementById("desc2").textContent = "シミュレータの使い方";
    document.getElementById("desc3").textContent = "1. メニューから都市を選択し、「スコア表示」ボタンを押します。";
    document.getElementById("desc4").textContent = "2. 0点から100点の間でスコアを変更します。";
    document.getElementById("desc5").textContent = "3.「シミュレーション」ボタンを押します。";
    document.getElementById("desc6").textContent = "4.「リセット」ボタンを押すと、初期値に戻ります。";
    document.getElementById("show").value = "スコア表示";
    document.getElementById("sim").value = "シミュレーション";
    document.getElementById("reset").value = "リセット";
    document.getElementById("table-header1").textContent = "指標";
    document.getElementById("table-header2").textContent = "スコア";
    break;
}

/* ----------------------------------------------------------------------------
　モーダル
---------------------------------------------------------------------------- */
const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

// アイコンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

// X印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
}

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
if (e.target == modal) {
  modal.style.display = 'none';
}
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
	success: function(json) {
		gpci_all4ini = json;
	}
});

let gpci_all4sim = [];
$.ajax({
	url: path,
	dataType: 'json',
	async: false,
	success: function(json) {
		gpci_all4sim = json;
	}
});

/* ----------------------------------------------------------------------------
　レイアウト設定
---------------------------------------------------------------------------- */
// 対象都市のセレクトリスト：文字列リテラルでリスト作成
for (let item of gpci_all4ini) {
    const option = `<option value=${item["City Name"]}>${item["City Name"]}</option>`
    document.getElementById("city").insertAdjacentHTML("beforeend", option);
}; 

// 指標リスト：スコアデータから指標#1-70の部分を抽出する。
var indicators = Object.keys(gpci_all4ini[0]).slice(1,71)

// スコアテーブル：文字列リテラルで作成（条件分岐で経済指標に「style="display: table-row;"」を付与）
for (let item of indicators) {
    if (item.split("_")[2] === "Ec"){
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
jQuery(function() {

  // 初期設定
  $(".open:first").css("display","none");
  $(".close:not(:first)").css("display","none");

  // イベント処理（openボタン押下）
  $(".open").on("click", function() {
    $(".open").css("display","");
    $(".close").css("display","none");

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
  $(".close").on("click", function() {
    
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
jQuery(function(){
  var cell = $('.inputTable');
  cell.change(function(){
  $(this).addClass('active');
  });
});

/* ----------------------------------------------------------------------------
　凡例
---------------------------------------------------------------------------- */
// 凡例のリスト（日英）
const legends = [
    {"Ec_legend":["Economy","経済"]},
    {"Re_legend":["Research and Development","研究・開発"]},
    {"Cu_legend":["Cultural Interaction","文化・交流"]},
    {"Li_legend":["Livability","居住"]},
    {"En_legend":["Environment","環境"]},
    {"Ac_legend":["Accessibility","交通・アクセス"]}
]

// 文字列リテラルで凡例を作成（条件分岐で日英切替）
for (j of legends) {
  switch (lang) {
    case "en":
      const legend_en = `<li class="${Object.keys(j)[0]}">${Object.values(j)[0][0]}</li>`
      document.getElementById("legend-list").insertAdjacentHTML("beforeend",legend_en)
      break;
    case "jp":
      const legend_jp = `<li class="${Object.keys(j)[0]}">${Object.values(j)[0][1]}</li>`
      document.getElementById("legend-list").insertAdjacentHTML("beforeend",legend_jp)
      break;
  }
}

/* ----------------------------------------------------------------------------
　アラート：入力ミスの際にメッセージ
---------------------------------------------------------------------------- */
jQuery("input[type=number]").on("change", function(event){
    var val = this.value;
    if (val > 100 || val < 0) {
      switch (lang) {
        case "en":
          window.alert("Please enter numbers between 0 and 100.")
          document.getElementById(event.target.id).value = 0
          break;
        case "jp":
          window.alert("0点から100点の間でスコアを入力してください。")
          document.getElementById(event.target.id).value = 0
          break;
      }
    }
});

/* ----------------------------------------------------------------------------
　イニシャル・グラフ描画
---------------------------------------------------------------------------- */
// スコアデータから指標#1-70の部分を抽出する。
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
gpci_initial.sort((a,b) => b["Comprehensive"] - a["Comprehensive"])

// GPCI分野名の配列を作成する。
const subgroups = ["Economy","R&D","Cultural Interaction","Livability","Environment","Accessibility"]

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
  .style("font-size",12)
  .call(d3.axisLeft(y).tickSizeOuter(0))

// カラー配列を用意する。
const color = d3.scaleOrdinal()
  .domain(subgroups)
  .range(['rgba(189,178,255,1)', 'rgba(160,196,255,1)', 'rgba(255,198,255,1)','rgba(155,246,255,1)', 'rgba(202,255,191,1)', 'rgba(255,214,165,1)'])

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
  .attr("x", d => x(d.data["Comprehensive"]*1.01)) // 横棒グラフの右側に合計スコアラベル
  .attr("y", d => y(d.data["City Name"]) + y.bandwidth()-1) // 上下位置の調整
  .text(d => parseFloat(d.data["Comprehensive"]).toFixed(0))
  .attr("fill", "gray")
  .attr("font-family", "Helvetica")
  .attr("font-size", "10px")
  .attr("text-anchor", "top");

/* ----------------------------------------------------------------------------
　都市の選択とスコア表示
---------------------------------------------------------------------------- */
function selectCity() {
  const target = document.getElementById("city").value;
  const targetScore = gpci_all4ini.find(item => item["City Name"] === target);
  
  if (targetScore) {
    const fieldsToDelete = ["City Name", "Economy", "R&D", "Cultural Interaction", "Livability", "Environment", "Accessibility", "Comprehensive"];
    fieldsToDelete.forEach(field => delete targetScore[field]);

    for (const key in targetScore) {
      document.getElementById("id_" + key.split("_")[0]).value = parseFloat(targetScore[key]).toFixed(1);
    }

    svg.selectAll("text")
      // 三項演算子（条件式 ? Trueの処理 : Falseの処理）
      .attr("fill", d => d === target ? "red" : "gray");
  }
}

/* ----------------------------------------------------------------------------
　シミュレーション
---------------------------------------------------------------------------- */
function draw(){

  // 対象都市を取得する。
  const target = document.getElementById("city").value;

  //===== 不要なプロパティ（keys & values）を削除する。=====//
  // 削除するキーの配列を用意する。
  const keysToDelete = [
    "Economy",
    "R&D",
    "Cultural Interaction",
    "Livability",
    "Environment",
    "Accessibility",
    "Comprehensive"
  ];

  // 不要なプロパティを削除する。
  gpci_all4sim.forEach((item) => {
    keysToDelete.forEach((key) => delete item[key]);
  });

  // 対象都市のデータを抽出する。
  const sim_gpci = gpci_all4sim.filter((item) => item["City Name"] === target);
    
  // 対象都市のデータをオブジェクトにする。
  const obj = Object.keys(sim_gpci[0]);
  for (let k = 1; k < obj.length; k++) {
    const key = obj[k];
    const id = "id_" + key.split("_")[0];
    sim_gpci[0][key] = parseFloat(document.getElementById(id).value);
  }

  // =====  指標グループスコア計算 ===== // 
  let gpci_idg = gpci_all4sim.map(cityData => {
    const arr = { "City Name": cityData["City Name"] };
  
    for (let j in cityData) {
      if (j === "City Name") {
        continue;
      }
      const key = j.split("_")[1] || j;
      const values = cityData[j];
  
      if (!Array.isArray(arr[key])) {
        arr[key] = [];
      }
      arr[key].push(values);
    }
  
    for (let key in arr) {
      if (key === "City Name") {
        continue;
      }
      arr[key] = arr[key].reduce((sum, element) => sum + element, 0) / arr[key].length;
    }
    
    return arr;
  });
  

  // =====  分野別スコア計算 ===== // 
  const gpci_f = gpci_idg.map(cityData => {
    const Ec = ["Ec1", "Ec2", "Ec3", "Ec4", "Ec5", "Ec6"].reduce((sum, key) => sum + cityData[key], 0);
    const Re = ["Re1", "Re2", "Re3"].reduce((sum, key) => sum + cityData[key], 0);
    const Cu = ["Cu1", "Cu2", "Cu3", "Cu4", "Cu5"].reduce((sum, key) => sum + cityData[key], 0);
    const Li = ["Li1", "Li2", "Li3", "Li4", "Li5"].reduce((sum, key) => sum + cityData[key], 0);
    const En = ["En1", "En2", "En3"].reduce((sum, key) => sum + cityData[key], 0);
    const Ac = ["Ac1", "Ac2", "Ac3", "Ac4"].reduce((sum, key) => sum + cityData[key], 0);
  
    return {
      "City Name": cityData["City Name"],
      "Economy": Ec,
      "R&D": Re,
      "Cultural Interaction": Cu,
      "Livability": Li,
      "Environment": En,
      "Accessibility": Ac,
    };
  });
  
  // =====  総合スコア計算 ===== // 
  const gpci_sim = gpci_f.map(cityData => {
    const comprehensive = (cityData["Economy"] + cityData["R&D"] + cityData["Cultural Interaction"] + cityData["Livability"] + cityData["Environment"] + cityData["Accessibility"]).toFixed(1);
    return { ...cityData, "Comprehensive": parseFloat(comprehensive) };
  });


/* ----------------------------------------------------------------------------
　シミュレーション・グラフ描画
---------------------------------------------------------------------------- */  
  // Remove the initial rect
  var elements = document.getElementsByTagName("rect")
  while (elements.length) {
    elements.item(0).remove()
  };

  // Remove the initial text
  var texts = document.getElementsByTagName("text")
  while (texts.length) {
    texts.item(0).remove()
  };

  // Sort by total scores
  gpci_sim.sort((a,b) => b["Comprehensive"] - a["Comprehensive"])
  

  // List of subgroups = header of the csv files = soil condition here
  const subgroups = ["Economy","R&D","Cultural Interaction","Livability","Environment","Accessibility"]

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  const groups = gpci_sim.map(d => (d["City Name"]))

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
    .style("font-size",12)
    .call(d3.axisLeft(y).tickSizeOuter(0));

  // カラー配列を用意する。
  const color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['rgba(189,178,255,1)', 'rgba(160,196,255,1)', 'rgba(255,198,255,1)','rgba(155,246,255,1)', 'rgba(202,255,191,1)', 'rgba(255,214,165,1)'])


  // 積み上げ横棒グラフ用のデータを用意する。
  const stackedData = d3.stack()
    .keys(subgroups)
    (gpci_sim)

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
    .attr("x", d => x(d.data["Comprehensive"]*1.01))
    .attr("y", d => y(d.data["City Name"]) + y.bandwidth()-1)
    .text(d => parseFloat(d.data["Comprehensive"]).toFixed(0))
    .attr("fill", "gray")
    .attr("font-family", "Arial")
    .attr("font-size", "10px")
    .attr("text-anchor", "top");


  // 対象都市の都市名のカラーを変更する。
  svg.selectAll("text")
  .attr("fill", function(d){
    var item = d;
    if (item === target) {
      return "red";
    } else {
      return "gray";}
  });

};

