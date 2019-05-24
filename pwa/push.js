'use strict';

const push = require('web-push');

const GCM_API_KEY = 'AAAAJx7C8uA:APA91bGH7YHzV8Wxp4H5IYGUDcIJ3yfM20nkZau-cN5sCbbzgmKa46y2aolu9VKrEefvpdj2TqxuYx7C0ZJvPAexofjg5iaVKUTQtV9uSj-gNdOjix1QDyrnN-AFhs8dFseuRiZ2160S'
push.setGCMAPIKey(GCM_API_KEY);

const data = {
	'endpoint': '',
	'userAuth': '',
	'userPublicKey': ''
};

const pushSubscription = {
	endpoint: data.endpoint,
	keys: {
		auth: data.userAuth,
		p256dh: data.userPublicKey
	}
}

push.sendNotification(pushSubscription, 'Hi! How are you?')
	.then(function(result) {
		console.log("success");
		console.log(result);
	})
	.catch(function(err) {
		console.log("fail");
		console.log(err);
	});