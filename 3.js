function notifyBasStudents(students) {
	for (student of students){
        if (student.rate <= 3.5) {
            console.log(`${student.name} ti  lox`);
        }else{
            console.log(`${student.name} ti ne lox`);
        }
}
}

notifyBasStudents([
	{ name: 'Адилет', rate: 4 },
	{ name: 'Азиза', rate: 3.5 },
	{ name: 'Абай', rate: 5 },
	{ name: 'Бексултан', rate: 3 },
]);

// "Азиза, учись лучше"
// "Бексултан, учись лучше"