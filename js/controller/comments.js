myApp.controller('CommentCtrl', function ($scope, $rootScope,	 Post, $routeParams){

    $rootScope.loading=true;
    $scope.newComment= {};

    Post.get($routeParams.id).then(function(post){
      $rootScope.loading = false;
      $scope.title = post.name;
      $scope.comments = post.comments;
    }, function(msg){
      alert(msg);
    });

	$scope.addComment = function(){
		$scope.comments.push($scope.newComment);
		Post.add($scope.newComment).then(function(){
		}, function(){
			alert ("Votre message n\' a pas pu être sauvegardé");
		})
		$scope.newComment = {};

	}
});
