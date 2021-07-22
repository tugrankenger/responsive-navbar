const responsiveBars = ()=>{
    const icon = document.querySelector('.icon');
    const navList= document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');

    icon.addEventListener('click', ()=>{
        navList.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation= `menuSlide 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });
    });

};

responsiveBars();