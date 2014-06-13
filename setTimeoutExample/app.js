// setTimeout
//New Years Countdown. On repeat until a gate is turned off

function countdown(initialCount) {
  var count = initialCount || 10;
  window.gate = 1;
  var recur = function() {
    (count === 0) ? console.log("Happy New Year!") : console.log(count);
    if(gate) {
      count -= 1;
      count = (count === -1) ? initialCount: count;
      setTimeout(recur, 1000);
    }
  }
  recur();
};

countdown(5);
