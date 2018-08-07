// Import everything from express and assign it to the express variable
import express from 'express';
import createRouter from "./src/routes/index"

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: number =  3000;

// Mount the WelcomeController at the /welcome route
app.use(createRouter());

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});