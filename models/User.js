module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.INTEGER,
    password: DataTypes.INTEGER,
    image: DataTypes.INTEGER,
  }, 
  { timestamps: false,
    tableName: 'Users',
  });
  
  return User;
};