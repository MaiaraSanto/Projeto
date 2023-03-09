const formulario = document.querySelector("form");
const botao = document.querySelector("button");
const Inome = document.querySelector(".nome");
const Ilogin = document.querySelector(".login");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const ITelefone = document.querySelector(".Telefone");

function cadastrar () {

    fetch("http://localhost:8080/usuarios",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: Inome.value,
                login:Ilogin.value,
                email: Iemail.value,
                senha: Isenha.value,
                Telefone: ITelefone.value    
        })
    })
    .then(function (res) { console.log(res) })
    .catch( function (res) { console.log(res) })

};

function limpar () {
    Inome.value = "";
    Ilogin.value = "";
    Iemail.value = "";
    Isenha.value = "";
    ITelefone.value = "";
};

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    cadastrar();
    limpar();
});

