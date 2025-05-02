function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let resultado = parseInt(quantidade * valorProduto);

    
    console.log(valorProduto);
    console.log(nomeProduto);
    console.log(quantidade);
    console.log(resultado);
}
