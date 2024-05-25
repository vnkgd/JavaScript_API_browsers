// console.log(document.documentElement); // ter <html>
// console.log(document.body); // тег <body>
// console.log(document.head); // ter <head>

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
console.log(document.body.children);

// Сделаем в переборе коллекции вывод проверки, является ли OH div
// for (let val of document.body.children) {
//     console.log(val.localName === 'div' ? "Это DIV" : "Это He DIV");
// }

for (let val of document.body.childNodes) {
    console.dir(val.nodeType);
}
// // https://dom.spec.whatwg.org/#node

for (let val of document.body.childNodes) {
    console.dir(val.nodeValue);
}

