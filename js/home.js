const category = document.querySelector('.category');
const navbar = document.querySelector('.navbar ul');
const home = document.querySelector('.home');
const footer = document.querySelector('.area-footer');

category.onclick = () =>{
    navbar.classList.toggle('muncul');
    home.classList.toggle('muncul');
    footer.classList.toggle('muncul');
}