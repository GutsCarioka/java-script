const altura = 1.84
const peso = 95
const imc = peso / (altura*altura);
console.log(imc)

if(imc<18.5 ){
    console.log('Abaixo do peso');
}else if(imc < 25){
    console.log('Peso Normal');
}else if(imc < 30){
    console.log('Acima do peso');
}else if(imc < 40){
    console.log('Obesidade');
}else{
    console.log('Obesidade Grave');
}
