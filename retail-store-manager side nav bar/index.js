const aside = document.getElementById('aside_bar');

aside.addEventListener('click',()=>{
    const aside_bar = document.getElementById('aside');
    aside_bar.classList.toggle('active');
})