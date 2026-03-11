const express = require('express');
const { Pool } = require('pg');
const redis = require('redis');
const fs = require('fs');

const app = express();
const port = 3000;

// Connexion PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST || 'postgres',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'appdb',
  port: 5432
});

// Connexion Redis
const redisClient = redis.createClient({
  url: `redis://${process.env.REDIS_HOST || 'redis'}:6379`
});

redisClient.connect()
  .then(() => console.log("Connected to Redis"))
  .catch(err => console.error("Redis error", err));

// Route API - API
app.get('/health', (req, res) => {
  res.json({ status: "OK" });
});

// Route API - PostgreSQL
app.get('/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route API - Redis
app.get('/redis', async (req, res) => {
  try {
    const pingResponse = await redisClient.ping();
    res.json({ status: "OK", message: pingResponse });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route API - Services VM
app.get('/services', (req, res) => {
  try {
    const data = fs.readFileSync('/app/shared/services.json', 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    console.error("Erreur de lecture du fichier :", err);
    res.status(500).json({ error: "Fichier de services introuvable" });
  }
});

// IL NE DOIT Y AVOIR QU'UN SEUL app.listen DANS TOUT LE FICHIER !
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});