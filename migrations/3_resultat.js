"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Resultats", {
      username: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      totalScore: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
    });
    return queryInterface.bulkInsert("Resultats", [
      {
        username: "User 24",
        totalScore: 24,
      },
      {
        username: "User 23",
        totalScore: 23,
      },
      {
        username: "User 22",
        totalScore: 22,
      },
      {
        username: "User 21",
        totalScore: 12,
      },
      {
        username: "User 20",
        totalScore: 21,
      },
      {
        username: "User 19",
        totalScore: 20,
      },
      {
        username: "User 18",
        totalScore: 19,
      },
      {
        username: "User 17",
        totalScore: 18,
      },
      {
        username: "User 16",
        totalScore: 17,
      },
      {
        username: "User 15",
        totalScore: 16,
      },
      {
        username: "User 14",
        totalScore: 11,
      },
      {
        username: "User 13",
        totalScore: 15,
      },
      {
        username: "User 12",
        totalScore: 14,
      },
      {
        username: "User 11",
        totalScore: 13,
      },
      {
        username: "User 10",
        totalScore: 10,
      },
      {
        username: "User 9",
        totalScore: 9,
      },
      {
        username: "User 8",
        totalScore: 8,
      },
      {
        username: "User 7",
        totalScore: 7,
      },
      {
        username: "User 6",
        totalScore: 6,
      },
      {
        username: "User 5",
        totalScore: 5,
      },
      {
        username: "User 4",
        totalScore: 4,
      },
      {
        username: "User 3",
        totalScore: 3,
      },
      {
        username: "User 2",
        totalScore: 2,
      },
      {
        username: "User 1",
        totalScore: 1,
      },
      {
        username: "User 0",
        totalScore: 0,
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Resultats");
  },
};
