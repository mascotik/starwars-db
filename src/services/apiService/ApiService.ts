/* eslint-disable class-methods-use-this */
import { IApiService } from '../../interfaces/IApiService';
import Person from '../../models/Person';
import Planet from '../../models/Planet';
import StarShip from '../../models/StarShip';
import { getPersonImageUrl, getPlanetImageUrl } from './apiGetImageUrp';

export default class ApiService implements IApiService {
  apiBase: string = 'https://swapi.dev/api';

  async getResources(url : string) : Promise<any> {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Could not fetch');
    }
    const jsonData = await res.json();
    return jsonData;
  }

  getAllPersons(): Promise<Person[]> {
    return this.getResources(`${this.apiBase}/people/`);
  }

  getStarShip(id: number): Promise<StarShip> {
    return this.getResources(`${this.apiBase}/starships/${id}/`);
  }

  async getPerson(id : number): Promise<Person> {
    const result : Partial<Person> = await this.getResources(`${this.apiBase}/people/${id}/`);
    const person = new Person(result);
    person.imageUrl = getPersonImageUrl(id);
    return person;
  }

  async getPlanet(id: number): Promise<Planet> {
    const result: Partial<Planet> = await this.getResources(`${this.apiBase}/planets/${id}`);
    const planet = new Planet(result);
    planet.imageUrl = getPlanetImageUrl(id);
    return planet;
  }
}
