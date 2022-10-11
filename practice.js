let homeBtnOne = document.getElementById("home-score-1")
let homeBtnTwo = document.getElementById("home-score-2")
let homeBtnThree = document.getElementById("home-score-3")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0

// Home Score Function
function addOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}
function addTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}
function addThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}

let guestBtnOne = document.getElementById("guest-score-1")
let guestBtnTwo = document.getElementById("guest-score-2")
let guestBtnThree = document.getElementById("guest-score-3")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0


// Guest Score Function
function increaseOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}
function increaseTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}
function increaseThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

function reset() {
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    homeScore = 0;
    guestScore = 0;
}