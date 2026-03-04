//-------------manipulating the html---------------------

let h1 =  document.querySelector('h1');

//changing text

h1.innerText = "my name is hafsa";

//html mai this is heading 1 hai pr hamne yahan change krdia to ab broweser pr my name is derha hoga


console.log(h1.innerText);
console.log(h1.textContent);

/* to change text in html :
1. innerText -> formating wagerah kuch count nhi krta

2. textContent ->formated text derha hota mtlb agr hamne kuchspacing wagerah extra di we to wo bhi sb deta yai
 */


//************************************************ */

//INNER ELEMENTS (ADDITION of ELEMENTS)

//*********************************************** */

let div = document.querySelector('div');

//creating element
let p = document.createElement('p');

//us eleement mai koi text dalne k liye
p.innerText = "happy new year";

// jo element create kra tha usse add krdia
// div.append(p);


/*append last mai element insert krta hai or agr top pr krna tha to us ki jagah prepend likhte lekin ek hi element ko do jagah nhi kara skte wo ek hi jagah hota hai*/

div.prepend(p);

/*agr hame div k bhi bahar krna hai agr top pr to  we use div.before(p) and agr last mai to we use div.after(p)*/





