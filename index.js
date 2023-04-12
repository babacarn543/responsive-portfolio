window.onscroll = function () {
    scrollFunction ()
};
function scrollFunction () {
    var mybutton = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        mybutton.style.opacity = 1;
        mybutton.style.visibility = "visible";
    }else{
        mybutton.style.opacity = 0;
        mybutton.style.visibility = "hidden";
    }
}
function topFunction () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})
   
