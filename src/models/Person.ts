export default class Person {
  name: String;

  constructor(person : Partial<Person>) {
    this.name = person.name ? person.name : '';
  }
}
