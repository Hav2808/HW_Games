const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__speed");

let clickCount = 0;
let lastClickTime = null;

cookie.onclick = function() {
    clickCount++;
    
    let clicks = clickerCounter.textContent++;
    if (clicks % 2 == 0) {
        cookie.width = 200;
    } else {
        cookie.width = 250;
    }

    const currentTime = new Date();
    //console.log(currentTime);
    if (lastClickTime !== null) {
        const timePassed = (currentTime - lastClickTime)/ 1000; // в секундах
        //console.log(timePassed);
        const clickRate = 1 / timePassed; // скорость (количество кликов в секунду)
        clickerSpeed.textContent = `в/сек ${clickRate.toFixed(2)}`;       
    }
    
    lastClickTime = currentTime;
    //console.log(lastClickTime);
}