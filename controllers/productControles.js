import productModelsModels from '../models/productModels.js';
class productsControllers {
    constructor() {
    }

    async create(req, res) {
        try {
            console.log("BODY RECIBIDO:", req.body);
            const data = await productModelsModels.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            console.log(e)
            res.status(500).send(e);
        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;
            const data = await productModelsModels.update(id, req.body);
            res.status(200).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async getOne(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const data = await productModelsModels.getOne(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async getAll(req, res) {
        try {
            const data = await productModelsModels.getAll();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            const data = await productModelsModels.delete(id);
            res.status(206).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new productsControllers();