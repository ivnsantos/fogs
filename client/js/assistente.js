(function($) {
    "use strict"
    
    $('#fox').click(function(){
        console.log(document.getElementById('chat').style.display);
        if(document.getElementById('chat').style.display == 'none'){

            $('#chat').css('display', 'block');

        }else{

            $('#chat').css('display', 'none');
        }      
    });



})(jQuery);
