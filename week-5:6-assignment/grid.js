$('#slider').on('change', function () {
    console.log($('slider').val());
    $('.body').css({
        opacity: $(this).val() * '.01'
    });
});