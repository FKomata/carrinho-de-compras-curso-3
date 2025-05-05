let totalCarrinho = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let resultado = parseInt(quantidade * valorProduto);

    let listaDeCompras = document.getElementById('lista-produtos');
    listaDeCompras.innerHTML = listaDeCompras.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;
    
    totalCarrinho = totalCarrinho + resultado;
    let carrinho = document.getElementById('valor-total');
    carrinho.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalCarrinho}</span>`;
 
}