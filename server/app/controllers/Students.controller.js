import db from "../models/sequelize.js";

const Students = db.Students;
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
	const sinhvien = {
		HoTen: req.body.hoten,
		NgaySinh: req.body.ngaysinh,
		Mssv: req.body.mssv,
		Cmnd: req.body.cmnd,
		DienThoai: req.body.dienthoai,
		DiaChi: req.body.diachi,
		DanToc: req.body.dantoc,
		Phai: req.body.phai,
		MaLop: req.body.malop,
	};
	await Students.findOrCreate({
		where: { Mssv: sinhvien.Mssv },
		defaults: sinhvien,
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

	const sinhvien = {
		HoTen: req.body.hoten,
		NgaySinh: req.body.ngaysinh,
		Cmnd: req.body.cmnd,
		DienThoai: req.body.dienthoai,
		DiaChi: req.body.diachi,
		DanToc: req.body.dantoc,
		Phai: req.body.phai,
		MaLop: req.body.malop,
	};

	await Students.update(sinhvien, {
		where: { Mssv: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Cập nhật sinh viên thành công." });
			} else {
				res.send({
					message: `Thông tin sinh viên không có sự thây đổi.`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					`Có lổi, Không thể cập nhật với Mssv = ${id}.`,
			});
		});
};

export const deleteById = async (req, res) => {
	const id = req.params.id;
	console.log(id);
	await Students.destroy({
		where: { Mssv: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Xóa sinh viên thành công" });
			} else {
				res.send({
					message: `Không thể Xóa sinh viên với Mssv = ${id}. Có thể id này không tồn tại`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					`Có lổi, Không thể Xóa sinh vien với Mssv = ${id}.`,
			});
		});
};

export const findAll = async (req, res) => {
	const hoten = req.body.hoten;
	const mssv = req.body.mssv;
	console.log(mssv);
	let condition = {
		mssv: mssv ? { Mssv: { [Op.eq]: mssv } } : null,
		hoten: hoten ? { HoTen: { [Op.like]: `%${hoten}%` } } : null,
	};

	await Students.findAll({
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

export const findOne = async (req, res) => {
	await Students.findAll({ attributes: ["Mssv"] }).then((data) => {
		res.send(data);
	});
};
export const findClass = async (req, res) => {
	await Class.findAll({ attributes: ["MaLop", "TenLop"] }).then((data) => {
		res.send(data);
	});
};
