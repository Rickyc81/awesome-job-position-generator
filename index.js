const jobTitles = require('./jobTitles.js');

function getAwesomeJobTitle() {
  let myNewPosition = '';

  Object.keys(jobTitles).forEach((i) => {
    let index = parseInt(Math.random()*(i.length-1))
    myNewPosition += ` ${jobTitles[i][index]} `;
  });
  return myNewPosition.trim();
}

module.exports = getAwesomeJobTitle;
