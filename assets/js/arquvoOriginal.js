const ul = document.querySelector('.tarefas');
const item = document.querySelector('.item')

const listaNameItem  = ['Waffle with Berries','Vanilla Bean Crème Brûlée','Macaron Mix of Five','Classic Tiramisu','Pistachio Baklava','Lemon Meringue Pie','Red Velvet Cake','Salted Caramel Brownie','Vanilla Panna Cotta'];
const listaValueItem = [6.50,7.00,8.00,5.50,4.00,5.00,4.50,4.50,6.50]

let arrayClickCarrinho = Array.from(document.querySelectorAll('button.comprar'));
let arrayItemMostrar = Array.from(document.querySelectorAll('button.buttonAddCoisas'));
let arrayAdd = Array.from(document.querySelectorAll('span.ButtonMenos'));
let arrayRemove = Array.from(document.querySelectorAll('span.ButtonMais'));
let arrayQuantidade = Array.from(document.querySelectorAll('.quantidade'));
console.log(arrayQuantidade,arrayAdd,arrayRemove)
let contador = new Array(listaValueItem.length).fill(0);

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
        addLiEmUL(listaNameItem[index])
        executarfuncao(RecebeArraySeparado,recebeMostrarItem);
        adicionarValoresItem(listaValueItem[index],true,index)
    }
    )
})

function CreatLi(){
    const li = document.createElement('li');
    return li;
}

function addLiEmUL(comida){
    const li = CreatLi();
li.setAttribute('class', 'ListaDeComida');
ul.appendChild(li);
li.innerHTML = comida;
}

function executarfuncao(ocultar,mostrar){
    ocultar.style.display = 'none';
    mostrar.style.display = 'inline-block';
}

function adicionarValoresItem(valor, adicionar = true, index){
    let valorAtual = parseFloat(item.innerHTML) || 0;
    if(adicionar){
        valorAtual+=valor;
        contador[index]++;
    } 
    else{if(contador[index]>0){
        valorAtual-=valor;
        contador[index] =  Math.max(contador[index] -1, 0 );
    }}
    
    if(valorAtual < 0) valorAtual=0;
    item.innerHTML = `${valorAtual.toFixed(2)}`
    arrayQuantidade[index].innerHTML = contador[index]
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