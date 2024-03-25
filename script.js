
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

console.log(counter,decrease,increase,reset);

let i = 0;
// lest create increament function 
increase.addEventListener('click',function(){
    counter.innerHTML =  i += 1;
    
});

// lest creste descrement function  

decrease.addEventListener('click',function(){
    counter.innerHTML = i -= 1 ;
});

// lets creste reset function 

reset.addEventListener('click',function(){
    counter.innerHTML = 0;
})

