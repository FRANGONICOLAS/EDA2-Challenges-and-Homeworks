const newRegularFunction = function(a) {
    par = a%2; 
    if (par === 0) {
        res = "El numero es par";
    } else {
        res = "El numero es impar";
    }
    return res;
}
const arrowFunction = (a) => {
    par = a%2; 
    if (par === 0) {
        res = "El numero es par";
    } else {
        res = "El numero es impar";
    }
    return res;
}

console.log(newRegularFunction(2));
console.log(arrowFunction(2));