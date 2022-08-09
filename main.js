const gallery = document.querySelector('.gallery');
// function to get the value of specific style of specific  element --in this case we want to get the value of grid-auto-rows&grid-row-gap of the gallery class--
const getVal = (elem, style) => {
    return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
};
// this function used to get the height of the gallery item
const getHieght = (item) => {
    return item.querySelector('.gallery__item-content').getBoundingClientRect().height;
};

// the main function
const resizeAll = () => {
    // get values...
    let altura = getVal(gallery, 'grid-auto-rows'); // "8" (check the css)
    let gap = getVal(gallery, 'grid-row-gap'); // "8" (check the css)
    console.log(altura, gap);
    // replace the new style... 
    gallery.querySelectorAll('.gallery__item').forEach((item)=>{
        
        item.style.gridRowEnd = "span " + Math.ceil((getHieght(item) + gap) / (altura + gap));
    });
};

// call the function onLoad, onResize
window.addEventListener('load', resizeAll);
window.addEventListener('resize', resizeAll);