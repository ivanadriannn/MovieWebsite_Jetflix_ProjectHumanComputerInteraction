const category = document.querySelector('.category');
const navbar = document.querySelector('.navbar ul');
const footer = document.querySelector('.area-footer');

category.onclick = () =>{
    navbar.classList.toggle('muncul');
    footer.classList.toggle('muncul');
}