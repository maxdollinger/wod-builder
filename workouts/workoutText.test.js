const workoutText = require('./workoutText');

const workout = {
     name: '',
     type: '',
     tags: [],
     time: [1200],
     sections: [],
     scheme: [],
     rest: [],
     exercises: [
          {
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
}

test('should return textrepresentation of amrap', () => {
     const result = workoutText({...workout, type: 'amrap', name: 'Cindy'});
     expect(result).toBe("Cindy\nAmrap 20min\n5 Pull-up\n10 Push-up\n15 Air-squat");
})

test('should return textrepresentation of Emom', () => {
     const result = workoutText({...workout, type: 'emom', name: '', time:[60], sections:[10]});
     expect(result).toBe("Every 1min for 10min\n5 Pull-up\n10 Push-up\n15 Air-squat");
})

test('should return textrepresentation of alt. Emom', () => {
     const result = workoutText({...workout, type: 'altemom', name: '', time:[90], sections:[12]});
     expect(result).toBe("Alternate every 1:30min for 18min between\n5 Pull-up\n10 Push-up\n15 Air-squat");
})

test('should return textrepresentation of Rounds for time', () => {
     const result = workoutText({...workout, type: 'rft', name: '', sections:[5]});
     expect(result).toBe("5 Rounds of\n5 Pull-up\n10 Push-up\n15 Air-squat");
})

test('should return textrepresentation of For time', () => {
     const result = workoutText({...workout, type: 'ft', name: '', sections:[5]});
     expect(result).toBe("For time do\n5 Pull-up\n10 Push-up\n15 Air-squat");
})

test('should return textrepresentation of Tabata', () => {
     const result = workoutText({...workout, type: 'tabata', name: '', sections:[8], time:[20], rest:[10]});
     expect(result).toBe("Tabata 8x20s/10s\n5 Pull-up\n10 Push-up\n15 Air-squat");
})