import Person from '../models/Person';
import StarShip from '../models/StarShip';

export interface IApiService {
    getResources(url : string) : Promise<any>
    getPerson(id : number) : Promise<Person>
    getStarShip(id : number) : Promise<StarShip>
    getAllPersons() : Promise<Person[]>
}
