module.exports = (sequelize: any, DataTypes : any) => {
 const User = sequelize.define("User", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
 });

 return User;
};