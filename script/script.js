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
let divAdd = document.getElementsByClassName('divBtn')
let calcBtn = document.getElementById('calc')
let clearBtn = document.getElementById('btnLimpar')
let saveBtn = document.getElementById('btnSave')
//Capturar menor lance
let inputLowest = document.getElementById('lowestTxt')
//Capturar menor lance
let inputHighest = document.getElementById('highestTxt')
let imgToogleHide = document.getElementById('hide')
let imgToogleShow = document.getElementById('show')


//Verifica se está vazio
function isInvalid(){
    if(inputLowest.value <= 0 || inputHighest.value <= 0){
        return true
        
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
        alert('Pelo menos um dos campos dos lances está vazio ou o valor é inválido. Preencha a porcentagem dos lances corretamente.')
    }else{
        let lowest = Number(inputLowest.value);
        let highest = Number(inputHighest.value);
        
        let soma = lowest + highest
        media = (soma / 2)// toFixed usado para exibir só duas casas decimais
        
        resultado.innerHTML = `Lance Médio: <strong>${media.toFixed(2)}%</string>`
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
        alert(`O valor ${media.toFixed(2)}% foi salvo.✅`)
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
    //Mudar label do mês para "Próximo mês"
    //Só muda casp algum valor de média já tenha sido calculado e se houver a partir de um mês cadastrado
    if((media != 0)&& contMonth >= 1){
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
        resultado.innerHTML = `<br>O lance médio dos ${contMonth} meses informados é: <strong>${mediaTotal.toFixed(2)}</strong>%.`
    }else{
        alert('Para calcular a média total, é preciso calcular a média de pelo menos dois meses.')
    }


}

function restart(){
    limpar()
    resultadosMedia = []
    contMonth = 0
    btnMediaTotal.style.display = 'none'
    btnRestart.style.display = 'none'
    btnAdd.style.marginLeft = 'auto'
}

function toogleHideShow(){
    //Esconder
    if(imgToogleShow.style.display == 'block'){
        imgToogleShow.style.display = 'none'
        imgToogleHide.style.display = 'block'
        //Esconder botões
        calcBtn.style.display = 'none'
        clearBtn.style.display = 'none'
        saveBtn.style.display = 'none'

    }else if(imgToogleHide.style.display == 'block'){
        imgToogleHide.style.display = 'none'
        imgToogleShow.style.display = 'block'
        //Mostrar botões
        calcBtn.style.display = 'block'
        clearBtn.style.display = 'block'
        saveBtn.style.display = 'block'

    }

    
    
    
}