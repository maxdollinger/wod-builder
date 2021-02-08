const { pipe } = require('../utils/utils');
const arrUtils = require('../utils/arrUtils');

const createTagsArr = exercises => exercises.flatMap(el => el.tags);

const eliminateLowerLevels = arrUtils.eliminateItemsWithLowerRank(['lvl3', 'lvl2', 'lvl1'])

const exerciseTags = ({ exercises }) => pipe(
     createTagsArr,
     arrUtils.filterDuplicates,
     eliminateLowerLevels,
     arrUtils.eliminateFalsyItems,
)(exercises);

const durationTag = (workout) => {
     let duration = 0;
     timeBased = ['amrap', 'emom']

     if(timeBased.includes(workout.tyep)) {
          duration += arrUtils.sumArr(workout.time, workout.rest);
          duration = duration * (arrUtils.sumArr(workout.sections) || 1);
     } else {
          duration = workout.time[0]
     }

     if (duration <= 480) {
          return 'short';
     } else if (duration > 1200) {
          return 'long';
     } else {
          return 'medium'
     }
}

module.exports = workout => [...exerciseTags(workout), durationTag(workout), workout.type];