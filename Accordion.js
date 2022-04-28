const accordion = document.getElementsByClassName('contentBox');

for (i = 0; i< accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
        $(this).find('.icon-button-open').toggleClass('icon-button-active')
    })
}


