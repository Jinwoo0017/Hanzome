function showmore1() {
    document.getElementById("showmore1").style.display = "none";
    document.getElementById("second").style.display = "flex";
}

function showmore2() {
    document.getElementById("showmore2").style.display = "none";
    document.getElementById("third").style.display = "flex";
}

function showmore3() {
    document.getElementById("showmore3").style.display = "none";
    document.getElementById("fourth").style.display = "flex";
}

function showless1() {
    document.getElementById("showmore1").style.display = "flex";
    document.getElementById("showmore2").style.display = "flex";
    document.getElementById("showmore3").style.display = "flex";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "none";
}

function showmore4() {
    document.getElementById("showmore4").style.display = "none";
    document.getElementById("sixth").style.display = "flex";
}

function showless2() {
    document.getElementById("showmore4").style.display = "flex";
    document.getElementById("sixth").style.display = "none";
}

