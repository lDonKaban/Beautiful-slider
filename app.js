const upBtn = document.querySelector('.up-button'),
      dnBtn = document.querySelector('.down-button'),
      mainSlide = document.querySelector('.main-slide'),
      slidesCount = mainSlide.querySelectorAll('div').length,
      sidebar = document.querySelector('.sidebar'),
      container = document.querySelector('.container');
    
let slideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

dnBtn.addEventListener('click', () => {
    changeSlide('dn');
});

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') {
        changeSlide('up');
    } else if (e.key === 'ArrowDown') {
        changeSlide('dn');
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        slideIndex++;
        if (slideIndex == slidesCount) {
            slideIndex = 0;
        }
    } else if (direction === 'dn') {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slidesCount - 1;
        }
    }
    
    const height = container.clientHeight;
    sidebar.style.transform = `translateY(${slideIndex * height}px)`;
    mainSlide.style.transform = `translateY(-${slideIndex * height}px)`;
}