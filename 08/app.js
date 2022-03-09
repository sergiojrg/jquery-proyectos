var films = [];
var index = -1;

$(document).ready(function(){

    $('#search').click(function(){
        films = [];
        let text = $('#text').val();

        $.ajax({
            type:'GET',
            dataType:'html',
            url:'http://www.omdbapi.com/?s=' + text + '&apikey=152d6ad7&page=1&type=movie&Content-Type=application/json',
            success: function(data){
                data = JSON.parse(data);
                console.log(typeof data)
                console.log(data)
                data = data.Search;
                $.each(data,function(i){
                    films.push(data[i]);
                });

                if(films.length > 0){
                    $('#title').text(films[0].Title)
                    $('#year').text(films[0].Year)
                    let image = `<img src="${films[0].Poster}" />`
                    $('#poster').html(image)
                    index = 0;
                }
                else{
                    $('#title').text('No hay peliculas')
                    $('#year').text('');
                    $('#poster').text('');
                }
            }
        })
    })

    $('#forward').click(function(){
        console.log('sig')
        if(index == films.length){
            index = 0;
        }
        else{
            index += 1; 
        }

        let source = films[index].Poster;
        let image = `<img src = ${source}/>`
        $('#title').text(films[index].Title)
        $('#year').text(films[index].Year)
        $('#poster').html(image)
    })

    $('#backward').click(function(){
        if(index == 0){
            index = films.length - 1;
        }
        else{
            index -= 1;
        }
        let image = `<img src="${films[index].Poster}"/>`
        $('#title').text(films[index].Title)
        $('#year').text(films[index].Yeat)
        $('#poster').html(image )
    })
})