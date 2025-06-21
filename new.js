let scrollContainer = document.querySelector('.carousel-container');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehaviour = 'auto';
});


nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 900;
});

prevBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= 900;
});

