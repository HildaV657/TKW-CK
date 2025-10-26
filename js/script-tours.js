<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function(){
    const time = 3000;
    const slide = document.querySelectorAll('.slideshow .slide');
    const total = slide.length;
    let i = 0;
    function change(){
        slide[i].classList.remove('active');
        i = (i + 1) % total;
        slide[i].classList.add('active')
    }
    setInterval(change, time);
=======
document.addEventListener('DOMContentLoaded', function(){
    const time = 3000;
    const slide = document.querySelectorAll('.slideshow .slide');
    const total = slide.length;
    let i = 0;
    function change(){
        slide[i].classList.remove('active');
        i = (i + 1) % total;
        slide[i].classList.add('active')
    }
    setInterval(change, time);
>>>>>>> 18f3a6a7271be85d9ccc4fa741105acb903be527
});