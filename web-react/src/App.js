import React, { useState, useEffect } from 'react';
import './App.css';
import './Sidebar.css';
import './Main.css';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: 

function App() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  async function handleAddDev(e) {
    e.preveventDefault();
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);

      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required value={github_username} onChange={e => setGithubUsername(e.target.value)}></input>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required value={techs} onChange={e => setTechs(e.target.value)}></input>
          </div>

          <div className="input-group">

            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} onChange={e => setLatitude(e.target.value)}></input>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} onChange={e => setLongitude(e.target.value)}></input>
            </div>

          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/41304633?s=460&v=4" alt="Rodrigo Araújo"/>
              <div className="user-info">
                <strong>Rodrigo Araújo</strong>
                <span>AngularJS, Ionic, Laravel, NodeJS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum nisi at quam auctor tincidunt. Morbi eleifend sollicitudin tortor</p>
            <a href="/">Acesse o perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/41304633?s=460&v=4" alt="Rodrigo Araújo"/>
              <div className="user-info">
                <strong>Rodrigo Araújo</strong>
                <span>AngularJS, Ionic, Laravel, NodeJS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum nisi at quam auctor tincidunt. Morbi eleifend sollicitudin tortor</p>
            <a href="/">Acesse o perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/41304633?s=460&v=4" alt="Rodrigo Araújo"/>
              <div className="user-info">
                <strong>Rodrigo Araújo</strong>
                <span>AngularJS, Ionic, Laravel, NodeJS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum nisi at quam auctor tincidunt. Morbi eleifend sollicitudin tortor</p>
            <a href="/">Acesse o perfil do Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/41304633?s=460&v=4" alt="Rodrigo Araújo"/>
              <div className="user-info">
                <strong>Rodrigo Araújo</strong>
                <span>AngularJS, Ionic, Laravel, NodeJS</span>
              </div>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum nisi at quam auctor tincidunt. Morbi eleifend sollicitudin tortor</p>
            <a href="/">Acesse o perfil do Github</a>
          </li>
        </ul>
      </main>

    </div>
  );
}

export default App;
