import { Herocard } from './Herocard';
import { getHeroesBypublisher } from '../helpers'
import { useMemo } from 'react';

export const HeroList = ( publisher ) => {

    const heroes = useMemo(() => getHeroesBypublisher( publisher ), [ publisher ]);

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3' >
        {
            heroes.map( hero => (
                <Herocard key={ hero.id }
                { ...hero }
                />
                    
            ))
        }
    </div>
  )
}
