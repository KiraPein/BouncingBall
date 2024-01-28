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
});

$(".pause").click(function () {
    z = 0;
});

$(".play").click(function () {
    z = 1;
});

$(document).ready(function () {
    myVar = setInterval("calculate()", 1);
});

function calculate() {

    if (z == 1) {
        var j = y;
        g = document.getElementById("grr").value;
        e = document.getElementById("cor").value;
        d = document.getElementById("add").value;
        gg = parseFloat(g);
        ee = parseFloat(e);
        dd = parseFloat(d);
        gg = gg * 1;
        if (j >= end) {
            v = e * (-v);
            j = end - (j - end);
        }
        if (v >= 0) {
            v += gg;
            v -= v * v * dd * 0.000001;
        }
        else {
            v += gg;
            v += v * v * dd * 0.000001;
        }
        j = j + v * 0.005;
        y = j;
        if (j <= end)
            $(".ball").css("top", y + "px");
        else
            $(".ball").css("top", end + "px");
    }
}