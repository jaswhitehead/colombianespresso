// //creating a user
module.exports = function (sequelize, DataTypes) {
  var createUser = sequelize.define("User", {
    username: { 
      //type of data and validation for each column in the table
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userID: DataTypes.INTEGER
  });
  return createUser;
};