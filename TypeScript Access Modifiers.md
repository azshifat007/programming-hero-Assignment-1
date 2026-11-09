Access modifiers are a fundamental feature of Object-Oriented Programming in TypeScript. They control the visibility of class members, ensuring proper encapsulation and data safety.

TypeScript provides four main modifiers: public, private, protected, and readonly. By default, all class members are public meaning they are accessible from anywhere.

example:

```
class Employee {
  public name: string;
  private salary: number;
  protected department: string;
  readonly employeeId: number;
}
  constructor(name: string, salary: number, dept: string, id: number) {
    this.name = name;
    this.salary = salary;
    this.department = dept;
    this.employeeId = id;
  }

  public getDetails(): string {
    return `${this.name} works in ${this.department}.`;
  }
```
Here private modifier restrict access to the containing class. Attempting to access salary outside Employee will trigger a error also protected allows access within the class and any derived subclasses.

The readonly prevents reassignment after its ran first time.
