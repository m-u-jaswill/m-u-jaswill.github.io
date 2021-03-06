'use strict';

const push = require('web-push');

const GCM_API_KEY = 'AAAAJx7C8uA:APA91bGH7YHzV8Wxp4H5IYGUDcIJ3yfM20nkZau-cN5sCbbzgmKa46y2aolu9VKrEefvpdj2TqxuYx7C0ZJvPAexofjg5iaVKUTQtV9uSj-gNdOjix1QDyrnN-AFhs8dFseuRiZ2160S'
push.setGCMAPIKey(GCM_API_KEY);

const data = { 
	'endpoint': 'https://fcm.googleapis.com/fcm/send/dRvo7EnUGPM:APA91bHSj-GddA_XZ1lHx7GkSGbPv0__oJbfRz2fPxwQ2ru3U_nCSTic7XtLvl6e7GH3nPhCiPjDMvyVaUjuX5SYZTfO3JySjhhs8e_S1w1guO8_kXmUs5YJ9L5v03xRcoRrW9XXAW1l',
	'userAuth': 'BC/y9CD7IsCFtQhg1mTlZg==',
	'userPublicKey': 'BOgVxXYGUSIi1WKnrI17xosxOOiQzOgEa+mDdA7IzXxbuI7ERXLVLL88fmtnmp4Q2+vRonSlH78vIuogUd8LWZo='
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
