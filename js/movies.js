const category = document.querySelector('.category');
const navbar = document.querySelector('.navbar ul');
const home = document.querySelector('.home');
const film1 = document.querySelector('.film-collection1');
const film2 = document.querySelector('.film-collection2');
const film3 = document.querySelector('.film-collection3');
const film4 = document.querySelector('.film-collection4');
const footer = document.querySelector('.area-footer');

category.onclick = () =>{
    navbar.classList.toggle('muncul');
    home.classList.toggle('muncul');
    film1.classList.toggle('muncul');
    film2.classList.toggle('muncul');
    film3.classList.toggle('muncul');
    film4.classList.toggle('muncul');
    footer.classList.toggle('muncul');
}