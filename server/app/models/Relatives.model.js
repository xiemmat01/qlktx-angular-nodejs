export default (sequelize, Sequelize) => {
	const Relatives = sequelize.define(
		"ThanNhan",
		{
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			MaTN: {
				type: Sequelize.STRING(10),
				allowNull: false,
				primaryKey: true,
			},
			HoTenTN: { type: Sequelize.STRING(155), allowNull: false },
			DienThoai: { type: Sequelize.STRING(10), allowNull: false },
			DiaChi: { type: Sequelize.STRING, allowNull: true },
			Mssv: { type: Sequelize.STRING(10), allowNull: false },
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
		{ tableName: "ThanNhan", modelName: "Relatives" },
	);
	Relatives.associate = (models) => {
		Relatives.belongsTo(models.Students, {
			foreignKey: "Mssv",
		});
	};
	return Relatives;
};
