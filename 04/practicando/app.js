var index = 1
var state = 'stop'
let interval

$(document).ready(function(){
    $('.small').click(function(){
        $('.selected').removeClass("selected");
        let src = $(this).attr('src');

        $('.big').attr('src',src);
        $(this).addClass('selected')
    });

    $('#backward').click(function(){
        $('#'+index).removeClass('selected')
        if(index == 1){
            index = 6;
        }
        else{
            index -= 1;
        }

        let source = $('#'+index).attr('src')
        $('.big').attr('src',source)
        $('#'+index).addClass('selected')
    })

    $('#forward').click(function(){
        goForward();
    })

    $('#play').click(function(){
        if(state == 'stop'){
            state = 'run'
            $('#play').text('||')
            interval = setInterval(() => {
                goForward();
            }, 2000);
        }
        else if(state == 'run'){
            $('#play').text('>')
            clearInterval(interval)
        }
    })
})

function goForward(){
    $('#'+index).removeClass('selected')
        if(index == 6){
            index = 1;
        }
        else{
            index += 1;
        }
        let source = $('#'+index).attr('src')
        $('.big').attr('src',source)
        $('#'+index).addClass('selected')
}