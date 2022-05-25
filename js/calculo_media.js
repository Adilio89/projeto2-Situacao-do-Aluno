function calculoMedia() {
    //REFERENCIA AOS ELEMENTOS DA PAGINA HTML
    var inNome = document.getElementById("inNome");
    var inNota1 = document.getElementById("inNota1");
    var inNota2 = document.getElementById("inNota2");
    var inNota3 = document.getElementById("inNota3");
    var inNota4 = document.getElementById("inNota4");
    var outMedia = document.getElementById("outMedia");
    var outSituacao = document.getElementById("outSituacao");

    //OBTÉM OS CONTEÚDOS DOS CAMPOS DE EDIÇÃO DA PÁGINA html
    var nome = inNome.value;
    var nota1 = Number(inNota1.value);
    var nota2 = Number(inNota2.value);
    var nota3 = Number(inNota3.value);
    var nota4 = Number(inNota4.value);

    //calcula a média das notas
    var media = (nota1 + nota2 + nota3 + nota4) / 4

    //APRESENTA A MÉDIA (ALTERA O CONTEÚDO DO ELEMENTO outMedia)
    outMedia.textContent = "Média das Notas: " + media.toFixed(1);

    //CRIA CONDIÇÃO
    if(media >= 7){
        outSituacao.textContent = "Parabéns " + nome + "! Você foi Aprovado(a)";
        outSituacao.style.color = "blue";
    } else if (media >= 4) {
        outSituacao.textContent = "Atenção " + nome + "! Você está em exame";
        outSituacao.style.color = "yellow";
    } else {
        outSituacao.textContent = "Infelizmente     " + nome + "! Você foi Reprovado(a)";
        outSituacao.style.color = "red";
    }
}

//CRIA UMA REFERENCIA AO ELEMENTO btResultado(botão)
var btResultado = document.getElementById("btResultado");

//REGISTRA UM EVENTO ASSOCIADO AO BOTÃO, PARA CARREGAR UMA FUNÇÃO
btResultado.addEventListener("click", calculoMedia);