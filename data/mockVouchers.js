export const mockVouchers = [
    {
        id: 'voucher-1',
        code: 'TECH50',
        title: 'Giảm 50K',
        description: 'Đơn tối thiểu 500K',
        discount: 50000,
        minOrder: 500000,
        expiryDate: '30/10/2026',
        type: 'discount',
        color: 'blue'
    },
    {
        id: 'voucher-2',
        code: 'FREESHIP',
        title: 'Miễn phí vận chuyển',
        description: 'Cho mọi đơn hàng',
        discount: 0,
        minOrder: 0,
        expiryDate: 'Trong ngày',
        type: 'shipping',
        color: 'orange'
    },
    {
        id: 'voucher-3',
        code: 'LAPTOP',
        title: 'Giảm 1 Triệu',
        description: 'Khi mua Laptop Gaming',
        discount: 1000000,
        minOrder: 15000000,
        expiryDate: '31/12/2026',
        type: 'category',
        color: 'purple'
    },
    {
        id: 'voucher-4',
        code: 'NEWUSER',
        title: 'Giảm 100K',
        description: 'Cho khách hàng mới',
        discount: 100000,
        minOrder: 1000000,
        expiryDate: '15/11/2026',
        type: 'new-user',
        color: 'green'
    },
    {
        id: 'voucher-5',
        code: 'APPLE20',
        title: 'Giảm 20%',
        description: 'Sản phẩm Apple',
        discount: 20,
        minOrder: 5000000,
        expiryDate: '25/12/2026',
        type: 'brand',
        color: 'pink'
    },
    {
        id: 'voucher-6',
        code: 'MEGA500',
        title: 'Giảm 500K',
        description: 'Đơn từ 10 triệu',
        discount: 500000,
        minOrder: 10000000,
        expiryDate: '31/01/2027',
        type: 'mega',
        color: 'red'
    }
];
