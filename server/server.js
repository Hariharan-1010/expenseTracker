import express, { urlencoded } from 'express';
import cors from 'cors';
import router from './src/routes/routes.js';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(urlencoded({ extended: true }));
app.use(cors());


app.use("/", router);


app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});