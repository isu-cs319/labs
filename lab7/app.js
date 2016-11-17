angular.module('myApp', ['ngRoute']) //ngRoute is an angular service
    .config(function ($routeProvider) {
	$routeProvider.when("/admin", {
            controller: "adminController",
            templateUrl: "admin.html"
	});
	
	$routeProvider.when("/ug", {
            controller: "ugController",
            templateUrl: "ug.html"
	});
    })

    .controller('loginController', function($scope) {
	$scope.books = [];
	$scope.newBook = {
	    name: '',
	    shelf: '',
	    reference: '',
	    borrowedBy: '',
	    presence: 1
	};
	$scope.books = [
	    {name:"ref0", shelf:"literature", reference:1, borrowedBy:"", presence:1},
	    {name:"ref1", shelf:"science", reference:1, borrowedBy:"", presence:1},
	    {name:"ref2", shelf:"sport", reference:1, borrowedBy:"", presence:1},
	    {name:"ref3", shelf:"art", reference:1, borrowedBy:"", presence:1},
	    {name:"ref4", shelf:"literature", reference:1, borrowedBy:"", presence:1},
	    {name:"book5", shelf:"science", reference:0, borrowedBy:"", presence:1},
	    {name:"book6", shelf:"sport", reference:0, borrowedBy:"", presence:1},
	    {name:"book7", shelf:"art", reference:0, borrowedBy:"", presence:1},
	    {name:"book8", shelf:"literature", reference:0, borrowedBy:"", presence:1},
	    {name:"book9", shelf:"science", reference:0, borrowedBy:"", presence:1},
	    {name:"book10", shelf:"sport", reference:0, borrowedBy:"", presence:1},
	    {name:"book11", shelf:"art", reference:0, borrowedBy:"", presence:1},
	    {name:"book12", shelf:"literature", reference:0, borrowedBy:"", presence:1},
	    {name:"book13", shelf:"science", reference:0, borrowedBy:"", presence:1},
	    {name:"book14", shelf:"sport", reference:0, borrowedBy:"", presence:1},
	    {name:"book15", shelf:"art", reference:0, borrowedBy:"", presence:1},
	    {name:"book16", shelf:"literature", reference:0, borrowedBy:"", presence:1},
	    {name:"book17", shelf:"science", reference:0, borrowedBy:"", presence:1},
	    {name:"book18", shelf:"sport", reference:0, borrowedBy:"", presence:1},
	    {name:"book19", shelf:"art", reference:0, borrowedBy:"", presence:1},
	    {name:"book20", shelf:"literature", reference:0, borrowedBy:"", presence:1},
	    {name:"book21", shelf:"science", reference:0, borrowedBy:"", presence:1},
	    {name:"book22", shelf:"sport", reference:0, borrowedBy:"", presence:1},
	    {name:"book23", shelf:"art", reference:0, borrowedBy:"", presence:1},
	    {name:"book24", shelf:"literature", reference:0, borrowedBy:"", presence:1},
	];
	console.log($scope.books);
    })

    .controller('adminController', function($scope) {
	$scope.name = "Admin";
	$scope.clicked = function(index) {
	    var ref = "";
	    if ($scope.books[index].reference == 0) {
		ref = "Yes";
	    }
	    else {
		ref = "No";
	    }
	    alert("Book name: " + $scope.books[index].name + "\n" +
		  "Reference book: " + ref + "\n" +
		  "Borrowed By: " + $scope.books[index].borrowedBy + "\n" +
		  "Presence: " + $scope.books[index].presence);
	};
	
    })

    .controller('ugController', function($scope) {
	$scope.name = "Undergrad";
    });
	
