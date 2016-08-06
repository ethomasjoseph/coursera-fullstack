$(document).ready(function(){
    $("#bannerCarousel").carousel(
        {interval : 2000}
    );
    
    $("#carousel-pause").click(function(){
        $("#bannerCarousel").carousel('pause');
    });
    
    $("#carousel-play").click(function(){
        $("#bannerCarousel").carousel('cycle');
    });
});