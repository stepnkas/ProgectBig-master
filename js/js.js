
const progressBar = document.querySelector('.progressbar');
const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const screenheight = window.screen.height;
const firstBox = document.querySelector('.photo');

function scrolling() {
    
    if (isPartiallyVisible(firstBox)) {
        firstBox.classList.add("photo--active");
    } else {
        firstBox.classList.remove("photo--active");
    }
}
function isPartiallyVisible(element) {
    const elementBoundary = element.getBoundingClientRect();
    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;
    const height = elementBoundary.height;
    
    return (top + height >= 0) && (height + screenheight > bottom);
}
function isFullyVisible (element) {
    const elementBoundary = element.getBoundingClientRect();
    const top = elementBoundary.top;
    const bottom = elementBoundary.bottom;

    return (top >= 0 ) && (bottom <= screenheight);
}
window.addEventListener("scroll", scrolling);

window.addEventListener('scroll', ()=> {
    const windowScroll = window.pageYOffset;
    const progressBarWidth = (windowScroll / windowHeight).toFixed(2);
    console.log(progressBarWidth);
    progressBar.setAttribute('style', `transform: scaleX(${progressBarWidth});`);
});

// ---------------------------------


