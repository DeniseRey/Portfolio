function func_ej1(){
    var n1 = parseFloat(document.getElementById("ej1_n1").value);
    var n2 = parseFloat(document.getElementById("ej1_n2").value);
    var n3 = parseFloat(document.getElementById("ej1_n3").value);

    if(n1 > n2 && n1 > n3){
        document.getElementById("ej1_resultado").value = n1;
    }else if (n2 > n1 && n2 > n3){
        document.getElementById("ej1_resultado").value = n2;
    }else if (n3 > n1 && n3 > n2){
        document.getElementById("ej1_resultado").value = n3;
    }else{
        document.getElementById("ej1_resultado").value = "No ingresar numeros iguales";
    }
}

function func_ej2(){
       var n1 = parseFloat(document.getElementById("ej2_n1").value);
       var n2 = parseFloat(document.getElementById("ej2_n2").value);

       document.getElementById("ej2_resultado").value = n1 + n2;
   }



function func_ej3(){
       var ej3_palabra = document.getElementById("ej3_palabra").value;
       var ej3_n1 = parseFloat(document.getElementById("ej3_n1").value);

       var frase = ""

       for (let index = 0; index < ej3_n1; index++) {
        frase = frase + ej3_palabra;
       }
       document.getElementById("ej3_resultado").value = frase

   }


function func_ej4_CE(){
    var centigrados = parseFloat(document.getElementById("ej4_C1").value);
    var conversion = (centigrados * 9/5) + 32;
    document.getElementById("ej4_conversor1").value = conversion
}
// 2 funciones porque son 2 botones
function func_ej4_FA(){   
    var farenheit = parseFloat(document.getElementById("ej4_F1").value);
    var conversion = (farenheit - 32) * 5/9;
    document.getElementById("ej4_conversor2").value = conversion

   }

   