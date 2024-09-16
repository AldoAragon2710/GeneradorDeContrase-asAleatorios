let cantidad = document.getElementById("cantidad"); 
let boton = document.getElementById("generar");
let texto = "texto";
let contraseña = document.getElementById("contrasena");

const cadenacaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$/&?¡*";

function generar(){
    let numeroDigitado = parseInt(cantidad.value);

    console.log(numeroDigitado);
   
    if(numeroDigitado < 8){
        alert("La cantidad de caracteres debe ser mayor o igual a 8");
    }  
    
    let password = "";
    
    for(let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenacaracteres [Math.floor (Math.random() * cadenacaracteres.length)];
        console.log(caracterAleatorio);

        password+= caracterAleatorio;

    }
    contraseña.value = password;
} 









