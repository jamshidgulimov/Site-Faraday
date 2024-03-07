const butts = document.getElementsByClassName('butts');


for (i=0; i<accordion.length; i++){
    butts[i].addEventListener('click', function(){
        this.classList.toggle('activ')
    })
}