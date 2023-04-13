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
    // console.log("1");
    // let test;
    // try {
    // test = (await queryInterface.sequelize.query("select id from Questions where value LIKE 'Quel est ton réseau social favori?'", { type: queryInterface.sequelize.QueryTypes.SELECT }))[0].id;
        
    // } catch (error) {
    //     console.log(error)
    // }
    // console.log(test);
    // console.log("2");
    const resSocialId = (await queryInterface.sequelize.query("select id from Questions where value LIKE 'Quel est ton réseau social favori?'", { type: queryInterface.sequelize.QueryTypes.SELECT }))[0].id;
    return queryInterface.bulkInsert("Reponses", [
      {
        value: "Tiktok",
        nbDePoints: 0,
        idQuestion: resSocialId
    },
      {
        value: "Twitter",
        nbDePoints: 2,
        idQuestion: resSocialId
    },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Questions");
  },
};
