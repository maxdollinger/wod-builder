const express = require('express');
const workout = require('../controller/workoutController');

const router = express.Router();

//workouts
router.get('/workout', workout.getWorkout);
router.post('/workout', workout.postWorkout);

module.exports = router;