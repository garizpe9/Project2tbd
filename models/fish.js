module.exports = function(sequelize, DataTypes) {
  const fish = sequelize.define("fish", {
    group_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    common_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
    },
    scientific_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    max_size: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    temp_low: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    temp_high: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    ph_low: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    ph_high: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    min_tank: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    aggressive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    schooling: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    min_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      timestamps: false
    },
    ph_high: {
      type: DataTypes.FLOAT,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    tank_level: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    lifespan: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1],
      timestamps: false
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
      timestamps: false
    },
 
  });

  return fish;
};
