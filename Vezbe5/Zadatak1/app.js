var app = angular.module('MyApp', []);

app.config(function ($logProvider) {
	$logProvider.debugEnabled(true);
});
