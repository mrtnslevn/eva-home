const accordion = document.getElementsByClassName('contentBox');

for (i = 0; i< accordion.length; i++){
    accordion[i].addEventListener('click', function(){
        if($(this).hasClass('active')) {
            this.classList.remove('active')
            $(this).find('.icon-button-open').removeClass('icon-button-active')
            $('#section4').height(function(n,c){
                return c-170;
            })
        } else {
            this.classList.add('active')
            $(this).find('.icon-button-open').addClass('icon-button-active')
            $('#section4').height(function(n,c){
                return c+170;
            })
        }
    })
}


