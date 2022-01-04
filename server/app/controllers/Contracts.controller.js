import db from "../models/sequelize.js";

const Contract = db.Contracts;
const Op = db.Sequelize.Op;

export const create = async (req, res) => {
	console.log(req.body);
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	const contract = {
		MaHopDong: req.body.mahopdong,
		MaNV: req.body.manv,
		Mssv: req.body.mssv,
		MaP: req.body.map,
		NgayTaoLap: req.body.ngaylap,
		NgayBatDau: req.body.ngaybatdau,
		NgayKetThuc: req.body.ngayketthuc,
	};

	await Contract.findOrCreate({
		where: { MaHopDong: req.body.mahopdong },
		defaults: contract,
	})
		.then(([data, create]) => {
			if (create) {
				res.send(data);
			} else {
				res.send({
					message:
						"Mã hợp đồng đã tồn tại! Không thể thêm mới hợp đồng.",
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Có lỗi, không thêm được hợp đồng!",
			});
		});
};

export const update = (req, res) => {
	const id = req.params.id;
	const contract = {
		MaNV: req.body.manv,
		Mssv: req.body.mssv,
		MaP: req.body.map,
		NgayTaoLap: req.body.ngaylap,
		NgayBatDau: req.body.ngaybatdau,
		NgayKetThuc: req.body.ngayketthuc,
	};
	Contract.update(contract, {
		where: { MaHopDong: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Cập nhật hợp đồng thành công" });
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
	Contract.destroy({
		where: { MaHopDong: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Xóa hợp đồng thành công" });
			} else {
				res.send({
					message: `Không thể Xóa hợp đồng với id=${id}. Có thể id này không tồn tại`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message ||
					"Có lổi, Không thể Xóa hợp đồng với id=" + id,
			});
		});
};

export const findAll = (req, res) => {
	Contract.findAll()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send(
				err.message || "Có lỗi, không tìm thấy dữ liệu!",
			);
		});
};
