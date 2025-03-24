
// Declaracion de variables
let numeros = [];
let mayores = 0;
let adultoMayor = 0;
let menores = 0;
let suma = 0;

// este codigo me ayuda a pedir las edades de las personas
 for (let i = 0; i < 10; i++) {
        let num;
        do {
            num = parseInt(prompt("Ingresa tu edad (máx. 120):"), 10);
        } while (isNaN(num) || num > 120 || num < 0); 
        numeros.push(num);
    }

// este codigo me ayuda a definir quienes son mayores y menores de edad
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] < 18){
        menores++
    }else{
        mayores++;
    }
};

// este codigo me ayuda a sacar el promedio de las edades
for (let j = 0; j < numeros.length; j++) {
    suma += numeros[j];
}
let promedio = suma / numeros.length;

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] >= 60){
        adultoMayor++;
    }
}

// este codigo me ayuda a mostrar los resultados
alert(
    "Las personas menores de edas son: " + menores + "\n" +
    "Las personas mayores de edad son: " + mayores + "\n" +
    "Los adultos mayores de 60 son: " + adultoMayor + "\n" +
    "El promedio de edades es: " + promedio + "\n" +
    "Números ingresados:\n" + numeros.join(", ")
);

