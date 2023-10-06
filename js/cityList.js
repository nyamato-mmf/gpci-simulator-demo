
const cityList = [
    '札幌市',
'函館市',
'旭川市',
'釧路市',
'苫小牧市',
'青森市',
'弘前市',
'八戸市',
'盛岡市',
'仙台市',
'秋田市',
'山形市',
'福島市',
];
    
    for (let item of cityList) {
        const option = `<option value=${item}>${item}</option>`
        document.getElementById("city").insertAdjacentHTML("beforeend", option);
    }; 
    