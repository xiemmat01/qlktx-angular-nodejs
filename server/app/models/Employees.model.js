export default (sequelize, Sequelize) => {
    const Employee = sequelize.define(
        "nhanvien",
        {
            MaNV: { type: Sequelize.STRING(10), allowNull: false },
            TenNV: { type: Sequelize.STRING(10), allowNull: false },
            DienThoai: { type: Sequelize.INTEGER(10), allowNull: false },
            TìnhTrang: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: 0,
            },

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
        { tableName: "nhanvien" }
    );

    return Employee;
};
// export default EmployeesModel;
