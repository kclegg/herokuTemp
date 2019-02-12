angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('https://salty-everglades-33926.herokuapp.com/api/listings');
    },
	
	create: function(listing) {
	  return $http.post('https://salty-everglades-33926.herokuapp.com/api/listings/', listing);
    },
	
	delete: function(_id) {
	  return $http.delete('https://salty-everglades-33926.herokuapp.com/api/listings/' + _id);
    }
  };

  return methods;
});