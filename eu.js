let number1= Math.floor(Math.random()*10)
let number2= Math.floor(Math.random()*10)
let number3= Math.floor(Math.random()*10)
let dif=0;

/// -----------------correct answer------------------------------------

if(number1> number2 && number1> number3){
      ///-------------------------
    if( number2 > number3){
        if((number1-number3) === number2){
            console.log('|',number1,number2,number3,'|', 'the result:',(number1-number3),'is equal to', number2 );
        }else if((number1-number3) > number2){
            console.log('|',number1,number2,number3,'|', 'the result:',(number1-number3),'is greater than', number2 );
        }else{
            console.log('|',number1,number2,number3,'|', 'the result:',(number1-number3),'is less than', number2 );
        }

    }else{
        if((number1-number2) === number3){
            console.log('|',number1,number2,number3,'|', 'the result:',(number1-number2),'is equal to', number3 );
        }else if((number1-number2) > number3){
            console.log('|',number1,number2,number3,'|', 'the result:',(number1-number2),'is greater than', number3 );
        }else{
            console.log('|',number1,number2,number3,'|', 'the result:',(number1-number2),'is less than', number3 );
        }
    }
  ///-------------------------
}else if (number2> number1 && number2> number3){
    ///-------------------------
    
    if( number1 > number3){
        if((number2-number3) === number1){
            console.log('|',number1,number2,number3,'|', 'the result:',(number2-number3),'is equal to', number1 );
        }else if((number1-number3) > number2){
            console.log('|',number1,number2,number3,'|', 'the result:',(number2-number3),'is greater than', number1 );
        }else{
            console.log('|',number1,number2,number3,'|', 'the result:',(number2-number3),'is less than', number1 );
        }

    }else{
        if((number2-number1) === number3){
            console.log('|',number1,number2,number3,'|', 'the result:',(number2-number1),'is equal to', number3 );
        }else if((number1-number3) > number2){
            console.log('|',number1,number2,number3,'|', 'the result:',(number2-number1),'is greater than', number3 );
        }else{
            console.log('|',number1,number2,number3,'|', 'the result:',(number2-number1),'is less than', number3 );
        }
    }
    ///--------------------------
}else if (number3> number1 && number3> number2){
   ///-------------------------
    
   if( number1 > number2){
    if((number3-number2) === number1){
        console.log('|',number1,number2,number3,'|', 'the result:',(number3-number2),'is equal to', number1 );
    }else if((number3-number1) > number2){
        console.log('|',number1,number2,number3,'|', 'the result:',(number3-number2),'is greater than', number1 );
    }else{
        console.log('|',number1,number2,number3,'|', 'the result:',(number3-number2),'is less than', number1 );
    }

}else{
    if((number3-number1) === number2){
        console.log('|',number1,number2,number3,'|', 'the result:',(number3-number1),'is equal to', number2 );
    }else if((number3-number1) > number2){
        console.log('|',number1,number2,number3,'|', 'the result:',(number3-number1),'is greater than', number2 );
    }else{
        console.log('|',number1,number2,number3,'|', 'the result:',(number3-number1),'is less than', number2 );
    }
}
///--------------------------
}else if(number1 === number2 && number1 === number3){
  console.log(number1,'and',number2, 'and ',number3,'are equal');
}else if(number2=== number1 && number1 > number3){
    if((number1-number3)=== number1){
        console.log('|',number1,number2,number3,'| the result', (number1-number3),'is equal to ',number1);
    }else{
    console.log('|',number1,number2,number3,'|',(number1-number3),'is less than', number2);
}
}else if(number3=== number1 && number1 > number2){
    if((number1-number2)=== number1){
        console.log('|',number1,number2,number3,'| the result', (number1-number2),'is equal to ',number1);
    }else{
    console.log('|',number1,number2,number3,'| the result',(number1-number3),'is less than', number2);
}
}else if(number3=== number2 && number1 < number2){
    if((number2-number1)=== number3){
        console.log('|',number1,number2,number3,'| the result', (number2-number1),'is equal to ',number2);
    }else{
    console.log('|',number1,number2,number3,'| the result',(number2-number1),'is less than', number2);
}
}

/// -----------------correct answer------------------------------------















// if(number1>=number2 && number1>=number3 && number2>=number3)    
//     {
//         dif=number1-number3;
//         if(dif===number2){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else if(dif===number3){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else{
//         console.log('the great between',number1,number2,number3,'is',number1,'the difference btn great and low is:',dif)}
//     }
//     else if(number1>=number2 && number1>=number3 && number3>=number2)    
//     {
//         dif=number1-number2;
//         if(dif===number3){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else if(dif===number3){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else{
//         console.log('the great between',number1,number2,number3,'is',number1,'the difference btn great and low is:',dif)}
//     }
// else if(number2>=number1 && number2>=number3 && number1>=number3){
//     dif=number2-number3;
//         if(dif===number1){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else if(dif===number3){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else{
//     console.log('the great between',number1,number2,number3,'is',number2,'the difference btn great and low is:',dif)}
// }
// else if(number2>=number1 && number2>=number3 && number3>=number1){
//     dif=number2-number1;
//         if(dif===number3){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else if(dif===number1){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else{
//     console.log('the great between',number1,number2,number3,'is',number2,'the difference btn great and low is:',dif)}
// }
// else if(number3>=number1 && number3>=number2 && number2>=number1){
//     dif=number3-number1;
//         if(dif===number2){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else if(dif===number1){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else{
//     console.log('the great between',number1,number2,number3,'is',number3,'the difference btn great and low is:',dif)}
// }
// else if(number3>=number1 && number3>=number2 && number1>=number2){
//     dif=number3-number1;
//         if(dif===number2){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else if(dif===number1){
//             console.log(number1,number2,number3,'the difference btn high and lower is:',dif 
//             ,'is equal to second high number')
//         }
//         else{
//     console.log('the great between',number1,number2,number3,'is',number3,'the difference btn great and low is:',dif)}
// }
// else
// {
//     console.log('the are equality between', number1, number2, number3)
// }
