import { heroes } from '../data/Heros'

export const getHeroesBypublisher = ({publisher }) => {


   const validPublishers = [ 'DC Comics', 'Marvel Comics' ];

   if (!validPublishers.includes( publisher )) {
      throw new error( `${ publisher } is not a valid publisher` );
   }

   return heroes.filter(heroe => heroe.publisher === publisher)

}