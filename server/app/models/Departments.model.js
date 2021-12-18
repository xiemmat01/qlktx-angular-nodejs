export default (sequelize, Sequelize) => {
	const Departments = sequelize.define(
		"Khoa",
		{
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			MaKhoa: {
				type: Sequelize.STRING(10),
				allowNull: false,
				primaryKey: true,
			},
			TenKhoa: { type: Sequelize.STRING(10), allowNull: false },

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
		{ tableName: "Khoa", modelName: "Departments" },
	);

	return Departments;
};
// export default DepartmentsModel;
