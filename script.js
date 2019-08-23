
document.querySelector('#bell').style.display = 'none';

let seconds = document.querySelector('input');

let timer = () => {
    // seconds = 0;
    let inputSecond = seconds.value--;
    if (inputSecond < 10) {
        inputSecond = '0' + inputSecond;
    }
    if (inputSecond >= 0) {
        document.querySelector('h1').innerHTML = inputSecond;
    }

    if (inputSecond == 0) {
        document.querySelector('h1').innerHTML = 'COMPLETE';
        seconds.value = 0;
        document.querySelector('#bell').style.display = 'flex';
    }
}

let startButton = document.querySelector('Button');
startButton.addEventListener("click", function () {
    let startTimer = setInterval(timer, 1000);
})








// hardcode
// let startButton = document.querySelector('Button');
// startButton.addEventListener("click", function () {
//     let startTimer = setInterval(timerTwo, 1000);
// });


// let seconds = 10;
// let timer = () => {
//     seconds--;
//     if (seconds >= 0) {
//         inputValueSeconds.innerHTML = seconds;
//     }
//     if (seconds === 0) {
//         document.querySelector('h1').innerHTML = 'complete';
//         document.querySelector('#bell').style.display = 'flex';
//     }
// }


// let startButton = document.querySelector('Button');
// startButton.addEventListener("click", function () {
//     let startTimer = setInterval(timer, 1000);
// });
