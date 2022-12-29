if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 600);

}

var x = 0;

var titleText = [ "A", "Aq", "Aqu", "Aqua", "AquaW", "AquaWi", "AquaWit", "AquaWitt", "AquaWitty", "AquaWitt", "AquaWit", "AquaWi", "AquaW", "Aqua", "Aqu", "Aq", "A"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
