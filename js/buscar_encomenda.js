var campoBusca = document.querySelector("#buscar");

campoBusca.addEventListener("input", function(){
    var todosClientes = document.querySelectorAll(".cliente");

    //Verifica se há critério de busca
    if(this.value.length>0){
        for (var cli=0; cli < todosClientes.length; cli++) {
            //Captura a coluna do nome dos clientes
            var tdNome=todosClientes[cli].querySelector(".nome").textContent;

            var comparavel = tdNome.substring(0, this.value.length);
            
            //Verifica se o nome do cliente é o buscado
            //.toLowerCase() >> transforma em letras minúsculas
            if(this.value.toLowerCase()!=comparavel.toLowerCase()){
                todosClientes[cli].classList.add("invisivel");
            } else {
                todosClientes[cli].classList.remove("invisivel");
            }
        } 
    } else {
        //Retorna a lista em visualização, quando apagar o campo de Busca
        for (var cli=0; cli < todosClientes.length; cli++) {
            todosClientes[cli].classList.remove("invisivel");
        }
    } 
})