import Person from '../models/Person';
import Planet from '../models/Planet';
import StarShip from '../models/StarShip';

export interface IApiService {
    getResources(url: string): Promise<any>;
    getPerson(id: number): Promise<Person>;
        getAllPersons(): Promise<Person[]>;
    getStarShip(id: number): Promise<StarShip>;
    getPlanet(id: number): Promise<Planet>;

}
