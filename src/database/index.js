import { Sequelize } from "sequelize";
export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'lucasflix_development',
    username: 'lucasflix',
    password: 'lucasflix',
    define: {
        underscored: true
    }
});
