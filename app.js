import express from 'express';
import 'dotenv/config';
import routesProducts from './routers/productosRoutes.js'
import bodyParser from 'body-parser';

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/products', routesProducts);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`servidor activo en el puerto ${PORT}`);
    })
} catch (e) {
    console.log(e)
}