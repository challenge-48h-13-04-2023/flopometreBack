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
      },
      image_path: {
        allowNull: true,
        type: Sequelize.STRING,
      },
    });
    return queryInterface.bulkInsert("Questions", [
      {
        value: "Quel est ton réseau social favori?"
      },
      {
        value: "Tu rentres chez toi après une longue journée tu allumes la télé. Que regardes-tu ?"
      },
      {
        value: "Grace à tes talents légendaires tu es invité à participer au Rap Contenders en 2vs2, tu vas affronter le célébrissime duo toulousain : BigFlo et Oli, il faut choisir ton partenaire :"
      },
      {
        value: "Mise en situation : Tu parles tranquillement à ton pote, et là il ne comprend pas ce que tu dis. Soudainement il te balance un « quoi ? ». Que réponds-tu ?"
      },
      {
        value: "Quel est ton streamer préféré ?"
      },
      {
        value: "Mise en situation : Tu vas au cinéma avec ta meuf, tu as le choix entre 4 films. Que choisis-tu ?"
      },
      {
        value: "Quel est ton rappeur français favori ?"
      },
      {
        value: "As-tu déjà fêté ton anniversaire au Mcdo/Quick ?"
      },
      {
        value: "Quel est ton fast-food préféré ?"
      },
      {
        value: "Tes potes te trouvent généralement drôle ?"
      },
      {
        value: "Tu sors de soirée et avec ta bande d'amis vous avez super faim. Que proposes tu ?"
      },
      {
        value: "Quel est ton humoriste favori ? "
      },
      {
        value: "Mise en situation : Tu dois rentrer chez toi après une soirée (très) arrosée, tu dois choisir un taxi. Qui choisis tu ?"
      },
      {
        value: "Tu entames une dépression depuis maintenant quelques mois et tu décides enfin de prendre un psy. Lequel prends tu ?"
      }
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Questions");
  },
};
