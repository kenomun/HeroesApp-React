import { heroes } from '../data/Heros'
export const getHeroByName = ( name = '' ) => {

  name = name.toLowerCase().trim()

  if(name.length === 0) return [];

  return heroes.filter(hero => hero.superhero.toLowerCase().includes( name ))

}
