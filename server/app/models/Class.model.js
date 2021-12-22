export default (sequelize, Sequelize) => {
	const Class = sequelize.define(
		"Lop",
		{
			MaLop: {
				type: Sequelize.STRING(10),
				allowNull: false,
				primaryKey: true,
			},
			TenLop: { type: Sequelize.STRING(100), allowNull: false },
			MaKhoa: { type: Sequelize.STRING(10), allowNull: false },

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
		{ tableName: "Lop", modelName: "Class" },
	);
	Class.associate = (models) => {
		Class.belongsTo(models.Departments, { foreignKey: "MaKhoa" });
	};
	return Class;
};
