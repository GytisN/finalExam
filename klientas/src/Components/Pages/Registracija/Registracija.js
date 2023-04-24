// import React, { useState } from 'react';
// import Header from '../../Header/Header';
// import axios from 'axios';
// import './style.css'

// function Registracija() {
//   const [vardas, setVardas] = useState('');
//   const [pavarde, setPavarde] = useState('');
//   const [elPastas, setElPastas] = useState('');
//   const [amzius, setAmzius] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://127.0.0.1:3000/api/vartotojai', {
//         vardas,
//         pavarde,
//         el_pastas: elPastas,
//         amzius,
//       });

//       console.log(response.data);
//       alert(`Dalyvis ${vardas} ${pavarde} sukurtas sėkmingai!`);
//     } catch (error) {
//       console.error('Klaida kuriant dalyvį:', error);
//       alert('Įvyko klaida. Prašome pabandyti dar kartą.');
//     }
//   };

//   return (
    
//     <div className="container">
//   <Header />
//   <h2>Registruoti naują dalyvį:</h2>
//   <form onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="vardas">Vardas:</label>
//       <input
//         type="text"
//         id="vardas"
//         value={vardas}
//         onChange={(event) => setVardas(event.target.value)}
//       />
//     </div>
//     <div>
//       <label htmlFor="pavarde">Pavardė:</label>
//       <input
//         type="text"
//         id="pavarde"
//         value={pavarde}
//         onChange={(event) => setPavarde(event.target.value)}
//       />
//     </div>
//     <div>
//       <label htmlFor="elPastas">El. paštas:</label>
//       <input
//         type="email"
//         id="elPastas"
//         value={elPastas}
//         onChange={(event) => setElPastas(event.target.value)}
//       />
//     </div>
//     <div>
//       <label htmlFor="amzius">Amžius:</label>
//       <input
//         type="number"
//         id="amzius"
//         value={amzius}
//         onChange={(event) => setAmzius(event.target.value)}
//       />
//     </div>
//     <button type="submit">Registruoti</button>
//   </form>
// </div>

//   );
// }

// export default Registracija;


import React, { useState } from 'react';
import Header from '../../Header/Header';
import axios from 'axios';
import './style.css'

function Registracija() {
  const [vardas, setVardas] = useState('');
  const [pavarde, setPavarde] = useState('');
  const [elPastas, setElPastas] = useState('');
  const [gimimoData, setGimimoData] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:3000/api/vartotojai', {
        vardas,
        pavarde,
        el_pastas: elPastas,
        gimimo_data: gimimoData,
      });

      console.log(response.data);
      alert(`Dalyvis ${vardas} ${pavarde} sukurtas sėkmingai!`);
    } catch (error) {
      console.error('Klaida kuriant dalyvį:', error);
      alert('Įvyko klaida. Prašome pabandyti dar kartą.');
    }
  };

  return (

    <div className="container">
      <Header />
      <h2>Registruoti naują dalyvį:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="vardas">Vardas:</label>
          <input
            type="text"
            id="vardas"
            value={vardas}
            onChange={(event) => setVardas(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pavarde">Pavardė:</label>
          <input
            type="text"
            id="pavarde"
            value={pavarde}
            onChange={(event) => setPavarde(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="elPastas">El. paštas:</label>
          <input
            type="email"
            id="elPastas"
            value={elPastas}
            onChange={(event) => setElPastas(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="gimimoData">Gimimo data:</label>
          <input
            type="date"
            id="gimimoData"
            value={gimimoData}
            onChange={(event) => setGimimoData(event.target.value)}
          />
        </div>
        <button type="submit">Registruoti</button>
      </form>
    </div>
  );
};

export default Registracija;