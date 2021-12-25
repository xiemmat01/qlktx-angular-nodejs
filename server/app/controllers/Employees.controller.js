import db from "../models/sequelize.js";

const Employee = db.Employees;
const Op = db.Sequelize.Op;

export const create = async (req, res) => {
	console.log(req.body);
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	const employee = {
		MaNV: req.body.manv,
		TenNV: req.body.tennv,
		DienThoai: req.body.dienthoai,
		Email: req.body.email,
		DiaChi: req.body.diachi,
	};

	await Employee.findOrCreate({
		where: { MaNV: employee.MaNV },
		defaults: employee,
	})
		.then(([data, create]) => {
			if (create) {
				res.send(data);
			} else {
				res.send({
					message:
						"Mã nhân viên đã tồn tại! Không thể thêm mới nhân viên.",
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Có lỗi, không thêm được nhân viên!",
			});
		});
};

export const update = (req, res) => {
	const id = req.params.manv;
	const employee = {
		TenNV: req.body.tennv,
		DienThoai: req.body.dienthoai,
		Email: req.body.email,
		DiaChi: req.body.diachi,
	};
	Employee.update(employee, {
		where: { MaNV: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Cập nhật nhân viên thành công" });
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
	Employee.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Xóa nhân viên thành công" });
			} else {
				res.send({
					message: `Không thể Xóa nhân viênn với id=${id}. Có thể id này không tồn tại`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Có lổi, Không thể Xóa nhân viên với id=" + id,
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

	Employee.findAll({
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
				err.message || "Có lỗi, không tìm thấy dữ liệu!",
			);
		});
};

export const findMaNV = (req, res) => {
	console.log(req.params.manv);
	Employee.findAll({
		where: { MaNV: req.params.manv, DienThoai: req.params.dienthoai },
	})
		.then((data) => res.send(data))
		.catch((err) => {
			res.status(500).send(err.message || "Đăng nhập không thành công");
		});
};
