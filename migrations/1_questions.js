"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Questions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      value: {
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
    return queryInterface.bulkInsert("Questions", [
      {
        value: "Quel est ton réseau social favori?"
      },
      {
        value: "Quel émission regardes-tu pour te divertir?"
      },
      {
        value: "Qui va gagner le ballon d'or 2023?"
      },
      {
        value: "Un rap contenders en 2 contre 2 se présente, vous n'avez pas de coéquipier.\n Qui choisissez-vous parmi ces choix ?"
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Questions");
  },
};
