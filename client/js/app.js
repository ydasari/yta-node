var app = angular.module('YTA', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('landingPage',{
			url:'/',
			templateUrl:'landingPage.html',
			controller:'landingPageCtrl'
		})
		.state('login',{
			url:'/login',
			templateUrl:'loginPage.html',
			controller:'loginPageCtrl'
		})
		.state('userHomePage',{
			url:'/userHomePage',
			templateUrl:'userHomePage.html',
			controller: 'userHomePage'
		});
		$urlRouterProvider.otherwise('/');
});

app.controller('landingPageCtrl', ['$scope', function($scope){
	$scope.user = 'Yeshwant Dasari';
}]);

app.controller('loginPageCtrl', ['$scope', function($scope){
	$scope.user = 'Yeshwant Dasari';
}]);
