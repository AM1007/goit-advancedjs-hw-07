/*
Your task is to create two classes - Employee and Manager.

The Employee class should include:

- A property named name, which will be accessible to everyone.
- A property named department, which will only be accessible within the Employee class.
- A property named salary, which will be accessible only within the Employee class and its subclasses.
The Manager class should be a subclass of the Employee class.

You need to implement a constructor in the Manager class that calls the superclass constructor and increases the salary by 10000.
*/

class Employee {
  constructor(
    public name: string,
    private department: string,
    protected salary: number
  ) {}
  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Implement the constructor and increase salary by 10000
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary + 10000);
  }
}

export {};
