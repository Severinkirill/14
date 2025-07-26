class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
    this.attendanceIndex = 0;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = true;
      this.attendanceIndex++;
    } else {
      console.warn("Масив відвідуваності вже заповнений (25 записів).");
    }
  }

  absent() {
    if (this.attendanceIndex < 25) {
      this.attendance[this.attendanceIndex] = false;
      this.attendanceIndex++;
    } else {
      console.warn("Масив відвідуваності вже заповнений (25 записів).");
    }
  }

  getAverageAttendance() {
    if (this.attendanceIndex === 0) {
      return 0;
    }
    const attendedClasses = this.attendance.filter(status => status === true).length;
    return attendedClasses / this.attendanceIndex;
  }

  summary() {
    const avgGrade = this.getAverageGrade();
    const avgAttendance = this.getAverageAttendance();

    if (avgGrade > 90 && avgAttendance > 0.9) {
      return "Молодець!";
    } else if (avgGrade > 90 || avgAttendance > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

const student1 = new Student("Іван", "Петренко", 2003);
const student2 = new Student("Марія", "Коваленко", 2002);
const student3 = new Student("Олег", "Сидоренко", 2004);

console.log("--- Студент 1: Іван Петренко ---");
console.log(`Вік Івана: ${student1.getAge()} років`);
student1.grades.push(95, 88, 92, 97);
console.log(`Оцінки Івана: ${student1.grades}`);
console.log(`Середній бал Івана: ${student1.getAverageGrade().toFixed(2)}`);
for (let i = 0; i < 20; i++) {
  student1.present();
}
for (let i = 0; i < 3; i++) {
  student1.absent();
}
student1.present();
student1.absent();
console.log(`Відвідуваність Івана (перші 5): ${student1.attendance.slice(0, 5)}...`);
console.log(`Середня відвідуваність Івана: ${(student1.getAverageAttendance() * 100).toFixed(2)}%`);
student1.present();
console.log(`Підсумок для Івана: ${student1.summary()}`);

console.log("\n--- Студент 2: Марія Коваленко ---");
console.log(`Вік Марії: ${student2.getAge()} років`);
student2.grades.push(70, 85, 65, 75);
console.log(`Оцінки Марії: ${student2.grades}`);
console.log(`Середній бал Марії: ${student2.getAverageGrade().toFixed(2)}`);
for (let i = 0; i < 15; i++) {
  student2.present();
}
for (let i = 0; i < 10; i++) {
  student2.absent();
}
console.log(`Середня відвідуваність Марії: ${(student2.getAverageAttendance() * 100).toFixed(2)}%`);
console.log(`Підсумок для Марії: ${student2.summary()}`);

console.log("\n--- Студент 3: Олег Сидоренко ---");
console.log(`Вік Олега: ${student3.getAge()} років`);
student3.grades.push(50, 45, 60, 55);
console.log(`Оцінки Олега: ${student3.grades}`);
console.log(`Середній бал Олега: ${student3.getAverageGrade().toFixed(2)}`);
for (let i = 0; i < 5; i++) {
  student3.present();
}
for (let i = 0; i < 20; i++) {
  student3.absent();
}
console.log(`Середня відвідуваність Олега: ${(student3.getAverageAttendance() * 100).toFixed(2)}%`);
console.log(`Підсумок для Олега: ${student3.summary()}`);