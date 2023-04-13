"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reponses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      value: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nbDePoints: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      idQuestion: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Questions",
          key: "id",
        },
      },
    });
    // return queryInterface.bulkInsert("Reponses", [
    //   {
    //     value: "TODO",
    //     isCorrect: false,
    //   },
    // ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Questions");
  },
};
