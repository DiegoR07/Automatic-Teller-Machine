let user1 = ["Diego Rivera", "diegorivera10@gmail.com", "DiegR1211", 500];
let user2 = ["Valeria Montez", "ValeMon@gmail.com", "Vale0118", 900];
let user3 = ["Luis Robles", "LuisRob@gmail.com", "Robles03", 300];

let users = [user1,user2, user3];
let userValido;

function login() {

     let cliente = document.getElementById("email").value;
     let contrasena = document.getElementById("password").value;
     let userValido = users.find((email) => (email[1] == cliente))
     console.log(userValido)
     if (userValido != undefined) {
     if (userValido[2] == contrasena) {
          console.log("Login Success")
             // lamacenar sus datos 
          localStorage.clear();
          localStorage.setItem("cliente",userValido[0]);
          localStorage.setItem("correo",userValido[1]);
          localStorage.setItem("balance",userValido[3]);
          window.location.href = "Banca1/index.html";
             // mandarlo a la pagina principal 
     } else {
          document.getElementById("error").textContent = " Error, intentalo de nuevo"
     }
     } else {
     document.getElementById("error").textContent = " Error,correo invlaido"
     }
}


