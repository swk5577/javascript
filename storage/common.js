const elNav = document.querySelectorAll('nav a');

let pageNum = localStorage.pageNum || 0; //앞조건이 안맞으면 0을 넣음
//0조차 넣고싶지않다면 if문으로 실행을 막을수도 있음
elNav[pageNum].style.color = 'yellow';

elNav.forEach((v,k) => {
    v.onclick = function(e){
        localStorage.pageNum = k;
        location.href = this.href;
        // elNav[k].style = `color : blue`;
    }
})

/* localStorage.키 = 값(문자. 숫자. 객체. 배열);
localStorage.키

JSON.parse(객체형식의 문자);    문자 > 객체
JSON.stringify(객체);           객체 > 문자 */


switch(pageNum){
    case 'pageNum' : // main 실행;
    default : //모든 케이스에 해당되지않는다면 실행
}

