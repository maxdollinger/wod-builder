const { getRandomEntrie } = require('../utils/arrUtils');
const { tagsInFilter } = require('../utils/configs');

const setTags = (arr, randomValueArr) => arr.length === 0 ? [getRandomEntrie(randomValueArr)] : arr;

const workoutQuery = query => {
     const filter = query.filter || [];

     const getTags = tagsInFilter(filter);
     const styles = setTags(getTags('workoutStyle'), ['amrap', 'rft', 'ft']);
     const durations = setTags(getTags('workoutDuration'), ['short', 'medium', 'long']);

     return {
          type: { $in: styles },
          tags: { $in: durations }
     }
}

const exerciseQuery = query => {
     const {name} = query;

     const filter = {};

     name && (filter.name = new RegExp(name, 'ig'));

     return filter
}

module.exports = (query) => {
     switch (query) {
          case 'Workout':
               return workoutQuery;
          case 'Exercise':
               return exerciseQuery;
          default:
               return {};
     }
}