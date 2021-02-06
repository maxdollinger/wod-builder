const configs = require('../utils/configs');

exports.getConfigs = (req, res, next) => {
     res.json(configs(req.query.config))
}