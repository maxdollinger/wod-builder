const { randomHexString } = require('../utils/utils');

exports.getExercises = (req, res, next) => {
     const { name } = req.query;

     const query = {};
     name && (query.name = new RegExp(name, 'ig'));

     req.body = query;
     req.success = docs => ({
          status: 'success',
          msg: docs.length,
          data: docs.map(el => ({ ...el, id: randomHexString() }))
     });
}