import db from "../models/sequelize.js";

const Department = db.Departments;
const Op = db.Sequelize.Op;

export const create = async (req, res) => {
	console.log(req.body);
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	const department = {
		MaKhoa: req.body.makhoa,
		TenKhoa: req.body.tenkhoa,
	};

	await Department.findOrCreate({
		where: { MaKhoa: department.MaKhoa },
		defaults: department,
	})
		.then(([data, create]) => {
			if (create) {
				res.send(data);
			} else {
				res.send({
					message: "Mã khoa đã tồn tại! Không thể thêm mới khoa.",
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Có lỗi, không thêm được khoa!",
			});
		});
};

export const update = (req, res) => {
	const id = req.params.id;
	const department = {};
	Department.update(department, {
		where: { MaKhoa: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Cập nhật khoa thành công" });
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
	Department.destroy({
		where: { MaKhoa: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Xóa khoa thành công" });
			} else {
				res.send({
					message: `Không thể Xóa khoa với id=${id}. Có thể id này không tồn tại`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Có lổi, Không thể Xóa khoa với id=" + id,
			});
		});
};

export const findAll = (req, res) => {
	Department.findAll()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send(
				err.message || "Có lỗi, không tìm thấy dữ liệu!",
			);
		});
};
