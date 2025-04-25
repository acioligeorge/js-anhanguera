function validarFormulario() {
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagemErro = document.getElementById("mensagemErro");

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTelefone = /^9[1236]\d{7}$/; // Ex: 91, 92, 93, 96 + 7 dígitos

    if (!regexEmail.test(email)) {
    mensagemErro.textContent = "Por favor, introduza um email válido.";
    return false;
    }

    if (!regexTelefone.test(telefone)) {
    mensagemErro.textContent = "Por favor, introduza um número de telefone válido (ex: 912345678).";
    return false;
    }

    mensagemErro.textContent = "";
    alert("Formulário enviado com sucesso!");
    return true;
}