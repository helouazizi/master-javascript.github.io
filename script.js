
// ================ this part in coding just for the haeder ==================//

let shownBtn = document.getElementById('shown-btn');
let links = document.querySelector('.links');
let btn = document.querySelector('.btn');
let hidenBtn = document.createElement('button');
    hidenBtn.textContent = 'close';

shownBtn.addEventListener('click',function(){
    links.classList.toggle('show');
    
    
}) ;


// ======================= this part for counter project ===============//


let counter = document.querySelector('.count');
let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let increase = document.querySelector('.increase');

console.log(counter,decrease,reset,increase)

let count = 0;



// this function for increament
increase.addEventListener('click',function(){
    counter.textContent = count += 1 ; 
    
    
});
    

// this function for decreament
decrease.addEventListener('click',function(){
    counter.textContent = count -= 1 ;
    
});

// this function for reset

reset.addEventListener('click',function(){
    counter.textContent = 0 ;
    count = 0;// this condition to reset the conter after reseting the program
     
});
// **** off course there are many ways to do that but this the basic way ****//

    



// ====================== this part for color-flliper project ==================//

let project2content = document.querySelector('.project2-content');
let background = document.querySelector('.background');
let changecolor = document.querySelector('.change-color');

let colors = ['red','white','orange','green','gray'];


changecolor.addEventListener('click',function(){
    // randomly chose color betwen 0-3
    const randomcolor = getrandomnumber();
    project2content.style.background = colors[randomcolor]; // code change the body color by accece the array colors 
    background.textContent = colors[randomcolor]; // code change the color value in parallele with event 
    console.log(randomcolor);
});

function getrandomnumber(){
    return Math.floor(Math.random() * colors.length);
}




