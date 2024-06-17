 //Inicializar variaveis
let contMonth = 0
let media = 0
let mediaTotal = 0
let resultadosMedia = []
// Capturar valor do select (mês escolhido)
let tagSelect = document.getElementById('selectMes')
let resultado = document.getElementById('result')
let txtContemplados = document.querySelector('input#contemplados')
let txtEscolhaMes = document.querySelector('label.labelMonth')
let btnRestart = document.getElementById('restart')
let btnMediaTotal = document.getElementById('mediaTotal')
let btnAdd = document.getElementById('add')
//Capturar menor lance
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
        media = (soma / 2).toFixed(2)// toFixed usado para exibir só duas casas decimais
        
        resultado.innerHTML = `Lance Médio: <strong>${media}%</string>`
        if(contMonth >= 1){
            txtEscolhaMes.innerHTML = ('Mês')
        }
        
    }

    
}

function limpar(){
    //Limpar select
    tagSelect.value = ""
    //Limpar Menor lance
    inputLowest.value = ""
    //Limpar Maior lance
    inputHighest.value = ""
    //Limpar contemplados
    txtContemplados.value = ""
    //Resetar lance médio
    resultado.innerHTML = `Lance Médio:`
}
/*Salvar*/
function salvar(){
    resultadosMedia.push(media)
    if(media != 0){
        alert(`O valor ${media}% foi salvo.✅`)
        //Reaparcer botão de recomeçar
        btnRestart.style.display = 'block'
        contMonth++
    }else{
        alert('Para salvar é preciso ter feito o cálculo primeiro.')
    }
    
    

}

/*Adicionar mês*/
function addMes(){
    limpar()
    if(media != 0){
        txtEscolhaMes.innerHTML = ('<strong>Próximo mês</strong>')
        
    }else{
        alert('Para adicionar um mês é preciso ter feito o cálculo de pelo menos um mês.')
    }
    //Reaparecer botão de cálculo da média geral
    if(contMonth >= 1){
        btnMediaTotal.style.display = 'block'
        btnAdd.style.marginLeft = 0
    }
}

function calcMediaTotal(){
    if(resultadosMedia.length > 1){
        let soma = 0
        let total = 0 
        total = resultadosMedia.length
        for(let pos = 0; pos < resultadosMedia.length; pos++){
            soma += Number(resultadosMedia[pos])
            
            
        }
        mediaTotal = soma / total
        resultado.innerHTML += `<br><p>O lance médio dos ${contMonth} meses informados é: ${mediaTotal}%.</p>`
    }
}

