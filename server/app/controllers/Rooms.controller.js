import db from "../models/sequelize.js";

const Rooms = db.Rooms;
const Op = db.Sequelize.Op;

export const create = (req, res) => {
    console.log(req.body);
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }

    const room = {};

    Rooms.create(room)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Có lỗi, không thêm được sinh viên!",
            });
        });
};

export const update = (req, res) => {
    const id = req.params.id;
    const room = {};
    Rooms.update(room, {
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Cập nhật sinh viên thành công" });
            } else {
                res.send({
                    message: `Không thể cập nhật với id=${id}. Có thể id này không tồn tại`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message || "Có lổi, Không thể cập nhật với id=" + id,
            });
        });
};

export const deleteById = (req, res) => {
    const id = req.params.id;
    console.log(id);
    Rooms.destroy({
        where: { id: id },
    })
        .then((num) => {
            if (num == 1) {
                res.send({ message: "Xóa sinh viên thành công" });
            } else {
                res.send({
                    message: `Không thể Xóa sinh viên với id=${id}. Có thể id này không tồn tại`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Có lổi, Không thể Xóa sinh vien với id=" + id,
            });
        });
};

export const findAll = (req, res) => {
    const hoten = req.body.hoten;
    const mssv = req.body.mssv;

    let condition = {
        mssv: mssv ? { MSSV: { [Op.eq]: mssv } } : null,
        hoten: hoten ? { HoTen: { [Op.like]: `%${hoten}%` } } : null,
    };

    Rooms.findAll({
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
