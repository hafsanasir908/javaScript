5 phases of dom manipulation
 
1. DOM  ( document object model )
2. selection of html elements
3. how to change or manipulate html
4. how to change css
5. event listeners (most imp : how to listen listeners)


-> to select html elements : 

css mi to direct tag likhte the jonsa bi select krna hota tha like h1 {} aise phir andr kuch bhi bg color etc..

but js mai aise krte :

document.querySelector("h1") -> pehle document likha it means k hmara pora document phir .querySelector keyword hai then bracket and quotation(double / single) mai jo bhi tag select krna hai


-> to change html elements

pehle to jo tag change krna hai usse select krlenge jese uper likha wa hai'

phir zahir si bat hai us  selected term ko hamne variable mi store karaya hoga aise : 
 
 let a = documnt.queryselector("h2") : e.g hai yai

 to change krne k liye,

 a.innerHtml = "...."

 sb se pehle jo varibale name hai phir.innerHTML keyword hai or quotation mai jo bhi change krna hai
 

 -> how to change css

 select kro simple pehle
 a.style.backgroundColor = "..."


-> event listener

a.addEventListener('event' , 'function') -> variable phir .addevent listner keywrod phir function yani k kia karen or event mtlb jb wo kam ho to kia for e.g:

a.addEventListener('click' , ()=>{
    console.log("alpha)
}) 

iska mtlb hai jb bhi ham a pr click (event) karen to alpha print hojye(function)