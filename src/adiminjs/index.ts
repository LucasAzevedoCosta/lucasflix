import AdminJs from "adminjs";
import AdminJsExpress from "@adminjs/express";
import AdminJsSequelize from  "@adminjs/sequelize";
import { sequelize } from "../database/index.js";

AdminJs.registerAdapter(AdminJsSequelize)

export const adminJs = new AdminJs({
  databases: [sequelize],
  rootPath: "/admin",
})

export const adminJsRouter = AdminJsExpress.buildRouter(adminJs)