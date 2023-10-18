//complete this code
class Person {
	constructor(_name,age){
		this._name  = name;
		this.age = age;
	}
	getName(){
		return this._name;
	}
	setAge(age){
		this.age = age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this._name} is studying`);
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this._name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
