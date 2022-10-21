let cliente = localStorage.getItem("cliente");
document.getElementById("welcome").innerText = "Hola Bienvenido a la banca Electronica" + cliente


let balanceEtiqueta = document.getElementById("balance")
let balanceActual = parseFloat(localStorage.getItem("balance"));
balanceEtiqueta.innerText = `$ ${balanceActual}`


function depositar() {
    let monto = parseFloat(document.getElementById("depositar").value)

    if ((monto+balanceActual) > 990) {
        mostrarError("no puedes tener mas de 990, no ingrese mas dinero")
    } else {
        balanceActual += monto;
        balanceEtiqueta.innerText = `$ ${balanceActual}`

    }
}

function retirar() {
    let monto = parseFloat(document.getElementById("retirar").value)
    if (monto>=balanceActual){
        mostrarError("No puedes retier todo el dinero de tu cuenta tiene que tener como minimo $10")
    }else {
        balanceActual -= monto;
        balanceEtiqueta.innerText = balanceActual
    }
}

function mostrarError(mensaje) {
    alert(mensaje)
}
