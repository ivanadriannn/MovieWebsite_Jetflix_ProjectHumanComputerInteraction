const category = document.querySelector('.category');
const navbar = document.querySelector('.navbar ul');
const home = document.querySelector('.home');
const film1 = document.querySelector('.film-collection1');
const film2 = document.querySelector('.film-collection2');
const footer = document.querySelector('.area-footer');

category.onclick = () =>{
    navbar.classList.toggle('muncul');
    home.classList.toggle('muncul');
    film1.classList.toggle('muncul');
    film2.classList.toggle('muncul');
    footer.classList.toggle('muncul');
}