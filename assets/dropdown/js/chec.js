const nes = document.querySelector('#nes')
const nes2 = document.querySelector('#nes2')
const chec1 = document.querySelector('#chec1')
const chec2 = document.querySelector('#chec2')

if(chec1.addEventListener('click', ()=>{
    nes.value = 'Интересует индивидуальное обучение'
})){
    nes.value= 'Интересует индивидуальное обучение'
}else{
    nes.value = ''
}


if(chec2.addEventListener('click', ()=>{
    nes2.value = 'Интересует несколько курсов'
})){
    nes2.value= 'Интересует несколько курсов'
}else{
    nes2.value = ''
}