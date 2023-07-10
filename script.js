var btn_cargo=document.getElementById("cargobttn");






function funclogistic(){
    var div_cargo=document.getElementById("cargoworkdiv");
    var div_logistic=document.getElementById("logisticworkdiv");
    var btn_cargo=document.getElementById("cargobttn");

var btn_logistic=document.getElementById("logisticbttn");
    div_logistic.style.display='flex';
    btn_logistic.style.backgroundColor='#fbdc00';
    btn_cargo.style.backgroundColor="#e5dfdf"

    div_cargo.style.display='none';

}

var num=0;

function funcargo() {
    var div_cargo=document.getElementById("cargoworkdiv");
    var div_logistic=document.getElementById("logisticworkdiv");
    var btn_cargo=document.getElementById("cargobttn");

var btn_logistic=document.getElementById("logisticbttn");
    div_logistic.style.display='none';

    div_cargo.style.display='flex';

    btn_cargo.style.backgroundColor='#fbdc00';
    btn_logistic.style.backgroundColor="#e5dfdf"


}

document.addEventListener('scroll', () => {
    var idnav=document.getElementById("idnavbar");
    if(window.scrollY>0){
        idnav.classList.add('scrolled');
    }
    else{

        idnav.classList.remove('scrolled');
    }
})
var num=0;


function disappear(){

    


    num=num+1;

    

    var main_con=document.getElementById("mnc");

    var last_foot=document.getElementById("footerlast");
    var btn_nav=document.getElementById("naviconch");

    var last_nav=document.getElementById("appearnav");

    
    if(num%2){
        main_con.style.display='none';
    last_foot.style.display='none';
    last_nav.style.display='block';
    }
    else{
        main_con.style.display='block';
    last_foot.style.display='block';
    last_nav.style.display='none';
    }

    
      
}





function ds(){
    var l=document.documentElement.clientWidth;
    var main_con=document.getElementById("mnc");

    var last_foot=document.getElementById("footerlast");
    var btn_nav=document.getElementById("naviconch");

    var last_nav=document.getElementById("appearnav");

    if(l>767){
        main_con.style.display='block';
    last_foot.style.display='block';
    last_nav.style.display='none';
    }
    setTimeout(ds,10);
}

setTimeout(ds,10);


let valueDisplays = document.querySelectorAll(".counter-numbers");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue +=1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});