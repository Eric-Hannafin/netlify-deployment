// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countAndDash = count + " " + "- "
    let saveEl = document.getElementById("save-el")
    saveEl.textContent += countAndDash
    count = 0;
    countEl.textContent = 0
}