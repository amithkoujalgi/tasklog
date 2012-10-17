var config = require('../config');
var db = config.dbService().db;

var User = {
	authenticate : function(handler, context, data) {
		try {
			console.log('auth');
			db.collection('users').findOne({
				username : data.username,
				password : data.password
			}, function(err, res) {
				if (res) {
					context.session.userId = res._id;
					context.session.username = res.username;
					context.session.privilege = res.privilege;
					context.session.fullname = res.name;
					handler(res, null)
				} else if (err) {
					handler(false, null)
				} else {
					handler(false, null)
				}
			})
		} catch (e) {
			return context.error(e);
		}
	},
	checkLoginStatus : function(handler, context, data) {
		if (context.session.userId != undefined) {
			var user = new Object();
			user.userId = context.session.userId;
			user.username = context.session.username;
			user.fullname = context.session.fullname;
			user.isLoggedIn = true;
			handler(user, null);
		} else {
			var user = new Object();
			user.isLoggedIn = false;
			handler(user, null);
		}
	},
	logout : function(handler, context, data) {
		context.session.userId = undefined;
		context.resetSession();
		handler(data, null);
	},
	getCandidates : function(handler, context, data) {
		db.collection('users').find().toArray(function(err, res) {
			if (err)
				handler(null, err);
			if (res && res.length > 0) {
				handler(res, null);
			} else
				handler("No users found", null);
		});
	},
	getActivities : function(handler, context, data) {
		db.collection('activities').find({
			"userId" : data._id
		}).toArray(function(err, res) {
			if (err)
				handler(null, err);
			if (res && res.length > 0) {
				handler(res, null);
			} else
				handler("No activities found", null);
		});
	},
	RegisterProcess : function(handler, context, data) {
		try {
			db.collection('users').find({
				userName : data.userName
			}).toArray(function(err, res) {
				if (res && res.length > 0) {
					handler("present", null);
				} else if (err) {
					console.log(err)
					handler("error", null)
				} else {
					db.collection('users').insert(data, {safe:false} , function(e, r) {
						if (r) {
							handler("added", null)
						} else {
							console.log(e)
							handler("error", null)
						}
					});
				}
			})
		} catch (e) {
			console.log(e)
			return context.error(e);
		}
	}
}
exports.User = User;
