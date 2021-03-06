export default (sequelize, Sequelize) => {
	const ElectricityWaterBills = sequelize.define(
		"HDDienNuoc",
		{
			MaHD: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			MaNV: { type: Sequelize.STRING(10), allowNull: false },
			MaP: { type: Sequelize.STRING(10), allowNull: false },
			TongTien: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
			ChiSoDienDau: { type: Sequelize.INTEGER, allowNull: false },
			ChiSoDienCuoi: { type: Sequelize.INTEGER, allowNull: false },
			ChiSoNuocDau: { type: Sequelize.INTEGER, allowNull: false },
			ChiSoNuocCuoi: { type: Sequelize.INTEGER, allowNull: false },
			NgayTaoLap: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},
			NgayCapNhat: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},
		},
		{
			tableName: "HDDienNuoc",
			modelName: "ElectricityWaterBills",
		},
	);
	ElectricityWaterBills.associate = (models) => {
		ElectricityWaterBills.belongsTo(models.Employees, {
			foreignKey: "MaNV",
		});
		ElectricityWaterBills.belongsTo(models.Rooms, {
			foreignKey: "MaP",
		});
	};
	return ElectricityWaterBills;
};
