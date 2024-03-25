
// this part in coding just for the haeder 

let shownBtn = document.getElementById('shown-btn');
let links = document.querySelector('.links');
let btn = document.querySelector('.btn');
let hidenBtn = document.createElement('button');
    hidenBtn.textContent = 'close';

shownBtn.addEventListener('click',function(){
    links.classList.toggle('show');
    /*this.onclick = function(){
        links.classList.add('hide')
    }*/
    
}) ;


// ======================= this part for counter project ===============//


let counter = document.getElementById('count');
let decrease = document.getElementById('decrease');
let reset = document.getElementById('reset');
let increase = document.getElementById('increase');

let count = 0;

// this function for increament
function increasem(){
    counter.textContent = count += 1 ;
    
    
};

// this function for decreament
function decreasem(){
    counter.textContent = count -= 1 ;
    
    
};

// this function for reset 
function resetm(){
    counter.textContent = 0 ;
    count = 0; // this condition to reset the conter after reseting the program
   
};

// ** off course there are many ways to do that but this the basic way ****//




