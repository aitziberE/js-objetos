//declaración de objetos
const Coche = {
    marca: "m", 
    modelo: "mo", 
    matricula: "ma"
}
const Casa = {
    codPostal: "48000",
    calle: "artekale",
    portal: 1,
    piso: 22
}
const FullStackDeveloper  ={
    lenguajes: ["java", "javaScript"],
    proyectos: ["instagram"]
}
const Perro  ={
    nombre: "zuri", 
    raza: "boxer", 
    color: "marron", 
    edad: 1, 
    ladrar: function(){
        console.log("Guau");
    },
    popo: function(){
        return Math.random() * 3;
    } 
}

const Noticia={
    titular:"",
    cuerpo:""
}
const Persona={
    nombre:"",
    apellidos:"",
    edad:1
}
const Avion={
    numPasajeros:4,
    despegar: function(){
        console.log("despegando");
    },
    volar: function(){
        console.log("llegando al destino");
    },
    aterrizar: function(){
        console.log("aterrizando");
    }
}

const Paquete={
    contenido: []
}

const Pais ={
    numHabitantes:1,
    continente:"A",
    gentilicio: "aa"
}

//lectura de propiedades

let marcaPortatil=Portatil.marca;
console.log(marcaPortatil);
let marcaPortatil2=Portatil["marca"];

let grupos=Concierto.grupos;

let RGB=[Led.rojo, Led.verde, Led.azul];

let codError=O_Error.codigo;

let integrantes=Grupo.integrantes;

let nivelesTinta=Impresora.tinta;

let pixeles= Pantalla.pixeles;

let especificaciones= Movil["especificaciones"]

//modificación de propiedades
Portatil.modelo="P345";

Concierto.cartelera.push("Guns N' Roses");

Concierto.fecha=new Date();

Impresora.imprimiendo={
    nombreArchivo:"algo.txt", 
    copias:5, 
    numPaginas:45
}

Grupo.numIntegrantes=5;
Pantalla.dimensiones="1920x1080";

if( Led.encendido) {
    Led.encendido=false;
}
else{
    Led.encendido=true;
}

Movil.temperatura="20º";