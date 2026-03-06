'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Author, {
        foreignKey: {
          name: 'AuthorId',
          field: 'author_id'
        }
      })
      this.belongsToMany(models.Tag, {
        foreignKey: 'articleId',
        through:'ArticleTags',
      })
    }
  }
  Article.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    name: DataTypes.STRING,
    slug: DataTypes.STRING,
    image: DataTypes.STRING,
    body: DataTypes.TEXT,
    published: DataTypes.DATE,
    author_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};