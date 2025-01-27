// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creamos el arreglo vacio
let amigos = [];


function agregarAmigo(){
    // conseguimos el valor del input
    let value = document.getElementById('amigo').value;
    // condicional, si value es un string vacio tira un alert
    if(value){
        let listaAmigos = document.getElementById('listaAmigos');
        listaAmigos.innerHTML += `<li>${value}</li>`;
    }else{
        alert("Por favor, inserte un nombre.");;
    };

    // Agregamos al arreglo de amigos al nuevo amigo que participe del sorteo
    amigos.push(value);
    // Un poco de UX para que el usuario no tenga que estar borrando el nombre a mano
    document.getElementById('amigo').value = "";
};


function sortearAmigo(){
    // establecemos numero maximo para que no elijamos un nombre que no se encuentre en el array
    let numeroMaximo = amigos.length
    // generamos numero aleatorio 
    let numeroAleatorio = Math.floor(Math.random()*numeroMaximo)+1

    if(numeroAleatorio){
        // en este caso hay que restarle 1 al numeroAleatorio ya que el indice de mi array empieza en 0
        let amigoGanador = amigos[numeroAleatorio-1];

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>¡Felicidades ${amigoGanador} has ganado el sorteo del amigo secreto!</li>`;
    } else{
        alert("Por favor ingrese la lista de amigos")
    };
    // borramos lista de amigos para que quede solo el ganador
    document.getElementById('listaAmigos').innerHTML = "";
};