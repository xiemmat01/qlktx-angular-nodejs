export default (sequelize, Sequelize) => {
    const Rooms = sequelize.define(
        "Phong",
        {
            MaP: { type: Sequelize.STRING(10), allowNull: false },
            MaNV: { type: Sequelize.STRING(10), allowNull: false },
            SLToiDa: {
                type: Sequelize.INTEGER(6),
                allowNull: false,
                defaultValue: 10,
            },
            SLDangO: { type: Sequelize.INTEGER(6), allowNull: false },
            GhiChuPhong: { type: Sequelize.STRING(150), allowNull: false },
            LoaiPhong: { type: Sequelize.BOOLEAN, allowNull: false },
            TinhTrangPhong: {
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
        { tableName: "phong", modelName: "Rooms" }
    );
    return Rooms;
};
// export default RoomsModel;
