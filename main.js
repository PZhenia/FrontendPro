'use strict';

function Student(name, surname, yearOfBirth) {
    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;

    this.grades = [];

    this.averageGrade = function () {
        let sum = 0;
        this.grades.forEach(grade => {
            sum += grade;
        })
        return sum/this.grades.length;
    }

    this.age = function () {
        return 2025 - this.yearOfBirth;
    }

    let attendance = [];

    this.present = function() {
        this.attendance = true;
    }
    this.absent = function() {
        this.attendance = false;
    }

    Object.defineProperty(this, 'attendance', {
        get() {
            return attendance;
        },
        set(value) {
            if(attendance.length < 25) {
                attendance.push(value);
            }
        }
    })

    this.summary = function() {
        let attendTrue = [];
        attendance.forEach(attend => {
            if(attend) {
                attendTrue.push(attend);
            }
        })
        let averageAttend = attendTrue.length/attendance.length;

        if (averageAttend > 0.9 && this.averageGrade() > 90) {
            return 'Молодець';
        } else if (averageAttend < 0.9 && this.averageGrade() < 90) {
            return 'Редиска!';
        } else {
            return 'Добре, але можна краще';
        }
    }
}

const student1 = new Student("Анастасія", "Чередніченко", 2006);
const student2 = new Student("Максим", "Шеляг", 2004);
const student3 = new Student("Сергій", "Коваль", 1998);

student1.grades = [100, 100, 100, 100, 100];
student2.grades = [100, 88, 90];
student3.grades = [63, 78, 82, 80];

for (let i = 0; i < 25; i++) {
    student1.present();
}
for (let i = 0; i < 22; i++) {
    student2.present();
}
for (let i = 0; i < 3; i++) {
    student2.absent();
}
for (let i = 0; i < 25; i++) {
    student3.absent();
}

console.log(student1.summary());
console.log(student2.summary());
console.log(student3.summary());

console.log(student1.age());
console.log(student2.age());
console.log(student3.age());