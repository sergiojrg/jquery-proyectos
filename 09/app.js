var x_data = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosot','Septiembre','Octubre','Noviembre','Diciembre'];
var y_data = [12,20,24,24,26,30,30,31,32,34,36,33];

$(document).ready(function(){

    //[{label:'Enero',y:12},{}...]
    let data = [];
    $.each(x_data,function(i){
        data.push({
            label:x_data[i],
            y: y_data[i]
        })
    });
    console.log(data)
    var options = {
        title : {
            text : 'Temperatura media de Tampico'
        },
        axisY: {
            suffix:' °C',
        },
        animationEnable: true,
        exportEnable: true,
        data: [{
            type: 'column',
            name: 'Temp',
            showInLegend: true,
            dataPoints: data
        }]
    };

    $('#chartContainer').CanvasJSChart(options);
})