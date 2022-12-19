import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../Hooks/useForm'
import { Herocard } from '../components/HeroCard'
import { getHeroByName } from '../helpers/getHeroByName'


export const SearchPage = () => {

  //useNavigate permite enviar parametros a la barra de navegacion
  const navigate = useNavigate();
  //useLocation no muestra donde nos enontramos
  const location = useLocation();

  //query-string dependencia npm para extraer los parametros de la barra url mostrada con useLocation
  const { q = '' } = queryString.parse(location.search)
  const heroes = getHeroByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0

  const {searchText, onInputChange } = useForm({
    searchText: q
  });

  const onSearchSubmit= (event) => {
    event.preventDefault();
    // if (searchText.trim().length <= 1) return;

    navigate(`?q=${ searchText }`);
  };


  return (
    <>
        <h1>Search</h1>
        <hr />

        <div className="row">

          <div className="col-5">
            <h4>Searching</h4>
            <hr />
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text" 
                className="form-control"
                placeholder="Search hero"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />
            </form>

            <button className="btn btn-outline-primary mt-3" onClick={ onSearchSubmit }>
             Search
            </button>
          </div>

          <div className="col-7">
            <h4>Result</h4>
            <hr />

            {/* {
              ( q === '' )
              ? <div className="alert alert-primary">Search a hero</div>
              : (heroes.length === 0)
                && <div className="alert alert-danger">there's no result whit { q }</div>

            } */}

            <div className="alert alert-primary card animate__animated animate__fadeIn" 
               style={{ display: showSearch ? '' : 'none' }}
            >
              Search a hero
            </div>

            <div className="alert alert-danger card animate__animated animate__fadeIn" 
              style={{ display: showError ? '' : 'none' }}
            >
              there's no result whit { q }
            </div>

            {
              heroes.map(hero => (
                <Herocard key={hero.id} {...hero}  />
              ))
            }

    
          </div>
        </div>
    </>
  )
}
