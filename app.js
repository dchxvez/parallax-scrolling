let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let heading = document.getElementById('heading');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let text = document.getElementById('text');
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.left = value * 0.5 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.3 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    heading.style.marginRight = value * 4 + 'px';
    heading.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
});