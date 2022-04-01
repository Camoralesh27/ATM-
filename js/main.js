
let cuentas=[
    {nombre: "Mali", 
    usuario:"Mali", 
    contraseña: "helloword", 
    saldo: 200},

    {nombre: "Gera", 
    usuario: "Gera", 
    contraseña: "123t", 
    saldo: 290},

    {nombre: "Maui", 
    usuario: "Maui", 
    contraseña: "123", 
    saldo: 67},
]

/* Función para meter usuarios nuevos al arreglo */
function registro(event){
    event.preventDefault();
    let name = document.getElementById("inputNombre").value;
    let user = document.getElementById("inputUsuario").value;
    let password = document.getElementById("inputContraseña").value;
    let amount = document.getElementById("inputSaldo").value;

    //para ver el usuario que agrege
    console.log(name,user,password,amount);
    
    //cambiar de string a numero el saldo
    amount = parseFloat(amount);

    let usuar = {
        nombre: name,
        usuario: user,
        contraseña: password,
        saldo: amount
    }

    //imprime el objeto
    console.log(usuar);
    
    //sube el objeto al arreglo y tenemos un nuevo usuario
    cuentas.push(usuar);
}


/* Función para login al banco */
/* 
function login(){
let username = document.getElementById("inputNombre").value;
let password1 = document.getElementById("inputContra1").value;

if(username === cuentas.nombre && password1 === cuentas.contraseña )
    window.location.href = "index.html";

    console.log()
}
 */