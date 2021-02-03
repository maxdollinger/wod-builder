const workoutText = require('./workoutTextFactory');

const workout = {
     name: '',
     type: '',
     tags: [],
     time: [1200],
     sections: [],
     scheme: [],
     rest: [],
     exercises: [
          [{
               name: 'Pull-up',
               reps: [5],
               height: [],
               tags: ['arms', 'lvl2', 'gymnastic']
          },
          {
               name: 'Push-up',
               reps: [10],
               time: [],
               tags: ['arms', 'lvl2', 'gymnastic']
          },
          {
               name: 'Air-squat',
               reps: [15],
               cal: [],
               tags: ['lvl1', 'gymnastic', 'legs']
          }
          ]
     ]
}

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

test('should return exercise text', () => {
     const result = workoutText.createExerciseString(exercises[0][0]);
     expect(result).toBe('20 Pull-up')
});

test('should return exercise text', () => {
     const result = workoutText.createExerciseString(exercises[0][1]);
     expect(result).toBe('10 Thruster @ 42.5/30Kg')
});

test('should return exercise text', () => {
     const result = workoutText.createExerciseString(exercises[0][2]);
     expect(result).toBe('15 Box-jump @ 60/50cm')
});

test('should return exercise text', () => {
     const result = workoutText.createExerciseString(exercises[0][3]);
     expect(result).toBe('15/10cal Row')
});

test('should return timeString', () => {
     const result = workoutText.timeString(90);
     expect(result).toBe('1:30min')
});

test('should return timeString', () => {
     const result = workoutText.timeString(120);
     expect(result).toBe('2min')
});

test('should return timeString', () => {
     const result = workoutText.timeString(40);
     expect(result).toBe('40s')
});

test('should return textrepresentation of amrap', () => {
     const result = workoutText.createWorkoutText({...workout, type: 'amrap', name: 'Cindy'});
     expect(result).toBe("Cindy\nAmrap 20min\n5 Pull-up\n10 Push-up\n15 Air-squat");
})

test('should return textrepresentation of Emom', () => {
     const result = workoutText.createWorkoutText({...workout, type: 'emom', name: '', time:[60], sections:[10]});
     expect(result).toBe("Every 1min for 10min\n5 Pull-up\n10 Push-up\n15 Air-squat");
})

test('should return textrepresentation of alt. Emom', () => {
     const result = workoutText.createWorkoutText({...workout, type: 'altemom', name: '', time:[90], sections:[12]});
     expect(result).toBe("Alternate every 1:30min for 18min between\n5 Pull-up\n10 Push-up\n15 Air-squat");
})

test('should return textrepresentation of Rounds for time', () => {
     const result = workoutText.createWorkoutText({...workout, type: 'rft', name: '', sections:[5]});
     expect(result).toBe("5 Rounds of\n5 Pull-up\n10 Push-up\n15 Air-squat");
})

test('should return textrepresentation of For time', () => {
     const result = workoutText.createWorkoutText({...workout, type: 'ft', name: '', sections:[5]});
     expect(result).toBe("For time do\n5 Pull-up\n10 Push-up\n15 Air-squat");
})

test('should return textrepresentation of Tabata', () => {
     const result = workoutText.createWorkoutText({...workout, type: 'tabata', name: '', sections:[8], time:[20], rest:[10]});
     expect(result).toBe("Tabata 8x20s/10s\n5 Pull-up\n10 Push-up\n15 Air-squat");
})