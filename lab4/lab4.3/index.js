let str1 = `Your Message Will Displayed Character by Character :)
\n Few Seconds and this window will terminate .......`;
let id, intervalId, count = 0;
const openChild = () => {
    id = window.open("./child.html", "", "width=400,height=200");
    intervalId = setInterval(f1, 100);
}
const f2 = () => {
    id.close();
}
const f1 = () => {
    //check count and length
    if(count < str1.length) {
        
        id.document.write(str1[count]);
        //increment count
        count++;
    }
    else {
        setTimeout(f2,2000);
        clearInterval(intervalId);
    }

}