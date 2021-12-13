export default (sequelize, Sequelize) => {
    const ElectricityWaterBills = sequelize.define(
        "HDDienNuoc",
        {
            MaHD: {
                type: Sequelize.STRING(10),
                allowNull: false,
                primaryKey: true,
            },
            MaNV: { type: Sequelize.STRING(10), allowNull: false },
            MaP: { type: Sequelize.STRING(10), allowNull: false },
            TongTien: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
            ChiSoDien: { type: Sequelize.INTEGER, allowNull: false },
            ChiSoNuoc: { type: Sequelize.INTEGER, allowNull: false },
            Ngay_tao_lap: {
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
        {
            validate: {
                checkElectricityBill: () => {
                    if (this.ChiSoDienDau > this.ChiSoDienCuoi) {
                        throw ERROR(
                            "Chỉ số điện đầu phải nhỏ hơn chỉ số điện cuối."
                        );
                    }
                },
                checkWaterBill: () => {
                    if (this.ChiSoNuocDau > this.ChiSoNuocCuoi) {
                        throw ERROR(
                            "Chỉ số nước đầu phải nhỏ hơn chỉ số nước cuối."
                        );
                    }
                },
            },
        },
        { tableName: "HDDienNuoc", modelName: "ElectricityWaterBills" }
    );
    ElectricityWaterBills.associate = (models) => {
        ElectricityWaterBills.belongsTo(models.Employees, {
            foreignKey: "MaNV",
        });
        ElectricityWaterBills.hasOne(models.Rooms, {
            foreignKey: "MaP",
        });
    };
    return ElectricityWaterBills;
};
