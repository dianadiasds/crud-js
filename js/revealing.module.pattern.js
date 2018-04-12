let revealingCrudModule = (function () {

    const btnExcludeId = "btnExclude";
    const btnEditId = "btnEdit";
    const colection = ['Barbie', 'Moranguinho', 'Pequeno Poney', 'Chuquinhas', 'Fofolete'];

    let btnAddEvents = function () {
        let btnAdd = document.getElementById('addToy');


        btnAdd.addEventListener('click', () => {
            const myform = document.getElementById('inputAdd');
            if (myform && myform.value && myform.value.trim().length > 0) {
                colection.push(myform.value);
                document.getElementById("inputAdd").value="";

                showToys();
                btnExcludeEvents();
                btnEditEvents();
            }
        });
    };

    let btnExcludeEvents = function () {
        let listBtnsDelete = document.getElementsByName("btnExclude");

        listBtnsDelete.forEach(excludeButton => {

            excludeButton.addEventListener('click', (event) => {
                let btnId = event.target.id;
                let result = btnId.substring(btnExcludeId.length, btnId.length);
                colection.splice(result, 1);
                showToys();
                btnExcludeEvents();
                btnEditEvents();
            })
        });

    };
    let btnEditEvents = function () {
        let listBtnsEdit = document.getElementsByName("btnEdit");

        listBtnsEdit.forEach(editButton => {

            editButton.addEventListener('click', (event) => {
                let btnIdEdit = event.target.id;
                let resultedit = btnIdEdit.substring(btnEditId.length, btnIdEdit.length);
                document.getElementById('editToy').value = colection[resultedit];
                document.getElementById("positionP").innerHTML = resultedit;

                document.getElementById('inputHide').style.display = 'block';

                showToys();
                btnExcludeEvents();
                btnEditEvents();
            });

        });


        let confirmEdit = document.getElementById("confirmEdit");
        confirmEdit.addEventListener('click', () => {
            let toyresult = document.getElementById('editToy').value;
            let toyposition = document.getElementById('positionP').textContent;

            if (toyresult && toyresult.trim().length > 0) {
                colection.splice(toyposition, 1, toyresult)
            }
            document.getElementById('inputHide').style.display = 'none';
            showToys();
            btnExcludeEvents();
            btnEditEvents();

        });

    };

    let showToys = function () {

        const container = document.getElementById('container');

        let data = '';

        for (let i = 0; i < colection.length; i++) {
            data = data + '<div class="listSize">' + colection[i] + '</div>';
            data = data + '<div><button name="btnEdit" id=' + btnEditId + i + '>Editar</button></div>';
            data = data + '<div><button name="btnExclude" id=' + btnExcludeId + i + ' >Excluir</button></div>';
        }

        container.innerHTML = data;

    };

    const init = function () {
        showToys();
        btnAddEvents();
        btnExcludeEvents();
        btnEditEvents();
    };

    return {
        init: init
    }
})();
revealingCrudModule.init();