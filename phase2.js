//select elements by tag names

let a = document.getElementsByTagName('h1') //sare k sare h1 select hogaye isse
console.log(a);

//select elements by id

let b = document.getElementById('heading') //heading is our id of h1
console.log(b);

//select elements by class

let c = document.getElementsByClassName('hi')
console.log(c)



//to select any (universal selector)
let d = document.querySelector('.hi');
console.log(d);

let e = document.querySelector('#heading');
console.log(e)
