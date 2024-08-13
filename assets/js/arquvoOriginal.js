const ul = document.querySelector('.tarefas');
const item = document.querySelector('.item')

const listaNameItem  = ['Waffle with Berries','Vanilla Bean Crème Brûlée','Macaron Mix of Five','Classic Tiramisu','Pistachio Baklava','Lemon Meringue Pie','Red Velvet Cake','Salted Caramel Brownie','Vanilla Panna Cotta'];
const listaValueItem = [6.50,7.00,8.00,5.50,4.00,5.00,4.50,4.50,6.50]

let arrayClickCarrinho = Array.from(document.querySelectorAll('button.comprar'));
let arrayItemMostrar = Array.from(document.querySelectorAll('button.buttonAddCoisas'));
let arrayAdd = Array.from(document.querySelectorAll('span.ButtonMenos'));
let arrayRemove = Array.from(document.querySelectorAll('span.ButtonMais'));
let arrayQuantidade = Array.from(document.querySelectorAll('.quantidade'));
let contador = new Array(listaValueItem.length).fill(0);
const Carrinho = document.querySelector('.ValoresC')
let contadorGlobal = 0
let confirmarPedido = document.querySelector('.confirmaPedido')
arrayClickCarrinho.forEach((button,index) => {
    button.setAttribute('data-index', index);
    button.querySelectorAll('*').forEach(child => {
        child.classList.add('comprar');
    });
});

arrayClickCarrinho.forEach(button=>{
    button.addEventListener('click', event=>{
        const clickedButton = event.currentTarget;
        const index = clickedButton.getAttribute('data-index');
        let RecebeArraySeparado = arrayClickCarrinho[index];
        let recebeMostrarItem = arrayItemMostrar[index];
        let mostrarButton = confirmarPedido;
        addLiEmUL(listaNameItem[index],index)
        executarfuncao(RecebeArraySeparado,recebeMostrarItem,mostrarButton);
        adicionarValoresItem(listaValueItem[index],true,index)
    }
    )
})

function CreatLi(){
    const li = document.createElement('li');
    return li;
}

function addLiEmUL(comida,index){
    const li = CreatLi();
    li.setAttribute('class', 'ListaDeComida');

    const comidaSpan = document.createElement('span')
    comidaSpan.innerHTML = comida

    const contadorSpan = document.createElement('span')
    contadorSpan.setAttribute('class','contador')
    contadorSpan.innerHTML =  `(${contador[index]})`

    li.appendChild(comidaSpan)
    li.appendChild(contadorSpan)
    ul.appendChild(li);

}

function executarfuncao(ocultar,mostrar,MostraConfirmaPedido){
    ocultar.style.display = 'none';
    mostrar.style.display = 'inline-block';
    MostraConfirmaPedido.style.display = 'block';
}

function adicionarValoresItem(valor, adicionar = true, index){
    let valorAtual = parseFloat(item.innerHTML) || 0;
    if(adicionar){
        valorAtual+=valor;
        contador[index]++;
        contadorGlobal++
    } 
    else{if(contador[index]>0){
        valorAtual-=valor;
        contador[index] =  Math.max(contador[index] -1, 0 );
        contadorGlobal--
    }}
    if(valorAtual < 0) valorAtual=0;
    item.innerHTML = `${valorAtual.toFixed(2)}`
    
    document.querySelectorAll('.ListaDeComida').forEach((li)=>{
        const comidaSpan = li.querySelector('span')
        const contadorSpan = li.querySelector('.contador')
        if(comidaSpan.innerHTML === listaNameItem[index]){
            contadorSpan.innerHTML = `(${contador[index]}x)`
        }
    });
    arrayQuantidade[index].innerHTML = contador[index]
    Carrinho.innerHTML = `Carrinho (${contadorGlobal}) items`
    console.log(contador)
}

function ConfigurandoAddERemove(){
    arrayAdd.forEach((button,index)=>{
        button.addEventListener('click', event=>{
            adicionarValoresItem(listaValueItem[index], false, index)
        })
    })
    arrayRemove.forEach((button,index)=>{
        button.addEventListener('click', event=>{
            adicionarValoresItem(listaValueItem[index], true, index)
        })
    })
}
ConfigurandoAddERemove()