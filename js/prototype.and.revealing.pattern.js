let revealingAndPrototypeCrudModule = (function () {

    function Toys(name) {
        this.name = name;

        this.getName = function () {
            return this.name;
        };
    }

    const toysArray = [];

    let toyString = ['Barbie', 'Moranguinho', 'Pequeno Poney', 'Chuquinhas', 'Fofolete'];
    toyString.forEach(toy => {
        toysArray.push(new Toys(toy));
    });

    let createListeners = function () {
        let btnAdicionar = document.getElementById('adicionarcontato');
        btnAdicionar.addEventListener('click', () => {
            const meuform = document.getElementById('camponome');
            toysArray.push(new Toys(meuform.value));
            toysArray.push('uma string para complicar a vida');
            showToys();
        });
    };

    let showToys = function () {

        const container = document.getElementById('container');

        let data = '';

        toysArray.forEach(toy => {

            if (toy instanceof Toys) {
                data = data + '<div>' + toy.getName() + '</div>';
            }
        });
        container.innerHTML = data;
    };

    return {
        showToys: showToys,
        createListeners: createListeners
    }
})();
revealingAndPrototypeCrudModule.createListeners();
revealingAndPrototypeCrudModule.showToys();
