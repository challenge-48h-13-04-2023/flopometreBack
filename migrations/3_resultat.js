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
        prenom: "Michel",
        nom: "Floppeur",
        totalScore: 98,
       },
       {
        prenom: "Yvick",
        nom: "Letexier",
        totalScore: 6,
       },
       {
        prenom: "Jonathan",
        nom: "Cohen",
        totalScore: 16,
       },
       {
        prenom: "Franch",
        nom: "Dubosc",
        totalScore: 62,
       },
       {
        prenom: "Asterion",
        nom: "Lebon",
        totalScore: 45,
       },
       {
        prenom: "Dylan",
        nom: "CulJaune",
        totalScore: 38,
       },
       {
        prenom: "Tibo",
        nom: "Inshape",
        totalScore: 90,
       },
       {
        prenom: "Ismaël",
        nom: "Hacquin",
        totalScore: 4,
       },
       {
        prenom: "Nicolas",
        nom: "Chatain",
        totalScore: 5,
       },
       {
        prenom: "Nino",
        nom: "Didier",
        totalScore: 6,
       },
       {
        prenom: "Jaleel",
        nom: "Aouadj",
        totalScore: 7,
       }
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Resultats");
  },
};
