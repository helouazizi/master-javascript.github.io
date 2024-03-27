
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
let colorss = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


changecolor.addEventListener('click',function(){
    
    let dias = '#';
    for(let i = 0; i < 6; i++){
        dias += colorss[getrandomnumber()]
    }
    project2content.style.background = dias; 
    background.textContent = dias ;  
    
});

// randomly chose color betwen 0-6
function getrandomnumber(){
    return Math.floor(Math.random() * colorss.length);
}




