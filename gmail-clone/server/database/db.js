import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD; 

const Connection = () => {
    const DB_URI = `mongodb://himanshuiitg27:dsagym@ac-clurvnv-shard-00-00.sovjqs8.mongodb.net:27017,ac-clurvnv-shard-00-01.sovjqs8.mongodb.net:27017,ac-clurvnv-shard-00-02.sovjqs8.mongodb.net:27017/?ssl=true&replicaSet=atlas-njm4wz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=gmailclone`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        mongoose.set('strictQuery', false);
        console.log('Database connected sucessfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;