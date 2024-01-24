const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");

const app = express();
app.use(express.json());

const librosRouter = require("./routes/libros");

const errorHandler = require("./middleware/errorHandler")

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
    audience: 'http://127.0.0.1:3000/libros',
    issuerBaseURL: 'https://dev-heo684et7qaqpsjk.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

app.use("/libros", autenticacion, librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});

