// Filtro de Palavrões Simples
const palavroes = ["palavra1", "ofensa2", "babaca"]; // Adicione sua lista aqui

function filtrarTexto(texto) {
    let proibido = false;
    palavroes.forEach(p => {
        if (texto.toLowerCase().includes(p)) proibido = true;
    });
    return proibido;
}

function fazerLogin() {
    const nick = document.getElementById('nickname').value;
    if (filtrarTexto(nick)) {
        alert("Ops! Esse apelido não é permitido.");
    } else {
        alert("Bem-vindo(a), " + nick + "! Você entrou na ouvidoria.");
        console.log("Usuário logado:", nick); // Aqui você monitora quem entrou
    }
}

function setMood(sentimento) {
    document.getElementById('statusMood').innerText = "Hoje os alunos estão: " + sentimento;
    // Aqui você seria notificada sobre o clima da escola
    console.log("Alerta de Humor:", sentimento);
}

let votos = 0;
function votar() {
    votos++;
    document.getElementById('contagem').innerText = votos;
}

function enviarDenuncia() {
    const texto = document.getElementById('denuncia').value;
    if (texto.length > 5) {
        alert("Denúncia enviada anonimamente. A coordenação foi notificada.");
        console.log("Nova Denúncia Recebida:", texto);
        document.getElementById('denuncia').value = "";
    }
}
