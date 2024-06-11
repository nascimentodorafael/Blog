// function que lê textos
function LerTexto() {
    var mensagem = new SpeechSynthesisUtterance();
    var vozes = speechSynthesis.getVoices();
    mensagem.text = "o poder do oceano eu sinto, conectando o meu interior, o poder submarino eu vivo, nos meus sonhos sempre quis estar aqui, fico deslumbrada, vou voar, no oceano nadar, eu me transformo estou mais forte, e mergulhando eu vou no mar azul, sirenix tem brilho lindo, a energia vai de norte a sul, é o poder do oceano, e pra mim é tão lindo e eu amo";
    mensagem.voice = vozes[1];
    speechSynthesis.speak(mensagem);
}

LerTexto()