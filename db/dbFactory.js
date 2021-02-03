const Exercise = require('./exerciseModel');
const Workout = require('./workoutModel');

const create = Model => data =>
     Model.create(data).then(doc => doc);
const find = Model => (data = {}) =>
     Model.find(data).then(docs => docs.map(el => el.toObject()));
const updateOne = Model => data =>
     Model.findByIdAndUpdate(data['_id'], data)
          .then(doc => doc.toObject());
const deleteOne = Model => data => Model.findByIdAndDelete(data["_id"])

const operations = {
     create: create,
     find: find,
     updateOne: updateOne,
     deleteOne: deleteOne,
}

const operationsFactory = name => operation => {
     switch (name) {
          default:
          case "Exercise":
               return operations[operation](Exercise);
          case "Workout":
               return operations[operation](Workout);
     }
}
module.exports = operationsFactory;