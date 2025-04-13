let i = 1, sum = 0 ,num;
while(sum <= 100) {

    do {
        num =prompt(`Enter a number[${i}] to add to the sum and 0 to stop adding\n sum now is ${sum}`);
    } while (isNaN(Number(num)));
    if (Number(num) == 0) break;
    sum += Number(num);
    i++;
}
document.writeln(`<h1>The sum of the numbers is ${sum}<h1>`);