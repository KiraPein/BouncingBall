var v = 0;
var u=0;
var y = 100;
// var g =9.8;
// var e=0.8;
// var d=0;
var g, e, d;
var z = 0;
var end=446;
var gg,ee,dd;
$(".restart").click(function () {
    z = 0;
    y=100;
    v=0;
    $("#grr").attr("value","9.8");
    $("#cor").attr("value","0.8");
    $("#add").attr("value","0.0");
    $(".ball").css("top",y);
});

$(".pause").click(function () {
    z = 0;
});

$(".play").click(function () {
    //alert("hell");
    z = 1;
});

$(document).ready(function(){
    // alert("ram");
    myVar = setInterval("calculate()", 1000/60);
});

function calculate(){
    
    if(z==1){
        //console.log("hi");
        var j=y;
        g=document.getElementById("grr").value; 
        e=document.getElementById("cor").value; 
        d=document.getElementById("add").value;
        // console.log("v="+v);
        // if(v<10.0&&v>-10){
        // console.log(450-(j-100)-100);}
        gg=parseFloat(g);
        gg=gg*1;
        ee=parseFloat(e);
        dd=parseFloat(d);
        if(j>=end){
            v=e*(-v);
            j=end-(j-end);
        }
        else{

        }
        if(v>=0){
            v+=gg;
            v-=v*dd*0.001;
        }
        else{
            v+=gg;
            v-=v*dd*0.001;
        }
       
        j=j+v*0.005;
        
        

        y=j;
        // console.log(y);
        $(".ball").css("top",y+"px");

    }


}