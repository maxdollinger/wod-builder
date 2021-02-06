const findWorkout = require('../db/dbFactory')('Workout')('find');
const workoutText = require('../workouts/workoutText');
const workoutTags = require('../workouts/workoutTags');
const { randomArrEntrie } = require('../utils/arrUtils');
const configs = require('../utils/configs');

//Needs refactoring
exports.getRandomWorkout = async (req, res, next) => {

     let workouts = [];
     while(workouts.length === 0 ) {
          const query = {
               type: randomArrEntrie(configs('workoutStyle', 'value')),
               tags: randomArrEntrie(['short', 'medium', 'long']),
          }
          workouts = await findWorkout(query);   
     }

     const newWorkout = {...randomArrEntrie(workouts)}

     const newExercises = []
     newWorkout.exercises.forEach( el => {
          let exercise = randomArrEntrie(randomArrEntrie(workouts).exercises);
          while(newExercises.filter(el => el.name === exercise.name).length > 0){
               exercise = randomArrEntrie(randomArrEntrie(workouts).exercises);
          }
          exercise.sectionsIndex = el.sectionsIndex;
          newExercises.push(exercise);
     });

     newWorkout.exercises = newExercises;
     newWorkout.tags = [...workoutTags(newWorkout)]
     newWorkout.name = '';

     res.json({
          status: 'succes',
          data: workoutText(newWorkout)
     })
}

exports.postWorkout = async (req, res, next) => {
    req.body.tags = [...req.body.tags, ...workoutTags(req.body)];
    req.body.numberExercises = req.body.exercises.length;
}