var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
    
    //Estiliza a exclusão
    event.target.parentNode.classList.add("fadeOut");
    
    //Exclui a encomenda (linha toda)
    // event.target = elemento que 'sofreu' o evento
    // parentNode = chama o elemento 'pai' do elemento que 'sofreu' o evento
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    
})