// let age = 19;
// let hasIDcard = false;

// if(age >= 18)
// {
//     if(hasIDcard == true)
//     {
//         console.log("welcome to the club");
//     }
//     else{
//         console.log("you need an id card")
//     }
// }

// else{
//     console.log("you are not allowed");
// }


//-----------------------x------------------------x------------------------x-------------------------------x------------------x

// let username  = "hafsa";
// let password = "123";

// let dbusername  = "hafsa";
// let dbpassword = "123";

// if(password == dbpassword && username == dbusername)
// {
//     console.log("logged in successfully");
// }
// else{
//     console.log("invalid username or password");
// }

//-----------------------------x-------------------------x--------------------------x---------------------------x--------------x



let cartValue = 40;
let finalCartValue;

if(cartValue < 50)
{
    console.log("no discount");
    finalCartValue = cartValue;
    
}

else if(cartValue >= 50 && cartValue < 100)
{
    console.log("10% disount is applied!");
    finalCartValue = cartValue - (cartValue * 0.1);
   

}

else
{
    console.log("20% disount is applied!");
    finalCartValue = cartValue - (cartValue * 0.2);

}

console.log("Final Cart Value:", finalCartValue);

