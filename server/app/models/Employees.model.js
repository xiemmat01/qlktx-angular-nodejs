export default (sequelize, Sequelize) => {
	const Employee = sequelize.define(
		"nhanvien",
		{
			MaNV: {
				type: Sequelize.STRING(10),
				allowNull: false,
				primaryKey: true,
			},
			TenNV: { type: Sequelize.STRING(10), allowNull: false },
			DienThoai: { type: Sequelize.STRING(10), allowNull: false },
			Email: {
				type: Sequelize.STRING(110),
				allowNull: false,
				validate: { isEmail: true },
			},
			DiaChi: { type: Sequelize.STRING, allowNull: true },
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
		{ tableName: "nhanvien", modelName: "Employee" },
	);
	Employee.associate = (models) => {
		Employee.hasMany(models.Rooms, {
			foreignKey: "MaNV",
		});
	};
	return Employee;
};
