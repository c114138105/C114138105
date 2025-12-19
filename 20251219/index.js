function onDeviceReady() {
    //宣告ary_MapName, ary_MapImg, ary_MapPos陣列
    //依序用來放置 夜市名稱, 夜市圖, 夜市地址
    var ary_MapName = new Array("東海夜市", "逢甲夜市", "中華夜市", "廟東夜市", "旱溪夜市", "龍富夜市", "忠孝夜市");
    var ary_MapImg = new Array("A01", "A02", "A03", "A04", "A05", "A06", "A07");
    var ary_MapPos = new Array("台中市龍井區新興路", "台中市西屯區文華路", "台中市中區中華路一段", "台中市豐原區中正路167巷", "台中市東區旱溪東路一段", "台中市南屯區龍富路", "台中市南區忠孝路");

    //使用for迴圈將陣列的內容放入listNightMarket的ListView元件
    $("#listNightMarket").empty();
    for (var i = 0; i < ary_MapImg.length; i++) {
        $("#listNightMarket").append
            ("<li><a href='https://www.google.com.tw/maps?q=" + ary_MapPos[i] + "'><img src='img/" + ary_MapImg[i] + ".jpg'><h3>" + ary_MapName[i] + "</h3><p>" + ary_MapPos[i] + "</p></a></li>");
    }
    $("#listNightMarket").listview("refresh");

    // 處理 Cordova 暫停與繼續事件
    document.addEventListener('pause', onPause.bind(this), false);
    document.addEventListener('resume', onResume.bind(this), false);

    // TODO: Cordova 已載入。請在這裡執行任何需要 Cordova 的初始化作業。
    var parentElement = document.getElementById('deviceready');
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');
};