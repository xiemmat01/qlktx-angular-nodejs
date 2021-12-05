import db from "../models/sequelize.js";

const Class = db.Class;
const Op = db.Sequelize.Op;

export const create = async (req, res) => {
    console.log(req.body);
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    const lop = {
        MaLop: req.body.malop,
        TenLop: req.body.tenlop,
        MaKhoa: req.body.makhoa,
    };
    await Class.findOrCreate({
        where: { Mssv: lop.MaLop },
        defaults: lop,
    })
        .then(([data, create]) => {
            if (create) {
                res.send(data);
            } else {
                res.send({
                    message:
                        "Mã Sinh viên đã tồn tại! Không thể thêm mới sinh viên.",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Có lỗi, không thêm được sinh viên!",
            });
        });
};

export const update = async (req, res) => {
    const id = req.params.id;

    const lop = {
        TenLop: req.body.tenlop,
        MaKhoa: req.body.makhoa,
    };

    await Class.update(lop, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Cập nhật sinh viên thành công." });
            } else {
                res.send({
                    message: `Không thể cập nhật với id=${id}. Có thể id này không tồn tại.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || `Có lổi, Không thể cập nhật với id= ${id}.`,
            });
        });
};

export const deleteById = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    await Class.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Xóa sinh viên thành công" });
            } else {
                res.send({
                    message: `Không thể Xóa sinh viên với id= ${id}. Có thể id này không tồn tại`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    `Có lổi, Không thể Xóa sinh vien với id= ${id}.`,
            });
        });
};

export const findAll = async (req, res) => {
    const hoten = req.body.hoten;
    const mssv = req.body.mssv;

    let condition = {
        mssv: mssv ? { Mssv: { [Op.eq]: mssv } } : null,
        hoten: hoten ? { HoTen: { [Op.like]: `%${hoten}%` } } : null,
    };

    await Class.findAll({
        where:
            condition.hoten || condition.mssv
                ? { [Op.or]: [condition.hoten, condition.mssv] }
                : null,
    })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send(
                err.message || "Có lỗi, không tìm thấy dữ liệu!"
            );
        });
};
