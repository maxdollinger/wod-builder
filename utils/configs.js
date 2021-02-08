const filters = () => {
     const type = [
          { name: "Gymnastic", value: "gymnastic" },
          { name: "Cardio", value: "cardio" },
          { name: "Weightlifting", value: "weightlifting" }
     ];
     const level = [
          { name: "Level 3", value: "lvl3" },
          { name: "Level 2", value: "lvl2" },
          { name: "Level 1", value: "lvl1" }
     ];
     const focus = [
          { name: "Arms", value: "arms" },
          { name: "Shoulders", value: "shoulders" },
          { name: "grip", value: "grip" },
          { name: "Upper back", value: "upperback" },
          { name: "Lower back", value: "lowerback" },
          { name: "Hip", value: "hip" },
          { name: "Core", value: "core" },
          { name: "Legs", value: "legs" },
     ];
     
     const equipment = [
          { name: "Bar", value: "bar" },
          { name: "Barbell", value: "barbell" },
          { name: "Kettlebell", value: "kettlebell" },
          { name: "Rings", value: "rings" },
          { name: "Dumbbell", value: "dumbbell" },
          { name: "Jump rope", value: "jumprope" },
          { name: "Box", value: "box" },
          { name: "Med Ball", value: "medball" },
          { name: "Rower", value: "rower" },
          { name: "Concep2 Bike", value: "c2bike" },
          { name: "Assault Bike", value: "assbike" },
          { name: "Skie Erg", value: "skierg" },
     ];

     const exerciseProps = [
          { name: 'Reps', value: 'reps', unit: 'reps' },
          { name: 'Cal', value: 'cal', unit: 'cal' },
          { name: 'Weight', value: 'weight', unit: 'Kg' },
          { name: 'Distance', value: 'distance', unit: 'm' },
          { name: 'Height', value: 'height', unit: 'cm' },
          { name: 'Time', value: 'time', unit: 's' },
     ];

     const exerciseMaxValues = ['', 'set', 'reps', 'distance', 'height', 'weight', 'cal']

     const workoutStyle = [
          { name: "Amrap", value: 'amrap' },
          { name: "For time", value: 'ft' },
          { name: "Emom", value: 'emom' },
          { name: "Rounds for time", value: 'rft' },
     ]

     const workoutTags = [
          { name: "Girl", value: 'girl' },
          { name: "Hero", value: 'hero' },
     ]

     const workoutDuration = [
          { name: 'Short', value: 'short' },
          { name: 'Medium', value: 'medium' },
          { name: 'Long', value: 'long' },
     ]

     return {
          type,
          level,
          focus,
          equipment,
          workoutStyle,
          workoutTags,
          exerciseProps,
          exerciseMaxValues,
          workoutDuration
     };
}

exports.tagsInFilter = filter => group => this.configs(group, 'value').filter( el => filter.includes(el));
exports.tagsNotInFilter = filter => group => this.configs(group, 'value').filter( el => !filter.includes(el));

exports.configs = (group, value) => {
     const config = group ? filters()[group] : filters();
     return value ? config.map(el => el[value]) : config;
}