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
        defaultValue: false,
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
    const resSocialId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE 'Quel est ton réseau social favori?'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      )
    )[0].id;
    const emissionId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE 'Quel émission regardes-tu pour te divertir?'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      )
    )[0].id;
    const ballondorId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE 'Qui va gagner le ballon d'or 2023'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      )
    )[0].id;
    const rapContenders = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE 'Un rap contenders en 2 contre 2 se présente, vous n'avez pas de coéquipier.'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      )
    )[0].id;

    return queryInterface.bulkInsert("Reponses", [
      {
        value: "Tiktok",
        nbDePoints: 0,
        idQuestion: resSocialId,
      },
      {
        value: "Twitter",
        nbDePoints: 2,
        idQuestion: resSocialId,
      },
      {
        value: "TPMP",
        nbDePoints: 0,
        idQuestion: emissionId,
      },
      
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Questions");
  },
};
