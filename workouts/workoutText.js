const exercisesText = require('./exercisesText');

const timeString = timeInSec => {
     if(timeInSec >= 60) {
          const min = Math.floor(timeInSec/60);
          let sec = timeInSec % 60;
          sec = sec < 10 ? '0'+sec : sec;
          return `${min}${sec > 0 ? (':' + sec) : ''}min`
     } else {
          return `${timeInSec}s`
     }
}

const createAmrapText = workout => `Amrap ${timeString(workout.time[0])}\n`;

const createEmomText = workout => `Every ${timeString(workout.time[0])} for ${timeString(workout.time[0] * workout.sections[0])}\n`;

const createAltEmomText = workout => `Alternate every ${timeString(workout.time[0])} for ${timeString(workout.time[0] * workout.sections[0])} between\n`;

const createRftText = workout => `${workout.sections[0]} Rounds of\n`;

const createFtText = workout => `For time do\n`;

const createTabataText = workout => `Tabata ${workout.sections[0]}x${timeString(workout.time[0])}/${timeString(workout.rest[0])}\n`;

const singleSection = workout => {
     let string = `${workout.name}\n`;

     switch (workout.type) {
          case 'amrap':
               string += createAmrapText(workout);
               break;
          case 'emom':
               string += createEmomText(workout);
               break;
          case 'altemom':
               string += createAltEmomText(workout);
               break;
          case 'rft':
               string += createRftText(workout);
               break;
          case 'ft':
               string += createFtText(workout);
               break;
          case 'tabata':
               string += createTabataText(workout);
               break;
     }

     string += exercisesText(workout);

     return string.trim();
}

module.exports = (workout) => {
    return workout.sections.length > 1 ? null : singleSection(workout);
}