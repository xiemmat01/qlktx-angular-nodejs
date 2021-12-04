const ClassModel = (sequelize, Sequelize) => {
    const Class = sequelize.define(
        "lop",
        {
            MaLop: { type: Sequelize.STRING(10), allowNull: false },
            TenLop: { type: Sequelize.STRING(10), allowNull: false },
            SoNguoi: { type: Sequelize.INTEGER(10), allowNull: false },
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
        { tableName: "lop" }
    );

    return Class;
};
export default ClassModel;
