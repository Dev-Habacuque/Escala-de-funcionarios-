

let jeremias = ['Terça','Quinta']
let sara = ['Quinta','Sábado']
let ezequiel = ['Segunda','Quarta']
let lisa = ['Sexta','Domingo']

document.getElementById('bott').addEventListener('click', func)

function func(){

let dia = document.getElementById('dia').value

if (dia == 'Segunda' || dia == 'Segunda feira'){
    document.getElementById('caixa').value = 'Ezequiel lava segunda-feira'
}
else if(dia == 'Terça' || dia == 'Terça feira'){
    document.getElementById('caixa').value = 'Jeremias lava terça-feira'
}
else if(dia == 'Quarta' || dia == 'Quarta feira'){
    document.getElementById('caixa').value = ' Ezequiel lava quarta-feira'
}
else if (dia == 'Quinta' || dia == 'Quinta feira'){
    document.getElementById('caixa').value = 'Jeremias lava quinta-feira'
}
else if(dia == 'Sexta' || dia == 'Sexta feira'){
    document.getElementById('caixa').value = 'Lisa lava sexta-feira'
}
else if(dia == 'Sábado'){
    document.getElementById('caixa').value = 'Sara lava sábado'
}
else{
    document.getElementById('caixa').value = 'Lisa lava domingo'  
}

}