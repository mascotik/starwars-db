const apiBaseImage: string = 'https://starwars-visualguide.com/assets/img';

export function getPersonImageUrl(id: number): string {
  return `${apiBaseImage}/characters/${id}.jpg`;
}

export function getStarShipImageUrl(id: number): string {
  return `${apiBaseImage}/starships/${id}.jpg`;
}

export function getPlanetImageUrl(id: number): string {
  return `${apiBaseImage}/planets/${id}.jpg`;
}
