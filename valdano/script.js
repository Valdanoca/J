
document.addEventListener("DOMContentLoaded", function () {
    const adicionarServicoBtn = document.getElementById("adicionar-servico-btn");
    const listaServicos = document.getElementById("lista-servicos");

    adicionarServicoBtn.addEventListener("click", function () {
        const novoServico = prompt("Digite o nome do novo serviço:");
        if (novoServico) {
            const novoItem = document.createElement("li");
            novoItem.textContent = novoServico;
            listaServicos.appendChild(novoItem);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const listaServicos = document.getElementById("lista-servicos");

    listaServicos.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            const confirmarExclusao = confirm("Deseja realmente excluir este serviço?");
            if (confirmarExclusao) {
                event.target.remove();
            }
        }
    });
});
