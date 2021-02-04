const workoutTags = require('./workoutTags');
const workout = {
     name: '',
     type: '',
     tags: [],
     time: [1200],
     section: [],
     scheme: [],
     rest: [],
     exercises: [
          [{
               name: 'Pull-up',
               reps: [20],
               tags: ['arms', 'lvl2', 'gymnastic']
          },
          {
               name: 'Thruster',
               reps: [10],
               weight: [42.5, 30],
               tags: ['arms', 'lvl2', 'weightlifting']
          },
          {
               name: 'Box-jump',
               reps: [15],
               height: [60,50],
               tags: ['lvl1', 'gymnastic', 'box']
          },
          {
               name: 'Row',
               cal: [15,10],
               tags: ['lvl1', 'cardio', 'rower']
          },
          ]
     ]
}

test('should return tags for workout', () => {
     const tags = workoutTags(workout);
     expect(tags).toEqual(['arms', 'lvl2', 'gymnastic', 'weightlifting', 'box', 'cardio', 'rower', 'medium']);
})

test('should return tags for workout', () => {
     const tags = workoutTags({...workout, time:[180,180], rest:[60,0]});
     expect(tags).toEqual(['arms', 'lvl2', 'gymnastic', 'weightlifting', 'box', 'cardio', 'rower', 'short']);
})

test('should return tags for workout', () => {
     const tags = workoutTags({...workout, time:[180,180], rest:[60,0], sections:[4,2]});
     expect(tags).toEqual(['arms', 'lvl2', 'gymnastic', 'weightlifting', 'box', 'cardio', 'rower', 'long']);
})