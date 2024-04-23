var nav=document.querySelectorAll(".horizontal a");

//console.log(nav)
for (var i=0;i<nav.length;i++){
    nav[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSec=this.textContent.trim().toLowerCase();
        var targetID=document.getElementById(targetSec);
        var interval=setInterval(function(){
            var pos=targetID.getBoundingClientRect();
            if (pos.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}
var barid=document.getElementById("skillbarID");
var progressbar=document.querySelectorAll(".eightyfive_per_skill")
var animation=false;
window.addEventListener('scroll',navscrollby);

function initialise(){
    for (let skill of progressbar){
        skill.style.width=0+'%';
    }
}
initialise()
function fillbar(){
    for (let bar of progressbar){
    let currentwidth=0;
    let actualwidth= bar.getAttribute('bar-width');
    let barinterval=setInterval(function(){
        if(currentwidth>actualwidth){
            clearInterval(barinterval);
            return;
        }
        currentwidth++
        bar.style.width=currentwidth+'%';
    },20);
    }
}
function navscrollby(){
    var pos=barid.getBoundingClientRect();
    if(!animation && pos.top<=window.innerHeight){
        console.log("reached ")
        animation=true;  
        fillbar();
    }
    else if( pos.top>window.innerHeight){
        animation=false;
        initialise();
    }

}
/*$('#profile_image img').mouseenter(function(){
    $('#profile_image').animate({
                        height: '16rem',
                        width: '16rem'
},300);
});
$('#profile_image img').mouseleave(function(){
    $('#profile_image').animate({
                        height: '14rem',
                        width: '14rem'
},300);
});*/