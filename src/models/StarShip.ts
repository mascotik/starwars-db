export default class StarShip {
  name: String;

  constructor(starship : Partial<StarShip>) {
    this.name = starship.name ? starship.name : '';
  }
}
