const db = require('../db/dbOperations');
const createQuery = require('../db/dbQuerries');

const setModel = (req, res, next) => {
     req.path.includes('workout') && (req.model = 'Workout');
     req.path.includes('exercise') && (req.model = 'Exercise');
}

const setOperation = (req, res, next) => {
     const operations = {
          GET: 'find',
          POST: 'create',
          PUT: 'updateOne',
          DELETE: 'delete'
     }

     req.operation = operations[req.method];
}

const response = (req, res, next) => {
     const { success, model, operation } = req;

     db(model)(operation)(req.body)
          .then(docs => {
               const defaultSuccess = ({ status: 'success', msg: `${req.method} ${model}`, data: docs });
               const response = success instanceof Function ? success(docs) : {};
               res.status(200).json({ ...defaultSuccess, ...response })
          })
          .catch(err => {
               res.status(500).json({ status: 'error', msg: err.massage, data: err })
          })
}

module.exports = middleware => async (req, res, next) => {
     setModel(req);
     setOperation(req);
     req.operation === 'find' && (req.body = createQuery(req.model)(req.query));
     middleware && await middleware(req, res, next);

     !res.headersSent && response(req, res, next);
}