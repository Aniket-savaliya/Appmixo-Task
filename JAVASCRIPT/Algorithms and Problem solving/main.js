// Write a function to find the factorial of a number.						

let n = 5;

function factorial(n){
    let ans = 1;

    if(n === 0)
        return 1;
    for (let i = 2;i <= n; i++)
        ans = ans *i;
    return ans;
}

console.log(factorial(n));

// Write a function to generate the Fibonacci sequence up to a given number.						

function Fibonacci(num){
    let num1 = 0;
    let num2 = 1;
    let sum;
    if(num === 1){
        return num1;
    }else if (num === 2){
        return num2;
    }else{
        for (let i = 3;i <= num; i++){
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2;
    }
}

console.log("Fibonacci(5):" + Fibonacci(5));
console.log("Fibonacci(8):" + Fibonacci(8));

// Write a function to check if a number is a prime number.						

function checkprime(num){
    let res = true;
    if(num<=1){
        res = false;
    }

    for(let i=2; i*i<=num; i++){
        if(num%i===0){
            res = false;
            break;
        }
    }
    if(res){
        console.log(num, "is a prime number.");
    }
    else{
        console.log(num, "is not a prime number.");
    }
}
checkprime(4);
checkprime(5);

// Write a function to find the longest common prefix among an array of strings.

