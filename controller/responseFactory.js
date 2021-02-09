const db = require('../db/dbOperations');
const createQuery = require('../db/dbQuerries');

const setModel = req => {
     req.path.includes('workout') && (req.model = 'Workout');
     req.path.includes('exercise') && (req.model = 'Exercise');
}

const setOperation = req => {
     const operations = {
          GET: 'find',
          POST: 'create',
          PUT: 'updateOne',
          DELETE: 'delete'
     }

     req.operation = operations[req.method];
}

const setQuery = req => {
     if (req.method === 'GET') {
          req.body = createQuery(req.model)(req.query)
     }
}

const response = (req, res, next) => {
     const { success, model, operation } = req;

     db(model)(operation)(req.body)
          .then(docs => {
               if(docs.length === 0) throw new Error('no matches found');

               const defaultSuccess = ({ status: 'success', msg: `${req.method} ${model}`, data: docs });
               const response = success instanceof Function ? success(docs) : {};
               res.status(200).json({ ...defaultSuccess, ...response })
          })
          .catch(err => {
               res.status(400).json({ status: 'error', msg: err.message, data: err })
          })
}

module.exports = middleware => async (req, res, next) => {
     setModel(req);
     setOperation(req);
     setQuery(req);

     if (middleware instanceof Function) {
          await middleware(req, res, next)
     }

     !res.headersSent && response(req, res, next);
}