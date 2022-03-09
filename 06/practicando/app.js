$(document).ready(function(){
    $(document).keydown(function(e){
        if(e.key == 'w'){
            $('#object').hide();
        }
        else if(e.key == 's'){
            $('#object').show();
        }
        else if(e.key == 'a'){
            $('#object').animate({'left':'-=50px'});
        }
        else if(e.key == 'd'){
            $('#object').animate({'left':'+=50px'})
        }
    })
})