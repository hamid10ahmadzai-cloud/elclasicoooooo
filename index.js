let Homescore = document.getElementById("homescore")
let Guestscore = document.getElementById("guestscore")
count_H = 0
function plus1_H() {
    count_H += 1
    Homescore.textContent = count_H
}
function plus3_H() {
    count_H += 3
    Homescore.textContent = count_H
}
count_G = 0
function plus1_G() {
    count_G += 1
    Guestscore.textContent = count_G
}
function plus3_G() {
    count_G += 3
    Guestscore.textContent = count_G
}
function NEW() {
    Guestscore.textContent = 0
    Homescore.textContent = 0
    count_H = 0
    count_G = 0
}