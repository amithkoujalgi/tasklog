
var config = {
		nodeModules :  function(){
			var obj = new Object();
			obj.events = require('events');
			obj.util = require('util');
			obj.fs = require('fs');
			obj.http = require('http');
			obj.url=require('url');
			obj.path = require('path');
			obj.assert = require('assert');
			obj.express = require('express');
			obj.mongo = require('mongoskin');
			return obj;
		},
		userModules:  function(){
			var obj = new Object();
			obj.preprocessor = require('./preprocessor');
			obj.utilities = require('./utilities');
			return obj;
			
		},
		dbService:  function(){
			var obj = new Object();
			obj.db   = config.nodeModules().mongo.db('mongodb://raz0rthink:t00dles@alex.mongohq.com:10025/timetracker?auto_reconnect');
			//obj.db   = config.nodeModules().mongo.db('mongodb://nodejitsu:9e464771132d8e29b17007c818d247b1@alex.mongohq.com:10001/nodejitsudb432109787846?auto_reconnect');
			return obj;
		},
		appConfig:  function(){
			var obj = new Object();
			obj.clientDir = './html';
			//obj.clientDir = '/home/dotcloud/current';
			obj.port = 8080;
			//obj.port = 8082;
			return obj;
		},
		servicemap:  function(){
			var obj = new Object();
			obj.User = require("./services/userservice").User;
			return obj;
		}
		
	};
	
module.exports = config;


