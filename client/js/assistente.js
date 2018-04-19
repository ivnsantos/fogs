
(function($) {
    "use strict"
    
    $('#fox').click(function(){
        console.log(document.getElementById('chat').style.display);
        if(document.getElementById('chat').style.display == 'none'){

            $('#chat').css('display', 'block');
            $('#fox1').css('display', 'block');

        }else{

            $('#chat').css('display', 'none');
            $('#fox1').css('display', 'none');
        }      
    });

    $('#fox1').click(function(){
        

            $('#fox').css('display', 'block');
            $('#chat').css('display', 'none');
            $('#fox1').css('display', 'none');

    });



})(jQuery);

