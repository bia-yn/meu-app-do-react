

/*import './Menu';*/

/*
class MobileNavbar{
    constructor(mobileMenu , navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            console.log(index);
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5 ease forwads 0.3s');
            });
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();
*/


import './Menu'

const itens = document.getElementById('itens');


function clickMenu(){
    if (itens.style.display === 'block') {
        itens.style.display = 'none'
    }else{
        itens.style.display = 'block'
    }
}