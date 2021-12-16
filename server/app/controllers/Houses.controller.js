import db from "../models/sequelize.js";

const House = db.Houses;
const Op = db.Sequelize.Op;

export const create = async (req, res) => {
	console.log(req.body);
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	const house = {
		MaKhu: req.body.makhu,
		MaNV: req.body.manv,
		TenKhu: req.body.tenkhu,
	};

	await House.findOrCreate({ where: { MaKhu: house.MaKhu }, defaults: house })
		.then(([data, create]) => {
			if (create) {
				res.send(data);
			} else {
				res.send({
					message:
						"Mã khu nhà đã tồn tại! Không thể thêm mới khu nhà.",
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Có lỗi, không thêm được khu nhà!",
			});
		});
};

export const update = (req, res) => {
	const id = req.params.id;
	const house = {};
	House.update(house, {
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Cập nhật khu nhà thành công" });
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
	House.destroy({
		where: { id: id },
	})
		.then((num) => {
			if (num == 1) {
				res.send({ message: "Xóa khu nhà thành công" });
			} else {
				res.send({
					message: `Không thể Xóa khu nhàn với id=${id}. Có thể id này không tồn tại`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Có lổi, Không thể Xóa khu nhà với id=" + id,
			});
		});
};

export const findAll = (req, res) => {
	House.findAll()
		.then((data) => {
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send(
				err.message || "Có lỗi, không tìm thấy dữ liệu!",
			);
		});
};
