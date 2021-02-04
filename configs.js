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
          { name: "Med Ball", value: "medball"},
          { name: "Rower", value: "rower"},
          { name: "Concep2 Bike", value: "c2bike"},
          { name: "Assault Bike", value: "assbike"},
          { name: "Skie Erg", value: "skierg"},
     ];

     return {
          type,
          level,
          focus,
          equipment,
     };
}

const workouts = () => {
     const input = (name, label, type = "number") => ({ name, label, type })

     const duration = input("duration", "duration in min");
     const numberRounds = input("numberRounds", "number of rounds");

     return {
          amrap: [duration],
          forTime: [duration],
          roundsForTime: [duration, numberRounds],
          emom: [numberRounds],
     };
}

module.exports = (group, prop) => {
     const config = filters()[group];
     return prop ? config.map( el => el[prop]) : config;
}