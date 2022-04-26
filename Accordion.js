const accordion768 = document.getElementsByClassName('accordion-678');

for (i=0; i < accordion768.length; i++){
    accordion768[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}


