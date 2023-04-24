import React, { useState } from 'react';

function Home() {
  const [prisijungimoDuomenys, setPrisijungimoDuomenys] = useState({
    vartotojoVardas: '',
    slaptazodis: '',
  });
  const [pranesimas, setPranesimas] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPrisijungimoDuomenys((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (prisijungimoDuomenys.vartotojoVardas === 'admin' && prisijungimoDuomenys.slaptazodis === 'admin') {
      window.location.href = '/registracija';
    } else {
      setPranesimas('Neteisingi prisijungimo duomenys.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="vartotojoVardas">Vartotojo vardas:</label>
      <input
        type="text"
        id="vartotojoVardas"
        name="vartotojoVardas"
        value={prisijungimoDuomenys.vartotojoVardas}
        onChange={handleChange}
      />

      <label htmlFor="slaptazodis">Slaptažodis:</label>
      <input
        type="password"
        id="slaptazodis"
        name="slaptazodis"
        value={prisijungimoDuomenys.slaptazodis}
        onChange={handleChange}
      />

      <button type="submit">Prisijungti</button>

      {pranesimas && <p>{pranesimas}</p>}
    </form>
  );
}

export default Home;
