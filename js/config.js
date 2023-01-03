var btns = document.querySelectorAll('.btns')

for(var i = 0; i < btns.length; i++){
  btns[i].addEventListener("click", function() {
    var select = document.getElementsByClassName("ativo");

    if(select.length > 0){
      select[0].className = select[0].className.replace("ativo", "");
    }

    this.className += " ativo";
  })
}

var btn = document.getElementsByClassName('ativo')
var submit = document.getElementById('btnSubmit')
var btnValue1 = document.getElementById('btnVal1')
console.log(btnValue1)
var btnValue2 = document.getElementById('btnVal2').value
console.log(btnValue2)

submit.addEventListener('click', function (e) {
  var campo = document.getElementById('btnVal1').value

  if(campo == 1 && btnValue1 == 1){
    window.location.href = 'thank1.html';
  } else {
    alert('error')
  }
})
  
  

