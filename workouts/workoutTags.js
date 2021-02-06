const { pipe } = require('../utils/utils');
const arrUtils = require('../utils/arrUtils');
const configs = require('../utils/configs');

const createTagsArr = exercises => {
     return exercises.flat().map(el => el.tags).flat();
}

const eliminateLowerLevels = arrUtils.eliminateItemsWithLowerRank(['lvl3','lvl2','lvl1'])

const exerciseTags = ({ exercises }) => {
     const equipmentTags = configs('equipment', 'value').filter( el => el !== 'none');

     return pipe(
          createTagsArr,
          arrUtils.filterDuplicates,
          eliminateLowerLevels,
          arrUtils.eliminateFalsyItems,
          arrUtils.eliminateItemIfValuesIncluded('none', equipmentTags),
     )(exercises)
}

const durationTag = (workout) => {
     let duration = 0;

     duration += arrUtils.sumArr(workout.time, workout.rest);
     duration = duration * (arrUtils.sumArr(workout.sections) || 1);

     if (duration <= 480) {
          return 'short';
     } else if(duration > 1200) {
          return 'long';
     } else {
          return 'medium'
     }
}

module.exports = workout => [...exerciseTags(workout), durationTag(workout)];