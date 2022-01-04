-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 04, 2022 at 07:03 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.3.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_qlktx`
--
CREATE DATABASE IF NOT EXISTS `db_qlktx` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_qlktx`;

-- --------------------------------------------------------

--
-- Table structure for table `hddiennuoc`
--

CREATE TABLE `hddiennuoc` (
  `MaHD` int(11) NOT NULL,
  `MaNV` varchar(10) NOT NULL,
  `MaP` varchar(10) NOT NULL,
  `TongTien` decimal(10,2) NOT NULL,
  `ChiSoDienDau` int(11) NOT NULL,
  `ChiSoDienCuoi` int(11) NOT NULL,
  `ChiSoNuocDau` int(11) NOT NULL,
  `ChiSoNuocCuoi` int(11) NOT NULL,
  `NgayTaoLap` datetime NOT NULL,
  `NgayCapNhat` datetime NOT NULL
) ;

--
-- Dumping data for table `hddiennuoc`
--

INSERT INTO `hddiennuoc` (`MaHD`, `MaNV`, `MaP`, `TongTien`, `ChiSoDienDau`, `ChiSoDienCuoi`, `ChiSoNuocDau`, `ChiSoNuocCuoi`, `NgayTaoLap`, `NgayCapNhat`) VALUES
(1, 'NV002', 'B003', '104000.00', 10, 20, 2, 4, '2022-01-04 10:11:47', '2022-01-04 10:11:47'),
(2, 'NV002', 'A003', '56000.00', 5, 10, 2, 5, '2022-01-04 10:12:10', '2022-01-04 10:12:10');

-- --------------------------------------------------------

--
-- Table structure for table `hopdong`
--

CREATE TABLE `hopdong` (
  `MaHopDong` varchar(10) NOT NULL,
  `MaNV` varchar(10) NOT NULL,
  `Mssv` varchar(10) NOT NULL,
  `MaP` varchar(10) NOT NULL,
  `NgayTaoLap` datetime NOT NULL,
  `NgayBatDau` datetime NOT NULL,
  `NgayKetThuc` datetime NOT NULL
) ;

--
-- Dumping data for table `hopdong`
--

INSERT INTO `hopdong` (`MaHopDong`, `MaNV`, `Mssv`, `MaP`, `NgayTaoLap`, `NgayBatDau`, `NgayKetThuc`) VALUES
('HD001', 'NV002', 'SV006', 'B003', '2022-01-04 09:35:14', '2022-01-04 09:35:14', '2022-07-04 09:35:28'),
('HD002', 'NV002', 'SV001', 'A003', '2022-01-04 09:37:58', '2022-01-04 09:37:58', '2022-12-04 09:38:16'),
('HD003', 'NV002', 'SV004', 'B003', '2022-01-04 09:38:35', '2022-01-04 09:38:35', '2022-07-04 09:38:58');

-- --------------------------------------------------------

--
-- Table structure for table `khoa`
--

CREATE TABLE `khoa` (
  `MaKhoa` varchar(10) NOT NULL,
  `TenKhoa` varchar(100) NOT NULL,
  `NgayThemMoi` datetime NOT NULL,
  `NgayCapNhat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `khoa`
--

INSERT INTO `khoa` (`MaKhoa`, `TenKhoa`, `NgayThemMoi`, `NgayCapNhat`) VALUES
('CNTP', 'Công Nghệ Thực Phẩm', '2021-12-19 07:38:48', '2021-12-19 07:38:48'),
('CNTT', 'Công Nghệ Thông Tin', '2021-12-19 07:38:48', '2021-12-19 07:38:48'),
('KTXNYH', 'Kỹ Thuật Xét Nghiệm Y Học', '2021-12-19 07:38:48', '2021-12-19 07:38:48'),
('LLCT', 'Lý Luận Chính Trị', '2021-12-19 07:38:48', '2021-12-19 07:38:48'),
('QTKD', 'Quản Trị Kinh Doanh', '2021-12-19 07:38:48', '2021-12-19 07:38:48'),
('TCKT', 'Tài Chính Kế Toán', '2021-12-19 07:38:48', '2021-12-19 07:38:48');

-- --------------------------------------------------------

--
-- Table structure for table `khunha`
--

CREATE TABLE `khunha` (
  `MaKhu` varchar(10) NOT NULL,
  `TenKhu` varchar(10) NOT NULL,
  `NgayThemMoi` datetime NOT NULL,
  `NgayCapNhat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `khunha`
--

INSERT INTO `khunha` (`MaKhu`, `TenKhu`, `NgayThemMoi`, `NgayCapNhat`) VALUES
('A', 'Khu A', '2021-12-19 09:36:27', '2021-12-19 09:36:27'),
('B', 'Khu B', '2021-12-19 09:36:27', '2021-12-19 09:36:27');

-- --------------------------------------------------------

--
-- Table structure for table `lop`
--

CREATE TABLE `lop` (
  `MaLop` varchar(10) NOT NULL,
  `TenLop` varchar(100) NOT NULL,
  `MaKhoa` varchar(10) NOT NULL,
  `NgayThemMoi` datetime NOT NULL,
  `NgayCapNhat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lop`
--

INSERT INTO `lop` (`MaLop`, `TenLop`, `MaKhoa`, `NgayThemMoi`, `NgayCapNhat`) VALUES
('CNTP01', 'Công Nghệ Thực Phẩm 1', 'CNTP', '2022-01-02 16:36:09', '2022-01-02 16:36:09'),
('CNTP02', 'Công Nghệ Thực Phẩm 2', 'CNTP', '2022-01-02 16:36:41', '2022-01-02 16:36:41'),
('CNTT01', 'Công Nghệ Thông Tin 1', 'CNTT', '2021-12-22 08:58:14', '2021-12-22 08:58:14'),
('CNTT02', 'Công Nghệ Thông Tin 2', 'CNTT', '2022-01-02 16:35:36', '2022-01-02 16:35:36'),
('LLCT01', 'Lý Luận Chính Trị 1', 'LLCT', '2022-01-02 16:38:14', '2022-01-02 16:38:14'),
('LLCT02', 'Lý Luận Chính Trị 2', 'LLCT', '2022-01-02 16:41:40', '2022-01-02 16:41:40'),
('QTKD01', 'Quản Trị Kinh Doanh 1', 'QTKD', '2022-01-02 17:03:16', '2022-01-02 17:03:16'),
('QTKD02', 'Quản Trị Kinh Doanh 2', 'QTKD', '2022-01-02 17:04:09', '2022-01-02 17:04:09');

-- --------------------------------------------------------

--
-- Table structure for table `nhanvien`
--

CREATE TABLE `nhanvien` (
  `MaNV` varchar(10) NOT NULL,
  `TenNV` varchar(100) NOT NULL,
  `DienThoai` varchar(10) NOT NULL,
  `Email` varchar(110) NOT NULL,
  `DiaChi` varchar(255) DEFAULT NULL,
  `MatKhau` varchar(10) NOT NULL,
  `NgayThemMoi` datetime NOT NULL,
  `NgayCapNhat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nhanvien`
--

INSERT INTO `nhanvien` (`MaNV`, `TenNV`, `DienThoai`, `Email`, `DiaChi`, `MatKhau`, `NgayThemMoi`, `NgayCapNhat`) VALUES
('NV001', 'Nguyễn Thị Cẩm Tú', '0912334654', 'tucam@gmail.com', 'Q5, TP.HCM', '000000', '2021-12-19 09:39:15', '2021-12-19 09:39:15'),
('NV002', 'Phạm Tuấn Kiệt', '949924649', '1711543175@nttu.edu.vn', 'Long An', '123456', '2022-01-02 11:48:30', '2022-01-02 11:48:30');

-- --------------------------------------------------------

--
-- Table structure for table `phong`
--

CREATE TABLE `phong` (
  `MaP` varchar(10) NOT NULL,
  `MaNV` varchar(10) NOT NULL,
  `MaKhu` varchar(10) NOT NULL,
  `SLToiDa` int(6) NOT NULL DEFAULT 6,
  `SLDangO` int(6) NOT NULL,
  `GhiChuPhong` varchar(150) DEFAULT NULL,
  `LoaiPhong` tinyint(1) NOT NULL,
  `TinhTrangPhong` tinyint(1) NOT NULL DEFAULT 0,
  `NgayThemMoi` datetime NOT NULL,
  `NgayCapNhat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `phong`
--

INSERT INTO `phong` (`MaP`, `MaNV`, `MaKhu`, `SLToiDa`, `SLDangO`, `GhiChuPhong`, `LoaiPhong`, `TinhTrangPhong`, `NgayThemMoi`, `NgayCapNhat`) VALUES
('A001', 'NV001', 'A', 6, 0, NULL, 0, 0, '2021-12-19 09:43:15', '2021-12-19 09:43:15'),
('A002', 'NV001', 'A', 6, 0, NULL, 1, 0, '2021-12-19 09:43:15', '2021-12-19 09:43:15'),
('A003', 'NV001', 'A', 6, 1, '', 0, 0, '2021-12-20 07:54:27', '2021-12-20 07:54:27'),
('A004', 'NV001', 'A', 6, 0, '', 1, 0, '2021-12-20 07:57:16', '2021-12-20 07:57:16'),
('A005', 'NV001', 'A', 6, 0, '', 1, 0, '2021-12-21 16:52:59', '2021-12-21 16:52:59'),
('B001', 'NV001', 'B', 6, 0, '', 0, 0, '2021-12-20 08:04:58', '2021-12-20 08:04:58'),
('B002', 'NV001', 'B', 6, 0, '', 0, 0, '2021-12-21 16:44:49', '2021-12-21 16:44:49'),
('B003', 'NV001', 'B', 6, 2, '', 1, 0, '2021-12-21 16:46:26', '2021-12-21 16:46:26'),
('B004', 'NV001', 'B', 6, 0, '', 1, 0, '2021-12-21 16:47:18', '2021-12-21 16:47:18'),
('B005', 'NV001', 'B', 6, 0, '', 1, 0, '2021-12-22 05:21:00', '2021-12-22 05:21:00'),
('B006', 'NV001', 'B', 6, 0, '', 1, 0, '2021-12-22 05:21:27', '2021-12-22 05:21:27');

-- --------------------------------------------------------

--
-- Table structure for table `sinhvien`
--

CREATE TABLE `sinhvien` (
  `HoTen` varchar(155) NOT NULL,
  `NgaySinh` datetime NOT NULL,
  `Mssv` varchar(10) NOT NULL,
  `Cmnd` varchar(10) NOT NULL,
  `DienThoai` varchar(10) NOT NULL,
  `DiaChi` varchar(255) DEFAULT NULL,
  `DanToc` varchar(50) NOT NULL DEFAULT 'Kinh',
  `Phai` tinyint(1) NOT NULL,
  `MaLop` varchar(10) DEFAULT NULL,
  `NgayThemMoi` datetime NOT NULL,
  `NgayCapNhat` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sinhvien`
--

INSERT INTO `sinhvien` (`HoTen`, `NgaySinh`, `Mssv`, `Cmnd`, `DienThoai`, `DiaChi`, `DanToc`, `Phai`, `MaLop`, `NgayThemMoi`, `NgayCapNhat`) VALUES
('Nguyễn Thị Cẩm Tú', '1999-01-01 09:33:06', 'SV001', '0800534534', '0945645645', 'TP.HCM', 'Kinh', 1, 'QTKD01', '2021-12-22 12:01:55', '2021-12-22 12:01:55'),
('Nguyễn Thị Diễm Kiểu', '1998-01-01 09:33:02', 'SV002', '0803453453', '0934565345', 'Cần Thơ', 'Kinh', 1, 'LLCT02', '2021-12-22 16:00:37', '2021-12-22 16:00:37'),
('Phạm Anh Dũng', '1998-01-01 09:33:14', 'SV003', '0800234234', '0923423423', 'Bình Dương', 'Kinh', 0, 'CNTT02', '2021-12-24 15:57:19', '2021-12-24 15:57:19'),
('Phạm Thị Thúy Kiều', '1999-05-18 17:00:00', 'SV004', '0700453343', '0945634563', 'Tiền Giang', 'Kinh', 1, 'CNTT01', '2022-01-02 11:53:42', '2022-01-02 11:53:42'),
('Lê Bá Tuấn Anh', '2000-08-16 17:00:00', 'SV005', '0400674356', '0943344444', 'TP.HCM', 'Kinh', 0, 'CNTP02', '2022-01-02 11:56:48', '2022-01-02 11:56:48'),
('Lê Thị Tâm', '2001-04-16 07:57:29', 'SV006', '0500345343', '0934543345', 'Q4, Tp.HCM', 'Kinh', 1, 'CNTP01', '2022-01-04 09:19:40', '2022-01-04 09:19:40');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hddiennuoc`
--
ALTER TABLE `hddiennuoc`
  ADD PRIMARY KEY (`MaHD`),
  ADD KEY `MaNV` (`MaNV`),
  ADD KEY `MaP` (`MaP`);

--
-- Indexes for table `hopdong`
--
ALTER TABLE `hopdong`
  ADD PRIMARY KEY (`MaHopDong`),
  ADD KEY `MaNV` (`MaNV`),
  ADD KEY `Mssv` (`Mssv`),
  ADD KEY `MaP` (`MaP`);

--
-- Indexes for table `khoa`
--
ALTER TABLE `khoa`
  ADD PRIMARY KEY (`MaKhoa`);

--
-- Indexes for table `khunha`
--
ALTER TABLE `khunha`
  ADD PRIMARY KEY (`MaKhu`);

--
-- Indexes for table `lop`
--
ALTER TABLE `lop`
  ADD PRIMARY KEY (`MaLop`),
  ADD KEY `MaKhoa` (`MaKhoa`);

--
-- Indexes for table `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`MaNV`);

--
-- Indexes for table `phong`
--
ALTER TABLE `phong`
  ADD PRIMARY KEY (`MaP`),
  ADD KEY `MaNV` (`MaNV`),
  ADD KEY `MaKhu` (`MaKhu`);

--
-- Indexes for table `sinhvien`
--
ALTER TABLE `sinhvien`
  ADD PRIMARY KEY (`Mssv`),
  ADD KEY `MaLop` (`MaLop`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hddiennuoc`
--
ALTER TABLE `hddiennuoc`
  MODIFY `MaHD` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `hddiennuoc`
--
ALTER TABLE `hddiennuoc`
  ADD CONSTRAINT `hddiennuoc_ibfk_1` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `hddiennuoc_ibfk_2` FOREIGN KEY (`MaP`) REFERENCES `phong` (`MaP`),
  ADD CONSTRAINT check_sodiencuoi CHECK (ChiSoDienCuoi > ChiSoDienDau),
  ADD CONSTRAINT check_sonuoccuoi CHECK (ChiSoNuocCuoi > ChiSoNuocDau);

--
-- Constraints for table `hopdong`
--
ALTER TABLE `hopdong`
  ADD CONSTRAINT `hopdong_ibfk_1` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `hopdong_ibfk_2` FOREIGN KEY (`Mssv`) REFERENCES `sinhvien` (`Mssv`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `hopdong_ibfk_3` FOREIGN KEY (`MaP`) REFERENCES `phong` (`MaP`) ON DELETE NO ACTION ON UPDATE CASCADE, 
  ADD CONSTRAINT check_ngayketthuc CHECK (NgayKetThuc > NgayBatDau);

--
-- Constraints for table `lop`
--
ALTER TABLE `lop`
  ADD CONSTRAINT `lop_ibfk_1` FOREIGN KEY (`MaKhoa`) REFERENCES `khoa` (`MaKhoa`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `phong`
--
ALTER TABLE `phong`
  ADD CONSTRAINT `phong_ibfk_2` FOREIGN KEY (`MaNV`) REFERENCES `nhanvien` (`MaNV`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `phong_ibfk_3` FOREIGN KEY (`MaKhu`) REFERENCES `khunha` (`MaKhu`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sinhvien`
--
ALTER TABLE `sinhvien`
  ADD CONSTRAINT `sinhvien_ibfk_1` FOREIGN KEY (`MaLop`) REFERENCES `lop` (`MaLop`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
