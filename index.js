//declaración de objetos
const Coche = {
    marca, 
    modelo, 
    matricula
}
const Casa = {
    codPostal,
    calle,
    portal,
    piso
}
const FullStackDeveloper  ={
    lenguajes: [],
    proyectos: []
}
const Perro  ={
    nombre, 
    raza, 
    color, 
    edad, 
    ladrar: function(){
        console.log("Guau");
    },
    popo: function(){
        return Math.random() * 3;
    } 
}

//lectura de propiedades
let marcaPortatil=Portatil.marca();
let marcaPortatil2=Portatil["marca"];
let grupos=Concierto.grupos();
let RGB=[Led.rojo(), Led.verde(), Led.azul()];

//modificación de propiedades
