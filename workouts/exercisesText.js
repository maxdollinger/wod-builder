const _ = require('lodash');

const createExerciseString = exercise => {
     let string = '';

     const propsBeforName = [
          { prop: 'reps', unit: '' },
          { prop: 'time', unit: 's' },
          { prop: 'distance', unit: 'm' },
          { prop: 'cal', unit: 'cal' },
          { prop: 'max', unit: '' }
     ];

     propsBeforName.forEach(el => {
          if (_.isEmpty(exercise[el.prop])) return '';

          string += exercise[el.prop][0];
          exercise[el.prop][1] && (string += '/' + exercise[el.prop][1]);
          string += el.unit + ' ';
     });

     string += exercise.name;

     const propsAfterName = [
          { prop: 'weight', unit: 'Kg' },
          { prop: 'height', unit: 'cm' }
     ];

     propsAfterName.forEach(el => {
          if (_.isEmpty(exercise[el.prop])) return '';

          string += ' @ ' + exercise[el.prop][0];
          exercise[el.prop][1] && (string += '/' + exercise[el.prop][1]);
          string += el.unit;
     });

     return string;
}

const createExercisesText = ({ exercises }) => {
     let string = '';

     exercises.forEach(exc => string += `${createExerciseString(exc)}\n`)
     return string.trim();
}

module.exports = createExercisesText;