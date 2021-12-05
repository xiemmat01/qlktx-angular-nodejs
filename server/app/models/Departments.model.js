export default (sequelize, Sequelize) => {
    const Department = sequelize.define(
        "khoa",
        {
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
        { tableName: "khoa", modelName: "Departments" }
    );
    Department.associate = (models) => {
        Department.hasMany(models.Class, { foreignKey: "MaKhoa" });
    };
    return Department;
};
// export default DepartmentsModel;
