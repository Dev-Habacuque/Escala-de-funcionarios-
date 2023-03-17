

let jeremias = ['Terça','Quinta']
let sara = ['Quinta','Sábado']
let ezequiel = ['Segunda','Quarta']
let lisa = ['Sexta','Domingo']

document.getElementById('bott').addEventListener('click', func)

function func(){

let dia = document.getElementById('dia').value

if (dia == 'segunda'){
    document.getElementById('caixa').value = 'Ezequiel lava segunda-feira'
}
else if(dia == 'terça'){
    document.getElementById('caixa').value = 'Jeremias lava terça-feira'
}
else if(dia == 'quarta'){
    document.getElementById('caixa').value = ' Ezequiel lava quarta-feira'
}
else if (dia == 'quinta'){
    document.getElementById('caixa').value = 'Jeremias lava quinta-feira'
}
else if(dia == 'sexta'){
    document.getElementById('caixa').value = 'Lisa lava sexta-feira'
}
else if(dia == 'sabado'){
    document.getElementById('caixa').value = 'Sara lava sábado'
}
else{
    document.getElementById('caixa').value = 'Lisa lava domingo'  
}

}