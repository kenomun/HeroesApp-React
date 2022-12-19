import { heroes } from "../data/Heros"

export const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id)

}
