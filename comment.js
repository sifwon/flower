$(window).scroll(function() {
    // スクロール位置を取得
    let scroll = $(window).scrollTop();
    /*メインビジュアルの拡大・縮小*/
    mv_scale(scroll);
});
/*メインビジュアルの拡大・縮小（共通処理）*/
function mv_scale(scroll){
    // メインビジュアルのCSS（width）を変更する
    // widthの値をスクロール量にあわせて増やすことで画像を拡大させる
    $('#mainvisual img').css({
        'width': 100/3 + scroll/10  + '%'
    });
}