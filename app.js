var firstPic = document.getElementById('first');
var secondPic = document.getElementById('second');
var thirdPic = document.getElementById('third');

firstPic.addEventListener('click', handleClickOnFirst);
secondPic.addEventListener('click', handleClickOnSecond);
thirdPic.addEventListener('click', handleClickOnThird);

var firstPicClicks = 0;
var secondPicClicks = 0;
var thirdPicClicks = 0;

function handleClickOnFirst() {
  firstPicClicks++;
  firstPic.textContent = 'First picture was clicked ' + firstPicClicks + ' times.';
  //if (firstPicClicks % 3 === 0) {
  //  first.textContent = 'I am divisible by 3.';
  //}
}

function handleClickOnSecond() {
  secondPicClicks += 1;
  secondPic.textContent = 'Second picture was clicked ' + secondPicClicks + ' times.';
}

function handleClickOnThird() {
  thirdPicClicks += 1;
  thirdPic.textContent = 'Third was clicked ' + thirdPicClicks + ' times.';
}