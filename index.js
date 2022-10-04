const jobTitles = require('./jobTitles.js');

function getAwesomeJobTitle() {
  let myNewPosition = '';

  Object.keys(jobTitles).forEach((i) => {
    myNewPosition += ` ${jobTitles[i][Math.floor(Math.random() * i.length)]} `;
  });
  return myNewPosition;
}

module.exports = getAwesomeJobTitle;
