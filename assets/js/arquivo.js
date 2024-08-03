document.addEventListener('DOMContentLoaded', () => {
  const cart = []; // Array para armazenar os itens do carrinho
  const cartElement = document.querySelector('.tarefas');
  
  // Seleciona todos os botões de adicionar ao carrinho
  const addToCartButtons = document.getElementsByClassName('comprar');
  
  // Adiciona um evento de clique a cada botão
  Array.from(addToCartButtons).forEach(button => {
    button.addEventListener('click', () => {
      const itemId = button.getAttribute('data-id');
      const itemPrice = button.getAttribute('data-price'); // Obtém o preço do item

      // Verifica se o item já está no carrinho
      if (!cart.some(item => item.id === itemId)) {
        cart.push({ id: itemId, price: itemPrice });
        updateCart();
      }
    });
  });

  function updateCart() {
    // Limpa o conteúdo do carrinho
    cartElement.innerHTML = '';
    
    // Adiciona cada item do carrinho à lista
    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.setAttribute('class', 'ListaDeComida')
      listItem.textContent = ` ${item.id}, Price: $${item.price}`;
      cartElement.appendChild(listItem);
    });
    
    // Atualiza a quantidade e o total no carrinho
    const quantityElement = document.querySelector('.containerDoCarrinho p');
    const total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);
    quantityElement.textContent = `Your Cart (${cart.length})/
    Total: $${total}`;
    quantityElement.setAttribute('class','PreçoEItem')
  }
});
