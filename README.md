# TechNova Backend API

Backend REST API cho ứng dụng TechNova E-commerce.

## 🚀 Cài đặt

```bash
npm install
```

## 📝 Cấu trúc Project

```
TechNova-BE/
├── server.js           # Main server file
├── data/              # Mock data (tạm thời)
│   ├── mockProducts.js
│   ├── mockNews.js
│   ├── mockBanners.js
│   ├── mockCategories.js
│   ├── mockDeals.js
│   ├── mockTestimonials.js
│   └── mockFeatures.js
├── .env               # Environment variables
└── package.json
```

## 🏃 Chạy Server

### Development mode (với nodemon):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

Server sẽ chạy trên: `http://localhost:5000`

## 📡 API Endpoints

### Products
- `GET /api/products` - Lấy tất cả sản phẩm
- `GET /api/products?category=smartphone` - Lọc theo category
- `GET /api/products?isFlashSale=true` - Lấy sản phẩm Flash Sale
- `GET /api/products/:slug` - Lấy chi tiết sản phẩm

### News
- `GET /api/news` - Lấy tất cả tin tức
- `GET /api/news?featured=true` - Lấy tin nổi bật
- `GET /api/news/:slug` - Lấy chi tiết tin tức

### Others
- `GET /api/banners` - Lấy banners
- `GET /api/categories` - Lấy danh mục
- `GET /api/deals/flash-sale` - Lấy flash sale deals
- `GET /api/deals/promo-products` - Lấy sản phẩm khuyến mãi
- `GET /api/deals/coupons` - Lấy mã giảm giá
- `GET /api/testimonials` - Lấy testimonials
- `GET /api/features` - Lấy features
- `GET /api/health` - Health check

## 📦 Response Format

Tất cả response đều có format:
```json
{
  "success": true,
  "data": [...],
  "total": 10
}
```

## 🔧 Environment Variables

Tạo file `.env` với nội dung:
```
PORT=5000
NODE_ENV=development
```

## 🚧 TODO

- [ ] Kết nối MongoDB
- [ ] Thêm Authentication & Authorization
- [ ] Thêm CRUD endpoints
- [ ] Thêm validation
- [ ] Thêm error handling middleware
- [ ] Thêm logging
- [ ] Thêm rate limiting
- [ ] Thêm pagination
- [ ] Thêm sorting & filtering
- [ ] Viết unit tests

## 📄 License

MIT
