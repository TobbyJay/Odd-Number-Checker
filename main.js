const odd = (input) => {
    let val = document.getElementById("first").value;
    let result = document.getElementById("out");

    const inputs = val.split(",").map(Number);
    //return result.textContent = inputs;
    let sum = "",
        maxNum = 0,
        minNum = 0;
    let a = inputs[0];
    let b = inputs[1];

    if (a > b) {
        maxNum = a;
    } else if (a < b) {
        minNum = a;
    }
    if (b > a) {
        maxNum = b;
    } else if (b < a) {
        minNum = b;

    }

    for (let i = minNum; i <= maxNum; i++) {

        if (i % 2 === 1) {
            sum = sum + i + ', ';
        }
    }

    return result.textContent = sum + ' is odd';

   result.style.background = "gray";
     if (val.length < 2) {
         result.style.background = "red";
         return result.textContent = "Please enter two numbers only, e.g 2-17 or 320-100 or 20,50";
     }


     
}; 

