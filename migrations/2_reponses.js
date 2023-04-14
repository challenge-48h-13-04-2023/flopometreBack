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
    const emissionId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%longue journée tu allumes la télé%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      )
    )[0].id;
    const quoifeurId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%Soudainement il te balance un « quoi ? »%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    )[0].id;
    const rapContendersId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%Rap Contenders en 2vs2%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      )
    )[0].id;
    const resSocialId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%Quel est ton réseau social favori?%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      )
    )[0].id;
    const streamerId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%Quel est ton streamer préféré ?%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    )[0].id;
    const cinemaId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%Tu vas au cinéma avec ta meuf%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      )
    )[0].id;
    const rappeurfavId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%rappeur français favori%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    )[0].id;
    const annivmcdoId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%fêté ton anniversaire au Mcdo%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      )
    )[0].id;
    const fastfoodId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%Quel est ton fast-food préféré ?%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    )[0].id;
    const droleId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%te trouvent généralement drôle%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    )[0].id;
    const soireebouffeId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%Tu sors de soirée et avec ta bande d''amis vous avez super faim%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      )
    )[0].id;
    const humouristefavId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%humoriste favori%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    )[0].id;
    const taxiId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%tu dois choisir un taxi%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
      )
    )[0].id;
    const psychologueId = (
      await queryInterface.sequelize.query(
        "select id from Questions where value LIKE '%décides enfin de prendre un psy%'",
        { type: queryInterface.sequelize.QueryTypes.SELECT }
    )
    )[0].id;

    return queryInterface.bulkInsert("Reponses", [
      {
        value: "TPMP",
        nbDePoints: 2,
        idQuestion: emissionId,
      },
      {
        value: "Les Marseillais à *insérer un nom de ville*",
        nbDePoints: 3,
        idQuestion: emissionId,
      },
      {
        value: "Quotidien",
        nbDePoints: 1,
        idQuestion: emissionId,
      },
      {
        value: "Le journal de 20h",
        nbDePoints: 0,
        idQuestion: emissionId,
      },
      {
        value: "Feur!",
        nbDePoints: 1,
        idQuestion: quoifeurId,
      },
      {
        value: "Quoicoubeh",
        nbDePoints: 2,
        idQuestion: quoifeurId,
      },
      {
        value: "Quoicoubaka",
        nbDePoints: 3,
        idQuestion: quoifeurId,
      },
      {
        value: "*Tu répètes ta phrase*",
        nbDePoints: 0,
        idQuestion: quoifeurId,
      },
      {
        value: "Benoît le thug",
        nbDePoints: 2,
        idQuestion: rapContendersId,
      },
      {
        value: "Arouf Gangsta",
        nbDePoints: 3,
        idQuestion: rapContendersId,
      },
      {
        value: "Vojtek",
        nbDePoints: 0,
        idQuestion: rapContendersId,
      },
      {
        value: "Vald",
        nbDePoints: 1,
        idQuestion: rapContendersId,
      },
      {
        value: "Facebook",
        nbDePoints: 3,
        idQuestion: resSocialId,
      },
      {
        value: "Tiktok",
        nbDePoints: 1,
        idQuestion: resSocialId,
      },
      {
        value: "Pinterest",
        nbDePoints: 2,
        idQuestion: resSocialId,
      },
      {
        value: "BeReal",
        nbDePoints: 0,
        idQuestion: resSocialId,
      },
      {
        value: "Doigby",
        nbDePoints: 1,
        idQuestion: streamerId,
      },
      {
        value: "Asterion",
        nbDePoints: 3,
        idQuestion: streamerId,
      },
      {
        value: "Grimkujow",
        nbDePoints: 2,
        idQuestion: streamerId,
      },
      {
        value: "Loupiote3",
        nbDePoints: 0,
        idQuestion: streamerId,
      },
      {
        value: "Les Gardiens de la Galaxie",
        nbDePoints: 0,
        idQuestion: cinemaId,
      },
      {
        value: "Super Mario Bros. le film",
        nbDePoints: 1,
        idQuestion: cinemaId,
      },
      {
        value: "Fast and Furious 46",
        nbDePoints: 2,
        idQuestion: cinemaId,
      },
      {
        value: "Astérix et Obélix : L'Empire du Milieu",
        nbDePoints: 3,
        idQuestion: cinemaId,
      },
      {
        value: "Gims",
        nbDePoints: 1,
        idQuestion: rappeurfavId,
      },
      {
        value: "BigFlo",
        nbDePoints: 2,
        idQuestion: rappeurfavId,
      },
      {
        value: "Hatik",
        nbDePoints: 3,
        idQuestion: rappeurfavId,
      },
      {
        value: "SCH",
        nbDePoints: 0,
        idQuestion: rappeurfavId,
      },
      {
        value: "Oui",
        nbDePoints: 1,
        idQuestion: annivmcdoId,
      },
      {
        value: "Non",
        nbDePoints: 0,
        idQuestion: annivmcdoId,
      },
      {
        value: "Five Guys",
        nbDePoints: 0,
        idQuestion: fastfoodId,
      },
      {
        value: "Flunch",
        nbDePoints: 3,
        idQuestion: fastfoodId,
      },
      {
        value: "Burger King",
        nbDePoints: 1,
        idQuestion: fastfoodId,
      },
      {
        value: "Quick",
        nbDePoints: 2,
        idQuestion: fastfoodId,
      },
      {
        value: "Oui",
        nbDePoints: 0,
        idQuestion: droleId,
      },
      {
        value: "Non",
        nbDePoints: 1,
        idQuestion: droleId,
      },
      {
        value: "On va manger?",
        nbDePoints: 0,
        idQuestion: soireebouffeId,
      },
      {
        value: "Allons fluncher!",
        nbDePoints: 2,
        idQuestion: soireebouffeId,
      },
      {
        value: "J'ai la quoicoudalle!",
        nbDePoints: 3,
        idQuestion: soireebouffeId,
      },
      {
        value: "On va manger un morceau?",
        nbDePoints: 1,
        idQuestion: soireebouffeId,
      },
      {
        value: "Jonathan Cohen",
        nbDePoints: 0,
        idQuestion: humouristefavId,
      },
      {
        value: "Norman",
        nbDePoints: 2,
        idQuestion: humouristefavId,
      },
      {
        value: "Franck Dubosc",
        nbDePoints: 1,
        idQuestion: humouristefavId,
      },
      {
        value: "Kev Adams",
        nbDePoints: 3,
        idQuestion: humouristefavId,
      },
      {
        value: "GMK",
        nbDePoints: 2,
        idQuestion: taxiId,
      },
      {
        value: "Un taxi lambda",
        nbDePoints: 1,
        idQuestion: taxiId,
      },
      {
        value: "Pierre Palmade",
        nbDePoints: 3,
        idQuestion: taxiId,
      },
      {
        value: "Tu rentres à pieds",
        nbDePoints: 0,
        idQuestion: taxiId,
      },
      {
        value: "Dr. Nozman",
        nbDePoints: 2,
        idQuestion: psychologueId,
      },
      {
        value: "Un psy inconnu",
        nbDePoints: 0,
        idQuestion: psychologueId,
      },
      {
        value: "Dr. TiboInShape",
        nbDePoints: 3,
        idQuestion: psychologueId,
      },
      {
        value: "J'abandonne l'idée",
        nbDePoints: 1,
        idQuestion: psychologueId,
      }

    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Questions");
  },
};
