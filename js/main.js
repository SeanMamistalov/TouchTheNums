'use strict'
var gNums = []
var gLevel = 16
var gNextNum = 1
// var elNextNum = document.querySelector('.nextNumber')
function init() {
  renderBoard()
}
function renderBoard() {
  var strHTML = '';
  var nums = createNums(gLevel)
  var length = Math.sqrt(gLevel)
  console.log('nums', nums)
  for (var i = 0; i < length; i++) {
      strHTML += '<tr>'
      for (var j = 0; j < length; j++) {
          // const num = gNums.pop()
          var randomNumIdx = getRandomInt(gNextNum, nums.length - 1)
          var randNum = nums.splice(randomNumIdx - 1, 1)[0]
          // console.log(randNum)
         strHTML += `<td onclick="cellClicked(this)">${randNum}</td>`
      }
      strHTML += '</tr>'
  }
  document.querySelector('.table').innerHTML = strHTML
  // elNextNum.innerHTML = `<span>${gNextNum}</span>`
}
function renderTime(){
  var elTimer = document.querySelector('.timer')
  elTimer.innerHTML = `<span>${gTimer}</span>`
}
function gameLevels(elBtn){
  // const elNextNum = document.querySelector('.nextNumber')
  const elBtn16 = elBtn.getAttribute('data-16')
  const elBtn25 = elBtn.getAttribute('data-25')
  const elBtn36 = elBtn.getAttribute('data-36')
  //debugger;
  gNextNum = 1
  if(+elBtn16 === 16){
    gLevel = elBtn16
    // console.log('elNextNum',elNextNum)
  }
  else if (+elBtn25 === 25 ) {
    gLevel = +elBtn25
  }
  else if (+elBtn36 === 36 ) {
    gLevel = +elBtn36
  }
//  console.log(elapsedTime())
// var time = elapsedTime()
  renderBoard()
  clearInterval(timerInterval)
  gNextNum = 1
  // elNextNum.innerHTML = `<span>${gNextNum}</span>`
}
function cellClicked(num) {
  if(gNextNum.toString() === num.innerText){
    num.style.backgroundColor = 'orange'
    gNextNum++
    if(+num.innerText === 1){
      elapsedTime()
    }
    if(+(num.innerText) === gLevel){
      clearInterval(timerInterval)
    }
  }
  var elNextNum = document.querySelector('.nextNumber')
  elNextNum.innerHTML = `<span>${gNextNum}</span>`
}
