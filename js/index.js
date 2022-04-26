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
if(infoDistance <= 100){
    infoElement.classList.add('show')
}

const aboutContentElement = document.querySelector('.about .content')
aboutContentDistence = aboutContentElement.getBoundingClientRect().top
if(aboutContentDistence <= 1118){
    aboutContentElement.classList.add('show')
}

const titleElement = document.querySelectorAll('.title')
const expElement = document.querySelectorAll('.exp')
const skillElement = document.querySelector('.skill')
const protfolipElement = document.querySelector('.protfolio')

document.addEventListener('scroll',function() {
    for (let i = 1; i < titleElement.length; i++) {
        const titleDistance = titleElement[i].getBoundingClientRect().top + titleElement[i].clientHeight * 0.5;
        if(window.innerHeight > titleDistance){
            titleElement[i].classList.add('show')
        }
    }
    for (let i = 0; i < expElement.length; i++){
        const expElementDistence = expElement[i].getBoundingClientRect().top + expElement[i].clientHeight * 0.3
        if(window.innerHeight > expElementDistence){
            expElement[i].classList.add('show')
        }
    }
    
    const skillElementDistance = skillElement.getBoundingClientRect().top + skillElement.clientHeight * 0.5
    if(window.innerHeight > skillElementDistance){
        skillElement.classList.add('show')
    }

    const protfolioElementDistance = protfolipElement.getBoundingClientRect().top + protfolipElement.clientHeight * 0.15
    if(window.innerHeight > protfolioElementDistance){
        protfolipElement.classList.add('show')
    }
})







