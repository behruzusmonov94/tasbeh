const mainCount = document.getElementById('main-count');
const btn = document.getElementById('btn');


if(localStorage.getItem('allCount') === null){
    localStorage.setItem('allCount', '0');
}
let allCount = parseInt(localStorage.getItem('allCount'));
let count = 0;


btn.addEventListener('click', () => {
    btn.style = 'font-size: 4em';
    btn.innerText = `${count+=1}`;   

    if(count == 33){
        count = 0;
    }

    localStorage.setItem('allCount', allCount+=1);
    mainCount.innerText = `Jami: ${localStorage.getItem('allCount')}`;
})
mainCount.innerText = `Jami: ${localStorage.getItem('allCount')}`;

const resetCount = document.getElementById('resetCount');

resetCount.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();
})
// btn.textContent = `${count}`;
// btn.style = 'font-size: 4em';
