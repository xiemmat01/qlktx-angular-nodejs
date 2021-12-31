export default (sequelize, Sequelize) => {
	const Relatives = sequelize.define(
		"ThanNhan",
		{
			MaTN: {
				type: Sequelize.STRING(10),
				allowNull: false,
				primaryKey: true,
			},
			HoTenTN: { type: Sequelize.STRING(155), allowNull: false },
			DienThoai: { type: Sequelize.STRING(10), allowNull: false },
			DiaChi: { type: Sequelize.STRING, allowNull: true },
			Mssv: { type: Sequelize.STRING(10), allowNull: false },
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
		{ tableName: "ThanNhan", modelName: "Relatives" },
	);
	Relatives.associate = (models) => {
		Relatives.belongsTo(models.Students, {
			foreignKey: "Mssv",
		});
	};
	return Relatives;
};
