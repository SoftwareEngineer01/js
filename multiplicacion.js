const multiplicar = (num1, num2) => {
    let result = 0;

    for(let i = 1; i <= num1; i++) {
        result += num2;
    }
      
    return result;
};

let number1 = 6;
let number2 = 5;

console.log(`El resultado de multiplicar ${number1} * ${number2} = ${multiplicar(number1, number2)}`);