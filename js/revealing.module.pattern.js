let revealingCrudModule = (function () {

    const colecao = ['Barbie', 'Moranguinho', 'Pequeno Poney', 'Chuquinhas', 'Fofolete'];

    let createListeners = function () {
        let btnAdicionar = document.getElementById('adicionarcontato');
        btnAdicionar.addEventListener('click', () => {
            const meuform = document.getElementById('camponome');
            colecao.push(meuform.value);
            showToys();
        });
    };

    let showToys = function () {

        const container = document.getElementById('container');

        let data = '';

        for (let i = 0; i < colecao.length; i++) {
            data = data + '<div>' + colecao[i] + '</div>';
        }

        container.innerHTML = data;
    };

    return {
        showToys: showToys,
        createListeners: createListeners
    }
})();
revealingCrudModule.createListeners();
revealingCrudModule.showToys();