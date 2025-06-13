import { MongoClient } from "mongodb";
import 'dotenv/config';

class dbClient{
    constructor(){
        const queryString=`mongodb+srv://${process.env.userDB}:${process.env.PasswordDB}@${process.env.serverDB}/?retryWrites=true&w=majority&appName=ProductCrud`;
        this.client=new MongoClient(queryString);
        this.conectarDB();
    }
    async conectarDB(){
        try {
            await this.client.connect();
            this.db=this.client.db('products');
            console.log('conectado con exito al servidor');
        } catch (e) {
            console.log(e);
        }
    }
}

export default new dbClient;