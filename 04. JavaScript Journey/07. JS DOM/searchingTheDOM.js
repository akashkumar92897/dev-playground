// document.getElementsByClassName("box")
// // HTMLCollection(6) [div.box, div.box, div.box.special, div.box, div#green.box, div.box, boxName: div.box, green: div#green.box]

// document.getElementById("green")
// // <div id=​"green" class=​"box">​box 4​</div>​

// document.getElementsByTagName("div")
// // HTMLCollection(7) [div#mainContainer.container, div.box, div.box, div.box.special, div.box, div#green.box, div.box, mainContainer: div#mainContainer.container, boxName: div.box, green: div#green.box]

// document.getElementsByName("boxName")
// // NodeList(3) [div.box, div.box, div.box.special]

// document.querySelector(".box")
// // <div class=​"box" name=​"boxName">​box 1​</div>​

// document.querySelectorAll(".box")
// // NodeList(6) [div.box, div.box, div.box.special, div.box, div#green.box, div.box]

// -------------------------------------------------------------------------------------------------------------------

let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "orange";
}

document.getElementById("green").style.backgroundColor = "green";

let divs = document.getElementsByTagName("div");

for (let i = 1; i < divs.length; i++) {
    divs[i].style.backgroundColor = "pink";
}

let namedBoxes = document.getElementsByName("boxName");

for (let i = 0; i < namedBoxes.length; i++) {
    namedBoxes[i].style.backgroundColor = "purple";
}

document.querySelector(".box").style.backgroundColor = "red";

let allBoxes = document.querySelectorAll(".box");

allBoxes.forEach(box => {
    box.style.backgroundColor = "yellow";
});

// -------------------------------------------------------------------------------------------------------------------

// --------------- 🔎 Important Difference ---------------
// Method                                   Loop Needed?
// getElementById                               ❌
// querySelector	                            ❌
// getElementsByClassName	                    ✅
// getElementsByTagName	                        ✅  
// getElementsByName	                        ✅
// querySelectorAll	                            ✅  