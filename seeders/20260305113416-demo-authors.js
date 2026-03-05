'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return Promise.all([
        queryInterface.bulkInsert('Authors', [{
        name:'John Smith',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
        name:'Sandra Switch',
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('Authors', [{
        name:'Don Torn',
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    ])   
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Authors', null,{})
  }
};
