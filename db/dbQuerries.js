const { getRandomEntrie } = require('../utils/arrUtils');
const { tagsInFilter } = require('../utils/configs');

const setTags = (arr, randomValueArr) => arr.length === 0 ? [getRandomEntrie(randomValueArr)] : arr;

const workoutQuery = filter => {
     filter = filter || [];

     const getTags = tagsInFilter(filter);
     const styles = setTags(getTags('workoutStyle'), ['amrap', 'rft', 'ft']);
     const durations = setTags(getTags('workoutDuration'), ['short', 'medium', 'long']);

     return {
          type: { $in: styles },
          tags: { $in: durations }
     }
}

module.exports = (query) => {
     switch (query) {
          case 'Workout':
               return workoutQuery;
          default:
               return {};
     }
}