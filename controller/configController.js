const { configs } = require('../utils/configs');

exports.getConfigs = (req, res, next) => {
     res.json({ status: 'success', msg: 'Configs for wodbuilder', data: configs() })
}