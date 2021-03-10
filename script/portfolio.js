const cursor = document.querySelector('.cursor');
const button = document.querySelectorAll('.scroll_section > li > a');
const char = document.querySelectorAll('#background_char2 path');

for(let i=0; i<char.length; i++){
    console.log(char[i].getTotalLength());
}
window.addEventListener('mousemove', mouseFunc, false);

let x = 0;
let y = 0;
let mouseX = 0;
let mouseY = 0;
let speed = 0.3;

function mouseFunc(event){
    x = event.clientX;
    y = event.clientY;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
}

loop();



function loop(){
    mouseX += (x - mouseX) * speed;
    mouseY += (y - mouseY) * speed;
    cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    requestAnimationFrame(loop);

    for(let i=0; i<button.length; i++){
        button[i].addEventListener('mouseover', ()=>{
            button[i].style.transform = `scale(1.5)`;
        })

        button[i].addEventListener('mouseout',()=>{
            button[i].style.transform = `translate(${0}px, ${0}px)`;
        })
        
    }


}

$(document).ready(()=>{

    
    
    
    function cursorOver(){
        $('.cursor').css({
            width: "5rem",
            height: "5rem",
            backgroundColor: "#aaa",
            mixBlendMode: "difference",
            border: "none"
        })
    }

    function cursorOut(){
        $('.cursor').css({
            width: "4rem",
            height: "4rem",
            backgroundColor: "transparent",
            mixBlendMode: "normal",
            border: "1px solid #000"
        })
    }

    $('.img-container > img').mouseover(()=>{cursorOver();})
    $('.img-container > img').mouseout(()=>{cursorOut();})
    $('.swiper-button-prev').mouseover(()=>{cursorOver();})
    $('.swiper-button-prev').mouseout(()=>{cursorOut();})
    $('.swiper-button-next').mouseover(()=>{cursorOver();})
    $('.swiper-button-next').mouseout(()=>{cursorOut();})
    $('.scroll_section > li > a').mouseover(()=>{cursorOver();})
    $('.scroll_section > li > a').mouseout(()=>{cursorOut();})
    $('.home_button').mouseover(()=>{cursorOver();})
    $('.home_button').mouseout(()=>{cursorOut();})
    
    $('.subject-container').css({
        marginTop: -$('.subject-container').height()/2,
        marginLeft: -$('.subject-container').width()/2 
    });

    $('.scroll_section li').eq(0).click(()=>{
        section1Active();
    })

    $('.scroll_section li').eq(1).click(()=>{
        section2Active();
    })

    $('.scroll_section li').eq(2).click(()=>{
        section3Active();
    })

    window.addEventListener('mousewheel',()=>{
        if($('.section').eq(1).hasClass('active')){
            section1Active();
        }

        if($('.section').eq(2).hasClass('active')){
            section2Active();
        }

        if($('.section').eq(3).hasClass('active')){
            section3Active();
        }
    })

    function section1Active(){
        setTimeout(()=>{
            for(let i = 0; i<$('#background_char path').length; i++){
                $(`#background_char path:nth-child(${i+1})`).css({
                    animation:`line-anime 1s ease-in-out ${(i+1)*2/10}s forwards`
                })
            }
        },1000)

        setTimeout(()=>{
            $('.contents-wrapper > h3').css({
                "opacity":1
            })
        },3000)

        setTimeout(()=>{
            $('.info-wrapper').css({
                "opacity":1
            })

            $('.info-wrapper > h2').css({
                "opacity":1
            })

            
        $('.profile_info span').css({"width" : "95%"});
        $('.skills_info span').css({"width" : "95%"});
        },4000)
    }

    function section2Active(){
        setTimeout(()=>{
            for(let i = 0; i<$('#background_char2 path').length; i++){
                $(`#background_char2 path:nth-child(${i+1})`).css({
                    animation:`line-anime 1s ease-in-out ${(i+1)*2/10}s forwards`
                })
            }
        },1000)

        setTimeout(()=>{
            $('#work_slide-container').css({"opacity":1});
            $('#work_slide-container').css({"top":"50%"});
        },2000)
    }

    function section3Active(){
        setTimeout(()=>{
            for(let i = 0; i<$('#background_char3 path').length; i++){
                $(`#background_char3 path:nth-child(${i+1})`).css({
                    animation:`line-anime 1s ease-in-out ${(i+1)*2/10}s forwards`
                })
            }
        },1000)

        setTimeout(()=>{
            $('.contents-wrapper').css({"opacity":1});
        },2000)
    }


        
    


    $(window).resize(function () { 

        $('.subject-container').css({
            marginTop: -$('.subject-container').height()/2,
            marginLeft: -$('.subject-container').width()/2 
        });
        
    });
    
})