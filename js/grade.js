//a-f grades

var letterGrade = function (grade){
	console.log();
	console.log('CHECKING:', grade);

	switch(true) {
		case (grade >= 90):
			console.log('A score of', grade, 'earns you an A!');
			console.log();
			break;
		case (grade >= 80):
			console.log('A score of', grade, 'earns you a B!');
			console.log();
			break;
		case (grade >= 70):
			console.log('A score of', grade, 'earns you a C!');
			console.log();
			break;
		case (grade >= 60):
			console.log('A score of', grade, 'earns you a D!');
			console.log();
			break;
		default:
			console.log('A score of', grade, '... yikes');
			console.log();

	}
}

letterGrade(91);
letterGrade(35);
letterGrade(69);
letterGrade(73);
letterGrade(3);
letterGrade(83);
letterGrade(100);
