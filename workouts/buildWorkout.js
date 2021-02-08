const { getRandomEntrie, shuffleArr } = require('../utils/arrUtils');
const { tagsNotInFilter } = require('../utils/configs');
const { pipe, pipeFlatMap, pipeFilter } = require('../utils/utils');
const workoutTags = require('./workoutTags');

const filteredExercisesArr = (filter, workouts) => {
     filter = filter || [];

     const notIn = tagsNotInFilter(filter)('equipment');

     return pipe(
          pipeFlatMap(el => el.exercises),
          pipeFilter(el => !el.tags.some(tag => notIn.includes(tag))),
          shuffleArr,
     )(workouts)
}

const uniqueExercises = (number, exercises, arr = []) => {
     if (arr.length >= number || exercises.length === 0) return arr;

     if (!arr.some(el => el.name === exercises[0].name)) arr.push(exercises[0]);

     return uniqueExercises(number, exercises.slice(1), arr);
}

module.exports = filter => workouts => {

     const workout = getRandomEntrie(workouts);
     const exercises = filteredExercisesArr(filter, workouts);

     if (!workout || exercises.length === 0) return null;

     return {
          ...workout,
          name: '',
          exercises: uniqueExercises(workout.exercises.length, exercises),
          tags: workoutTags(workout),
     }
}