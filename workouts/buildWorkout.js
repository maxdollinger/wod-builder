const _ = require('lodash');
const { tagsByGroup } = require('../utils/configs');
const workoutTags = require('./workoutTags');

const createExercises = (filter, workouts) => workout => {
     const equipmentTags = tagsByGroup(filter)('equipment');

     workout.exercises = _.chain(workouts)
          .filter(el => el.type === workout.type)
          .flatMap(el => el.exercises)
          .shuffle()
          .uniqBy('name')
          .filter(el => _.isEmpty(_.intersection(el.tags, equipmentTags.nin)))
          .tap(exercises => { if (_.isEmpty(exercises)) throw new Error('no matching exercises') })
          .slice(0, _.size(_.sample(workouts).exercises))
          .value();
}

module.exports = (workouts, filter = []) => {
     if (_.isEmpty(workouts)) return null;

     return _.chain(workouts)
          .sample()
          .set('name', '')
          .tap(createExercises(filter, workouts))
          .tap(workout => workout.numberExercises = _.size(workout.exercises))
          .tap(workout => workout.tags = workoutTags(workout))
          .value();
}