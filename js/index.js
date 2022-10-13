$(".navbar-ham").click(function () {
    $('#contentId').toggleClass('active');
    $("#meunId").toggleClass('active');
}); 

const infoElement = document.querySelector('.info')
const infoDistance = infoElement.getBoundingClientRect().top

document.addEventListener('DOMContentLoaded', function info() {
    infoElement.classList.add('show')
})
    
const titleElement = document.querySelectorAll('.title');
const expElement = document.querySelectorAll('.exp');
const skillElement = document.querySelector('.skill');
// const protfolioElement = document.querySelector('.protfolio');
const iconElement = document.querySelectorAll('.protfolio-items > .item');

const descElement = document.querySelectorAll('.desc p');
const learnElement = document.querySelectorAll('.learn');
const desc2Element = document.querySelectorAll('.desc2 p');


document.addEventListener('scroll',function() {
    for (let i = 0; i < titleElement.length; i++) {
        const titleDistance = titleElement[i].getBoundingClientRect().top + titleElement[i].clientHeight * 2;
        if(window.innerHeight > titleDistance){
            titleElement[i].classList.add('show')
        }
    }
    for (let i = 0; i < expElement.length; i++){
        const expElementDistance = expElement[i].getBoundingClientRect().top + expElement[i].clientHeight * 0.1
        if(window.innerHeight > expElementDistance){
            expElement[i].classList.add('show')
        }
    }
    for (let i = 0; i < descElement.length; i++){
        const descElementDistance = descElement[i].getBoundingClientRect().top + descElement[i].clientHeight * 4
        if(window.innerHeight > descElementDistance){
            descElement[i].classList.add('show')
        }
    }

    for (let i = 0; i < desc2Element.length; i++){
        const desc2ElementDistance = desc2Element[i].getBoundingClientRect().top + desc2Element[i].clientHeight * 1.2
        if(window.innerHeight > desc2ElementDistance){
            desc2Element[i].classList.add('show')
        }
    }
    for (let i = 0; i < iconElement.length; i++){
        const iconElementDistance = iconElement[i].getBoundingClientRect().top + iconElement[i].clientHeight * 0.1
        if(window.innerHeight > iconElementDistance){
            iconElement[i].classList.add('show')
        }
    }
    
    const skillElementDistance = skillElement.getBoundingClientRect().top + skillElement.clientHeight * 0.5
    if(window.innerHeight > skillElementDistance){
        skillElement.classList.add('show')
    }
    
    // const iconElementDistance = iconElement.getBoundingClientRect().top + iconElement.clientHeight * 0.15
    // if(window.innerHeight > iconElementDistance){
    //     iconElement.classList.add('show')
    // }
  
    for (let i = 0; i < learnElement.length; i++){
        const learnElementDistence = learnElement[i].getBoundingClientRect().top + learnElement[i].clientHeight * 1.4
        if(window.innerHeight > learnElementDistence){
            learnElement[i].classList.add('show')
        }
    }
})








