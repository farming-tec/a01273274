// JavaScript -> Diseñado en eventos
// Es interpretado del lado del usuario
// Existe una máquina/motor que es el Node.Js (Ejecutarlo del lado del server)
// Es de tipado débil, No exiten tal cual los tipos de variables: No es necesario decir int, string, array
// TypeScript -> Mejor tipado, construcción rápida de consumers
// Tiene un event loop, general, éste determina las acciones
// Tiene un Heap y un Stack
// Callback <- Función, alerta, trigger
// Ejecuta un código, con base al evento
// Es una función que es pasada por referencia


// Recibe dos variables y un callback
// Encapsular código, trabajar con herramientas ya existentes
function mathOperation2Elements(x, y, operation){
    if(x > 0) return operation(x, y);
    return operation(1, y);
}

// Functions
function maindos(){
    console.log("Hello from callback, normal fn");
}

// Arrow functions
const main = () => {
    console.log("Hola mundo")
    // Referencia el HTML DOM element. Los IDs Tienen que ser únicos
    // const input = document.getElementById("MyInputText");
    const inputs = document.querySelectorAll('.input');
    const form = document.getElementById("MyBtn");
    const result = document.getElementById("Result");
    
    // input.addEventListener("change", (e)=>{
    //     console.log("Change value to", e.target.value);
    // })
    // FILE

    form.addEventListener("submit", (e) => {
        // Prevent normal behavoiur of an element 
        e.preventDefault();
        console.log("Ejecución detenida");
        inputs.forEach( input => {
            console.log("Value of input is", input.value);
            
        })

        result.innerText = inputs[0].value;

        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    });
}


document.addEventListener("DOMContentLoaded", main);

// Una calculadora, para sumar, restar, multiplicar, dividir : Dos número
// Dos campos (número)
// Tener un select <- Seleccionar la operación a realizar
// Submit <- Aparecer el resultado