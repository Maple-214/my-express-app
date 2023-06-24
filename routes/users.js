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

const data2 = {
  slides: [
    { id: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBOBdFe_MJJj7v0fJr5tBiGOS64FfmrMkyEQ&usqp=CAU" },
    { id: 1, image: "https://image.maigoo.com/upload/images/20221101/1404314044_750x498.jpg" },
    { id: 2, image: "https://storage.googleapis.com/pos.shopline.hk/2021/11/onlineshop-vs-marketplace-hero-image.jpg" },
  ],
  category: [
    { id: 0, icon: "https://m15.360buyimg.com/mobilecms/jfs/t1/187640/12/30456/5256/639c2315Ebc95c142/350a8f0c766f5460.png", title: "京东超市" },
    { id: 1, icon: "https://m15.360buyimg.com/mobilecms/jfs/t1/178015/31/13828/6862/60ec0c04Ee2fd63ac/ccf74d805a059a44.png", title: "数码电器" },
    { id: 2, icon: "https://m15.360buyimg.com/mobilecms/jfs/t1/54043/33/19389/4660/62b049dbE3b9aef75/2fcd31afd5d702e4.png", title: "京东新百货" },
    { id: 3, icon: "https://m15.360buyimg.com/mobilecms/jfs/t1/177902/16/13776/5658/60ec0e71E801087f2/a0d5a68bf1461e6d.png", title: "京东生鲜" },
    { id: 4, icon: "https://m15.360buyimg.com/mobilecms/jfs/t1/196472/7/12807/7127/60ec0ea3Efe11835b/37c65625d94cae75.png", title: "京东到家" },
    { id: 5, icon: "https://m15.360buyimg.com/mobilecms/jfs/t1/185733/21/13527/6648/60ec0f31E0fea3e0a/d86d463521140bb6.png", title: "充值缴费" },
    { id: 6, icon: "https://m15.360buyimg.com/mobilecms/jfs/t1/34248/39/16616/4689/62bbbdccE9f11132e/d51caf15f2f412b2.png", title: "附近好店" },
    { id: 7, icon: "https://m15.360buyimg.com/mobilecms/jfs/t1/37709/6/15279/6118/60ec1046E4b5592c6/a7d6b66354efb141.png", title: "PLUS会员" },
    { id: 8, icon: "https://m15.360buyimg.com/mobilecms/jfs/t1/191060/24/12861/6818/60ec11f2E67cf5ee6/c264378678b3cd96.png", title: "京东国际" },
    { id: 9, icon: "https://m15.360buyimg.com/mobilecms/jfs/t1/186882/8/12149/5894/60ec1250E9335241a/b22054613aa8ae75.png", title: "京东拍卖" },
  ],
  shopInfo: "https://www.chuangkit.com/shejixuexi/images/banner2.jpg",
  recommend: [
    {
      'image': 'https://www.imuraya.co.jp/media_images/2019/03/box-azukiba-maccha.jpg',
      'productName': '商品名1',
      'price': '20.0',
      'mallPrice': '30.0',
    },
    {
      'image': 'https://www.calbee.co.jp/common/utility/binout.php?db=products&f=3152',
      'productName': '商品名2',
      'price': '30.0',
      'mallPrice': '35.0',
    },
    {
      'image': 'https://www.asahi-gf.co.jp/products/images/baby/milk/wakodo/gungun/40195890.jpg',
      'productName': '商品名3',
      'price': '40.0',
      'mallPrice': '48.0',
    },
    {
      'image': 'https://item-shopping.c.yimg.jp/i/l/pc-parts_tkm004',
      'productName': '商品名4',
      'price': '60.0',
      'mallPrice': '78.0',
    },
  ],
  advertesPicture:"https://pic40.photophoto.cn/20160910/0017029583521992_b.jpg"
}

/* GET users listing. */
router.get('/goods', function (req, res, next) {
  res.send(data);
});

router.get('/homePageContent', function (req, res, next) {
  res.send(data2);
});


module.exports = router;
