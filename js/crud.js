const colecao = ['Barbie', 'Moranguinho', 'Pequeno Poney', 'Chuquinhas', 'Fofolete'];

function createListeners() {
    let btnAdicionar = document.getElementById('adicionarcontato');
    btnAdicionar.addEventListener('click', () => {
        const meuform = document.getElementById('camponome');
        console.log(meuform.value);
        colecao.push(meuform.value);
        showToys();
    });
}

function showToys() {

    const container = document.getElementById('container');

    let data = '';

    for (let i = 0; i < colecao.length; i++) {
        data = data + '<div>' + colecao[i] + '</div>';
    }

    container.innerHTML = data;
}

createListeners();
showToys();