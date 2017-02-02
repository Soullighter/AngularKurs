var app = angular.module('MyApp', ['ui.router']);

app.config(function ($logProvider) {
	$logProvider.debugEnabled(true);
});

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/students');
	
	$stateProvider
		// HOME STATES AND NESTED VIEWS ========================================
		.state('students', {
			url: '/students',
			//templateUrl: 'studentsManagement.html'
		})
		// ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
		.state('teachers', {
			url: '/teachers',
			// we'll get to this in a bit       
		});
}]);