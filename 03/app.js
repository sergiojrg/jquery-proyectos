var isNotCal = false
$(document).ready(function(){
   
    $('.op').click(function(){
        let num = $(this).attr('id');
        clickey(num);
    });

    $('#result').click(function(){
        getResult();
    })

    $('#clear').click(function(){
        clearOutput();
    })

    $('#del').click(function(){
        deleteKey();
    })

    $(document).keydown(function(e){
        switch(e.key){
            case '1':
                clickey('1');
                break;
            case '2':
                clickey('2');
                break;
            case '3':
                clickey('3');
                break;
            case '4':
                clickey('4');
                break;
            case '5':
                clickey('5');
                break;
            case '6':
                clickey('6');
                break;
            case '7':
                clickey('7');
                break;
            case '8':
                clickey('8');
                break;
            case '9':
                clickey('9');
                break;
            case '0':
                clickey('0');
                break;
            case '.':
                clickey('.');
                break;
            case '+':
                clickey('+');
                break;
            case '-':
                clickey('-');
                break;
            case '*':
                clickey('*');
                break;
            case '/':
                clickey('/');
                break;
            case 'Backspace':
                e.preventDefault();
                deleteKey();
                break;
            case 'Enter':
                e.preventDefault();
                getResult();
                break;
            default:
                break;
        }
    })

    function clickey(num){
        if(isNotCal == true){
            $('#output').text("");
        }
        let str = $("#output").text();
        $("#output").text(str + num);
        isNotCal = false;
    }

    function getResult(){
        isNotCal = true;
        let numresult = eval($('#output').text());
        $('#output').text(numresult);
    }

    function clearOutput(){
        $('#output').text('');
    }

    function deleteKey(){
        if(isNotCal == true){
            $('#output').text('');
        }
        else{
            let str = $('#output').text();
            str = str.substr(0,str.length-1);
            $('#output').text(str)
        }
    }

});