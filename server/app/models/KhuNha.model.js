export default (sequelize, Sequelize) => {
	const Houses = sequelize.define(
		"khunha",
		{
			MaKhu: {
				type: Sequelize.STRING(10),
				allowNull: false,
				primaryKey: true,
			},
			TenKhu: { type: Sequelize.STRING(10), allowNull: false },
			NgayThemMoi: {
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
		{ tableName: "khunha", modelName: "Houses" },
	);
	Houses.associate = (models) => {
		Houses.hasMany(models.Rooms, {
			foreignKey: "MaKhu",
		});
	};
	return Houses;
};
