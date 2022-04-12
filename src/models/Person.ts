export default class Person {
  name: string;

  imageUrl: string = '';

  birth_year: string = '';

  homeworld: string = '';

  constructor(person : Partial<Person> | undefined = undefined) {
    this.name = person?.name || '';
    this.imageUrl = person?.imageUrl || '';
    this.birth_year = person?.birth_year || '';
    this.homeworld = person?.homeworld || '';
  }
}
