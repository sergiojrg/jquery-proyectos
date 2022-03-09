var longitude = -3.70325;
var latitude = 40.4165;
var zoomApp = 12;

$(document).ready(function(){
    $('#image').hide();
    $('#map').show();
    drawMap();

    $('#search').click(function(){
        let city = $('#city').val();
        let street = $('#street').val();
        console.log(street)
        let key = 'e66bc9a980f87b9e159065580151116f'
        let query = `http://api.positionstack.com/v1/forward?access_key=e66bc9a980f87b9e159065580151116f&query=${street}%20,${city}`

        console.log(query)

        if(street != ''){
            zoomApp = 18;
        }
        else{
            zoomApp = 12;
        }

        $.ajax({
            type:'GET',
            dataType: 'html',
            url: query,
            success: function(data){
                data = JSON.parse(data);

                if(data.data.length == 0){
                    $('#image').show();
                    $('#map').hide();
                }
                else{
                    $('#image').hide();
                    $('#map').show();
                    data = data.data[0];
                    latitude = data.latitude;
                    longitude = data.longitude;
                    drawMap();
                }
            }
        })
    });
});

function drawMap(){
    $('#map').empty();
    var map = new ol.Map({
        target:'map',
        layers:[
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([longitude,latitude]),
            zoom: zoomApp
        })
    });
}