let count, flag = false; 
do {
     count = prompt("Enter the numbers count");
} while (isNaN(Number(count)) || count <= 0);
let numbers = [];
for(let i = 0; i < count; i++)
{
    let number;
    do {
        number = prompt(`Enter Number [${i}]: `);
    } while (isNaN(number) || number <= 0);
    numbers.push(number);
}
let clonedArray = numbers.slice();
do {
    do {
        let choice =prompt(`a : to display array with the same receiving order/
            b : to display array with ascending order/
            c : to display array with descending order/
            d : to reversed version of original array /
            e : to display even numbers only from array if there no even numbers , display alert to inform user with that/
            f : receive number from user then display all numbers from array which divisible by received number , if there no result inform user with that/
            g : display new array with 30% discount for all numbers in original array/
            h : display string which represent all numbers of array concated with ***"`).toLowerCase();
        
        switch (choice) {
            case 'a':
                alert(`Array in the same order: {${clonedArray}}`);
                break;
                
            case 'b':
                alert(`Array in ascending order: {${clonedArray.sort((a, b) => a - b)}}`);
                break;
            case 'c':
                alert(`Array in descending order: {${clonedArray.sort((a, b) => b - a)}}`);
                break;
            case 'd':
                alert(`Reversed array: {${clonedArray.reverse()}}`);
                break;
            case 'e':
                let evenNumbers = clonedArray.filter(num => num % 2 === 0);
                if (evenNumbers.length > 0) {
                    alert(`Even numbers: {${evenNumbers}}`);
                }
                else {
                    alert("There are no even numbers in the array.");
                }
                break;
            case 'f':
                let div = prompt("Enter a number to check divisibility: ");
                let divNumbers = clonedArray.filter(num => num % div == 0);
                if (divNumbers.length > 0) {
                    alert(`Numbers divisible by ${div}: {${divNumbers}}`);
                } else {
                    alert(`No numbers are divisible by ${div}.`);
                }
                break;
            case 'g':
                alert(`Discounted numbers: {${clonedArray.map(num => num * 0.7)}}`);
                break;
            case 'h':
                alert(`Concatenated string: ${clonedArray.join("***")}`);
                break;
            default:
                flag = true;
                alert("Invalid choice, please try again.");
                break;
        }
    }while(flag);
    
    do{
        let ch = prompt(`Do you want to Repeate ? (y/n)`).toLowerCase();
    }while(ch != 'y' && ch != 'n');
} while (ch == 'y');



    