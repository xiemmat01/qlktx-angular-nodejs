export default (sequelize, Sequelize) => {
	const Departments = sequelize.define(
		"Khoa",
		{
			MaKhoa: {
				type: Sequelize.STRING(10),
				allowNull: false,
				primaryKey: true,
			},
			TenKhoa: { type: Sequelize.STRING(100), allowNull: false },

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
		{ tableName: "Khoa", modelName: "Departments" },
	);

	return Departments;
};
// export default DepartmentsModel;
