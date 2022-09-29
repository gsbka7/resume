


$(".navbar-ham").click(function () {
    $('#contentId').toggleClass('active');
    $("#meunId").toggleClass('active');
}); 

// const meun = document.querySelector('.navbar-ham')
// const ham = document.querySelector('.content')

// meun.addEventListener('click', function () {
//     document.getElementById("meunId").classList.add('active')
//     document.getElementById("contentId").classList.add('active')
    
//     setTimeout(function () {
//         meun.setAttribute("style","display: none");}, 500);

//     setTimeout(function () {
//          ham.setAttribute("style","transform: scale(50)");}, 500);
//         }
// )

const infoElement = document.querySelector('.info')
const infoDistance = infoElement.getBoundingClientRect().top

document.addEventListener('DOMContentLoaded', function info() {
    infoElement.classList.add('show')
})

// const aboutContentElement = document.querySelector('.about .content')
// aboutContentDistence = aboutContentElement.getBoundingClientRect().top
// if(aboutContentDistence <= 1118){
    //     aboutContentElement.classList.add('show')
    // }
    
const titleElement = document.querySelectorAll('.title');
const expElement = document.querySelectorAll('.exp');
const skillElement = document.querySelector('.skill');
const protfolioElement = document.querySelector('.protfolio');
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
        const expElementDistence = expElement[i].getBoundingClientRect().top + expElement[i].clientHeight * 0.1
        if(window.innerHeight > expElementDistence){
            expElement[i].classList.add('show')
        }
    }
    for (let i = 0; i < descElement.length; i++){
        const descElementDistence = descElement[i].getBoundingClientRect().top + descElement[i].clientHeight * 4
        if(window.innerHeight > descElementDistence){
            descElement[i].classList.add('show')
        }
    }

    for (let i = 0; i < desc2Element.length; i++){
        const desc2ElementDistence = desc2Element[i].getBoundingClientRect().top + desc2Element[i].clientHeight * 1.2
        if(window.innerHeight > desc2ElementDistence){
            desc2Element[i].classList.add('show')
        }
    }
    
    const skillElementDistance = skillElement.getBoundingClientRect().top + skillElement.clientHeight * 0.5
    if(window.innerHeight > skillElementDistance){
        skillElement.classList.add('show')
    }
    
    const protfolioElementDistance = protfolioElement.getBoundingClientRect().top + protfolioElement.clientHeight * 0.15
    if(window.innerHeight > protfolioElementDistance){
        protfolioElement.classList.add('show')
    }

    for (let i = 0; i < learnElement.length; i++){
        const learnElementDistence = learnElement[i].getBoundingClientRect().top + learnElement[i].clientHeight * 1.4
        if(window.innerHeight > learnElementDistence){
            learnElement[i].classList.add('show')
        }
    }


})







