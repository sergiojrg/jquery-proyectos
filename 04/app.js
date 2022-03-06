var index = 1;
var state = 'stop'
let interval;

$(document).ready(function(){
    $('.small').click(function(){
        $('#'+index).removeClass('selected');
        let source = $(this).attr('src');
        $('.big').attr('src',source);
        index = parseInt($(this).attr('id'));
        $('#'+index).addClass('selected');
    })

    $('#backward').click(function(){
        goBack();
    })

    $('#forward').click(function(){
        goForward();
    })

    $('#play').click(function(){
        
        if(state == 'stop'){
            state = 'run'
            $('#play').text('||')
            interval = setInterval(function(){
                goForward()
            },3000)

        }
        else{
            state = 'stop'
            $('#play').text('>')
            clearInterval(interval)
        }
    })

    $(document).keydown(function(e){
        if(e.key == 'ArrowLeft'){
            goBack()
        }
        else if(e.key == 'ArrowRight'){
            goForward();
        }
    })
})


function goBack(){
    $('#'+index).removeClass('selected');
    if(index == 1){
        index = 6;
    }
    else{
        index = index - 1;
    }
    let source = $('#'+ index).attr('src')
    $('.big').attr('src',source)
    $('#'+index).addClass('selected')
}

function goForward(){
    $('#'+index).removeClass('selected')

    if(index == 6 ){
        index = 1;
    }
    else{
        index += 1;
    }

    let source = $('#'+index).attr('src')
    $('.big').attr('src',source)
    $('#'+index).addClass('selected')

}