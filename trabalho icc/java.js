function selecionarFilme(nome, horario) {
    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("EspetáculoEscolhido", nome);
        localStorage.setItem("horarioEscolhido", horario);
        window.location.href = "compraringresso.html"; // Redirecionamento para a página de compra
    } else {
        alert("Desculpe, seu navegador não suporta armazenamento local.");
    }
}