'use strict';
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

    // Login Model
    $("#login-btn").click(function() {
        $('#login-modal').modal('show');
    });

    // Registration Model
    $("#reserve-btn").click(function() {
        $('#reserve-modal').modal('show');
    });
});
