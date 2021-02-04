const workoutText = require('../workouts/workoutText');
const workoutTags = require('../workouts/workoutTags');

const workout = require('../workout.json');

exports.getWorkout = async (req, res, next) => {
     const format = req.query.format;
     
     if(format === 'obj') {
          req.body = workout;
     } else {
          req.body =  workoutText(workout);
     }

     res.json(req.body);
}

exports.postWorkout = async (req, res, next) => {
    req.body.tags = workoutTags(req.body);
    req.body.numberExercises = req.body.exercises.flat().length;
}