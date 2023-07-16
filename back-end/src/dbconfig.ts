import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize( process.env.DB_DATABASE as string, process.env.DB_USERNAME as string, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
});



export default sequelize;