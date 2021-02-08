const workoutDB = require('../db/dbOperations')('Workout');
const workoutText = require('../workouts/workoutText');
const workoutTags = require('../workouts/workoutTags');
const buildWorkout = require('../workouts/buildWorkout');
const { asyncPipe } = require('../utils/utils')
const createQuery = require('../db/dbQuerries');

exports.getWorkout = async (req, res, next) => {
     const {filter} = req.query;

     const workout = await asyncPipe(
          createQuery('Workout'),
          workoutDB('find'),
          buildWorkout(filter),
     )(filter);
     
     if (workout) {
          res.status(200).json({ status: 'success', msg: `Get Workout`, data: workoutText(workout) })
     } else {
          res.status(200).json({ status: 'error', msg: 'No matches found', data: 'Could not build Workout' })
     }
}

exports.postWorkout = async (req, res, next) => {
     req.body.tags = [...req.body.tags, ...workoutTags(req.body)];
}