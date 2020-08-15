const mainCount = document.getElementById('main-count');
const btn = document.getElementById('btn');

if (localStorage.getItem('count') === null && localStorage.getItem('allCount') === null) {
    localStorage.setItem('count', '1');
    localStorage.setItem('allCount', '1');
}

let count = Number(localStorage.getItem('count'));
let allCount = Number(localStorage.getItem('allCount'));
const newLocal = '34';
btn.addEventListener('click', () => {
    btn.style = 'font-size: 4em';
    localStorage.setItem('count', count);
    btn.textContent = `${count++}`;
    

    mainCount.textContent = `${allCount++}`
    // localStorage.setItem('allCount', count);

    if (allCount == 34) {
        console.log('check')
        allCount = 1;
    }
})

const resetCount = document.getElementById('resetCount');

resetCount.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();
})
// btn.textContent = `${count}`;
// btn.style = 'font-size: 4em';
