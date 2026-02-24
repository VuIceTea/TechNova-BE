const mockFlashSaleDeals = [
    {
        id: 'deal-1',
        name: 'Tai nghe chống ồn Sony WH-1000XM5',
        category: 'headphone',
        originalPrice: 9990000,
        salePrice: 5990000,
        discount: 40,
        image: 'https://www.sony.com/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=png-alpha&wid=1200&hei=1200',
        stock: 20,
        sold: 15,
        rating: 4.8,
        reviews: 256
    },
    {
        id: 'deal-2',
        name: 'iPhone 15 Pro Max 256GB Titan Tự Nhiên',
        category: 'smartphone',
        originalPrice: 34990000,
        salePrice: 28990000,
        discount: 15,
        image: 'https://res.cloudinary.com/dfass7bhc/image/upload/v1769528471/iphone-15-pro-max-naturaltitanium-select-removebg-preview_kefkmq.png',
        stock: 50,
        sold: 420,
        rating: 4.9,
        reviews: 1024
    },
    {
        id: 'deal-3',
        name: 'Bàn phím cơ Keychron K2 Pro Wireless',
        category: 'keyboard',
        originalPrice: 2650000,
        salePrice: 1850000,
        discount: 30,
        image: 'https://res.cloudinary.com/dfass7bhc/image/upload/v1769528264/ban-phim-co-keychron-k2-pro-removebg-preview_dnbdbq.png',
        stock: 10,
        sold: 90,
        rating: 4.7,
        reviews: 158
    },
    {
        id: 'deal-4',
        name: 'Apple Watch Series 9 GPS 41mm',
        category: 'smartwatch',
        originalPrice: 12290000,
        salePrice: 9290000,
        discount: 25,
        image: 'https://res.cloudinary.com/dfass7bhc/image/upload/v1769528415/vn_apple_watch_series_9_cell_41mm_silver_aluminum_storm_blue_sport_band_pdp_image_position-1_2-removebg-preview_pjnobq.png',
        stock: 100,
        sold: 20,
        rating: 4.6,
        reviews: 89
    },
    {
        id: 'deal-5',
        name: 'Chuột Gaming Logitech G Pro X Superlight',
        category: 'mouse',
        originalPrice: 3000000,
        salePrice: 1500000,
        discount: 50,
        image: 'https://resource.logitechg.com/content/dam/gaming/en/products/pro-x-superlight/pro-x-superlight-black-gallery-1.png?v=1',
        stock: 3,
        sold: 85,
        rating: 4.9,
        reviews: 342
    }
];

const mockPromoProducts = [
    {
        id: 'promo-1',
        name: 'iPad Air 5 M1 Wifi 64GB',
        category: 'tablet',
        price: 14490000,
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-wifi-blue-202203?wid=940&hei=1112&fmt=jpeg&qlt=90&.v=1645068659173',
        rating: 4.5,
        reviews: 128,
        hasDiscount: false
    },
    {
        id: 'promo-2',
        name: 'Loa Bluetooth JBL Flip 6',
        category: 'speaker',
        price: 2490000,
        image: 'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw46cc380c/1_JBL_FLIP6_HERO_TEAL_29399_x1.png?sw=556&sh=680&sm=fit',
        rating: 5.0,
        reviews: 45,
        hasDiscount: false
    },
    {
        id: 'promo-3',
        name: 'Webcam Logitech C920 Pro HD',
        category: 'webcam',
        price: 1690000,
        image: 'https://resource.logitech.com/w_544,h_466,ar_7:6,c_pad,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/webcams/c920/gallery/c920-gallery-1.png?v=1',
        rating: 4.0,
        reviews: 89,
        hasDiscount: false
    },
    {
        id: 'promo-4',
        name: 'Kính thực tế ảo Meta Quest 3 128GB',
        category: 'vr',
        price: 13990000,
        image: 'https://res.cloudinary.com/dfass7bhc/image/upload/v1769528534/kinh-thuc-te-ao-meta-quest-3-128gb-removebg-preview_u9qiue.png',
        rating: 5.0,
        reviews: 12,
        hasDiscount: false
    },
    {
        id: 'promo-5',
        name: 'Sạc dự phòng Anker 20000mAh 20W',
        category: 'powerbank',
        price: 890000,
        image: 'https://res.cloudinary.com/dfass7bhc/image/upload/v1769528590/a1287-removebg-preview_ojl09x.png',
        rating: 4.5,
        reviews: 230,
        hasDiscount: false
    }
];

const mockCoupons = [
    {
        id: 'coupon-1',
        code: 'TECH50',
        title: 'Giảm 50K',
        description: 'Đơn tối thiểu 500K',
        expiryDate: '30/10',
        type: 'discount',
        color: 'blue',
        value: 50000,
        minOrder: 500000
    },
    {
        id: 'coupon-2',
        code: 'FREESHIP',
        title: 'Miễn phí vận chuyển',
        description: 'Cho mọi đơn hàng',
        expiryDate: 'Trong ngày',
        type: 'freeship',
        color: 'orange',
        value: 0,
        minOrder: 0
    },
    {
        id: 'coupon-3',
        code: 'LAPTOP',
        title: 'Giảm 1 Triệu',
        description: 'Khi mua Laptop Gaming',
        expiryDate: '31/12',
        type: 'discount',
        color: 'purple',
        value: 1000000,
        minOrder: 15000000
    }
];

const mockPromoBanners = [
    {
        id: 'banner-1',
        title: 'SUMMER TECH FEST',
        subtitle: 'Đại tiệc công nghệ mùa hè. Giảm đến 50% cho các thiết bị hàng đầu từ Apple, Samsung, Sony.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200',
        badge: 'SỰ KIỆN HOT',
        badgeColor: 'primary'
    },
    {
        id: 'banner-2',
        title: 'Laptop Gaming 2024',
        subtitle: 'Trải nghiệm hiệu năng đỉnh cao.',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800',
        badge: 'MỚI RA MẮT',
        badgeColor: 'orange'
    }
];

module.exports = {
    flashSaleDeals: mockFlashSaleDeals,
    promoProducts: mockPromoProducts,
    coupons: mockCoupons,
    promoBanners: mockPromoBanners
};