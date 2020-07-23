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
  });
  return createPost;
};
// //creating classifieds add
// module.exports = function (sequelize, DataTypes) {
//   var createClassified = sequelize.define("Classified", {
//     //type of data and validation for each column in the table
//     listing_name: { 
//       type: DataTypes.TEXT,
//       allowNull: false
//     },
//     listing_description: {
//       type: DataTypes.TEXT,
//       allowNull: false
//     },
//     listing_location:{
//       type: DataTypes.TEXT,
//       allowNull: false
//     },
//     price:{
//       type: DataTypes.INTEGER,
//       min: 0
//     },
//     userID: DataTypes.INTEGER
//   });
//   return createClassified;
// };

// //creating a user
// module.exports = function (sequelize, DataTypes) {
//   var createUser = sequelize.define("User", {
//     username: { 
//       //type of data and validation for each column in the table
//       type: DataTypes.TEXT,
//       allowNull: false
//     },
//     user_password: {
//       type: DataTypes.TEXT,
//       allowNull: false
//     },
//     userID: DataTypes.INTEGER
//   });
//   return createUser;
// };





