// Aplica máscara ao telefone brasileiro
document.getElementById("telefone").addEventListener("input", function () {
    let telefone = this.value.replace(/\D/g, ""); // Remove tudo que não for número

    if (telefone.startsWith("55")) {
        telefone = telefone.substring(2); // Remove o 55 duplicado se o valor já começa com +55
    }

    // Formatação: (XX) 9XXXX-XXXX
    if (telefone.length > 11) telefone = telefone.slice(0, 11);

    let formatado = "+55 ";
    if (telefone.length > 0) formatado += "(" + telefone.slice(0, 2);
    if (telefone.length >= 2) formatado += ") ";
    if (telefone.length >= 7) {
        formatado += telefone.slice(2, 7) + "-" + telefone.slice(7);
    } else if (telefone.length > 2) {
        formatado += telefone.slice(2);
    }

    this.value = formatado;
});

// Aplica máscara automática no CPF conforme digita
document.getElementById("cpf").addEventListener("input", function () {
    let cpf = this.value.replace(/\D/g, ''); // Remove tudo que não for número

    if (cpf.length > 11) cpf = cpf.slice(0, 11); // Limita a 11 dígitos

    // Aplica a máscara: XXX.XXX.XXX-XX
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    this.value = cpf;
});


// Impede apagar o "+55 "
document.getElementById("telefone").addEventListener("keydown", function (e) {
    const prefixo = "+55 ";
    if (this.selectionStart <= prefixo.length && (e.key === "Backspace" || e.key === "Delete")) {
        e.preventDefault();
    }
});

// Validação do formulário
function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefoneBR = /^\+55\s\(\d{2}\)\s9\d{4}-\d{4}$/; // Ex: +55 (11) 91234-5678
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (nome.trim() === "") {
        alert("Por favor, preencha o seu nome.");
        return false;
    }

    if (!regexCPF.test(cpf)) {
        alert("O CPF deve estar no formato 000.000.000-00.");
        return false;
    }

    if (!regexEmail.test(email)) {
        alert("Por favor, introduza um email válido.");
        return false;
    }

    if (!regexTelefoneBR.test(telefone)) {
        alert("O telefone deve estar no formato: +55 (11) 91234-5678.");
        return false;
    }

    if (mensagem.trim() === "") {
        alert("Por favor, escreva uma mensagem.");
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}

