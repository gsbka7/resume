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

$(".navbar-ham").click(function () {
    $('#contentId').toggleClass('active');
    $("#meunId").toggleClass('active');
}); 




