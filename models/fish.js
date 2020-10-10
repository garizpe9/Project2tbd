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
    lifespan: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1],
      timestamps: false
    },
 
  });

  const fishtable = fish.build({ 
    common_name:"Angelfish-Albino",
    scientific_name: "Pterohphyllum Scarlare",
    max_size: 6,
    temp_low: 75,
    temp_high: 84,
    ph_low: 6,
    ph_high: 7.5,
    min_tank: 55,
    aggressive: 1,
    schooling: 0,
    min_group: 1,
    tank_level: "mid",
    lifespan: 10
  })
  fishtable.save()
  return fish;
};
