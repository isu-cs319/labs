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
	    if ($scope.books[index].reference == 1) {
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
	$scope.addNewBook = function(){
		console.log($scope.newBook);
		$scope.books.push($scope.newBook);
	};

	
    })

    .controller('ugController', function($scope) {
	$scope.name = $scope.username;
	$scope.borrowreturn = function(index, name) {
	    //alert(index + " " + name + " " + $scope.name);
	    if ($scope.books[index].borrowedBy == name) { // return
		$scope.books[index].borrowedBy = "";
		$scope.books[index].presence = 1;
		alert("You have successfully returned " + $scope.books[index].name);
		console.log(name + " returned " + $scope.books[index].name);
	    }
	    else { // borrow
		var i=0, num=0, canborrow = 1;

		if ($scope.books[index].reference == 1) {
		    canborrow = 0;
		    alert("Reference books can not be borrowed.");
		}
		else if ($scope.books[index].presence == 0) {
		    canborrow = 0;
		    alert("Book is unavailable.");
		}
		else {
		    while (i<$scope.books.length && num<2) {
			if ($scope.books[i].borrowedBy == name) {
			    num++;
			    if (num == 2) {
				canborrow = 0;
				alert("You have already borrowed 2 books. \n" +
				      "Please return a book to borrow another.");
			    }
			}
			i++;
		    }
		}
		
		if (canborrow==1) {
		    $scope.books[index].borrowedBy = name;
		    $scope.books[index].presence = 0;
		    alert("You have successfully borrowed " + $scope.books[index].name);
		    console.log(name + " borrowed " + $scope.books[index].name);
		}
	    }
	};
    });
	
