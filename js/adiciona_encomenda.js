var botaoAdicionar = document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    //Captura o formulário de encomendas
    var form = document.querySelector("#form-adiciona");

    //Captura os dados da nova encomenda
    var encomendaNova = obtemEncomenda(form);

    //Captura a tabela de encomendas
    var tabela = document.querySelector(".tabela-clientes");

    //Cria a nova linha na tabela
    tabela.appendChild(montaTR(encomendaNova));

    //Limpa o formulário
    form.reset();
});

function obtemEncomenda(formulario){

    var encomenda = {
        nome: formulario.nome.value,
        produto: formulario.produto.value,
        qtde: formulario.qtde.value,
        unitario: formulario.unitario.value
    }
    return encomenda;
}
function montaTR(dadosEncomenda){
    var tr = document.createElement("tr");

    tr.appendChild(montaTD(dadosEncomenda.nome));
    tr.appendChild(montaTD(dadosEncomenda.produto));
    tr.appendChild(montaTD(dadosEncomenda.qtde));
    tr.appendChild(montaTD(formataValor(parseFloat(dadosEncomenda.unitario))));
    tr.appendChild(montaTD(calculaTotal(dadosEncomenda.qtde,dadosEncomenda.unitario)));

    return tr;
}

function montaTD(dado){
    var td = document.createElement("td");
    td.textContent = dado;

    return td;
}

