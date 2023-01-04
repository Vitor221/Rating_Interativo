const select = document.getElementById('areaBtn')

let btnPrev = null

select.addEventListener('click', (e) => {
  const btnValidate = e.target.nodeName === 'BUTTON'; //Verificar se é um botão
  if(!btnValidate){
    return;
  }

  e.target.classList.add('ativo');
 

  if(btnPrev != null) {
    btnPrev.classList.remove('ativo');
  }

  btnPrev = e.target;
})

function btnEnv1(){
  var enviarValue = document.getElementById('btnSubmit').value = 1
  console.log(enviarValue)
}

function btnEnv2() {
  var enviarValue = document.getElementById('btnSubmit').value = 2
  console.log(enviarValue)
}

function btnEnv3() {
  var enviarValue = document.getElementById('btnSubmit').value = 3
  console.log(enviarValue)
}

function btnEnv4() {
  var enviarValue = document.getElementById('btnSubmit').value = 4
  console.log(enviarValue)
}

function btnEnv5() {
  var enviarValue = document.getElementById('btnSubmit').value = 5
  console.log(enviarValue)
}

function enviar(){
  var enviarNull = document.getElementById('btnSubmit').value


  if(enviarNull == 1){
    window.location.href = 'thank1.html'
  }

  if(enviarNull == 2) {
    window.location.href = 'thank2.html'
  }

  if(enviarNull == 3){
    window.location.href = 'thank3.html'
  }

  if(enviarNull == 4){
    window.location.href = 'thank4.html'
  }

  if(enviarNull == 5){
    window.location.href = 'thank5.html'
  }
}