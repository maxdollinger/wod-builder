const workoutText = require('../workouts/workoutText');
const workoutTags = require('../workouts/workoutTags');
const buildWorkout = require('../workouts/buildWorkout');

exports.getWorkout = (req, res, next) => {
     req.success = workouts => {
          try {
               const workout = buildWorkout(workouts, req.query.filter);
               return { data: workoutText(workout) };
          } catch(err) {
               return {status: 'error', msg: 'no matching workout or exercise' , data: {}}
          }
     }
}

exports.postWorkout = async (req, res, next) => {
     req.body.tags = [...req.body.tags, ...workoutTags(req.body)];
}