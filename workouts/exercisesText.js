const createExerciseString = exercise => {
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

const createExercisesText = ({exercises}, index = 0) => {
     let string = '';

     exercises[index].forEach( exc => string += `${createExerciseString(exc)}\n`)

     return string.trim();
}

module.exports = createExercisesText;