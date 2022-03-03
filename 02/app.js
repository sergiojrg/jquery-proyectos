$(document).ready(function(){

    $("#centigrados").change(function(){
        let cent = Number($("#centigrados").val())

        let conversion = (cent*9/5)+32;

        $("#fahrenheit").val(conversion.toFixed(2))
    })

    $("#fahrenheit").change(function(){
        let fah = Number($("#fahrenheit").val())
        let conversion =  (fah - 32)*5/9

        $("#centigrados").val(conversion.toFixed(2))
    })
})