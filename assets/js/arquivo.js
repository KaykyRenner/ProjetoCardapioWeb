const ul = document.querySelector('.tarefas')
let contador = 0
let valorItem = 0
function CreatLi(){
  const li = document.createElement('li')
  return li
}
function addLiEmUL(comida){
  const items = Array.from(ul.querySelectorAll('li'));//Array.from(ul.querySelectorAll('li')): Converte os itens da lista em um array para facilitar a manipulação e verificação.
  const itemExists = items.some(item => item.textContent === comida)//: Verifica se algum item da lista já tem o texto igual ao comida que você está tentando adicionar. O método some retorna true se encontrar um item que corresponde à condição.
  if(!itemExists){ //Se o item não existir na lista, o código cria e adiciona um novo item. Caso contrário, ele apenas exibe uma mensagem no console (ou você pode omitir essa parte, se preferir).
  const li = CreatLi()
  li.setAttribute('class', 'ListaDeComida')
  ul.appendChild(li)
  li.innerHTML = comida
}}
function EsconderEMostrarButton(comprar, add){
  const comprar1 = document.querySelector(comprar)
  const add1 = document.querySelector(add)
  if(comprar)add1.style.display = 'inline-block'
  if(add)comprar1.style.display = 'none'
}
document.addEventListener('click', e =>{
  const el = e.target;
  const item = document.querySelector('.item')
  if(el.classList.contains('comprar1')){
    EsconderEMostrarButton('.comprar1','.add1')
    addLiEmUL('Waffle with Berries')
    valorItem+=6.50
    contador++
  }
  if(el.classList.contains('comprar2')){
    EsconderEMostrarButton('.comprar2','.add2')
    addLiEmUL(`Vanilla Bean Crème Brûlée`)
    valorItem+=7.00
    contador++

  }
  if(el.classList.contains('comprar3')){
    EsconderEMostrarButton('.comprar3','.add3')
    addLiEmUL('Macaron Mix of Five')
    valorItem+=8.00
    contador++
  }
  if(el.classList.contains('comprar4')){
    EsconderEMostrarButton('.comprar4','.add4')
    addLiEmUL('Classic Tiramisu')
    valorItem+=5.50
    contador++
  }
  if(el.classList.contains('comprar5')){
    EsconderEMostrarButton('.comprar5','.add5')
    addLiEmUL('Pistachio Baklava')
    valorItem+=4.00
    contador++
  }
  if(el.classList.contains('comprar6')){
    EsconderEMostrarButton('.comprar6','.add6')
    addLiEmUL('Lemon Meringue Pie')
    valorItem+=5.00
    contador++
  }
  if(el.classList.contains('comprar7')){
    EsconderEMostrarButton('.comprar7','.add7')
    addLiEmUL('Red Velvet Cake')
    valorItem+=4.50
    contador++
  }
  if(el.classList.contains('comprar8')){
    EsconderEMostrarButton('.comprar8','.add8')
    addLiEmUL('Salted Caramel Brownie')
    valorItem+=4.50
    contador++
  }
  if(el.classList.contains('comprar9')){
    EsconderEMostrarButton('.comprar9','.add9')
    addLiEmUL('Vanilla Panna Cotta')
    valorItem+=6.50
    contador++
  }
  item.innerHTML =`Your Cart(${contador}), total:$${valorItem.toFixed(2)}`
})
