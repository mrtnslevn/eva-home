const accordion = document.getElementsByClassName('contentBox');

for (i = 0; i< accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        if($(this).hasClass('active')) {
            $('#flip-card').height(function(n,c){
                return c-250;
            })
        } else {
            $('#flip-card').height(function(n,c){
                return c+250;
            })
        }
        this.classList.toggle('active')
        $(this).find('.icon-button-open').toggleClass('icon-button-active')
    })
}


