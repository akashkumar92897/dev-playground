// innerHTML        =>      get the HTML inside the element as a string (valid for nodes only)
// outerHTML        =>      get the full HTML (innerHTML + the element itself)
// tagName          =>      only exist for Element nodes
// nodeName         =>      exist for any node (text, Comment, etc.)
// textContent      =>      access to the text inside the element: only text, minus all tags.

// -------------------------------------------------------------------------------------------------------------------------------------------------

document.querySelector(".container")
// <div class=​"container">​…​</div>​

document.querySelector(".container").innerHTML
// '\n        <div class="box">This is a box</div>\n 

document.querySelector(".container").innerText
// 'This is a box'

document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">This is a box</div>\n    </div>'

document.querySelector(".container").nodeName
// 'DIV'

document.querySelector(".container").tagName
// 'DIV'

document.querySelector(".container").textContent
// '\n        This is a box\n    '

// -------------------------------------------------------------------------------------------------------------------------------------------------

document.querySelector(".box")
// <div class=​"box">​This is a box​</div>​

document.querySelector(".box").innerHTML
// 'This is a box'

document.querySelector(".box").innerText
// 'This is a box'

document.querySelector(".box").outerHTML
// '<div class="box">This is a box</div>'

document.querySelector(".box").tagName
// 'DIV'

document.querySelector(".box").nodeName
// 'DIV'

document.querySelector(".box").textContent
// 'This is a box'

// -------------------------------------------------------------------------------------------------------------------------------------------------

document.querySelector(".container").hidden
// false        =>   because .container is not hidden

// document.querySelector(".container").hidden = true
// true         =>   becomes hidden on giving true.
// <div class="container" hidden="">
//         <div class="box">This is a box</div>
//     </div>

// -------------------------------------------------------------------------------------------------------------------------------------------------

document.querySelector(".box").innerHTML = "This is Akash"
// 'This is Akash'      =>      can change innerHTML of any class/id
// <div class="box">This is Akash</div>

// -------------------------------------------------------------------------------------------------------------------------------------------------

// Attribute Methods 
document.querySelector(".box").hasAttribute("style")
// true     =>      check fro existence of an attribute

document.querySelector(".box").getAttribute("style")
// 'color: blueviolet;'     =>      get the value of attribute

document.querySelector(".box").setAttribute("style", "color: pink")
// undefined        =>      update the attribute
// <div class="box" style="color: pink">This is a box</div>

document.querySelector(".box").removeAttribute("style")
// undefined        =>      remove the attribute

document.querySelector(".box").attributes
// NamedNodeMap {0: class, class: class, length: 1}     => get the collection of all attributes  

document.designMode = "on"
// 'on'     =>      To edit any website on the internet

document.querySelector(".box").dataset
// DOMStringMap {createdby: 'Akash'}        =>      this is an example of custom attribute

// -------------------------------------------------------------------------------------------------------------------------------------------------

// Insertion Methods
let div = document.createElement("div");
div.innerHTML = "I have been inserted <b> by Akash </b>"
div.setAttribute("class", "created");

let div1 = document.createElement("div1");
div1.innerHTML = "I have been discarded <b> by Akash </b>"
div.setAttribute("class", "created");

document.querySelector(".container").append(div)
// append at the end of node

// document.querySelector(".container").prepend(div)
// insert at the beginning of node

// document.querySelector(".container").before(div)
// insert before node

// document.querySelector(".container").after(div)
// insert after node

// document.querySelector(".container").replaceWith(div1)
// replaces node with the given node

// -------------------------------------------------------------------------------------------------------------------------------------------------

// insertAdjacentHTMl / insertAdjacentText / insertAdjacentElement
// 1. "beforebegin"    =>  insert immediately before element
// 2. "afterbegin"     =>  insert into element at the begining
// 3. "beforeend"      =>  insert into element at the end
// 4. "afterend"       =>  insert immediately after element

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend", "<b> This is sooooo gd</b>")

// -------------------------------------------------------------------------------------------------------------------------------------------------

// Node Removal
let id1 = document.getElementById("id1")
id1.remove()        // => removes id from element

// -------------------------------------------------------------------------------------------------------------------------------------------------

// ClassName & ClassList
document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'red', 'white', value: 'container red white']

document.querySelector(".container").className
// 'container red white'

document.querySelector(".container").classList.add("JSDOM")
// undefined

document.querySelector(".container").classList
// DOMTokenList(4) ['container', 'red', 'white', 'JSDOM', value: 'container red white JSDOM']

document.querySelector(".container").classList.toggle("red")
// false

document.querySelector(".container").classList.toggle("red")
// true