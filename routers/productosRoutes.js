import express  from 'express';
import productsControllers from '../controllers/productControles.js';

const route=express.Router();

route.post('/',productsControllers.create);
route.get('/:id',productsControllers.getOne);
route.get('/',productsControllers.getAll);
route.put('/:id',productsControllers.update);
route.delete('/:id',productsControllers.delete);

export default route;