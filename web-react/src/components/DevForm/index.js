import React, { useState, useEffect } from 'react';

function DevForm({ onSubmit }) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [techs, setTechs] = useState('');

    // useEffect, receptor de alterações para executar funções, 1º parâmetro é a função que será executada, e o segundo quais alterações fazer dispara-lá
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

    async function handleSubmit(e) {
        // Previnindo a ação default do submit do form
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            longitude,
            latitude
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <form onSubmit={handleSubmit}>

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
    );
}

export default DevForm;