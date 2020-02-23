import React, { useState, useEffect } from 'react';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api'

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação.
// Propriedade: Informações que um componente PAI passa para o componente FILHO
// Estado: 

function App() {

  // Estados: nome da variável, função para setar o valor da mesma, e valor inicial
  const [devs, setDevs] = useState([]);

  async function handleAddDev(data) {

    const response = await api.post('/devs', data)

    console.log(response.data);

    // Adicionando no array (NÃO USAR PUSH)
    setDevs([...devs, response.data]);
  }

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');
      setDevs(response.data);

    }

    loadDevs();
  }, [])

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>

    </div>
  );
}

export default App;
