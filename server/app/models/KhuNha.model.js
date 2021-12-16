export default (sequelize, Sequelize) => {
	const Houses = sequelize.define(
		"khunha",
		{
			MaKhu: { type: Sequelize.STRING(10), allowNull: false },
			MaNV: { type: Sequelize.STRING(10), allowNull: false },
			TenKhu: { type: Sequelize.STRING(10), allowNull: false },
			Ngay_them_moi: {
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW,
			},
			Ngay_cap_nhat: {
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
