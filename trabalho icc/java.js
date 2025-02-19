document.getElementById('cadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('Nome').value;
    const senha = document.getElementById('Senha').value;

    localStorage.setItem('nome', nome);
    localStorage.setItem('senha', senha);

});

document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nomeLogin').value;
    const senha = document.getElementById('SenhaLogin').value;

    const nomeCadastrado = localStorage.getItem('nome');
    const senhaCadastrada = localStorage.getItem('senha');

    if (nome === nomeCadastrado && senha === senhaCadastrada) {
        document.getElementById('mensagem').textContent = 'Login realizado com sucesso!';
    } else {
        document.getElementById('mensagem').textContent = 'Usuário ou senha incorretos.';
    }
});
