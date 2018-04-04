app.factory("productsFactory",function($http){
    var factory = {};
    factory.readProducts = function(){
        return $http({
            method:'GET',
            url: 'http://localhost:8080/api/products/read.php'
        });
    }
    // create product
factory.createProduct = function($scope){
    return $http({
        method: 'POST',
        data: {
            'name' : $scope.name,
            'description' : $scope.description,
            'price' : $scope.price,
            'category_id' : 1
        },
        url: 'http://localhost/api/product/create.php'
    });
};
 
// readOneProduct will be here
    return factory;
});