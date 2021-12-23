import db from "../models/sequelize.js";

const Bill = db.ElectricityWaterBills;
const Op = db.Sequelize.Op;

export const create = async (req, res) => {
	console.log(req.body);
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	const bill = {
		MaNV: req.body.manv,
		MaP: req.body.map,
		TongTien: req.body.tongtien,
		ChiSoDienDau: req.body.chisodiendau,
		ChiSoDienCuoi: req.body.chisodiencuoi,
		ChiSoNuocDau: req.body.chisonuocdau,
		ChiSoNuocCuoi: req.body.chisonuoccuoi,
	};

	await Bill.create(bill)
		.then((data) => {
			res.send({ message: "Lưu thông tin hóa đơn thành công!!" });
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Có lỗi, không thêm được hd!",
			});
		});
};

export const update = (req, res) => {
	const id = req.params.id;
	const bill = {
		MaHD: req.body.mahd,
		MaNV: req.body.manv,
		MaP: req.body.map,
		TongTien: req.body.tongtien,
		ChiSoDienDau: req.body.chisodiendau,
		ChiSoDienCuoi: req.body.chisodiencuoi,
		ChiSoNuocDau: req.body.chisonuocdau,
		ChiSoNuocCuoi: req.body.chisonuoccuoi,
	};
	Bill.update(bill, {
		where: { MaHD: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Cập nhật hóa đơn thành công" });
			} else {
				res.send({
					message: `Không thể cập nhật với Mã hóa đơn= ${id}. Có thể Mã hóa đơn này không tồn tại`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Có lổi, Không thể cập nhật với Mã hóa đơn: " + id,
			});
		});
};

export const deleteById = (req, res) => {
	const id = req.params.id;
	console.log(id);
	Bill.destroy({
		where: { MaHD: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Xóa hóa đơn thành công!!" });
			} else {
				res.send({
					message: `Không thể Xóa hóa đơn với Mã hóa đơn: ${id}. Có thể Mã hóa đơn này không tồn tại`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Có lỗi, Không thể Xóa hóa đơn với Mã hóa đơn: " + id,
			});
		});
};

export const findAll = (req, res) => {
	Bill.findAll()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send(
				err.message || "Có lỗi, không tìm thấy dữ liệu!",
			);
		});
};
