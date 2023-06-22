var express = require('express');
var router = express.Router();

const data = [
  {
    "id": 1,
    "name": "iPhone 12 Pro",
    "price": 9999,
    "description": "Apple iPhone 12 Pro 256GB",
    "image": "https://m.media-amazon.com/images/I/61HHS0HrjpL._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S21 Ultra",
    "price": 8999,
    "description": "Samsung Galaxy S21 Ultra 128GB",
    "image": "https://m.media-amazon.com/images/I/517xEjy80CL._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 3,
    "name": "Sony PlayStation 5",
    "price": 4999,
    "description": "Sony PlayStation 5 Console",
    "image": "https://m.media-amazon.com/images/I/312BVv-ZK6L._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 4,
    "name": "Canon EOS R5",
    "price": 12999,
    "description": "Canon EOS R5 Mirrorless Camera",
    "image": "https://m.media-amazon.com/images/I/81GJB1O6ItL._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 5,
    "name": "DJI Mavic Air 2",
    "price": 2999,
    "description": "DJI Mavic Air 2 Drone",
    "image": "https://m.media-amazon.com/images/I/61iWo+7IwuL._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 6,
    "name": "Apple MacBook Pro 13",
    "price": 7999,
    "description": "Apple MacBook Pro 13-inch, M1 Chip",
    "image": "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 7,
    "name": "Samsung QLED 4K Smart TV",
    "price": 5999,
    "description": "Samsung QLED 4K Smart TV, 65-inch",
    "image": "https://m.media-amazon.com/images/I/81r+Gcv36qL._AC_SR292,236_QL70_.jpg"
  },
  {
    "id": 8,
    "name": "Bose QuietComfort 35 II",
    "price": 1999,
    "description": "Bose QuietComfort 35 II Wireless Headphones",
    "image": "https://m.media-amazon.com/images/I/51MvBvbXFUL._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 9,
    "name": "Fitbit Versa 3",
    "price": 1299,
    "description": "Fitbit Versa 3 Smartwatch",
    "image": "https://m.media-amazon.com/images/I/519tgFMbTOS._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 10,
    "name": "Nike Air Max 90",
    "price": 799,
    "description": "Nike Air Max 90 Men's Shoes",
    "image": "https://m.media-amazon.com/images/I/61zJ-ehvvnL._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 11,
    "name": "Adidas Ultraboost",
    "price": 1299,
    "description": "Adidas Ultraboost Men's Running Shoes",
    "image": "https://m.media-amazon.com/images/I/71M9pBGXJLL._AC_SR292,236_QL70_.jpg"
  },
  {
    "id": 12,
    "name": "Nintendo Switch",
    "price": 1999,
    "description": "Nintendo Switch Console",
    "image": "https://m.media-amazon.com/images/I/61RtiOhejgL._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 13,
    "name": "GoPro Hero 9 Black",
    "price": 2799,
    "description": "GoPro Hero 9 Black Action Camera",
    "image": "https://m.media-amazon.com/images/I/61Nnte7YEfL._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 14,
    "name": "Microsoft Surface Pro 7",
    "price": 6999,
    "description": "Microsoft Surface Pro 7, i7, 16GB RAM",
    "image": "https://m.media-amazon.com/images/I/61l9RQWIOoL._AC_UL800_FMwebp_QL65_.jpg"
  },
  {
    "id": 15,
    "name": "Xiaomi Mi 11",
    "price": 2999,
    "description": "Xiaomi Mi 11 Smartphone",
    "image": "https://m.media-amazon.com/images/I/612ZCmo3VKL._AC_UL800_FMwebp_QL65_.jpg"
  }
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(data);
});

module.exports = router;
