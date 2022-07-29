const start = document.querySelector('.start-btn')
const stop = document.querySelector('.stop-btn')
const reset = document.querySelector('.reset-btn')
let count = document.querySelector('.count')
let previous = document.querySelector('.previous')
let newEntry = document.querySelector('.new__entry')
let initialValue = 0;


start.addEventListener('click', () => {
    initialValue += 1
    let newCount = initialValue 
    count.textContent = initialValue
    newEntry.textContent = newCount
})

stop.addEventListener('click', () => {
    let newCount = initialValue + ' - '
    previous.textContent +=  newCount
})
reset.addEventListener('click', () => {
    initialValue = 0;
    count.textContent = initialValue
    previous.textContent = ''
    newEntry.textContent = ''
})

