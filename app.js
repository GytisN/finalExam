const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'klientas/build')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveris paleistas per portą ${PORT}`);
});

const pool = mysql.createPool({
  connectionLimit: 10,
  host: '127.0.0.1',
  user: 'root',
  password: 'VolvoS40',
  database: 'finalexam',
  port: 3306,
});

pool.getConnection()
  .then((connection) => {
    console.log('Prisijungta prie duomenų bazės!');
    connection.release();
  })
  .catch((err) => {
    console.error('Klaida prisijungiant prie duomenų bazės:', err);
    process.exit(1);
  });

app.get('/api/vartotojai', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM vartotojai');
    res.send(rows);
  } catch (error) {
    console.error('Klaida gavus vartotojų sąrašą:', error);
    res.status(500).send('Serverio klaida');
  }
});

app.post('/api/vartotojai', async (req, res) => {
  const { vardas, pavarde, el_pastas, gimimo_data } = req.body;
  try {
    await pool.query(
      'INSERT INTO vartotojai (vardas, pavarde, el_pastas, gimimo_data) VALUES (?, ?, ?, ?)',
      [vardas, pavarde, el_pastas, gimimo_data]
    );
    res.send(`Vartotojas ${vardas} ${pavarde} sukurtas sėkmingai!`);
  } catch (error) {
    console.error('Klaida kuriant vartotoją:', error);
    res.status(500).send('Serverio klaida');
  }
});

app.put('/api/vartotojai/:id', async (req, res) => {
  const id = req.params.id;
  const { vardas, pavarde, el_pastas, gimimo_data } = req.body;
  try {
    await pool.query(
      'UPDATE vartotojai SET vardas = ?, pavarde = ?, el_pastas = ?, gimimo_data = ? WHERE id = ?',
      [vardas, pavarde, el_pastas, gimimo_data, id]
    );
    res.send(`Vartotojas ${vardas} ${pavarde} atnaujintas sėkmingai!`);
  } catch (error) {
    console.error('Klaida atnaujinant vartotoją:', error);
    res.status(500).send('Serverio klaida');
  }
});

app.delete('/api/vartotojai/:id', async (req, res) => {
  const id = req.params.id;
  try {
    pool.query('DELETE FROM vartotojai WHERE id = ?', id);
    res.send(`Vartotojas su ID ${id} ištrintas sėkmingai!`);
  } catch (error) {
    console.error('Klaida trinant vartotoją:', error);
    res.status(500).send('Serverio klaida');
  }
});

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/klientas/build/index.html'));
});