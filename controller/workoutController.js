const workoutText = require('../workouts/workoutTextFactory');

exports.getWorkout = async (req, res, next) => {
     res.send('Workout');
}

exports.postWorkout = async (req, res, next) => {
     res.status(200).json({status: 'success', msg: 'saved workout'})
}