

let id;
let intervalId;
const openchild = ()=>{
    id = window.open('./child.html','_blank','width=400,height=400');
     intervalId = setInterval(f1,300);
 }

const f1 = ()=>{
    console.log(id.scrollY + id.innerHeight, id.document.body.offsetHeight);
    if(id.scrollY + id.innerHeight < id.document.body.offsetHeight){
        id.scrollBy(0,500);
    }
    else{
        clearInterval(intervalId);
        id.close();
    }
}


