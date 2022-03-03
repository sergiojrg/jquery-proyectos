$(document).ready(function(){
    $('#contar').click(function(){
        let funcion = $('#contar').val()
        if(funcion == 'N° de enlaces'){
            let enlaces = $('a')
            $('#entrada').val(enlaces.length)
            $('#contar').val('N° de parrafos')
        }
        else{
            let parrafos = $("p")
            $('#entrada').val(parrafos.length)
            $('#contar').val('N° de enlaces')
        }
    });

    $("#agregar").click(function(){
        let funcion = $("#agregar").val()
        const nuevoP = "<p>Nuevo Parrafo</p>"
        if(funcion == "Agregar parrafo"){
            $("#contenido").append(nuevoP)
            $("#agregar").val('Eliminar parrafo')
        }
        else{
            let parrafos= $("p")
            let parrafo = parrafos[parrafos.length-1]
            parrafo.remove()
        }
    });

    $("#fondo").click(function(){
        let funcion = $("#fondo").val()
        if(funcion == "Poner fondo"){
            $("#contenido").css('background','red')
            $("#fondo").val("Quitar Fondo")
        }
        else{
            $("#contenido").css('background','white')
            $("#fondo").val("Poner fondo")
        }
    });
})