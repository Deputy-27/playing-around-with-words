const color = document.querySelector('.color')
const text = document.querySelector('.text')
const span = document.querySelectorAll('span')
const active = document.querySelector('.active')


const randColor = () =>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const randNum = function () {
    return Math.floor(Math.random() * 100);
}

color.addEventListener('click', () => {
    for(let s of span) {
        s.style.backgroundColor = randColor()
    }
})

text.addEventListener('click', function () {
    for (let s of span) {
        s.innerText = randNum();
    }
})

span.forEach(s => {
    s.addEventListener('click', () => {
        s.innerText = '';
        s.classList.toggle('active')
    })
})



