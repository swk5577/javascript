
function dataChange(pageUrl){
    $('main').removeClass('active');

    setTimeout(()=>{
        $('main').load(pageUrl,function(){
                $('main').addClass('active')
        });
    },1000)
}
dataChange('./main.html')

$('header a').on('click',function(e){
    e.preventDefault();

    let url = $(this).attr('href');
    history.pushState({num:$(this).index()},'','');
})
    //페이지가 하나이기때문에 뒤로가기값을 일부러 쌓아주는것 3번째자리는 필요x 궂이 사용하기위해서는 '#'을 넣어줌 ('#'+url)
    dataChange(url)

$(window).on('popstate',function(){
    let num = history.state?.num || 0;
    let url = $('header a').eq(num).attr('href');
    dataChange(url)
})