const w = require('./workoutFactory');
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

test('should return tags an flatten arr', () => {
     const result = w.createTagsArr(workout.exercises[0])
     expect(result).toEqual(['arms', 'lvl2', 'gymnastic','arms', 'lvl2', 'weightlifting','lvl1', 'gymnastic', 'box','lvl1', 'cardio', 'rower']);
})

test('should filter duplicates', () => {
     const result = w.filterDuplicateTags([1,1,2,3,2,1,4,5,4,5])
     expect(result).toEqual([1,2,3,4,5]);
})

test('should delete lower ranked', () => {
     const result = w.filterItemsByOrder(['lvl3', 'lvl2', 'lvl1'])(['lvl3', 'lvl2', 'lvl1', 'weightlifting', 'lvl1', 'gymnastic']);
     expect(result).toEqual(['lvl3', 'weightlifting', 'gymnastic']);
})