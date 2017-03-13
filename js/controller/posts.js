myApp.controller('PostCtrl', function($scope, $rootScope, Post){

    $rootScope.loading=true;

    $scope.posts = Post.find().then(function(posts){
      $rootScope.loading= false;
      $scope.posts = posts;
    }, function(msg){
      alert(msg);
    });
});
