

let jeremias = ['terça','quinta']
let sara = ['quinta','sabado']
let ezequiel = ['segunda','quarta']
let lisa = ['sexta','domingo']

document.getElementById('bott').addEventListener('click', func)

function func(){

let dia = document.getElementById('dia').value

if (dia == 'segunda'){
    document.getElementById('caixa').value = 'Ezequiel lava segunda'
}
else if(dia == 'terça'){
    document.getElementById('caixa').value = 'Jeremias lava terça'
}
else if(dia == 'quarta'){
    document.getElementById('caixa').value = ' Ezequiel lava quarta'
}
else if (dia == 'quinta'){
    document.getElementById('caixa').value = 'Jeremias lava quinta'
}
else if(dia == 'sexta'){
    document.getElementById('caixa').value = 'Lisa lava sexta'
}
else if(dia == 'sabado'){
    document.getElementById('caixa').value = 'Sara lava sabado'
}
else{
    document.getElementById('caixa').value = 'Lisa lava domingo'  
}

}