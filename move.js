$(document).ready(function(){
    $('.right').click(function(){
        $('#box').css(
            {left:"+=5px"}
        );
    });
    
    $('.down').click(function(){
        $('#box').css(
            {top: "+=5px"}
        );
    });

    $('.up').click(function(){
        $('#box').css(
            {top: "-=5px"}
        );
    });

    $('.left').click(function(){
        $('#box').css(
            {left: "-=5px"}
        );
   });

});
 
$(document).keydown(function(e){
    //console.log(e.which);
    var key = e.which;

    //left
    var left_keys=[65,37]
    if (left_keys.includes(key)){
        $('.left').click();
    }

    //right
    var right_keys=[68,39]
    if (right_keys.includes(key)){
        $('.right').click();
    }

    //up
    var up_keys=[87,38]
    if (up_keys.includes(key)){
        $('.up').click();
    }

    //down
    var down_keys=[83,40]
    if (down_keys.includes(key)){
        $('.down').click();
    }

});