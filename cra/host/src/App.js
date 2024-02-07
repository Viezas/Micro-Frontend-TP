import BaseLayout from '../../sharedComponent/src/layout/Base';
import Banner from './Components/Banner';
import { useState, useEffect } from 'react';

function App() {
  const [pokemons, setPokemons] = useState([]);

  async function getPokemons() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }

  useEffect(() => {
    getPokemons();
  }, []);

  let pokemonColumns = [];
  pokemons.forEach(pokemon => {
    pokemonColumns.push(
      <tr key={pokemon.name}>
        <td>{pokemon?.name}</td>
        <td>
          <a href={pokemon?.url}>{pokemon?.url}</a>
        </td>
      </tr>,
    );
  });

  return (
    <BaseLayout client={'Host'}>
      <Banner title={'Banniere image'}></Banner>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>{pokemonColumns}</tbody>
      </table>
    </BaseLayout>
  );
}
export default App;
