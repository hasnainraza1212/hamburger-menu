var menuBtn = document.querySelector(".btn-parent");
var menuOpen = false;
menuBtn.addEventListener('click', () => {

});
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menuOpen = true;
    }
    else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }

});