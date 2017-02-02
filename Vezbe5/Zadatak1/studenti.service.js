app.factory('studentskiServis', ['$log', function($log)
{

	var studenti = _getStudentiBaza();

	return {
		getStudenti: getStudenti,
		addStudent: addStudent,
		removeStudent: removeStudent,
		updateStudent: updateStudent
	}

	function addStudent (student) {
		$log.debug('studentskiServis.addStudent()');

		studenti.push(student);
	}

	function getStudenti () {
		$log.debug('studentskiServis.getStudenti()');

		return studenti;
	}

	function removeStudent (index) {
		$log.debug('studentskiServis.removeStudent()');

		studenti.splice(index, 1);
	}

	function updateStudent (student, index) {
		$log.debug('studentskiServis.removeStudent()');

		studenti[index] = student;
	}

	function _getStudentiBaza () {
		var studenti = [
			{
				ime: 'Marko',
				prezime: 'Letic',
				fakultet: 'FTN',
				index: 222,
				prosek: 11,
				godinaUpisa: 2019
			},
			{
				ime: 'Marko',
				prezime: 'Letic',
				fakultet: 'FTN',
				index: 222,
				prosek: 11,
				godinaUpisa: 2019
			},
			{
				ime: 'Marko',
				prezime: 'Letic',
				fakultet: 'FTN',
				index: 222,
				prosek: 11,
				godinaUpisa: 2019
			},
			{
				ime: 'Marko',
				prezime: 'Letic',
				fakultet: 'FTN',
				index: 222,
				prosek: 11,
				godinaUpisa: 2019
			},
			{
				ime: 'Marko',
				prezime: 'Letic',
				fakultet: 'FTN',
				index: 222,
				prosek: 11,
				godinaUpisa: 2019
			}
		];

		return studenti;
	}

}]);