$(document).ready(()=>{
    
    $('.tab-arrow').on('click', (event)=> {
        $(event.currentTarget).parent().siblings().slideToggle();
        $(event.currentTarget).toggleClass('rotate');
    })
   
});

