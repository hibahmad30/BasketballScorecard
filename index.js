let homeCount = 0 
let guestCount = 0 
let homeScoreEl = document.getElementById('home-score') 
let guestScoreEl = document.getElementById('guest-score') 

function addOneHome() {
    homeCount += 1
    homeScoreEl.innerHTML = homeCount
}

function addTwoHome() {
    homeCount += 2
    homeScoreEl.innerHTML = homeCount
}

function addThreeHome() {
    homeCount += 3
    homeScoreEl.innerHTML = homeCount
}

function addOneGuest() {
    guestCount += 1
    guestScoreEl.innerHTML = guestCount
}

function addTwoGuest() {
    guestCount += 2
    guestScoreEl.innerHTML = guestCount
}

function addThreeGuest() {
    guestCount += 3
    guestScoreEl.innerHTML = guestCount
}