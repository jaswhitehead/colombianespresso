// //creating a user
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
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

  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.createPost, {onDelete: "cascade"},);
  };
  User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Classified,{onDelete:"cascade"},);
  };


  return User;
};