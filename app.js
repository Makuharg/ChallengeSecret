// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// creamos el arreglo vacio
let amigos = [];


function agregarAmigo(){
    // conseguimos el valor del input
    const value = document.getElementById('amigo').value;

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