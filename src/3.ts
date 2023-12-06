/*
In this scenario, you are developing a game with characters of different roles. Currently, you are working on the Wizard class, which should implement two interfaces - ICharacter and ISpellCaster.

Define the interfaces ICharacter and ISpellCaster in a way that aligns with the requirements of the Wizard class. The ICharacter interface should include properties like name and level, and even methods like introduce and levelUp. The ISpellCaster interface should include the castSpell method.
*/

/**
 * ICharacter interface
 */
interface ICharacter {
  name: string;
  level: number;

  introduce(phrase: string): void;
  levelUp(): void;
}

/**
 * ISpellCaster interface
 */
interface ISpellCaster {
  castSpell(): void;
}

/**
 * Wizard class implements ICharacter and ISpellCaster
 */
class Wizard implements ICharacter, ISpellCaster {
  constructor(
    public name: string,
    public level: number
  ) {
    if (this.level < 1) {
      throw new Error("Level too low");
    }
  }

  public introduce(phrase: string): void {
    console.log(phrase + ", " + this.name);
  }

  public castSpell(): void {
    console.log("Casting a spell, behold my power!");
  }

  public levelUp(): void {
    this.level++;
    console.log(`Level up! New level is ${this.level}`);
  }
}

/**
 * Wizard instance test
 */
const wizard = new Wizard("Merlin", 15);

wizard.introduce("I am the mighty wizard");
wizard.castSpell();
wizard.levelUp();

export {};
