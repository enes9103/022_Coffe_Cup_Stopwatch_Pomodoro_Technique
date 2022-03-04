//! Selectors
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const choiseMin = document.getElementById("choise-min");
const choiseSec = document.getElementById("choise-sec");
const resetButton = document.getElementById("reset");
const stop = document.querySelector(".stop");
const start = document.querySelector(".start");

//! Functions and events
choiseMin.addEventListener("change", () => {
  minute.innerText = choiseMin.value < 10 ? "0" + choiseMin.value : choiseMin.value;
});
choiseSec.addEventListener("change", () => {
  second.innerText = choiseSec.value < 10 ? "0" + choiseSec.value : choiseSec.value;
});

//! Functions
let interval;
start.addEventListener("click", () => {
    if (minute.innerText !== "00" || second.innerText !== "00") startTimer();
  });
function startTimer() {
  let sec = +second.innerText
  let min = +minute.innerText
  interval = setInterval(() => {
    sec--
    if (sec === -1 && min > 0) {
      min--;
      sec = 59;
    }
    if (sec === -1 && min === 0) {
      clearInterval(interval);
      sec = 0
      // choiseMin.innerText = "00";
      // choiseSec.innerText = "00";
      window.alert("Time is over. Break Time!");
    }
    minute.innerText = min < 10 ? "0" + String(min) : min
    second.innerText = sec < 10 ? + "0" + String(sec) : sec
  }, 1000);
}

// stop timer
stop.addEventListener("click", () => stopTimer());
function stopTimer() {
clearInterval(interval);
}

// reset timer
resetButton.addEventListener("click", () => resetTimer());
function resetTimer() {
  clearInterval(interval);
  minute.innerText = "00";
  second.innerText = "00";
  choiseMin.value = "00";
  choiseSec.value = "00";
}







// //! Functions

// // start timer
// start.addEventListener("click", startTimer);
// function startTimer() {
//     let min = minute.textContent;
//     let sec = second.textContent;
//         dur = false;
//         const interval = setInterval(() => {  
//         sec--;
//         sec = sec < 10 ? "0" + sec : sec;
//         if (sec == "0-1") {                                      //&& min != "00"
//             min--;
//             sec = 59;
//         }
//         if ((min == 00 && sec == 00) ) {
//             clearInterval(interval);
//             window.alert("Time is over. Break Time!");
//             choiseMin.value = "00";
//             choiseSec.value = "00";
//         }
//         if (dur) {
//             clearInterval(interval);
//             return;
//         }
//         //mirror to the counter
//         minute.textContent = min;
//         second.textContent = sec;
//     }, 1000);        
// }

// // stop timer
// stop.addEventListener("click", stopTimer);
// function stopTimer(){
//     dur = true;
// }

// // reset timer
// resetButton.addEventListener("click", resetTimer);
// function resetTimer() {
//     dur = true;
//     minute.textContent = "00";
//     second.textContent = "00";
//     choiseMin.value = "00";
//     choiseSec.value = "00";
// };

