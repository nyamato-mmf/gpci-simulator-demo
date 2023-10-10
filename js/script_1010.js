
// Load gpci2020 data in JSON format
var gpci2020 = [];
jQuery.getJSON("./json/gpci2020.json", function(data){
  gpci2020.push(data);
});

console.log(gpci2020)

// Set initial graph dataset (copy "gpci2020_total.json" and paste it here)
gpci2023_total = [
  {
    "city": "Madrid",
    "Economy": 202.2443627,
    "R&D": 31.22007497,
    "Cultural Interaction": 183.8644546,
    "Livability": 380.909167,
    "Environment": 176.6723869,
    "Accessibility": 156.6228425,
    "total": 1131.533289
  },
  {
    "city": "Barcelona",
    "Economy": 192.5350544,
    "R&D": 32.95538638,
    "Cultural Interaction": 163.7730944,
    "Livability": 365.6122155,
    "Environment": 149.115719,
    "Accessibility": 163.5688888,
    "total": 1067.560358
  },
  {
    "city": "London",
    "Economy": 336.2100201,
    "R&D": 181.4404473,
    "Cultural Interaction": 367.5799258,
    "Livability": 357.8729661,
    "Environment": 187.68486,
    "Accessibility": 215.9421066,
    "total": 1646.730326
  },
  {
    "city": "Paris",
    "Economy": 253.0616721,
    "R&D": 108.2801633,
    "Cultural Interaction": 250.7365332,
    "Livability": 389.9859392,
    "Environment": 151.2489122,
    "Accessibility": 210.3906206,
    "total": 1363.703841
  },
  {
    "city": "Brussels",
    "Economy": 202.1944461,
    "R&D": 61.11940651,
    "Cultural Interaction": 133.4859162,
    "Livability": 356.0998763,
    "Environment": 155.3821923,
    "Accessibility": 141.0109022,
    "total": 1049.29274
  },
  {
    "city": "Amsterdam",
    "Economy": 259.1253655,
    "R&D": 67.81685284,
    "Cultural Interaction": 158.5520862,
    "Livability": 357.9236667,
    "Environment": 173.7342435,
    "Accessibility": 229.163757,
    "total": 1246.315972
  },
  {
    "city": "Geneva",
    "Economy": 274.5609623,
    "R&D": 52.83418298,
    "Cultural Interaction": 50.84171982,
    "Livability": 325.0529839,
    "Environment": 217.6119603,
    "Accessibility": 122.0061705,
    "total": 1042.90798
  },
  {
    "city": "Frankfurt",
    "Economy": 218.707072,
    "R&D": 30.42648845,
    "Cultural Interaction": 80.53870736,
    "Livability": 358.1032691,
    "Environment": 180.773,
    "Accessibility": 217.647773,
    "total": 1086.19631
  },
  {
    "city": "Berlin",
    "Economy": 211.1554451,
    "R&D": 78.44994074,
    "Cultural Interaction": 173.393839,
    "Livability": 359.2669738,
    "Environment": 192.1942841,
    "Accessibility": 137.2835364,
    "total": 1151.744019
  },
  {
    "city": "Milan",
    "Economy": 179.4057342,
    "R&D": 31.47441827,
    "Cultural Interaction": 124.5928906,
    "Livability": 353.0407953,
    "Environment": 153.542691,
    "Accessibility": 148.5993086,
    "total": 990.6558379
  },
  {
    "city": "Zurich",
    "Economy": 302.7187187,
    "R&D": 51.96079164,
    "Cultural Interaction": 57.6690793,
    "Livability": 325.8943219,
    "Environment": 201.456258,
    "Accessibility": 148.8263071,
    "total": 1088.525477
  },
  {
    "city": "Copenhagen",
    "Economy": 249.1935876,
    "R&D": 42.95872735,
    "Cultural Interaction": 96.02428829,
    "Livability": 352.0614837,
    "Environment": 224.1684459,
    "Accessibility": 174.4782012,
    "total": 1138.884734
  },
  {
    "city": "Vienna",
    "Economy": 201.3606556,
    "R&D": 40.88605615,
    "Cultural Interaction": 148.8789623,
    "Livability": 359.9669143,
    "Environment": 210.471045,
    "Accessibility": 171.6541222,
    "total": 1133.217756
  },
  {
    "city": "Stockholm",
    "Economy": 246.6152666,
    "R&D": 49.50928656,
    "Cultural Interaction": 97.68868454,
    "Livability": 357.3198645,
    "Environment": 228.7370926,
    "Accessibility": 137.9251016,
    "total": 1117.795296
  },
  {
    "city": "Istanbul",
    "Economy": 164.4397353,
    "R&D": 37.72277846,
    "Cultural Interaction": 207.2104001,
    "Livability": 294.6030343,
    "Environment": 146.9387981,
    "Accessibility": 166.2505783,
    "total": 1017.165325
  },
  {
    "city": "Cairo",
    "Economy": 81.58599668,
    "R&D": 19.61815619,
    "Cultural Interaction": 98.53528549,
    "Livability": 292.5728198,
    "Environment": 67.5554585,
    "Accessibility": 101.4089296,
    "total": 661.2766462
  },
  {
    "city": "Moscow",
    "Economy": 153.0502884,
    "R&D": 56.49013006,
    "Cultural Interaction": 176.5094735,
    "Livability": 332.1935226,
    "Environment": 142.8568083,
    "Accessibility": 115.3891267,
    "total": 976.4893496
  },
  {
    "city": "Mumbai",
    "Economy": 90.06696896,
    "R&D": 7.51701818,
    "Cultural Interaction": 73.1947525,
    "Livability": 288.9200821,
    "Environment": 92.76073082,
    "Accessibility": 92.88558058,
    "total": 645.3451331
  },
  {
    "city": "Bangkok",
    "Economy": 181.7338073,
    "R&D": 21.26799065,
    "Cultural Interaction": 165.3071512,
    "Livability": 341.5362509,
    "Environment": 122.2975494,
    "Accessibility": 113.1556074,
    "total": 945.2983568
  },
  {
    "city": "Kuala Lumpur",
    "Economy": 177.3370798,
    "R&D": 16.94469295,
    "Cultural Interaction": 98.87146585,
    "Livability": 349.9181394,
    "Environment": 125.8780465,
    "Accessibility": 109.7282864,
    "total": 878.6777108
  },
  {
    "city": "Singapore",
    "Economy": 308.3463833,
    "R&D": 97.66505753,
    "Cultural Interaction": 174.9051627,
    "Livability": 319.0811652,
    "Environment": 180.8869729,
    "Accessibility": 183.8183917,
    "total": 1264.703133
  },
  {
    "city": "Hong Kong",
    "Economy": 232.9995264,
    "R&D": 107.4090751,
    "Cultural Interaction": 109.1033185,
    "Livability": 331.9575832,
    "Environment": 157.7019142,
    "Accessibility": 152.6218535,
    "total": 1091.793271
  },
  {
    "city": "Beijing",
    "Economy": 309.4480968,
    "R&D": 93.19409389,
    "Cultural Interaction": 143.3172923,
    "Livability": 328.4021542,
    "Environment": 137.3197693,
    "Accessibility": 103.6545018,
    "total": 1115.335908
  },
  {
    "city": "Shanghai",
    "Economy": 268.7358182,
    "R&D": 89.99198325,
    "Cultural Interaction": 125.7861288,
    "Livability": 328.9333194,
    "Environment": 142.5488591,
    "Accessibility": 175.5080294,
    "total": 1131.504138
  },
  {
    "city": "Taipei",
    "Economy": 226.8506507,
    "R&D": 46.84382335,
    "Cultural Interaction": 59.16185784,
    "Livability": 337.2434641,
    "Environment": 168.5747786,
    "Accessibility": 119.8169782,
    "total": 958.4915528
  },
  {
    "city": "Seoul",
    "Economy": 254.7872238,
    "R&D": 136.3850521,
    "Cultural Interaction": 167.7864244,
    "Livability": 318.6656647,
    "Environment": 178.1404517,
    "Accessibility": 146.3040906,
    "total": 1202.068907
  },
  {
    "city": "Fukuoka",
    "Economy": 142.6365697,
    "R&D": 36.15231951,
    "Cultural Interaction": 48.99000243,
    "Livability": 336.6259052,
    "Environment": 163.2190611,
    "Accessibility": 117.1678398,
    "total": 844.7916977
  },
  {
    "city": "Osaka",
    "Economy": 174.3851987,
    "R&D": 69.69567135,
    "Cultural Interaction": 109.9739653,
    "Livability": 354.7738119,
    "Environment": 129.602484,
    "Accessibility": 109.3260353,
    "total": 947.7571665
  },
  {
    "city": "Tokyo",
    "Economy": 270.0826443,
    "R&D": 143.4473672,
    "Cultural Interaction": 237.5124624,
    "Livability": 367.6904128,
    "Environment": 173.8068602,
    "Accessibility": 183.2632041,
    "total": 1375.802951
  },
  {
    "city": "Sydney",
    "Economy": 257.9913542,
    "R&D": 84.05038092,
    "Cultural Interaction": 133.6581308,
    "Livability": 335.0016726,
    "Environment": 202.1467376,
    "Accessibility": 120.5852706,
    "total": 1133.433547
  },
  {
    "city": "Vancouver",
    "Economy": 239.3124388,
    "R&D": 46.27570873,
    "Cultural Interaction": 76.77077918,
    "Livability": 331.8266362,
    "Environment": 189.7668628,
    "Accessibility": 108.6740083,
    "total": 992.6264341
  },
  {
    "city": "San Francisco",
    "Economy": 291.4042979,
    "R&D": 117.7019724,
    "Cultural Interaction": 79.87867219,
    "Livability": 300.8282173,
    "Environment": 124.9707074,
    "Accessibility": 120.2958482,
    "total": 1035.079715
  },
  {
    "city": "Los Angeles",
    "Economy": 252.6075802,
    "R&D": 154.9143531,
    "Cultural Interaction": 108.0876219,
    "Livability": 290.9478719,
    "Environment": 140.0135972,
    "Accessibility": 125.1240359,
    "total": 1071.69506
  },
  {
    "city": "Mexico City",
    "Economy": 130.4363894,
    "R&D": 13.98769921,
    "Cultural Interaction": 156.1526377,
    "Livability": 296.4456552,
    "Environment": 138.2829083,
    "Accessibility": 102.637123,
    "total": 837.9424128
  },
  {
    "city": "Chicago",
    "Economy": 239.2797164,
    "R&D": 113.0395812,
    "Cultural Interaction": 107.0395607,
    "Livability": 286.2646991,
    "Environment": 142.3183808,
    "Accessibility": 156.2467125,
    "total": 1044.188651
  },
  {
    "city": "Toronto",
    "Economy": 249.2343459,
    "R&D": 61.57558591,
    "Cultural Interaction": 101.9336621,
    "Livability": 346.3132192,
    "Environment": 168.9626692,
    "Accessibility": 137.2199188,
    "total": 1065.239401
  },
  {
    "city": "Washington, DC",
    "Economy": 271.3497681,
    "R&D": 87.40937076,
    "Cultural Interaction": 71.43754556,
    "Livability": 284.3017607,
    "Environment": 139.9391292,
    "Accessibility": 101.0641002,
    "total": 955.5016745
  },
  {
    "city": "New York",
    "Economy": 371.0962742,
    "R&D": 206.4581189,
    "Cultural Interaction": 259.4099946,
    "Livability": 302.5365031,
    "Environment": 150.7646879,
    "Accessibility": 216.1007967,
    "total": 1506.366375
  },
  {
    "city": "Boston",
    "Economy": 258.9880663,
    "R&D": 137.667174,
    "Cultural Interaction": 62.17012359,
    "Livability": 300.0597091,
    "Environment": 152.5070423,
    "Accessibility": 114.9411535,
    "total": 1026.333269
  },
  {
    "city": "Sao Paulo",
    "Economy": 132.825104,
    "R&D": 23.22939841,
    "Cultural Interaction": 151.7644424,
    "Livability": 338.7378129,
    "Environment": 161.6166415,
    "Accessibility": 90.18128502,
    "total": 898.3546843
  },
  {
    "city": "Johannesburg",
    "Economy": 117.5980393,
    "R&D": 3.772861989,
    "Cultural Interaction": 86.29131034,
    "Livability": 231.6715043,
    "Environment": 133.4188855,
    "Accessibility": 91.24913046,
    "total": 664.0017319
  },
  {
    "city": "Jakarta",
    "Economy": 156.9994122,
    "R&D": 9.409634913,
    "Cultural Interaction": 73.89051648,
    "Livability": 333.1060534,
    "Environment": 91.38446846,
    "Accessibility": 76.94312261,
    "total": 741.7332081
  },
  {
    "city": "Buenos Aires",
    "Economy": 96.23295206,
    "R&D": 10.37992974,
    "Cultural Interaction": 162.4018528,
    "Livability": 322.9995059,
    "Environment": 144.0214944,
    "Accessibility": 76.78903743,
    "total": 812.8247722
  },
  {
    "city": "Dubai",
    "Economy": 237.4210247,
    "R&D": 27.32158558,
    "Cultural Interaction": 237.5482099,
    "Livability": 343.9938587,
    "Environment": 123.8738976,
    "Accessibility": 192.5067543,
    "total": 1162.665331
  },
  {
    "city": "Dublin",
    "Economy": 298.6643535,
    "R&D": 32.70898023,
    "Cultural Interaction": 84.06729346,
    "Livability": 330.6687215,
    "Environment": 160.476215,
    "Accessibility": 124.9776744,
    "total": 1031.563238
  },
  {
    "city": "Helsinki",
    "Economy": 233.6120915,
    "R&D": 36.22247499,
    "Cultural Interaction": 43.33895352,
    "Livability": 352.1851197,
    "Environment": 210.6798739,
    "Accessibility": 131.8917826,
    "total": 1007.930296
  },
  {
    "city": "Tel Aviv",
    "Economy": 201.1443431,
    "R&D": 31.24778184,
    "Cultural Interaction": 95.00845993,
    "Livability": 315.736549,
    "Environment": 141.4943652,
    "Accessibility": 107.8105105,
    "total": 892.4420096
  },
  {
    "city": "Melbourne",
    "Economy": 238.5533522,
    "R&D": 83.10176713,
    "Cultural Interaction": 132.7678095,
    "Livability": 347.4477397,
    "Environment": 203.1258215,
    "Accessibility": 150.4280952,
    "total": 1155.424585
  }
]

  // set the dimensions and margins of the graph
  const margin = { top: 50, right: 30, bottom: 20, left: 100 },
    width = 460 - margin.left - margin.right,
    height = 800 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
  const svg = d3.select("#my_dataviz")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);


  // 降順でソートする。
  gpci2023_total.sort((a,b) => b.total - a.total)
 
  // totalの要素を削除する。
  gpci2023_total.map((item) => delete item.total)

  // List of subgroups = header of the csv files = soil condition here
  const subgroups = ["Economy","R&D","Cultural Interaction","Livability","Environment","Accessibility"]

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  const groups = gpci2023_total.map(d => (d.city))

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
    (gpci2023_total)

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


// Select a city from the list and show the target city's scores
function selectCity(){
	var target = document.getElementById("city").value;
    let targetScore = gpci2020[0].filter(function(item, index){
        if (item.city === target) return true;
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
 

  // Ec
  document.getElementById("id_01").value = parseFloat(targetScore[0]["01_Nominal GDP"]).toFixed(1);
  document.getElementById("id_02").value = parseFloat(targetScore[0]["02_GDP per Capita"]).toFixed(1);
  document.getElementById("id_03").value = parseFloat(targetScore[0]["03_GDP Growth Rate"]).toFixed(1);
  document.getElementById("id_04").value = parseFloat(targetScore[0]["04_Economic Freedom"]).toFixed(1);
  document.getElementById("id_05").value = parseFloat(targetScore[0]["05_Stock Market Capitalization"]).toFixed(1);
  document.getElementById("id_06").value = parseFloat(targetScore[0]["06_World's Top 500 Companies"]).toFixed(1);
  document.getElementById("id_07").value = parseFloat(targetScore[0]["07_Total Employment"]).toFixed(1);
  document.getElementById("id_08").value = parseFloat(targetScore[0]["08_Employees in Business Support Services"]).toFixed(1);
  document.getElementById("id_09").value = parseFloat(targetScore[0]["09_Wage Level"]).toFixed(1);
  document.getElementById("id_10").value = parseFloat(targetScore[0]["10_Availability of Skilled Human Resources"]).toFixed(1);
  document.getElementById("id_11").value = parseFloat(targetScore[0]["11_Variety of Workplace Options"]).toFixed(1);
  document.getElementById("id_12").value = parseFloat(targetScore[0]["12_Corporate Tax Rate"]).toFixed(1);
  document.getElementById("id_13").value = parseFloat(targetScore[0]["13_Political, Economic and Business Risk"]).toFixed(1);
  // Re
  document.getElementById("id_14").value = parseFloat(targetScore[0]["14_Number of Researchers"]).toFixed(1);
  document.getElementById("id_15").value = parseFloat(targetScore[0]["15_World's Top Universities"]).toFixed(1);
  document.getElementById("id_16").value = parseFloat(targetScore[0]["16_Research and Development Expenditure"]).toFixed(1);
  document.getElementById("id_17").value = parseFloat(targetScore[0]["17_Number of International Students"]).toFixed(1);
  document.getElementById("id_18").value = parseFloat(targetScore[0]["18_Academic Performance"]).toFixed(1);
  document.getElementById("id_19").value = parseFloat(targetScore[0]["19_Number of Patents"]).toFixed(1);
  document.getElementById("id_20").value = parseFloat(targetScore[0]["20_Winners of Prizes in Science and Technology"]).toFixed(1);
  document.getElementById("id_21").value = parseFloat(targetScore[0]["21_Number of Startups"]).toFixed(1);
  // Cu
  document.getElementById("id_22").value = parseFloat(targetScore[0]["22_Number of International Conferences"]).toFixed(1);
  document.getElementById("id_23").value = parseFloat(targetScore[0]["23_Number of Cultural Events"]).toFixed(1);
  document.getElementById("id_24").value = parseFloat(targetScore[0]["24_Cultural Content Export Value"]).toFixed(1);
  document.getElementById("id_25").value = parseFloat(targetScore[0]["25_Art Market Environment"]).toFixed(1);
  document.getElementById("id_26").value = parseFloat(targetScore[0]["26_Tourist Attractions"]).toFixed(1);
  document.getElementById("id_27").value = parseFloat(targetScore[0]["27_Proximity to World Heritage Sites"]).toFixed(1);
  document.getElementById("id_28").value = parseFloat(targetScore[0]["28_Nightlife Options"]).toFixed(1);
  document.getElementById("id_29").value = parseFloat(targetScore[0]["29_Number of Theaters"]).toFixed(1);
  document.getElementById("id_30").value = parseFloat(targetScore[0]["30_Number of Museums"]).toFixed(1);
  document.getElementById("id_31").value = parseFloat(targetScore[0]["31_Number of Stadiums"]).toFixed(1);
  document.getElementById("id_32").value = parseFloat(targetScore[0]["32_Number of Hotel Rooms"]).toFixed(1);
  document.getElementById("id_33").value = parseFloat(targetScore[0]["33_Number of Luxury Hotel Rooms"]).toFixed(1);
  document.getElementById("id_34").value = parseFloat(targetScore[0]["34_Attractiveness of Shopping Options"]).toFixed(1);
  document.getElementById("id_35").value = parseFloat(targetScore[0]["35_Attractiveness of Dining Options"]).toFixed(1);
  document.getElementById("id_36").value = parseFloat(targetScore[0]["36_Number of Foreign Residents"]).toFixed(1);
  document.getElementById("id_37").value = parseFloat(targetScore[0]["37_Number of Foreign Visitors"]).toFixed(1);
  // Li
  document.getElementById("id_38").value = parseFloat(targetScore[0]["38_Total Unemployment Rate"]).toFixed(1);
  document.getElementById("id_39").value = parseFloat(targetScore[0]["39_Total Working Hours"]).toFixed(1);
  document.getElementById("id_40").value = parseFloat(targetScore[0]["40_Workstyle Flexibility"]).toFixed(1);
  document.getElementById("id_41").value = parseFloat(targetScore[0]["41_Housing Rent"]).toFixed(1);
  document.getElementById("id_42").value = parseFloat(targetScore[0]["42_Price Level"]).toFixed(1);
  document.getElementById("id_43").value = parseFloat(targetScore[0]["43_Number of Murders"]).toFixed(1);
  document.getElementById("id_44").value = parseFloat(targetScore[0]["44_Economic Risk of Natural Disaster"]).toFixed(1);
  document.getElementById("id_45").value = parseFloat(targetScore[0]["45_Life Expectancy"]).toFixed(1);
  document.getElementById("id_46").value = parseFloat(targetScore[0]["46_Social Freedom and Equality"]).toFixed(1);
  document.getElementById("id_47").value = parseFloat(targetScore[0]["47_Risk to Mental Health"]).toFixed(1);
  document.getElementById("id_48").value = parseFloat(targetScore[0]["48_Number of Medical Doctors"]).toFixed(1);
  document.getElementById("id_49").value = parseFloat(targetScore[0]["49_ICT Readiness"]).toFixed(1);
  document.getElementById("id_50").value = parseFloat(targetScore[0]["50_Number of Retail Shops"]).toFixed(1);
  document.getElementById("id_51").value = parseFloat(targetScore[0]["51_Number of Restaurants"]).toFixed(1);
  // En
  document.getElementById("id_52").value = parseFloat(targetScore[0]["52_Commitment to Climate Action"]).toFixed(1);
  document.getElementById("id_53").value = parseFloat(targetScore[0]["53_Renewable Energy Rate"]).toFixed(1);
  document.getElementById("id_54").value = parseFloat(targetScore[0]["54_Waste Recycle Rate"]).toFixed(1);
  document.getElementById("id_55").value = parseFloat(targetScore[0]["55_CO2 Emissions per Capita"]).toFixed(1);
  document.getElementById("id_56").value = parseFloat(targetScore[0]["56_Air Quality"]).toFixed(1);
  document.getElementById("id_57").value = parseFloat(targetScore[0]["57_Comfort Level of Temperature"]).toFixed(1);
  document.getElementById("id_58").value = parseFloat(targetScore[0]["58_Water Quality"]).toFixed(1);
  document.getElementById("id_59").value = parseFloat(targetScore[0]["59_Urban Greenery"]).toFixed(1);
  document.getElementById("id_60").value = parseFloat(targetScore[0]["60_Satisfaction with Urban Cleanliness"]).toFixed(1);
  // Ac
  document.getElementById("id_61").value = parseFloat(targetScore[0]["61_Cities with Direct International Flights"]).toFixed(1);
  document.getElementById("id_62").value = parseFloat(targetScore[0]["62_International Freight Flows"]).toFixed(1);
  document.getElementById("id_63").value = parseFloat(targetScore[0]["63_Number of Air Passengers"]).toFixed(1);
  document.getElementById("id_64").value = parseFloat(targetScore[0]["64_Number of Arrivals and Departures at the Airport"]).toFixed(1);
  document.getElementById("id_65").value = parseFloat(targetScore[0]["65_Station Density"]).toFixed(1);
  document.getElementById("id_66").value = parseFloat(targetScore[0]["66_Public Transportation Use"]).toFixed(1);
  document.getElementById("id_67").value = parseFloat(targetScore[0]["67_Travel Time to Airports"]).toFixed(1);
  document.getElementById("id_68").value = parseFloat(targetScore[0]["68_Commuting Time"]).toFixed(1);
  document.getElementById("id_69").value = parseFloat(targetScore[0]["69_Traffic Congestion"]).toFixed(1);
  document.getElementById("id_70").value = parseFloat(targetScore[0]["70_Ease of Mobility by Taxi or Bicycle"]).toFixed(1);
};



// Alart message if the input number is inappropriate
jQuery("input[type=number]").on("change", function(){
  var val = this.value;
  if (val > 100 || val < 0) {
    window.alert("Please enter numbers between 0 and 100.")
    document.location.reload()
  }
});




// Get scores of target city's simulation scores and update the graph
function draw(){

  var target = document.getElementById("city").value;

  var sim_gpci2020 = gpci2020[0].filter(function(item, index){
      if (item.city === target) {
        return true};
    });
    
    // Ec
    sim_gpci2020[0]["01_Nominal GDP"] = parseFloat(document.getElementById("id_01").value);
    sim_gpci2020[0]["02_GDP per Capita"] = parseFloat(document.getElementById("id_02").value);
    sim_gpci2020[0]["03_GDP Growth Rate"] = parseFloat(document.getElementById("id_03").value);
    sim_gpci2020[0]["04_Economic Freedom"] = parseFloat(document.getElementById("id_04").value);
    sim_gpci2020[0]["05_Stock Market Capitalization"] = parseFloat(document.getElementById("id_05").value);
    sim_gpci2020[0]["06_World's Top 500 Companies"] = parseFloat(document.getElementById("id_06").value);
    sim_gpci2020[0]["07_Total Employment"] = parseFloat(document.getElementById("id_07").value);
    sim_gpci2020[0]["08_Employees in Business Support Services"] = parseFloat(document.getElementById("id_08").value);
    sim_gpci2020[0]["09_Wage Level"] = parseFloat(document.getElementById("id_09").value);
    sim_gpci2020[0]["10_Availability of Skilled Human Resources"] = parseFloat(document.getElementById("id_10").value);
    sim_gpci2020[0]["11_Variety of Workplace Options"] = parseFloat(document.getElementById("id_11").value);
    sim_gpci2020[0]["12_Corporate Tax Rate"] = parseFloat(document.getElementById("id_12").value);
    sim_gpci2020[0]["13_Political, Economic and Business Risk"] = parseFloat(document.getElementById("id_13").value);
    // Re
    sim_gpci2020[0]["14_Number of Researchers"] = parseFloat(document.getElementById("id_14").value);
    sim_gpci2020[0]["15_World's Top Universities"] = parseFloat(document.getElementById("id_15").value);
    sim_gpci2020[0]["16_Research and Development Expenditure"] = parseFloat(document.getElementById("id_16").value);
    sim_gpci2020[0]["17_Number of International Students"] = parseFloat(document.getElementById("id_17").value);
    sim_gpci2020[0]["18_Academic Performance"] = parseFloat(document.getElementById("id_18").value);
    sim_gpci2020[0]["19_Number of Patents"] = parseFloat(document.getElementById("id_19").value);
    sim_gpci2020[0]["20_Winners of Prizes in Science and Technology"] = parseFloat(document.getElementById("id_20").value);
    sim_gpci2020[0]["21_Number of Startups"] = parseFloat(document.getElementById("id_21").value);
    // Cu
    sim_gpci2020[0]["22_Number of International Conferences"] = parseFloat(document.getElementById("id_22").value);
    sim_gpci2020[0]["23_Number of Cultural Events"] = parseFloat(document.getElementById("id_23").value);
    sim_gpci2020[0]["24_Cultural Content Export Value"] = parseFloat(document.getElementById("id_24").value);
    sim_gpci2020[0]["25_Art Market Environment"] = parseFloat(document.getElementById("id_25").value);
    sim_gpci2020[0]["26_Tourist Attractions"] = parseFloat(document.getElementById("id_26").value);
    sim_gpci2020[0]["27_Proximity to World Heritage Sites"] = parseFloat(document.getElementById("id_27").value);
    sim_gpci2020[0]["28_Nightlife Options"] = parseFloat(document.getElementById("id_28").value);
    sim_gpci2020[0]["29_Number of Theaters"] = parseFloat(document.getElementById("id_29").value);
    sim_gpci2020[0]["30_Number of Museums"] = parseFloat(document.getElementById("id_30").value);
    sim_gpci2020[0]["31_Number of Stadiums"] = parseFloat(document.getElementById("id_31").value);
    sim_gpci2020[0]["32_Number of Hotel Rooms"] = parseFloat(document.getElementById("id_32").value);
    sim_gpci2020[0]["33_Number of Luxury Hotel Rooms"] = parseFloat(document.getElementById("id_33").value);
    sim_gpci2020[0]["34_Attractiveness of Shopping Options"] = parseFloat(document.getElementById("id_34").value);
    sim_gpci2020[0]["35_Attractiveness of Dining Options"] = parseFloat(document.getElementById("id_35").value);
    sim_gpci2020[0]["36_Number of Foreign Residents"] = parseFloat(document.getElementById("id_36").value);
    sim_gpci2020[0]["37_Number of Foreign Visitors"] = parseFloat(document.getElementById("id_37").value);
    // Li
    sim_gpci2020[0]["38_Total Unemployment Rate"] = parseFloat(document.getElementById("id_38").value);
    sim_gpci2020[0]["39_Total Working Hours"] = parseFloat(document.getElementById("id_39").value);
    sim_gpci2020[0]["40_Workstyle Flexibility"] = parseFloat(document.getElementById("id_40").value);
    sim_gpci2020[0]["41_Housing Rent"] = parseFloat(document.getElementById("id_41").value);
    sim_gpci2020[0]["42_Price Level"] = parseFloat(document.getElementById("id_42").value);
    sim_gpci2020[0]["43_Number of Murders"] = parseFloat(document.getElementById("id_43").value);
    sim_gpci2020[0]["44_Economic Risk of Natural Disaster"] = parseFloat(document.getElementById("id_44").value);
    sim_gpci2020[0]["45_Life Expectancy"] = parseFloat(document.getElementById("id_45").value);
    sim_gpci2020[0]["46_Social Freedom and Equality"] = parseFloat(document.getElementById("id_46").value);
    sim_gpci2020[0]["47_Risk to Mental Health"] = parseFloat(document.getElementById("id_47").value);
    sim_gpci2020[0]["48_Number of Medical Doctors"] = parseFloat(document.getElementById("id_48").value);
    sim_gpci2020[0]["49_ICT Readiness"] = parseFloat(document.getElementById("id_49").value);
    sim_gpci2020[0]["50_Number of Retail Shops"] = parseFloat(document.getElementById("id_50").value);
    sim_gpci2020[0]["51_Number of Restaurants"] = parseFloat(document.getElementById("id_51").value);
    // En
    sim_gpci2020[0]["52_Commitment to Climate Action"] = parseFloat(document.getElementById("id_52").value);
    sim_gpci2020[0]["53_Renewable Energy Rate"] = parseFloat(document.getElementById("id_53").value);
    sim_gpci2020[0]["54_Waste Recycle Rate"] = parseFloat(document.getElementById("id_54").value);
    sim_gpci2020[0]["55_CO2 Emissions per Capita"] = parseFloat(document.getElementById("id_55").value);
    sim_gpci2020[0]["56_Air Quality"] = parseFloat(document.getElementById("id_56").value);
    sim_gpci2020[0]["57_Comfort Level of Temperature"] = parseFloat(document.getElementById("id_57").value);
    sim_gpci2020[0]["58_Water Quality"] = parseFloat(document.getElementById("id_58").value);
    sim_gpci2020[0]["59_Urban Greenery"] = parseFloat(document.getElementById("id_59").value);
    sim_gpci2020[0]["60_Satisfaction with Urban Cleanliness"] = parseFloat(document.getElementById("id_60").value);
    // Ac
    sim_gpci2020[0]["61_Cities with Direct International Flights"] = parseFloat(document.getElementById("id_61").value);
    sim_gpci2020[0]["62_International Freight Flows"] = parseFloat(document.getElementById("id_62").value);
    sim_gpci2020[0]["63_Number of Air Passengers"] = parseFloat(document.getElementById("id_63").value);
    sim_gpci2020[0]["64_Number of Arrivals and Departures at the Airport"] = parseFloat(document.getElementById("id_64").value);
    sim_gpci2020[0]["65_Station Density"] = parseFloat(document.getElementById("id_65").value);
    sim_gpci2020[0]["66_Public Transportation Use"] = parseFloat(document.getElementById("id_66").value);
    sim_gpci2020[0]["67_Travel Time to Airports"] = parseFloat(document.getElementById("id_67").value);
    sim_gpci2020[0]["68_Commuting Time"] = parseFloat(document.getElementById("id_68").value);
    sim_gpci2020[0]["69_Traffic Congestion"] = parseFloat(document.getElementById("id_69").value);
    sim_gpci2020[0]["70_Ease of Mobility by Taxi or Bicycle"] = parseFloat(document.getElementById("id_70").value);
    
    // Indicator group score
    var gpci2020_idg = [];
    for (var i = 0; i <= 47; i++) {
      var arr = [
        {
          "city": gpci2020[0][i]["city"], 
          // Ec
          "Market Size": ( gpci2020[0][i]["01_Nominal GDP"] + gpci2020[0][i]["02_GDP per Capita"])/2,
          "Market Attractiveness": ( gpci2020[0][i]["03_GDP Growth Rate"] + gpci2020[0][i]["04_Economic Freedom"])/2,
          "Economic Vitality": ( gpci2020[0][i]["05_Stock Market Capitalization"] + gpci2020[0][i]["06_World's Top 500 Companies"])/2,
          "Human Capital": ( gpci2020[0][i]["07_Total Employment"] + gpci2020[0][i]["08_Employees in Business Support Services"])/2,
          "Business Environment": ( gpci2020[0][i]["09_Wage Level"] + gpci2020[0][i]["10_Availability of Skilled Human Resources"] + gpci2020[0][i]["11_Variety of Workplace Options"])/3,
          "Ease of Doing Business": ( gpci2020[0][i]["12_Corporate Tax Rate"] + gpci2020[0][i]["13_Political, Economic and Business Risk"])/2,
          // Re
          "Academic Resources": ( gpci2020[0][i]["14_Number of Researchers"] + gpci2020[0][i]["15_World's Top Universities"])/2,
          "Research Environment": ( gpci2020[0][i]["16_Research and Development Expenditure"] + gpci2020[0][i]["17_Number of International Students"] + gpci2020[0][i]["18_Academic Performance"])/3,
          "Innovation": ( gpci2020[0][i]["19_Number of Patents"] + gpci2020[0][i]["20_Winners of Prizes in Science and Technology"] + gpci2020[0][i]["21_Number of Startups"])/3,
          // Cu
          "Trendsetting Potential": ( gpci2020[0][i]["22_Number of International Conferences"] + gpci2020[0][i]["23_Number of Cultural Events"] + gpci2020[0][i]["24_Cultural Content Export Value"] + gpci2020[0][i]["25_Art Market Environment"])/4,
          "Tourism Resources": ( gpci2020[0][i]["26_Tourist Attractions"] + gpci2020[0][i]["27_Proximity to World Heritage Sites"] + gpci2020[0][i]["28_Nightlife Options"])/3,
          "Cultural Facilities": ( gpci2020[0][i]["29_Number of Theaters"] + gpci2020[0][i]["30_Number of Museums"] + gpci2020[0][i]["31_Number of Stadiums"])/3,
          "Visitor Amenities": ( gpci2020[0][i]["32_Number of Hotel Rooms"] + gpci2020[0][i]["33_Number of Luxury Hotel Rooms"] + gpci2020[0][i]["34_Attractiveness of Shopping Options"] + gpci2020[0][i]["35_Attractiveness of Dining Options"])/4,
          "International Interaction": ( gpci2020[0][i]["36_Number of Foreign Residents"] + gpci2020[0][i]["37_Number of Foreign Visitors"])/2,
          // Li
          "Working Environment": ( gpci2020[0][i]["38_Total Unemployment Rate"] + gpci2020[0][i]["39_Total Working Hours"] + gpci2020[0][i]["40_Workstyle Flexibility"])/3,
          "Cost of Living": ( gpci2020[0][i]["41_Housing Rent"] + gpci2020[0][i]["42_Price Level"])/2,
          "Security and Safety": ( gpci2020[0][i]["43_Number of Murders"] + gpci2020[0][i]["44_Economic Risk of Natural Disaster"])/2,
          "Well-Being": ( gpci2020[0][i]["45_Life Expectancy"] + gpci2020[0][i]["46_Social Freedom and Equality"] + gpci2020[0][i]["47_Risk to Mental Health"])/3,
          "Ease of Living": ( gpci2020[0][i]["48_Number of Medical Doctors"] + gpci2020[0][i]["49_ICT Readiness"] + gpci2020[0][i]["50_Number of Retail Shops"] + gpci2020[0][i]["51_Number of Restaurants"])/4,
          // En
          "Sustainability": ( gpci2020[0][i]["52_Commitment to Climate Action"] + gpci2020[0][i]["53_Renewable Energy Rate"] + gpci2020[0][i]["54_Waste Recycle Rate"])/3,
          "Air Quality and Comfort": ( gpci2020[0][i]["55_CO2 Emissions per Capita"] + gpci2020[0][i]["56_Air Quality"] + gpci2020[0][i]["57_Comfort Level of Temperature"])/3,
          "Urban Environment": ( gpci2020[0][i]["58_Water Quality"] + gpci2020[0][i]["59_Urban Greenery"] + gpci2020[0][i]["60_Satisfaction with Urban Cleanliness"])/3,
          // Ac
          "International Network": ( gpci2020[0][i]["61_Cities with Direct International Flights"] + gpci2020[0][i]["62_International Freight Flows"])/2,
          "Air Transport Capacity": ( gpci2020[0][i]["63_Number of Air Passengers"] + gpci2020[0][i]["64_Number of Arrivals and Departures at the Airport"])/2,
          "Inner-City Transportation": ( gpci2020[0][i]["65_Station Density"] + gpci2020[0][i]["66_Public Transportation Use"] + gpci2020[0][i]["67_Travel Time to Airports"])/3,
          "Transport Comfortability": ( gpci2020[0][i]["68_Commuting Time"] + gpci2020[0][i]["69_Traffic Congestion"] + gpci2020[0][i]["70_Ease of Mobility by Taxi or Bicycle"])/3
        }
      ];
      gpci2020_idg.push(arr);
    };
    
    // Function score
    var gpci2020_f = [];
    for (var i = 0; i <= 47; i++) {
      var arr = [
      {
        "city": gpci2020_idg[i][0]["city"], 
        "Economy": (gpci2020_idg[i][0]["Market Size"] + gpci2020_idg[i][0]["Market Attractiveness"] + gpci2020_idg[i][0]["Economic Vitality"] + gpci2020_idg[i][0]["Human Capital"] + gpci2020_idg[i][0]["Business Environment"] + gpci2020_idg[i][0]["Ease of Doing Business"]),
        "R&D":  (gpci2020_idg[i][0]["Academic Resources"] + gpci2020_idg[i][0]["Research Environment"] + gpci2020_idg[i][0]["Innovation"]),
        "Cultural Interaction": (gpci2020_idg[i][0]["Trendsetting Potential"] + gpci2020_idg[i][0]["Tourism Resources"] + gpci2020_idg[i][0]["Cultural Facilities"] + gpci2020_idg[i][0]["Visitor Amenities"] + gpci2020_idg[i][0]["International Interaction"]),
        "Livability": (gpci2020_idg[i][0]["Working Environment"] + gpci2020_idg[i][0]["Cost of Living"] + gpci2020_idg[i][0]["Security and Safety"] + gpci2020_idg[i][0]["Well-Being"] + gpci2020_idg[i][0]["Ease of Living"]),
        "Environment": (gpci2020_idg[i][0]["Sustainability"] + gpci2020_idg[i][0]["Air Quality and Comfort"] + gpci2020_idg[i][0]["Urban Environment"]),
        "Accessibility": (gpci2020_idg[i][0]["International Network"] + gpci2020_idg[i][0]["Air Transport Capacity"] + gpci2020_idg[i][0]["Inner-City Transportation"] + gpci2020_idg[i][0]["Transport Comfortability"])
      }
      ];
      gpci2020_f.push(arr[0]);
    };

    // Comprehensive score
    var gpci2020_sim = [];
    for (var i = 0; i <= 47; i++) {
      var arr = 
        {
          "city": gpci2020_f[i]["city"],
          "Economy": gpci2020_f[i]["Economy"],
          "R&D":  gpci2020_f[i]["R&D"],
          "Cultural Interaction": gpci2020_f[i]["Cultural Interaction"],
          "Livability": gpci2020_f[i]["Livability"],
          "Environment": gpci2020_f[i]["Environment"],
          "Accessibility": gpci2020_f[i]["Accessibility"],
          "total": (gpci2020_f[i]["Economy"] + gpci2020_f[i]["R&D"] + gpci2020_f[i]["Cultural Interaction"] + gpci2020_f[i]["Livability"] + gpci2020_f[i]["Environment"] + gpci2020_f[i]["Accessibility"]) 
        };
        
      gpci2020_sim.push(arr);
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
    gpci2020_sim.sort((a,b) => b.total - a.total)
  

  // List of subgroups = header of the csv files = soil condition here
  const subgroups = ["Economy","R&D","Cultural Interaction","Livability","Environment","Accessibility"]

  // List of groups = species here = value of the first column called group -> I show them on the X axis
  const groups = gpci2020_sim.map(d => (d.city))

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
    (gpci2020_sim)

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

// Highlight edited cells in gray
jQuery(function(){
  var cell = $('.inputTable');
  cell.change(function(){
     $(this).addClass('active');
  });
});

// Menu bar
jQuery(function(){
  $("#open_nav").on("click", function(){
      $("#nav").toggleClass("show");
  })
});

jQuery(function(){
  $("nav").on("click", function(){
      $("#nav").removeClass("show");
  })
});
