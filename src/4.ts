class Key {
  private signature: string;
  constructor() {
    this.signature = `${Math.random()}`;
  }

  getSignature(): string {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}
class House {
  public door: boolean = false;
  // key: Key;
  public tenants: Person[] = [];
  constructor(private key: Key) {}

  comeIn(newPerson: Person): void {
    if (this.door) {
      this.tenants.push(newPerson);
    }
  }
  openDoor(key: Key) {}
}
class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
