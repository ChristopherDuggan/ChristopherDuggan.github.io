function showHome() {
    document.getElementById("home").style.display = "";
    document.getElementById("about").style.display = "none";
    document.getElementById("pics").style.display = "none";
}

function showAbout() {
    document.getElementById("home").style['display'] = "none";
    document.getElementById("about").style.display = "";
    document.querySelector("#pics").style.display = "none";
}

function showPics() {
    document.querySelector("#home").style['display'] = "none";
    document.querySelector("#about").style["display"] = "none";
    document.querySelector("#pics").style["display"] = '';
}

showHome();