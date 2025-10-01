const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000;
const cors = require('cors')

// Importer la connexion mongoDB
require('./db')

// Middleware pour pouvoir parser le json
app.use(cors())
app.use(express.json())

// Intégrer les routes 
const todosRoutes = require('./routes/todosRoutes')

app.use('/api/v1/todos', todosRoutes)

app.get('/', (req, res) => {
    res.send("Il n'y a rien à voir ici")
})

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

// partage de resourece entre différent éléments "cors"
// npm install cors

// CORS (Partage de ressource cross-origin ressource sharing) est un mécanisme qui consiste à transmettre des entêtes HTTP qui déterminent s'il faut ou non bloquer les requêtes à des ressources restreintes sur une page web qui se trouve sur un domaine externe au domaine dont la ressource est originaire.