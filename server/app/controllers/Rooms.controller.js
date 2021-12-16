import db from "../models/sequelize.js";

const Rooms = db.Rooms;
const Op = db.Sequelize.Op;

export const create = async (req, res) => {
	console.log(req.body);
	if (!req.body) {
		res.status(400).send({
			message: "Content can not be empty!",
		});
		return;
	}

	const room = {
		MaP: req.body.map,
		MaNV: req.body.manv,
		MaKhu: req.body.makhu,
		SLToiDa: req.body.sltoida,
		SLDangO: req.body.sldango,
		GhiChuPhong: req.body.ghichu,
		LoaiPhong: req.body.loaiphong,
		TinhTrangPhong: req.body.tinhtrang,
	};

	await Rooms.findOrCreate({ where: { MaP: room.MaP }, defaults: room })
		.then(([data, create]) => {
			if (create) {
				res.send(data);
			} else {
				res.send({
					message: "Mã Phòng đã tồn tại! Không thể thêm mới phòng.",
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Có lỗi, không thêm được phòng!",
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
				res.send({ message: "Cập nhật phòng thành công" });
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
				res.send({ message: "Xóa phòng thành công" });
			} else {
				res.send({
					message: `Không thể Xóa phòngn với id=${id}. Có thể id này không tồn tại`,
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message:
					err.message || "Có lổi, Không thể Xóa phòng với id=" + id,
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
				err.message || "Có lỗi, không tìm thấy dữ liệu!",
			);
		});
};
