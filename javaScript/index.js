document.addEventListener('DOMContentLoaded', function() {
    // Pegar elementos
    const modal = document.getElementById("contatosModal");
    const btn = document.getElementById("contatosLink");
    const span = document.getElementsByClassName("close")[0];
    
    // Quando clicar no link "Contatos", abre o modal
    btn.onclick = function(e) {
        e.preventDefault();
        modal.style.display = "block";
    }
    
    // Quando clicar no X, fecha o modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // Quando clicar fora do modal, fecha ele
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    // Fechar com ESC
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        if (evt.key === "Escape") {
            modal.style.display = "none";
        }
    };
});