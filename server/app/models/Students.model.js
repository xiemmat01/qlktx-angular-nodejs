export default (sequelize, Sequelize) => {
    const Student = sequelize.define(
        "sinhvien",
        {
            HoTen: { type: Sequelize.STRING(155), allowNull: false },
            NgaySinh: { type: Sequelize.STRING(10), allowNull: false },
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
            Hinh: { type: Sequelize.STRING, allowNull: true },
            MaLop: { type: Sequelize.STRING(10), allowNull: false },
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
        { tableName: "sinhvien", modelName: "Students" }
    );
    Student.associate = (models) => {
        Student.belongsTo(models.Class, {
            foreignKey: "MaLop",
        });
    };
    return Student;
};
// export default SinhvienModel;
