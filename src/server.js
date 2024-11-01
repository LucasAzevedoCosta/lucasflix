import express from "express";
import { sequelize } from "./database/index.js";
import { adminJs, adminJsRouter } from "./adiminjs/index.js";
const app = express();
app.use(adminJs.options.rootPath, adminJsRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB conctado com sucesso.');
    });
    console.log(`Server iniciado com sucesso na porta ${PORT}`);
});
