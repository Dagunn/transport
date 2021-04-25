$(function () {

    $('.filter').selectmenu();
    // $(".filter").selectmenu({
    //     classes: {
    //         "ui-selectmenu-text": "my-happy-decorated-class"
    //     }
    //   });

    $('.checkbox__label').on('click', function(){
        $('.temperature__inner').fadeToggle('active')
        
    })
     
    $('#ui-id-1-button').on('click', function(){
        $('.weight').toggleClass('active')
    })

    $('#ui-id-2-button').on('click', function(){
        $('.shipment').toggleClass('active')
    })

    
   
   
    
})