const express = require('express');
const {res} = require('../controller/controllerFactory');
const workout = require('../controller/workoutController');
const exercises = require('../controller/exerciseController');
const config = require('../controller/configController');

const router = express.Router();

//workouts
router.get('/workout', res(workout.getWorkout));
// router.post('/workout', res(workout.postWorkout));

//exercises
// router.get('/exercises', res(exercises.getExercises));
// router.post('/exercises', res());
// router.put('/exercises', res());

//configs
router.get('/configs', config.getConfigs);

module.exports = router;