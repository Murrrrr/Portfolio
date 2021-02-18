const hamburger_menu = document.querySelector('.hamburger_menu');
const hamburger_menuSubmenu = document.querySelector('.hamburger_menu-submenu');
const submenu = document.querySelector('.hamburger_menu-submenu > .submenu');
const top_line = document.querySelector('.hamburger_menu > #top');
const middle_line = document.querySelector('.hamburger_menu > #middle');
const bottom_line = document.querySelector('.hamburger_menu > #bottom');
const contact_button = document.querySelector('.contact_button > button');
const modal = document.querySelector('.modal');
const close_btn = document.querySelector('.close_btn');

hamburger_menu.addEventListener('click', ()=>{
    if(hamburger_menu.classList.length == 2){
        hamburger_menu_closeAnimation();
        hamburger_menu.classList.remove('active');
    }
    else{
        hamburger_menu_openAnimation();
        hamburger_menu.classList.add('active');
    }


})

contact_button.addEventListener('click',()=>{
    modal.style.display = "block";
})

close_btn.addEventListener('click',()=>{
    modal.style.display = "none";
})


function hamburger_menu_openAnimation(){
    top_line.style.top = "0.5rem";
    bottom_line.style.top = "0.5rem";
    hamburger_menuSubmenu.style.display = "block";
    setTimeout(()=>{
        middle_line.style.width = "0";
        top_line.style.transform = "rotate(45deg)";
        bottom_line.style.transform = "rotate(-45deg)";
    },500)

    setTimeout(()=>{
        submenu.style.left = "50%";
    },100)
}

function hamburger_menu_closeAnimation(){
    top_line.style.transform = "rotate(0deg)";
    bottom_line.style.transform = "rotate(0deg)";
    submenu.style.left = "100%";
    setTimeout(()=>{
        middle_line.style.width = "100%";
        top_line.style.top = "0rem";
        bottom_line.style.top = "1rem";
        hamburger_menuSubmenu.style.display = "none";
    },500)
}

