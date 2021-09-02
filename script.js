"use strict";

window.addEventListener("DOMContentLoaded", start);

const queueData = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 10, 11, 12, 13, 14, 15, 16,
];

function start() {
  loop();
}

// every second change array and update UI
function loop() {
  changeQueueData();
  changeColumns();
  setTimeout(loop, 1000);
}

// get new array element with random value and remove one from the beginning
function changeQueueData() {
  queueData.push(getNumberOfCustomers());
  queueData.shift();
}

// display columns
function changeColumns() {
  for (let i = 0; i < queueData.length; i++) {
    // set height based on value of the array element
    document.querySelector(
      `.column:nth-child(${i + 1})`
    ).style.height = `${queueData[i]}vh`;

    // change column color and border
    if (queueData[i] < 10) {
      document.querySelector(
        `.column:nth-child(${i + 1})`
      ).style.backgroundColor = "#39bf5a";
      document.querySelector(`.column:nth-child(${i + 1})`).style.borderColor =
        "#39bf5a";
    } else if (queueData[i] >= 10 && queueData[i] < 20) {
      document.querySelector(
        `.column:nth-child(${i + 1})`
      ).style.backgroundColor = "#eff23f";
      document.querySelector(`.column:nth-child(${i + 1})`).style.borderColor =
        "#eff23f";
    } else {
      document.querySelector(
        `.column:nth-child(${i + 1})`
      ).style.backgroundColor = "#cc1212";
      document.querySelector(`.column:nth-child(${i + 1})`).style.borderColor =
        "#cc1212";
    }
  }
}

// generate random number from 0 to 32
function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}
