import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class productModelsModels {
    async create(productData) {
        const products = dbClient.db.collection('ProductsCrud');
        return await products.insertOne(productData);
    }

    async update(id, updateData) {
        try {
            const products = dbClient.db.collection('ProductsCrud');
            const result = await products.updateOne(
                { _id: new ObjectId(id) },
                { $set: updateData }
            );

            if (result.matchedCount === 0) {
                throw new Error('Producto no encontrado');
            }

            return result;
        } catch (error) {
            console.error('Error en update:', error);
            throw error;
        }
    }

    async delete(id) {
        const products = dbClient.db.collection('ProductsCrud');
        return await products.deleteOne({ _id: new ObjectId(id) }); // Corregido a _id
    }

    async getAll() {
        const products = dbClient.db.collection('ProductsCrud');
        return await products.find({}).toArray();
    }

    async getOne(id) {
        const products = dbClient.db.collection('ProductsCrud');
        return await products.findOne({ _id: new ObjectId(id) });
    }
}

export default new productModelsModels();