$(document).ready(()=>{
    let scroll;
    $(window).scroll(()=>{
        scroll = $(this).scrollTop();
        $('.scroll').html(scroll);
    })

})