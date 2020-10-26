var x=0;
const div=document.querySelectorAll('.div');
const win=document.querySelector('#win');
div.forEach(e => {
    e.addEventListener('click',turn);
});   

function turn(ev){
    ev.target.style.background='red';
    x=x+1;
    if(x!==5){
    var num= Math.floor(Math.random() * (8 - 0 + 0)) + 0;
    


    while(div[num].style.background==="red" ||div[num].style.background==="green"){
        num= Math.floor(Math.random() * (8 - 0 + 0)) + 0;
   }        div[num].style.background='green';
  
}  ev.target.removeEventListener('click',turn);
if(x!==5)
div[num].removeEventListener('click',turn);
if((div[0].style.background==='red' && div[1].style.background==='red' && div[2].style.background==='red') || (div[3].style.background==='red' && div[4].style.background==='red' && div[5].style.background==='red')
  || (div[6].style.background==='red' && div[7].style.background==='red' && div[8].style.background==='red') || (div[0].style.background==='red' && div[3].style.background==='red' && div[6].style.background==='red')
  || (div[1].style.background==='red' && div[4].style.background==='red' && div[7].style.background==='red') || (div[2].style.background==='red' && div[5].style.background==='red' && div[8].style.background==='red')
  || (div[0].style.background==='red' && div[4].style.background==='red' && div[8].style.background==='red') || (div[2].style.background==='red' && div[4].style.background==='red' && div[6].style.background==='red')){
    win.innerHTML='You Won';
 win.classList.toggle('win');}
 else if((div[0].style.background==='green' && div[1].style.background==='green' && div[2].style.background==='green') || (div[3].style.background==='green' && div[4].style.background==='green' && div[5].style.background==='green')
 || (div[6].style.background==='green' && div[7].style.background==='green' && div[8].style.background==='green') || (div[0].style.background==='green' && div[3].style.background==='green' && div[6].style.background==='green')
 || (div[1].style.background==='green' && div[4].style.background==='green' && div[7].style.background==='green') || (div[2].style.background==='green' && div[5].style.background==='green' && div[8].style.background==='green')
 || (div[0].style.background==='green' && div[4].style.background==='green' && div[8].style.background==='green') || (div[2].style.background==='green' && div[4].style.background==='green' && div[6].style.background==='green')){
    win.innerHTML='You Lost';
    win.classList.toggle('win');
 }
 else if(x===5){
    win.innerHTML='Draw';
    win.classList.toggle('win');
 }
}