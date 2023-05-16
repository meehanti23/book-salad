const Model = require('./Model.js');

class GoogleBook extends Model {
  static get tableName() {
    return 'google_books';
  }

  static get relationMappings() {
    const { User } = require('./index.js');

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'google_books.userId',
          to: 'users.id',
        },
      },
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title'],
      properties: {
        title: { type: 'string' },
      },
    };
  }
}

module.exports = GoogleBook;
