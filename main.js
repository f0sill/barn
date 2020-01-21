$(document).scroll(function(){

    var scroll = $(window).scrollTop();
    
    if(scroll>600){
        $("#navbar").addClass( "sticky" );
    }else{
        $("#navbar").removeClass( "sticky" )
    }
});
