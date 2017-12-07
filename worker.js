var clock = new Clock();

function processClock() {
    clock.calculate();
    postMessage(clock.getTime());
}

function timer() {
    processClock();
    console.log("Processing");
    setTimeout("timer()", 1000);
}

timer();