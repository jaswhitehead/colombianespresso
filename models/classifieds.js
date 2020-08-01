//creating classifieds add
module.exports = function (sequelize, DataTypes) {
  var Classified = sequelize.define("Classified", {
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
      type: DataTypes.INTEGER,
      min: 0
    },
    user_ID: DataTypes.INTEGER
  });
  return Classified;
};