module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.INTEGER,
    password: DataTypes.INTEGER,
    image: DataTypes.INTEGER,
  }, 
  { timestamps: false,
    tableName: 'Users',
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { as: 'blogPosts', foreignKey: 'userId' });
  };
  
  return User;
};