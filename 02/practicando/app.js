$(document).ready(function(){

    $("#cent").change(function(){
        let cent = Number($("#cent").val());
        let conversion = (cent*9/5) + 32

        $("#fah").val(conversion)
    })

    $("#fah").change(function(){
        let fah = Number($("#fah").val())
        let conversion = (fah - 32) * 5/9

        $("#cent").val(conversion)
    })
})