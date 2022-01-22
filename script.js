const image = document.querySelector('img');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie= document.querySelector('#especie');
const condicao = document.querySelector('#condicao');
const localizacao = document.querySelector('#localizacao');
const genero = document.querySelector('#genero');

gerarValorAleatorio=() => {
    return Math.floor(Math.random() * 671);
}

sortearPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio(); 
    console.log(numeroAleatorio)
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: { 
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((Response) => Response.json()).then((data) => {
        console.log(data)
        image.src = data.image;
        image.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
        localizacao.innerHTML = data.location.name;
        genero.innerHTML = data.gender;
    });
}

botao.onclick = sortearPersonagem;