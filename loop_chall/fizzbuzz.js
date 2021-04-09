/* 
for a range of numbers (0 .. 100):
    if the number is div evenly by:
    3 -> fizz
    5 -> buzz
    3 & 5 -> fizzBuzz
    otherwise -> number

1. Bronze if you solve with a for loop and if statements
2. Silver if you solve with a while loop and switch
3. Go solve with a for loop and ternaries
*/

//Bronze if you solve it with a for loop and if statements
for(let i=1; i <= 100; i++){
    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("fizzbuzz")
    }
    else if (i % 5 ===0){
        console.log("buzz")
    }
    else if (i % 3 ===0){
        console.log("fizz")
    }
    else {
        console.log(i)
    }
}
//Silver if you solve it with a while loop and a switch
let x = 1
while(x<=100){
    switch (true) {
        case x % 15 == 0:
            console.log("fizzBuzz")
            break;
        case x % 3 == 0:
            console.log("fizz")
            break;
        case x % 5 == 0:
            console.log("buzz")
            break;
        default:
            console.log(x)
    }
    x++
}

//Gold
for(let z=1; z <= 100; z++){
    (z % 3 === 0) && (z % 5 === 0) ? console.log("fizzBuzz")
    : (z % 5 === 0) ? console.log("buzz")
    : (z % 3 === 0) ? console.log("fizz")
    : console.log(z)
}

// Food for thought
for(let i=1; i <= 100; i++){
    if (i % 3 === 0){
        if (i % 5 === 0) console.log("fizzBuzz")
        else console.log("fizz")
    }
    else if(i % 5 === 0) console.log("buzz")
    else console.log(i)
}

//MY OWN EXPERIMENT
for(let c=1; c <=100; c++){
    if (c % 2 === 0) {console.log("Ginger")
    }else if (c % 3 === 0) {console.log("Biscuit")
    }else if (c % 4 === 0) {console.log("Gemini") 
    }else if (c % 5 === 0) {console.log ("Stella")
    }else {console.log ("Luna")}
}