const workoutText = require('../workouts/workoutText');
const workoutTags = require('../workouts/workoutTags');
const buildWorkout = require('../workouts/buildWorkout');

exports.getWorkout = (req, res, next) => {
     req.success = workouts => {
          const workout = buildWorkout(workouts, req.query.filter);
          return { data: workoutText(workout) };
     }
}

exports.postWorkout = async (req, res, next) => {
     req.body.tags = [...req.body.tags, ...workoutTags(req.body)];
}