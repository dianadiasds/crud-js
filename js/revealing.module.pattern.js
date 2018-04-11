let revealingCrudModule = (function () {

    const btnExcludeId = "btnExclude";
    const colecao = ['Barbie', 'Moranguinho', 'Pequeno Poney', 'Chuquinhas', 'Fofolete'];

    let btnAdicionarEvents = function () {
        let btnAdicionar = document.getElementById('adicionarcontato');


        btnAdicionar.addEventListener('click', (event) => {
            const meuform = document.getElementById('camponome');
            colecao.push(meuform.value);
            showToys();
            btnExcluirEvents();
        });
    };

    let btnExcluirEvents = function() {
        let listBtnsDelete = document.getElementsByName("btnExclude");

        listBtnsDelete.forEach(excludeButton => {

            excludeButton.addEventListener('click', (event) => {
                let btnId = event.target.id;
                let result = btnId.substring(btnExcludeId.length, btnId.length);
                colecao.splice(result, 1);
                showToys();
                btnExcluirEvents();
            })
        });
    };

    let showToys = function () {

        const container = document.getElementById('container');

        let data = '';

        for (let i = 0; i < colecao.length; i++) {
            data = data + '<div>' + colecao[i] + '</div>';
            data = data + '<div><button >Editar</button></div>';
            data = data + '<div><button name="btnExclude" id=' + btnExcludeId + i + ' >Excluir</button></div>';
        }

        container.innerHTML = data;

    };

    const init = function() {
        showToys();
        btnAdicionarEvents();
        btnExcluirEvents();
    };

    return {
        init: init
    }
})();
revealingCrudModule.init();