export default (sequelize, Sequelize) => {
    const Contract = sequelize.define(
        "HopDong",
        {
            MaHopDong: {
                type: Sequelize.STRING(10),
                allowNull: false,
                primaryKey: true,
            },
            MaNV: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            Mssv: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            MaP: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            NgayLap: {
                type: Sequelize.Date,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },

            NgayBatDau: {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.NOW,
            },
            NgayKetThuc: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        },
        { tableName: "SinhVien", modelName: "Students" }
    );
    Student.associate = (models) => {
        Student.belongsTo(models.Class, {
            foreignKey: "MaLop",
        });
    };
    return Student;
};
