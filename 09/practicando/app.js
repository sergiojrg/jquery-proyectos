var y_chart = [12,33,34,36,23,11,16,22,20,21,25,26]
var x_chart = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciemnbre']

$(document).ready(function(){
    
    let data = [];
    $.each(x_chart,function(i){
        data.push({
            label:x_chart[i],
            y: y_chart[i]
        })
    })

    var options = {
        animationEnable: true,
        theme: 'lights2',
        title:{
            text: 'Temperaturas media Tampico'
        },
        data: [{
            type: 'line',
            indexLabelFontSize: 16,
            dataPoints: data
        }]
    }
    $('#chartContainer').CanvasJSChart(options)

})