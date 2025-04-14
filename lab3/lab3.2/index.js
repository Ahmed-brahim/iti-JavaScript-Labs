let nameArr = new Array();
for (let i = 0; i < 10; i++) 
{
    // Prompt the user to enter a name and convert it to lowercase
    nameArr[i] = prompt("Enter name " + (i + 1) + ": ").toLowerCase();
}
let uniqueNames = [];
for (let i = 0; i < nameArr.length; i++) {
    if (!uniqueNames.includes(nameArr[i])) {
        uniqueNames.push(nameArr[i]);
    }
}
console.log(uniqueNames);
const randonTwoNames = (uniqueNames) => {
    let randomNames = [];
    let randoms = [];
    do {
        let random = Math.floor(Math.random() * uniqueNames.length);
        if (!randoms.includes(random)) {
            randoms.push(random);
            randomNames.push(uniqueNames[random]);
        }

    } while (randoms.length < 2);
    return randomNames;
}

console.log(randonTwoNames(uniqueNames));