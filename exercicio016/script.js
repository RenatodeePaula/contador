//Função principal
function contar() {
   
   let ini = document.getElementById('inicio')
   let fim = document.getElementById('final')
   let passo =  document.getElementById('passo')
   let resultado = document.getElementById('resultado')
   let iniValue = Number(ini.value)
   let fimValue =  Number(fim.value)
   let passoValue = Number(passo.value)

   function contador() {
      if (fimValue > iniValue) {
         resultado.innerHTML = 'Subindo...'
         for (let cont = iniValue; cont <=  fimValue; cont += passoValue) {       
         resultado.innerHTML += `👉${cont}`
   }
         resultado.innerHTML += `✋`
      } else if (iniValue > fimValue) {
         
            resultado.innerHTML = 'Descendo...'
            for (let cont = iniValue; cont >=  fimValue; cont -= passoValue) {       
            resultado.innerHTML += `👉${cont}`
      }
            resultado.innerHTML += `✋`
      }
     
   }

   if (ini.value.leng  == 0 || fim.value.length == 0 || passo.value.length == 0)  {
      resultado.innerHTML = '[ERROR] Impossível contar!'

   } else if ( passoValue == 0){
    alert("Passo inválido, considerando passo 1")  
      passoValue = 1
      contador()
     
   } else {
     contador()
   }
  
}

