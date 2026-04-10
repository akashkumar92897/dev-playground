typeof(document)        // 'object'
typeof(window)         // 'object'

//-------------------------------------------------------------------------------

document.documentElement
// <html lang=​"en">​view-sourcescroll  =>  <head>​…​</head>    =>  ​<body>​…​</body>   =>  ​</html>​

document.body
// <body>   =>  ​<script src=​"script.js">​</script>    =>  ​<div class=​"container">​…​</div>  =>  ​</body>​

document.head
// <head>   =>  
// ​<script type=​"text/​javascript" src=​"/​___vscode_livepreview_injected_script">​</script> =>  
// ​<meta charset=​"UTF-8">
// ​<meta name=​"viewport" content=​"width=device-width, initial-scale=1.0">   =>  ​
// <title>​JS DOM​</title>    =>  
// ​<style>​…​</style> =>  ​
// </head>​

document.body.childNodes
// NodeList(5) [text, div.container, text, script, text]        =>      childNodes include every nodes  -->  text, element, comment

document.body.children
// HTMLCollection(2) [div.container, script]        =>      children include only element nodes

document.body.firstChild
// #text        =>      child includes every nodes

document.body.firstElementChild
// <div class=​"container">​…​</div>​       =>      ElementChild only include elements

document.body.firstElementChild.childNodes
// NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]

document.body.firstElementChild.childElementCount
// 5

document.body.firstElementChild.childNodes[0]
// #text

document.body.firstElementChild.childNodes[1]
// <div class=​"box">​box 1​</div>​

document.body.firstElementChild.childNodes[2]
// #text

document.body.firstElementChild.childNodes[4]
// #text

document.body.firstElementChild.childNodes[5]
// <div class=​"box">​box 3​</div>​

document.body.lastChild
// #text

document.body.lastElementChild
// <script src=​"script.js">​</script>​

document.body.firstElementChild
// <div class=​"container">​…​</div>​

document.body.firstElementChild.firstElementChild
// <div class=​"box">​box 1​</div>​

document.body.firstElementChild.lastElementChild
// <div class=​"box">​box 5​</div>​

document.body.firstElementChild.children[1]
// <div class=​"box">​box 2​</div>​

document.body.firstElementChild.children[1].previousElementSibling
// <div class=​"box">​box 1​</div>​

document.body.firstElementChild.children[1].nextElementSibling
// <div class=​"box">​box 3​</div>​

document.documentElement.parentNode
// #document (http://127.0.0.1:3000/index.html)#top-layer

document.documentElement.parentElement
// null
