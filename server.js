const express = require('express');
const db = require('./database');

const app = express();
app.use(express.json());
app.use(express.static('.'));

// Save a new contact
app.post('/contact', (req, res) => {
  const { name, email } = req.body;
  db.run(
    'INSERT INTO contacts (name, email) VALUES (?, ?)',
    [name, email],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'Contact saved successfully!' });
    }
  );
});

// Get all contacts
app.get('/contacts', (req, res) => {
  db.all('SELECT * FROM contacts', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.put('/contacts/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  db.run(
    'UPDATE contacts SET name = ?, email = ? WHERE id = ?',
    [name, email, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Contact not found.' });
      }
      res.json({ message: 'Contact updated successfully!' });
    }
  );
});

app.delete('/contacts/:id', (req, res) => {
  const { id } = req.params;

  db.run(
    'DELETE FROM contacts WHERE id = ?',
    [id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) {
        return res.status(404).json({ error: 'Contact not found.' });
      }
      res.json({ message: 'Contact deleted successfully!' });
    }
  );
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
