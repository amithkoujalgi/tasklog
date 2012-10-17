var config = require('../../config');
var db = config.dbService().db;

var CommonService = {
	getDocById : function(handler, context, data) {
		try {
			db.collection(data.coll).findById(data.id, function(err, res) {
				if (res) {
					return handler(res, null)
				} else {
					return handler(null, err)
				}
			})
		} catch (e) {
			return context.error(e);
		}
	}
}
exports.CommonService = CommonService;
