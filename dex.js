function ligar(){
    document.getElementById ('lampada').setAttribute('src','luzligada.gif');
}
function desligar(){
    document.getElementById ('lampada').setAttribute('src','luzDesligada.gif');
}
function desaparecer(){
   document.getElementById ('lampada').style.display='none';
}
function aparecer(){
   document.getElementById ('lampada').style.display='inline';
}
function calcular(){
   peso= Number(document.getElementById('peso').value);
   altura= Number(document.getElementById('altura').value);
     imc= peso / (altura * altura);

     document.getElementById('resultado').innerText = imc.toFixed(3);
        console.log('IMC calculado '+ imc);
   }
   document.getElementById ('lampada').setAttribute('src','luzDesligada.gif');{
}
