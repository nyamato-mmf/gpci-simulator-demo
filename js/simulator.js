
// 言語設定
const lang = "en"
const path = "./json/gpci2023_" + lang + ".json"

/* ----------------------------------------------------------------------------
　日本語・英語切替
---------------------------------------------------------------------------- */

if (lang === "en") {
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
} else if (lang === "jp") {
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
}

/* ----------------------------------------------------------------------------
　モーダル
---------------------------------------------------------------------------- */
const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

// ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
}

// バツ印がクリックされた時
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
// AjaxでJSONデータをロードする（同期処理）
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
// 対象都市リスト：文字列リテラルでリスト作成
for (let item of gpci_all4ini) {
    const option = `<option value=${item["City Name"]}>${item["City Name"]}</option>`
    document.getElementById("city").insertAdjacentHTML("beforeend", option);
}; 

// 指標リスト：スコアデータから指標#1-70の部分を抽出する。
var indicators = Object.keys(gpci_all4ini[0]).slice(1,71)

// スコアテーブル：文字列リテラルで作成（条件分岐で経済指標に「style="display: table-row;"」を付与）
for (let item of indicators) {
    if (item.split("_")[2] === "Ec"){
        const tr = `<tr class="indicator heading_${item.split("_")[2]}" style="display: table-row;"><th class="th_${item.split("_")[2]}">${item.split("_")[3]}</th><td class="td_${item.split("_")[2]}"><input id="id_${item.split("_")[0]}" type="number" min="0" max="100" class="inputTable"></td></tr>`
        document.getElementById("indicators").insertAdjacentHTML("beforeend", tr);
    } else {
        const tr = `<tr class="indicator heading_${item.split("_")[2]}"><th class="th_${item.split("_")[2]}">${item.split("_")[3]}<td class="td_${item.split("_")[2]}"><input id="id_${item.split("_")[0]}" type="number" min="0" max="100" class="inputTable"></td></tr>`
        document.getElementById("indicators").insertAdjacentHTML("beforeend", tr);
    }
}; 

// スコアテーブルに分野名のヘディングを挿入する（条件分岐で日英切替）。
if (lang === "en") {
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
} else if (lang === "jp") {
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

// セルのハイライト：Highlight edited cells in gray
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
    if (lang === "en") {
        const legend = `<li class="${Object.keys(j)[0]}">${Object.values(j)[0][0]}</li>`
        document.getElementById("legend-list").insertAdjacentHTML("beforeend",legend)
    } else if (lang === "jp") {
        const legend = `<li class="${Object.keys(j)[0]}">${Object.values(j)[0][1]}</li>`
        document.getElementById("legend-list").insertAdjacentHTML("beforeend",legend)
    }
}

/* ----------------------------------------------------------------------------
　アラート：Alart message if the input number is inappropriate
---------------------------------------------------------------------------- */
jQuery("input[type=number]").on("change", function(event){
    var val = this.value;
    if (val > 100 || val < 0) {
    window.alert("Please enter numbers between 0 and 100.")
    document.getElementById(event.target.id).value = 0
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

  // set the dimensions and margins of the graph
  const margin = { top: 30, right: 30, bottom: 20, left: 100 };
  let width = 460 - margin.left - margin.right;
  const height = 800 - margin.top - margin.bottom;
    
  // スマホ用のwidth設定
  const sw = window.screen.width
  if (sw < 800) {
    width = (sw - 30) - margin.left - margin.right;      
  }
  
  // append the svg object to the body of the page
  const svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);


  // 降順でソートする。
  gpci_initial.sort((a,b) => b["Comprehensive"] - a["Comprehensive"])
  
  // totalの要素を削除する。
  //gpci_initial.map((item) => delete item["Total"])

  // List of subgroups = header of the csv files = soil condition here
  const subgroups = ["Economy","R&D","Cultural Interaction","Livability","Environment","Accessibility"]

  // List of groups = species here = value of the first column called group -> I show them on the X axis
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
    .call(d3.axisLeft(y).tickSizeOuter(0));

  // カラーパレットを用意する。
  const color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['rgba(189,178,255,1)', 'rgba(160,196,255,1)', 'rgba(255,198,255,1)','rgba(155,246,255,1)', 'rgba(202,255,191,1)', 'rgba(255,214,165,1)'])


  // 積み上げ棒グラフ用のデータを用意する。
  const stackedData = d3.stack()
    .keys(subgroups)
    (gpci_initial)

  // 積み上げ棒グラフを描画する。
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
    .attr("x", d => x(d.data["Comprehensive"]*1.01)) // Center text within the bar
    .attr("y", d => y(d.data["City Name"]) + y.bandwidth()-1) // Center text vertically
    .text(d => parseFloat(d.data["Comprehensive"]).toFixed(0))
    .attr("fill", "gray")
    .attr("font-family", "Helvetica")
    .attr("font-size", "9px")
    .attr("text-anchor", "top"); // Center-align text

/* ----------------------------------------------------------------------------
　都市の選択とスコア表示
---------------------------------------------------------------------------- */
function selectCity(){
  
    // 対象都市のデータを抽出する（オブジェクト）。
	var target = document.getElementById("city").value;
    let targetScore = gpci_all4ini.filter(function(item, index){
        if (item["City Name"] === target) return true;
    });
      
    // オブジェクトから対象都市名のプロパティを削除する。
    targetScore.map((item) => delete item["City Name"])
    targetScore.map((item) => delete item["Economy"])
    targetScore.map((item) => delete item["R&D"])
    targetScore.map((item) => delete item["Cultural Interaction"])
    targetScore.map((item) => delete item["Livability"])
    targetScore.map((item) => delete item["Environment"])
    targetScore.map((item) => delete item["Accessibility"])
    targetScore.map((item) => delete item["Comprehensive"])
    
    // 対象都市のデータをテーブルに表示する。
    for (let i in targetScore[0]) {
      document.getElementById("id_"+i.split("_")[0]).value = parseFloat(targetScore[0][i]).toFixed(1);
    }
      
    // 対象都市の都市名のカラーを変更する。
    svg.selectAll("text")
    .attr("fill", function(d){
      var item = d;
      if (item === target) {
        return "red";
      } else {
        return "gray";}
    });
 
}


/* ----------------------------------------------------------------------------
　シミュレーション
---------------------------------------------------------------------------- */
function draw(){

  const target = document.getElementById("city").value;
  const keysToDelete = [
    "Economy",
    "R&D",
    "Cultural Interaction",
    "Livability",
    "Environment",
    "Accessibility",
    "Comprehensive"
  ];

  // Remove unnecessary properties
  gpci_all4sim.forEach((item) => {
    keysToDelete.forEach((key) => delete item[key]);
  });

  const sim_gpci = gpci_all4sim.filter((item) => item["City Name"] === target);
    
  // 対象都市のデータをテーブルに表示する。
  let k = 1;
  const obj = Object.keys(sim_gpci[0]);
  while (k < obj.length) {
    sim_gpci[0][obj[k]] = parseFloat(document.getElementById("id_"+obj[k].split("_")[0]).value);
    k++;
  }
  
  // Indicator group score
  let gpci_idg = [];
  const num_of_Cities = Object.values(gpci_all4sim).length;
  for (let i = 0; i < num_of_Cities; i++) {

    let arr = {};
    let tempEc1 = []
    let tempEc2 = []
    let tempEc3 = []
    let tempEc4 = []
    let tempEc5 = []
    let tempEc6 = []
    let tempRe1 = []
    let tempRe2 = []
    let tempRe3 = []
    let tempCu1 = []
    let tempCu2 = []
    let tempCu3 = []
    let tempCu4 = []
    let tempCu5 = []
    let tempLi1 = []
    let tempLi2 = []
    let tempLi3 = []
    let tempLi4 = []
    let tempLi5 = []
    let tempEn1 = []
    let tempEn2 = []
    let tempEn3 = []
    let tempAc1 = []
    let tempAc2 = []
    let tempAc3 = []
    let tempAc4 = []
          
    for (let j in gpci_all4sim[i]) {
      const key = j.split("_")[1] ? j.split("_")[1] : j; //三項演算子で「_」が存在する場合は「_」で文字列分割して、存在しなければそのまま使用
      const value = gpci_all4sim[i][j]
      
      switch (key) {
        case "City Name":
          arr["City Name"] = value;
          break;
        case "Ec1":
          tempEc1.push(value);
          break;
        case "Ec2":
          tempEc2.push(value);
          break;
        case "Ec3":
          tempEc3.push(value);
          break;
        case "Ec4":
          tempEc4.push(value);
          break;
        case "Ec5":
          tempEc5.push(value);
          break;
        case "Ec6":
          tempEc6.push(value);
          break;
        case "Re1":
          tempRe1.push(value);
          break;
        case "Re2":
          tempRe2.push(value);
          break;
        case "Re3":
          tempRe3.push(value);
          break;
        case "Cu1":
          tempCu1.push(value);
          break;
        case "Cu2":
          tempCu2.push(value);
          break;
        case "Cu3":
          tempCu3.push(value);
          break;
        case "Cu4":
          tempCu4.push(value);
          break;
        case "Cu5":
          tempCu5.push(value);
          break;
        case "Li1":
          tempLi1.push(value);
          break;
        case "Li2":
          tempLi2.push(value);
          break;
        case "Li3":
          tempLi3.push(value);
          break;
        case "Li4":
          tempLi4.push(value);
          break;
        case "Li5":
          tempLi5.push(value);
          break;
        case "En1":
          tempEn1.push(value);
          break;
        case "En2":
          tempEn2.push(value);
          break;
        case "En3":
          tempEn3.push(value);
          break;
        case "Ac1":
          tempAc1.push(value);
          break;
        case "Ac2":
          tempAc2.push(value);
          break;
        case "Ac3":
          tempAc3.push(value);
          break;
        case "Ac4":
          tempAc4.push(value);
          break;
      }

      }

      let totalEc1 = tempEc1.reduce(function(sum, element){ return sum + element; }, 0);
      let totalEc2 = tempEc2.reduce(function(sum, element){ return sum + element; }, 0);
      let totalEc3 = tempEc3.reduce(function(sum, element){ return sum + element; }, 0);
      let totalEc4 = tempEc4.reduce(function(sum, element){ return sum + element; }, 0);
      let totalEc5 = tempEc5.reduce(function(sum, element){ return sum + element; }, 0);
      let totalEc6 = tempEc6.reduce(function(sum, element){ return sum + element; }, 0);
      let totalRe1 = tempRe1.reduce(function(sum, element){ return sum + element; }, 0);
      let totalRe2 = tempRe2.reduce(function(sum, element){ return sum + element; }, 0);
      let totalRe3 = tempRe3.reduce(function(sum, element){ return sum + element; }, 0);
      let totalCu1 = tempCu1.reduce(function(sum, element){ return sum + element; }, 0);
      let totalCu2 = tempCu2.reduce(function(sum, element){ return sum + element; }, 0);
      let totalCu3 = tempCu3.reduce(function(sum, element){ return sum + element; }, 0);
      let totalCu4 = tempCu4.reduce(function(sum, element){ return sum + element; }, 0);
      let totalCu5 = tempCu5.reduce(function(sum, element){ return sum + element; }, 0);
      let totalLi1 = tempLi1.reduce(function(sum, element){ return sum + element; }, 0);
      let totalLi2 = tempLi2.reduce(function(sum, element){ return sum + element; }, 0);
      let totalLi3 = tempLi3.reduce(function(sum, element){ return sum + element; }, 0);
      let totalLi4 = tempLi4.reduce(function(sum, element){ return sum + element; }, 0);
      let totalLi5 = tempLi5.reduce(function(sum, element){ return sum + element; }, 0);
      let totalEn1 = tempEn1.reduce(function(sum, element){ return sum + element; }, 0);
      let totalEn2 = tempEn2.reduce(function(sum, element){ return sum + element; }, 0);
      let totalEn3 = tempEn3.reduce(function(sum, element){ return sum + element; }, 0);
      let totalAc1 = tempAc1.reduce(function(sum, element){ return sum + element; }, 0);
      let totalAc2 = tempAc2.reduce(function(sum, element){ return sum + element; }, 0);
      let totalAc3 = tempAc3.reduce(function(sum, element){ return sum + element; }, 0);
      let totalAc4 = tempAc4.reduce(function(sum, element){ return sum + element; }, 0);

      arr["Ec1"] = totalEc1/tempEc1.length
      arr["Ec2"] = totalEc2/tempEc2.length
      arr["Ec3"] = totalEc3/tempEc3.length
      arr["Ec4"] = totalEc4/tempEc4.length
      arr["Ec5"] = totalEc5/tempEc5.length
      arr["Ec6"] = totalEc6/tempEc6.length
      arr["Re1"] = totalRe1/tempRe1.length
      arr["Re2"] = totalRe2/tempRe2.length
      arr["Re3"] = totalRe3/tempRe3.length
      arr["Cu1"] = totalCu1/tempCu1.length
      arr["Cu2"] = totalCu2/tempCu2.length
      arr["Cu3"] = totalCu3/tempCu3.length
      arr["Cu4"] = totalCu4/tempCu4.length
      arr["Cu5"] = totalCu5/tempCu5.length
      arr["Li1"] = totalLi1/tempLi1.length
      arr["Li2"] = totalLi2/tempLi2.length
      arr["Li3"] = totalLi3/tempLi3.length
      arr["Li4"] = totalLi4/tempLi4.length
      arr["Li5"] = totalLi5/tempLi5.length
      arr["En1"] = totalEn1/tempEn1.length
      arr["En2"] = totalEn2/tempEn2.length
      arr["En3"] = totalEn3/tempEn3.length
      arr["Ac1"] = totalAc1/tempAc1.length
      arr["Ac2"] = totalAc2/tempAc2.length
      arr["Ac3"] = totalAc3/tempAc3.length
      arr["Ac4"] = totalAc4/tempAc4.length

     gpci_idg.push(arr);
  };
    
    // Function score
    var gpci_f = [];
    for (var i = 0; i <= 47; i++) {
      var arr = [
      {
        "City Name": gpci_idg[i]["City Name"], 
        "Economy": (gpci_idg[i]["Ec1"] + gpci_idg[i]["Ec2"] + gpci_idg[i]["Ec3"] + gpci_idg[i]["Ec4"] + gpci_idg[i]["Ec5"] + gpci_idg[i]["Ec6"]),
        "R&D":  (gpci_idg[i]["Re1"] + gpci_idg[i]["Re2"] + gpci_idg[i]["Re3"]),
        "Cultural Interaction": (gpci_idg[i]["Cu1"] + gpci_idg[i]["Cu2"] + gpci_idg[i]["Cu3"] + gpci_idg[i]["Cu4"] + gpci_idg[i]["Cu5"]),
        "Livability": (gpci_idg[i]["Li1"] + gpci_idg[i]["Li2"] + gpci_idg[i]["Li3"] + gpci_idg[i]["Li4"] + gpci_idg[i]["Li5"]),
        "Environment": (gpci_idg[i]["En1"] + gpci_idg[i]["En2"] + gpci_idg[i]["En3"]),
        "Accessibility": (gpci_idg[i]["Ac1"] + gpci_idg[i]["Ac2"] + gpci_idg[i]["Ac3"] + gpci_idg[i]["Ac4"])
      }
      ];
      gpci_f.push(arr[0]);
    };
 

    // Comprehensive score
    var gpci_sim = [];
    for (var i = 0; i <= 47; i++) {
      var arr = 
        {
          "City Name": gpci_f[i]["City Name"],
          "Economy": gpci_f[i]["Economy"],
          "R&D":  gpci_f[i]["R&D"],
          "Cultural Interaction": gpci_f[i]["Cultural Interaction"],
          "Livability": gpci_f[i]["Livability"],
          "Environment": gpci_f[i]["Environment"],
          "Accessibility": gpci_f[i]["Accessibility"],
          "Comprehensive": parseFloat((gpci_f[i]["Economy"] + gpci_f[i]["R&D"] + gpci_f[i]["Cultural Interaction"] + gpci_f[i]["Livability"] + gpci_f[i]["Environment"] + gpci_f[i]["Accessibility"])).toFixed(1) 
        };
        
      gpci_sim.push(arr);
    };

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
    .call(d3.axisLeft(y).tickSizeOuter(0));

  // カラーパレットを用意する。
  const color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['rgba(189,178,255,1)', 'rgba(160,196,255,1)', 'rgba(255,198,255,1)','rgba(155,246,255,1)', 'rgba(202,255,191,1)', 'rgba(255,214,165,1)'])


  // 積み上げ棒グラフ用のデータを用意する。
  const stackedData = d3.stack()
    .keys(subgroups)
    (gpci_sim)

  console.log(stackedData)

  // 積み上げ棒グラフを描画する。
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
    .attr("x", d => x(d.data["Comprehensive"]*1.01)) // Center text within the bar
    .attr("y", d => y(d.data["City Name"]) + y.bandwidth()-1) // Center text vertically
    .text(d => parseFloat(d.data["Comprehensive"]).toFixed(0))
    .attr("fill", "gray")
    .attr("font-family", "Arial")
    .attr("font-size", "9px")
    .attr("text-anchor", "top"); // Center-align text


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

