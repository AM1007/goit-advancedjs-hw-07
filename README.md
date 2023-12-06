## Task 1

The `Student` class, which includes three properties: `name`, `age`, and `grade`. Instead of declaring these properties in the class body, then in the constructor, and finally assigning them values, write a concise initialization.

```ts
class Student {
  public name: string;
  public age: number;
  public grade: string;

  constructor(name: string, age: number, grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}
```

---

## Task 2

Your task will involve creating two classes - Employee and Manager.

The Employee class should include:

- A property named `name`, which will be accessible to everyone.
- A property named `department`, which will only be accessible within the Employee class.
- A property named `salary`, which will be accessible only within the Employee class and its subclasses.
  The Manager class should be a subclass of the Employee class.

You need to implement a constructor in the Manager class that calls the superclass constructor and increases the salary by 10000.

Ваше завдання полягатиме у створенні двох класів – Employee та Manager.

```ts
class Employee {
  // Fill in the access modifiers
  name: string;
  department: string;
  salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails() {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  // Implement the constructor and increase salary by 10000
}
```

---

## Task 3

You are creating a game where there are characters with different roles. Right now, you're working on the Wizard class, which should implement two interfaces - ICharacter and ISpellCaster.

Define the interfaces ICharacter and ISpellCaster in a way that aligns with the requirements of the Wizard class. The ICharacter interface should include properties like name and level, and even methods like introduce and levelUp. The ISpellCaster interface should include the castSpell method.

```ts
// implementation of the Wizard class
class Wizard implements ICharacter, ISpellCaster {
  constructor(
    public name: string,
    public level: number
  ) {
    if (this.level < 1) {
      throw new Error("Level too low");
    }
  }

  introduce(phrase: string): void {
    console.log(phrase + ", " + this.name);
  }

  castSpell(): void {
    console.log("Casting a spell, behold my power!");
  }

  levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

// class testing
const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp(); // Level up! New level is 16
```

---

# Task 4

In this task, your goal is to implement a life scenario where a person, a key, and a house interact with each other.

Key: Create a `Key` class. It should have a private property, signature, which is generated randomly when an object of this class is created (e.g., Math.random()). This class should also have a method, getSignature, which returns the value of the signature property.

Person: Create a `Person` class. The constructor of this class takes an object of the `Key` class and stores it in a private property, key. The `Person` class should have a method, getKey, which returns the stored key.

House: Create an abstract class, `House`. This class has two properties: door, which can be open (true) or closed (false), and key, which stores an object of the `Key` class. This class should also have a method, comeIn, which adds an object of the `Person` class to the tenants array if the door is open. Your abstract class `House` should also have an abstract method OpenDoor, which takes an object of the `Key` class.

MyHouse: Create a class, `MyHouse`, which inherits from the abstract class `House`. Implement the openDoor method in this class. If the key passed to this method matches the key stored as key, then the door opens.

After implementing all the classes, create objects for each class, and try to reproduce a scenario where a person comes home.

For example, here's how:

```ts
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);
```
