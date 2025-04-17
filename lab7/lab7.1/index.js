window.addEventListener('load',(e) => {
    let searchContainer = document.querySelector('.search-container');
    
    let dataArr = [];
    fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
        result.json().then((data)=>{
           dataArr = data;
        })
    }).catch((err) => {
        console.log("error:\n"+err);
    });
}
)