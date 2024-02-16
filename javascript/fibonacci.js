
var output = [];
function fibonacciGenerator(count) {
    for (let i = 0; i < count; i++) {
        if (i === 0) {
            output.push(0);
        }
        else if (i === 1){
            output.push(1);
        }
        else if (i === 2){
            output.push(1);
        }
        else{
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}
output = fibonacciGenerator(5);
console.log(output);
