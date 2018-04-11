let revealingCrudModule = (function () {

    const btnExcludeId = "btnExclude";
    const btnEditId = "btnEdit";
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
    let btnEditEvents = function() {
        let listBtnsEdit = document.getElementsByName("btnEdit");

        listBtnsEdit.forEach(editButton => {

            editButton.addEventListener('click', (event) => {
                let btnIdEdit = event.target.id;
                let resultedit = btnIdEdit.substring(btnEditId.length, btnIdEdit.length);
                document.getElementById('edittoy').value = colecao[resultedit];

                document.getElementById('inputoculto').style.display = 'block';

                showToys();
                btnExcluirEvents();
            });

        });


        document.getElementById('saveEdit').onsubmit = function () {
            let toyresult = document.getElementById('edittoy').value;
            //quero acessar a posiçao do array conseguida no foreach acima, para substituir pelo valor editado
            if (toyresult && toyresult.length > 0){
                colecao.splice(resultedit, 1, toyresult)
            }
            showToys();
            btnExcluirEvents();

        };

    };

    let showToys = function () {

        const container = document.getElementById('container');

        let data = '';

        for (let i = 0; i < colecao.length; i++) {
            data = data + '<div>' + colecao[i] + '</div>';
            data = data + '<div><button name="btnEdit" id=' + btnEditId + i + '>Editar</button></div>';
            data = data + '<div><button name="btnExclude" id=' + btnExcludeId + i + ' >Excluir</button></div>';
        }

        container.innerHTML = data;

    };

    const init = function() {
        showToys();
        btnAdicionarEvents();
        btnExcluirEvents();
        btnEditEvents();
    };

    return {
        init: init
    }
})();
revealingCrudModule.init();