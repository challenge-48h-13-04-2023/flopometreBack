"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Resultats", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      prenom: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      nom: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      totalScore: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
    return queryInterface.bulkInsert("Resultats", [
      {
        prenom: "test",
        nom: "test",
        totalScore: 24,
       }
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Resultats");
  },
};
