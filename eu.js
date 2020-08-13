let number1= Math.floor(Math.random()*10)
let number2= Math.floor(Math.random()*10)
let number3= Math.floor(Math.random()*10)
let dif=0;
if(number1>number2 && number1>number3 && number2>number3)    
    {
        dif=number1-number3;
        if(dif===number2){
            console.log(dif ,'and',number2, 'are equal')
        }
        console.log('great is between',number1,number2,number3,'the number1 is:',number1)
    }
else if(number2>number1 && number2>number3 && number1>number3){
    dif=number2-number3;
        if(dif===number1){
            console.log(dif ,'and',number1, 'are equal')
        }
    console.log('great is between',number1,number2,number3,'the number2 is:',number2)
}
else if(number3>number1 && number3>number2 && number2>number1){
    dif=number3-number1;
        if(dif===number2){
            console.log(dif ,'and',number2, 'are equal')
        }
    console.log('great is between',number1,number2,number3,'the number3 is:',number3)
}
// else(number1===number2 && number1===number3 && number2===number3){
//     console.log('the are equality between', number1, number2, number3)
// }





//     else if(number1===number2){
// console.log( number1,number2,'no great btn')
//     }
//     else{
//         console.log('great is between ',number1,number2,'is:',number2)
    
    //      if(number2>number1 && number2>number3 && number1>number3) 
    //    {
    //        dif=number2-number3
    //       console.log('Middle is:',number1, 'greater is:',number2, 'low is:',number3,'And the different between great and low is',dif)
       
    //      if(number3>number1 && number3>number2 && number2>number1)
    //     {
    //     dif=number3-number1
    //     console.log('low is:',number1,'middle is:', number2, 'great is:',number3,'the different between great and low is',dif)
    //     }
    //    }
    // dif=number1-number3;
    // if(dif===number2){
    //     console.log(dif, number2,'both are equal')
    //      if(dif>number2){
    //         console.log(dif, number2,'answer is different') 
    //     }
    //     else{
    //         console.log('no result')
    //     }
    // }
    // else if(number2>number1){
    //     console.log(number1,'is less than', number2)
    // }
    
    // dif=number1-number3;
    // console.log('the difference is between:',number1,number2,number3,'is',dif)
    // if (dif-number2 && dif>number2){
    //     console.log(dif,'is greater than',number2)
    // }
    // else{
    //     console.log(number2,'is greater than',dif)
    // }
// else if (number2>number3 && number2>number1 && number1>number3){
//     console.log(number2,'is greater than all',number1, number3)
//     // dif=number2-number3;
//     // console.log('the difference is between:',number2,number1,number3,'is',dif)
// }
//     else if (number3>number1 && number3>number2 && number2>number1){
//         console.log(number3,'is greater than all',number2, number1)
//         // dif=number2-number3;
//         // console.log('the difference is between:',number3,number2,number1,'is',dif)
//     }
// else if(number1===number2){
//     console.log(number1,'is equal to', number2) 

