app.controller('StudentController', function($scope)
{
	var self = this;

	self.student = {
		ime: '',
		prezime: '',
		fakultet: '',
		index: '',
		prosek: '',
		godinaUpisa: ''
	};
	self.studentZaIspis = {};

	self.dodajStudenta = function () {

		self.studentZaIspis = angular.copy(self.student);
	};

});