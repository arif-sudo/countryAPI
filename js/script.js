const myFunc = () =>{
    
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        let card = "";
        for (let i = cstart; i < cend; i++){
            card += 
             `
             <div class="col-sm-12 col-md-6 col-lg-4 ">
                <div class="card text-center" style="width: 15rem;">
                 <img src=${data[i].flags.png} height='130' class="card-img-top" alt=${data[i].name.common}>
                 <div class="card-body">
                   <h4 class="card-title">${i+1}-${data[i].name.common}</h4>
                   <p class="card-text"><strong>Capital:</strong> ${data[i].capital}</p>
                   <p class="card-text"><strong>The Continent:</strong> ${data[i].continents}</p>
                   <p class="card-text"><strong>Area:</strong> ${data[i].area}km<sup>2</sup></p>
                   <p class="card-text"><strong>Population:</strong> ${data[i].population}</p>
                   <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
               </div>
             </div>
             `
            document.querySelector('.row').innerHTML = card;
            
        }
    })
}

const btn = document.querySelectorAll('button')
let cstart = 0;
let cend = 50;
btn[0].onclick = () => {
    cstart = 0;
    cend=50
    myFunc()
}
btn[1].onclick = () => {
    cstart = 50;
    cend=100
    myFunc()
}
btn[2].onclick = () => {
    cstart = 100;
    cend= 150
    myFunc()
}
btn[3].onclick = () => {
    cstart = 150;
    cend= 200
    myFunc()
}
btn[4].onclick = () => {
    cstart = 200;
    cend= 250
    myFunc()
}



