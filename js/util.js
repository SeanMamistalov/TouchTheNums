var timerInterval
var gTimer = 0
function elapsedTime(){
    startTime = Date.now();
    timerInterval = setInterval(() => {
      var elapsedTime = (Date.now() - startTime) / 1000;
      gTimer = elapsedTime.toFixed(3)
      renderTime()
    }, 1)    
}
function createNums(gLevel) {
    var nums = []
    for (var i = 1; i <= gLevel; i++) {
      nums.push(i)
    }
    return nums
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }