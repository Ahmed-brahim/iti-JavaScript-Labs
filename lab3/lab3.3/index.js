const fun1 = (fullname) => {
 //split to words
    const words = fullname.split(" ");
//turn the first letter of each word to upper case
    for(k in words){
       let tempWord = words[k].split('');
       tempWord[0] = tempWord[0].toUpperCase();
       words[k] = tempWord.join('');
     }
//join the words to a string
    return words.join(" ");
}
console.log(fun1("ahmed mohamed ahmed"));
/********************************************** */
const fun2 = (str) => {
    let words = str.split(" ");
    let maxLength = 0;
    let maxIndex = 0;
    for(let k in words)
    {
        if(words[k].length > maxLength)
        {
            maxLength = words[k].length;
            maxIndex = k;
        }
    }
    return words[maxIndex];
}
console.log(fun2("ahmesesasdasdassd mohameeeeeeeeed ahmed"));
/***************************************************/ 
const fun3 = (str) => {
    let words = str.split(" ");
    for(let k in words)
    {
        words[k] = words[k].split('').sort().join('');
    }
    return words.join(" ");
}
console.log(fun3("ahmed mohamed ahmed"));