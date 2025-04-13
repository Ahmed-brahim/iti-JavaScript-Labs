const arr = [1, 2, 3, 4, 5, 6];
let sum = 0, color;
//<td>${sum}</td>
document.writeln('<table style="border: 1px solid black; text-align: center; width: 50%;">');
document.writeln('<tr><th>values</th></tr>');
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if((i+1) % 2 == 0) {
        color = 'green';
    }
    else {
        color = 'red';
    }
    document.writeln(`<tr><td style="background-color:${color}">${arr[i]}</td></tr>`);
}
document.writeln(`<tr><td>Summation = ${sum}</td></tr>`);
document.writeln('</table>');