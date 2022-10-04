const jobTitles = require('./jobTitles.js');

function getAwesomeJobTitle() {
  let myNewPosition = '';

  Object.keys(jobTitles).forEach((i) => {
    let index = parseInt(Math.random()*(i.length-1))
    console.log(index)
    myNewPosition += ` ${jobTitles[i][index]} `;
  });
  return myNewPosition.trim();
}

console.log(getAwesomeJobTitle())

module.exports = getAwesomeJobTitle;
