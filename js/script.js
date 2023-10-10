
// 言語設定
const lang = "en"
const path = "./json/gpci2023_" + lang + ".json"
    
// 対象都市リスト、指標リスト、スコア配列を作成する。
const cityList = [];
const indicatorList = [];
const gpci_scores = [];

jQuery.getJSON(path, function(data){
   
    // 対象都市リスト
    cityList.push(data);

    // 文字列リテラルでリスト作成
    for (let item of cityList[0]) {
        const option = `<option value=${item["City Name"]}>${item["City Name"]}</option>`
        document.getElementById("city").insertAdjacentHTML("beforeend", option);
    }; 

    // 指標リスト
    indicatorList.push(data);

    // スコアデータから指標#1-70の部分を抽出する。
    var indicators = Object.keys(indicatorList[0][0]).slice(1,71)

    // 文字列リテラルでスコアテーブル作成（条件分岐で経済指標に「style="display: table-row;"」を付与）
    for (let item of indicators) {
        if (item.split("_")[2] === "Ec"){
            const tr = `<tr class="indicator heading_${item.split("_")[2]}" style="display: table-row;"><th class="th_${item.split("_")[2]}">${item.split("_")[3]}</th><td class="td_${item.split("_")[2]}"><input id="id_${item.split("_")[0]}" type="number" min="0" max="100" class="inputTable"></td></tr>`
            document.getElementById("indicators").insertAdjacentHTML("beforeend", tr);
        } else {
            const tr = `<tr class="indicator heading_${item.split("_")[2]}"><th class="th_${item.split("_")[2]}">${item.split("_")[3]}</th><td class="td_${item.split("_")[2]}"><input id="id_${item.split("_")[0]}" type="number" min="0" max="100" class="inputTable"></td></tr>`
            document.getElementById("indicators").insertAdjacentHTML("beforeend", tr);
        }
    }; 
   

    // スコアテーブルに分野名のヘディングを挿入する（条件分岐で日英切替）。
    if (lang === "en") {
        var Ec_heading = '<tr class="function"><th colspan="2" class="Ec">Economy</th></tr>'
        document.getElementsByClassName("heading_Ec")[0].insertAdjacentHTML("beforebegin", Ec_heading)
        var Re_heading = '<tr class="function"><th colspan="2" class="Re">Research and Development</th></tr>'
        document.getElementsByClassName("heading_Re")[0].insertAdjacentHTML("beforebegin", Re_heading)
        var Cu_heading = '<tr class="function"><th colspan="2" class="Cu">Cultural Interaction</th></tr>'
        document.getElementsByClassName("heading_Cu")[0].insertAdjacentHTML("beforebegin", Cu_heading)
        var Li_heading = '<tr class="function"><th colspan="2" class="Li">Livability</th></tr>'
        document.getElementsByClassName("heading_Li")[0].insertAdjacentHTML("beforebegin", Li_heading)
        var En_heading = '<tr class="function"><th colspan="2" class="En">Environment</th></tr>'
        document.getElementsByClassName("heading_En")[0].insertAdjacentHTML("beforebegin", En_heading)
        var Ac_heading = '<tr class="function"><th colspan="2" class="Ac">Accesibility</th></tr>'
        document.getElementsByClassName("heading_Ac")[0].insertAdjacentHTML("beforebegin", Ac_heading)
    } else if (lang === "jp") {
        var Ec_heading = '<tr class="function"><th colspan="2" class="Ec">経済</th></tr>'
        document.getElementsByClassName("heading_Ec")[0].insertAdjacentHTML("beforebegin", Ec_heading)
        var Re_heading = '<tr class="function"><th colspan="2" class="Re">研究・開発</th></tr>'
        document.getElementsByClassName("heading_Re")[0].insertAdjacentHTML("beforebegin", Re_heading)
        var Cu_heading = '<tr class="function"><th colspan="2" class="Cu">文化・交流</th></tr>'
        document.getElementsByClassName("heading_Cu")[0].insertAdjacentHTML("beforebegin", Cu_heading)
        var Li_heading = '<tr class="function"><th colspan="2" class="Li">居住</th></tr>'
        document.getElementsByClassName("heading_Li")[0].insertAdjacentHTML("beforebegin", Li_heading)
        var En_heading = '<tr class="function"><th colspan="2" class="En">環境</th></tr>'
        document.getElementsByClassName("heading_En")[0].insertAdjacentHTML("beforebegin", En_heading)
        var Ac_heading = '<tr class="function"><th colspan="2" class="Ac">交通・アクセス</th></tr>'
        document.getElementsByClassName("heading_Ac")[0].insertAdjacentHTML("beforebegin", Ac_heading)
    }


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

    // GPCIスコア配列を作成する。
    gpci_scores.push(data);
    // totalの要素を削除する。
    gpci_scores[0].map((item) => delete item["Economy"])
    gpci_scores[0].map((item) => delete item["R&D"])
    gpci_scores[0].map((item) => delete item["Cultural Interaction"])
    gpci_scores[0].map((item) => delete item["Livability"])
    gpci_scores[0].map((item) => delete item["Environment"])
    gpci_scores[0].map((item) => delete item["Accessibility"])
    gpci_scores[0].map((item) => delete item["Comprehensive"])


    // Alart message if the input number is inappropriate
    jQuery("input[type=number]").on("change", function(event){
        var val = this.value;
        if (val > 100 || val < 0) {
        window.alert("Please enter numbers between 0 and 100.")
        document.getElementById(event.target.id).value = 0
        }
    });


    // Highlight edited cells in gray
    jQuery(function(){
        var cell = $('.inputTable');
        cell.change(function(){
        $(this).addClass('active');
        });
    });

});


//================== イニシャルグラフを描画する。==================
let gpci_all = [];
let gpci_total = [];


$.ajax({
	url: path,
	dataType: 'json',
	async: false,
	success: function(json) {
		gpci_all = json;
	}
});


  // スコアデータから指標#1-70の部分を抽出する。
  gpci_total = gpci_all.map(item => ({
    "City Name": item["City Name"],
    "Economy": item["Economy"],
    "R&D": item["R&D"],
    "Cultural Interaction": item["Cultural Interaction"],
    "Livability": item["Livability"],
    "Environment": item["Environment"],
    "Accessibility": item["Accessibility"],
    "Total": item["Comprehensive"]
  }));

  // スコアデータから都市名および指標#1-70の部分を抽出する。
  let gpci_thisyear = gpci_all;
  gpci_all.map((item) => delete item["Economy"])
  gpci_all.map((item) => delete item["R&D"])
  gpci_all.map((item) => delete item["Cultural Interaction"])
  gpci_all.map((item) => delete item["Livability"])
  gpci_all.map((item) => delete item["Environment"])
  gpci_all.map((item) => delete item["Accessibility"])
  gpci_all.map((item) => delete item["Comprehensive"])

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
  gpci_total.sort((a,b) => b["Total"] - a["Total"])
  
  // totalの要素を削除する。
  gpci_total.map((item) => delete item["Total"])

  // List of subgroups = header of the csv files = soil condition here
  const subgroups = ["Economy","R&D","Cultural Interaction","Livability","Environment","Accessibility"]

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  const groups = gpci_total.map(d => (d["City Name"]))

  // Add X axis
  const x = d3.scaleLinear()
    .domain([0, 1800])
    .range([0, width]);
  svg.append("g")
    .call(d3.axisTop(x));
  
  // Add Y axis
  const y = d3.scaleBand()
    .domain(groups)
    .range([0, height])
    .padding([0.2])
  svg.append("g")
    .attr("transform", `translate(0, 0)`)
    .call(d3.axisLeft(y).tickSizeOuter(0));

  // color palette = one color per subgroup
  const color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['rgba(189,178,255,1)', 'rgba(160,196,255,1)', 'rgba(255,198,255,1)','rgba(155,246,255,1)', 'rgba(202,255,191,1)', 'rgba(255,214,165,1)'])


  //stack the data? --> stack per subgroup
  const stackedData = d3.stack()
    .keys(subgroups)
    (gpci_total)

  // Show the bars
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




// 都市を選択した後、対象都市のスコアを表示する。
function selectCity(){

    // 対象都市のデータを抽出する（オブジェクト）。
	var target = document.getElementById("city").value;
    let targetScore = gpci_scores[0].filter(function(item, index){
        if (item["City Name"] === target) return true;
    });

    // Coloring the target city
    svg.selectAll("text")
    .attr("fill", function(d){
      var item = d;
      if (item === target) {
        return "red";
      } else {
        return "black";}
    });

    // オブジェクトから対象都市名のプロパティを削除する。
    targetScore.map((item) => delete item["City Name"])

    // 対象都市のデータをテーブルに表示する。
    for (let i in targetScore[0]) {
        document.getElementById("id_"+i.split("_")[0]).value = parseFloat(targetScore[0][i]).toFixed(1);
    }

    // 分野別スコアの表示/非表示切り替え
    jQuery(".function").click(function() {
        var children = $(this).nextUntil(".function").filter(".indicator")
        jQuery(".indicator").hide()
        children.toggle(children.first().is(":hidden"))
    })
      
}





// Get scores of target city's simulation scores and update the graph
function draw(){

  var target = document.getElementById("city").value;

  //console.log(gpci_thisyear)

  var sim_gpci = gpci_thisyear.filter(function(item, index){
      if (item["City Name"] === target) {
        return true};
    });
    

    for (indicator of sim_gpci) {
      const temp_indicators = Object.keys( indicator );

      // 都市名、分野別および総合の要素を削除して、指標名だけの配列を作成する。
      const indicators = temp_indicators.filter(function( item ) {
  
        return item != "City Name" 
      });

      // 対象都市のスコア計算を行う。
      for (let item of indicators) {

        // sim入力した指標スコアを抽出する。
        let indicator_name = item.split("_")[3]
        sim_gpci[0][indicator_name] = parseFloat(document.getElementById("id_"+item.split("_")[0]).value);
        console.log(sim_gpci[0][indicator_name])
  
      }
      
      
    }
    
    console.log(gpci_thisyear)
    
    // Indicator group score
    var gpci_idg = [];
    for (var i = 0; i <= 47; i++) {
      var arr = [
        {
          "city": gpci_thisyear[i]["City Name"], 
          // Ec
          "Market Size": ( gpci_thisyear[i]["Nominal GDP"] + gpci_thisyear[i]["GDP per Capita"])/2,
          "Market Attractiveness": ( gpci_thisyear[i]["GDP Growth Rate"] + gpci_thisyear[i]["Economic Freedom"])/2,
          "Economic Vitality": ( gpci_thisyear[i]["Stock Market Capitalization"] + gpci_thisyear[i]["World's Top 500 Companies"])/2,
          "Human Capital": ( gpci_thisyear[i]["Total Employment"] + gpci_thisyear[i]["Employees in Business Support Services"])/2,
          "Business Environment": ( gpci_thisyear[i]["Wage Level"] + gpci_thisyear[i]["Availability of Skilled Human Resources"] + gpci_thisyear[i]["Variety of Workplace Options"])/3,
          "Ease of Doing Business": ( gpci_thisyear[i]["Corporate Tax Rate"] + gpci_thisyear[i]["Political, Economic and Business Risk"])/2,
          // Re
          "Academic Resources": ( gpci_thisyear[i]["Number of Researchers"] + gpci_thisyear[i]["World's Top Universities"])/2,
          "Research Environment": ( gpci_thisyear[i]["Research and Development Expenditure"] + gpci_thisyear[i]["Number of International Students"] + gpci_thisyear[i]["Academic Performance"])/3,
          "Innovation": ( gpci_thisyear[i]["Number of Patents"] + gpci_thisyear[i]["Winners of Prizes in Science and Technology"] + gpci_thisyear[i]["Number of Startups"])/3,
          // Cu
          "Trendsetting Potential": ( gpci_thisyear[i]["Number of International Conferences"] + gpci_thisyear[i]["Number of Cultural Events"] + gpci_thisyear[i]["Cultural Content Export Value"] + gpci_thisyear[i]["Art Market Environment"])/4,
          "Tourism Resources": ( gpci_thisyear[i]["Tourist Attractions"] + gpci_thisyear[i]["Proximity to World Heritage Sites"] + gpci_thisyear[i]["Nightlife Options"])/3,
          "Cultural Facilities": ( gpci_thisyear[i]["Number of Theaters"] + gpci_thisyear[i]["Number of Museums"] + gpci_thisyear[i]["Number of Stadiums"])/3,
          "Visitor Amenities": ( gpci_thisyear[i]["Number of Hotel Rooms"] + gpci_thisyear[i]["Number of Luxury Hotel Rooms"] + gpci_thisyear[i]["Attractiveness of Shopping Options"] + gpci_thisyear[i]["Attractiveness of Dining Options"])/4,
          "International Interaction": ( gpci_thisyear[i]["Number of Foreign Residents"] + gpci_thisyear[i]["Number of Foreign Visitors"])/2,
          // Li
          "Working Environment": ( gpci_thisyear[i]["Total Unemployment Rate"] + gpci_thisyear[i]["Total Working Hours"] + gpci_thisyear[i]["Workstyle Flexibility"])/3,
          "Cost of Living": ( gpci_thisyear[i]["Housing Rent"] + gpci_thisyear[i]["Price Level"])/2,
          "Security and Safety": ( gpci_thisyear[i]["Number of Murders"] + gpci_thisyear[i]["Economic Risk of Natural Disaster"])/2,
          "Well-Being": ( gpci_thisyear[i]["Life Expectancy"] + gpci_thisyear[i]["Social Freedom and Equality"] + gpci_thisyear[i]["Risk to Mental Health"])/3,
          "Ease of Living": ( gpci_thisyear[i]["Number of Medical Doctors"] + gpci_thisyear[i]["ICT Readiness"] + gpci_thisyear[i]["Number of Retail Shops"] + gpci_thisyear[i]["Number of Restaurants"])/4,
          // En
          "Sustainability": ( gpci_thisyear[i]["Commitment to Climate Action"] + gpci_thisyear[i]["Renewable Energy Rate"] + gpci_thisyear[i]["Waste Recycle Rate"])/3,
          "Air Quality and Comfort": ( gpci_thisyear[i]["CO2 Emissions per Capita"] + gpci_thisyear[i]["Air Quality"] + gpci_thisyear[i]["Comfort Level of Temperature"])/3,
          "Urban Environment": ( gpci_thisyear[i]["Water Quality"] + gpci_thisyear[i]["Urban Greenery"] + gpci_thisyear[i]["Satisfaction with Urban Cleanliness"])/3,
          // Ac
          "International Network": ( gpci_thisyear[i]["Cities with Direct International Flights"] + gpci_thisyear[i]["International Freight Flows"])/2,
          "Air Transport Capacity": ( gpci_thisyear[i]["Number of Air Passengers"] + gpci_thisyear[i]["Number of Arrivals and Departures at the Airport"])/2,
          "Inner-City Transportation": ( gpci_thisyear[i]["Station Density"] + gpci_thisyear[i]["Public Transportation Use"] + gpci_thisyear[i]["Travel Time to Airports"])/3,
          "Transport Comfortability": ( gpci_thisyear[i]["Commuting Time"] + gpci_thisyear[i]["Traffic Congestion"] + gpci_thisyear[i]["Ease of Mobility by Taxi or Bicycle"])/3
        }
      ];
      gpci_idg.push(arr);
    };
    
    // Function score
    var gpci_f = [];
    for (var i = 0; i <= 47; i++) {
      var arr = [
      {
        "city": gpci_idg[i][0]["city"], 
        "Economy": (gpci_idg[i][0]["Market Size"] + gpci_idg[i][0]["Market Attractiveness"] + gpci_idg[i][0]["Economic Vitality"] + gpci_idg[i][0]["Human Capital"] + gpci_idg[i][0]["Business Environment"] + gpci_idg[i][0]["Ease of Doing Business"]),
        "R&D":  (gpci_idg[i][0]["Academic Resources"] + gpci_idg[i][0]["Research Environment"] + gpci_idg[i][0]["Innovation"]),
        "Cultural Interaction": (gpci_idg[i][0]["Trendsetting Potential"] + gpci_idg[i][0]["Tourism Resources"] + gpci_idg[i][0]["Cultural Facilities"] + gpci_idg[i][0]["Visitor Amenities"] + gpci_idg[i][0]["International Interaction"]),
        "Livability": (gpci_idg[i][0]["Working Environment"] + gpci_idg[i][0]["Cost of Living"] + gpci_idg[i][0]["Security and Safety"] + gpci_idg[i][0]["Well-Being"] + gpci_idg[i][0]["Ease of Living"]),
        "Environment": (gpci_idg[i][0]["Sustainability"] + gpci_idg[i][0]["Air Quality and Comfort"] + gpci_idg[i][0]["Urban Environment"]),
        "Accessibility": (gpci_idg[i][0]["International Network"] + gpci_idg[i][0]["Air Transport Capacity"] + gpci_idg[i][0]["Inner-City Transportation"] + gpci_idg[i][0]["Transport Comfortability"])
      }
      ];
      gpci_f.push(arr[0]);
    };

    // Comprehensive score
    var gpci_sim = [];
    for (var i = 0; i <= 47; i++) {
      var arr = 
        {
          "city": gpci_f[i]["city"],
          "Economy": gpci_f[i]["Economy"],
          "R&D":  gpci_f[i]["R&D"],
          "Cultural Interaction": gpci_f[i]["Cultural Interaction"],
          "Livability": gpci_f[i]["Livability"],
          "Environment": gpci_f[i]["Environment"],
          "Accessibility": gpci_f[i]["Accessibility"],
          "total": (gpci_f[i]["Economy"] + gpci_f[i]["R&D"] + gpci_f[i]["Cultural Interaction"] + gpci_f[i]["Livability"] + gpci_f[i]["Environment"] + gpci_f[i]["Accessibility"]) 
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
    gpci_sim.sort((a,b) => b.total - a.total)
  

  // List of subgroups = header of the csv files = soil condition here
  const subgroups = ["Economy","R&D","Cultural Interaction","Livability","Environment","Accessibility"]

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  const groups = gpci_sim.map(d => (d.city))

  // Add X axis
  const x = d3.scaleLinear()
    .domain([0, 1800])
    .range([0, width]);
  svg.append("g")
    .call(d3.axisTop(x));
 

  // Add Y axis
  const y = d3.scaleBand()
    .domain(groups)
    .range([0, height])
    .padding([0.2])
  svg.append("g")
    .attr("transform", `translate(0, 0)`)
    .call(d3.axisLeft(y).tickSizeOuter(0));

  // color palette = one color per subgroup
  const color = d3.scaleOrdinal()
    .domain(subgroups)
    .range(['rgba(189,178,255,1)', 'rgba(160,196,255,1)', 'rgba(255,198,255,1)','rgba(155,246,255,1)', 'rgba(202,255,191,1)', 'rgba(255,214,165,1)'])


  //stack the data? --> stack per subgroup
  const stackedData = d3.stack()
    .keys(subgroups)
    (gpci_sim)

  // Show the bars
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
    .attr("y", d => y(d.data.city))
    .attr("width", d => x(d[1]) - x(d[0]))
    .attr("height", y.bandwidth())


  // Coloring the target city
  svg.selectAll("text")
  .attr("fill", function(d){
    var item = d;
    if (item === target) {
      return "red";
    } else {
      return "black";}
  });

};

