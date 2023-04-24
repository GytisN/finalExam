// import React, { useState, useEffect } from 'react';
// import Header from '../../Header/Header';
// import './style.css';

// function Vartotojai() {
//   const [vartotojai, setVartotojai] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('http://127.0.0.1:3000/api/vartotojai');
//         const data = await response.json();
//         setVartotojai(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchData();
//   }, []);

 
//   const handleRedaguoti = async (id) => {
//     const user = vartotojai.find((user) => user.id === id);
//     const newName = prompt("Įveskite naują vardą:", user.vardas);
//     const newSurname = prompt("Įveskite naują pavardę:", user.pavarde);
//     const newAge = prompt("Įveskite naują amžių:", user.amzius);
//     const newEmail = prompt("Įveskite naują el. paštą:", user.el_pastas);
//     if (newName !== null && newAge !== null && newEmail !== null) {
//       try {
//         const response = await fetch(`http://127.0.0.1:3000/api/vartotojai/${id}`, {
//           method: 'PUT',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({ vardas: newName, pavarde: newSurname, amzius: newAge, el_pastas: newEmail })
//         });
//         const data = await response.json();
//         const updatedVartotojai = vartotojai.map((user) =>
//           user.id === id ? data : user
//         );
//         setVartotojai(updatedVartotojai);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const handleIstrinti = async (id) => {
//     if (window.confirm("Ar tikrai norite ištrinti šį dalyvį?")) {
//       try {
//         await fetch(`http://127.0.0.1:3000/api/vartotojai/${id}`, {
//           method: 'DELETE'
//         });
//         const updatedVartotojai = vartotojai.filter((user) => user.id !== id);
//         setVartotojai(updatedVartotojai);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };
  

//   return (
//     <div>
//       <Header />
//       <h1 className='antraste'>Dalyvių sąrašas</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Vardas, pavardė</th>
//             <th>Amžius</th>
//             <th>El. paštas</th>
//             <th>Veiksmai</th>
//           </tr>
//         </thead>
//         <tbody>
//         {vartotojai.map((vartotojas) => (
//           <tr key={vartotojas.id}>
//             <td>{vartotojas.vardas} {vartotojas.pavarde}</td>
//             <td>{vartotojas.amzius}</td>
//             <td>{vartotojas.el_pastas}</td>
//             <td>
//               <button className="btn_green" onClick={() => handleRedaguoti(vartotojas.id)}>Redaguoti</button>
//               <button className="btn_red" onClick={() => handleIstrinti(vartotojas.id)}>Ištrinti</button>
//             </td>
//           </tr>
//         ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }

// export default Vartotojai;



import React, { useState, useEffect } from 'react';
import Header from '../../Header/Header';
import './style.css';

function Vartotojai() {
  const [vartotojai, setVartotojai] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/vartotojai');
        const data = await response.json();
        const updatedData = data.map((vartotojas) => {
          const gimimoData = new Date(vartotojas.gimimo_data);
          const amzius = new Date().getFullYear() - gimimoData.getFullYear();
          return { ...vartotojas, amzius };
        });
        setVartotojai(updatedData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleRedaguoti = async (id) => {
    const user = vartotojai.find((user) => user.id === id);
    const newName = prompt("Įveskite naują vardą:", user.vardas);
    const newSurname = prompt("Įveskite naują pavardę:", user.pavarde);
    const newBirthdate = prompt("Įveskite naują gimimo datą:", user.gimimo_data);
    const newEmail = prompt("Įveskite naują el. paštą:", user.el_pastas);
    if (newName !== null && newSurname !== null && newBirthdate !== null && newEmail !== null) {
      try {
        const response = await fetch(`http://127.0.0.1:3000/api/vartotojai/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ vardas: newName, pavarde: newSurname, gimimo_data: newBirthdate, el_pastas: newEmail })
        });
        const data = await response.json();
        const gimimoData = new Date(data.gimimo_data);
        const amzius = new Date().getFullYear() - gimimoData.getFullYear();
        const updatedVartotojai = vartotojai.map((user) =>
          user.id === id ? { ...data, amzius } : user
        );
        setVartotojai(updatedVartotojai);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleIstrinti = async (id) => {
    if (window.confirm("Ar tikrai norite ištrinti šį dalyvį?")) {
      try {
        await fetch(`http://127.0.0.1:3000/api/vartotojai/${id}`, {
          method: 'DELETE'
        });
        const updatedVartotojai = vartotojai.filter((user) => user.id !== id);
        setVartotojai(updatedVartotojai);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <Header />
      <h1 className='antraste'>Dalyvių sąrašas</h1>
      <table>
        <thead>
          <tr>
            <th>Vardas, pavardė</th>
            <th>Amžius</th>
            <th>El. paštas</th>
            <th>Veiksmai</th>
          </tr>
        </thead>
        <tbody>
        {vartotojai.map((vartotojas) => (
          <tr key={vartotojas.id}>
            <td>{vartotojas.vardas} {vartotojas.pavarde}</td>
            <td>{vartotojas.amzius}</td>
            <td>{vartotojas.el_pastas}</td>
            <td>
              <button className="btn_green" onClick={() => handleRedaguoti(vartotojas.id)}>Redaguoti</button>
              <button className="btn_red" onClick={() => handleIstrinti(vartotojas.id)}>Ištrinti</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>

    </div>
  );
}

export default Vartotojai;