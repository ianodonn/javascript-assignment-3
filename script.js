// Do your work in this file.
var div1 = document.createElement("div");
div1.className = "view";
document.body.appendChild(div1);

var div2 = document.createElement("div");
div2.className = "grass";
div1.appendChild(div2);

var div3 = document.createElement("div");
div3.className = "sun";
div1.appendChild(div3);

var i = 1;

while (i < 6) {
    var div = document.createElement("div");
    div.className = "ray-" + i;
    div3.appendChild(div);
    i++;
}

var div4 = document.createElement("div");
div4.className = "mountain";
div1.appendChild(div4);

var div5 = document.createElement("div");
div5.className = "mountain-top";
div4.appendChild(div5);

var j = 0;

do {
    j++;
    var div = document.createElement("div");
    div.className = "mountain-cap-" + j;
    div5.appendChild(div);
} while (j < 4);