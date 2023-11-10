// const response = fetch('https://dummyjson.com/products/1')
//       .then((response) =>{

//       })
//       .catch(err =>{

//       })

//  async function fetchData() {
//     const response = await fetch('https://dummyjson.com/products/1');
//     console.log(response);
//  }

//  fetchData();

async function fetchData() {
    try{
        const loadingElement = document.getElementById('loading');
        const phoneBox = document.getElementById('box');
        loading.style.display ='block';
        phoneBox.style.display ='none';

        const response = await fetch('https://dummyjson.com/products/1');
        console.log(response);

        const jsonData = await response.json();
        console.log(jsonData);

        phoneBox.style.display ='block';
        loading.style.display ='None';

        loadData(jsonData);
    } catch(err) {
        console.log(err);
    }
   

 }
 function loadData(jsonData) {
    const phoneTextElement = document.getElementById('phone-title');
    const phoneDescElement = document.getElementById('phone-desc');
    const phoneImg= document.getElementById('phone-img');

    // anothjer way to write this 
    const {title ,description,thumbnail} =jsonData;
    phoneTextElement.innerHTML = title;
    phoneDescElement.innerHTML = description;
    phoneImg.src = thumbnail; 

    // phoneTextElement.innerHTML = jsonData.title;
    // phoneDescElement.innerHTML = jsonData.description;
    // phoneImg.src = jsonData.thumbnail;

 
 }
 fetchData();