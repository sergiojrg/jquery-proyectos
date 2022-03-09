$(document).ready(function(){

    $.ajax({
        type:'GET',
        dataType:'html',
        url:'http://www.rtve.es/api/noticias.json',
        success:function(data){
            data = JSON.parse(data);
            var datatable = $('.mytable').DataTable({
                'bDestroy':true,
                'aaData':data.page.items,
                'aLengthMenu':[[5,10,20,-1],[5,10,20,'Todos']],
                'aoColumns':[
                    {'mData':'id'},
                    {'mData':'publicationDate'},
                    {'mData':'longTitle'},
                    {'mData':'url'},
                    {'mData':'summary'},
                ]
            })
        }
    })

})