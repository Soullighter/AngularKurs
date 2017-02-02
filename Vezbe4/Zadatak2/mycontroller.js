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
	self.studenti = [];
	self.studentZaIspis = {};

	self.dodajStudenta = function () {

		self.studentZaIspis = angular.copy(self.student);

		self.studenti.push(self.studentZaIspis);
	};

	self.obrisiStudenta = function (index) {
		console.log(index);
		self.studenti.splice(index, 1);
	};

	//DOMACI
	self.editStudenta = function (index) {
		console.log(index);
		self.student = self.studenti[index];
	};


});