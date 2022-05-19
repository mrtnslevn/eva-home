const accordion = document.getElementsByClassName('contentBox');

for (i = 0; i< accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        if($(this).hasClass('active')) {
            $('#section4').height(function(n,c){
                return c-170;
            })
        } else {
            $('#section4').height(function(n,c){
                return c+170;
            })
        }
        this.classList.toggle('active')
        $(this).find('.icon-button-open').toggleClass('icon-button-active')
    })
}


