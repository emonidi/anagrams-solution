'use strict';

angular.module('anagramsApp')
  .controller('MainCtrl', function ($scope,words,$q) {
     	var wordsArr = words.get();
     	 $scope.Model = {
     	 	words:{},
     	 	anagrams:[]
     	 };
     	 $scope.Utils={};
     	 $scope.words = {};

     	 $scope.wordKey =  function(word){

     	 	var key = [];
     	 	var indexes = words.indexes();
     	 	for(var i = 0, ii = word.length; i < ii; i++ ){
					key.push(indexes[word[i]]);    	 		
     	 	}
     	 	return key;
     	 }

     	 $scope.sort = function(wordKey){
     	 		return wordKey.sort();
     	 }

     	 $scope.resetWordsArray = function(){
	     	 	wordsArr.then(function(words){
	     	 	console.log($scope.Model.words);
		     	 for(var i = 0, ii = words.length; i < ii; i++){
		     	 	 var wordKey = $scope.wordKey(words[i]).sort();
		     	 	 if(!$scope.words[$scope.sort(wordKey)]){
		     	 	 	$scope.words[$scope.sort(wordKey)] = {};
		     	 	 	$scope.words[$scope.sort(wordKey)][i] = words[i] 
		     	 	 }else{
		     	 	 	$scope.words[$scope.sort(wordKey)][i] = words[i]

		     	 	 }
					$scope.Model.words[$scope.wordKey(words[i])] = words[i];  

		     	 }
		     	 
		     	 $scope.Utils.wordsReady = true;
		     	 console.log($scope.Model)
	     	 });
     	 }


     	 $scope.getAnagrams = function(word){
     	 	var wordKey = $scope.sort($scope.wordKey(word));

     	 	$scope.Model.anagrams = $scope.words[wordKey];
     	 }

     	 $scope.resetWordsArray();

  });
