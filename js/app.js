//Event listener for a click

function imgtag(details){
    details[`target`][`style`][`width`] =`700px`;
}

let img = document.querySelector(`#img`);
img.addEventListener(`click`,imgtag);

//Event listener for double click
function suntag(details){
    details[`target`][`style`][`color`] =`purple`;
}

let sun = document.querySelector(`#sun`);
sun.addEventListener(`dblclick`, suntag);

//Event listener for mousehover
function ptag(dtails){
details[`target`][`style`][`fontsize`] = `15rem`;

}

plant = document.querySelector(`.plant`);
plant.addEventListener(`mouseover`, ptag);

