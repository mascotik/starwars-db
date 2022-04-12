export default class Planet {
  name: string;

  diameter: string;

  rotation_period: string;

  orbital_period: string;

  gravity: string;

  population: string;

  climate: string;

  terrain: string;

  imageUrl: string;

  constructor(planet : Partial<Planet> | undefined | null) {
    this.name = planet?.name || '';
    this.diameter = planet?.name || '';
    this.rotation_period = planet?.rotation_period || '';
    this.orbital_period = planet?.orbital_period || '';
    this.gravity = planet?.gravity || '';
    this.population = planet?.population || '';
    this.climate = planet?.climate || '';
    this.terrain = planet?.terrain || '';
    this.imageUrl = planet?.imageUrl || '';
  }
}
