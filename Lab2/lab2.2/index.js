let i, sum = 0, mult = 1, div = 1;
const nums = [];
for(i = 0; i < 3; i++) {
    do {
        num =prompt(`Enter a number[${i}]:`);
    } while (isNaN(Number(num)) || Number(num) == 0);
    nums[i] = Number(num);
    sum += Number(num);
    mult *= Number(num);
    if(i == 0)
    {
        div = Number(num);
    }
    else{
        div /= Number(num);
    }
}
document.writeln(`<h1>Adding -- Multiplying -- and Dividing 3 Values<h1><hr>`);
document.writeln(`<b style="color:red">Sum of the 3 values </b>${nums[0]} + ${nums[1]} + ${nums[2]} = ${sum}<br>`);
document.writeln(`<b style="color:red">Multiplication of the 3 values </b>${nums[0]} * ${nums[1]} * ${nums[0]} = ${mult}<br>`);
document.writeln(`<b style="color:red">Division of the 3 values </b>${nums[0]} / ${nums[1]} / ${nums[0]} = ${div}<br>`);


