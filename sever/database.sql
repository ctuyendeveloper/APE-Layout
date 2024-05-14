CREATE DATABASE IF NOT EXISTS `APE`;

USE `APE`;

CREATE TABLE IF NOT EXISTS `PRODUCT` (
    `PRODUCT_ID` int(11) NOT NULL AUTO_INCREMENT,
    `PRODUCT_NAME` varchar(255) NOT NULL,
    `PRODUCT_TONKHO` varchar(255) NOT NULL,
    `PRODUCT_MUCANTOAN` int(11) NOT NULL,
    PRIMARY KEY (`PRODUCT_ID`)
);

INSERT INTO
    `PRODUCT` (
        `PRODUCT_ID`,
        `PRODUCT_NAME`,
        `PRODUCT_TONKHO`,
        `PRODUCT_MUCANTOAN`
    )
VALUES (
        1,
        'Cua Thịt Cà Mau Y7 sống size 0.7-0.9kg/con - DVT: Kg',
        20,
        40
    ),
    (
        2,
        'Cá diêu hồng sông Đà làm sạch đông lạnh size 1-1,5kg/con - DVT: Kg',
        10,
        40
    ),
    (
        3,
        'Phô mai hun khói Solse 100g - DVT: Bịch',
        10,
        40
    );