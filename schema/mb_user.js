/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mb_user', {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    mobile: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nick: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    avatar: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'mb_user',
    timestamps: false
  });
};
