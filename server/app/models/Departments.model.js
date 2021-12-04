const DepartmentsModel = (sequelize, Sequelize) => {
    const Department = sequelize.define(
        "khoa",
        {
            MaKhoa: { type: Sequelize.STRING(10), allowNull: false },
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
        { tableName: "khoa" }
    );

    return Department;
};
export default DepartmentsModel;
