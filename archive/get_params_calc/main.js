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

function getSearchParameters() {
    var prmstr = window.location.search.substr(1);
    return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
  var params = {};
  var prmarr = prmstr.split("&");
  for ( var i = 0; i < prmarr.length; i++) {
      var tmparr = prmarr[i].split("=");
      params[tmparr[0]] = tmparr[1];
  }
  return params;
}

// Arrow functions
const main = () => {
    // Referencia el HTML DOM element. Los IDs Tienen que ser únicos
    // const input = document.getElementById("MyInputText");
    const inputs = document.querySelectorAll('.input');
    const form = document.getElementById("operaciones");
    const result = document.getElementById("Result");
    
    // input.addEventListener("change", (e)=>{
    //     console.log("Change value to", e.target.value);
    // })
    // FILE
    let params = getSearchParameters(); 
    let x = parseInt(params["x"]);
    let y = parseInt(params["y"]);
    switch(params["lista_operaciones"]){
    case "suma":
        result.innerText = "Suma: " + (x+y) + "";
        break;
    case "resta":
        result.innerText = "Resta: " + (x-y) + "";
        break;
    case "multiplicacion":
        result.innerText = "Multiplicación: " + (x*y) + "";
        break;
    case "division":
        result.innerText = "División: " + (x/y) + "";
        break;
    default:
        break;
    }
}


document.addEventListener("DOMContentLoaded", main);

// Una calculadora, para sumar, restar, multiplicar, dividir : Dos número
// Dos campos (número)
// Tener un select <- Seleccionar la operación a realizar
// Submit <- Aparecer el resultado