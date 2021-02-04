const excText = require('./exercisesText');

const exercises = [
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
];

const workout = {
     name: 'test',
     exercises,
}

test('should return exercise text', () => {
     const result = excText(workout);
     expect(result).toBe('20 Pull-up\n10 Thruster @ 42.5/30Kg\n15 Box-jump @ 60/50cm\n15/10cal Row')
});