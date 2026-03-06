'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.bulkInsert('ArticleTags',[{
        articleId:22,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags',[{
        articleId:23,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags',[{
        articleId:24,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags',[{
        articleId:25,
        tagId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags',[{
        articleId:22,
        tagId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags',[{
        articleId:24,
        tagId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags',[{
        articleId:24,
        tagId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
      queryInterface.bulkInsert('ArticleTags',[{
        articleId:23,
        tagId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }]),
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('ArticleTags')
  }
};
