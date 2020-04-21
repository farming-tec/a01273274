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


document.addEventListener("DOMContentLoaded", ()=> {
    const x = document.getElementById("xInput");
    const y = document.getElementById("yInput");
    const send = document.getElementById("form");
    const select = document.getElementById("operation");
    const result = document.getElementById("result");

    send.addEventListener("submit", (e)=>{
        e.preventDefault();
        doOperationAndDisplay(x.value, y.value, select.value, result);
    });

    select.addEventListener("change", ()=> {
        doOperationAndDisplay(x.value, y.value, select.value, result);
    });

    x.addEventListener("keyup", (e)=> {
        doOperationAndDisplay(e.target.value, y.value, select.value, result);
    });

    y.addEventListener("keyup", (e)=> {
        doOperationAndDisplay(x.value, e.target.value, select.value, result);
    });
});