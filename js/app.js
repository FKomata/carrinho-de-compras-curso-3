function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade');
    let resultado = parseInt(quantidade.value * valorProduto);

    let listaDeCompras = document.getElementById('lista-produtos')

    let carrinho = document.getElementById('valor-total').textContent;
    let valorCarrinho = parseInt(carrinho.split('R$')[1]);
    let valorTotal = valorCarrinho + resultado;
    document.getElementById('valor-total').innerHTML = valorTotal
    

    console.log(valorProduto);
    console.log(nomeProduto);
    console.log(quantidade.value);
    console.log(resultado);
    console.log(listaDeCompras)
    console.log(valorTotal)

}
