 //Inicializar variaveis
let contMonth = 0 
// Capturar valor do select (mês escolhido)
let tagSelect = document.getElementById('selectMes')
let resultado = document.getElementById('result')

//
//Captuarar menor lance
let inputLowest = document.getElementById('lowestTxt')
//Capturar menor lance
let inputHighest = document.getElementById('highestTxt')

//Verifica se está vazio
function isInvalid(){
    if(inputLowest.value <= 0 || inputHighest.value <= 0){
        return true
        //alert('Pelo menos um dos campos dos lances estão vazios. Preencha com a porcentagem dos lances.')
    }else{
        return false
    }
}
//Função para verificar se número é maior do que 100%
function verificaMaiorCem(){
    if(Number(inputLowest.value) > 100 || Number(inputLowest.value) > 100){
        return true
    }else{
        return false
    }


}
//Função calcular
function calcular(){
    if((isInvalid(inputLowest) || isInvalid(inputHighest)) || verificaMaiorCem(inputLowest,inputHighest)){
        alert('Pelo menos um dos campos dos lances estão vazios ou o valor é maior do que 100%. Preencha a porcentagem dos lances corretamente.')
    }else{
        let lowest = Number(inputLowest.value);
        let highest = Number(inputHighest.value);
        
        let soma = lowest + highest
        let media = (soma / 2).toFixed(2)// toFixed usado para exibir só duas casas decimais
        
        resultado.innerHTML = `Lance Médio: <strong>${media}%</string>`
    }
    /*}
    //Verifica se está vazio
    /*if(inputLowest.value == 0 || inputHighest.value == 0){
        alert('Pelo menos um dos campos dos lances estão vazios. Preencha com a porcentagem dos lances.')
    }else if(){

    }/*else{
        //A conversao deve ser feita dentro da função
        
        

    }*/
    
}

