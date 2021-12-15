import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Record = sequelize.define('record', {

    Record_Id: {
        autoIncrement: true,
        type: Sequelize.INTEGER(255),
        allowNull: false,
        primaryKey: true
    },

    Record_title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

   // Record_Type: {
    //    type: Sequelize.STRING(20),
    //    allowNull: false
    //},

    RecDate: {
        type: Sequelize.DATE,
        allowNull: false
    },

    Patient_Id: {
        type: Sequelize.INTEGER(255),
        allowNull: false
    },

    

    R_PreExistingCondition: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    R_PrevSurgeries: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    R_Insurance: {
        type: Sequelize.STRING(255),
        allowNull: false
    },

    R_ExtraInfo: {
        type: Sequelize.STRING(255),
        allowNull: false
    }

}, {

    sequelize,
    tableName: 'record',
    timestamps: false,
    indexes: [
        {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "Record_Id" },
            ]
        },
    ]

});

export default Record;