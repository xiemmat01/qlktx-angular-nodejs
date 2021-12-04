const SinhvienModel = (sequelize, Sequelize) => {
    const Sinhvien = sequelize.define(
        "sinhvien",
        {
            HoTen: { type: Sequelize.STRING(155), allowNull: false },
            NgaySinh: { type: Sequelize.STRING(10), allowNull: false },
            MSSV: { type: Sequelize.STRING(10), allowNull: false },
            CMND: { type: Sequelize.INTEGER(10), allowNull: false },
            DienThoai: { type: Sequelize.STRING(10), allowNull: false },
            DiaChi: { type: Sequelize.STRING, allowNull: true },
            DanToc: {
                type: Sequelize.STRING(50),
                allowNull: false,
                defaultValue: "Kinh",
            },
            Phai: { type: Sequelize.BOOLEAN, allowNull: false },
            Hinh: { type: Sequelize.STRING, allowNull: true },
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
        { tableName: "sinhvien" }
    );

    return Sinhvien;
};
export default SinhvienModel;
