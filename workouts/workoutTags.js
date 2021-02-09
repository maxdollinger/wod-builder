const _ = require('lodash');

const removeLevelTags = tags => {
     const rankedLevels = ['lvl3', 'lvl2', 'lvl1'];

     const remove = (function filter(level) {
          return (_.isEmpty(level) || tags.includes(level[0])) ?
               level.slice(1) : filter(level.slice(1));
     })(rankedLevels)

     return _.filter(tags, tag => !remove.includes(tag))
}

const exerciseTags = ({ exercises }) => _.chain(exercises)
     .flatMap(exc => exc.tags)
     .compact()
     .uniq()
     .thru(removeLevelTags)
     .value()

const durationTag = (workout) => {
     let duration = 0;
     timeBased = ['amrap', 'emom']

     if (timeBased.includes(workout.type)) {
          duration = _.sum(workout.time) + _.sum(workout.rest);
          duration = duration * (_.sum(workout.sections) || 1);
     } else {
          duration = _.sum(workout.time);
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