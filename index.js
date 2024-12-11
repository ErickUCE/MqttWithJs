const express = require('express');
const mqtt = require('mqtt');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const PORT = 3000;

// Configurar cliente MQTT
const client = mqtt.connect('mqtt://test.mosquitto.org');

client.on('connect', () => {
    console.log('Conectado al broker MQTT');
    client.publish('erick/mensaje', 'Hi, I am Erick. MQTT with Js');
});

client.on('message', (topic, message) => {
    console.log(`Mensaje recibido de ${topic}: ${message.toString()}`);
});

// Configurar Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Servir la página web
app.get('/', (req, res) => {
    res.send('<h1>Hi, I am Erick. MQTT with Js</h1>');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
