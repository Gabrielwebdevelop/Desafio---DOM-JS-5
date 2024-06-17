var corpo = document.body;
corpo.style.backgroundColor = 'black';
corpo.style.color = 'white';
function velocidadeAtual(){
    var velocidade = Number(document.getElementById('Nvelocidade').value);
    var velocidadeMedia = 60;
    var mostrarResultado = document.getElementById('mostrarResultado');
    if(velocidade == velocidadeMedia){
        mostrarResultado.innerHTML = `A sua velocidade média é: ${ velocidade}`;
        mostrarResultado.style.color = 'green';
       
        mostrarResultado.style.width = '200px';
        mostrarResultado.style.fontSize = '20px';
    }else if(velocidade == 80){
        mostrarResultado.innerHTML = `Sua velocidade está: ${velocidade}, reduzias ela `;
        mostrarResultado.style.color = 'yellow';
        mostrarResultado.style.fontSize = '20px';
        mostrarResultado.style.width = '200px';
    }else if(velocidade > 80){
        mostrarResultado.innerHTML = `Reduza velocidade está ${velocidade} você foi multado!`;
        mostrarResultado.style.color = 'red';
        mostrarResultado.style.fontSize = '20px';
        mostrarResultado.style.width = '200px';
    }else{
        mostrarResultado.innerHTML = `Você está abaixo de 60: ${velocidade}`;
        mostrarResultado.style.color = 'blue';
        mostrarResultado.style.fontSize = '20px';
        mostrarResultado.style.width = '200px';
        
    }
}
