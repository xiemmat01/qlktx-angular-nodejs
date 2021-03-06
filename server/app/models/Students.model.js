export default (sequelize, Sequelize) => {
	const Student = sequelize.define(
		"SinhVien",
		{
			HoTen: { type: Sequelize.STRING(155), allowNull: false },
			NgaySinh: { type: Sequelize.DATE, allowNull: false },
			Mssv: {
				type: Sequelize.STRING(10),
				allowNull: false,
				primaryKey: true,
			},
			Cmnd: { type: Sequelize.INTEGER(10), allowNull: false },
			DienThoai: { type: Sequelize.STRING(10), allowNull: false },
			DiaChi: { type: Sequelize.STRING, allowNull: true },
			DanToc: {
				type: Sequelize.STRING(50),
				allowNull: false,
				defaultValue: "Kinh",
			},
			Phai: { type: Sequelize.BOOLEAN, allowNull: false },

			MaLop: { type: Sequelize.STRING(10), allowNull: true },
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
		{ tableName: "SinhVien", modelName: "Students" },
	);
	Student.associate = (models) => {
		Student.belongsTo(models.Class, {
			foreignKey: "MaLop",
		});
	};
	return Student;
};
