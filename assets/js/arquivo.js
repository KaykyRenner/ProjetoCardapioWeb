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
}
}
document.addEventListener('click', e =>{
  const el = e.target;
  const item = document.querySelector('.item')
  if(el.classList.contains('comprar1')){
    const comprar1 = document.querySelector('.comprar1')
    const add1 = document.querySelector('.add1')
    add1.style.display = 'inline-block'
    comprar1.style.display = 'none'
    addLiEmUL('Waffle with Berries')
    valorItem+=6.50
    contador++
  }
  if(el.classList.contains('comprar2')){
    const comprar1 = document.querySelector('.comprar2')
    const add1 = document.querySelector('.add2')
    add1.style.display = 'inline-block'
    comprar1.style.display = 'none'
    addLiEmUL(`Vanilla Bean Crème Brûlée`)
    valorItem+=7.00
    contador++

  }
  if(el.classList.contains('comprar3')){
    const comprar1 = document.querySelector('.comprar3')
    const add1 = document.querySelector('.add3')
    add1.style.display = 'inline-block'
    comprar1.style.display = 'none'
    addLiEmUL('Macaron Mix of Five')
    valorItem+=8.00
    contador++
  }
  if(el.classList.contains('comprar4')){
    const comprar1 = document.querySelector('.comprar4')
    const add1 = document.querySelector('.add4')
    add1.style.display = 'inline-block'
    comprar1.style.display = 'none'
    addLiEmUL('Classic Tiramisu')
    valorItem+=5.50
    contador++
  }
  if(el.classList.contains('comprar5')){
    const comprar1 = document.querySelector('.comprar5')
    const add1 = document.querySelector('.add5')
    add1.style.display = 'inline-block'
    comprar1.style.display = 'none'
    addLiEmUL('Pistachio Baklava')
    valorItem+=4.00
    contador++
  }
  if(el.classList.contains('comprar6')){
    const comprar1 = document.querySelector('.comprar6')
    const add1 = document.querySelector('.add6')
    add1.style.display = 'inline-block'
    comprar1.style.display = 'none'
    addLiEmUL('Lemon Meringue Pie')
    valorItem+=5.00
    contador++
  }
  if(el.classList.contains('comprar7')){
    const comprar1 = document.querySelector('.comprar7')
    const add1 = document.querySelector('.add7')
    add1.style.display = 'inline-block'
    comprar1.style.display = 'none'
    addLiEmUL('Red Velvet Cake')
    valorItem+=4.50
    contador++
  }
  if(el.classList.contains('comprar8')){
    const comprar1 = document.querySelector('.comprar8')
    const add1 = document.querySelector('.add8')
    add1.style.display = 'inline-block'
    comprar1.style.display = 'none'
    addLiEmUL('Salted Caramel Brownie')
    valorItem+=4.50
    contador++
  }
  if(el.classList.contains('comprar9')){
    const comprar1 = document.querySelector('.comprar9')
    const add1 = document.querySelector('.add9')
    add1.style.display = 'inline-block'
    comprar1.style.display = 'none'
    addLiEmUL('Vanilla Panna Cotta')
    valorItem+=6.50
    contador++
  }
  item.innerHTML =`Your Cart(${contador}), total:$${valorItem.toFixed(2)}`
})

