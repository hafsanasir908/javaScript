console.log("hello js");

 let a = document.querySelector('h1');
 /*simple variable mai store kara dia clg krne k liye*/

 console.log(a);

//  let b = document.querySelector('p')
//  b.innerHTML = "i am a university student"
//  b.style.backgroundColor = "purple";
//  b.style.color = "yellow";
//  b.addEventListener('click' , ()=>{
//     console.log("alpha")
//  })
 
 //console.log(b);

 let c = document.querySelector('h2');
 
 console.log(c);


 c.addEventListener('click' , ()=>{
    c.style.backgroundColor = 'red'
    c.style.color = "white"
    c.innerHTML = "saud"
 })

 let box = document.querySelector('p');
 let button = document.querySelector('button');

 button.addEventListener('click', ()=>{
    console.log("button clicked")
    box.style.backgroundColor = "pink";
    box.style.scale = "1";
 })

 let off =  document.querySelector('.off')

 offButton.addEventListener('click' , ()=>{
   box.style.scale = "0.5";
 })

//   button.addEventListener('click', ()=>{
//     console.log("button clicked")
//     box.style.backgroundColor = "pink";
//     box.style.scale = "0.3";
//  })




 
