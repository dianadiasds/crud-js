

function addbrinquedos() {


    var mostra = document.getElementById('local');

    var data = '';

    colecao = ['Barbie', 'Moranguinho', 'Pequeno Poney', 'Chuquinhas', 'Fofolete']

    for (let i = 0; i < colecao.length; i++) {
        data = data + '<div>' + this.colecao[i] + '</div>';
    }

    mostra.innerHTML = data;

    var btnadicionar = document.querySelector('adicionarcontato');
    btnadicionar = document.addEventListener('click', function (event) {
        event.preventDefault();


        var meuform = document.getElementById('camponome');
        console.log(meuform.value)
        colecao.push(meuform.value)

        addbrinquedos();


    });

}
addbrinquedos();