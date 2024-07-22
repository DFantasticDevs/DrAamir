const nav = document.querySelector('.nav');

 window.addEventListener('scroll', function() {
    if(window.scrollY > nav.clientHeight + 30) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }


 })