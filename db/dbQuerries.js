const _ = require('lodash');
const { tagsByGroup } = require('../utils/configs');

const getTagsFactory = filter => group => {
     const tags = tagsByGroup(filter)(group);
     return _.isEmpty(tags.in) ? [_.sample(tags.nin)] : tags.in;
}

const workoutQuery = query => {
     const filter = query.filter || [];

     const getTags = getTagsFactory(filter);

     return {
          type: { $in: getTags('style') },
          tags: { $in: getTags('duration') }
     }
}

const exerciseQuery = query => {
     const { name } = query;

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