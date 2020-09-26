const mainCount = document.getElementById('main-count');
const btn = document.getElementById('btn');


if(localStorage.getItem('allCount') === null){
    localStorage.setItem('allCount', '0');
}
let allCount = parseInt(localStorage.getItem('allCount'));
let count = 0;


btn.addEventListener('click', () => {
    btn.style = 'font-size: 4em';
    if(count < 33){
    btn.innerHTML = `<span style="font-size: 22px">Subhanalloh</span><br> ${count+=1}`;   
    }
    if(count == 33){
        count = 0;
        btn.innerHTML = `<span style="font-size: 22px">Alhamdulillah</span><br> ${count+=1}`;   

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
