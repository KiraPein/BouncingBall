var v = 0, u = 0, y = 100;
var g, e, d;
var z = 0;
var end = 446;
var gg, ee, dd;
$(".restart").click(function () {
    z = 0;
    y = 100;
    v = 0;
    $("#grr").attr("value", "9.8");
    $("#cor").attr("value", "0.8");
    $("#add").attr("value", "0.0");
    $(".ball").css("top", y);
    cancelAnimationFrame(req);
});
$(".pause").click(function () {
    cancelAnimationFrame(req);
});
$(".play").click(function () {
    requestAnimationFrame(calculate);
});
function calculate() {
    var j = y;
    g = document.getElementById("grr").value;
    e = document.getElementById("cor").value;
    d = document.getElementById("add").value;
    gg = parseFloat(g)*1;
    ee = parseFloat(e);
    dd = parseFloat(d);
    var vv=v;
    v += gg*0.1;
    if (v >= 0) {
        v -= v * v * dd * 0.0001;
    }
    else {
        v += v * v * dd * 0.0001;
    }
    if(y+v>=end){
        v=-v*ee;
        $(".ball").css("top", end + "px");
        
    }
    else{
        y+=v;
        $(".ball").css("top", y + "px");
    }
    req = requestAnimationFrame(calculate);
}