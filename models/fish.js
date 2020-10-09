module.exports = function (sequelize, DataTypes) {
  var fish = sequelize.define("fish", {
    common_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    scientific_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
    },
    max_size: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
    },
    temp_low: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
    },
    temp_high: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
    },
    ph_low: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
    },
    ph_high: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
    },
    min_tank: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
    },
    aggressive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1],
    },
    schooling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1],
    },
    min_group: {
      type: DataTypes.Integer,
      allowNull: false,
      len: [1],
    },
    ph_high: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
    },
    tank_level: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
    },
    lifespan: {
      type: DataTypes.Integer,
      allowNull: false,
      len: [1],
    },
  });

  return fish;
};
