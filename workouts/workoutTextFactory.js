exports.createExerciseString = exercise => {
     let string = '';
     [{ prop: 'reps', unit: '' },
     { prop: 'time', unit: 's' },
     { prop: 'distance', unit: 'm' },
     { prop: 'cal', unit: 'cal' }].forEach(el => {
          if (exercise[el.prop]?.length > 0) {
               string += exercise[el.prop][0];
               exercise[el.prop][1] && (string += '/' + exercise[el.prop][1]);
               string += el.unit + ' ';
          }
     });
     string += exercise.name;
     [{ prop: 'weight', unit: 'Kg' },
     { prop: 'height', unit: 'cm' }].forEach(el => {
          if (exercise[el.prop]?.length > 0) {
               string += ' @ ' + exercise[el.prop][0];
               exercise[el.prop][1] && (string += '/' + exercise[el.prop][1]);
               string += el.unit;
          }
     });

     return string;
}

exports.timeString = timeInSec => {
     if(timeInSec >= 60) {
          const min = Math.floor(timeInSec/60);
          let sec = timeInSec % 60;
          sec = sec < 10 ? '0'+sec : sec;
          return `${min}${sec > 0 ? (':' + sec) : ''}min`
     } else {
          return `${timeInSec}s`
     }
}

exports.createExercisesString = exercises => {
     let string = '';
     exercises.map( exc => string += `${this.createExerciseString(exc)}\n`);

     return string.trim();
}


exports.createAmrapText = workout => {
     let string = workout.name + "\n";
     string += `Amrap ${this.timeString(workout.time[0])}\n`;
     string += this.createExercisesString(workout.exercises[0]);
     return string.trim();
}

exports.createEmomText = workout => {
     let string = workout.name + "\n";
     string += `Every ${this.timeString(workout.time[0])} for ${this.timeString(workout.time[0] * workout.sections[0])}\n`;
     string += this.createExercisesString(workout.exercises[0]);
     return string.trim();
}

exports.createAltEmomText = workout => {
     let string = workout.name + "\n";
     string += `Alternate every ${this.timeString(workout.time[0])} for ${this.timeString(workout.time[0] * workout.sections[0])} between\n`;
     string += this.createExercisesString(workout.exercises[0]);
     return string.trim();
}

exports.createRftText = workout => {
     let string = workout.name + "\n";
     string += `${workout.sections[0]} Rounds of\n`;
     string += this.createExercisesString(workout.exercises[0]);
     return string.trim();
}

exports.createFtText = workout => {
     let string = workout.name + "\n";
     string += `For time do\n`;
     string += this.createExercisesString(workout.exercises[0]);
     return string.trim();
}

exports.createTabataText = workout => {
     let string = workout.name + "\n";
     string += `Tabata ${workout.sections[0]}x${this.timeString(workout.time[0])}/${this.timeString(workout.rest[0])}\n`;
     string += this.createExercisesString(workout.exercises[0]);
     return string.trim();
}

exports.createWorkoutText = workout => {
     switch (workout.type) {
          case 'amrap':
               return this.createAmrapText(workout);
          case 'emom':
               return this.createEmomText(workout);
          case 'altemom':
               return this.createAltEmomText(workout);
          case 'rft':
               return this.createRftText(workout);
          case 'ft':
               return this.createFtText(workout);
          case 'tabata':
               return this.createTabataText(workout);
          default:
               return null;
     }
}