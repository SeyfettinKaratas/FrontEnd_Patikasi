let last=document.querySelector("#list>li:last-child")
last.innerHTML="jhdfjgvjk"
let first=document.querySelector("#list>li:first-child")
first.innerHTML="dfgıjjpoghth"

let ulDom=document.querySelector("ul#list")
let liDom=document.createElement('li')

liDom.innerHTML="yeni"
ulDom.append(liDom) // en sona ekler

//ulDom.prepend(liDom) // en başa ekler
console.log(!!2)