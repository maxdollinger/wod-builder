const workoutText = require('../workouts/workoutText');
const workoutTags = require('../workouts/workoutTags');
const buildWorkout = require('../workouts/buildWorkout');

exports.getWorkout = (req, res, next) => {
     req.success = workouts => {
          const workout = buildWorkout(req.query.filter)(workouts);

          if (workout) {
               return {data: workoutText(workout) }
          } else {
               return {status: 'error', msg: 'Could not build workout', data: {} }
          }
     }
}

exports.postWorkout = async (req, res, next) => {
     req.body.tags = [...req.body.tags, ...workoutTags(req.body)];
}