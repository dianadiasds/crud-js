let crudModule = {

    colecao: ['Barbie', 'Moranguinho', 'Pequeno Poney', 'Chuquinhas', 'Fofolete'],

    createListeners: function () {
        let btnAdicionar = document.getElementById('adicionarcontato');
        btnAdicionar.addEventListener('click', () => {
            const meuform = document.getElementById('camponome');
            this.colecao.push(meuform.value);
            this.showToys();
        });
    },

    showToys: function () {

        const container = document.getElementById('container');

        let data = '';

        for (let i = 0; i < this.colecao.length; i++) {
            data = data + '<div>' + this.colecao[i] + '</div>';
        }

        container.innerHTML = data;
    }

};

crudModule.createListeners();
crudModule.showToys();