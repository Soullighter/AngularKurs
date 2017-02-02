app.controller('StudentController', ['$scope', '$log', 'studentskiServis', function($scope, $log, studentskiServis)
{
	var self = this;

	self.student = {
		ime: '',
		prezime: '',
		fakultet: '',
		index: null,
		prosek: null,
		godinaUpisa: null
	};
	self.studenti = studentskiServis.getStudenti();
	self.studentZaIspis = {};

	self.dodajStudenta = function () {
		$log.debug('StudentController.dodajStudenta()');

		studentskiServis.addStudent(self.student);
		self.studenti = studentskiServis.getStudenti();
	};

	self.obrisiStudenta = function (index) {
		$log.debug('StudentController.obrisiStudenta()');

		studentskiServis.removeStudent(index);
		self.studenti = studentskiServis.getStudenti();
	};

	self.updateStudent = function () {
		$log.debug('StudentController.editStudent()');
		
		studentskiServis.updateStudent(self.student, self.student.index);
		self.studenti = studentskiServis.getStudenti();
	};

	self.addStudentDataToEditForm = function (index) {
		$log.debug('StudentController.addStudentDataToEditForm()');

		self.student = angular.copy(self.studenti[index]);
		self.student.index = index;
	};


}]);