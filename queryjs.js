$("#first").html("helllo")
var slide=function(target){
    $(target).slideToggle("slow");
};

$("#first").click(function(){
    slide("#second");
    $("#dog-image").slideUp("slow");
});
/*$("#second").click(function(){
    slide("#first");
})*/
$("#Button").mouseenter(function(){
    $(this).text("Click me")
    $(this).css({
                 'background-color' :'#6d6d6d',
                 'font-size':'20px',
                 'border-radius':'30%'
    });
    $(this).animate({
        height:'40px',
        width:'80px',
        borderRadius:'15%'
    })
})
$("#Button").mouseleave(function(){
    $(this).text("Click")
    $(this).css({
                 'background-color' :'white',
                 'font-size':'10px'
    });
    $(this).animate({
        height:'30px',
        width:'60px',
        borderRadius:'0%'
    });
})
$("#Button").click(function(event){
    event.preventDefault();
  $("#first, #second, #dog-image").stop();
  $("#dog-image-shown").slideDown("slow");
});

function dogfetchingimage(){
    /* ONE METHOD OF AJEX REQUEST
    --------------------------------
    var request=new XMLHttpRequest();
    request.onload=function(){
        console.log(request.response);
        var jsonresponse=JSON.parse(request.response);
        var linkimage=jsonresponse.message;
        console.log(jsonresponse);
        
        console.log(JSON.stringify(linkimage));
        console.log(linkimage);
        $("#dog-image").text(linkimage);
        $("#dog-image-shown").attr('src',linkimage);
    };
    request.open('get','https://dog.ceo/api/breeds/image/random',true);
    request.send();
}*/


/*  2ND METHOD IN SHORT USING JQUERY
---------------------------------------
 $.ajax({
    url:'https://dog.ceo/api/breeds/image/random',
    method:'GET',
    success:function(data){
        var image=data.message;
        $("#dog-image-shown").attr('src',image)
    }
 });
}
 */

//  3RD METHOD IN JQUERY (SHORTEST WAY)
//---------------------------------------

$.get('https://www.google.com/maps/dir/20.3008841,85.8204532/tajmahal+map/@23.5862744,77.9906404,6z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39747121d702ff6d:0xdd2ae4803f767dde!2m2!1d78.0421422!2d27.1751448?entry=ttu',function(data){
    var image=data.message;
    $("#dog-image-shown").attr('src',image);
});
}
$('#Button').click(dogfetchingimage);


