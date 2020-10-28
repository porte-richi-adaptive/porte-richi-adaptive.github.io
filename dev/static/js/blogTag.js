const tagMenu = document.querySelector('.blog__tags__menu');
const openTagMenu = document.querySelector('.blog__tags__open-menu');
const crossButton = document.querySelector('.blog__tags__open-menu-top img');
const blogTitle = document.querySelector('.blog__title');

tagMenu.addEventListener('click', ()=>{
    tagMenu.style.display = "none";
    blogTitle.style.display = "none"
    openTagMenu.style.display = "block";
});

crossButton.addEventListener('click', ()=>{
    tagMenu.style.display = "flex";
    openTagMenu.style.display = "none";
    blogTitle.style.display = "block"
});
