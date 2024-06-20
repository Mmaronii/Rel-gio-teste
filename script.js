function atualizarTempo(){
    var d = document.querySelector('div.display')

    var agora = new Date();
    
    var h = corrigirHorario(agora.getHours())+':'+corrigirHorario(agora.getMinutes()) +':'+corrigirHorario(agora.getSeconds());
    
    d.textContent  = h;
}
function corrigirHorario(numero){
  if (numero < 10) {
        numero = '0' + numero

 }
 return numero;
}
atualizarTempo();
setInterval(atualizarTempo, 1000);

console.log(h);


