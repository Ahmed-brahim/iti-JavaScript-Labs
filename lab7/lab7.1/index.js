window.addEventListener('load',(e) => {
    let searchContainer = document.querySelector('#search-input');
    let tableBody = document.querySelector('#table-body');
    let pageInfo = document.querySelector('.page-info');
    let pageNumBox = document.querySelector('.active');
    let pageNum = pageNumBox.innerText;
    let pagination = document.querySelector('.pagination');
    let countPerPageSelector = document.querySelector('#rows-select');
    let countPerPage = countPerPageSelector.value;
    let maxPages;
    let dataArr = [];

    const searchFun = function(textt){
        const filteredData = dataArr.filter(x => x.title.includes(textt)); 
        return filteredData;
    }

    const getPage = function(pageNum, data, pageCount){
        return data.slice(((pageNum-1) * pageCount), pageNum * pageCount)
    }

    const makeTable = function(tableBody1, dataArr2){
        tableBody.innerHTML = ''; 
        for(let d of dataArr2)
         {
                 let tr = document.createElement('tr');
                 for(let k in d)
                 {
                     let dt = document.createElement('td');
                     dt.innerText = d[k];
                     tr.appendChild(dt);
                 }
                 tableBody1.appendChild(tr);
            }
            console.log('max pages'+maxPages);
            pageInfo.innerHTML = `Showing <span id="start-record"><span id="end-record">${dataArr2.length}</span> of <span id="total-records">${dataArr.length}</span> records`           
            console.log('page num = '+pageNum.innerText);
            console.log('page number = '+pageNum);
            pageNumBox.innerText = pageNum;
    }
    //fetch
    fetch('https://jsonplaceholder.typicode.com/posts').then((result) => {
        result.json().then((data)=>{
           dataArr = data;
           maxPages = Math.ceil(((dataArr.length) / countPerPage));
           pageNum = 1;
           makeTable(tableBody, getPage(pageNum, dataArr, countPerPage));
        })
    }).catch((err) => {
        console.log("error:\n"+err);
    });

    //event for count per page
    countPerPageSelector.addEventListener('change', function(){
        countPerPage = this.value;
        maxPages = Math.ceil(((dataArr.length) / countPerPage));
        pageNum = 1;
        makeTable(tableBody, getPage(pageNum, dataArr, countPerPage));
    }); //end of count per page

    //event for search
    searchContainer.addEventListener('keyup', function (params) {
        
        let textValue = this.value.trim();
        let filteredData = searchFun(textValue);
        makeTable(tableBody, filteredData);
    })
    //pagination
    pagination.addEventListener('click', function(e){
        if(e.target.id == 'next-page')
        {
            pageNum++;
            if(pageNum > maxPages)
            {
                pageNum--;
                e.target.disabled = true;
            }
            else{
                if(pageNum==maxPages) e.target.disabled = true;
                makeTable(tableBody, getPage(pageNum, dataArr, countPerPage)) ;
                e.target.disabled = false;
                e.target.parentElement.querySelector('#prev-page').disabled = false;
            }
            
        }
        else if(e.target.id == 'prev-page')
        {
            pageNum--;
            if(pageNum < 1)
            {
                pageNum++;
                e.target.disabled = true;
            }
            else{
                makeTable(tableBody, getPage(pageNum, dataArr, countPerPage)) ;
                e.target.disabled = false;
                e.target.parentElement.querySelector('#next-page').disabled = false;

            }
        } 
        
        
    })// pagination end
}); //end load

