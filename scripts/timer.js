/*
//////////////////////////////
// COUNTDOWN TIMER
// 100% Google-fu
// source: https://stackoverflow.com/questions/52547625/1-minutes-30-second-countdown-timer-javascript
//////////////////////////////
*/

function countdown(minutes, seconds) {
    var mins = minutes

    function tick() {
        //var seconds = 60;
        var divTimer = document.getElementById("divTimer");
        var current_minutes = mins - 1
        seconds--;
        divTimer.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            timeoutHandle = setTimeout(tick, 1000);
        } else {

            if (mins > 1) {

                // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                setTimeout(function () {
                    countdown(mins - 1);
                }, 1000);

            } else if ((document.getElementById("divTimer").innerHTML === "0:00")) {
                fShowThisResult();
                fNewGame();
            }
        }
    }

    tick();
}
