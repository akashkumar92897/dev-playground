typeof(document)        // 'object'
typeof(window)         // 'object'

//-------------------------------------------------------------------------------

document.body.children
// HTMLCollection [table]

document.body.children[0]
// <table>​…​</table>​

document.body.children[0].rows
// HTMLCollection(4) [tr, tr, tr, tr]

document.body.children[0].caption
// null

document.body.children[0].tHead
// <thead>​…​</thead>​

document.body.children[0].tFoot
// null

document.body.children[0].tBodies
// HTMLCollection [tbody]

document.body.children[0].children[1].rows
// HTMLCollection(3) [tr, tr, tr]

document.body.children[0].children[1].children[0]
// <tr>​…​</tr>​

document.body.children[0].children[1].children[0].cells
// HTMLCollection(3) [td, td, td]

document.body.children[0].children[1].children[0].sectionRowIndex
// 0

document.body.children[0].children[1].children[0].rowIndex
// 1

document.body.children[0].children[1].children[0].children[0]
// <td>​Akash​</td>​

document.body.children[0].children[1].children[0].children[0].cellIndex
// 0


