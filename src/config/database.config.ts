import {Sequelize} from "sequelize";

const db = new Sequelize('ORM', 'mahmoud', 'moon', {
    host: 'localhost',
    dialect: 'postgres'
});
export default db;
