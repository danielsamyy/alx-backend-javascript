interface Teacher {
  readonly firstName: string;
  readonly fullTimeEmployee: boolean;
  lastName: string;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string) {
  return `${firstName[0]}. ${lastName}`;
}

interface Student {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements Student {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}
const st1 = new StudentClass("first", "last");
console.log(st1);
console.log(st1.workOnHomework());
console.log(st1.displayName());
