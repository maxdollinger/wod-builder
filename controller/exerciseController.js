const { randomHexString } = require('../utils/utils');

exports.getExercises = (req, res, next) => {
     req.success = exercises => ({
          msg: exercises.length,
          data: exercises.map(exc => ({ ...exc, id: randomHexString() }))
     });
}