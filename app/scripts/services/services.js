'use strict'
angular.module('anagramsApp').service('words',['$http','$q',function($http,$q){
	 var Super = this;
	 this.indexes = {};
	 return {
	 	get : function(){
	 		var deferred = $q.defer();
		 	$http.get("words.txt")
		 	.success(function(d){
		 		var word = "";
		 		var words = [];
		 		angular.forEach(d,function(e,i){
		 			if(e !== " "){
		 				word = word+e;
		 			}else{
		 				words.push(word);
		 				word = "";
		 			}
		 		});
		 		
		 		deferred.resolve(words);
		 	});
			return deferred.promise

	 	},
	 	indexes:function(alphabet){
	 		var indexes= {};
	 		if(!alphabet){
	 			alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	 			angular.forEach(alphabet,function(letter,i){
	 				Super.indexes[letter] = i+1;
	 			})
	 		}
	 		return Super.indexes;
	 	}
	 }	 
}]);	