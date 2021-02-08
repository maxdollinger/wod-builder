const express = require('express');
const responseFactory = require('../controller/responseFactory');
const workout = require('../controller/workoutController');
const exercises = require('../controller/exerciseController');
const config = require('../controller/configController');

const router = express.Router();

//workouts
router.get('/workout', responseFactory(workout.getWorkout));
// router.post('/workout', responseFactory(workout.postWorkout));

//exercises
// router.get('/exercises', responseFactory(exercises.getExercises));
// router.post('/exercises', responseFactory());
// router.put('/exercises', responseFactory());

//configs
router.get('/configs', config.getConfigs);

module.exports = router;