// Funcao construtora
function Toys(name) {
    this.name = name;

    this.getName = function () {
        return this.name;
    };
}

// Isso será um array de objetos do tipo Toys. Mas lembre-se, Javascript é uma linguagem com tipagem FRACA. Nada me impede de adicionar elementos
// do tipo diferente de Toys como estou fazendo abaixo no createListeners()
const toysArray = [];

// Isso será um array de objetos do tipo Toys. Mas lembre-se, Javascript é uma linguagem com tipagem FRACA. Nada me impede de adicionar elementos
// do tipo diferente de String
let toyString = ['Barbie', 'Moranguinho', 'Pequeno Poney', 'Chuquinhas', 'Fofolete'];
toyString.forEach(toy => {
    toysArray.push(new Toys(toy));
});


function createListeners() {
    let btnAdicionar = document.getElementById('adicionarcontato');
    btnAdicionar.addEventListener('click', () => {
        const meuform = document.getElementById('camponome');
        toysArray.push(new Toys(meuform.value));
        toysArray.push('uma string para complicar a vida');
        showToys();
    });
}

function showToys() {

    const container = document.getElementById('container');

    let data = '';

    toysArray.forEach(toy => {

        // Se eu não verificar nesse ponto, ele dará erro quando chegar uma das Strings
        if (toy instanceof Toys) {
            data = data + '<div>' + toy.getName() + '</div>';
        }
    });
    container.innerHTML = data;
}

createListeners();
showToys();