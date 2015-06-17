$(document).ready(function() {

    /*$('.navActiviteOnglet').click(function (e) {
        e.preventDefault();
        var act = $(this).data('activite');

        $('#containAct > div').hide();
        $('.DivActiviteOnglet' + act).fadeIn(500);
    })*/
    $('.closeCross').click(function(e){
        $('#overflow').hide();
    })
    $('.connexion').click(function(e){
        $('#overflow').show();
    })

    $('.button').click(function(e){
        $('.overflowContent > div').hide();
        var contain = $(this).data('contain');
        $('.'+contain).show();
        $('.overflowContent > span').removeClass("active");
        $(this).addClass("active");
    })

})