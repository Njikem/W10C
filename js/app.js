//Add an event listener for a click

function imgtag(details){
    details[`target`][`style`][`width`] =`700px`;
}

let img = document.querySelector(`#img`);
img.addEventListener(`click`,imgtag);


function suntag(details){
    details[`target`][`style`][`color`] =`purple`;
}

let sun = document.querySelector(`#sun`);
sun.addEventListener(`dbclick`, suntag);


function ptag(dtails){
details[`target`][`style`][`fontsize`] = `15rem`;

}

plant = document.querySelectorAll(`.plant`);
plant.addEventListener(`mouseover`, ptag);

