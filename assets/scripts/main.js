//Update copy automatically
document.querySelector('.year-copy').innerText = new Date().getFullYear();

//Sticky header
window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

//SCROLL INDICATOR
window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop;
    let maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let totalScrolled = scrollPosition * 100 / maxHeight;

    document.querySelector("#scroll-indicator span").style.width = totalScrolled + '%';
    if (scrollPosition > 5) {
        document.querySelector("#scroll-indicator").style.backgroundColor = "rgba(0, 0, 0, 0.85)";
    } else {
        document.querySelector("#scroll-indicator").style.backgroundColor = "transparent";
    }
});

//SCROLL TO SECTIONS
$(".nav-link").on('click', function(e) {

    e.preventDefault();
    var id = $(this).attr('href');
    var $id = $(id);
    
    // top position relative to the document
    var pos = $id.offset().top - 115;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});