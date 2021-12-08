export default (sequelize, Sequelize) => {
    const Employee = sequelize.define(
        "NhanVien",
        {
            MaNV: { type: Sequelize.STRING(10), allowNull: false },
            TenNV: { type: Sequelize.STRING(10), allowNull: false },
            DienThoai: { type: Sequelize.STRING(10), allowNull: false },
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
        { tableName: "nhanvien" }
    );

    return Employee;
};

