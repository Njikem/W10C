
// Selectors
let ptags = document.getElementsByClassName('p-one');
let button = document.getElementById('btn');
let header = document.getElementById('h-tag');



// Variables / States
let isBtnClicked = false;

// Listeners
button.addEventListener('click', onclick);
header.addEventListener('mouseover', mouseHover);
document.body.addEventListener('keydown', spacekey);

// Looping and adding listeners to p tags
for(let i =0; i < ptags.length; i++){
  ptags[i].addEventListener('dblclick', ptagClicks)
}

//Functions

function onclick(event){

    if (isBtnClicked === false) {
      isBtnClicked = true;
      let button = event.target
      button.style.color = 'red'
      button.style.backgroundColor ='green'
      button.style.fontSize = '15px'
      button.style.border = 'none'
      button.insertAdjacentHTML('beforebegin', '<p id="submit">Submision complete</p>')
   
    } else {
      isBtnClicked = false;
      button.style.color = 'black'
      button.style.backgroundColor ='orange'
      button.style.fontSize = '15px'
      button.style.border = 'none'
      let submitText = document.getElementById('submit');
      submitText.remove();
      
      
    }

    console.log(isBtnClicked);

    
    // console.log(button);

}

function mouseHover(event){
 
    let header = event.target
    header.style.fontFamily = 'Times New Roman'
    header.style.fontWeight = '900'
    header.style.color = 'green'

    console.log(header);

}



function ptagClicks(event){
 let  dbclick = event.target
 console.log(ptags, 'Running function');
 for(let i=0; i <ptags.length; i++){
  console.log(i);
  let p = ptags[i];
  
  ptags[i].style.backgroundColor = 'red'
 }
  

}



function spacekey(event){
  console.log("Does this work")
 if(event.key === 'Space'){
  return keypressed
 }
 console.log('Space key is in use')

}



setTimeout(function(){
  document.body.style.backgroundColor = 'lightgreen'
}, 15000);


set

