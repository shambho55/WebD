let stocks = {
    fruits: ["strawberry","grapes","banana","apple"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    toppings:["chocolate","peanuts"],
};

// Callback Hell
/*
let order = (fruit_name,call_production) =>{
    // console.log("order placed, please start production.")
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected`);
    
         call_production();
    },2000);
   
}

let production = () =>{
    // console.log("order received , production is starting.");
    setTimeout(()=>{
        console.log("producted has started.");
    
    setTimeout(()=>{
        console.log("Fruit has been chopped");
        
    setTimeout(()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

    setTimeout(()=>{
        console.log("the machine has been started.");
        
    setTimeout(()=>{
        console.log(`ice cream was placed on ${stocks.holder[0]}.`);
    
    setTimeout(()=>{
        console.log(`${stocks.toppings[0]} was added as toppings.`);
        
    setTimeout(()=>{
        console.log("Serve the Ice Cream");
    },2000);
    },3000)
    },2000);
    },1000);
    },1000);
    },2000);
    },0);
    
}

order("0",production);
*/

// Promises

// let is_shop_open = true;

// let order = (time,work) => {
     
//     return new Promise( (resolve, reject)=>{
        
//         if(is_shop_open){
            
//             setTimeout( ()=>{
//                resolve(work()); 
//             },time);
//         }
//         else{
//             reject(console.log("our shop is closed."));
//         }
//     } );
// };

// order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))

//     .then(()=>{
    
//     return order(0,()=>{
//         console.log("production has started.");
//     })
// })

//     .then(()=>{
//         return order(2000,()=>console.log("the fruit was chopped"));
//     })

//     .then(()=>{
//         return order(1000,()=>{
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected.`);
//         });
//     })
//     .then(()=>{
//         return order(1000,()=>console.log("start the machine."));
//     })
//     .then(()=>{
//         return order(2000,()=>{
//             console.log(`Ice cream placed on ${stocks.holder[0]}.`);
//         });
//     })
//     .then(()=>{
//         return order(3000,()=>{
//             console.log(`${stocks.toppings[0]} was selected`);
//         });
//     })
//     .then(()=>{
//         return order(1000,()=>console.log("ice cream was served."));
//     })
    
//     // Error Handling
    
//     .catch(()=>{
//         console.log("Customer left.");  
//     })
    
//     // Finally Handler
    
//     .finally(()=>{
//         console.log("day ended, shop is closed.");
//     })

// Promise structure

// let order = ()=>{
    
//     return new Promise((resolve,reject)=>{
//         if(){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     })
// }

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()

// Async Awaits

// async function order(){
//     try{
//        await abc; 
//     }
//     catch(error){
//         console.log("abc doesn't exists",error);
//     }
//     finally{
//         console.log("runs code anyways.");
//     }
// }

// order()
// .then(()=>console.log("anything for you awaits."));

// Async function use

// let toppings_choice = ()=>{
    
//     return new Promise( (resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(console.log("Which topping would you like?"));
//         },3000)
//     } );
// };



// async function kitchen(){
//     console.log("A")
//     console.log("B")
//     console.log("C")
    
//     await toppings_choice()
    
//     console.log("D")
//     console.log("E")
// }

// kitchen()

// console.log("cleaning the dishes ");
// console.log("cleaning the tables");
// console.log("taking other orders");

// Ice Cream using Promises and Async

// function time(ms){
//     return new Promise( (resolve,reject)=>{
//         if(is_shop_open){
//             setTimeout(resolve,ms);
//         }
//         else{
//             reject(console.log("shop is closed"));
//         }
//     } );
// }

// async function kitchen(){
//     try{
        
//         await time(2000);
//         console.log(`${stocks.fruits[0]} was selected`);
        
//         await time(0);
//         console.log("start the production");
        
//         await time(2000);
//         console.log("cut the fruit");
        
//         await time(1000);
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[0]} was added`)
        
//         await time(1000)
//         console.log("start the machine");
//         await time(2000);
//         console.log(`Ice cream placed on ${stocks.holder[0]}`)
//         await time(3000);
//         console.log(`${stocks.toppings[0]} was selected`)
//         await time(2000);
//         console.log("serve the Ice cream");
//     }
//     catch(error){
//         console.log("Customer left",error);
//     }
//     finally{
//         console.log("day ended, shop is closed.");
//     }
// }

// kitchen();
