let valorDoProduto = 100;
const formaDePagamento = 1;

if(formaDePagamento === 1){
   let calc = (formaDePagamento*0.1)-valorDoProduto;
   valorDoProduto = calc
   console.log("Sua compra ficou "+ valorDoProduto)
}else if(formaDePagamento === 2){
   let calc = (formaDePagamento*0.15)-valorDoProduto;
   valorDoProduto = calc
   console.log("Sua compra ficou "+ valorDoProduto)
}else if(formaDePagamento === 3){
   console.log("Sua compra ficou "+ valorDoProduto)
}
else{
    let calc = (valorDoProduto*0.1)+valorDoProduto;
    valorDoProduto = calc
    console.log("Sua compra ficou "+ valorDoProduto)
}