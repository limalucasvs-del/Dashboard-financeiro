
/////////////////////////////////////////
// 1. SELEÇÃO DOS ELEMENTOS HTML
/////////////////////////////////////////

const formulario = document.querySelector("#formulario-transacao");
const descricao = document.querySelector("#descricao");
const categoria = document.querySelector("#categoria");
const tipo = document.querySelector("#tipo");
const data = document.querySelector("#data");
const valor = document.querySelector("#valor");
const corpoTabela = document.querySelector(".tabela tbody");


/////////////////////////////////////////
// 2. VARIÁVEIS
/////////////////////////////////////////

const transacoes = [];


/////////////////////////////////////////
// 3. EVENTO SUBMIT DO FORMULÁRIO
/////////////////////////////////////////

formulario.addEventListener("submit", function (event) {

    // Impede o comportamento padrão do formulário
    event.preventDefault();


    /////////////////////////////////////////
    // 3.1. CRIAÇÃO DO OBJETO TRANSAÇÃO
    /////////////////////////////////////////

    const transacao = {
        descricao: descricao.value,
        categoria: categoria.value,
        tipo: tipo.value,
        data: data.value,
        valor: Number(valor.value)
    };


    /////////////////////////////////////////
    // 3.2. CRIAÇÃO DA LINHA DA TABELA
    /////////////////////////////////////////

    const novaLinha = document.createElement("tr");


    /////////////////////////////////////////
    // 3.3. CRIAÇÃO DAS CÉLULAS
    /////////////////////////////////////////

    const celulaDescricao = document.createElement("td");
    const celulaCategoria = document.createElement("td");
    const celulaTipo = document.createElement("td");
    const celulaData = document.createElement("td");
    const celulaValor = document.createElement("td");


    /////////////////////////////////////////
    // 3.4. FORMATAÇÃO DO VALOR
    /////////////////////////////////////////

    let valorExibido = transacao.valor;

    if (transacao.tipo === "receita") {

        celulaValor.style.color = "green";

    } else if (transacao.tipo === "despesa") {

        celulaValor.style.color = "red";
        valorExibido = -transacao.valor;

    }

    const valorFormatado = valorExibido.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });


    /////////////////////////////////////////
    // 3.5. PREENCHIMENTO DAS CÉLULAS
    /////////////////////////////////////////

    celulaDescricao.textContent = transacao.descricao;
    celulaCategoria.textContent = transacao.categoria;
    celulaTipo.textContent = transacao.tipo;
    celulaData.textContent = transacao.data;
    celulaValor.textContent = valorFormatado;


    /////////////////////////////////////////
    // 3.6. ADICIONANDO CÉLULAS À LINHA
    /////////////////////////////////////////

    novaLinha.appendChild(celulaDescricao);
    novaLinha.appendChild(celulaCategoria);
    novaLinha.appendChild(celulaTipo);
    novaLinha.appendChild(celulaData);
    novaLinha.appendChild(celulaValor);


    /////////////////////////////////////////
    // 3.7. ADICIONANDO LINHA À TABELA
    /////////////////////////////////////////

    corpoTabela.appendChild(novaLinha);


    /////////////////////////////////////////
    // 3.8. ARMAZENAMENTO DA TRANSAÇÃO
    /////////////////////////////////////////

    transacoes.push(transacao);


    /////////////////////////////////////////
    // 3.9. LIMPEZA DO FORMULÁRIO
    /////////////////////////////////////////

    formulario.reset();


    /////////////////////////////////////////
    // 3.10. TESTES NO CONSOLE
    /////////////////////////////////////////

    console.log(transacao);
    console.log(transacoes);
    console.log(transacoes.length);

});
