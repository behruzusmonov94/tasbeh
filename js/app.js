const mainCount = document.getElementById('main-count');
const btn = document.getElementById('btn');


const SAA = document.getElementById('SAA');
const istigfar = document.getElementById('istigfar');
const salavat = document.getElementById('salavat');



const resetCount = document.getElementById('resetCount');

resetCount.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();
})
// btn.textContent = `${count}`;
// btn.style = 'font-size: 4em';


SAA.addEventListener('click', () => {
    btn.style.fontSize ='1.75em';
    btn.innerText = `Subhanallah`;

    
if(localStorage.getItem('allCount') === null){
    localStorage.setItem('allCount', '0');
}
let allCount = parseInt(localStorage.getItem('allCount'));
let count = 0;


btn.addEventListener('click', () => {
    btn.style = 'font-size: 4em';
    if(count < 34){
    btn.innerHTML = `${count+=1}`;   
    }
    if(count == 34){
        count = 0;
        btn.innerHTML = `${count+=1}`;   

    }

    localStorage.setItem('allCount', allCount+=1);
    mainCount.innerText = `Jami: ${localStorage.getItem('allCount')}`;
})
mainCount.innerText = `Jami: ${localStorage.getItem('allCount')}`;
    // SAA.classList.add('active');
});




istigfar.addEventListener('click', () => {
    btn.style.fontSize ='1.80em';
    btn.innerText = `Astaghfirullah`;


});

salavat.addEventListener('click', () =>{
    btn.style.fontSize ='1.70em';
    btn.innerText = `Salovoti sharif`;
});