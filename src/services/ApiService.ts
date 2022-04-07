/* eslint-disable class-methods-use-this */
import Person from '../models/Person';
import StarShip from '../models/StarShip';
import { IApiService } from '../interfaces/IApiService';

export default class ApiService implements IApiService {
  apiBase : string = 'https://swapi.dev/api';

  getAllPersons(): Promise<Person[]> {
    return this.getResources(`${this.apiBase}/people/`);
  }

  getStarShip(id: number): Promise<StarShip> {
    return this.getResources(`${this.apiBase}/starships/${id}/`);
  }

  async getResources(url : string) : Promise<any> {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Could not fetch');
    }
    const jsonData = await res.json();
    return jsonData;
  }

  async getPerson(id : number): Promise<Person> {
    const result : Partial<Person> = await this.getResources(`${this.apiBase}/people/${id}/`);
    const person = new Person(result);
    return person;
  }
}
