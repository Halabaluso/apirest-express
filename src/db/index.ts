import { Sequelize } from "sequelize"
const sequelize = new Sequelize('postgresql://dmartindiaz3:gplq1Tt3UDFd@ep-spring-rice-80901885.eu-central-1.aws.neon.tech/test_db?sslmode=require')

export {
    sequelize
}