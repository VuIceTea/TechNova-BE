export const mockNotifications = [
  {
    id: 1,
    type: 'order',
    title: 'Đơn hàng #TN1234 đang trên đường giao',
    message: 'Kiện hàng của bạn đã rời kho phân loại lúc 8:30 sáng và dự kiến sẽ được giao trong hôm nay. Vui lòng giữ điện thoại.',
    time: '2 giờ trước',
    isRead: false,
    icon: 'local_shipping',
    iconColor: 'primary',
    action: 'Theo dõi hành trình',
    group: 'today'
  },
  {
    id: 2,
    type: 'cart',
    title: 'Sản phẩm trong giỏ hàng sắp hết!',
    message: 'MacBook Air M2 trong giỏ hàng của bạn chỉ còn lại 2 sản phẩm cuối cùng. Hoàn tất đơn hàng ngay để không bỏ lỡ!',
    time: '5 giờ trước',
    isRead: false,
    icon: 'shopping_basket',
    iconColor: 'orange',
    action: 'Mua ngay',
    group: 'today'
  },
  {
    id: 3,
    type: 'promotion',
    title: 'Ưu đãi độc quyền cho bạn',
    message: 'TechNova tặng bạn mã giảm giá 15% cho dòng Laptop Gaming. Áp dụng đến hết tuần này.',
    time: 'Hôm qua',
    isRead: true,
    icon: 'celebration',
    iconColor: 'emerald',
    couponCode: 'GAMING15OFF',
    group: 'earlier'
  },
  {
    id: 4,
    type: 'account',
    title: 'Chào mừng bạn gia nhập TechNova',
    message: 'Tài khoản của bạn đã được xác thực thành công. Bắt đầu hành trình mua sắm đồ công nghệ đỉnh cao ngay thôi.',
    time: '3 ngày trước',
    isRead: true,
    icon: 'person_check',
    iconColor: 'blue',
    group: 'earlier'
  }
];
