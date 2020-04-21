// Logic function
const operationExec = (x_, y_, operation_) =>{
    const operation = parseInt(operation_, 10);
    const x = Number(x_);
    const y = Number(y_);

    switch (operation) {
        case 0: return x + y;
        case 1: return x - y;
        case 2: return x * y;
        case 3: return x / y;
        default: return x + y;
    }
}

// Do operation(function) and display result
const doOperationAndDisplay = (x, y, operation, element) => {
    const result = operationExec(x, y, operation);
    
    element.innerText = result;
    console.log(result);
};


const makeRequest = async() => {
    // await - React

    // Las llaves fuera código, pueden encapsularlas en variables, variables de ambiente
    const APP_ID = "a0ec5a83c75fe1ce1dbf68b47c88f8cd";
    //const POLYGON_ID = "5e985475df8070000706793d";
    const POLYGON_ID ='5e9dcc7ff6e0ca689e70a6e2';
    
    const URL = `https://api.agromonitoring.com/agro/1.0/image/search?start=1500336000&end=1508976000&polyid=${ POLYGON_ID }&appid=${ APP_ID }`
    
    console.log("This is a test");

    let response = await fetch(URL);
    if (response.ok) { // if HTTP-status is 200-299
        let json = await response.json();
        return json;
    } 
    
    return []; // No existiera ningún valor
}

async function localRequest(){
    const URL = 'http://localhost:4000/user/testing';
    const response = await fetch(URL);
    
    // Inferred JSON return
    if(response.ok) return await response.json();
    return [];
}


document.addEventListener("DOMContentLoaded", ()=> {
    const x = document.getElementById("xInput");
    const y = document.getElementById("yInput");
    const send = document.getElementById("form");
    const select = document.getElementById("operation");
    const result = document.getElementById("result");
    const imagesContainer = document.getElementById("imagesContainer");

    send.addEventListener("submit", (e)=>{
        e.preventDefault();
        doOperationAndDisplay(x.value, y.value, select.value, result);

        // Anterior a ES6
        // async/await -> Promises
        imagesContainer.querySelector('span').innerText = "Loading ...";
        makeRequest().then( async(data) => {
            // Una vez que la promesa se cumpla, ejecuta lo que te digo
            // Log json data from request
            imagesContainer.querySelector('span').innerText = "Loading images...";
            
            data.forEach(async( item, index) => {
                const img = document.createElement('img');
                img.className = "item" + index
                imagesContainer.append(img);

                const img_response_promise = fetch(item.image.truecolor);
    
                const blob = await (await img_response_promise).blob();
                img.src = URL.createObjectURL(blob);
            });

            console.log(data);
            console.log("Request done!");
            imagesContainer.querySelector('span').innerText = "Done!"; 
        });


        // Peticiones a través de JS
        // fetch <- API JS para hacer peticiones POST/GET de manera sencilla y asíncrona, no bloquea el JS Loop
        // Remplazo de XMLHttpRequest <- Manera síncrona, nos bloquea de alguna manera el loop js (Avanzadas)

    });

    select.addEventListener("change", ()=> {
        doOperationAndDisplay(x.value, y.value, select.value, result);
    });

    x.addEventListener("keyup", (e)=> {
        doOperationAndDisplay(e.target.value, y.value, select.value, result);

        localRequest().then(data => console.log(data));
    });

    y.addEventListener("keyup", (e)=> {
        doOperationAndDisplay(x.value, e.target.value, select.value, result);
    });

    console.log("Request done!");
});
