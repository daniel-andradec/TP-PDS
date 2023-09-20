import { CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model } from 'sequelize';
import { sequelize } from '../../../../database/index';
import { User } from '../../users/models/User';

export interface CustomerInterface extends Model<InferAttributes<CustomerInterface>, InferCreationAttributes<CustomerInterface>> {
    idCustomer: CreationOptional<string>;
    phone: string;
    CPF: string;
    birthDate: string;
    photo: string;
    idUser: string;
    awsKey: string;
    createdAt: CreationOptional<Date>;
    updatedAt: CreationOptional<Date>;
}

export interface CustomerCreationAttributes extends InferCreationAttributes<CustomerInterface> {
    name: string;
    email: string;
    password: string;
}

export const Customer = sequelize.define<CustomerInterface>('customers', {
    idCustomer: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CPF: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthDate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    idUser: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    awsKey: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
});

Customer.belongsTo(User, { foreignKey: 'idUser'});
User.hasOne(Customer, { foreignKey: 'idUser', onDelete: 'CASCADE' });

Customer.sync({alter: false, force: false})
    .then(() => {
    console.log('Customer table was (re)created');
    })
    .catch((err) => console.log(err));
    