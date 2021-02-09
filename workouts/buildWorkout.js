const _ = require('lodash');
const { tagsByGroup } = require('../utils/configs');
const workoutTags = require('./workoutTags');

const createExercises = (filter, workouts) => {
     const equipmentTags = tagsByGroup(filter)('equipment');

     return _
          .chain(workouts)
          .flatMap(el => el.exercises)
          .shuffle()
          .uniqBy('name')
          .filter(el => _.isEmpty(_.intersection(el.tags, equipmentTags.nin)))
          .slice(0, _.size(_.sample(workouts).exercises))
          .value()
}

module.exports = (workouts, filter = []) => {
     if(_.isEmpty(workouts)) return new Error('no workouts found');

     return _.chain(workouts)
          .sample()
          .set('exercises', createExercises(filter, workouts))
          .set('name', '')
          .tap(workout =>  workout.tags = workoutTags(workout))
          .thru(workout => _.isEmpty(workout.exercises) ? new Error() : workout)
          .value();
}