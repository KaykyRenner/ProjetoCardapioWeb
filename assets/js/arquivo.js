document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartElement = document.querySelector('.tarefas');
    
    // Seleciona todos os botões de adicionar ao carrinho
    const addToCartButtons = document.getElementsByClassName('comprar');
    
    // Adiciona um evento de clique a cada botão
    Array.from(addToCartButtons).forEach(button => {
    button.addEventListener('click', () => {
        const itemId = button.getAttribute('data-id');
        
        // Verifica se o item já está no carrinho
        if (!cart.includes(itemId)) {
        cart.push(itemId);
        updateCart();
        }
    });
    });

    function updateCart() {
      // Limpa o conteúdo do carrinho
    cartElement.innerHTML = '';
    
      // Adiciona cada item do carrinho à lista
    cart.forEach(itemId => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class' ,'ListaDeComida')
        listItem.textContent = `${itemId}`;
        cartElement.appendChild(listItem);
    });
    
      // Atualiza a quantidade no carrinho
    const quantityElement = document.querySelector('.containerDoCarrinho p');
    quantityElement.textContent = `Your Cart (${cart.length})`;
    }
});
