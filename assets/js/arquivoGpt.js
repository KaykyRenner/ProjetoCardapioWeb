const ul = document.querySelector('.tarefas');
let contador = 0;
let valorItem = 0;

// Dados dos itens
const itemsData = [
  { id: 1, valor: 6.50, nome: 'Waffle with Berries' },
  { id: 2, valor: 7.00, nome: 'Vanilla Bean Crème Brûlée' },
  { id: 3, valor: 8.00, nome: 'Macaron Mix of Five' },
  { id: 4, valor: 5.50, nome: 'Classic Tiramisu' },
  { id: 5, valor: 4.00, nome: 'Pistachio Baklava' },
  { id: 6, valor: 5.00, nome: 'Lemon Meringue Pie' },
  { id: 7, valor: 4.50, nome: 'Red Velvet Cake' },
  { id: 8, valor: 4.50, nome: 'Salted Caramel Brownie' },
  { id: 9, valor: 6.50, nome: 'Vanilla Panna Cotta' }
];

// Função para criar e adicionar item na lista
function addLiEmUL(nome) {
  const items = Array.from(ul.querySelectorAll('li'));
  const itemExists = items.some(item => item.textContent === nome);
  if (!itemExists) {
    const li = document.createElement('li');
    li.className = 'ListaDeComida';
    li.textContent = nome;
    ul.appendChild(li);
  }
}

// Atualiza o valor e a quantidade do item
function updateItem(id, increment) {
  const itemData = itemsData.find(data => data.id === id);
  if (itemData) {
    valorItem += increment * itemData.valor;
    contador += increment;
    const quantidade = document.querySelector(`.quantidade${id}`);
    if (quantidade) {
      const newQuantity = parseInt(quantidade.textContent) + increment;
      if (newQuantity >= 0) { // Evita quantidades negativas
        quantidade.textContent = newQuantity;
      }
    }
  }
}

// Manipula a visibilidade dos botões
function EsconderEMostrarButton(comprar, add) {
  document.querySelector(comprar).style.display = 'none';
  document.querySelector(add).style.display = 'inline-block';
}

// Manipula eventos de clique
document.addEventListener('click', e => {
  const el = e.target;
  
  // Botões de mais e menos
  const maisMatch = el.className.match(/ButtonMais(\d+)/);
  const menosMatch = el.className.match(/ButtonMenos(\d+)/);

  if (maisMatch || menosMatch) {
    const buttonIndex = parseInt(maisMatch?.[1] || menosMatch?.[1]);
    if (buttonIndex) {
      updateItem(buttonIndex, maisMatch ? 1 : -1);
    }
  }
  
  // Botões de comprar
  const comprarMatch = el.className.match(/comprar(\d+)/);
  if (comprarMatch) {
    const itemIndex = parseInt(comprarMatch[1]);
    EsconderEMostrarButton(`.comprar${itemIndex}`, `.add${itemIndex}`);
    const itemData = itemsData.find(data => data.id === itemIndex);
    if (itemData) {
      addLiEmUL(itemData.nome);
    }
  }

  // Atualiza o item com o total e contador
  const item = document.querySelector('.item');
  if (item) {
    item.innerHTML = `Your Cart(${contador}), total: $${valorItem.toFixed(2)}`;
  }
});