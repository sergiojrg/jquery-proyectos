var isCalc = false
$(document).ready(function(){

    $('.op').click(function(){
        let val = $(this).attr('id');

        clicky(val);
    })

    $('#result').click(function(){
        getResult();
    })

    $('#c').click(function(){
        clearAll();
    })

    $('#del').click(function(){
        clearKey();
    })

    $(document).keydown(function(e){
        console.log(e.key)
        switch(e.key){
            case '1':
                clicky('1')
                break;
            case '2':
                clicky('2')
                break;
            case '3':
                clicky('3')
                break;
            case '4':
                clicky('4')
                break;
            case '5':
                clicky('5')
                break;
            case '6':
                clicky('6')
                break;
            case '7':
                clicky('7')
                break;
            case '8':
                clicky('8')
                break;
            case '9':
                clicky('9')
                break;
            case '0':
                clicky('0')
                break;
            case '+':
                clicky('+')
                break;
            case '-':
                clicky('-')
                break;
            case '*':
                clicky('*')
                break;
            case '/':
                clicky('/')
                break;
            case 'Enter':
                getResult()
                break;
            case 'Backspace':
                clearKey()
                break;
        }
    })

    function clicky(val){
        if(isCalc == true){
            $('.output').text('')
        }
        let str = $('.output').text()
        $('.output').text(str + val)
        isCalc = false
    }

    function getResult(){
        let ec = $('.output').text()
        $('.output').text(eval(ec))
        isCalc = true
    }

    function clearAll(){
        $('.output').text('')
    }

    function clearKey(){
        let val = $('.output').text()
        let nval = val.substr(0,val.length-1)
        $('.output').text(nval)
    }
})