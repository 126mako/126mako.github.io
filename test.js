$(window).on('load', function () {
    $("#splash-logo").delay(100).fadeOut('slow');//ロゴを0.1秒でフェードアウトする記述

    //=====ここからローディングエリア（splashエリア）を0.03秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(30).fadeOut('slow', function () {//ローディングエリア（splashエリア）を0.03秒でフェードアウトする記述

        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与

    });
    //=====ここまでローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    //=====ここから背景が伸びた後に動かしたいJSをまとめたい場合は
    $('.splashbg1').on('animationend', function () {
        //この中に動かしたいJSを記載
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる

});

function luckyItem(){
    let items = ["黄色いハンカチ", "蛙のitem", "airpods pro", "ペットボトルの水", "おいなりさん", "アンドーナッツ", "優しい麦茶", "食べ切った焼き鳥の串", "アクエリアス", "softbank Air", "50年前に出版された本", "AirRythmのマスク", "ジェリコのラッパ", "紫のヘアゴム", "トトロの人形", "とうもころし", "恋をしているとき、夜中に抱く名前のない感情"]
    // 配列からランダムで値を選択
    var a = items[ Math.floor( Math.random() * items.length ) ] ;
    document.getElementById("luckyItem").textContent = a;
    console.log(a)
    return false;
}

