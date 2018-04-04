app.controller('productsController',function($scope,$mdDialog,$mdToast,productsFactory){
    $scope.readProducts = function(){
        productsFactory.readProducts().then(function successCallback(response){
            $scope.products = response.data.records;
        }, function errorCallback(response){
            $scope.showToast("Unable to read record.");
        });
    }
    $scope.showCreateProductForm = function(event){
        $mdDialog.show({
            controller: DialogController,
            templateUrl: './app/products/create_product.template.html',
            parent:angular.element(document.body),
            clickOutsideToClose: true,
            scope: $scope,
            preserveScope: true
        });
    }
    $scope.createProduct = function(){
 
        productsFactory.createProduct($scope).then(function successCallback(response){
     
            // tell the user new product was created
            $scope.showToast(response.data.message);
     
            // refresh the list
            $scope.readProducts();
     
            // close dialog
            $scope.cancel();
     
            // remove form values
            $scope.clearProductForm();
     
        }, function errorCallback(response){
            $scope.showToast("Unable to create record.");
        });
    }
    // clear variable / form values
$scope.clearProductForm = function(){
    $scope.id = "";
    $scope.name = "";
    $scope.description = "";
    $scope.price = "";
}
// show toast message
$scope.showToast = function(message){
    $mdToast.show(
        $mdToast.simple()
            .textContent(message)
            .hideDelay(3000)
            .position("top right")
    );
}
     
    // readOneProduct will be here
    function DialogController($scope,$mdDialog){
        $scope.cancel = function(){
            $mdDialog.cancel();
        };
    }
});