$(document).ready(function(){
    let films = [];
    let index = 0;

    $('#search').click(function(){
        films = [];
        index = 0;

        let text = $('#text').val()

        $.ajax({
            dataType: 'html',
            type : 'GET',
            url : 'http://www.omdbapi.com/?s=' + text + '&apikey=152d6ad7&page=1&type=movie&Content-Type=application/json',
            success: function(data){
                data = JSON.parse(data)
                data = data.Search;
                $.each(data,function(i){
                    films.push(data[i])
                });

                if(films.length > 0){
                    $('#title').text(films[0].Title)
                    $('#year').text(films[0].Year)
                    let image = `<img src="${films[0].Poster}"/>`
                    $('#poster').html(image)
                }
                else{
                    $('#title').text('No hay peliculas')
                }
            }
        })

        $('#forward').click(function(){
            if(index==films.length){
                index = 0;
            }
            else{
                index += 1;
            }
            $('#title').text(films[index].Title)
            $('#year').text(films[index].Year)
            let image = `<img src="${films[index].Poster}"/>`
            $('#poster').html(image)
        })

        $('#backward').click(function(){
            if(index == 0 ){
                index = films.length-1;
            }
            else{
                index -= 1;
            }
            $('#title').text(films[index].Title)
            $('#year').text(films[index].Year)
            let image = `<img src="${films[index].Poster}"/>`
            $('#poster').html(image)
        })
    })
})