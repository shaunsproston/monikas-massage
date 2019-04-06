$(document).ready(()=>{
    
    $('.tab-arrow').on('click', (event)=> {
        $(event.currentTarget).parent().siblings().slideToggle();
        $(event.currentTarget).toggleClass('rotate');
    })

    $('#menu-icon').on('click', (event)=> {
        $('.hamburger-menu-background').slideToggle();
        $('.hamburger-menu li').slideToggle();
    })

});

