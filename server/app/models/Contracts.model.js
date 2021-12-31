export default (sequelize, Sequelize) => {
	const Contracts = sequelize.define(
		"Hopdong",
		{
			MaHopDong: {
				type: Sequelize.STRING(10),
				allowNull: false,
				primaryKey: true,
			},
			MaNV: {
				type: Sequelize.STRING(10),
				allowNull: false,
			},
			Mssv: {
				type: Sequelize.STRING(10),
				allowNull: false,
			},
			MaP: {
				type: Sequelize.STRING(10),
				allowNull: false,
			},
			NgayTaoLap: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},

			NgayBatDau: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},
			NgayKetThuc: {
				type: Sequelize.DATE,
				allowNull: false,
			},
		},
		{ tableName: "Hopdong", modelName: "Contracts" },
	);
	Contracts.associate = (models) => {
		Contracts.belongsTo(models.Employees, {
			foreignKey: "MaNV",
		});
		Contracts.belongsTo(models.Students, {
			foreignKey: "Mssv",
		});
		Contracts.belongsTo(models.Rooms, {
			foreignKey: "MaP",
		});
	};
	return Contracts;
};
