function multiplyValue(value: number, multiplier: number = 2): number {

    return value * multiplier;

}





function processInput(input:  string | number | boolean): string | number{

if (typeof input === "string") {
    return input.trim().toLowerCase();
  }

  if (typeof input === "number") {
    return input * 10;
  }

  return input ? "Active" : "Inactive";


}






function formatCoordinate(coordinate: readonly [number, number, string]): string{

  const [latitude, longitude, locationName] = coordinate;
  return `Location: ${locationName} (${latitude}, ${longitude})`;

}






function concatenateArrays<T>(arrays: T[][]): T[] {
  const combined: T[] = [];

  for (const current of arrays) {
    for (const item of current) {
      combined.push(item);
    }
  }

  return combined;
}






interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  let result: Course[] = [];

  for (let i = 0; i < courses.length; i++) {
    let course = courses[i];
    if (course.isPublished == true) {
      if (course.students >= minStudents) {
        result.push(course);
      }
    }
  }

  return result;
}






function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const result: T[K][] = [];

  for (const item of items) {
    if (key in item) {
      result.push(item[key]);
    }
  }

  return result;
}





class Employee {
  constructor(protected name: string, private baseSalary: number) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}





function validateAgeAsync(age: number): Promise<string> {
  if (age < 18) {
    throw new Error("Access Denied: Must be 18 or older");
  }

  await new Promise<void>((resolve) => {
    setTimeout(resolve, 1000);
  });

  return "Access Granted";
}



