'use strict';

const push = require('web-push');

const GCM_API_KEY = 'AAAAJx7C8uA:APA91bGH7YHzV8Wxp4H5IYGUDcIJ3yfM20nkZau-cN5sCbbzgmKa46y2aolu9VKrEefvpdj2TqxuYx7C0ZJvPAexofjg5iaVKUTQtV9uSj-gNdOjix1QDyrnN-AFhs8dFseuRiZ2160S'
push.setGCMAPIKey(GCM_API_KEY);

const data = { 
	'endpoint': 'https://fcm.googleapis.com/fcm/send/fozdC9Frnm8:APA91bF2Z4OkW2uOgQzSeEZ8ABkEcV5Q7WKwsvDA4Xjoi-tNBNu6BbL_gALrKvVyxY6iXSn3zpB-wpTgP0XtUJADsJCl4vgTlO8a4hEk1PWPPdO7ZecuvVa2jn43rgN92-xNfEbZ2jh1',
	'userAuth': 'uMHThb95P6rWJH3HwqgYPg==',
	'userPublicKey': 'BJVrSr/PDZYKYyrrboSHxsnyrvpUeje6GezMrOHBgEVg+XwL1qpH6skA8YpnKG8E6dkJzDac8VIWRkiazxPwfrw='
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
