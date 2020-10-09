module.exports = function (sequelize, DataTypes) {
  var fish = sequelize.define("fish", {
    common_name: {
      type: DataTypes.STRING,
      allowNull: false,
        len: [1],
    },
    scientific_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    max_size: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
    },
    temp_low: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
    },
    temp_high: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
    },
    ph_low: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
    },
    ph_high: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
    },
    min_tank: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
    },
    aggressive: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
    },
    schooling: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
    },
    ph_high: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
    },ph_high: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
    },ph_high: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1],
    },
  });

  // fish.associate = function(models) {
  //   // We're saying that a Post should belong to an Author
  //   // A Post can't be created without an Author due to the foreign key constraint
  //   fish.belongsTo(models.Author, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return fish;
};


    common_name text NOT NULL,
    scientific_name varchar
    (100) NOT NULL,
    max_size float 
    NOT NULL,
    temp_low FLOAT NOT NULL,
    temp_high FLOAT NOT NULL,
    ph_low FLOAT NOT NULL,
    ph_high FLOAT NOT NULL,
    min_tank FLOAT NOT NULL,
    aggressive BOOLEAN,
    schooling BOOLEAN,
    min_group int NOT NULL,
    tank_level varchar
    (50),
    lifespan int NOT NULL,
    PRIMARY KEY
    (id)
);