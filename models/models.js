//creating a post
function postCreating(sequelize, DataTypes) {
  var createPost = sequelize.define("Social", {
    post_title: { 
      //type of data and validation for each column in the table
      type: DataTypes.TEXT,
      allowNull: false
    },
    post_body: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userID: DataTypes.INT
  });
  return createPost;
};
//creating classifieds add
function classifiedsCreating(sequelize, DataTypes) {
  var createClassified = sequelize.define("Classified", {
    //type of data and validation for each column in the table
    listing_name: { 
      type: DataTypes.TEXT,
      allowNull: false
    },
    listing_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    listing_location:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    price:{
      type: DataTypes.INT,
      min: 0
    },
    userID: DataTypes.INT
  });
  return createClassified;
};

//creating a user
function userCreating(sequelize, DataTypes) {
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
    userID: DataTypes.INT
  });
  return createUser;
};



// Makes the Chirp Model available for other files (will also create a table)
module.exports = {
  postCreating: postCreating,
  classifiedsCreating: classifiedsCreating,
  userCreating: userCreating
}