//creating a post
module.exports = function (sequelize, DataTypes) {
  var createPost = sequelize.define("createPost", {
    post_title: { 
      //type of data and validation for each column in the table
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userID: DataTypes.INTEGER
  },{
    timestamps: false
  });
  return createPost;
};






