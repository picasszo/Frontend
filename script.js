
function validar() {


  //1 passo pegar o elemento input
  let input = document.getElementById('senha')

  //2° passo pegar elementos li
  let L1 = document.getElementById('L1')
  let L2 = document.getElementById('L2')
  let L3 = document.getElementById('L3')
  let L4 = document.getElementById('L4')

  //3° passo : testar as condições de cada li
  if (input.value.length >= 8) {
    L1.className = 'ok'
  } else {
    L1.className = 'n'
  }
  if (/[A-Z]/.test(input.value)) {
    L2.className = 'ok'
  } else {
    L2.className = 'n'
  }
  if (/\d/.test(input.value))
    L3.className = 'ok'
}else {
  L3.className = 'n'
}

//4° passo : adicionar a classw ok se a condição for verdadeira
